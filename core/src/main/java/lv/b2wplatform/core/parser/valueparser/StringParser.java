package lv.b2wplatform.core.parser.valueparser;


import lv.b2wplatform.core.model.entity.Value;

import java.math.BigInteger;

public class StringParser extends ValueParser {

    public Value parse(String value, BigInteger attrId) {
        Value rv = new Value();
        rv.setValue(value);
        rv.setAttrId(attrId);
        return rv;
    }

}
