import { Cashfree, CFEnvironment } from "cashfree-pg";

const environment = process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT === "PRODUCTION" 
  ? CFEnvironment.PRODUCTION 
  : CFEnvironment.SANDBOX;

// According to Cashfree Node SDK v5 setup
export const CashfreeClient = new Cashfree(
  environment,
  process.env.CASHFREE_APP_ID || "",
  process.env.CASHFREE_SECRET_KEY || ""
);

