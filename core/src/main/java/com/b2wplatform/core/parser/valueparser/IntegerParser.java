package com.b2wplatform.core.parser.valueparser;


import com.b2wplatform.core.model.entity.Value;

import java.math.BigInteger;

public class IntegerParser extends ValueParser {

    public Value parse(String value, BigInteger attrId) {
        Value rv = new Value();
        if(value!=null) {
            rv.setIntValue(new BigInteger(value));
        }
        rv.setAttrId(attrId);
        return rv;
    }

}
