package lv.b2wplatform.core.model.entity;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

public class Entity {
    private BigInteger id;
    private BigInteger parentId;
    private BigInteger classId;
    private String name;
    private Map<BigInteger, Value> values = new HashMap<BigInteger, Value>();
    private Map<BigInteger, MultiValue> multiValueMap = new HashMap<BigInteger, MultiValue>();

    public void setDecimalValue(BigInteger attrId, BigDecimal value) {
        Value vl = new Value();
        vl.setAttrId(attrId);
        vl.setDecimalValue(value);
        values.put(vl.getAttrId(), vl);
    }

    public void setValue(Value value) {
        values.put(value.getAttrId(), value);
    }
1

}
