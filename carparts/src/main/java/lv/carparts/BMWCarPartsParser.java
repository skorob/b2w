package lv.carparts;

import lv.b2wplatform.core.model.definition.Type;
import lv.b2wplatform.core.parser.FileParser;
import lv.b2wplatform.core.parser.ParseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BMWCarPartsParser {


    private final static Logger log = LoggerFactory.getLogger(BMWCarPartsParser.class);
    
    public ParseResult parse() {
        FileParser fileParser = new FileParser.Params().withFileName("D:\\Projects\\Java\\CarParts\\BMW-DE.csv").
                withField(1, Constants.CAR_PART.ATTR_CAR_PART_ID, Type.STRING).
                withField(2, Constants.CAR_PART.ATTR_CAR_PART_NAME, Type.STRING).
                withField(3, Constants.CAR_PART.ATTR_CAR_PART_RB_GROUP, Type.STRING).
                withSkipHeader()
                .create();
        return fileParser.parse();

    }

}
