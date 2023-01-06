export interface BaseItemModel {
  id: number;
  name: string;
}

export enum ClientTypesEnum {
  STANDARD = 1,
  LEGACY = 2,
  SORT = 3,
}

export enum InstanceStatusEnum {
  invalid,
  valid,
}

export enum HandlingTypesEnum {
  dataFactHistory = 'DATA_FACT_HISTORY',
  dataSalesHistory = 'DATA_SALES_HISTORY',
  dataQuestionHistory = 'DATA_QUESTION_HISTORY',
  na = 'N/A',
}

export enum HandlingTypeIndexEnum {
  dataFactHistory = 1,
  dataSalesHistory = 2,
  dataQuestionHistory = 3,
  na = 4,
  dataSalesFactHistory,
}

export interface HandlingModel {
  handlingTypeId: HandlingTypeIndexEnum;
  name: HandlingTypesEnum;
  typeDsc: string;
}

export enum OriginTypesEnum {
  template,
  deliverable,
  preconfiguredInstance,
}

export enum ParameterTypes {
  ReportableId = 'ReportableId',
  InstanceName = 'InstanceName',
  Description = 'UserDescription',
  Dimension = 'Dimension',
  Char = 'Char',
  FilterFact = 'FilterFact',
  FilterCharValues = 'FilterCharValues',
  FilterHierLevel = 'FilterHierLevel',
  Target = 'Target',
  Factor = 'Factor',
  FilterAttribute = 'FilterAuditAttribute',
  SimpleDimChar = 'SimpleDimChar',
}

export interface ParameterModel {
  id?: number | string;
  // 	Parameter name
  name: string;
  // Type of the parameter, according to the type of parameter the front must specify a behavior
  type?: ParameterTypes | string;
  // This defines the type of value that will be taken by the back
  dataType: string;
  // The field it's required
  required?: boolean;
  // Specifies whether the front should enable if it is multi-selection or single selection
  multipleSelection?: boolean;
  // 	Specified the order display in the front
  order?: number;
  // The label for show in the front
  label?: string;
  // Description for display to the user
  description?: string;
  // The field it's visible
  visible: boolean;
  // The value is unique or a list of values
  valueList: boolean;
  value?: any;
  clientDependant?: boolean;
}

export interface TemplateParametersModel {
  deprecatedDependencies?: DeprecatedDependenciesModel[];
  dependencies: DependencyModel[];
  parameters: ParameterModel[];
}

export interface DependencyTemplateModel {
  id: any;
  name: string;
  description: string;
  isDeprecated?: boolean;
  templateType?: number;
}

export interface DependencyModel {
  dependencyId: number;
  templateId: any;
  required: boolean;
  multivalue: boolean;
  templateName: string;
  value?: any;
  dependencyTemplate?: DependencyTemplateModel;
}

export interface DependencyTemplateModel {
  id: any;
  name: string;
  description: string;
  isDeprecated?: boolean;
  templateType?: number;
}

export interface DeprecatedDependenciesModel {
  dependencyId: number;
  deprecatedTemplate: DependencyTemplateModel;
}

export interface TemplateParametersModel {
  deprecatedDependencies?: DeprecatedDependenciesModel[];
  dependencies: DependencyModel[];
  parameters: ParameterModel[];
}

export interface TemplateModel extends TemplateParametersModel {
  templateId: string;
  templateName: string;
  templateUuid: string;
  originType: OriginTypesEnum;
  dependencies: DependencyModel[];
  parameters: ParameterModel[];
  handlingType?: HandlingModel;
}

export interface IndicatorModel extends TemplateModel {
  id?: any;
  indicatorId?: number;
  instanceName: string;
  instanceUuid: string;
  originType: OriginTypesEnum;
  instanceNameDescription?: string;
  creation: number;
  updated: number;
  templateId: string;
  templateUuid: string;
  templateName: string;
  handlingType?: HandlingModel;
  lstFactIds?: number[];
  reportable: boolean;
  dependencies: DependencyModel[];
  parameters: ParameterModel[];
  lastModifiedDate: number;
  createdDate: number;
  status: InstanceStatusEnum;
  lstDeliverablesId?: Array<number>;
  duplicatedInstance: boolean;
  missingFacts?: boolean;
  description: string;
  templateType?: ClientTypesEnum;
  indicatorOrigin?: BaseItemModel;
  usedInDeveliverable?: boolean;
}
