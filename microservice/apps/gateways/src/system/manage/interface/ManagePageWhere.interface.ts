import { PageFilter } from '@app/libs/common/interface/pageWhere.interface';
import { FindOperator } from 'typeorm';

export interface ManagePageWhere extends PageFilter {
  where?: {
    username?: FindOperator<string>;
    nickname?: FindOperator<string>;
    roleId?: number;
  };
}
