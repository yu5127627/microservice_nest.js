import { PageFilter } from '@app/libs/common/interface/pageWhere.interface';
import { FindOperator } from 'typeorm';

export interface RolePageWhere extends PageFilter {
  where?: {
    name?: FindOperator<string>;
    level?: number;
  };
}
