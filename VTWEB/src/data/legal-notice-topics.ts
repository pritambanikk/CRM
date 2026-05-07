export interface LegalNoticeTopic {
  id: string;
  slug?: string;
  title: string;
  synonyms?: string[];
  description: string;
  whatIsIt?: string[];
  consequences?: string[];
  checklist?: string[];
}

export const legalNoticeTopics: LegalNoticeTopic[] = [
  {
    id: "demand-notice-recovery-of-money",
    slug: "legal-notice-for-money-recovery",
    title: "Demand Notice for Recovery of Money",
    description:
      "Draft and send a formal demand notice to recover pending amounts with legal backing.",
    whatIsIt: [
      "A Demand Notice for Recovery of Money is a formal legal intimation sent by a creditor to a debtor, demanding the repayment of outstanding dues.",
      "It serves as a final warning before initiating civil or criminal litigation. This notice establishes a clear timeline for the debtor to clear the payment, usually 15 to 30 days.",
    ],
    consequences: [
      "Filing of a summary suit under Order 37 of the Civil Procedure Code (CPC) for fast-tracked recovery.",
      "Initiation of insolvency proceedings if the debtor is a company (under IBC, 2016).",
      "Criminal proceedings if there is an element of fraud or cheating involved.",
    ],
    checklist: [
      "Copy of the unpaid invoices or bills.",
      "Proof of delivery of goods or completion of services.",
      "Bank statements showing partial payments or bounced cheques.",
      "Any contract, agreement, or purchase order.",
      "Call logs, emails, or WhatsApp chats proving the debt acknowledgment.",
    ],
  },
  {
    id: "demand-notice-loan-repayment",
    slug: "bank-loan-settlement",
    title: "Demand Notice for Loan Repayment",
    description:
      "Issue a legal demand for repayment of a personal or business loan.",
  },
  {
    id: "dishonoured-cheque",
    slug: "cheque-bounce-legal-notice",
    title: "Notice for Dishonoured Cheque",
    synonyms: ["cheque bounce", "sec 138 ni act"],
    description:
      "Initiate action for cheque bounce under Section 138 of the NI Act.",
    whatIsIt: [
      "A Cheque Bounce Notice is a mandatory legal requirement under Section 138 of the Negotiable Instruments Act, 1881. It must be sent to the cheque issuer within 30 days of receiving the return memo from the bank.",
      "The notice gives the defaulter exactly 15 days from the date of receipt to pay the cheque amount. If they fail to pay, the payee has the right to file a criminal complaint within the next 30 days.",
    ],
    consequences: [
      "Imprisonment for a term which may extend to two years.",
      "A monetary fine which may extend to twice the amount of the bounced cheque.",
      "A permanent criminal record, ruining credit scores and future loan prospects.",
    ],
    checklist: [
      "The original dishonoured cheque.",
      "The cheque return memo provided by your bank.",
      "Copy of the legal notice sent to the defaulter.",
      "Original postal receipt and tracking delivery report of the notice.",
      "Any underlying invoice, agreement, or ledger proving the owed debt.",
    ],
  },
  {
    id: "unpaid-salary-wages",
    slug: "legal-notice-for-unpaid-salary",
    title: "Notice for Recovery of Unpaid Salary",
    description:
      "Recover unpaid salary, wages, or dues from employer with a formal notice.",
  },
  {
    id: "security-deposit-recovery",
    slug: "legal-notice-for-money-recovery",
    title: "Notice for Recovery of Security Deposit",
    description:
      "Seek refund of withheld security deposit from landlord or service provider.",
  },
  {
    id: "outstanding-invoice-dues",
    slug: "legal-notice-for-outstanding-payment",
    title: "Notice for Recovery of Outstanding Invoice/Business Dues",
    description:
      "Recover unpaid invoices and business dues from clients or vendors.",
  },
  {
    id: "professional-fees-recovery",
    slug: "legal-notice-for-outstanding-payment",
    title: "Notice for Recovery of Professional Fees",
    description: "Demand payment of outstanding professional fees.",
  },
  {
    id: "refund-from-builder",
    slug: "legal-notice-to-builder",
    title: "Notice for Refund from Builder/Developer",
    description:
      "Seek refund for project delays or deficiencies from the builder/developer.",
  },
  {
    id: "recovery-tenant-landlord",
    slug: "legal-notice-to-tenant",
    title: "Notice for Recovery from Tenant/Landlord",
    description:
      "Recover unpaid rent or dues from tenant/landlord with a legal notice.",
  },
  {
    id: "wrongful-termination",
    slug: "wrongful-termination-legal-notice",
    title: "Notice to Employer for Wrongful Termination",
    description: "Challenge unlawful dismissal with a notice to your employer.",
  },
  {
    id: "non-payment-salary-benefits",
    slug: "legal-notice-for-unpaid-salary",
    title: "Notice to Employer for Non-payment of Salary or Benefits",
    description: "Demand unpaid salary, benefits, or reimbursements.",
  },
  {
    id: "workplace-harassment",
    slug: "workplace-harassment-legal-notice",
    title: "Notice to Employer for Workplace Harassment",
    description: "Report and demand redressal for workplace harassment.",
  },
  {
    id: "employee-misconduct",
    slug: "employee-misconduct-legal-notice",
    title: "Notice to Employee for Misconduct",
    description: "Send a disciplinary notice to employee for misconduct.",
  },
  {
    id: "breach-employment-contract",
    slug: "breach-of-contract-legal-notice",
    title: "Notice to Employee for Breach of Employment Contract",
    description: "Formally notify breach of employment contract terms.",
  },
  {
    id: "absenteeism-negligence",
    slug: "employee-misconduct-legal-notice",
    title: "Notice to Employee for Absenteeism/Negligence",
    description: "Address absenteeism or negligence through a formal notice.",
  },
  {
    id: "recovery-company-assets",
    slug: "legal-notice-for-property-possession",
    title: "Notice for Recovery of Company Assets from Employee",
    description:
      "Recover company property, devices or assets from ex-employee.",
  },
  {
    id: "property-partition",
    slug: "property-partition-legal-notice",
    title: "Legal Notice for Property Partition",
    description:
      "Initiate property partition with a legal notice to co-owners.",
  },
  {
    id: "tenant-eviction",
    slug: "eviction-legal-notice",
    title: "Legal Notice for Eviction of Tenant",
    description: "Begin tenant eviction process with due legal notice.",
  },
  {
    id: "tenant-non-payment",
    slug: "legal-notice-for-rent-arrears",
    title: "Legal Notice to Tenant for Non-payment of Rent",
    description: "Demand unpaid rent from tenant through a legal notice.",
  },
  {
    id: "tenant-property-damage",
    slug: "legal-notice-to-tenant",
    title: "Legal Notice to Tenant for Property Damage",
    description: "Seek compensation for property damage from tenant.",
  },
  {
    id: "landlord-repairs",
    slug: "maintenance-legal-notice",
    title: "Legal Notice to Landlord for Repairs/Maintenance",
    description: "Request repairs or maintenance from landlord legally.",
    whatIsIt: [
      "A Legal Notice to Landlord for Repairs is a formal communication sent by a tenant when the landlord fails to maintain the property in a habitable condition as per the rent agreement.",
      "Under the Transfer of Property Act and various State Rent Control Acts, it is the landlord's statutory duty to keep the premises in good repair. This notice formally documents the request and gives a reasonable timeframe (usually 15 days) to perform the repairs.",
    ],
    consequences: [
      "Deducting the cost of repairs from the monthly rent if the tenant gets the repairs done out of pocket.",
      "Filing a complaint with the Rent Control Court/Rent Authority for deficiency of service.",
      "Terminating the lease agreement without penalty due to uninhabitable conditions.",
    ],
    checklist: [
      "Copy of the registered Rent/Leave and License Agreement.",
      "Photographs or videos of the damages/maintenance issues.",
      "Previous emails, WhatsApp messages, or letters requesting the repair.",
      "Estimates or quotations from contractors for the repair work (optional).",
    ],
  },
  {
    id: "possession-of-property",
    slug: "legal-notice-for-property-possession",
    title: "Legal Notice for Possession of Property",
    description: "Claim possession of property via legal notice.",
  },
  {
    id: "encroachment-trespassing",
    slug: "legal-notice-for-property-possession",
    title: "Legal Notice for Encroachment or Trespassing",
    description: "Stop encroachment or trespassing through a formal notice.",
  },
  {
    id: "specific-performance",
    slug: "breach-of-contract-legal-notice",
    title: "Legal Notice for Specific Performance of Property Agreement",
    description: "Enforce property agreement obligations.",
  },
  {
    id: "stop-illegal-construction",
    title: "Legal Notice to Stop Illegal Construction",
    description: "Issue a notice to halt unauthorized construction.",
  },
  {
    id: "amenities-society-builder",
    title: "Legal Notice to Society/Builder for Amenities",
    description: "Demand agreed amenities from society or builder.",
  },
  {
    id: "divorce",
    title: "Legal Notice for Divorce",
    synonyms: ["matrimonial", "family law"],
    description: "Send a legal notice prior to divorce proceedings.",
  },
  {
    id: "restitution-conjugal-rights",
    title: "Legal Notice for Restitution of Conjugal Rights",
    description: "Seek restoration of marital cohabitation.",
  },
  {
    id: "child-custody",
    title: "Legal Notice for Child Custody/Visitation Rights",
    description: "Claim child custody or visitation rights formally.",
  },
  {
    id: "domestic-violence",
    title: "Legal Notice for Domestic Violence",
    description: "Initiate action against domestic violence.",
  },
  {
    id: "maintenance-alimony",
    title: "Legal Notice for Maintenance/Alimony",
    description: "Claim maintenance or alimony through a legal notice.",
  },
  {
    id: "annulment-of-marriage",
    title: "Legal Notice for Annulment of Marriage",
    description: "Start annulment process with a legal notice.",
  },
  {
    id: "defamation",
    title: "Legal Notice for Defamation",
    description: "Demand retraction or damages for defamation.",
  },
  {
    id: "harassment-threats",
    title: "Legal Notice for Harassment/Threats",
    description: "Address harassment or threats legally.",
  },
  {
    id: "breach-of-contract",
    title: "Legal Notice for Breach of Contract",
    description: "Notify breach and demand performance or damages.",
  },
  {
    id: "termination-of-contract",
    title: "Legal Notice for Termination of Contract",
    description: "Terminate contract formally citing reasons.",
  },
  {
    id: "non-performance-of-contract",
    title: "Legal Notice for Non-performance of Contract",
    description: "Demand performance of contractual obligations.",
  },
  {
    id: "recovery-of-advance-payment",
    title: "Legal Notice for Recovery of Advance Payment",
    description: "Recover advance payments made.",
  },
  {
    id: "violation-of-nda",
    title: "Legal Notice for Violation of Non-Disclosure Agreement (NDA)",
    description: "Address NDA violations formally.",
  },
  {
    id: "recovery-supply-of-goods",
    title: "Legal Notice for Recovery in Supply of Goods/Services",
    description: "Recover dues in goods/services transactions.",
  },
  {
    id: "franchise-disputes",
    title: "Legal Notice for Franchise Disputes",
    description: "Handle franchise-related disputes legally.",
  },
  {
    id: "agency-distribution-disputes",
    title: "Legal Notice for Agency/Distribution Agreement Disputes",
    description: "Resolve agency/distribution disputes.",
  },
  {
    id: "builder-delay-possession",
    title: "Legal Notice to Builder for Delay in Possession",
    description: "Claim compensation for delayed possession.",
  },
  {
    id: "deficiency-in-service",
    title: "Legal Notice for Deficiency in Service",
    description: "Demand remedy for poor service.",
  },
  {
    id: "faulty-defective-product",
    title: "Legal Notice for Faulty/Defective Product",
    description: "Seek replacement or refund for defective product.",
  },
  {
    id: "insurance-claim-disputes",
    title: "Legal Notice for Insurance Claim Disputes",
    description: "Dispute insurance claim denials or delays.",
  },
  {
    id: "bank-loan-settlement",
    title: "Legal Notice for Bank Disputes/Loan Settlement",
    description: "Handle bank disputes and settlements.",
  },
  {
    id: "airlines-travel-disputes",
    title: "Legal Notice to Airlines/Travel Companies",
    description: "Address disputes with airlines or travel companies.",
  },
  {
    id: "telecom-internet-disputes",
    title: "Legal Notice for Telecom/Internet Service Disputes",
    description: "Resolve telecom/internet disputes legally.",
  },
  {
    id: "cheque-bounce-sec-138",
    title: "Legal Notice for Cheque Bounce (Sec 138 NI Act)",
    description: "Send a notice for cheque bounce under Sec 138 NI Act.",
  },
  {
    id: "criminal-defamation",
    title: "Legal Notice for Criminal Defamation (Sec 499 IPC / Sec 356 BNS)",
    description: "Proceed against criminal defamation.",
  },
  {
    id: "criminal-intimidation",
    title: "Legal Notice for Criminal Intimidation (Sec 506 IPC / Sec 351 BNS)",
    description: "Address threats and intimidation.",
  },
  {
    id: "recovery-of-stolen-property",
    title: "Legal Notice for Recovery of Stolen Property",
    description: "Recover stolen property through legal channels.",
  },
  {
    id: "copyright-trademark",
    title: "Legal Notice for Copyright/Trademark Infringement",
    description: "Protect IP rights through legal notice.",
  },
  {
    id: "patent-infringement",
    title: "Legal Notice for Patent Infringement",
    description: "Address patent infringement issues.",
  },
  {
    id: "data-privacy-breach",
    title: "Legal Notice for Data Privacy Breach",
    description: "Respond to data privacy breaches.",
  },
  {
    id: "cyber-defamation",
    title: "Legal Notice for Cyber Defamation or Online Harassment",
    description: "Take action for defamation/harassment online.",
  },
  {
    id: "environmental-violations",
    title: "Legal Notice for Environmental Law Violations",
    description: "Address environmental violations.",
  },
  {
    id: "arbitration-clause",
    title: "Legal Notice under Arbitration Clause",
    description: "Invoke arbitration through a legal notice.",
  },
  {
    id: "notice-to-government",
    title: "Legal Notice to Government Departments/Public Authorities",
    description: "Serve notice to government/public authorities.",
  },
];

export function getTopicById(id: string): LegalNoticeTopic | undefined {
  return legalNoticeTopics.find((t) => t.id === id);
}
