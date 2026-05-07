import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_b030KJWsg', // Extracted from AWS provided issuerURL
  ClientId: '1b89q7ar1f9lji2p1p6qn3toi0', // New Public SPA Client ID
};

export default new CognitoUserPool(poolData);
