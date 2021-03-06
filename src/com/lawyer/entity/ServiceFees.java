package com.lawyer.entity;

// Generated Aug 7, 2013 11:09:49 PM by Hibernate Tools 3.4.0.CR1

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * ServiceFees generated by hbm2java
 */
@Entity
@Table(name = "service_fees")
public class ServiceFees implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private ServiceFeesId id;
	private Lawyer lawyer;
	private Float fees;

	public ServiceFees() {
	}

	public ServiceFees(ServiceFeesId id, Lawyer lawyer) {
		this.id = id;
		this.lawyer = lawyer;
	}

	public ServiceFees(ServiceFeesId id, Lawyer lawyer, Float fees) {
		this.id = id;
		this.lawyer = lawyer;
		this.fees = fees;
	}

	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "lawyerId", column = @Column(name = "lawyer_id", nullable = false)),
			@AttributeOverride(name = "service", column = @Column(name = "service", nullable = false, length = 20)) })
	public ServiceFeesId getId() {
		return this.id;
	}

	public void setId(ServiceFeesId id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "lawyer_id", nullable = false, insertable = false, updatable = false)
	public Lawyer getLawyer() {
		return this.lawyer;
	}

	public void setLawyer(Lawyer lawyer) {
		this.lawyer = lawyer;
	}

	@Column(name = "fees", precision = 12, scale = 0)
	public Float getFees() {
		return this.fees;
	}

	public void setFees(Float fees) {
		this.fees = fees;
	}

}
