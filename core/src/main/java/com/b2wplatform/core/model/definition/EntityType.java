package com.b2wplatform.core.model.definition;


import java.math.BigInteger;
import java.util.List;

public class EntityType {
    private BigInteger id;
    private BigInteger parentId;
    private BigInteger entityTypeId;
    private String name;

    private List<ValueType> valueTypes;

}
