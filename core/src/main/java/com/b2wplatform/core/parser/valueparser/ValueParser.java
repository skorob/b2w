package com.b2wplatform.core.parser.valueparser;


import com.b2wplatform.core.model.entity.Value;

import java.math.BigInteger;


public abstract class ValueParser {




    public abstract Value parse(String value, BigInteger attrId);
}
