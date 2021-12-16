import { SetMetadata } from '@nestjs/common';

export const AuthAction = (action: Array<string>) =>
  SetMetadata('action', action);
