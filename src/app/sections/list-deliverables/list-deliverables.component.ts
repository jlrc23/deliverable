import { Component, OnInit } from '@angular/core';
import { BusinessTypeModel } from '../../models/business-type.model';
import { DashboardDeliverableModel } from '../../models/dashboard-deliverable.model';
import { DashboardDeliverySubtypeModel } from '../../models/dashboard-delivery-subtype.model';
import { listDeliverables } from './list-deliverables.const';

@Component({
  selector: 'app-list-deliverables',
  templateUrl: './list-deliverables.component.html',
  styleUrls: ['./list-deliverables.component.css'],
})
export class ListDeliverablesComponent implements OnInit {
  value: any;
  public groups: Array<DashboardDeliverySubtypeModel>;
  deliverablesList = listDeliverables;
  constructor() {}

  ngOnInit() {
    this.updateGroups(listDeliverables);
  }

  updateGroups(apiResponse: Array<DashboardDeliverySubtypeModel>): void {
    const selections: Array<DashboardDeliverySubtypeModel> = this.value
      ? this.updateContract(this.value, apiResponse)
      : [];
    this.groups = apiResponse.map((item: DashboardDeliverySubtypeModel) => {
      const isSelected: DashboardDeliverySubtypeModel = selections.find(
        (tmp: DashboardDeliverySubtypeModel) => {
          return tmp && item && tmp.id === item.id;
        }
      );
      if (isSelected) {
        isSelected.deliverables = item.deliverables.map(
          (deliverable: DashboardDeliverableModel) => {
            const isDeliverableSelected: DashboardDeliverableModel =
              isSelected.deliverables.find((tmp: DashboardDeliverableModel) => {
                return tmp.id === deliverable.id;
              });
            if (!isDeliverableSelected) {
              deliverable.isSelected = false;
            }

            return isDeliverableSelected ? isDeliverableSelected : deliverable;
          }
        );
        return isSelected;
      } else {
        item.isIndeterminate = false;
        item.isSelected = false;
        item.deliverables.forEach((deliverable: DashboardDeliverableModel) => {
          deliverable.isSelected = false;
        });
        return item;
      }
    });
    //this.groups.forEach((group: DashboardDeliverySubtypeModel) =>
    //  this.validateGroup(group.id)
    //);
    //this.validateToSetState();
    /*if (this.updateIsNecessary && !this.enableSetTimeOut) {
      this.enableSetTimeOut = setTimeout(() => {
        this.notify();
        this.enableDebug = true;
      }, 900);
    }*/
  }

  updateContract(
    value: any,
    apiResponse: DashboardDeliverySubtypeModel[]
  ): DashboardDeliverySubtypeModel[] {
    let newValue: DashboardDeliverySubtypeModel[] = [];
    const defaultValueIsSelectBussinesType = true;
    if (Array.isArray(value)) {
      newValue = value.map((dashboard) => {
        const dashboardSubtypeFindInApi: DashboardDeliverySubtypeModel =
          apiResponse.find(
            (deliverySubType: DashboardDeliverySubtypeModel) =>
              deliverySubType && deliverySubType.id === dashboard.id
          );
        dashboard.deliverables = dashboard.deliverables.map(
          (delivery: DashboardDeliverableModel) => {
            const findOldFormat: BusinessTypeModel[] =
              delivery.businessTypes.filter(
                (businessTypeModel: BusinessTypeModel) =>
                  businessTypeModel.id && businessTypeModel.id > 0
              );
            if (findOldFormat && findOldFormat.length > 0) {
              //this.updateIsNecessary = true;
              const newBussinesType =
                dashboardSubtypeFindInApi.deliverables.find(
                  (deliveryApi: DashboardDeliverableModel) =>
                    deliveryApi.id === delivery.id
                );
              if (newBussinesType) {
                //delivery.businessTypes =
                //this.selectTemplateDefaulConfigByClientType(
                //  newBussinesType,
                //  defaultValueIsSelectBussinesType
                //);
              }
            }
            return delivery;
          }
        );
        return dashboard;
      });
    }
    return newValue;
  }
}
