import { PageFilter } from '@app/libs/common/interface/pageWhere.interface';
import { FindOperator } from 'typeorm';

export interface ContentPageWhere extends PageFilter {
  where: {
    title?: FindOperator<string>;
    top?: boolean;
    status?: string;
  };
  order?: any;
}
