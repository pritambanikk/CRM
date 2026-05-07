module.exports = {
  // City-specific Templates (Using Regex matches in generator)
  getAnswer: (question) => {
    // City Dynamic Matches
    let match = question.match(/How long does it take to send a legal notice in ([A-Za-z]+)\?/i);
    if (match) return `It typically takes 24-48 hours for our local advocates in ${match[1]} to draft your notice. Once approved by you, it is dispatched immediately via Registered Post with acknowledgment due.`;
    
    match = question.match(/Do you have lawyers in ([A-Za-z]+)\?/i);
    if (match) return `Yes! We have a verified network of highly experienced local advocates practicing in the District Courts of ${match[1]} and the respective High Court, ready to take up your matter.`;
    
    match = question.match(/Will my notice be valid in ([A-Za-z]+) courts\?/i);
    if (match) return `Absolutely. Your legal notice is drafted by qualified local advocates precisely adhering to jurisdictional laws, making it fully enforceable and valid across all ${match[1]} courts.`;
    
    match = question.match(/What courts in ([A-Za-z]+) accept these notices\?/i);
    if (match) return `The legal notice is valid for civil suits in the District Courts of ${match[1]}, applicable consumer forums, and the overarching High Court depending on the jurisdiction amount or case type.`;
    
    match = question.match(/How much does a legal notice cost in ([A-Za-z]+)\?/i);
    if (match) return `Our transparent flat fee pricing remains the same pan-India, starting from ₹1,499. This includes the legal consultation, professional drafting by an advocate, and the registered post charges to or from ${match[1]}.`;

    // Static RERA & Builder Matches
    if (question.includes("What is RERA and how does it help?")) return "The Real Estate (Regulation and Development) Act (RERA) protects homebuyers. It provides a fast-track dispute resolution mechanism to ensure builders deliver projects on time, refund money for delays, and adhere to project promises.";
    if (question.includes("Is the builder's brochure legally binding?")) return "Yes, any advertisement, prospectus, or brochure given by the builder can be treated as a legally binding promise under RERA. If amenities promised in the brochure aren't provided, you can claim compensation.";
    if (question.includes("Should I send notice to builder or society?")) return "If the amenities were promised during the sale but never delivered, the legal notice should be sent to the Builder/Developer. If the builder has officially handed over maintenance to the Society, but the society is failing its duties, notice goes to the Society.";
    if (question.includes("Can I claim compensation instead of amenities?")) return "Under Section 18 of RERA and the Consumer Protection Act, if a builder fails to provide promised amenities, you have the right to demand either the completion of those amenities or claim financial compensation for the deficiency in service.";
    if (question.includes("Is there a time limit to file RERA complaint?")) return "While RERA laws do not explicitly define a rigid limitation period for filing a complaint about missing amenities, it is highly recommended to send a legal notice and file the complaint within 2 to 3 years from the date of promised possession.";
    if (question.includes("Can multiple flat owners send a joint notice?")) return "Yes! A joint or 'Class Action' legal notice signed by multiple flat owners or the Resident Welfare Association (RWA) is often much more powerful and creates immense legal pressure on the builder.";
    if (question.includes("Should I go to RERA or Consumer Court?")) return "RERA provides faster resolutions specifically tailored for real estate grievances, while the Consumer Court can award higher compensation for 'mental agony' and 'deficiency in service'. A legal consultation can help decide the best forum.";
    
    // Setup Cost
    if (question.includes("How much does this legal notice cost?")) return "VakilTech charges a transparent flat fee starting from ₹1,499. This includes professional consultation, drafting by a verified advocate, and all registered post delivery charges.";

    // Cheque Bounce 
    if (question.includes("What is Section 138 of the Negotiable Instruments Act?")) return "Section 138 is a penal provision that treats the bouncing of a cheque as a criminal offense. If a cheque is returned unpaid due to insufficient funds, the drawer can face imprisonment up to 2 years, a fine up to twice the cheque amount, or both.";
    if (question.includes("What is the deadline for sending a cheque bounce notice?")) return "A legal notice for cheque bounce MUST be sent within exactly 30 days of receiving the cheque return memo from the bank. Missing this 30-day deadline heavily weakens your legal protections under Section 138.";
    if (question.includes("Does Section 138 apply if the drawer stops payment?")) return "Yes, the Supreme Court has clarified that a 'Stop Payment' instruction given by the drawer to their bank also falls under the purview of Section 138, assuming the debt was legally enforceable.";
    if (question.includes("How much time does the drawer get to pay after the notice?")) return "By law, the drawer must be given exactly 15 days from the date they receive the legal notice to arrange the funds and make the payment. If they fail, you can file a court case within the next 30 days.";
    if (question.includes("What happens if the drawer doesn't pay after the notice?")) return "If 15 days pass without payment, you gain the statutory right to file a criminal complaint before the Magistrate under Section 138 of the NI Act against the drawer within the next 30 days.";
    if (question.includes("Can I claim compensation in addition to the cheque amount?")) return "Yes, the court has the power to order the drawer to pay compensation to the payee, which can be up to double the amount of the bounced cheque, to cover legal expenses and interest.";
    if (question.includes("Is cheque bounce a criminal or civil matter?")) return "Under Section 138, a cheque bounce is fundamentally a criminal offense, meaning it involves potential imprisonment. However, you can choose to simultaneously file a civil suit for the recovery of your money.";
    if (question.includes("What reasons for cheque bounce are covered under Section 138?")) return "The most common reasons are 'Insufficient Funds', 'Account Closed', 'Stop Payment', and 'Signature Mismatch'. However, the core requirement is that the cheque was issued to discharge a legally enforceable debt.";
    if (question.includes("How much does a Section 138 notice cost?")) return "Starting at ₹1,499, VakilTech's expert advocates will draft the highly technical Section 138 legal notice ensuring no procedural loopholes are left, and will dispatch it via registered post.";

    // Money Recovery
    if (question.includes("What is a legal notice for recovery of money?")) return "It is a formal warning letter sent by an advocate on a client's behalf, demanding payment for an outstanding debt. It states that if the money is not returned within a specific timeline, civil or criminal litigation will be initiated.";
    if (question.includes("When should I send a money recovery legal notice?")) return "You should send it immediately when payment terms are breached, a loan is defaulted upon, or an invoice remains unpaid past its due date. Quicker action proves the debt is fresh and legally enforceable.";
    if (question.includes("What is the limitation period for money recovery?")) return "Under the Limitation Act, you generally have exactly 3 years from the date the cause of action arose (e.g., date of default or date of the last part-payment) to file a civil suit for money recovery.";
    if (question.includes("What evidence is required for a money recovery notice?")) return "Important evidence includes original invoices, bank statements showing transfers, bounced cheques, signed agreements, or written communications (emails/WhatsApp) acknowledging the debt.";
    if (question.includes("How long does the other party get to pay after receiving the notice?")) return "Typically, a money recovery legal notice grants the defaulter a 15 to 30 day window to clear the dues before formal court proceedings are initiated. This acts as a fair final warning.";
    if (question.includes("Is sending a legal notice mandatory before filing a case?")) return "While not strictly mandatory for all civil suits, it is highly recommended and often expected by judges. It proves you attempted to resolve the dispute amicably before utilizing court resources, strengthening your case.";
    if (question.includes("What happens after sending the legal notice?")) return "The defaulter may reply agreeing to pay, ask for a settlement negotiation, or ignore it. If they ignore it past the warning deadline, your lawyer will help you file a Summary Suit (Order 37) or a standard civil suit for recovery.";
    if (question.includes("How much does it cost to send a money recovery notice?")) return "Transparent pricing begins at ₹1,499, covering an advocate's consultation, professional drafting of the demand notice, and the dispatch via registered Indian Speed Post.";
    if (question.includes("What information do I need to provide for drafting?")) return "You will need the exact name and address of the defaulter, the transaction history, the exact pending amount with interest calculations, and copies of any supporting agreements or WhatsApp/Email logs.";
    if (question.includes("What is the success rate of legal notices for money recovery?")) return "We observe that approximately 70-80% of corporate and personal debt disputes are resolved directly at the notice stage without ever needing to step into a courtroom, due to the pressure an advocate's letterhead applies.";
    if (question.includes("Can I send a legal notice without a lawyer?")) return "You can send a personal demand letter, but it holds no formal legal weight. A 'Legal Notice' must be drafted on the official letterhead of a registered advocate to invoke serious legal consequences and court action.";
    if (question.includes("How long does the drafting and sending process take?")) return "Our expert advocates draft the notice within 24 to 48 hours of collecting your details. Once you approve the draft, it is dispatched via Speed Post immediately.";

    // Tenant / Eviction
    if (question.includes("Can I evict a tenant without a rental agreement?")) return "Yes. While a written agreement is highly beneficial, an oral tenancy can still be terminated by sending a legal notice under Section 106 of the Transfer of Property Act, giving them a 15-day warning to vacate.";
    if (question.includes("Can police help me evict a tenant?")) return "No, tenant eviction is purely a civil dispute. The police do not have the jurisdiction to physically force a tenant out without a formal eviction order from a civil court or Rent Controller.";
    if (question.includes("Tenant is not paying rent and not vacating. What to do?")) return "You must immediately issue a formal Legal Notice demanding payment of arrears and eviction. If they fail to comply within the notice period, you file an eviction suit under the state's specific Rent Control Act.";
    if (question.includes("How long does the eviction process take?")) return "If the tenant vacates upon receiving the legal notice, it takes 15-30 days. If a court case is filed, the timeline depends on the local court backlog, which can take several months to a year without strong representations.";
    if (question.includes("How much does it cost to send a legal notice to a tenant?")) return "VakilTech charges ₹1,499 for drafting a comprehensive eviction or rent arrears legal notice under the exact local Rent Control and Property laws, and handles the registered dispatch process.";
    if (question.includes("Can I lock the property to stop the tenant from entering?")) return "No! Locking the property, shutting off electricity or water, or attempting 'self-help' forceful eviction is illegal and criminal in India. Only a court can order an eviction.";

    return null;
  }
};
