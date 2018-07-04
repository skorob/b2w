package enums;

public enum LocationType {
    COUNTRY((byte)0),  MUNICIPALITY((byte)1), PARISH((byte)2), VILLAGE((byte)3), CITY((byte)4),  STREET((byte)5), BUILDING_NR((byte)6);

    private byte hierarchy;


    LocationType(byte hierarchy) {
        this.hierarchy = hierarchy;
    }

    public static  LocationType[] defineChildByParentType(LocationType locationType) {
        if(locationType==null) {
            return new LocationType[]{LocationType.CITY};
        }

        if (locationType == LocationType.COUNTRY) {
            return new LocationType[]{LocationType.MUNICIPALITY};
        }

        if(locationType == LocationType.MUNICIPALITY) {
            return new LocationType[]{PARISH};
        }

        if(locationType == LocationType.PARISH) {
            return new LocationType[]{VILLAGE};
        }

        if(locationType == LocationType.CITY || locationType == LocationType.VILLAGE) {
            return new LocationType[]{STREET, BUILDING_NR};
        }
        if(locationType == LocationType.STREET) {
            return new LocationType[]{BUILDING_NR};
        }
        return null;
    }

    public byte getHierarchy() {
        return hierarchy;
    }
}
