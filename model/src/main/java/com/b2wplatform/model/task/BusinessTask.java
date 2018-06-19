package com.b2wplatform.model.task;


import com.b2wplatform.model.BusinessPartner;

import javax.persistence.*;

@Entity
@Table(name = "B2W_BUSINESS_TASK")
@Inheritance(strategy = InheritanceType.JOINED)
public class BusinessTask extends Task {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_created_by_bp_id",referencedColumnName = "id")
    private BusinessPartner taskCreatedBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_assigned_to_bp_id",referencedColumnName = "id")
    private BusinessPartner taskAssignedToBusinessPartner;

}
