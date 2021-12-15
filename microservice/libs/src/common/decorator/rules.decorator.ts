import { SetMetadata } from '@nestjs/common';

export const Rules = (rules: Array<string>) => SetMetadata('rules', rules);
