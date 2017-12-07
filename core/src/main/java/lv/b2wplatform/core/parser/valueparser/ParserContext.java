package lv.b2wplatform.core.parser.valueparser;


import lv.b2wplatform.core.model.definition.Type;
import lv.b2wplatform.core.exception.B2WException;
import lv.b2wplatform.core.exception.B2WInternalException;

import java.util.HashMap;
import java.util.Map;

public class ParserContext {

    private Map<Type, ValueParser> attrParsers = new HashMap<>();

    static final Map<Type, Class<? extends ValueParser>> valueParsersDefs = new HashMap<>();
    static {
        valueParsersDefs.put(Type.DECIMAL, DecimalParser.class);
        valueParsersDefs.put(Type.STRING, StringParser.class);
        valueParsersDefs.put(Type.INTEGER, IntegerParser.class);
    }

    public ValueParser defineParserByType(Type type) {

        ValueParser valueParser = attrParsers.get(type);
        if(valueParser==null) {
            Class<? extends ValueParser> aClass = valueParsersDefs.get(type);
            try {
                valueParser = (ValueParser) aClass.getConstructors()[0].newInstance();
                attrParsers.put(type, valueParser);
            } catch (Exception e) {
                throw new B2WException(e);
            }
        }
        if(valueParser==null) {
            throw new B2WInternalException("The value parser not found for type ["+type+"]");
        }

        return valueParser;
    }


}
