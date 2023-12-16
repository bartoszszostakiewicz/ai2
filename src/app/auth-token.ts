export interface AuthToken {
  sub: string;
  roles: string[];
  iam: number;
  exp: number;
}
