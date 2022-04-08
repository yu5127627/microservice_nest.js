import { PageFilter } from '@app/libs/common/interface/pageWhere.interface';
import { FindOperator } from 'typeorm';

export interface LoginLogPageWhere extends PageFilter {
  where?: {
    username?: FindOperator<string>;
    address?: FindOperator<string>;
    ua?: FindOperator<string>;
  };
  order?: any;
}
