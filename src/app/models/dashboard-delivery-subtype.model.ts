import { DashboardDeliverableModel } from './dashboard-deliverable.model';

export interface DashboardDeliverySubtypeModel {
  isIndeterminate?: boolean;
  isSelected?: boolean;
  deliverables: Array<DashboardDeliverableModel>;
  //
}
