package com.b2wplatform.model.delivery;


import com.b2wplatform.model.PlatformEntity;

import java.util.List;

public class Delivery extends PlatformEntity{

    private List<DeliveryItem> deliveryItems;

    public List<DeliveryItem> getDeliveryItems() {
        return deliveryItems;
    }

    public void setDeliveryItems(List<DeliveryItem> deliveryItems) {
        this.deliveryItems = deliveryItems;
    }
}
