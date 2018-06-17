package com.b2wplatform.core.parser;


import com.b2wplatform.core.model.definition.Type;
import com.b2wplatform.core.model.entity.Value;
import com.b2wplatform.core.parser.valueparser.ValueParser;
import com.b2wplatform.core.exception.B2WInternalException;
import com.b2wplatform.core.model.entity.Entity;
import com.b2wplatform.core.parser.valueparser.ParserContext;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.Reader;
import java.math.BigInteger;
import java.util.*;




public class FileParser {

    private final static Logger log = LoggerFactory.getLogger(FileParser.class);


    private Params params;

    private FileParser(Params params) {
        this.params = params;
    }

    public ParseResult parse() {
        List<Entity> entities = new ArrayList<Entity>();
        List<ParseError> errors = new ArrayList<ParseError>();


        int rowNumber = 0;
        int colNumber = 0;
        try {
            Reader in = new FileReader(params.fileName);
            Iterable<CSVRecord> records = CSVFormat.EXCEL.withDelimiter(';').parse(in);

            ParserContext parserContext= new ParserContext();
            log.info("Start parsing file {} ", this.params.fileName);

            for (CSVRecord record : records) {
                try {
                    rowNumber++;
                    if (this.params.skipHeader && rowNumber == 1) {
                        continue;
                    }

                    Entity entity = new Entity();

                    Collection<ColumnInfo> values = this.params.fieldsToParse.values();
                    for (ColumnInfo columnInfo : values) {
                        colNumber = columnInfo.ix;
                        String strValue = record.get(colNumber - 1);
                        ValueParser valueParser = parserContext.defineParserByType(columnInfo.type);
                        Value value = valueParser.parse(strValue, columnInfo.attrId);
                        entity.setValue(value);
                    }
                    entities.add(entity);
                } catch (Exception e) {
                    log.error("Error while parsing file {}. Error message {} ", this.params.fileName, e.getMessage());
                    ParseError error = new ParseError();
                    error.setRowNumber(rowNumber);
                    error.setColumnNumber(colNumber);
                    error.setError(e.getMessage());
                    errors.add(error);
                }
            }

            log.info("Finish parsing file {} ", this.params.fileName);
            return new ParseResult(entities, errors);
        } catch (Exception e) {
            throw new B2WInternalException(e);
        }
    }

    public static class Params {
        private String fileName;
        Map<Integer, ColumnInfo> fieldsToParse = new HashMap<Integer, ColumnInfo>();
        private boolean skipHeader = false;

        public Params withField(int ix, BigInteger attrId, Type type) {
            ColumnInfo columnInfo = new ColumnInfo();
            columnInfo.attrId = attrId;
            columnInfo.type = type;
            columnInfo.ix = ix;
            fieldsToParse.put(ix, columnInfo);
            return this;
        }

        public Params withFileName(String fileName) {
            this.fileName = fileName;
            return this;
        }

        public Params withSkipHeader() {
            this.skipHeader = true;
            return this;
        }

        public FileParser create() {
            return new FileParser(this);
        }
    }

    private static class ColumnInfo {
        private Type type;
        private BigInteger attrId;
        private int ix;
    }
}
