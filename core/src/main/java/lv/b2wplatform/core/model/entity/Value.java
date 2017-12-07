package lv.b2wplatform.core.model.entity;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

public class Value {

    private BigInteger attrId;
    private String value;
    private Date dateValue;
    private BigInteger intValue;
    private BigDecimal decimalValue;

    public BigInteger getAttrId() {
        return attrId;
    }

    public void setAttrId(BigInteger attrId) {
        this.attrId = attrId;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Date getDateValue() {
        return dateValue;
    }

    public void setDateValue(Date dateValue) {
        this.dateValue = dateValue;
    }

    public BigInteger getIntValue() {
        return intValue;
    }

    public void setIntValue(BigInteger intValue) {
        this.intValue = intValue;
    }

    public BigDecimal getDecimalValue() {
        return decimalValue;
    }

    public void setDecimalValue(BigDecimal decimalValue) {
        this.decimalValue = decimalValue;
    }
}
