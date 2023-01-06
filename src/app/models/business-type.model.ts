import { IndicatorModel } from './indicator.model';

export enum ClientTypesEnum {
  STANDARD = 1,
  LEGACY = 2,
  SORT = 3,
}

export interface BussinesTemplateInfoModel {
  reportableId: number;
  isSelected: boolean;
  name: string;
  templateType: ClientTypesEnum;
  templateUuid: string;
  dependencies?: any[];
}

export interface TemplateSelectionAndDashboards
  extends BussinesTemplateInfoModel {
  dasboard: number[];
}
export interface BusinessTypeModel {
  id: number;
  name: string;
  templateUuId?: string;
  templateTypes: BussinesTemplateInfoModel[];
  ocTypeSelection?: ClientTypesEnum;
  templateSelected?: string;
  instanceSelected?: string;
  instanceListConfig?: IndicatorModel[];
}
