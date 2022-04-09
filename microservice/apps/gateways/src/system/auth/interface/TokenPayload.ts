export interface TokenPayload {
  id: number;
  username: string;
  roleId: number;
  menuIds?: Array<number>;
}
