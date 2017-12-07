package lv.b2wplatform.core.parser.valueparser;


import lv.b2wplatform.core.model.entity.Value;

import java.math.BigDecimal;
import java.math.BigInteger;

public class DecimalParser extends ValueParser {

    public Value parse(String value, BigInteger attrId) {
        Value rv = new Value();
        if(value!=null) {
            rv.setDecimalValue(new BigDecimal(value));
        }
        rv.setAttrId(attrId);
        return rv;
    }

}
