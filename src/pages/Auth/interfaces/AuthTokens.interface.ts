interface TokenProps {
  token: string;
  expires_in: number;
}

export interface AuthTokens {
  auth_tokens: { access_token: TokenProps; refresh_token: TokenProps };
}
