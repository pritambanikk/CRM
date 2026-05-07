import os

file_path = "/Users/pritambanikk/VT/vt_march266/src/data/legal-notice-topics.ts"
with open(file_path, "r") as f:
    content = f.read()

# Add slug?: string; to the interface
content = content.replace("  id: string;\n", "  id: string;\n  slug?: string;\n")

# Slug mappings
mappings = {
    "demand-notice-recovery-of-money": "legal-notice-for-money-recovery",
    "demand-notice-loan-repayment": "bank-loan-settlement",
    "dishonoured-cheque": "cheque-bounce-legal-notice",
    "unpaid-salary-wages": "legal-notice-for-unpaid-salary",
    "security-deposit-recovery": "legal-notice-for-money-recovery",
    "outstanding-invoice-dues": "legal-notice-for-outstanding-payment",
    "professional-fees-recovery": "legal-notice-for-outstanding-payment",
    "refund-from-builder": "legal-notice-to-builder",
    "recovery-tenant-landlord": "legal-notice-to-tenant",
    "wrongful-termination": "wrongful-termination-legal-notice",
    "non-payment-salary-benefits": "legal-notice-for-unpaid-salary",
    "workplace-harassment": "workplace-harassment-legal-notice",
    "employee-misconduct": "employee-misconduct-legal-notice",
    "breach-employment-contract": "breach-of-contract-legal-notice",
    "absenteeism-negligence": "employee-misconduct-legal-notice",
    "recovery-company-assets": "legal-notice-for-property-possession",
    "property-partition": "property-partition-legal-notice",
    "tenant-eviction": "eviction-legal-notice",
    "tenant-non-payment": "legal-notice-for-rent-arrears",
    "tenant-property-damage": "legal-notice-to-tenant",
    "landlord-repairs": "maintenance-legal-notice",
    "possession-of-property": "legal-notice-for-property-possession",
    "encroachment-trespassing": "legal-notice-for-property-possession",
    "specific-performance": "breach-of-contract-legal-notice"
}

for _id, slug in mappings.items():
    old_str = f'id: "{_id}",'
    new_str = f'id: "{_id}",\n    slug: "{slug}",'
    content = content.replace(old_str, new_str)

with open(file_path, "w") as f:
    f.write(content)
print("Updated legal-notice-topics.ts successfully!")
