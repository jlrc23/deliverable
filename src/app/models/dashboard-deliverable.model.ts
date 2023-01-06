import { BusinessTypeModel } from './business-type.model';

export interface DashboardDeliverableModel {
  id: number;
  name: string;
  businessTypes: Array<BusinessTypeModel>;
  isSelected?: boolean;
}
