export interface AgreementToSellTemplate {
  slug: string;
  /** Display name shown in H1, breadcrumb, payment description */
  documentName: string;
  /** Short label used in card headings, e.g. "Agricultural Land" */
  shortLabel: string;
  /** SEO meta title — keep under 60 chars where possible */
  metaTitle: string;
  /** SEO meta description — keep under 160 chars */
  metaDescription: string;
  /** Primary keyword the page targets */
  focusKeyword: string;
  /** Long-tail variations and semantic keywords */
  secondaryKeywords: string[];
  /** Hero subheading shown beneath H1 */
  heroSubheading: string;
  /** 1–2 sentence summary of the legal scenario this variant covers */
  scenario: string;
  /** Bullet list — who this template is for */
  whoNeeds: string[];
  /** Bullet list — when this exact variant should be used */
  whenToUse: string[];
  /** Bullet list — risks of using a generic format instead of this one */
  risksOfGenericFormat: string[];
  /** Clauses included in the editable Word file */
  clausesIncluded: string[];
  /** Per-variant preview to demonstrate quality without giving the doc away */
  preview: {
    titleLine: string;
    recitals: string[];
    clauseSnippets: { number: string; title: string; body: string; pageNumber: number }[];
  };
  /** 3–5 FAQs specific to this variant (shared FAQs are added separately) */
  faqs: { question: string; answer: string }[];
  /** Last reviewed date — drives freshness signal */
  lastReviewed: string;
}

export const AGREEMENT_TO_SELL_TEMPLATES: AgreementToSellTemplate[] = 
[
  {
    "slug": "unregistered-flat-cooperative-housing-share-transfer",
    "documentName": "Agreement to Sell of Unregistered Flat in Cooperative Housing Society via Share Certificate Transfer",
    "shortLabel": "Cooperative Flat - Share Transfer",
    "metaTitle": "Cooperative Housing Flat Agreement to Sell - Share Transfer Template ₹49",
    "metaDescription": "Legal Agreement to Sell template for unregistered flats in cooperative housing societies with share certificate transfer. Covers conveyance deed registration issues. Download now.",
    "focusKeyword": "agreement to sell cooperative housing flat share transfer",
    "secondaryKeywords": [
      "cooperative society property sale",
      "share certificate transfer agreement",
      "unregistered flat sale",
      "cooperative housing conveyance",
      "share transfer agreement template"
    ],
    "heroSubheading": "Protect your cooperative flat sale with a specialized agreement that handles share certificate transfers and unregistered conveyance deeds—ensuring smooth title transfer without registration delays.",
    "scenario": "Selling an unregistered flat in a cooperative housing society where the conveyance deed hasn't been registered by the society yet. The sale is completed through transfer of share certificate and allotment letter.",
    "whoNeeds": [
      "Cooperative society members selling residential flats",
      "Sellers with unregistered cooperative properties",
      "Buyers acquiring cooperative housing units",
      "Property registrars handling cooperative transfers"
    ],
    "whenToUse": [
      "When selling a flat in a cooperative housing complex",
      "If the society's conveyance deed is still pending registration",
      "For share certificate and allotment-based transfers",
      "To ensure buyer gets proper share transfer documentation"
    ],
    "risksOfGenericFormat": [
      "Generic templates don't address cooperative society-specific regulations",
      "Missing share certificate transfer provisions can invalidate the sale",
      "Unregistered conveyance deeds require special handling—generic forms omit this",
      "Cooperative society bylaws may not be reflected in standard agreements"
    ],
    "clausesIncluded": [
      "Share certificate transfer and allotment letter provisions",
      "Handling of unregistered conveyance deed status",
      "Cooperative society secretary's consent and duties",
      "Share value and transfer fee payment terms",
      "Indemnity for unregistered conveyance deed",
      "Delivery of share certificate and allotment letter",
      "Society's role in transfer completion",
      "Default and penalty clauses for incomplete transfer"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF FLAT IN COOPERATIVE HOUSING SOCIETY",
      "recitals": [
        "WHEREAS the Seller is the registered holder of Share Certificate No. _____ in ______ Cooperative Housing Society Ltd., representing Flat No. _____ situated at _______",
        "WHEREAS the Seller is desirous of selling the said flat to the Buyer through transfer of share certificate and allotment letter, and the Buyer is willing to purchase the same on the terms and conditions hereinafter contained"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Share Certificate and Allotment Letter",
          "body": "The Seller shall transfer the share certificate and deliver the allotment letter to the Buyer. The share certificate shall be transferred in the name of the Buyer in the records of the Society within 30 days of payment.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Conveyance Deed Status",
          "body": "The Seller acknowledges that the Society's conveyance deed is not yet registered. The Buyer shall have the right to obtain the registration at the Seller's cost after taking possession of the flat.",
          "pageNumber": 2
        },
        {
          "number": "8",
          "title": "Society's Consent and Charges",
          "body": "The Seller shall obtain the no-objection certificate from the Society. Transfer fee, if any, shall be paid by the Buyer. The Society's NOC and approval are conditions precedent to completion.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is the difference between this agreement and a regular apartment sale agreement?",
        "answer": "This agreement specifically addresses share certificate transfers and unregistered conveyance deeds unique to cooperative housing. It includes provisions for cooperative society consent, share transfer procedures, and handling of pending registrations."
      },
      {
        "question": "Can the buyer get the conveyance deed registered after purchasing through share transfer?",
        "answer": "Yes, this agreement allows the buyer to obtain conveyance deed registration at the seller's cost after taking possession. The agreement explicitly covers the timeline and responsibility for this registration."
      },
      {
        "question": "What happens if the society refuses to transfer the share certificate?",
        "answer": "The agreement includes default clauses allowing the buyer to cancel and recover the entire amount paid. Seller is responsible for obtaining society approval before finalizing the agreement."
      },
      {
        "question": "Are there any additional charges beyond the purchase price?",
        "answer": "Cooperative societies typically charge transfer fees. This agreement clarifies that such fees are the buyer's responsibility and must be paid to the society during the transfer process."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "unregistered-commercial-flat-inherited-succession-builder-transfer",
    "documentName": "Agreement to Sell (Irrevocable) of Unregistered Inherited Commercial Flat via Builder Transfer",
    "shortLabel": "Inherited Commercial Flat - Builder Transfer",
    "metaTitle": "Inherited Commercial Flat Agreement to Sell - Builder Records ₹49",
    "metaDescription": "Irrevocable agreement for selling inherited commercial flats without builder registration. Includes succession court decree provisions and builder record transfer clauses.",
    "focusKeyword": "agreement to sell inherited commercial flat builder transfer",
    "secondaryKeywords": [
      "inherited property sale agreement",
      "commercial flat succession",
      "builder record transfer",
      "unregistered inherited flat",
      "court decree property sale"
    ],
    "heroSubheading": "Sell inherited commercial property with confidence using an agreement designed for succession-acquired flats sold via builder records—addressing court decrees and unregistered title complexities.",
    "scenario": "Selling an unregistered commercial flat inherited through succession under a court decree. The flat is not yet registered by the builder but is being sold through transfer in the builder's records.",
    "whoNeeds": [
      "Heirs selling inherited commercial properties",
      "Sellers with court-decreed inherited flats",
      "Buyers purchasing succession properties",
      "Legal representatives of deceased property owners"
    ],
    "whenToUse": [
      "For inherited commercial flats not yet registered by builder",
      "When selling through builder record transfers only",
      "If succession is established through court decree",
      "To make the agreement irrevocable and binding"
    ],
    "risksOfGenericFormat": [
      "Generic agreements lack succession-specific compliance clauses",
      "Court decree requirements not addressed in standard templates",
      "Builder record transfers have unique legal implications missed by generic forms",
      "Inheritance tax and succession duty provisions are often omitted"
    ],
    "clausesIncluded": [
      "Reference to succession court decree and inheritance validity",
      "Irrevocable sale provisions preventing withdrawal",
      "Builder record transfer and registration procedures",
      "Seller's authority to sell inherited property",
      "Court decree exhibition and verification clause",
      "Builder's role in completing the transfer",
      "Inheritance tax and succession duty responsibilities",
      "Indemnity for unregistered inherited property"
    ],
    "preview": {
      "titleLine": "IRREVOCABLE AGREEMENT TO SELL OF INHERITED COMMERCIAL FLAT",
      "recitals": [
        "WHEREAS the Seller inherited the commercial flat situated at _______ from the deceased _______ vide Court Decree dated _______ in succession proceedings",
        "WHEREAS the said commercial flat remains unregistered but is recorded in the builder's records, and the Seller wishes to sell the same to the Buyer through transfer in the builder's records"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Inheritance and Court Authority",
          "body": "The Seller is the legal heir as per the succession court decree dated _______. The Seller hereby exhibits the certified copy of the court decree and confirms the right to sell this inherited property.",
          "pageNumber": 1
        },
        {
          "number": "5",
          "title": "Irrevocable Sale",
          "body": "This agreement is irrevocable and binding on both parties. The Seller cannot withdraw from this sale under any circumstances after execution hereof.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Builder Transfer and Recording",
          "body": "The Seller shall direct the builder to transfer the commercial flat in the buyer's name in the builder's records within 45 days of receipt of full consideration.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What does 'irrevocable' mean in this agreement?",
        "answer": "Irrevocable means the seller cannot cancel or withdraw from the sale once the agreement is signed. This provides maximum security to the buyer for inherited properties with complex title issues."
      },
      {
        "question": "Is the court decree essential for this agreement to be valid?",
        "answer": "Yes, the court decree establishing inheritance is crucial. This agreement requires the seller to exhibit the certified copy of the decree, which establishes the seller's legal right to sell."
      },
      {
        "question": "Can the buyer get a registered deed after buying through builder records?",
        "answer": "Once the builder completes registration of the property, the buyer can apply for conveyance deed registration. However, this agreement handles transfers through builder records if registration hasn't occurred yet."
      },
      {
        "question": "Who is responsible for inheritance taxes and succession duties?",
        "answer": "This agreement clarifies that the seller is responsible for all inheritance taxes and succession duties related to the inheritance. Buyers should verify tax compliance before purchase."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "commercial-basement-ground-floor-leased-bank-irrevocable",
    "documentName": "Agreement to Sell and Purchase (Irrevocable) by Company - Commercial Basement and Ground Floor Leased to Bank",
    "shortLabel": "Commercial Building - Bank Leased",
    "metaTitle": "Commercial Basement Ground Floor Sale Agreement - Bank Leased ₹49",
    "metaDescription": "Irrevocable agreement for selling commercial basement and ground floor already leased to bank. Includes lessee rights, lease continuity, and company sale provisions.",
    "focusKeyword": "agreement to sell commercial building leased to bank",
    "secondaryKeywords": [
      "commercial property lease sale",
      "bank-leased commercial space",
      "basement ground floor sale",
      "corporate property agreement",
      "existing lease transfer"
    ],
    "heroSubheading": "Sell your bank-leased commercial property with an irrevocable agreement that protects lease continuity, manages lessee rights, and ensures smooth title transfer for company-owned buildings.",
    "scenario": "A company selling commercial basement and ground floor premises that are already leased to a bank. The sale is irrevocable and includes management of existing lease obligations.",
    "whoNeeds": [
      "Companies divesting commercial real estate",
      "Building owners with existing bank leases",
      "Buyers acquiring income-generating properties",
      "Real estate investors seeking leased commercial spaces"
    ],
    "whenToUse": [
      "When selling commercial property with active bank tenancy",
      "For irrevocable sale agreements on company property",
      "If buyer intends to continue the existing bank lease",
      "To ensure lease terms are transferred to new owner"
    ],
    "risksOfGenericFormat": [
      "Generic templates don't address lessee protection clauses required by banks",
      "Company ownership transfers have distinct legal implications",
      "Lease continuity provisions are often missing from standard agreements",
      "Bank lease terms and restrictions may not be properly documented"
    ],
    "clausesIncluded": [
      "Irrevocable sale provisions for company property",
      "Existing lease agreement and terms disclosure",
      "Bank lessee's rights and lease continuity assurance",
      "Company's authority to sell leased property",
      "Lease deed exhibition and verification",
      "Rent collection and receivables transfer",
      "Security deposit and escrow arrangements",
      "Indemnity for lease obligations and lessee disputes"
    ],
    "preview": {
      "titleLine": "IRREVOCABLE AGREEMENT TO SELL AND PURCHASE OF COMMERCIAL PROPERTY",
      "recitals": [
        "WHEREAS _______ (Company) is the registered owner of commercial basement and ground floor premises situated at _______",
        "WHEREAS the said premises are let out to _______ Bank vide Registered Lease Deed dated _______ for a term of _______ years at an annual rent of Rs. _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Irrevocable Sale Covenant",
          "body": "The Company hereby covenants that this sale is irrevocable and unconditional. The Company shall not withdraw or cancel this agreement under any circumstances whatsoever.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Lease Agreement and Lessee Rights",
          "body": "The seller exhibits the Registered Lease Deed dated _______. The buyer accepts the property subject to the existing lease. All lessee rights and lease terms shall be transferred to and binding upon the buyer.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Rent and Income Transfer",
          "body": "All rent accrued up to the date of possession shall be the property of the seller. From the date of possession onwards, all rent shall belong to the buyer. The buyer shall step into the seller's shoes regarding lease collection.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Does the buyer have to continue the lease with the bank?",
        "answer": "Yes, the agreement transfers the existing lease to the buyer. The buyer becomes the new lessor and must honor all terms of the existing lease until its expiration or renewal."
      },
      {
        "question": "What happens if the bank wants to terminate the lease?",
        "answer": "This agreement includes clauses protecting the bank's rights as lessee. Any lease termination must follow the terms in the original lease deed. The buyer inherits all lessee disputes or issues."
      },
      {
        "question": "Who collects rent after the sale?",
        "answer": "The agreement clearly divides rent. The seller receives rent accrued until possession date; the buyer receives all rent from possession date onwards. A handover statement is prepared to record this division."
      },
      {
        "question": "What is the security deposit arrangement?",
        "answer": "The existing security deposit held by the seller is transferred to the buyer as consideration for lease assumption. This is typically held in escrow or transferred directly to the buyer."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "commercial-basement-ground-floor-leased-bank-revocable",
    "documentName": "Agreement to Sell and Purchase by Company - Commercial Basement and Ground Floor Leased to Bank",
    "shortLabel": "Commercial Building - Bank Lease",
    "metaTitle": "Commercial Property Sale Agreement - Bank-Leased Basement Floor ₹49",
    "metaDescription": "Agreement for selling commercial basement and ground floor leased to bank. Covers lease transfer, rent allocation, and company ownership transfer provisions.",
    "focusKeyword": "commercial property sale agreement bank leased",
    "secondaryKeywords": [
      "commercial space lease sale",
      "company property agreement",
      "existing lease transfer",
      "bank tenant agreement",
      "commercial building conveyance"
    ],
    "heroSubheading": "Transfer your income-producing commercial property with a comprehensive agreement that manages lease continuity, handles rent allocation, and ensures clean title transfer from company to buyer.",
    "scenario": "A company selling commercial basement and ground floor premises already leased to a bank. This revocable agreement allows flexibility while protecting both lease and ownership transfer.",
    "whoNeeds": [
      "Companies liquidating commercial assets",
      "Property investors with bank-leased spaces",
      "Buyers seeking established rental income",
      "Corporate real estate portfolio managers"
    ],
    "whenToUse": [
      "For commercial property sale with active bank lease",
      "When company wants revocable agreement flexibility",
      "If buyer will continue managing the bank lease",
      "To document rent and income transition"
    ],
    "risksOfGenericFormat": [
      "Standard forms don't address bank-specific lease continuity requirements",
      "Company liability post-sale is often inadequately addressed",
      "Rent allocation between seller and buyer may be unclear",
      "Lessee protection standards required by banks are frequently omitted"
    ],
    "clausesIncluded": [
      "Company's authority and capacity to sell",
      "Existing bank lease terms and exhibit",
      "Lease continuity and lessee rights protection",
      "Rent and income allocation provisions",
      "Security deposit handling and transfer",
      "Company's indemnity for lease compliance",
      "Possession and delivery timeline",
      "Breach and termination provisions"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL AND PURCHASE OF COMMERCIAL PREMISES",
      "recitals": [
        "WHEREAS _______ Company Ltd. is the registered owner of commercial basement and ground floor premises at _______",
        "WHEREAS the premises are leased to _______ Bank under Registered Lease Deed dated _______ with annual rent of Rs. _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Company Authority to Sell",
          "body": "The Company hereby confirms its authority to sell the property under its Board Resolution dated _______. The Board has authorized the execution of this agreement.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Lease Terms and Assumptions",
          "body": "The Buyer accepts the property subject to the existing lease. The lease deed is hereby exhibited and the Buyer agrees to assume all lessee relationships, maintenance obligations, and lease terms.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Rent Division and Collection",
          "body": "Rent accrued until possession date is the seller's property. The buyer collects rent from possession date forward. The parties shall execute a rent statement documenting this division.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can the company still withdraw from this agreement?",
        "answer": "Yes, since this is a revocable agreement (unlike the irrevocable version), the company retains the ability to withdraw subject to the terms and conditions specified in the agreement regarding notice and damages."
      },
      {
        "question": "What are the buyer's obligations to the bank tenant?",
        "answer": "The buyer becomes the new lessor immediately upon taking possession. This means the buyer must honor all lease terms, collect rent, provide maintenance services, and handle any disputes with the bank as per the original lease agreement."
      },
      {
        "question": "How is the security deposit handled?",
        "answer": "The existing security deposit is typically transferred from the seller to the buyer as part of the sale consideration. The buyer holds this deposit as lessor and must return it upon lease termination as per lease terms."
      },
      {
        "question": "What if the bank defaults on rent payments?",
        "answer": "The buyer becomes responsible for rent collection and enforcement after taking possession. The agreement typically includes indemnity clauses protecting the buyer for rent defaults occurring after possession."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-development-authority-allotment-conveyance",
    "documentName": "Agreement to Sell by Company - Residential Plot from Development Authority with Allotment and Conveyance Deed",
    "shortLabel": "Development Authority Plot - Conveyance",
    "metaTitle": "Residential Plot Sale Agreement - Development Authority Allotment ₹49",
    "metaDescription": "Agreement for selling development authority allotted residential plots. Includes allotment letter, conveyance deed, and authority clearance provisions.",
    "focusKeyword": "residential plot agreement to sell development authority",
    "secondaryKeywords": [
      "development authority property",
      "allotment letter transfer",
      "government plot sale",
      "conveyance deed agreement",
      "residential plot conveyance"
    ],
    "heroSubheading": "Sell your development authority-allotted plot with an agreement that properly documents allotment letter transfer, conveyance deed registration, and government authority clearances.",
    "scenario": "A company selling a residential plot allotted by a development authority. The plot was originally allotted via allotment letter and later conveyed through a conveyance deed.",
    "whoNeeds": [
      "Companies selling government-allotted properties",
      "Development authority allottees transferring plots",
      "Buyers acquiring plotted properties",
      "Real estate developers purchasing residential land"
    ],
    "whenToUse": [
      "For plots originally allotted by development authorities",
      "When selling with registered conveyance deed",
      "If seller acquired plot through formal allotment process",
      "To document proper title chain with government authorities"
    ],
    "risksOfGenericFormat": [
      "Development authority-specific regulations are not covered in generic templates",
      "Allotment letter procedures and transfer requirements are often missed",
      "Government clearances and no-objection certificates are frequently omitted",
      "Conveyance deed registration timelines vary by authority and require expertise"
    ],
    "clausesIncluded": [
      "Development authority allotment letter and reference",
      "Registered conveyance deed details and exhibition",
      "Company's title chain and ownership continuity",
      "Development authority clearance and NOC",
      "Transfer of allotment rights to buyer",
      "Delivery of conveyance deed and allotment letter",
      "Outstanding dues and property tax clearance",
      "Indemnity for authority-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL PLOT ALLOTTED BY DEVELOPMENT AUTHORITY",
      "recitals": [
        "WHEREAS _______ Company was allotted residential plot bearing plot number _______ by _______ Development Authority vide Allotment Letter dated _______",
        "WHEREAS the Company obtained Registered Conveyance Deed dated _______ in respect of the said plot from the Development Authority"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Allotment and Conveyance Details",
          "body": "The Company hereby exhibits the Allotment Letter dated _______ and Registered Conveyance Deed dated _______. The buyer shall receive both original documents duly transferred to his name.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Development Authority Clearances",
          "body": "The Company shall obtain and provide a No-Objection Certificate from the Development Authority confirming clearance of all dues and compliance with allotment conditions.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Property Tax and Outstanding Dues",
          "body": "The Company shall clear all property tax, assessment charges, and other governmental dues on or before the date of possession. The buyer shall have the right to verify clearance before accepting possession.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is the difference between an allotment letter and a conveyance deed?",
        "answer": "The allotment letter is the initial document given by the authority allocating the plot to the applicant. The conveyance deed is the formal registered document transferring ownership. This agreement covers both to ensure complete title transfer."
      },
      {
        "question": "Do I need to verify the plot's status with the development authority?",
        "answer": "Yes, absolutely. Before signing, verify that all authority dues are cleared, allotment conditions are satisfied, and the conveyance deed is properly registered. This agreement includes a clause for authority NOC verification."
      },
      {
        "question": "What happens if there are outstanding property taxes?",
        "answer": "The agreement specifies that the seller must clear all property taxes before possession. If taxes are outstanding, the buyer can reject possession until they are cleared. This protects the buyer from inheriting tax liabilities."
      },
      {
        "question": "Can the development authority challenge the sale later?",
        "answer": "The agreement includes indemnity clauses protecting the buyer against authority challenges. The seller warrants that all allotment conditions have been satisfied and provides indemnity for any authority disputes."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "shop-office-flat-company-sale",
    "documentName": "Agreement to Sell by Company - Shop/Office Flat",
    "shortLabel": "Commercial Shop/Office Flat",
    "metaTitle": "Shop Office Flat Sale Agreement - Company Sale Template ₹49",
    "metaDescription": "Agreement for selling commercial shop or office flats by company. Includes usage restrictions, commercial compliance, and title verification provisions.",
    "focusKeyword": "shop office flat agreement to sell",
    "secondaryKeywords": [
      "commercial shop sale agreement",
      "office flat sale",
      "retail space agreement",
      "commercial property transfer",
      "shop and office agreement"
    ],
    "heroSubheading": "Sell commercial shop or office space with a specialized agreement that addresses commercial use restrictions, compliance requirements, and proper title documentation.",
    "scenario": "A company selling shop or office flat units in a commercial building or complex.",
    "whoNeeds": [
      "Builders and developers selling retail/office units",
      "Companies divesting commercial properties",
      "Retail investors buying commercial spaces",
      "Small business owners acquiring shop space"
    ],
    "whenToUse": [
      "For sale of commercial shop units",
      "When selling office flat spaces",
      "For mixed-use commercial properties",
      "When buyer will operate a business from the space"
    ],
    "risksOfGenericFormat": [
      "Commercial use restrictions specific to zoning are often omitted",
      "Municipal compliance and commercial licensing requirements are frequently missed",
      "Shop/office-specific common area maintenance clauses are inadequate",
      "Commercial tenant-related obligations may not be properly documented"
    ],
    "clausesIncluded": [
      "Company's ownership and title documentation",
      "Commercial use restrictions and permitted activities",
      "Municipal clearance and commercial licensing",
      "Common area maintenance and service charge obligations",
      "Floor space index and building bye-laws compliance",
      "Signage and advertising rights",
      "Parking and loading area usage",
      "Indemnity for commercial regulatory compliance"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF SHOP/OFFICE FLAT",
      "recitals": [
        "WHEREAS _______ Company is the registered owner of Shop/Office Flat No. _______ in the commercial complex situated at _______",
        "WHEREAS the Company desires to sell the said shop/office flat to the Buyer and the Buyer is willing to purchase the same"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Commercial Use Declaration",
          "body": "The property is exclusively for commercial use. The buyer shall not convert it into residential use. All municipal restrictions on commercial use shall be binding on the buyer.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Common Area and Service Charges",
          "body": "The buyer shall pay proportionate common area maintenance charges and building service charges as per the bylaws. Current outstanding charges shall be the responsibility of the seller.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Municipal Compliance and Licensing",
          "body": "The buyer shall obtain all municipal clearances and commercial licenses required to operate business from the premises. The seller shall provide necessary documents and cooperation.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can I use the shop/office flat for residential purposes?",
        "answer": "No, the agreement restricts use to commercial purposes only. Converting to residential use violates municipal laws and the property bylaws, and you would be in breach of the agreement."
      },
      {
        "question": "Who is responsible for building maintenance and service charges?",
        "answer": "The buyer becomes responsible for service charges from the possession date. The agreement specifies that all charges accrued before possession are the seller's responsibility."
      },
      {
        "question": "What municipal clearances do I need to obtain?",
        "answer": "You'll need municipal approval for the business activity you intend to operate. This includes shop licensing, health permits (if applicable), and signage approval. The seller must provide cooperation but the buyer obtains these post-purchase."
      },
      {
        "question": "Are there restrictions on what business I can operate?",
        "answer": "Yes, depending on the complex bylaws and zoning regulations. Some buildings restrict certain businesses (industrial, manufacturing, hazardous). Verify with the builder and municipal corporation before purchase."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "leased-subdivided-office-unit-company-sale",
    "documentName": "Agreement to Sell by Company - Already Leased Subdivided Office Unit",
    "shortLabel": "Leased Subdivided Office Unit",
    "metaTitle": "Leased Office Unit Sale Agreement - Subdivision Template ₹49",
    "metaDescription": "Agreement for selling already-leased subdivided office units. Addresses subdivision legality, existing lease continuity, and builder subdivision memorandum.",
    "focusKeyword": "leased subdivided office unit sale agreement",
    "secondaryKeywords": [
      "subdivided office space sale",
      "leased office transfer",
      "office unit subdivision",
      "existing lease office property",
      "subdivision agreement"
    ],
    "heroSubheading": "Sell your leased subdivided office unit with an agreement that validates the subdivision, ensures lease continuity, and protects both income-generation and title clarity.",
    "scenario": "A company selling an already-leased subdivided office unit that was created by subdividing a larger office space previously purchased from the builder.",
    "whoNeeds": [
      "Companies subdividing and selling office units",
      "Office space landlords with existing tenants",
      "Real estate investors with subdivided properties",
      "Sellers maintaining rental income through transfer"
    ],
    "whenToUse": [
      "When selling subdivided office spaces with tenants",
      "If the unit is already leased and income-generating",
      "When subdivision was done pursuant to builder memorandum",
      "To transfer existing lease relationship to new owner"
    ],
    "risksOfGenericFormat": [
      "Subdivision legality and authority approval are frequently omitted",
      "Lease continuity in subdivided units requires specialized handling",
      "Builder memorandum and subdivision restrictions are often missed",
      "Tenant rights in subdivided spaces may be inadequately addressed"
    ],
    "clausesIncluded": [
      "Original purchase from builder and subdivision authorization",
      "Subdivision memorandum from builder",
      "Existing lease agreement and tenant details",
      "Lease continuity and tenant rights protection",
      "Rental income and collection arrangement",
      "Maintenance and common area responsibilities",
      "Subdivision legality representation and warranty",
      "Indemnity for subdivision-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF ALREADY LEASED SUBDIVIDED OFFICE UNIT",
      "recitals": [
        "WHEREAS _______ Company purchased the entire office unit from the builder and subsequently subdivided it pursuant to the Memorandum of Subdivision dated _______",
        "WHEREAS the subdivided office unit is already leased to _______ vide Lease Deed dated _______ for an annual rent of Rs. _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Subdivision Authorization and Memorandum",
          "body": "The Company confirms that the subdivision was done pursuant to the Builder's Memorandum of Subdivision dated _______. The Company exhibits this memorandum and all approval documents for the subdivision.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Existing Lease and Tenant Continuity",
          "body": "The Lease Deed dated _______ with the current tenant shall continue. The buyer shall assume all lessor obligations and inherit the lease relationship without any breach or interruption.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Rental Income and Collection",
          "body": "Rent accrued until possession date belongs to the seller. From possession date forward, all rent is the buyer's property. The tenant shall be notified of the ownership change and instructed to pay rent to the new owner.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is the subdivision legally valid if the builder approved it?",
        "answer": "Yes, if the subdivision was done pursuant to the builder's memorandum and all approvals were obtained, the subdivision is legal. This agreement exhibits the memorandum and all approvals to confirm legality."
      },
      {
        "question": "What happens to the existing lease when I buy the property?",
        "answer": "The existing lease continues with the new owner (buyer). All tenant rights and lessor obligations are transferred. The tenant will be notified of the ownership change but the lease terms remain unchanged."
      },
      {
        "question": "Can the tenant refuse to recognize the new owner?",
        "answer": "The agreement ensures smooth lease transfer by requiring tenant notification and income continuation. This agreement includes provisions ensuring the tenant recognizes the new lessor without interruption."
      },
      {
        "question": "Are there common area responsibilities for subdivided units?",
        "answer": "Yes, subdivided units typically have proportionate common area maintenance obligations. The agreement specifies the buyer's share of common area maintenance and service charges."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "commercial-shop-atm-leased-company-to-company",
    "documentName": "Agreement to Sell by Company to Company - Already Rented Commercial Shop for ATM",
    "shortLabel": "Bank ATM Shop - B2B Sale",
    "metaTitle": "Commercial ATM Shop Sale Agreement - Company Transfer ₹49",
    "metaDescription": "B2B agreement for selling ATM kiosk or bank-leased commercial shop. Includes lease continuation, bank tenant rights, and company-to-company transfer provisions.",
    "focusKeyword": "commercial shop sale agreement atm lease",
    "secondaryKeywords": [
      "bank atm shop sale",
      "atm kiosk lease sale",
      "commercial lease transfer",
      "company property sale",
      "rental commercial property"
    ],
    "heroSubheading": "Transfer your income-generating ATM shop with a company-to-company agreement that ensures lease continuity, protects bank tenant rights, and validates the title chain.",
    "scenario": "A company selling a commercial shop already rented to a bank for ATM operation to another company. The property has a long title history.",
    "whoNeeds": [
      "Companies divesting ATM commercial spaces",
      "Real estate investment companies acquiring shops",
      "Financial institutions managing properties",
      "Portfolio investors in ATM-supporting properties"
    ],
    "whenToUse": [
      "For sale of bank-leased ATM commercial shops",
      "When selling between corporate entities",
      "If you need to validate long title history",
      "To ensure smooth handover to new company owner"
    ],
    "risksOfGenericFormat": [
      "Bank-specific tenant protections are often inadequately addressed",
      "Long title history verification procedures are frequently omitted",
      "Company-to-company transfer formalities are often incomplete",
      "ATM-specific lease restrictions and obligations may be missed"
    ],
    "clausesIncluded": [
      "Company-to-company sale and board authorizations",
      "Long title history verification and chain of ownership",
      "Existing bank lease and ATM operation terms",
      "Bank tenant's exclusive rights and protections",
      "Rental income and collection procedures",
      "Lease compliance and bank requirements",
      "Title clearance and encumbrance certification",
      "Indemnity for lease and title-related issues"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF COMMERCIAL SHOP (ATM KIOSK)",
      "recitals": [
        "WHEREAS _______ Company is the registered owner of commercial shop situated at _______ with a long title history",
        "WHEREAS the said shop is leased to _______ Bank vide Registered Lease Deed dated _______ for operating an Automated Teller Machine (ATM)"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Board Resolutions and Corporate Authority",
          "body": "Both companies confirm execution authority vide Board Resolutions dated _______. Both authorize their respective representatives to execute this agreement on behalf of the company.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Long Title History and Verification",
          "body": "The seller provides complete title chain dating back _______ years. All documents establishing ownership, including purchase deeds and previous transfers, are exhibited and verified as valid and free from encumbrances.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Bank Lease and ATM Operation",
          "body": "The Lease Deed dated _______ allows the bank to operate an ATM on the premises. The buyer shall not interfere with ATM operations and shall ensure all lease terms are maintained throughout the lease period.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Why is long title history important for a bank-leased property?",
        "answer": "Banks prefer properties with clear, long ownership history (typically 10-15 years). This shows the property has no hidden claims or legal issues. The agreement verifies and exhibits the complete title chain."
      },
      {
        "question": "What does the bank verify before accepting the new owner?",
        "answer": "The bank typically verifies the new owner's financial stability and willingness to honor the lease. This agreement requires the bank to be notified and consent obtained before the transfer is finalized."
      },
      {
        "question": "Can the new company modify the ATM location or terms?",
        "answer": "No, the lease terms are binding on the new owner. The bank's ATM operation terms, location, and safety requirements cannot be modified without the bank's written consent."
      },
      {
        "question": "How is rental income handled in a company-to-company transfer?",
        "answer": "Rent accrued until possession date belongs to the selling company. The buying company receives all rent from possession date forward. A detailed rent handover statement is prepared to document this division."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-joint-owners-husband-wife",
    "documentName": "Agreement to Sell by Joint Owners (Husband & Wife) - Residential Plot",
    "shortLabel": "Couple-Owned Residential Plot",
    "metaTitle": "Joint Owner Residential Plot Sale Agreement - Husband Wife ₹49",
    "metaDescription": "Agreement for selling residential plots jointly owned by married couples. Includes joint consent, matrimonial property provisions, and spousal authorization clauses.",
    "focusKeyword": "joint owner agreement to sell residential plot",
    "secondaryKeywords": [
      "husband wife property sale",
      "joint ownership agreement",
      "matrimonial property transfer",
      "spousal consent agreement",
      "couple property sale"
    ],
    "heroSubheading": "Sell your jointly-owned residential plot with an agreement that properly documents spousal consent, establishes both owners' authority, and ensures matrimonial property compliance.",
    "scenario": "Husband and wife jointly own a residential plot and wish to sell it together. Both are executing the agreement.",
    "whoNeeds": [
      "Married couples selling jointly-owned property",
      "Buyers acquiring from married joint owners",
      "Matrimonial property transfer handlers",
      "Couples going through property division scenarios"
    ],
    "whenToUse": [
      "When residential plot is held in joint names",
      "If both spouses must consent to the sale",
      "For equal or unequal ownership shares",
      "To ensure matrimonial property compliance"
    ],
    "risksOfGenericFormat": [
      "Matrimonial property laws vary by state and are frequently omitted",
      "Joint ownership authority requirements are often inadequately addressed",
      "Spousal consent and no-objection procedures are frequently missing",
      "Equal division assumptions may not apply to unequal ownership shares"
    ],
    "clausesIncluded": [
      "Joint ownership declaration and share specification",
      "Both spouses' consent and signatures",
      "Spousal no-objection certificate or affidavit",
      "Marriage certificate exhibition",
      "Matrimonial property status declaration",
      "Joint consideration and receipt arrangements",
      "Equal division of sale proceeds",
      "Indemnity for matrimonial disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL PLOT BY JOINT OWNERS",
      "recitals": [
        "WHEREAS _______ (Husband) and _______ (Wife) are jointly registered owners of residential plot bearing plot number _______ with equal undivided shares of 50% each",
        "WHEREAS both the owners desire to sell the said plot to the Buyer and the Buyer is willing to purchase the same"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Joint Ownership and Consent",
          "body": "Both the Husband and Wife are the joint owners with 50% undivided share each. Both hereby execute this agreement and give their joint and several consent for the sale of the plot.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Matrimonial Property Acknowledgment",
          "body": "The spouses acknowledge that this is a matrimonial property acquired during marriage. Both consent to the sale and agree that the sale proceeds shall be divided between them as agreed.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Division of Sale Proceeds",
          "body": "The total consideration amount shall be received by both spouses jointly and divided equally as per their ownership shares. Both spouses shall provide their bank accounts for receiving their respective shares.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Do both spouses need to sign the agreement?",
        "answer": "Yes, absolutely. Since the property is jointly owned, both husband and wife must execute the agreement. The buyer requires both signatures to ensure clean title transfer and prevent future matrimonial disputes."
      },
      {
        "question": "What if one spouse doesn't want to sell?",
        "answer": "Both spouses must voluntarily agree to the sale. If one spouse opposes, the sale cannot proceed. This agreement protects the buyer by requiring voluntary joint consent from both owners."
      },
      {
        "question": "How are sale proceeds divided between spouses?",
        "answer": "Since both own equal 50% shares, the sale amount is typically divided 50-50. However, if they have a different arrangement, it must be documented. The agreement allows for unequal division if both agree."
      },
      {
        "question": "What if spouses later dispute the sale?",
        "answer": "The agreement includes indemnity clauses protecting the buyer. Both spouses sign affidavits confirming voluntary sale and no future claims. This protects the buyer against matrimonial disputes after the sale."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "commercial-flats-leasehold-converted-freehold-gpa-joint-owners",
    "documentName": "Agreement to Sell by Joint Owners (via GPA Holder) - Already Rented Commercial Flats on Converted Freehold",
    "shortLabel": "Leasehold-to-Freehold Commercial - GPA",
    "metaTitle": "Leasehold Converted Freehold Commercial Sale Agreement ₹49",
    "metaDescription": "Agreement for selling leasehold-converted freehold commercial flats through GPA holder. Includes leasehold conversion documentation and lessee continuity provisions.",
    "focusKeyword": "leasehold converted freehold commercial property sale",
    "secondaryKeywords": [
      "leasehold to freehold conversion",
      "commercial property gpa sale",
      "already rented commercial flats",
      "perpetual lease conversion",
      "freehold title transfer"
    ],
    "heroSubheading": "Sell leasehold-converted freehold commercial flats through your authorized GPA holder—with an agreement that validates the conversion, ensures lessee continuity, and streamlines the process.",
    "scenario": "Joint owners selling already-rented commercial flats on a plot that was originally perpetual leasehold but has been converted to freehold. The sale is executed through a GPA (General Power of Attorney) holder.",
    "whoNeeds": [
      "Joint owners using attorneys for property transactions",
      "Commercial property investors with GPA arrangements",
      "Sellers with converted leasehold properties",
      "Buyers acquiring leasehold-to-freehold conversions"
    ],
    "whenToUse": [
      "For leasehold properties converted to freehold",
      "When selling through authorized GPA holder",
      "If property has multiple joint owners",
      "To maintain existing commercial leases"
    ],
    "risksOfGenericFormat": [
      "Leasehold conversion legality requirements are frequently omitted",
      "GPA holder authority validation is often inadequately addressed",
      "Joint owner protection mechanisms are typically incomplete",
      "Converted property title chain documentation is frequently missing"
    ],
    "clausesIncluded": [
      "GPA holder authority and authorization verification",
      "Joint owners' names and shares",
      "Original perpetual lease deed and conversion documentation",
      "Freehold conversion certificate and approval",
      "Existing commercial leases and tenant continuity",
      "Rental income and collection arrangements",
      "Joint owner indemnity and representation",
      "Title chain validation for converted properties"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF COMMERCIAL FLATS BY JOINT OWNERS",
      "recitals": [
        "WHEREAS _______ and _______ are joint owners of commercial flats situated at _______ on a plot originally held under perpetual lease and subsequently converted to freehold",
        "WHEREAS the said flats are already let to various commercial tenants vide Registered Lease Deeds dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "GPA Holder Authority",
          "body": "The joint owners have authorized _______ as their General Power of Attorney holder vide GPA deed dated _______. The GPA holder is authorized to execute this agreement and all ancillary documents on behalf of the joint owners.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Leasehold Conversion Documentation",
          "body": "The seller exhibits the original Perpetual Lease Deed and the subsequent Freehold Conversion Certificate dated _______. The property is now held free of all lease restrictions with absolute freehold ownership.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Joint Owner Indemnity",
          "body": "The GPA holder provides an indemnity on behalf of the joint owners confirming that the sale has been executed with the unanimous consent of all joint owners and no claims shall be raised against the buyer post-sale.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Does the GPA holder have full authority to sell the property?",
        "answer": "Yes, if the GPA deed explicitly authorizes sale of the property. You should verify the GPA deed grants sale authority. The agreement includes the GPA deed for the buyer's verification."
      },
      {
        "question": "What is the difference between leasehold and freehold after conversion?",
        "answer": "Leasehold means you own the property for a fixed period (e.g., 99 years). Freehold means you own the property in perpetuity with no time limitation. After conversion, the property becomes freehold forever."
      },
      {
        "question": "How do I verify the conversion is legitimate?",
        "answer": "The agreement exhibits the Freehold Conversion Certificate issued by the property authority. This document confirms the legal conversion from leasehold to freehold status."
      },
      {
        "question": "What happens to the existing commercial leases?",
        "answer": "All existing commercial leases continue with the new owner. The buyer inherits the lessor role and must honor all lease terms until expiration or renewal."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "entire-floor-undivided-share-complicated-title-will-probate",
    "documentName": "Agreement to Sell by Joint Owners (50% Each) - Entire Residential Floor with Complicated Title History and Will Probate",
    "shortLabel": "Floor - Complex Title & Probate",
    "metaTitle": "Joint Owner Floor Sale Agreement - Will Probate Title ₹49",
    "metaDescription": "Agreement for selling entire residential floor with complex title through inheritance and probate. Addresses will probate, joint succession, and complicated ownership history.",
    "focusKeyword": "agreement to sell floor will probate inheritance",
    "secondaryKeywords": [
      "inherited property sale agreement",
      "probate property transfer",
      "joint succession agreement",
      "complex title property",
      "will inheritance agreement"
    ],
    "heroSubheading": "Sell your inherited residential floor with confidence using an agreement that addresses complicated title histories, will probate, and joint inheritance—ensuring clear title transfer.",
    "scenario": "Joint owners each with 50% undivided share in an entire residential floor acquired through inheritance via a will and probate court decree. The title has a complicated history.",
    "whoNeeds": [
      "Co-heirs selling inherited floors",
      "Successors with probate-established rights",
      "Buyers acquiring probate properties",
      "Executors managing inheritance sales"
    ],
    "whenToUse": [
      "For properties inherited through will and probate",
      "When multiple heirs own equal shares",
      "If title history is complex or disputed",
      "To settle probate proceedings through sale"
    ],
    "risksOfGenericFormat": [
      "Probate requirements and court order compliance are frequently omitted",
      "Will authentication and probate deed verification are often incomplete",
      "Complex title history review procedures are typically inadequate",
      "Joint heir consent and indemnity provisions are frequently insufficient"
    ],
    "clausesIncluded": [
      "Will authenticated copy and probate court order",
      "Joint heirs' inheritance rights confirmation",
      "50-50 undivided share declaration",
      "Complex title history documentation and verification",
      "Probate court order compliance",
      "All heirs' joint consent and signatures",
      "Title clearance and encumbrance affidavit",
      "Indemnity for inheritance-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL FLOOR BY JOINT HEIRS",
      "recitals": [
        "WHEREAS _______ and _______ are joint heirs who inherited an entire residential floor situated at _______ through the authenticated will of the deceased _______",
        "WHEREAS the joint heirs obtained Probate of the Will from the Hon'ble Court dated _______ confirming their joint succession rights with 50% undivided share each"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Will and Probate Documentation",
          "body": "The sellers exhibit the authenticated will and the Probate Court Decree dated _______. These documents establish the sellers' legal right to inherit and sell the entire floor as co-owners.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Complex Title History Verification",
          "body": "The sellers have verified the complete title history dating back _______ years. The title shows an inheritance through will, probate court confirmation, and is now free from all encumbrances and claims.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Joint Heir Consent",
          "body": "Both heirs execute this agreement with full knowledge and consent. Both confirm that no other heirs or claimants exist and neither party has any reservations about the sale.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is probate and why is it important for inherited property sales?",
        "answer": "Probate is a court process that confirms the validity of a will and grants heirs the legal right to inherit. The probate court order establishes inheritance rights and is crucial for selling inherited property."
      },
      {
        "question": "Do both heirs need to sign if they each own 50%?",
        "answer": "Yes, absolutely. Since the floor is owned in joint names with 50-50 shares, both heirs must execute and sign the agreement. One heir cannot sell without the other's consent."
      },
      {
        "question": "What if the title history is extremely complicated?",
        "answer": "This agreement includes comprehensive title verification procedures. We examine the complete ownership chain, verify all documents, and obtain a title clearance certificate before presenting to the buyer."
      },
      {
        "question": "Can the buyer be assured of full ownership after the purchase?",
        "answer": "Yes, the agreement includes detailed indemnity clauses protecting the buyer against any inheritance disputes, will challenges, or claims by other potential heirs arising after the sale."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "office-premises-leased-bank-joint-owners-company",
    "documentName": "Agreement to Sell by Joint Owners in Favour of Company - Office Premises Already Leased to Bank",
    "shortLabel": "Bank-Leased Office - Company Buyer",
    "metaTitle": "Office Property Sale to Company - Bank Leased Agreement ₹49",
    "metaDescription": "Agreement for individual joint owners selling bank-leased office premises to a company. Includes lease transfer, corporate buyer authorization, and commercial property transfer.",
    "focusKeyword": "office premises sale agreement company purchase",
    "secondaryKeywords": [
      "corporate property purchase agreement",
      "bank-leased office sale",
      "business-to-business property transfer",
      "company acquisition agreement",
      "office lease assumption"
    ],
    "heroSubheading": "Sell your bank-leased office premises to a corporate buyer with an agreement that manages corporate due diligence, ensures lease continuity, and validates company purchase authority.",
    "scenario": "Joint individual owners selling office premises already leased to a bank to a company buyer. The sale involves corporate board authorization and lease assumption.",
    "whoNeeds": [
      "Individual property owners selling to companies",
      "Companies acquiring commercial properties",
      "Bank lessees acquiring ownership of leased premises",
      "Real estate investors divesting to corporates"
    ],
    "whenToUse": [
      "For sales to corporate or company buyers",
      "When bank-leased property transfers to company",
      "If buyer requires corporate board resolutions",
      "To document company purchase authority"
    ],
    "risksOfGenericFormat": [
      "Corporate buyer authority verification is frequently omitted",
      "Company transaction formalities are often inadequately addressed",
      "Bank approval for corporate lessor change is frequently missed",
      "Corporate liability and lease assumption clauses are often incomplete"
    ],
    "clausesIncluded": [
      "Joint owners' declaration and consent",
      "Company buyer's authorization and board resolution",
      "Existing bank lease and tenant continuity",
      "Bank approval for ownership change to company",
      "Lease assumption and corporate liability",
      "Rent collection and income allocation",
      "Company registration and corporate compliance",
      "Indemnity for lease and corporate-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OFFICE PREMISES BY JOINT OWNERS TO COMPANY",
      "recitals": [
        "WHEREAS _______ and _______ are joint owners of office premises situated at _______ which are already let to _______ Bank vide Registered Lease Deed dated _______",
        "WHEREAS _______ Company desires to purchase the said office premises and the joint owners are willing to sell to the said Company"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Joint Owners' Authority",
          "body": "Both joint owners hereby confirm their authority to sell the property and execute this agreement. Both acknowledge that the office premises are equally owned and both consent to the sale to the company buyer.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Company Buyer Authority",
          "body": "The company buyer exhibits its Board Resolution dated _______ authorizing the purchase. The company confirms its registration, good standing, and financial capacity to complete the purchase.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Bank Lease Assumption and Approval",
          "body": "The company buyer shall assume all lessor obligations under the existing lease. The company shall obtain the bank's approval for the ownership change. The bank's consent is a condition precedent to completion.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Does the company need board approval to buy this property?",
        "answer": "Yes, typically companies require board resolutions for real property purchases. The company buyer must provide a Board Resolution confirming authorization for this purchase."
      },
      {
        "question": "Will the bank accept the company as the new owner?",
        "answer": "Usually yes, if the company is financially sound. The agreement includes a clause requiring the bank's approval for the ownership change from individuals to company. This protects both parties."
      },
      {
        "question": "What happens to the existing lease?",
        "answer": "The company assumes all lessor obligations under the existing lease. The bank continues to lease the premises under the same terms, now with the company as the new lessor."
      },
      {
        "question": "How are proceeds divided between joint owners?",
        "answer": "Since both jointly own the property, proceeds are typically divided equally. The agreement requires the company to pay consideration to both owners' designated bank accounts."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "ground-floor-leasehold-freehold-converted-joint-owners",
    "documentName": "Agreement to Sell by Joint Owners - Ground Floor of Leasehold Building Converted to Freehold",
    "shortLabel": "Converted Ground Floor - Joint Owners",
    "metaTitle": "Leasehold Converted Freehold Ground Floor Agreement ₹49",
    "metaDescription": "Agreement for selling ground floor on leasehold-converted-to-freehold plot by joint owners. Addresses conversion documentation and joint owner authorization.",
    "focusKeyword": "leasehold converted freehold ground floor sale",
    "secondaryKeywords": [
      "freehold conversion agreement",
      "ground floor property sale",
      "joint owner agreement",
      "perpetual lease conversion",
      "property conversion transfer"
    ],
    "heroSubheading": "Sell your ground floor on a converted freehold plot with a joint owner agreement that validates the leasehold-to-freehold conversion and ensures proper title transfer.",
    "scenario": "Joint owners selling ground floor of a residential building on a plot that was originally held on perpetual lease but has been converted to freehold.",
    "whoNeeds": [
      "Joint owners of converted leasehold properties",
      "Sellers with perpetual lease converted properties",
      "Buyers acquiring converted freehold units",
      "Property investors in lease conversion areas"
    ],
    "whenToUse": [
      "For properties with leasehold-to-freehold conversion",
      "When multiple joint owners must authorize sale",
      "If property registration reflects conversion",
      "To document clean title post-conversion"
    ],
    "risksOfGenericFormat": [
      "Leasehold conversion legal requirements are frequently omitted",
      "Joint owner authorization procedures are often inadequate",
      "Conversion certificate verification is typically incomplete",
      "Freehold title establishment may not be properly documented"
    ],
    "clausesIncluded": [
      "Joint owners' names and shares",
      "Original perpetual lease deed details",
      "Leasehold-to-freehold conversion documentation",
      "Conversion approval by government authority",
      "Freehold title certificate",
      "All joint owners' consent and signatures",
      "No encumbrances from original lease",
      "Title clearance affidavit"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF GROUND FLOOR ON CONVERTED FREEHOLD PROPERTY",
      "recitals": [
        "WHEREAS _______ and _______ are joint registered owners of ground floor in a residential building situated at _______ on a plot originally held under perpetual lease",
        "WHEREAS the perpetual lease has been converted to freehold vide Conversion Certificate dated _______ issued by the concerned government authority"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Conversion Documentation",
          "body": "The sellers exhibit the original Perpetual Lease Deed and the Freehold Conversion Certificate dated _______. These documents confirm that the property is now held absolutely free of all lease restrictions.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Joint Owner Consent",
          "body": "Both joint owners execute this agreement with full knowledge and consent. Both confirm their authorization for the sale and agree to receive their proportionate share of the consideration amount.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Freehold Title Warranty",
          "body": "The sellers warrant that the property is held in absolute freehold with no remaining lease obligations or restrictions. The property is free from all encumbrances except as disclosed.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What happened when the perpetual lease was converted to freehold?",
        "answer": "The property changed from a time-limited lease (even though perpetual) to absolute ownership. All lease restrictions were removed and the owner now has complete control for perpetuity without any lease limitations."
      },
      {
        "question": "Do both joint owners need to sell together?",
        "answer": "Yes, since the ground floor is owned jointly by both, both must execute the agreement. One owner cannot sell without the other's consent unless there's a specific power of attorney arrangement."
      },
      {
        "question": "Is there any benefit to the conversion for the buyer?",
        "answer": "Yes, absolutely. Freehold properties are more desirable and valuable than leasehold properties. The conversion from perpetual lease to freehold increases the property's marketability and value."
      },
      {
        "question": "Are there any ongoing lease obligations after conversion?",
        "answer": "No, after conversion to freehold, all lease obligations cease. The buyer will have no ground rent or lease renewal concerns. Full ownership rights are absolute and perpetual."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "old-kohti-multiple-owners",
    "documentName": "Agreement to Sell by Multiple Owners - Old Kohti (Traditional House)",
    "shortLabel": "Old Kothi - Multi-Owner",
    "metaTitle": "Old Kohti Multiple Owner Sale Agreement Template ₹49",
    "metaDescription": "Agreement for selling old traditional kohti by multiple owners. Includes ancestral property and shared ownership provisions.",
    "focusKeyword": "old kohti sale agreement multiple owners",
    "secondaryKeywords": [
      "kohti property sale",
      "ancestral house agreement",
      "multiple owner agreement",
      "traditional house sale",
      "shared property transfer"
    ],
    "heroSubheading": "Sell your old traditional kohti with confidence when multiple owners must consent—with an agreement that manages shared ownership, ancestral claims, and unanimous authorization.",
    "scenario": "Multiple owners jointly selling an old traditional kohti (ancestral house). All owners must provide consent for the sale.",
    "whoNeeds": [
      "Families with shared kohti ownership",
      "Co-heirs selling ancestral property",
      "Multiple shareholder property owners",
      "Buyers acquiring traditional properties"
    ],
    "whenToUse": [
      "For ancestral kothis with multiple family owners",
      "When all co-owners must authorize sale",
      "For properties with complicated family ownership",
      "To manage unanimous consent requirements"
    ],
    "risksOfGenericFormat": [
      "Multiple owner consent procedures are inadequately addressed in standard forms",
      "Ancestral property-specific regulations are frequently omitted",
      "Unequal ownership share documentation is often incomplete",
      "Family law provisions for ancestral property are typically missing"
    ],
    "clausesIncluded": [
      "All owners' names and ownership shares",
      "Unanimous consent and execution by all owners",
      "Ancestral property declaration",
      "No pending family disputes or claims",
      "Consideration division among owners",
      "Each owner's bank account for receipt",
      "Indemnity for family-related claims",
      "Power of attorney provisions if needed"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OLD KOHTI BY MULTIPLE OWNERS",
      "recitals": [
        "WHEREAS _______, _______, and _______ are joint owners of an old kohti situated at _______ with undivided shares",
        "WHEREAS all owners desire to sell the said kohti and divide the sale proceeds among themselves"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Multiple Owners and Shares",
          "body": "The following are the registered joint owners with their respective undivided shares: _______ [share]%, _______ [share]%, _______ [share]%. All owners execute this agreement with their unanimous consent.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Ancestral Property Declaration",
          "body": "All owners confirm that this is an ancestral property and no family dispute or claim is pending. All owners release all claims on the other owners except for their proportionate share in the sale proceeds.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Consideration Division",
          "body": "The total consideration of Rs. _______ shall be divided among all owners in proportion to their ownership shares. The buyer shall remit each owner's share directly to their designated bank accounts.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What happens if one owner refuses to sell?",
        "answer": "The sale cannot proceed if even one owner refuses. All owners must unanimously agree. This agreement includes a clause requiring unanimous written consent from all registered owners."
      },
      {
        "question": "How are profits divided if owners have unequal shares?",
        "answer": "Each owner receives a share of the sale proceeds proportionate to their ownership share. If one owner owns 50% and another owns 25%, they receive proceeds accordingly."
      },
      {
        "question": "What if there are family disputes about the ownership shares?",
        "answer": "This agreement requires all owners to confirm no family disputes are pending. If disputes exist, they must be resolved through family settlement or court proceedings before the sale can proceed."
      },
      {
        "question": "Can one owner use a power of attorney for another?",
        "answer": "Yes, if an owner is abroad or unable to sign, a duly executed and notarized GPA can authorize another person to sign on their behalf. The GPA must be exhibited to the buyer."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-financier-sale",
    "documentName": "Agreement to Sell of Residential Plot by Financier (Authorized Sale Agent)",
    "shortLabel": "Financier-Authorized Plot Sale",
    "metaTitle": "Residential Plot Sale - Financier Authorization ₹49",
    "metaDescription": "Agreement for selling residential plot by financier authorized to sell due to loan default. Includes loan security documentation and financier authority provisions.",
    "focusKeyword": "residential plot sale financier authorization",
    "secondaryKeywords": [
      "loan default property sale",
      "financier authorized sale",
      "mortgaged plot sale",
      "security enforcement sale",
      "loan security property transfer"
    ],
    "heroSubheading": "Sell your plot through a financier authorized to sell due to loan arrangement with an agreement that documents financier authority and ensures clean title transfer to buyer.",
    "scenario": "A residential plot being sold by a financier who is authorized by the seller to sell the plot. The seller has taken a loan from the financier and handed over original title documents as security.",
    "whoNeeds": [
      "Borrowers selling through financier authorization",
      "Financiers managing collateral sales",
      "Buyers acquiring financier-authorized properties",
      "Real estate professionals handling secured sales"
    ],
    "whenToUse": [
      "When plot is pledged as loan security",
      "If seller authorizes financier to sell",
      "For loans where title documents are held",
      "To manage enforcement of financial security"
    ],
    "risksOfGenericFormat": [
      "Financier authority and scope are frequently not properly documented",
      "Loan security agreement details are often omitted",
      "Borrower's underlying consent and authorization are often insufficient",
      "Title document custody and transfer procedures are typically incomplete"
    ],
    "clausesIncluded": [
      "Loan agreement details and security arrangement",
      "Financier's authorization from borrower",
      "Loan default or repayment arrangement",
      "Title documents held as security",
      "Financier's authority limits and scope",
      "Borrower's ratification and consent",
      "Sale proceeds applied to loan settlement",
      "Indemnity from financier and borrower"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT BY FINANCIER",
      "recitals": [
        "WHEREAS _______ (Borrower) has taken a loan of Rs. _______ from _______ (Financier) and pledged the residential plot as security",
        "WHEREAS the original title documents of the plot have been handed over to the Financier as security and the Financier is authorized to sell the plot on behalf of the Borrower"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Loan Security and Financier Authority",
          "body": "The Financier exhibits the Loan Agreement dated _______ showing the security arrangement. The Borrower has authorized the Financier to sell the plot in case of loan default or maturity.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Borrower's Ratification",
          "body": "The Borrower ratifies this agreement and confirms the Financier's authority to execute the sale. The Borrower shall cooperate in title transfer and registration procedures.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Sale Proceeds Applied to Loan",
          "body": "The sale proceeds shall first settle the outstanding loan amount to the Financier. Any remaining amount shall be paid to the Borrower. The Financier shall provide a no-objection certificate after loan settlement.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can the borrower prevent the financier from selling?",
        "answer": "If the borrower has authorized the financier in writing as security, the financier has legal authority to sell. The agreement includes the borrower's ratification confirming this authorization."
      },
      {
        "question": "What happens to the sale proceeds after the loan is settled?",
        "answer": "After the financier recovers the loan amount (including interest and charges), any excess proceeds go to the borrower. The agreement specifies this proceeds distribution."
      },
      {
        "question": "Does the buyer get clear title after the purchase?",
        "answer": "Yes, the financier releases the title documents upon loan settlement. The buyer receives all documents and can register the property in their name free from the financial security."
      },
      {
        "question": "What if sale proceeds are insufficient to cover the loan?",
        "answer": "The agreement specifies the borrower's responsibility to settle any shortfall. The financier has a claim against the borrower for amounts not recovered from sale proceeds."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-developer-colony",
    "documentName": "Agreement to Sell of Residential Plot in Developer Colony (Developer-Developed Property)",
    "shortLabel": "Developer Colony Plot",
    "metaTitle": "Residential Plot Sale - Developer Colony Agreement ₹49",
    "metaDescription": "Agreement for selling residential plots in developer-developed colonies. Includes developer-specific restrictions and colony bylaws compliance.",
    "focusKeyword": "residential plot developer colony sale agreement",
    "secondaryKeywords": [
      "developer colony property sale",
      "residential plot agreement",
      "planned community agreement",
      "colony house sale",
      "developer land sale"
    ],
    "heroSubheading": "Sell your developer-colony plot with an agreement that clarifies colony restrictions, ensures bylaws compliance, and addresses developer-imposed covenants.",
    "scenario": "A residential plot in a colony developed by a developer, which was purchased by the seller from the developer.",
    "whoNeeds": [
      "Plot owners in developer colonies",
      "Buyers acquiring developer-planned properties",
      "Colony association members",
      "Real estate investors in organized layouts"
    ],
    "whenToUse": [
      "For plots in planned developer colonies",
      "When colony has specific bylaws",
      "If developer has imposed restrictions",
      "To ensure compliance with colony terms"
    ],
    "risksOfGenericFormat": [
      "Developer colony bylaws and restrictions are frequently omitted",
      "Colony association requirements are often inadequately addressed",
      "Developer's retained rights and obligations are typically incomplete",
      "Future colony development phases and their implications are frequently missed"
    ],
    "clausesIncluded": [
      "Developer and colony identification",
      "Allotment letter and conveyance deed details",
      "Colony bylaws and restrictions",
      "Maintenance charges and colony duties",
      "Restriction on commercial use (if applicable)",
      "Developer's development completion obligations",
      "Colony association membership transfer",
      "Indemnity for colony-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT IN DEVELOPER COLONY",
      "recitals": [
        "WHEREAS the Seller purchased residential plot in _______ Colony developed by _______ Developer vide Allotment Letter dated _______",
        "WHEREAS the Seller obtained Registered Conveyance Deed dated _______ in respect of the plot"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Developer Colony Details and Allotment",
          "body": "The seller exhibits the Allotment Letter dated _______ from the Developer and the Registered Conveyance Deed dated _______. The plot is situated in the planned colony with all specified infrastructure.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Colony Bylaws and Restrictions",
          "body": "The buyer accepts the property subject to colony bylaws and restrictions. These include building design standards, commercial use restrictions, and maintenance charge obligations as specified in the colony documents.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Colony Association Membership",
          "body": "The seller shall transfer the colony association membership to the buyer. The buyer shall assume all colony-related obligations including maintenance charges and compliance with colony rules.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What are typical colony restrictions on residential plots?",
        "answer": "Common restrictions include prohibition on commercial use, requirements for specific architectural designs, restrictions on wall heights, and obligations to maintain green spaces and common areas."
      },
      {
        "question": "Who is responsible for colony maintenance charges?",
        "answer": "From the possession date, the buyer assumes responsibility for maintenance charges. The agreement specifies the buyer's share based on plot size and colony norms."
      },
      {
        "question": "Can I modify the building design after purchase?",
        "answer": "No, the colony bylaws specify design standards. Modifications require colony association approval. Violating design standards can result in penalties and legal action by the association."
      },
      {
        "question": "What if the developer hasn't completed the promised infrastructure?",
        "answer": "The agreement includes the developer's obligations. If the developer fails, you can pursue claims through the colony association or legal proceedings. The agreement specifies available remedies."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-private-colonizer",
    "documentName": "Agreement to Sell of Residential Plot in Privately Colonized Area",
    "shortLabel": "Private Colonizer Plot",
    "metaTitle": "Residential Plot Private Colonizer Sale Agreement ₹49",
    "metaDescription": "Agreement for selling residential plots in privately colonized areas. Includes colonizer rights and private development agreement clauses.",
    "focusKeyword": "residential plot private colonizer sale",
    "secondaryKeywords": [
      "private colony plot sale",
      "colonizer agreement",
      "private subdivision property",
      "residential plot private layout",
      "colonizer development agreement"
    ],
    "heroSubheading": "Sell your privately colonized plot with an agreement that addresses colonizer rights, land development obligations, and private layout-specific restrictions.",
    "scenario": "A residential plot purchased by the seller in a colony developed by a private colonizer (not a registered developer).",
    "whoNeeds": [
      "Plot owners in private colonies",
      "Buyers acquiring privately colonized properties",
      "Private colonizers managing subdivisions",
      "Real estate investors in private layouts"
    ],
    "whenToUse": [
      "For plots in privately developed colonies",
      "When colonizer retains certain rights",
      "If colony has informal governance",
      "To clarify private colonizer obligations"
    ],
    "risksOfGenericFormat": [
      "Private colonizer rights and obligations are frequently inadequately documented",
      "Informal colony governance structures are often not addressed",
      "Land record status in private colonies is frequently unclear",
      "Dispute resolution in private colonies is typically not specified"
    ],
    "clausesIncluded": [
      "Private colonizer identification and agreement",
      "Plot allocation and subdivision details",
      "Colonizer development obligations",
      "Infrastructure provisions and maintenance",
      "Private governance and management",
      "Colonizer's retained rights and restrictions",
      "Dispute resolution mechanism",
      "Indemnity for colonizer-related issues"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT IN PRIVATE COLONY",
      "recitals": [
        "WHEREAS the Seller purchased residential plot from _______ (Private Colonizer) in a privately developed colony",
        "WHEREAS the Private Colonizer retains certain rights as per the subdivision agreement dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Private Colonizer and Subdivision Agreement",
          "body": "The seller exhibits the agreement with the private colonizer dated _______. The colonizer has subdivided the land and allotted plots to various purchasers including the seller.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Colonizer Development and Maintenance",
          "body": "The private colonizer is responsible for maintaining roads, water supply, and common areas. The plot owner contributes maintenance charges as per the subdivision terms.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Private Governance",
          "body": "The colony is managed informally by the colonizer or an elected committee. Governance procedures, dispute resolution, and maintenance are handled according to established norms of the colony.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What are the risks of buying in a privately colonized area?",
        "answer": "Private colonies lack formal governance and may have unclear land records. There's risk of colonizer disputes, informal management, and potential regulatory issues. Thorough due diligence is essential."
      },
      {
        "question": "Are my land rights secure in a private colony?",
        "answer": "Yes, if you have a registered sale deed and your name is in revenue records. However, private colonies lack formal developer guarantees. This agreement ensures documentation of all colonizer relationships."
      },
      {
        "question": "Who maintains roads and common areas in private colonies?",
        "answer": "Typically the colonizer or an informal committee. Maintenance is funded through contributions from plot owners. This agreement clarifies maintenance obligations and contribution amounts."
      },
      {
        "question": "What if the colonizer disappears or defaults?",
        "answer": "If the colonizer fails to maintain areas or disputes arise, residents must pursue collective action or legal remedies. The agreement documents the colonizer's original obligations for legal action."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "agricultural-land-company-to-company",
    "documentName": "Agreement to Sell of Agricultural Land by Company to Another Company",
    "shortLabel": "Agricultural Land - B2B Sale",
    "metaTitle": "Agricultural Land Company Sale Agreement ₹49",
    "metaDescription": "Agreement for company-to-company sale of agricultural land. Includes agricultural zoning, crop agreements, and corporate buyer authorizations.",
    "focusKeyword": "agricultural land company sale agreement",
    "secondaryKeywords": [
      "farm land company transfer",
      "agricultural property sale",
      "corporate farm acquisition",
      "farming land business sale",
      "agriculture land conveyance"
    ],
    "heroSubheading": "Transfer agricultural land between companies with an agreement that validates corporate authority, addresses agricultural-use compliance, and ensures clean title transition.",
    "scenario": "One company selling agricultural land to another company. Both companies must authorize the transaction through board resolutions.",
    "whoNeeds": [
      "Agricultural companies consolidating land",
      "Corporate farm operators",
      "Agricultural investment companies",
      "Business entities in farming operations"
    ],
    "whenToUse": [
      "For B2B agricultural property transfers",
      "When both parties are corporate entities",
      "For land with existing crop agreements",
      "When board resolutions are required"
    ],
    "risksOfGenericFormat": [
      "Agricultural-use restrictions are frequently not addressed",
      "Corporate buyer authorization requirements are often omitted",
      "Crop agreements and tenant farmer rights are typically missed",
      "Agricultural subsidy and incentive implications are frequently omitted"
    ],
    "clausesIncluded": [
      "Seller company details and authorization",
      "Buyer company details and board resolution",
      "Agricultural land details and use",
      "Existing crop agreements and tenant arrangements",
      "Agricultural restrictions and zoning compliance",
      "Crop harvest and income allocation",
      "Transfer completion and registration",
      "Corporate indemnity and representations"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL AGRICULTURAL LAND BETWEEN COMPANIES",
      "recitals": [
        "WHEREAS _______ Company is the registered owner of agricultural land situated at _______",
        "WHEREAS _______ Company desires to purchase the said agricultural land for farming operations"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Company Seller and Buyer Authorization",
          "body": "The seller company exhibits Board Resolution dated _______ authorizing the sale. The buyer company exhibits Board Resolution dated _______ authorizing the purchase. Both resolutions are duly certified.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Agricultural Land Details and Use",
          "body": "The land is agricultural land of _______ hectares situated in _______ district. The land is currently under cultivation for _______. The buyer shall continue agricultural use as per zoning regulations.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Crop Agreements and Tenant Farmers",
          "body": "If the land is worked by tenant farmers, their rights are transferred to the buyer. The buyer shall honor existing crop agreements and arrangements. Harvest proceeds are allocated as per original agreements.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Do companies need board approval for agricultural land purchases?",
        "answer": "Yes, typically companies require board resolutions for real property transactions. Both selling and buying companies must provide certified board resolutions authorizing the transaction."
      },
      {
        "question": "What happens to tenant farmers if the land is sold?",
        "answer": "Tenant farmers' rights are typically protected by law. The agreement ensures the buyer honors existing agreements. Tenant farmers cannot be ejected without proper notice and compensation."
      },
      {
        "question": "Are there restrictions on agricultural land use by companies?",
        "answer": "Yes, agricultural land is typically restricted to agricultural use. Conversion to non-agricultural use requires government permission and may attract taxes or penalties."
      },
      {
        "question": "Can the buyer get agricultural subsidy and incentive benefits?",
        "answer": "Yes, if the buyer company is engaged in farming. Agricultural subsidies depend on compliance with regulations. The buyer should verify eligibility for various government schemes."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "basement-ground-floor-leased-perpetual-lease-converted-freehold",
    "documentName": "Agreement to Sell of Entire Basement and Ground Floor - Perpetual Lease Converted to Freehold (Already Rented)",
    "shortLabel": "Commercial Floor - Converted Freehold",
    "metaTitle": "Basement Ground Floor Sale - Leasehold to Freehold ₹49",
    "metaDescription": "Agreement for selling commercial basement and ground floor with perpetual lease conversion. Includes lease conversion, existing tenant, and freehold title provisions.",
    "focusKeyword": "basement ground floor sale leasehold converted freehold",
    "secondaryKeywords": [
      "perpetual lease conversion agreement",
      "commercial floor sale",
      "leasehold to freehold transfer",
      "already rented commercial space",
      "freehold conversion property"
    ],
    "heroSubheading": "Sell your entire commercial floor on converted freehold land with an agreement that validates the conversion, maintains existing lease, and ensures clean title transfer.",
    "scenario": "Selling entire basement and ground floor in a commercial building constructed on perpetual leasehold plot that has been converted to freehold. The floor is already rented.",
    "whoNeeds": [
      "Commercial building owners with converted plots",
      "Sellers of leasehold-converted properties",
      "Buyers acquiring converted commercial spaces",
      "Landlords of commercial floors"
    ],
    "whenToUse": [
      "For commercial floors with leasehold conversion",
      "When property has existing commercial tenants",
      "If conversion certificate has been obtained",
      "To transfer rental income properties"
    ],
    "risksOfGenericFormat": [
      "Leasehold conversion legality verification is frequently incomplete",
      "Existing tenant protections are often inadequately addressed",
      "Freehold title warranty is frequently insufficient",
      "Conversion timeline and transition procedures are typically missing"
    ],
    "clausesIncluded": [
      "Original perpetual lease deed",
      "Leasehold-to-freehold conversion certificate",
      "Existing commercial lease and tenant details",
      "Conversion date and government approval",
      "Rental income and collection procedures",
      "Lessee rights protection and continuity",
      "Freehold title warranty",
      "Indemnity for conversion-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL COMMERCIAL FLOOR ON CONVERTED FREEHOLD PROPERTY",
      "recitals": [
        "WHEREAS a commercial building comprising basement and ground floor is constructed on perpetual leasehold plot that has been converted to freehold",
        "WHEREAS the entire basement and ground floor is already let to _______ at an annual rent of Rs. _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Leasehold Conversion to Freehold",
          "body": "The seller exhibits the Perpetual Lease Deed and the Freehold Conversion Certificate dated _______. The property is now held in absolute freehold with no remaining lease restrictions or obligations.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Existing Commercial Lease and Tenant",
          "body": "The basement and ground floor are leased to _______ under Registered Lease Deed dated _______. The lease shall continue with the buyer as the new lessor. The tenant's rights are protected.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Rental Income Collection",
          "body": "Rent accrued until possession belongs to the seller. From possession date forward, all rent belongs to the buyer. The lease agreement shall be assigned to the buyer with the tenant's acknowledgment.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is perpetual lease and how does it differ from freehold?",
        "answer": "Perpetual lease is a long-term lease (effectively lifetime) but still terminable. Freehold is absolute ownership with no lease. After conversion, you have true freehold ownership."
      },
      {
        "question": "Does conversion increase the property value?",
        "answer": "Yes, significantly. Freehold properties are more valuable and marketable than leasehold properties. Banks also prefer lending against freehold properties."
      },
      {
        "question": "Can the tenant refuse to recognize the new owner after conversion?",
        "answer": "No, the lease is assigned to the new owner. The agreement includes notification procedures ensuring the tenant recognizes the new lessor without interruption."
      },
      {
        "question": "Are there any ongoing lease fees or ground rent after conversion?",
        "answer": "No, freehold property is free from all lease obligations. There's no ground rent, lease renewal fees, or other periodic lease-related payments."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "apartment-nomination-transfer-assignment-substitution",
    "documentName": "Agreement to Sell of Apartment by Nomination/Transfer/Assignment/Substitution",
    "shortLabel": "Apartment - Nomination Transfer",
    "metaTitle": "Apartment Nomination Transfer Agreement - Substitution ₹49",
    "metaDescription": "Agreement for apartment sale through nomination, transfer, assignment, or substitution procedures. Includes builder nominal provisions and rights transfer.",
    "focusKeyword": "apartment nomination transfer agreement",
    "secondaryKeywords": [
      "apartment substitution sale",
      "nomination clause transfer",
      "builder substitution agreement",
      "assignment of rights apartment",
      "apartment transfer procedure"
    ],
    "heroSubheading": "Sell your apartment through nomination, transfer, or substitution with an agreement that clarifies builder rights, documents rights transfer, and ensures procedure compliance.",
    "scenario": "Selling apartment through nomination, transfer, assignment, or substitution as per builder's scheme.",
    "whoNeeds": [
      "Apartment owners using substitution clauses",
      "Buyers acquiring through nomination transfers",
      "Builders managing substitution procedures",
      "Real estate professionals handling builder schemes"
    ],
    "whenToUse": [
      "For apartments sold before conveyance deed",
      "When builder allows substitution or nomination",
      "If apartment is not yet registered",
      "To follow builder scheme procedures"
    ],
    "risksOfGenericFormat": [
      "Builder substitution procedures are frequently misunderstood",
      "Nomination clause requirements are often inadequately documented",
      "Rights transfer procedures are typically incomplete",
      "Builder approval and no-objection is frequently omitted"
    ],
    "clausesIncluded": [
      "Builder and scheme identification",
      "Original allottee and current seller details",
      "Nomination or substitution clause provisions",
      "Rights transfer from allottee to buyer",
      "Builder's consent and approval",
      "Payment terms and schedule",
      "Delivery of apartment and possession",
      "Indemnity for builder-related issues"
    ],
    "preview": {
      "titleLine": "AGREEMENT FOR SUBSTITUTION/NOMINATION TRANSFER OF APARTMENT",
      "recitals": [
        "WHEREAS the Seller (allottee/nominee) received apartment from _______ Builder under allotment letter dated _______",
        "WHEREAS the Seller intends to substitute/nominate the Buyer in place of the allottee under the builder's substitution/nomination clause"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Substitution/Nomination Procedure",
          "body": "The apartment is being sold through the builder's substitution/nomination clause. The buyer shall pay the builder the balance consideration as per the original allotment letter dated _______.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Builder's Consent and No-Objection",
          "body": "The seller shall obtain the builder's no-objection certificate for substitution/nomination. The builder's consent is a condition precedent to completion of this agreement.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Rights Transfer and Delivery",
          "body": "All rights, titles, and interests of the original allottee are transferred to the buyer. The builder shall deliver the apartment to the buyer with possession and all original documents.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is the difference between substitution and nomination?",
        "answer": "Substitution is replacing the allottee with a new person in the builder's records. Nomination is appointing a nominee to inherit the apartment. Both achieve similar results through different procedures."
      },
      {
        "question": "Do I need to pay the builder directly for substitution?",
        "answer": "Yes, the buyer typically pays any balance amount directly to the builder. The original allottee receives agreed consideration from the buyer separately."
      },
      {
        "question": "What happens if the builder refuses substitution?",
        "answer": "If the builder refuses, the sale cannot proceed through substitution. The buyer may have other options like obtaining a separate sale deed, but builder approval is typically required."
      },
      {
        "question": "Will I get registered conveyance deed after substitution?",
        "answer": "The builder will eventually register the conveyance deed. Until registration, you have builder records and substitution certificate. After registration, you get full legal title."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "cyber-it-space-builder-transfer-unregistered",
    "documentName": "Agreement to Sell of Cyber/IT Space Through Builder Record Transfer (Unregistered Conveyance)",
    "shortLabel": "IT/Cyber Space - Builder Transfer",
    "metaTitle": "Cyber IT Space Sale Agreement - Builder Records ₹49",
    "metaDescription": "Agreement for selling cyber or IT office space through builder records without conveyance deed registration. Includes commercial IT provisions.",
    "focusKeyword": "cyber it space sale agreement builder records",
    "secondaryKeywords": [
      "it office space sale",
      "cyber park property agreement",
      "tech space transfer",
      "it building sale",
      "cyber center agreement"
    ],
    "heroSubheading": "Sell your cyber or IT office space with an agreement that handles builder record transfers and clarifies future registration rights for tech properties.",
    "scenario": "Selling cyber/IT space through transfer in the builder's records as the conveyance deed has not yet been registered by the builder.",
    "whoNeeds": [
      "IT park office owners",
      "Cyber space operators",
      "Tech companies managing properties",
      "Buyers of IT/cyber facilities"
    ],
    "whenToUse": [
      "For IT parks with unregistered deeds",
      "When selling cyber space units",
      "If builder still maintains records",
      "To transfer through builder record update"
    ],
    "risksOfGenericFormat": [
      "IT/cyber park-specific provisions are frequently missing",
      "Commercial use restrictions for tech spaces are often omitted",
      "Builder registration obligations are typically not documented",
      "Technology-specific lease or operational agreements are frequently missed"
    ],
    "clausesIncluded": [
      "IT/cyber park details and builder information",
      "Unregistered conveyance deed status",
      "Builder record transfer procedure",
      "Commercial use for IT/technology purposes",
      "Infrastructure and connectivity provisions",
      "Buyer's right to pursue registration",
      "Builder's cooperation obligation",
      "Indemnity for registration delays"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL CYBER/IT SPACE THROUGH BUILDER RECORDS",
      "recitals": [
        "WHEREAS the Seller owns cyber/IT space in _______ IT Park developed by _______ Builder",
        "WHEREAS the conveyance deed has not yet been registered by the builder but the space is recorded in the builder's records"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "IT/Cyber Space Details",
          "body": "The IT/cyber space comprises _______ square feet in the _______ IT Park. The space includes fiber optic connectivity, power backup, and shared infrastructure as per the park specifications.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Builder Record Transfer",
          "body": "The seller shall direct the builder to transfer the IT space in the buyer's name in the builder's records within 30 days of payment. The builder shall update its ownership records accordingly.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Future Conveyance Deed Registration",
          "body": "The buyer shall have the right to pursue the builder for conveyance deed registration at the buyer's cost. The seller provides indemnity for any builder delays in registration.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is IT/cyber space treated differently from regular commercial space?",
        "answer": "Yes, IT parks often have specific infrastructure requirements, shared amenities, and technology-specific covenants. The agreement includes IT park-specific provisions not found in regular commercial spaces."
      },
      {
        "question": "Can I sublease my IT space to another company?",
        "answer": "Typically yes, if the IT park bylaws permit it. The agreement includes subletting rights and procedures. Some parks restrict subletting to maintain occupancy control."
      },
      {
        "question": "What happens if the IT park infrastructure fails?",
        "answer": "The IT park management is responsible for maintaining infrastructure including power, internet, and cooling systems. The agreement clarifies management's service obligations."
      },
      {
        "question": "Will I get registered conveyance deed eventually?",
        "answer": "Yes, you can apply for registration once you take possession. Until the builder registers, you have builder records providing ownership proof. After registration, you get absolute title."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "single-floor-multi-floor-building-leasehold-freehold",
    "documentName": "Agreement to Sell of Single Floor in Multi-Floor Building - Leasehold Plot Converted to Freehold",
    "shortLabel": "Single Floor - Converted Freehold",
    "metaTitle": "Single Floor Multi-Story Building Sale - Freehold ₹49",
    "metaDescription": "Agreement for selling single floor in multi-story building on converted freehold plot. Includes floor-specific provisions and shared building rights.",
    "focusKeyword": "single floor building leasehold converted freehold sale",
    "secondaryKeywords": [
      "apartment floor sale",
      "shared building property",
      "converted freehold floor",
      "multi-story building sale",
      "building floor agreement"
    ],
    "heroSubheading": "Sell your single floor in a multi-story building on converted freehold land with an agreement that clarifies floor rights, common area access, and conversion status.",
    "scenario": "Selling one floor in a multi-floor building constructed on perpetual leasehold plot subsequently converted to freehold. The building has ground floor, first floor, and second floor.",
    "whoNeeds": [
      "Multi-floor building owners selling single units",
      "Residential or commercial floor owners",
      "Buyers acquiring individual building floors",
      "Real estate professionals in multi-unit properties"
    ],
    "whenToUse": [
      "For sales of individual floors in buildings",
      "When building is on converted freehold land",
      "If multiple owners share the building",
      "To clarify common area usage and costs"
    ],
    "risksOfGenericFormat": [
      "Multi-owner building governance is frequently inadequately addressed",
      "Common area rights and responsibilities are often unclear",
      "Leasehold conversion implications for shared buildings are frequently missed",
      "Floor-specific usage restrictions are often omitted"
    ],
    "clausesIncluded": [
      "Building details and conversion certification",
      "Single floor identification and specifications",
      "Shared building structure and governance",
      "Common area rights and access",
      "Maintenance and service charge allocation",
      "Co-owner relationships and restrictions",
      "Floor-specific usage and restrictions",
      "Indemnity for shared building issues"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL SINGLE FLOOR IN MULTI-FLOOR BUILDING",
      "recitals": [
        "WHEREAS the Seller owns _______ Floor in a residential/commercial building situated at _______",
        "WHEREAS the building is constructed on a perpetual leasehold plot that has been converted to absolute freehold vide Conversion Certificate dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Leasehold to Freehold Conversion",
          "body": "The building is constructed on perpetual leasehold land that has been converted to absolute freehold. The conversion certificate dated _______ confirms the building is now on freehold land with no lease restrictions.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Single Floor and Common Areas",
          "body": "The seller sells only the _______ floor comprising _______ square feet. The buyer has rights to use common areas including stairs, passages, and external walls proportionate to ownership.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Building Maintenance and Co-Owner Relationships",
          "body": "The buyer becomes a co-owner of the building structure with other floor owners. The buyer shall contribute to building maintenance charges proportionate to floor area and comply with building bylaws.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What are common area rights for individual floor owners?",
        "answer": "Common area rights include use of stairs, passages, entrances, and external walls. These areas are jointly owned. Usage must not interfere with other owners' rights."
      },
      {
        "question": "How are building maintenance costs divided?",
        "answer": "Costs are typically divided based on floor area percentage or equal shares among owners. The agreement specifies the allocation. The buyer is responsible for costs from possession date forward."
      },
      {
        "question": "Can I sell my floor independently without other owners' permission?",
        "answer": "Yes, you can sell your floor independently. However, the buyer inherits your obligations to contribute to building maintenance and follow building bylaws."
      },
      {
        "question": "What if one floor owner doesn't pay maintenance?",
        "answer": "Other owners can collectively recover dues or pursue legal action. The building typically has an association managing finances. Non-payment can result in penalties or lien on the property."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-colony-through-power-attorney",
    "documentName": "Agreement to Sell of Residential Plot in Colony Through Power of Attorney Holder",
    "shortLabel": "Plot - POA Holder Sale",
    "metaTitle": "Residential Plot Sale - Power of Attorney Holder ₹49",
    "metaDescription": "Agreement for selling residential plots through authorized power of attorney holder. Includes POA authority verification and principal ratification clauses.",
    "focusKeyword": "residential plot sale power of attorney holder",
    "secondaryKeywords": [
      "poa property sale agreement",
      "attorney-based property transfer",
      "authorized agent plot sale",
      "power of attorney property",
      "agent-sold residential plot"
    ],
    "heroSubheading": "Sell your residential plot through an authorized POA holder with an agreement that validates attorney authority, protects principal rights, and ensures proper authorization documentation.",
    "scenario": "A residential plot in a colony being sold through a power of attorney holder authorized by the owner.",
    "whoNeeds": [
      "Property owners using POA for sales",
      "POA holders authorized to sell plots",
      "Buyers acquiring plot-from POA agents",
      "Non-resident owners managing properties"
    ],
    "whenToUse": [
      "When owner cannot be present for sale",
      "For plots in colonies with POA arrangements",
      "If owner is abroad or unavailable",
      "To document agent authority properly"
    ],
    "risksOfGenericFormat": [
      "POA authority limits are frequently not clearly defined",
      "Principal's consent verification is often inadequate",
      "Agent liability and indemnity clauses are typically incomplete",
      "Principal's ratification procedures are frequently missing"
    ],
    "clausesIncluded": [
      "Power of attorney deed details and registration",
      "Agent/POA holder authority and scope",
      "Principal's (owner's) identification and capacity",
      "Principal's ratification of agent actions",
      "Authority limits and restrictions",
      "Agent's indemnity and liability",
      "Principal's obligations post-sale",
      "Buyer's right to verify principal consent"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT THROUGH POWER OF ATTORNEY",
      "recitals": [
        "WHEREAS _______ (Principal) is the registered owner of residential plot in colony situated at _______",
        "WHEREAS the Principal has authorized _______ as Power of Attorney holder vide Power of Attorney deed dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "POA Authority and Scope",
          "body": "The POA holder exhibits the Power of Attorney deed dated _______. The POA authorizes the holder to sell the residential plot and execute all necessary documents on behalf of the principal.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Principal's Ratification",
          "body": "The principal ratifies all actions of the POA holder under this agreement. The principal shall cooperate in completion including possession delivery, document execution, and registration.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Buyer's Verification Right",
          "body": "The buyer has the right to verify the principal's capacity and consent. The POA holder shall facilitate buyer's communication with the principal if requested for verification purposes.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is a power of attorney valid for selling residential plots?",
        "answer": "Yes, if the POA is duly executed, registered, and explicitly authorizes property sale. The agreement requires exhibition of the registered POA deed for buyer verification."
      },
      {
        "question": "Can the principal sell the plot themselves after giving POA?",
        "answer": "The principal can still sell, but it would require revoking the POA. Typically, giving POA means the principal authorizes the POA holder exclusively for that period."
      },
      {
        "question": "What if the POA holder acts beyond their authority?",
        "answer": "Actions beyond POA authority are invalid. The agreement specifies scope of authority. The principal provides ratification confirming the POA holder acts within defined limits."
      },
      {
        "question": "Can I verify the principal's identity before signing?",
        "answer": "Yes, you should. The agreement allows buyer to contact the principal for verification. This protects you against fraud. Video call or notarized confirmation from principal is recommended."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-huda-allottee-conveyance-pending",
    "documentName": "Agreement to Sell of Residential Plot - HUDA Allottee with Pending Conveyance Deed Registration",
    "shortLabel": "HUDA Plot - Pending Conveyance",
    "metaTitle": "HUDA Allotted Plot Sale - Pending Conveyance ₹49",
    "metaDescription": "Agreement for selling HUDA allotted residential plots with unregistered conveyance deed. Covers state development authority allotments and registration procedures.",
    "focusKeyword": "HUDA allotted plot sale agreement conveyance pending",
    "secondaryKeywords": [
      "government authority plot sale",
      "state allotment property agreement",
      "development authority conveyance",
      "huda residential plot",
      "authority-allotted property transfer"
    ],
    "heroSubheading": "Sell your HUDA-allotted plot with confidence using an agreement that addresses pending conveyance registration and ensures compliance with authority transfer procedures.",
    "scenario": "Selling a residential plot purchased by the seller from an allottee of HUDA (Haryana Urban Development Authority). The conveyance deed has not yet been registered by HUDA.",
    "whoNeeds": [
      "HUDA allottees and second purchasers",
      "Buyers acquiring HUDA properties",
      "Authority-allotted property sellers",
      "Real estate professionals in government allotments"
    ],
    "whenToUse": [
      "For HUDA and other authority-allotted plots",
      "When conveyance deed is still pending",
      "For government development authority properties",
      "To clarify registration timeline and procedures"
    ],
    "risksOfGenericFormat": [
      "HUDA/authority-specific procedures are frequently missing",
      "Allotment letter vs. conveyance deed implications are often unclear",
      "Authority registration timelines are typically inadequately documented",
      "Authority transfer approval requirements are frequently omitted"
    ],
    "clausesIncluded": [
      "HUDA/authority details and allotment identification",
      "Allotment letter and original allottee",
      "Current seller's acquisition details",
      "Unregistered conveyance deed status",
      "Authority approval for second-party transfer",
      "Registration timeline and buyer's rights",
      "Authority's cooperation obligation",
      "Indemnity for authority-related delays"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL HUDA-ALLOTTED RESIDENTIAL PLOT",
      "recitals": [
        "WHEREAS the Seller purchased the residential plot from the original HUDA allottee vide Agreement dated _______",
        "WHEREAS the HUDA conveyance deed has not yet been registered but the plot is allotted and acknowledged by HUDA"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "HUDA Allotment and Seller's Title",
          "body": "The original allottee received the plot from HUDA vide Allotment Letter dated _______. The seller subsequently acquired the plot from the allottee. HUDA acknowledges the allotment to the original allottee.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Pending Conveyance Deed Registration",
          "body": "HUDA has not yet registered the conveyance deed for this plot. The seller shall cooperate with HUDA for registration at the seller's cost. The buyer has the right to pursue registration after taking possession.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Authority's Approval and Cooperation",
          "body": "HUDA's approval for the transfer to the buyer shall be obtained before completion. HUDA shall provide no-objection certificate and cooperate in transferring the plot in the buyer's name.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is the difference between allotment letter and conveyance deed?",
        "answer": "Allotment letter is the initial document allocating the plot. Conveyance deed is the formal registered document establishing ownership. HUDA issues both, but may delay registering the conveyance deed."
      },
      {
        "question": "Can I register the plot in my name if HUDA hasn't registered the conveyance deed?",
        "answer": "After taking possession, you can apply for registration based on the allotment letter and your purchase agreement. HUDA must cooperate. Once registered, you have absolute title."
      },
      {
        "question": "Do I need HUDA's approval for second-party transfer?",
        "answer": "Yes, HUDA typically gives approval for transfers to ensure compliance with allotment conditions. This agreement includes procedures for obtaining HUDA's no-objection certificate."
      },
      {
        "question": "What happens if HUDA refuses to transfer or register?",
        "answer": "HUDA typically approves transfers if conditions are satisfied. The agreement includes indemnity from the seller for any HUDA-related delays or refusals."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "shop-multistoried-shopping-complex-builder",
    "documentName": "Agreement to Sell of Shop in Multi-Storied Shopping Complex Developed by Builder",
    "shortLabel": "Multi-Story Shopping Complex Shop",
    "metaTitle": "Shopping Complex Shop Sale Agreement - Builder ₹49",
    "metaDescription": "Agreement for selling retail shop in multi-story shopping complex. Includes builder-developed complex provisions and commercial use clauses.",
    "focusKeyword": "shop sale multistoried shopping complex agreement",
    "secondaryKeywords": [
      "retail shop sale agreement",
      "shopping complex property",
      "commercial shop transfer",
      "builder-developed retail",
      "shopping mall shop"
    ],
    "heroSubheading": "Sell your shop in a multi-story shopping complex with an agreement that addresses commercial use restrictions, handles complex bylaws, and ensures smooth title transfer.",
    "scenario": "Selling a shop in a multi-storied shopping complex developed by a builder, which was purchased by the seller from the builder.",
    "whoNeeds": [
      "Shop owners in shopping complexes",
      "Retail merchants selling store spaces",
      "Buyers acquiring retail shops",
      "Shopping complex investors"
    ],
    "whenToUse": [
      "For shops in organized shopping complexes",
      "When shop was purchased from builder",
      "If complex has common areas and bylaws",
      "To manage retail-specific restrictions"
    ],
    "risksOfGenericFormat": [
      "Shopping complex bylaws and restrictions are frequently omitted",
      "Commercial use restrictions specific to retail are often incomplete",
      "Common area maintenance responsibilities are typically unclear",
      "Complex management and association provisions are frequently missing"
    ],
    "clausesIncluded": [
      "Shopping complex details and builder information",
      "Shop specifications and location in complex",
      "Complex bylaws and commercial restrictions",
      "Common area rights and shared facilities",
      "Maintenance charges and complex fees",
      "Signage and advertising rights and restrictions",
      "Operating hours and tenant compliance",
      "Indemnity for complex-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL SHOP IN MULTI-STORIED SHOPPING COMPLEX",
      "recitals": [
        "WHEREAS the Seller purchased the shop from _______ Builder in _______ Shopping Complex situated at _______",
        "WHEREAS the shop is one of multiple commercial units in the complex with shared facilities"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Shop Details and Complex Location",
          "body": "The shop comprises _______ square feet and is located at the _______ level of the complex. The complex has _______ total shops and common areas including parking and corridors.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Commercial Use and Permitted Activities",
          "body": "The shop is exclusively for commercial retail use. Permitted activities include _______ as per complex bylaws. Prohibited uses include residential, manufacturing, and hazardous activities.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Complex Management and Maintenance Charges",
          "body": "The complex is managed by _______ Management Committee. The buyer shall pay proportionate maintenance charges for common areas and building upkeep. Current outstanding charges are the seller's responsibility.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What types of businesses can I operate from my shop?",
        "answer": "Permitted businesses depend on complex bylaws. Typically retail shops, offices, restaurants, and services are allowed. Check the complex documents for restrictions on specific businesses."
      },
      {
        "question": "Can I have signage and advertisements for my business?",
        "answer": "Yes, but signage must comply with complex guidelines regarding size, design, and location. External signage typically requires complex management approval."
      },
      {
        "question": "Are parking spaces included with the shop?",
        "answer": "Parking availability depends on complex design. Some complexes provide dedicated parking; others have shared parking. Check allotment documents for parking details."
      },
      {
        "question": "What if I want to close my shop temporarily?",
        "answer": "Maintenance charges are typically due regardless of shop occupancy. The agreement clarifies ongoing obligations for shop owners even if not operating."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "shop-shopping-mall-building-builder",
    "documentName": "Agreement to Sell of Shop in Shopping Mall Building Developed by Builder",
    "shortLabel": "Shopping Mall Shop - Builder",
    "metaTitle": "Shopping Mall Shop Sale Agreement - Builder Property ₹49",
    "metaDescription": "Agreement for selling retail shop in shopping mall developed by builder. Includes mall-specific management and operating provisions.",
    "focusKeyword": "shop shopping mall sale agreement",
    "secondaryKeywords": [
      "mall shop sale agreement",
      "retail space mall",
      "shopping center shop",
      "mall property transfer",
      "mall retail unit"
    ],
    "heroSubheading": "Sell your shopping mall shop with an agreement that covers mall-specific operations, clarifies tenant management relationships, and ensures compliance with mall policies.",
    "scenario": "Selling a shop in a shopping mall building developed by a builder, which was purchased by the seller from the builder.",
    "whoNeeds": [
      "Mall shop owners and merchants",
      "Retail space investors",
      "Buyers acquiring mall retail units",
      "Shopping mall property managers"
    ],
    "whenToUse": [
      "For shops in modern shopping malls",
      "When mall is professionally managed",
      "If mall has tenant policies and standards",
      "To address mall-specific operational clauses"
    ],
    "risksOfGenericFormat": [
      "Shopping mall-specific management rules are frequently omitted",
      "Tenant policies and operating standards are often inadequately documented",
      "Ancillary services (parking, utilities, security) are frequently unclear",
      "Mall association and management structure are typically not addressed"
    ],
    "clausesIncluded": [
      "Shopping mall details and builder information",
      "Shop location and specifications in mall",
      "Mall management company and policies",
      "Operating hours and business rules",
      "Parking, utilities, and common services",
      "Signage and branding restrictions",
      "Maintenance and service charges",
      "Indemnity for mall-related disputes"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL SHOP IN SHOPPING MALL",
      "recitals": [
        "WHEREAS the Seller purchased the retail shop from _______ Builder in _______ Shopping Mall situated at _______",
        "WHEREAS the mall is professionally managed with strict operating standards and tenant policies"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Shopping Mall and Shop Details",
          "body": "The shop comprises _______ square feet in the _______ Shopping Mall. The mall is managed by _______ Management Company and has _______ retail units with restaurants and entertainment.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Mall Policies and Operating Standards",
          "body": "The buyer shall comply with mall operating policies including operating hours (typically 10 AM to 10 PM), dress code for employees, product standards, and quality of service requirements.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Parking, Utilities, and Services",
          "body": "The buyer receives rights to use parking spaces as allocated. Utilities including electricity, water, and security services are included in maintenance charges. Utilities are metered separately.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Do shopping malls have strict operating hour requirements?",
        "answer": "Yes, typically all mall shops must operate during mall hours (usually 10 AM to 10 PM). Deviating from these hours requires mall management approval and may affect your business."
      },
      {
        "question": "Can I choose what products to sell in my mall shop?",
        "answer": "No, malls often restrict certain product categories to maintain mall positioning. Prohibited products might include alcohol, tobacco, or anything violating mall policies. Check mall bylaws."
      },
      {
        "question": "What happens if I fail to meet mall standards or violate policies?",
        "answer": "Violations can result in notices, fines, or suspension of mall privileges. Serious violations may result in termination of your occupancy. The agreement clarifies these provisions."
      },
      {
        "question": "Are parking spaces guaranteed for my customers?",
        "answer": "Parking is typically shared among all mall shoppers. Dedicated parking spaces may be allocated based on shop size. Check allotment documents for specific parking provisions."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "undivided-share-rear-flat-will-acquired",
    "documentName": "Agreement to Sell of Undivided Share in Rear Flat Acquired Through Will",
    "shortLabel": "Will-Inherited Flat Share",
    "metaTitle": "Undivided Share Flat Sale - Will Inheritance ₹49",
    "metaDescription": "Agreement for selling undivided share in flat inherited through will. Includes inheritance documentation and joint heir provisions.",
    "focusKeyword": "undivided share flat inherited will sale",
    "secondaryKeywords": [
      "inherited property sale agreement",
      "will beneficiary agreement",
      "flat share inheritance",
      "joint heir property sale",
      "inherited real estate transfer"
    ],
    "heroSubheading": "Sell your undivided share in a flat inherited through a will with an agreement that validates inheritance, protects co-heir rights, and ensures clean title transfer.",
    "scenario": "Selling undivided share in a rear flat in a building acquired through a will by the seller.",
    "whoNeeds": [
      "Will beneficiaries selling inherited property",
      "Co-heirs selling undivided shares",
      "Buyers acquiring inherited property shares",
      "Estate settlement professionals"
    ],
    "whenToUse": [
      "For property inherited through valid will",
      "When selling only a portion/share",
      "If multiple heirs exist with undivided shares",
      "To settle estate and distribute inheritance"
    ],
    "risksOfGenericFormat": [
      "Will authentication and probate requirements are frequently omitted",
      "Undivided share implications are often not clearly explained",
      "Co-heir rights and consent requirements are typically incomplete",
      "Inheritance tax and succession duty provisions are frequently missing"
    ],
    "clausesIncluded": [
      "Will authenticated copy and probate order",
      "Seller's inheritance status and will provisions",
      "Undivided share percentage and details",
      "Co-heirs' existence and consent requirements",
      "No pending inheritance disputes",
      "Co-heir notification and right of first refusal",
      "Inheritance tax clearance",
      "Indemnity for inheritance-related claims"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL UNDIVIDED SHARE IN FLAT ACQUIRED THROUGH WILL",
      "recitals": [
        "WHEREAS the Seller inherited an undivided share in a rear flat situated at _______ from the deceased _______ through the authenticated will dated _______",
        "WHEREAS the will was probated and the Seller obtained Probate Certificate from the Hon'ble Court dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Will and Probate Documentation",
          "body": "The seller exhibits the authenticated will dated _______ and the Probate Certificate dated _______. These documents establish the seller's legal right to inherit and sell the undivided share.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Undivided Share and Co-Heirs",
          "body": "The seller owns an undivided _____% share in the flat. The other co-heirs own the remaining shares. All co-heirs shall be notified of the sale and have right of first refusal.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Inheritance Tax and Duty Clearance",
          "body": "The seller confirms that all inheritance taxes and succession duties have been paid. The seller provides clearance certificate from relevant authorities confirming tax compliance.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is an undivided share in a flat?",
        "answer": "An undivided share means you own a percentage of the entire flat (e.g., 33% or 50%) jointly with other co-owners. You cannot claim a specific physical portion—it's a financial interest."
      },
      {
        "question": "Do I need consent from co-heirs to sell my share?",
        "answer": "Not legal consent, but courtesy notice is advisable. The co-heirs have a right of first refusal—they can purchase your share at the offered price before you sell to an outsider."
      },
      {
        "question": "What happens to the co-owners after I sell my share?",
        "answer": "The new buyer becomes a co-owner with an undivided share. All co-owners continue jointly owning the flat. The buyer must comply with all co-ownership obligations."
      },
      {
        "question": "Can the buyer get registered title to their share?",
        "answer": "Yes, registration documents will show the buyer as undivided share owner. The buyer gets a deed showing their specific percentage share in the property."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-house-joint-owners-gpa-holder",
    "documentName": "Agreement to Sell Jointly by Husband & Wife Through GPA Holder - Residential House",
    "shortLabel": "Couple's House - GPA Sale",
    "metaTitle": "Married Couple Residential House Sale - GPA Agreement ₹49",
    "metaDescription": "Agreement for selling residential house jointly by married couple through authorized GPA holder. Includes spousal authorization and agent authority documentation.",
    "focusKeyword": "residential house sale joint owners gpa holder",
    "secondaryKeywords": [
      "couple property sale agreement",
      "general power of attorney real estate",
      "joint owner agent sale",
      "married couple property transfer",
      "spouse-authorized agent"
    ],
    "heroSubheading": "Sell your jointly-owned residential house through an authorized GPA holder with an agreement that validates both spouses' consent and agent authority.",
    "scenario": "Husband and wife jointly selling a residential house through their authorized GPA (General Power of Attorney) holder.",
    "whoNeeds": [
      "Married couples selling jointly-owned property",
      "Joint owners using agents for sales",
      "Buyers purchasing from GPA-authorized sellers",
      "Couples with one spouse abroad"
    ],
    "whenToUse": [
      "For jointly-owned properties sold through agents",
      "When one spouse cannot be present",
      "If both spouses must consent but one uses GPA",
      "To document spousal authorization clearly"
    ],
    "risksOfGenericFormat": [
      "Spousal authorization through GPA is often inadequately documented",
      "Joint ownership consent requirements are frequently unclear",
      "Matrimonial property implications are typically not addressed",
      "Spousal consent verification procedures are often incomplete"
    ],
    "clausesIncluded": [
      "Joint ownership by husband and wife",
      "GPA holder's authority and scope",
      "Both spouses' ratification and consent",
      "Matrimonial property acknowledgment",
      "GPA holder's representation of both owners",
      "Equal division of proceeds between spouses",
      "Both spouses' indemnity and warranty",
      "Buyer's right to verify spousal consent"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL HOUSE BY JOINT OWNERS THROUGH GPA",
      "recitals": [
        "WHEREAS _______ (Husband) and _______ (Wife) are jointly registered owners of residential house situated at _______",
        "WHEREAS both have authorized _______ as their General Power of Attorney holder vide GPA deed dated _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Joint Ownership and Spousal Consent",
          "body": "Both husband and wife are joint owners with equal undivided shares. Both have authorized the GPA holder through a registered GPA deed. Both hereby consent to the sale.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "GPA Holder Authority",
          "body": "The GPA holder exhibits the registered GPA deed dated _______. The GPA authorizes the holder to execute this agreement and all related documents on behalf of both spouses jointly.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Spouse Indemnity and Equal Division",
          "body": "Both spouses provide joint and several indemnity confirming the sale is with their voluntary consent. Sale proceeds shall be divided equally between them. Both shall cooperate in completion.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can the GPA holder represent both spouses in property sale?",
        "answer": "Yes, if the GPA explicitly authorizes representation of both spouses. The GPA deed must name both spouses and authorize the holder to act for both in property transactions."
      },
      {
        "question": "What if one spouse later claims they didn't authorize the GPA?",
        "answer": "The registered GPA is evidence of authorization. Challenging it requires proving fraud or coercion at the time of execution. This agreement includes indemnity protecting you against such claims."
      },
      {
        "question": "How are sale proceeds divided between spouses when sold through GPA?",
        "answer": "Proceeds should be divided equally unless spouses agreed otherwise in writing. The agreement requires both to specify their bank accounts for receiving their respective shares."
      },
      {
        "question": "Can the buyer verify both spouses' consent independently?",
        "answer": "Yes, the agreement allows the buyer to contact both spouses for verification if needed. Video call or notarized consent from both spouses provides additional assurance."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-colony-developer-transfer-records",
    "documentName": "Agreement to Sell of Residential Plot in Colony Through Transfer in Developer Records (Conveyance Deed Not Executed)",
    "shortLabel": "Developer Plot - Records Transfer",
    "metaTitle": "Residential Plot Developer Records Transfer Agreement ₹49",
    "metaDescription": "Agreement for selling residential plot through developer record transfer without conveyance deed. Includes developer cooperation and future registration rights.",
    "focusKeyword": "residential plot transfer developer records agreement",
    "secondaryKeywords": [
      "developer record transfer",
      "plot without conveyance deed",
      "developer property transfer",
      "unregistered plot sale",
      "builder record transfer"
    ],
    "heroSubheading": "Sell your residential plot through developer records with an agreement that ensures smooth transfer and clarifies future conveyance deed registration rights.",
    "scenario": "Selling a residential plot in a colony through transfer in the developer's records as the conveyance deed of the plot has not yet been executed by the builder/developer.",
    "whoNeeds": [
      "Plot owners in developer colonies",
      "Buyers acquiring developer-recorded properties",
      "Second purchasers of developer plots",
      "Colony property investors"
    ],
    "whenToUse": [
      "For plots with unexecuted conveyance deeds",
      "When developer still controls records",
      "For second or third-party transfers",
      "To manage developer cooperation"
    ],
    "risksOfGenericFormat": [
      "Developer record transfer procedures are frequently not documented",
      "Conveyance deed execution requirements are often omitted",
      "Developer's obligation to execute deed is typically not specified",
      "Buyer's rights for future registration are frequently unclear"
    ],
    "clausesIncluded": [
      "Developer and colony details",
      "Plot allotment and record details",
      "Conveyance deed status (not yet executed)",
      "Developer record transfer procedure",
      "Developer's obligation to execute deed",
      "Timeline for conveyance deed execution",
      "Buyer's right to pursue execution",
      "Developer indemnity and cooperation"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT THROUGH DEVELOPER RECORDS",
      "recitals": [
        "WHEREAS the Seller owns residential plot in _______ Colony developed by _______ Developer",
        "WHEREAS the conveyance deed has not yet been executed by the Developer but the plot is recorded in the Developer's records"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Developer Record and Plot Details",
          "body": "The plot is recorded in the Developer's records. The allotment to the original purchaser is documented. The Seller acquired the plot from the original purchaser through intervening transfers.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Developer Record Transfer",
          "body": "The Seller shall submit a request to the Developer to transfer the plot in the Buyer's name in Developer records. The Developer shall update records within 30 days upon receipt of joint request from both Seller and Buyer.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Conveyance Deed Execution",
          "body": "The Buyer shall have the right to pursue the Developer for conveyance deed execution and registration. The Developer's obligation to execute the deed is a condition for final title acquisition.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Why would a developer not execute the conveyance deed?",
        "answer": "Developers sometimes delay deed execution due to administrative processes, pending clearances, or financial settlements with authorities. The buyer can pursue execution after taking possession."
      },
      {
        "question": "Is it safe to buy without executed conveyance deed?",
        "answer": "Moderately safe if developer records are reliable and documented. However, registered conveyance deed provides stronger legal protection. The agreement allows buyer to pursue registration."
      },
      {
        "question": "Who bears the cost of getting conveyance deed executed?",
        "answer": "The developer typically executes the deed at its cost. If the developer fails, the buyer may have to bear costs to pursue execution through legal means. The agreement includes indemnity for such costs."
      },
      {
        "question": "Can I register my plot if conveyance deed is not executed?",
        "answer": "You can apply for registration based on your purchase agreement and developer records. The developer must cooperate. Once registered, you get full legal title."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-plot-developer-unpaid-balance",
    "documentName": "Agreement to Sell of Residential Plot in Colony - Full Payment Not Yet Made to Developer",
    "shortLabel": "Plot - Balance Payment Pending",
    "metaTitle": "Residential Plot Sale - Pending Developer Payment ₹49",
    "metaDescription": "Agreement for selling residential plot where seller hasn't completed developer payment. Addresses payment completion, title transfer, and registration procedures.",
    "focusKeyword": "residential plot sale unpaid balance developer",
    "secondaryKeywords": [
      "plot partial payment agreement",
      "developer payment pending",
      "incomplete purchase transfer",
      "property with outstanding developer dues",
      "partial payment property sale"
    ],
    "heroSubheading": "Sell your residential plot where developer payment is incomplete with an agreement that specifies payment completion, ensures proper title transfer, and prevents registration delays.",
    "scenario": "Selling a residential plot in a colony where the seller has not made full payment of the plot amount to the developer. The buyer must complete the developer payment.",
    "whoNeeds": [
      "Plot owners with pending developer payments",
      "Buyers assuming developer payment obligations",
      "Developers tracking multiple payment arrangements",
      "Property investors managing payment schedules"
    ],
    "whenToUse": [
      "For plots with outstanding developer dues",
      "When seller cannot pay before sale completion",
      "If buyer is willing to settle developer dues",
      "To transfer payment obligations to buyer"
    ],
    "risksOfGenericFormat": [
      "Developer payment completion procedures are frequently not documented",
      "Title transfer implications of incomplete payment are often unclear",
      "Developer default and lien provisions are typically not addressed",
      "Registration procedures with pending dues are frequently omitted"
    ],
    "clausesIncluded": [
      "Original allotment and purchase price from developer",
      "Amount paid and balance outstanding",
      "Developer's payment schedule and terms",
      "Buyer's obligation to complete developer payment",
      "Payment timeline and conditions",
      "Developer's no-objection upon full payment",
      "Title transfer after payment completion",
      "Indemnity for developer-related issues"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL RESIDENTIAL PLOT WITH PENDING DEVELOPER PAYMENT",
      "recitals": [
        "WHEREAS the Seller purchased the plot from _______ Developer at a total consideration of Rs. _______",
        "WHEREAS the Seller has paid Rs. _______ to the Developer and a balance of Rs. _______ remains outstanding"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Developer Payment Status",
          "body": "The Seller has paid Rs. _______ to Developer against total purchase price of Rs. _______. The outstanding balance is Rs. _______, which shall be completed by the Buyer directly to the Developer.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Buyer's Payment Obligation",
          "body": "The Buyer shall pay the balance amount of Rs. _______ directly to the Developer within _______ days of executing this agreement. Payment shall be made as per Developer's payment schedule.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Title Transfer After Payment",
          "body": "Upon receipt of full payment, the Developer shall provide no-objection certificate. Only then shall the title be transferred fully to the Buyer. The Developer shall execute conveyance deed and facilitate registration.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Why would a seller sell a plot with outstanding developer payment?",
        "answer": "Some sellers cannot afford to complete developer payment. They prefer the buyer assumes the obligation. This typically results in a lower sale price to compensate the buyer."
      },
      {
        "question": "What if the buyer cannot complete developer payment?",
        "answer": "The agreement specifies that payment completion is a condition for transfer. If the buyer fails, the developer may initiate recovery action or the deal may be cancelled."
      },
      {
        "question": "Can developer claim the plot if buyer doesn't pay?",
        "answer": "Yes, the developer typically has a lien on the plot until payment is completed. The buyer must ensure timely payment to avoid developer action."
      },
      {
        "question": "Is there any interest or penalty for delayed payment?",
        "answer": "Developer agreements typically include interest and penalty clauses for delayed payment. The buyer should clarify payment terms with the developer before completing the sale."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "agricultural-land-simple",
    "documentName": "Agreement to Sell of Agricultural Land",
    "shortLabel": "Agricultural Land Sale",
    "metaTitle": "Agricultural Land Sale Agreement Template ₹49",
    "metaDescription": "Agreement for selling agricultural land. Covers agricultural use, tenant farmer rights, and crop-related provisions for farm property sales.",
    "focusKeyword": "agricultural land sale agreement",
    "secondaryKeywords": [
      "farm land agreement",
      "agricultural property sale",
      "farming land transfer",
      "crop land agreement",
      "farm property contract"
    ],
    "heroSubheading": "Sell your agricultural land with an agreement that protects tenant rights, clarifies crop arrangements, and ensures compliance with agricultural regulations.",
    "scenario": "Simple agreement to sell agricultural land without specific company status or complicated arrangements.",
    "whoNeeds": [
      "Farmers selling agricultural land",
      "Landowners liquidating farmland",
      "Buyers acquiring farming property",
      "Agricultural investors"
    ],
    "whenToUse": [
      "For straightforward farmland sales",
      "When land is under cultivation",
      "If tenant farmers are working the land",
      "To document simple agricultural transfers"
    ],
    "risksOfGenericFormat": [
      "Tenant farmer protections are frequently not addressed",
      "Agricultural regulations and land-use restrictions are often omitted",
      "Crop-sharing agreements are typically not documented",
      "Environmental and water rights issues are frequently missed"
    ],
    "clausesIncluded": [
      "Agricultural land details and location",
      "Current use and crop information",
      "Tenant farmer arrangements (if any)",
      "Irrigation and water rights",
      "Soil and land quality warranty",
      "Government permits and certifications",
      "Crop agreements and income sharing",
      "Environmental compliance provisions"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL AGRICULTURAL LAND",
      "recitals": [
        "WHEREAS the Seller is the registered owner of agricultural land situated at _______ comprising _______ hectares",
        "WHEREAS the land is currently under cultivation for _______ and the Seller desires to sell the same"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Land Details and Current Use",
          "body": "The agricultural land comprises _______ hectares with _______ hectares under irrigation. The land is currently cultivating _______. The soil quality is suitable for _______.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Tenant Farmer Arrangements",
          "body": "If tenant farmers are working the land, their rights are transferred to the Buyer. The Buyer shall honor existing crop arrangements and income-sharing agreements.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Water Rights and Irrigation",
          "body": "The Seller transfers all water rights and irrigation entitlements to the Buyer. Any canal or well rights are included in the sale. Buyer shall verify water availability with irrigation department.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Are tenant farmers automatically transferred to the new owner?",
        "answer": "Yes, tenant farmer rights are typically protected by law. The new owner must honor existing agreements and cannot evict tenants arbitrarily. This agreement documents the transfer."
      },
      {
        "question": "What water rights come with the land?",
        "answer": "Water rights include canal allocation, groundwater extraction (if allowed), and irrigation entitlements. These are crucial for farming. The buyer should verify with irrigation authorities."
      },
      {
        "question": "Are there restrictions on how I use the land?",
        "answer": "Yes, land classified as agricultural is restricted to farming. Converting to non-agricultural use requires government permission and may attract taxes. Restrictions protect agricultural productivity."
      },
      {
        "question": "Do agricultural properties get subsidy or incentive benefits?",
        "answer": "Yes, agricultural land may qualify for various government subsidies and incentives for farming, mechanization, and irrigation. The buyer should investigate available benefits."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "nri-apartment-general-power-attorney-counsulate",
    "documentName": "Agreement to Sell by NRI of Apartment Acquired by Allotment From Builder Through General Power of Attorney (Abroad, Notarized by Consulate)",
    "shortLabel": "NRI Apartment - Consulate GPA",
    "metaTitle": "NRI Apartment Sale Agreement - Consulate GPA ₹49",
    "metaDescription": "Agreement for NRI selling apartment through consulate-attested general power of attorney. Addresses NRI status, foreign execution, and stamp act compliance.",
    "focusKeyword": "nri apartment sale power attorney agreement",
    "secondaryKeywords": [
      "nri property sale agreement",
      "non-resident property transfer",
      "power of attorney foreign",
      "consulate gpa real estate",
      "nri real estate sale"
    ],
    "heroSubheading": "Sell your apartment as an NRI using a consulate-attested GPA with an agreement that validates foreign execution, ensures Indian stamp compliance, and protects all parties.",
    "scenario": "An NRI selling an apartment acquired by allotment from builder through a general power of attorney executed abroad and duly attested by the Consulate General of India.",
    "whoNeeds": [
      "NRIs selling Indian property",
      "Non-residents using GPA for property sales",
      "Buyers acquiring from NRI sellers",
      "Legal professionals handling NRI transactions"
    ],
    "whenToUse": [
      "For NRI property sales through GPA",
      "When seller is abroad and cannot travel",
      "If GPA is executed at Indian consulate",
      "To ensure proper stamp act compliance"
    ],
    "risksOfGenericFormat": [
      "NRI-specific legal requirements are frequently not addressed",
      "Consulate attestation procedures are often inadequately documented",
      "Indian stamp act compliance for foreign GPA is typically omitted",
      "NRI income tax and remittance implications are frequently missed"
    ],
    "clausesIncluded": [
      "NRI status and passport details",
      "GPA execution at consulate abroad",
      "Consulate attestation and authentication",
      "GPA holder authority and scope",
      "Indian stamp act compliance",
      "Apartment allotment and builder details",
      "NRI indemnity and representation",
      "Remittance authorization for proceeds"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL APARTMENT BY NRI THROUGH FOREIGN GPA",
      "recitals": [
        "WHEREAS _______ (NRI) is a Non-Resident Indian who acquired apartment situated in India from the builder",
        "WHEREAS the NRI has authorized _______ as General Power of Attorney holder vide GPA executed abroad and duly attested by _______ Consulate General of India on _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "NRI Status and Foreign GPA",
          "body": "The NRI holds Indian passport No. _______ and is currently resident at _______ (foreign country). The GPA was executed abroad and attested by the Indian Consulate on _______. The attestation confirms the GPA's validity.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Stamp Act Compliance",
          "body": "The GPA has been stamped in accordance with Indian Stamp Act. The GPA holder shall comply with all Indian legal requirements for property sale. This agreement shall be stamped as per Indian Stamp Act.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Proceeds Remittance to Foreign Country",
          "body": "Sale proceeds shall be remitted to the NRI's foreign bank account as per Foreign Exchange Management Act (FEMA) regulations. The buyer shall cooperate in FEMA-compliant remittance procedures.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is a GPA executed at an Indian consulate abroad valid in India?",
        "answer": "Yes, if properly executed and attested by the consulate. The consulate attestation confirms the GPA's validity. The GPA must comply with Indian law despite being executed abroad."
      },
      {
        "question": "Do I need to have the GPA stamped in India?",
        "answer": "Yes, the GPA must be stamped in accordance with Indian Stamp Act after being brought to India. The buyer's advocate typically handles stamping before registration."
      },
      {
        "question": "How can I receive the sale proceeds in my foreign bank account?",
        "answer": "This agreement includes FEMA-compliant remittance procedures. The buyer cooperates in transferring proceeds to your foreign account through proper banking channels within FEMA limits."
      },
      {
        "question": "Can the GPA holder act independently or does the NRI need to participate?",
        "answer": "The GPA holder can act independently for property sale. However, the NRI provides indemnity confirming the GPA holder acts within authority and with proper authorization."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "cancellation-agreement-sell",
    "documentName": "Cancellation Agreement for Cancelling an Agreement to Sell",
    "shortLabel": "Agreement Cancellation",
    "metaTitle": "Cancellation of Agreement to Sell Template ₹49",
    "metaDescription": "Agreement for canceling a previously executed agreement to sell. Includes mutual release and consideration for cancellation provisions.",
    "focusKeyword": "cancellation agreement to sell template",
    "secondaryKeywords": [
      "contract cancellation agreement",
      "mutual release agreement",
      "property sale cancellation",
      "deal cancellation template",
      "agreement termination"
    ],
    "heroSubheading": "Cancel a previous agreement to sell with a proper cancellation agreement that documents mutual consent, releases all parties, and prevents future disputes.",
    "scenario": "An agreement to cancel a previously executed agreement to sell between buyer and seller through mutual consent.",
    "whoNeeds": [
      "Buyers and sellers seeking to exit deals",
      "Parties wanting to cancel agreements",
      "Legal professionals handling deal cancellations",
      "Real estate professionals managing cancellations"
    ],
    "whenToUse": [
      "When both parties mutually agree to cancel",
      "Before taking possession or registration",
      "To formalize cancellation with consideration",
      "To prevent future legal disputes"
    ],
    "risksOfGenericFormat": [
      "Cancellation procedures are often vague",
      "Refund or consideration terms are frequently incomplete",
      "Release of liability clauses are often insufficient",
      "Prevention of future claims is frequently not addressed"
    ],
    "clausesIncluded": [
      "Original agreement to sell details",
      "Mutual consent to cancellation",
      "Refund arrangements and amount",
      "Cancellation charges and deductions",
      "Return of documents and possession",
      "Mutual release and waiver",
      "No future claims provision",
      "Indemnity for cancellation-related issues"
    ],
    "preview": {
      "titleLine": "CANCELLATION AGREEMENT FOR AGREEMENT TO SELL",
      "recitals": [
        "WHEREAS an Agreement to Sell dated _______ was executed between _______ (Seller) and _______ (Buyer) for property situated at _______",
        "WHEREAS both parties now desire to cancel the said agreement by mutual consent"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Original Agreement and Cancellation",
          "body": "The original Agreement to Sell dated _______ for the property is hereby cancelled and declared null and void. Both parties release each other from all obligations under the original agreement.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Refund and Consideration",
          "body": "The Buyer has paid Rs. _______ to the Seller. The Seller shall refund Rs. _______ to the Buyer (after deducting cancellation charges of Rs. _______) within _______ days of signing this agreement.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Mutual Release",
          "body": "Both parties mutually release each other from all claims and liabilities arising from the original agreement. Neither party shall pursue any legal action against the other regarding the cancelled agreement.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can I cancel an agreement to sell unilaterally?",
        "answer": "No, cancellation requires mutual consent. If one party refuses, the other cannot cancel arbitrarily without legal action. This agreement ensures both parties voluntarily cancel."
      },
      {
        "question": "Do I get full refund if I cancel?",
        "answer": "Typically not full refund. Cancellation charges are usually deducted for seller's losses, administrative costs, and opportunity costs. The agreement specifies cancellation charges."
      },
      {
        "question": "What happens if I cancel after taking possession?",
        "answer": "Cancellation becomes more complex if possession is transferred. You may need to restore property condition. Refund amount is typically lower due to usage and depreciation."
      },
      {
        "question": "Can we cancel without reducing the refund amount?",
        "answer": "Yes, if parties mutually agree. Cancellation charges are negotiable. If both parties accept zero charges, the full amount is refunded upon cancellation."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "receipt-cum-agreement-joint-owners-residential-house",
    "documentName": "Receipt Cum Agreement by Joint Owners in Respect of a Residential House",
    "shortLabel": "Receipt-Agreement House",
    "metaTitle": "Receipt Cum Agreement Residential House Template ₹49",
    "metaDescription": "Hybrid receipt and agreement document for residential house sales by joint owners. Combines receipt of payment with sale agreement for simplicity.",
    "focusKeyword": "receipt cum agreement residential house sale",
    "secondaryKeywords": [
      "combined receipt agreement",
      "receipt document real estate",
      "agreement receipt template",
      "house sale receipt agreement",
      "property sale receipt"
    ],
    "heroSubheading": "Use a combined receipt-cum-agreement for your residential house sale—simplifying documentation by combining payment receipt and sale agreement into one document.",
    "scenario": "A combined receipt-cum-agreement used by joint owners for selling a residential house, serving both as a receipt for payment and as the agreement to sell.",
    "whoNeeds": [
      "Joint owners selling residential property",
      "Sellers preferring simplified documentation",
      "Buyers seeking streamlined paperwork",
      "Informal or quick property transactions"
    ],
    "whenToUse": [
      "For simple residential house sales",
      "When parties want single document",
      "For cash transactions with simultaneous payment",
      "To combine receipt and agreement functions"
    ],
    "risksOfGenericFormat": [
      "Combined documents may lack clarity on individual provisions",
      "Receipt function may overshadow agreement provisions",
      "Legal enforceability of combined document can be questioned",
      "Important agreement clauses may be subordinated to receipt"
    ],
    "clausesIncluded": [
      "Joint owners' names and authorization",
      "Property description and details",
      "Total consideration amount",
      "Payment receipt confirmation",
      "Terms and conditions of sale",
      "Possession and delivery timeline",
      "Title transfer responsibilities",
      "Acknowledgment and joint liability"
    ],
    "preview": {
      "titleLine": "RECEIPT CUM AGREEMENT FOR SALE OF RESIDENTIAL HOUSE",
      "recitals": [
        "WHEREAS _______ (Seller 1) and _______ (Seller 2) are joint owners of residential house situated at _______",
        "WHEREAS _______ (Buyer) has agreed to purchase the said house for Rs. _______"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Payment Receipt and Consideration",
          "body": "The Buyer hereby pays Rs. _______ to the joint Sellers. This amount is the full consideration for the sale. The Sellers acknowledge receipt of the full amount and issue this receipt-cum-agreement.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Terms and Conditions",
          "body": "The sale is subject to the following terms: (1) possession on _______, (2) all dues cleared by sellers, (3) no encumbrance, (4) title transfer within _______ days. Both parties agree to these terms.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Joint Sellers' Liability",
          "body": "Both joint Sellers are jointly and severally liable for all representations and warranties. Both shall cooperate in title transfer, registration, and possession delivery.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is a receipt-cum-agreement legally valid?",
        "answer": "Yes, if it includes all essential agreement provisions along with receipt confirmation. However, some legal professionals prefer separate documents for clarity. Both approaches are valid."
      },
      {
        "question": "Does this document serve as both receipt and agreement?",
        "answer": "Yes, it confirms receipt of payment and documents the sale agreement terms. It's a combined document eliminating the need for separate receipt and agreement."
      },
      {
        "question": "Are all agreement provisions covered in receipt-cum-agreement?",
        "answer": "Yes, but ensure all important provisions are explicitly included. The receipt function shouldn't overshadow agreement terms. Detailed receipts are preferable."
      },
      {
        "question": "Can this be used if payment is not made upfront?",
        "answer": "The document combines receipt and agreement assuming immediate payment. For installment payments, a separate agreement with receipt schedules is more appropriate."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "tripartite-agreement-nominate-nri-gpa",
    "documentName": "Tripartite Agreement to Nominate Another Person in Agreement to Sell (NRI Seller via GPA)",
    "shortLabel": "Tripartite Nomination - NRI",
    "metaTitle": "Tripartite Nomination Agreement - NRI Seller GPA ₹49",
    "metaDescription": "Tripartite agreement for nominating replacement person in existing agreement to sell. Addresses NRI seller and GPA holder arrangements.",
    "focusKeyword": "tripartite nomination agreement nri seller",
    "secondaryKeywords": [
      "nomination agreement real estate",
      "tripartite property agreement",
      "nri replacement seller",
      "agreement substitution procedure",
      "third party nomination"
    ],
    "heroSubheading": "Formalize nomination of replacement seller in your agreement to sell with a tripartite agreement that validates NRI authorization and protects all parties.",
    "scenario": "A tripartite agreement to nominate another person in an agreement to sell, where the original seller is an NRI executing the agreement through a general power of attorney holder.",
    "whoNeeds": [
      "NRIs needing to replace themselves in agreements",
      "GPA holders managing seller replacements",
      "Nominators receiving transferred rights",
      "Buyers accepting replacement sellers"
    ],
    "whenToUse": [
      "To nominate replacement seller in agreement",
      "When NRI uses GPA for nomination",
      "If original seller wants to exit deal",
      "To substitute legal obligation to new party"
    ],
    "risksOfGenericFormat": [
      "Tripartite agreement procedures are often not clearly defined",
      "NRI authority through GPA for nomination is frequently omitted",
      "Nominee's liability and assumption are often inadequate",
      "Buyer's rights against multiple parties are frequently unclear"
    ],
    "clausesIncluded": [
      "Original agreement to sell details",
      "Original NRI seller and GPA holder",
      "Nominee's identification and authorization",
      "Nomination clause in original agreement",
      "Nominee's assumption of seller's obligations",
      "Buyer's consent to nomination",
      "Indemnity from original seller and nominee",
      "Liability chain clarification"
    ],
    "preview": {
      "titleLine": "TRIPARTITE AGREEMENT TO NOMINATE REPLACEMENT SELLER",
      "recitals": [
        "WHEREAS an Agreement to Sell dated _______ was executed by _______ (NRI Seller through GPA holder) in favor of _______ (Buyer)",
        "WHEREAS the NRI Seller wishes to nominate _______ (Nominee) in place of the original GPA holder to complete the sale"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Nomination and Assumption",
          "body": "The NRI Seller hereby nominates the Nominee to assume all rights, obligations, and liabilities as the seller under the original agreement. The Nominee accepts this nomination and assumes full responsibility.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Buyer's Consent",
          "body": "The Buyer hereby consents to the nomination and agrees that the Nominee is now the legal seller. The Buyer confirms that the nomination does not affect the sale terms or consideration.",
          "pageNumber": 2
        },
        {
          "number": "5",
          "title": "Indemnity and Liability",
          "body": "The original NRI Seller provides indemnity for the Nominee's performance. The Nominee indemnifies the Buyer against any title defects or breach of original agreement terms.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can the original seller nominate anyone as replacement?",
        "answer": "Yes, if the agreement contains a nomination clause. The nominated person must accept the role and assume the seller's obligations. The buyer must consent to the change."
      },
      {
        "question": "Does nomination require buyer's approval?",
        "answer": "Yes, the buyer should consent to nomination. This protects the buyer's interests. An unwilling buyer can reject the nomination and cancel the agreement."
      },
      {
        "question": "What happens if the nominee fails to perform?",
        "answer": "The original seller remains liable through indemnity. The buyer can claim against both the nominee and the original seller if the nominee breaches agreement terms."
      },
      {
        "question": "Can the NRI seller nominate themselves back if needed?",
        "answer": "Typically yes, if the original agreement permits. However, this would require another tripartite agreement and buyer consent. Multiple nominations complicate the transaction."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "double-storied-old-kothi-complicated-title-multiple-owners",
    "documentName": "Agreement to Sell of Double Storied Old Kothi with Complicated Title History by Multiple Owners",
    "shortLabel": "Old Kothi - Multiple Owners Complex Title",
    "metaTitle": "Double Storied Old Kothi Agreement - Complex Title Multiple Owners ₹49",
    "metaDescription": "Legal agreement for selling double storied old kothis with complicated title history involving multiple owners. Addresses historical ownership disputes and registration issues.",
    "focusKeyword": "agreement to sell double storied old kothi complicated title multiple owners",
    "secondaryKeywords": [
      "old kothi sale agreement",
      "complicated property title",
      "multiple owners property sale",
      "historical ownership documentation",
      "property registration disputes"
    ],
    "heroSubheading": "Navigate complex ownership histories with an agreement designed for old kothis with tangled titles held by multiple owners—addressing historical disputes and documentation gaps.",
    "scenario": "Selling a double storied old kothi (traditional mansion) with a complicated title history involving multiple owners, inheritance disputes, or historical registration issues. Requires careful handling of multiple ownership claims and title documentation.",
    "whoNeeds": [
      "Multiple co-owners selling inherited old properties",
      "Sellers with disputed ownership histories",
      "Buyers of heritage or old properties with title complications",
      "Legal practitioners handling multi-owner old property sales"
    ],
    "whenToUse": [
      "When selling old kothis with multiple owners",
      "If title history involves inheritance disputes or unclear ownership",
      "For properties with incomplete or missing historical documentation",
      "To obtain explicit consent from all co-owners for the sale"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address multi-owner consent and unanimous decision requirements",
      "Complicated title histories require specialized clauses not in standard templates",
      "Historical ownership disputes need explicit settlement and indemnity provisions",
      "Old properties often lack proper documentation—generic forms miss title verification clauses"
    ],
    "clausesIncluded": [
      "Consent and signatures from all multiple owners",
      "Warranty regarding title clarity despite complicated history",
      "Representation of legitimate ownership by all parties",
      "Settlement of any internal disputes among co-owners",
      "Indemnity against claims from historical ownership",
      "Documentation of title history and past registrations",
      "Escrow provisions for disputes during transaction",
      "All owners' representation in execution and completion"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF DOUBLE STORIED OLD KOTHI",
      "recitals": [
        "WHEREAS the Sellers are the joint owners of a double storied old kothi situated at _______ with a complicated title history spanning multiple generations",
        "WHEREAS the Sellers have resolved all internal disputes and are desirous of selling the property to the Buyer, with all co-owners expressing unanimous consent hereto"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Joint Ownership and Consent",
          "body": "The Sellers collectively own the said old kothi as joint owners. Each seller has executed this agreement with full authority and unanimous consent. No further permissions are required.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Title Warranty Despite Complicated History",
          "body": "The Sellers warrant that despite the complicated title history, they have good and marketable title to the property and no claims or encumbrances exist except as disclosed herein.",
          "pageNumber": 2
        },
        {
          "number": "8",
          "title": "Indemnity for Historical Ownership Claims",
          "body": "The Sellers jointly indemnify the Buyer against any claims arising from historical ownership disputes, undisclosed co-owners, or defects in title relating to past ownership periods.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What if one of the multiple owners refuses to sell?",
        "answer": "All co-owners must provide unanimous written consent. If one owner dissents, the sale cannot proceed. This agreement requires signatures from every owner to be valid."
      },
      {
        "question": "How is the sale price divided among multiple owners?",
        "answer": "The agreement specifies how the total consideration is distributed among co-owners based on their respective share percentages. Payment can be made to a designated trustee or directly to each owner as agreed."
      },
      {
        "question": "What happens if historical ownership disputes emerge after the sale?",
        "answer": "This agreement includes indemnity clauses protecting the buyer. The sellers are liable for claims arising from their period of ownership, providing legal recourse to the buyer."
      },
      {
        "question": "Can we use this agreement for inherited kothis with disputed inheritance?",
        "answer": "Yes, this agreement is ideal for such situations. It addresses multiple ownership claims and requires all claimants to be parties to the agreement, resolving inheritance disputes before sale."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-apartment-wife-court-order-compromise-divorce",
    "documentName": "Agreement to Sell of Residential Apartment Acquired by Wife via Court Order in Divorce Compromise Deed",
    "shortLabel": "Wife's Apartment - Divorce Compromise",
    "metaTitle": "Residential Apartment Agreement - Wife Court Order Compromise Deed ₹49",
    "metaDescription": "Agreement for selling residential apartments acquired by wife through court-ordered compromise in divorce proceedings. Includes spousal rights protection and court order clauses.",
    "focusKeyword": "agreement to sell residential apartment wife court order compromise deed divorce",
    "secondaryKeywords": [
      "divorce settlement property sale",
      "wife acquired apartment agreement",
      "court ordered property transfer",
      "matrimonial property sale",
      "compromise deed executed property"
    ],
    "heroSubheading": "Sell your divorce-settlement apartment with legal certainty using an agreement designed for properties acquired through court-ordered compromise deeds—protecting spousal interests and court mandates.",
    "scenario": "Selling a residential apartment acquired by the wife through a court order in a compromise deed filed in a divorce petition. The property was awarded to the wife as part of matrimonial settlement.",
    "whoNeeds": [
      "Wives selling apartment acquired in divorce settlement",
      "Divorced women holding property by court order",
      "Buyers acquiring properties from divorce settlements",
      "Family law practitioners handling matrimonial property sales"
    ],
    "whenToUse": [
      "When the property was acquired by wife in divorce proceedings",
      "If court order or compromise deed governs the ownership",
      "For properties with matrimonial law implications",
      "To ensure spousal rights and court compliance in the sale"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't reference court orders or divorce decrees",
      "Spousal consent requirements under matrimonial law are often omitted",
      "Compromise deed provisions require specialized handling",
      "Tax implications of divorce-settlement property transfers are rarely addressed"
    ],
    "clausesIncluded": [
      "Reference to divorce court order and compromise deed",
      "Seller's authority derived from court judgment",
      "Representation regarding marital status and spousal claims",
      "Indemnity against claims from ex-spouse or matrimonial disputes",
      "Court order compliance and execution provisions",
      "Tax implications and TDS compliance for divorce settlements",
      "Seller's warrant regarding clear title post-divorce",
      "Buyer's acknowledgment of divorce-settlement origin"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL APARTMENT ACQUIRED BY WIFE VIA COURT ORDER",
      "recitals": [
        "WHEREAS the Seller (Wife) acquired the residential apartment situated at _______ vide Court Order dated _______ in a compromise deed filed in a divorce petition before the District Court",
        "WHEREAS the Court vested absolute ownership of the apartment in the Seller, and the Seller is now desirous of selling the same to the Buyer"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Court Order and Ownership",
          "body": "The Seller is the absolute owner of the apartment by virtue of the Court Order dated _______. The Seller exhibits the certified copy of the court order which grants complete ownership rights to her.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Spousal Rights and Status",
          "body": "The Seller hereby confirms that she is either divorced or that all spousal rights have been settled. No claim from the ex-spouse or any matrimonial party shall arise post-sale.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Indemnity Against Matrimonial Claims",
          "body": "The Seller indemnifies the Buyer against any claims from the ex-spouse, heirs of the ex-spouse, or any other matrimonial party regarding ownership or possession of the apartment.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Does the ex-spouse have any claim to the property after this sale?",
        "answer": "No, the court order vested absolute ownership in the wife. Once the divorce is finalized with the court order, the ex-spouse has no residual claim. However, the agreement includes indemnity for your protection."
      },
      {
        "question": "What is a compromise deed and does it affect the sale?",
        "answer": "A compromise deed is a settlement agreement filed in court during divorce proceedings. It becomes a court order once approved. This agreement acknowledges that origin and ensures the court-ordered status is clear to the buyer."
      },
      {
        "question": "Are there special tax implications for selling a divorce-settlement property?",
        "answer": "Yes, properties acquired through divorce settlements may have different tax treatment than regular property sales. This agreement addresses TDS compliance and tax implications relevant to matrimonial settlements."
      },
      {
        "question": "Can we sell the apartment immediately after the court order?",
        "answer": "Yes, once the court order is executed and the property vests in the seller, the sale can proceed. There is no waiting period, though buyers typically verify the finality of the divorce before completion."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "building-partnership-firm-sole-proprietor-retirement",
    "documentName": "Agreement to Sell of Building Belonging to Partnership Firm Converted to Sole Proprietor After Partner Retirement",
    "shortLabel": "Partnership Building - Sole Proprietor",
    "metaTitle": "Partnership Building Agreement - Sole Proprietor After Retirement ₹49",
    "metaDescription": "Legal agreement for selling buildings owned by partnership firms that became sole proprietorship after all partners retired except the seller. Addresses firm structure changes and succession.",
    "focusKeyword": "agreement to sell building partnership firm sole proprietor retirement",
    "secondaryKeywords": [
      "partnership property sale",
      "sole proprietor conversion",
      "partnership firm building",
      "partner retirement agreement",
      "business succession property sale"
    ],
    "heroSubheading": "Sell partnership-owned properties with clarity using an agreement designed for buildings owned by firms that transitioned to sole proprietorship—addressing partner retirements and business succession.",
    "scenario": "Selling a building that belongs to a partnership firm which became a sole proprietor firm after the retirement of all partners except the seller. The transition from partnership to sole proprietorship affects the sale authority and documentation.",
    "whoNeeds": [
      "Sole proprietors selling buildings previously held by partnerships",
      "Remaining partners completing property sales post-retirement",
      "Buyers acquiring buildings from converted sole proprietorships",
      "Business succession lawyers handling firm property sales"
    ],
    "whenToUse": [
      "When the building was originally owned by a partnership firm",
      "If the firm converted to sole proprietorship due to partner retirements",
      "For properties where partnership deed and transition documents exist",
      "To ensure proper authority and legal standing for the sale"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address partnership-to-sole-proprietor transitions",
      "Partner retirement and succession require specific clauses for legal validity",
      "Firm liability and indemnity provisions differ significantly from individual sales",
      "Transition documentation and legal status are rarely addressed in standard forms"
    ],
    "clausesIncluded": [
      "Original partnership structure and all partners' identification",
      "Deed of retirement and conversion documents",
      "Seller's authority to represent the firm post-conversion",
      "Board or partner resolutions authorizing the sale",
      "Representation regarding firm's legal existence and capacity",
      "Discharge of all retired partners from liability",
      "Indemnity against claims from retired partners",
      "Clarity on firm liabilities and property encumbrances"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF BUILDING FORMERLY OWNED BY PARTNERSHIP FIRM NOW SOLE PROPRIETOR",
      "recitals": [
        "WHEREAS the building situated at _______ was originally owned by _______ Partnership Firm with partners _______",
        "WHEREAS all partners except the Seller have retired vide retirement deed dated _______, and the firm is now a sole proprietorship operated by the Seller"
      ],
      "clauseSnippets": [
        {
          "number": "2",
          "title": "Partnership to Sole Proprietor Conversion",
          "body": "The building was originally owned by the partnership firm. Vide the deed of retirement dated _______, all partners except the Seller have retired, and the firm is now solely operated by the Seller with full authority over all assets.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Seller's Authority",
          "body": "The Seller, as the sole proprietor, has full authority to sell this building. All necessary board resolutions and partner consents for the sale have been obtained and are available for buyer's verification.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Indemnity Against Retired Partners",
          "body": "The Seller indemnifies the Buyer against any claims from retired partners regarding ownership or proceeds. Retired partners have no claim to this property or its sale proceeds.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can retired partners claim any stake in the building after the sale?",
        "answer": "No, retirement deeds formally discharge retired partners from all firm assets. This agreement includes indemnity protecting the buyer from any such claims. However, buyers typically verify the retirement deeds."
      },
      {
        "question": "What documents prove the conversion to sole proprietorship?",
        "answer": "The partnership deed, deed of retirement for each partner, sole proprietorship registration documents, and firm bank account changes all evidence the conversion. These should be provided for buyer verification."
      },
      {
        "question": "Are there any liabilities of the retired partnership that affect the sale?",
        "answer": "The agreement addresses firm liabilities and clarifies which party bears responsibility for undisclosed debts. Buyers should conduct due diligence on firm liabilities before closing."
      },
      {
        "question": "How is the sale price treated for the sole proprietor's tax purposes?",
        "answer": "As the business owner, the sole proprietor must report capital gains from the property sale. The agreement doesn't alter tax obligations but provides clarity on the transaction structure for tax reporting."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "designer-home-housing-complex-unregistered-conveyance-second-purchaser",
    "documentName": "Agreement to Sell of Designer Home in Housing Complex with Unregistered Conveyance Deed by Second Purchaser",
    "shortLabel": "Designer Home - Unregistered Second Purchaser",
    "metaTitle": "Designer Home Agreement - Unregistered Conveyance Second Purchaser ₹49",
    "metaDescription": "Agreement for selling designer homes in housing complexes where conveyance deeds remain unregistered and seller is a second purchaser. Addresses builder registration delays and title chain.",
    "focusKeyword": "agreement to sell designer home housing complex unregistered conveyance second purchaser",
    "secondaryKeywords": [
      "designer home sale agreement",
      "unregistered conveyance deed",
      "second purchaser property",
      "builder registration delay",
      "luxury housing complex property"
    ],
    "heroSubheading": "Sell your designer home with confidence using an agreement crafted for premium properties in complexes where builder conveyance deeds remain unregistered—addressing second purchaser title chains.",
    "scenario": "Selling a designer home purchased by the seller in a designer housing complex developed by a builder. The builder's conveyance deed is still not registered, and the seller is a second purchaser (not the original builder purchaser).",
    "whoNeeds": [
      "Second purchasers of designer homes in housing complexes",
      "Sellers of unregistered designer properties",
      "Buyers acquiring designer homes with incomplete title",
      "Real estate practitioners in premium housing segments"
    ],
    "whenToUse": [
      "For designer homes in complexes with unregistered builder deeds",
      "When the seller is purchasing from the original buyer, not the builder",
      "If the builder conveyance deed registration is still pending",
      "To establish title chain from builder through second purchaser"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address second purchaser title complications",
      "Builder registration delays require specialized clauses absent in standard forms",
      "Designer home complexes have unique regulations not covered in generic templates",
      "Title chain verification for second purchasers is often inadequately addressed"
    ],
    "clausesIncluded": [
      "Seller's title as second purchaser from original buyer",
      "Status of builder's conveyance deed and registration timeline",
      "Seller's representations regarding first purchase documentation",
      "Title indemnity for builder registration delays",
      "Obligation to obtain builder's conveyance registration",
      "Complex-specific regulations and homeowners association requirements",
      "Designer specifications and maintenance standards",
      "Timeline for first purchaser to complete builder registration"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF DESIGNER HOME IN HOUSING COMPLEX",
      "recitals": [
        "WHEREAS the Seller purchased the designer home (Unit No. _______) situated in _______ Designer Housing Complex from the original purchaser, and the Seller now owns the said home",
        "WHEREAS the builder's conveyance deed for the complex is still not registered with the authorities, and the Seller wishes to sell the same to the Buyer subject to obtaining such registration"
      ],
      "clauseSnippets": [
        {
          "number": "2",
          "title": "Second Purchaser Status and Title Chain",
          "body": "The Seller is a second purchaser who acquired this designer home from the original purchaser. The Seller exhibits the sale agreement and payment receipts from the original purchase, establishing clear title chain.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Builder's Conveyance Deed Status",
          "body": "The builder's conveyance deed for the housing complex remains unregistered as of the date hereof. The Seller shall obtain registration of this conveyance deed within 180 days of receipt of full consideration.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Indemnity for Registration Delays",
          "body": "The Seller indemnifies the Buyer against any claims or losses arising from the delay in builder's conveyance deed registration. Upon registration, the Buyer's title shall be perfected.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "As a second purchaser, can I sell this property without the builder's conveyance deed being registered?",
        "answer": "Yes, you can sell through a sale agreement, as this agreement demonstrates. However, the buyer's title will be perfected only when the builder's conveyance deed is registered. This agreement ensures the seller obtains that registration after the sale."
      },
      {
        "question": "What if the builder refuses to register the conveyance deed?",
        "answer": "This agreement includes indemnity protecting the buyer. If the builder delays or refuses registration, the seller remains liable for buyer's losses. Most buyers escrow funds until registration is complete."
      },
      {
        "question": "Does being a second purchaser affect the sale price or terms?",
        "answer": "Buyers often request lower prices or escrow arrangements to account for the registration risk. This agreement allows for such protections while establishing clear authority for the second purchaser to sell."
      },
      {
        "question": "What happens to designer home specifications and HOA rules in this sale?",
        "answer": "This agreement includes clauses addressing the housing complex's design standards, homeowners association rules, and maintenance requirements, ensuring the buyer understands ongoing obligations."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "dwelling-unit-ground-floor-special-power-attorney-registered",
    "documentName": "Agreement to Sell of Dwelling Unit on Ground Floor Through Registered Special Power of Attorney Holder",
    "shortLabel": "Ground Floor Unit - Special Power of Attorney",
    "metaTitle": "Dwelling Unit Agreement - Registered Special Power of Attorney ₹49",
    "metaDescription": "Legal agreement for selling ground floor dwelling units through registered special power of attorney holders. Addresses attorney authority, property representation, and POA compliance.",
    "focusKeyword": "agreement to sell dwelling unit ground floor special power attorney registered",
    "secondaryKeywords": [
      "power of attorney property sale",
      "attorney holder agreement",
      "dwelling unit sale agreement",
      "registered POA sale",
      "ground floor property transfer"
    ],
    "heroSubheading": "Sell ground floor properties with legal protection using an agreement designed for sales through registered special power of attorney holders—ensuring attorney authority and POA compliance.",
    "scenario": "Selling a dwelling unit on the ground floor through a registered special power of attorney holder who is authorized to represent the actual owner in the sale transaction.",
    "whoNeeds": [
      "Property owners selling through authorized POA holders",
      "POA holders authorized to sell properties",
      "Buyers purchasing from POA holders",
      "Legal practitioners handling POA-based property transactions"
    ],
    "whenToUse": [
      "When the actual owner cannot be present for the sale",
      "If authorized representation through registered POA is used",
      "For ground floor properties with special considerations",
      "To ensure POA holder's authority is properly documented and recognized"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't verify POA authority and scope limitations",
      "POA revocation or amendments can invalidate agreements if not addressed",
      "Attorney liability and indemnity clauses are missing from standard forms",
      "Special power of attorney registration requirements are often overlooked"
    ],
    "clausesIncluded": [
      "Exhibition and verification of registered special POA document",
      "Scope of POA authority including sale authority",
      "Attorney holder's representations regarding mandate",
      "Verification that POA is still valid and not revoked",
      "Actual owner's binding commitment through POA",
      "Attorney holder's indemnity for authority authenticity",
      "Ground floor-specific provisions and access rights",
      "Authority holder's liability for defective title or misrepresentation"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF DWELLING UNIT ON GROUND FLOOR THROUGH POWER OF ATTORNEY HOLDER",
      "recitals": [
        "WHEREAS the true owner of the dwelling unit (Ground Floor) situated at _______ has executed a registered special power of attorney in favor of the Attorney Holder",
        "WHEREAS the Attorney Holder is duly authorized to sell the said dwelling unit, and the Attorney Holder is executing this agreement on behalf of the true owner"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "POA Authority and Exhibition",
          "body": "The Attorney Holder exhibits the registered special power of attorney document duly executed by the true owner. The POA grants specific authority to sell the dwelling unit on such terms as the Attorney Holder deems fit.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Scope of Authority",
          "body": "The Attorney Holder hereby confirms that the POA authority includes full power to receive consideration, execute sale documents, and hand over possession to the Buyer on behalf of the true owner.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "POA Validity and Non-Revocation",
          "body": "The Attorney Holder warrants that the registered special POA is still valid, has not been revoked, suspended, or amended, and remains in full force and effect as of the date of this agreement.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Can the true owner revoke the POA after this agreement is signed?",
        "answer": "No, once the agreement is executed, it becomes binding on both the true owner and the POA holder. However, buyers typically require verification that the POA is still active before fund transfer."
      },
      {
        "question": "What if the POA is found to be fraudulent or forged?",
        "answer": "This agreement includes indemnity provisions making the attorney holder liable for authenticity. Buyers should verify the POA with the registering authority before signing and fund transfer."
      },
      {
        "question": "Can we sell ground floor properties faster through POA arrangements?",
        "answer": "POA arrangements can simplify documentation, but they don't speed up government registrations. The agreement must still follow standard registration procedures. POA mainly helps when the owner is unavailable."
      },
      {
        "question": "Is the true owner liable for the agreement even though the POA holder is signing?",
        "answer": "Yes, the true owner is fully bound by the agreement. The POA holder acts as a legal representative, so all obligations and liabilities extend to the actual property owner."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "flat-self-financing-scheme-bank-loan",
    "documentName": "Agreement to Sell of Flat Under Self-Financing Scheme Against Which Bank Loan Was Taken",
    "shortLabel": "Self-Financed Flat - Bank Loan",
    "metaTitle": "Self-Financing Flat Agreement - Bank Loan Against Property ₹49",
    "metaDescription": "Agreement for selling flats purchased under self-financing schemes where bank loans have been secured against the property. Addresses loan discharge and bank NOC requirements.",
    "focusKeyword": "agreement to sell flat self-financing scheme bank loan",
    "secondaryKeywords": [
      "self-financed flat sale",
      "bank loan against property",
      "mortgaged property sale",
      "flat financing agreement",
      "bank NOC property sale"
    ],
    "heroSubheading": "Sell your self-financed flat smoothly using an agreement designed for properties mortgaged to banks—addressing loan discharge, NOC requirements, and secured debt obligations.",
    "scenario": "Selling a flat acquired under a self-financing scheme (developer scheme) where a bank loan has been taken against the property and the property is mortgaged to the bank.",
    "whoNeeds": [
      "Sellers with outstanding bank mortgages on flats",
      "Property owners with self-financing scheme loans",
      "Buyers acquiring mortgaged properties",
      "Real estate practitioners handling loan-encumbered sales"
    ],
    "whenToUse": [
      "When the property is mortgaged to a bank as security",
      "If a self-financing scheme loan is still outstanding",
      "For properties where bank NOC is required for transfer",
      "To ensure loan discharge before or at completion"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address bank mortgage discharge procedures",
      "Self-financing scheme obligations are not included in standard templates",
      "Bank NOC requirements and timelines are often omitted",
      "Escrow for loan repayment from sale proceeds is rarely addressed"
    ],
    "clausesIncluded": [
      "Disclosure of bank mortgage and loan outstanding amount",
      "Bank name and loan details",
      "Seller's obligation to obtain bank NOC for sale",
      "Loan discharge from sale proceeds at completion",
      "Escrow arrangement for bank payment",
      "Representations regarding loan status and repayment",
      "Timeline for obtaining NOC (typically 7-15 days)",
      "Buyer's consent to sale being contingent on NOC receipt"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF FLAT MORTGAGED TO BANK FOR SELF-FINANCING LOAN",
      "recitals": [
        "WHEREAS the Seller purchased the flat under the self-financing scheme of _______ Developers and has availed a loan from _______ Bank for part of the purchase consideration",
        "WHEREAS the flat is mortgaged to the Bank, and the Seller shall discharge this mortgage from the sale proceeds of this sale"
      ],
      "clauseSnippets": [
        {
          "number": "2",
          "title": "Bank Loan and Mortgage Details",
          "body": "The Seller has taken a loan from _______ Bank for an outstanding amount of Rs. _______. The flat is mortgaged to the Bank. The seller shall discharge this mortgage within 7 days of receipt of full consideration.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Bank NOC Requirement",
          "body": "The Seller shall obtain a No Objection Certificate (NOC) from the Bank confirming the release of mortgage. The sale is conditional upon obtaining the Bank's NOC within 15 days of agreement execution.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Escrow for Loan Discharge",
          "body": "Upon receipt of full consideration, the sale amount shall be held in escrow and used to discharge the bank loan and obtain release of mortgage within 7 days. Only after mortgage release shall possession be handed over.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "What is a 'No Objection Certificate' (NOC) from the bank?",
        "answer": "An NOC is a certificate from the bank confirming that the mortgage on the property is released once the loan is repaid. Without this, the buyer cannot obtain clear ownership. This agreement requires the seller to obtain it from the bank."
      },
      {
        "question": "What if the bank takes time to issue the NOC?",
        "answer": "This agreement provides a 15-day timeline for NOC receipt. If the bank delays, the buyer can cancel and recover their funds. Typically, banks issue NOC within 5-7 days of loan repayment."
      },
      {
        "question": "Can the buyer take possession before the mortgage is discharged?",
        "answer": "Not advisable, as the property still technically belongs to the bank as collateral. This agreement ensures mortgage discharge precedes possession transfer to protect the buyer's ownership."
      },
      {
        "question": "How is the sale price adjusted for the outstanding loan amount?",
        "answer": "The agreed sale price is the full amount. From this, the seller repays the outstanding loan, and the remainder goes to the seller. Escrow ensures the bank is paid before possession changes."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-apartment-builder-transfer-records-unregistered",
    "documentName": "Agreement to Sell of Residential Apartment Through Transfer in Builder Records (Conveyance Deed Unregistered)",
    "shortLabel": "Apartment - Builder Transfer Records",
    "metaTitle": "Residential Apartment Agreement - Builder Transfer Records ₹49",
    "metaDescription": "Agreement for selling residential apartments through builder record transfers when conveyance deeds remain unregistered. Addresses builder responsibility and title perfection.",
    "focusKeyword": "agreement to sell residential apartment builder transfer records unregistered",
    "secondaryKeywords": [
      "builder record transfer agreement",
      "unregistered apartment sale",
      "residential apartment transfer",
      "builder records property sale",
      "conveyance deed pending registration"
    ],
    "heroSubheading": "Sell your residential apartment with confidence using an agreement designed for builder record transfers—addressing unregistered conveyance deeds and builder obligations for title completion.",
    "scenario": "Selling a residential apartment through transfer in the records of the builder, as the conveyance deed has not yet been registered with the authorities.",
    "whoNeeds": [
      "Sellers of apartments purchased from builders pre-registration",
      "Buyers acquiring apartments via builder records",
      "Property purchasers in ongoing projects",
      "Real estate professionals handling builder transactions"
    ],
    "whenToUse": [
      "When selling apartments before builder conveyance registration",
      "For properties transferred in builder's internal records only",
      "If the builder has not yet obtained government registration",
      "To clearly establish timeline for obtaining conveyance registration"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address builder record transfer mechanics",
      "Unregistered conveyance deeds require specific indemnity clauses absent in standard forms",
      "Builder's continuing responsibility for registration is often vague",
      "Timeline for obtaining government registration is rarely specified in generic agreements"
    ],
    "clausesIncluded": [
      "Sale through builder's record transfer (not registered deed)",
      "Current status of builder's conveyance deed with authorities",
      "Seller's representations regarding builder's pending registration",
      "Timeline for obtaining conveyance deed registration",
      "Indemnity for builder's failure to register",
      "Transfer procedure in builder's books and records",
      "Buyer's rights regarding eventual conveyance registration",
      "Seller's obligation to follow up with builder on registration"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL APARTMENT THROUGH BUILDER RECORD TRANSFER",
      "recitals": [
        "WHEREAS the Seller purchased the residential apartment from _______ Builder under a builders' agreement and payment has been made in full or installments",
        "WHEREAS the builder's conveyance deed is not yet registered with the authorities, and the apartment remains in the builder's records. The Seller shall transfer the apartment to the Buyer through transfer in the builder's records"
      ],
      "clauseSnippets": [
        {
          "number": "2",
          "title": "Transfer Through Builder Records",
          "body": "The sale shall be completed through transfer in the builder's internal records. The builder shall be requested to record the change of ownership in favor of the Buyer within 30 days of payment.",
          "pageNumber": 1
        },
        {
          "number": "4",
          "title": "Conveyance Deed Registration Status",
          "body": "The builder's conveyance deed for the apartment is not yet registered with the authorities. The Seller shall ensure the builder obtains registration within 180 days of sale completion.",
          "pageNumber": 2
        },
        {
          "number": "7",
          "title": "Indemnity for Registration Delays",
          "body": "The Seller indemnifies the Buyer against losses from builder's delay or failure in obtaining conveyance deed registration. The Buyer's title shall be perfected upon such registration.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Is my ownership secure if the apartment is only in the builder's records?",
        "answer": "Yes, builder records are recognized by law as evidence of ownership until conveyance deed registration occurs. However, registered conveyance deeds provide stronger legal protection, which is why builders typically complete registration."
      },
      {
        "question": "How long does it typically take for builders to register conveyance deeds?",
        "answer": "Timelines vary, but builders typically register deeds within 6-12 months after handover. This agreement sets a 180-day deadline and includes indemnity if the builder delays beyond that."
      },
      {
        "question": "Can I buy without waiting for the conveyance deed to be registered?",
        "answer": "Yes, this agreement allows purchase through builder records. Most buyers request escrow arrangements or ask the seller to share the burden of obtaining registration within a specified timeline."
      },
      {
        "question": "What happens if the builder goes bankrupt before registering the deed?",
        "answer": "This agreement includes indemnity protecting you from builder failure. In case of builder bankruptcy, you have legal recourse against the seller to ensure proper registration through alternative means."
      }
    ],
    "lastReviewed": "2026-05-01"
  },
  {
    "slug": "residential-house-family-settlement-court-order-relinquishment",
    "documentName": "Agreement to Sell of Residential House Acquired Through Relinquishment by Family Members Under Court Order (Family Settlement)",
    "shortLabel": "House - Family Settlement Relinquishment",
    "metaTitle": "Residential House Agreement - Family Settlement Relinquishment ₹49",
    "metaDescription": "Agreement for selling residential houses acquired through family member relinquishment under court-ordered family settlements. Addresses family law compliance and settlement enforcement.",
    "focusKeyword": "agreement to sell residential house family settlement relinquishment court order",
    "secondaryKeywords": [
      "family settlement property sale",
      "relinquishment deed sale",
      "court ordered settlement",
      "family property agreement",
      "residential house succession"
    ],
    "heroSubheading": "Sell your family settlement property with legal certainty using an agreement designed for houses acquired through court-ordered relinquishment by family members—addressing family law compliance.",
    "scenario": "Selling a residential house acquired by the seller through relinquishment by other members of the family under a court order pursuant to a family settlement agreement.",
    "whoNeeds": [
      "Sellers with properties acquired via family relinquishment",
      "Family members selling properties obtained through settlements",
      "Buyers acquiring family-settlement properties",
      "Family law and property law practitioners"
    ],
    "whenToUse": [
      "When the property was acquired through family member relinquishment",
      "If a family settlement agreement is court-ordered",
      "For properties with multiple family claimants initially",
      "To ensure all family interests have been resolved through settlement"
    ],
    "risksOfGenericFormat": [
      "Generic agreements don't address family law and settlement enforcement",
      "Court-ordered relinquishment has specific legal requirements often missed",
      "Family member rights and claims require specialized indemnity clauses",
      "Family settlement details and compliance are rarely adequately covered"
    ],
    "clausesIncluded": [
      "Reference to family settlement agreement and court order",
      "Details of family members who relinquished their claims",
      "Court's role in enforcing the settlement",
      "Seller's right to absolute ownership post-settlement",
      "Indemnity against claims from relinquishing family members",
      "Representations regarding family settlement finality",
      "Court order exhibition and enforcement provision",
      "Buyer's protection against future family claims"
    ],
    "preview": {
      "titleLine": "AGREEMENT TO SELL OF RESIDENTIAL HOUSE ACQUIRED VIA FAMILY SETTLEMENT",
      "recitals": [
        "WHEREAS a family dispute regarding ownership of the residential house at _______ was settled through a family settlement agreement duly approved by Court Order dated _______",
        "WHEREAS other family members have relinquished their claims in favor of the Seller vide the said court-ordered settlement, and the Seller now holds absolute title to the house"
      ],
      "clauseSnippets": [
        {
          "number": "1",
          "title": "Family Settlement and Court Order",
          "body": "The Seller acquired this house through a family settlement agreement dated _______ which was approved and enforced by Court Order dated _______. The Seller exhibits a certified copy of the court order.",
          "pageNumber": 1
        },
        {
          "number": "3",
          "title": "Relinquishment by Family Members",
          "body": "The following family members have relinquished their claims in favor of the Seller: _______. Their relinquishment deeds are attached hereto and form part of this agreement.",
          "pageNumber": 2
        },
        {
          "number": "6",
          "title": "Indemnity Against Family Claims",
          "body": "The Seller indemnifies the Buyer against any claims from the relinquishing family members or any other family member regarding ownership or possession of the house.",
          "pageNumber": 3
        }
      ]
    },
    "faqs": [
      {
        "question": "Does the court order make the settlement binding on all family members?",
        "answer": "Yes, a court-ordered settlement is binding and enforceable. Family members cannot challenge it or claim the property after the court order is executed. The indemnity in this agreement protects you further."
      },
      {
        "question": "What if a family member claims they didn't understand or agree to the settlement?",
        "answer": "Once a court order is issued, family members' individual consent is not relevant legally. The court's judgment is final. This agreement's indemnity clause protects you against any such belated claims."
      },
      {
        "question": "How is the sale price determined if acquired through free family relinquishment?",
        "answer": "The sale price is determined between you (the seller) and the buyer in an arm's length transaction. The original family settlement didn't set a commercial price; it simply transferred ownership to you."
      },
      {
        "question": "Are there tax implications for property acquired via family settlement?",
        "answer": "Generally, properties acquired through family settlements may have more favorable tax treatment than regular purchases, but this agreement doesn't alter tax obligations. Consult a tax advisor for specific implications."
      }
    ],
    "lastReviewed": "2026-05-01"
  }
]
;

/**
 * Lookup helper used by the [slug] route to render a specific template.
 */
export function getAgreementToSellTemplate(
  slug: string
): AgreementToSellTemplate | undefined {
  return AGREEMENT_TO_SELL_TEMPLATES.find((t) => t.slug === slug);
}
