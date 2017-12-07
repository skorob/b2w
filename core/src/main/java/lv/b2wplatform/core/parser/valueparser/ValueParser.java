package lv.b2wplatform.core.parser.valueparser;


import lv.b2wplatform.core.model.entity.Value;

import java.math.BigInteger;


public abstract class ValueParser {




    public abstract Value parse(String value, BigInteger attrId);
}
