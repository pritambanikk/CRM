export type Asset = {
  id: string;
  type: string;
  description: string;
  location?: string;
};

export type Beneficiary = {
  id: string;
  name: string;
  relationship: string;
};

export type Child = {
  id: string;
  name: string;
  age: number;
};

export type WillData = {
  basic: {
    fullName: string;
    age: number | string;
    gender?: string;
    addressLine1: string;
    postOffice: string;
    policeStation: string;
    district: string;
    state: string;
    pincode: string;
    maritalStatus: string;
  };
  family: {
    hasSpouse: boolean;
    spouseName?: string;
    hasChildren: boolean;
    children: Child[];
    dependents?: string;
  };
  assets: Asset[];
  beneficiaries: Beneficiary[];
  distributionType: 'equal' | 'custom';
  assetDistribution: Record<string, string[]>; // assetId -> array of beneficiaryIds
  executor: {
    name: string;
    relationship: string;
    address: string;
  };
  guardian?: {
    name: string;
  };
  specialWishes?: string;
};

function generateEmotionalOpening(data: WillData): string {
  const age = Number(data.basic.age) || 0;
  const hasChildren = data.family.hasChildren && data.family.children.length > 0;
  const hasSpouse = data.family.hasSpouse && !!data.family.spouseName;
  
  let opening = "";

  if (age <= 30) {
    opening = "I understand that life is uncertain, and as a matter of precaution and prudence, I am making this Will to ensure clarity and peace of mind for my loved ones.";
  } else if (age > 30 && age <= 50) {
    opening = "I believe it is my fundamental responsibility to ensure clarity, security, and harmony for my family. This document reflects my commitment to their future well-being.";
  } else if (age > 50 && age <= 70) {
    opening = "At this stage of my life, drawing upon my life experiences, I find it deeply important to organize my affairs clearly. I wish to leave behind a legacy of love, free from confusion or dispute.";
  } else {
    opening = "At this stage of my life, I find myself increasingly concerned about the well-being of my loved ones. I write this with a heart full of love, hoping to provide them security and peace when I am no longer around.";
  }

  // Context modifiers
  if (!hasChildren) {
    opening += " While I have no children of my own, the bonds I share with those named in this Will are profound, and I wish to honor those connections.";
  }
  
  if (hasSpouse) {
    opening += ` My foremost priority is the comfort and care of my beloved spouse, ${data.family.spouseName}, whose support has been my strength.`;
  }

  return opening;
}

export function calculateWillStrength(data: Partial<WillData>): number {
  let score = 0;

  // Basic Details
  if (data?.basic?.fullName) score += 5;
  if (data?.basic?.addressLine1 && data?.basic?.pincode) score += 10;

  // Family
  if (data?.basic?.maritalStatus) score += 5;
  if (data?.family?.hasSpouse && data?.family?.spouseName) score += 5;
  
  // Assets & Beneficiaries
  if (data?.assets && data.assets.length > 0) score += 20;
  if (data?.beneficiaries && data.beneficiaries.length > 0) score += 20;

  // Distribution mapped
  if (data?.distributionType === "custom") {
    // Check if at least some assets are mapped
    const hasMappings = Object.values(data?.assetDistribution || {}).some((arr: any) => arr?.length > 0);
    if (hasMappings) score += 10;
  } else if (data?.distributionType === "equal" && data?.beneficiaries && data.beneficiaries.length > 0) {
    score += 10;
  }

  // Executor
  if (data?.executor?.name && data?.executor?.address) score += 15;

  // Guardian
  const hasMinorChildren = data?.family?.children?.some(c => c?.age < 18);
  if (hasMinorChildren) {
    if (data?.guardian?.name) score += 10;
  } else {
    // Free points if no minor children so they can reach 100%
    score += 10;
  }

  return Math.min(100, score);
}

export function generateWillText(data: WillData): string {
  const date = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sections: string[] = [];

  // 1. Title
  sections.push("LAST WILL AND TESTAMENT\n");

  // 2. Introduction
  sections.push(
    `I, ${data.basic.fullName}, aged ${data.basic.age} years, residing at ${data.basic.addressLine1}, Post Office: ${data.basic.postOffice}, Police Station: ${data.basic.policeStation}, District: ${data.basic.district}, State: ${data.basic.state}, Pincode: ${data.basic.pincode}, being of sound mind and memory, do hereby make, publish, and declare this to be my Last Will and Testament.`
  );

  // 3. Emotional Opening
  sections.push(generateEmotionalOpening(data));

  // 4. Declaration
  sections.push(
    "I declare that I am making this Will voluntarily, out of my own free will, without any coercion, undue influence, or fraud whatsoever. I am in good physical and mental health."
  );

  // 5. Revocation
  sections.push(
    "I hereby revoke all former Wills, Codicils, and testamentary dispositions made by me previously, and declare this to be my final Last Will and Testament."
  );

  // 6. Family Details
  let familyText = "I declare that my family consists of ";
  const familyMembers = [];
  if (data.family.hasSpouse && data.family.spouseName) {
    familyMembers.push(`my spouse, ${data.family.spouseName}`);
  }
  if (data.family.hasChildren && data.family.children.length > 0) {
    const childrenNames = data.family.children.map(c => `${c.name} (Age: ${c.age})`).join(", ");
    familyMembers.push(`my children: ${childrenNames}`);
  }

  if (familyMembers.length > 0) {
    familyText += familyMembers.join(" and ") + ".";
    if (data.family.dependents) {
      familyText += ` I also support the following dependent(s): ${data.family.dependents}.`;
    }
  } else {
    // No spouse or children
    if (data.family.dependents) {
      familyText = `I declare that I have no spouse or children, but I provide support to the following dependent(s): ${data.family.dependents}.`;
    } else {
      familyText = `I declare that I have no spouse, children, or other immediate dependents.`;
    }
  }
  sections.push(familyText);

  // 7. Asset Details & 8. Distribution
  sections.push("DISTRIBUTION OF ASSETS");
  
  if (data.assets.length === 0) {
    sections.push("I currently declare no specific assets for distribution in this draft.");
  } else {
    if (data.distributionType === 'equal') {
      const benNames = data.beneficiaries.map(b => b.name).join(", ");
      sections.push(
        `It is my express desire that all my movable and immovable properties, assets, and investments shall be distributed equally among my following beneficiaries: ${benNames}.`
      );
      
      data.assets.forEach((asset, index) => {
        let assetStr = `${index + 1}. ${asset.type}: ${asset.description}`;
        if (asset.location) assetStr += ` (Located at: ${asset.location})`;
        sections.push(assetStr);
      });
    } else {
      sections.push("I bequeath my movable and immovable properties in the following specific manner:");
      data.assets.forEach((asset, index) => {
        let assetStr = `${index + 1}. ${asset.type}: ${asset.description}`;
        if (asset.location) assetStr += ` (Located at: ${asset.location})`;
        
        const bIds = data.assetDistribution[asset.id] || [];
        const mappedBens = data.beneficiaries.filter(b => bIds.includes(b.id)).map(b => b.name);
        
        if (mappedBens.length > 0) {
          assetStr += `\n   To be given to: ${mappedBens.join(", ")}.`;
        } else {
          assetStr += `\n   To form part of my residuary estate.`;
        }
        
        sections.push(assetStr);
      });
    }
  }

  // Residuary clause
  sections.push(
    "Any other property, movable or immovable, which I may acquire hereafter or which I have not specifically disposed of, shall be divided equally among my named beneficiaries."
  );

  // 9. Executor Clause
  sections.push(
    `EXECUTOR\nI hereby appoint ${data.executor.name} (${data.executor.relationship}), residing at ${data.executor.address}, as the sole Executor of this Will. I have full faith and trust that they will administer my estate and execute my wishes faithfully according to law.`
  );

  // 10. Guardian Clause
  const hasMinorChildren = data.family.children?.some(c => c.age < 18);
  if (hasMinorChildren && data.guardian?.name) {
    sections.push(
      `APPOINTMENT OF GUARDIAN\nSince I have minor children, I hereby appoint ${data.guardian.name} to be the legal and physical guardian of my minor children, trusting them to raise my children with love, care, and good values.`
    );
  }

  // 11. Special Wishes
  if (data.specialWishes?.trim()) {
    sections.push(
      `SPECIAL WISHES\n${data.specialWishes.trim()}`
    );
  }

  // 12. Closing Declaration
  sections.push(
    `IN WITNESS WHEREOF, I have hereunto set my hand and signature to this Will on this ${date}.`
  );

  // 13. Signatures
  sections.push(
    `________________________\nSignature of Testator\nName: ${data.basic.fullName}\n\n` +
    `WITNESSES:\n` +
    `We, the undersigned, certify that the Testator has signed this Will in our presence, and we have signed as witnesses in the presence of the Testator and in the presence of each other.\n\n` +
    `1. Signature: __________________\n   Name:\n   Address:\n\n` +
    `2. Signature: __________________\n   Name:\n   Address:`
  );

  // Join paragraphs with double newlines
  return sections.join("\n\n");
}
