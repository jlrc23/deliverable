import { DashboardDeliverySubtypeModel } from '../../models/dashboard-delivery-subtype.model';

export const listDeliverables = [
  {
    id: 21,
    name: 'Share of SKU',
    deliverables: [
      {
        id: 10,
        name: 'Share Of SKU',
        tag: 'share_of_sku',
        longDesc: 'Share Of SKU',
        isSelected: null,
        businessTypes: [
          {
            name: 'SHARE_OF_SKU_AVAILABILITY',
            templateTypes: [
              {
                reportableId: 3,
                name: 'SHARE_OF_SKU_AVAILABILITY',
                isSelected: false,
                templateUuid: '6d4391ed-100f-47aa-89ed-157cbf35b728',
                templateType: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 22,
    name: "'Generic Dashboard'",
    deliverables: [
      {
        id: 13,
        name: 'Generic Dashboard',
        tag: 'generic_dashboard',
        longDesc: 'Generic Dashboard',
        isSelected: null,
        businessTypes: [],
      },
    ],
  },
  {
    id: 23,
    name: 'Pricing vs Competition',
    deliverables: [
      {
        id: 12,
        name: 'Pricing Vs Competition',
        tag: 'pricing_vs_competition',
        longDesc: 'Pricing Vs Competition',
        isSelected: null,
        businessTypes: [
          {
            name: 'MIN_NET_PRICE',
            templateTypes: [
              {
                reportableId: 45,
                name: 'MIN_NET_PRICE',
                isSelected: false,
                templateUuid: '48cbc32d-fb0e-4391-8a0a-54329cb4e936',
                templateType: 1,
                dependencies: [
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'MAX_NET_PRICE',
            templateTypes: [
              {
                reportableId: 46,
                name: 'MAX_NET_PRICE',
                isSelected: false,
                templateUuid: '5ce45a4b-a68e-4a94-8ec0-09fa6e2a0347',
                templateType: 1,
                dependencies: [
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Execution at a Glance',
    deliverables: [
      {
        id: 8,
        name: 'Execution at Glance',
        tag: 'execution_at_glance',
        longDesc: 'Execution at Glance',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_OUT_OF_STOCK',
            templateTypes: [
              {
                reportableId: 5,
                name: 'NUMERICAL_OUT_OF_STOCK',
                isSelected: false,
                templateUuid: '73d0d1f1-1612-481f-a30c-4fdb9d069af9',
                templateType: 1,
                dependencies: [
                  {
                    id: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                    name: 'NUMERICAL_DISTRIBUTION',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 78,
                name: 'NUMERICAL_OUT_OF_STOCK_LEGACY',
                isSelected: false,
                templateUuid: 'f029ab90-b502-4cff-80e0-340401379ada',
                templateType: 2,
                dependencies: [
                  {
                    id: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                    name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 79,
                name: 'OUT_OF_STOCK_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: '3ea7a4b6-6466-47c9-ab7b-b2f7afb56a23',
                templateType: 2,
                dependencies: [
                  {
                    id: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 63,
                name: 'OUT_OF_STOCK_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: '3c9de73a-ca9c-4b06-a065-8c4e333173fa',
                templateType: 3,
                dependencies: [
                  {
                    id: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_FACING',
            templateTypes: [
              {
                reportableId: 9,
                name: 'SHARE_OF_FACING',
                isSelected: false,
                templateUuid: '5ac501ed-6801-483c-8ae2-2deb850627da',
                templateType: 1,
                dependencies: [
                  {
                    id: '37c3204c-cd34-4de5-8949-2834df285ecb',
                    name: 'FACING_UNITS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 73,
                name: 'SHARE_OF_FACING_UNITS_LEGACY',
                isSelected: false,
                templateUuid: '6587dac1-bab9-46fd-a5ac-69a731e49e17',
                templateType: 2,
                dependencies: [
                  {
                    id: '536eb48c-1e05-4e36-bba8-3439ef3175b5',
                    name: 'FACING_UNITS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'FACING_UNITS',
            templateTypes: [
              {
                reportableId: 20,
                name: 'FACING_UNITS',
                isSelected: false,
                templateUuid: '37c3204c-cd34-4de5-8949-2834df285ecb',
                templateType: 1,
              },
              {
                reportableId: 72,
                name: 'FACING_UNITS_LEGACY',
                isSelected: false,
                templateUuid: '536eb48c-1e05-4e36-bba8-3439ef3175b5',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'PRESENCE',
            templateTypes: [
              {
                reportableId: 21,
                name: 'PRESENCE',
                isSelected: false,
                templateUuid: '06604575-1ca2-4d58-85be-1484da1da8c5',
                templateType: 1,
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Fundamentals Dashboards',
    deliverables: [
      {
        id: 16,
        name: 'Out Of Stock',
        tag: 'out_of_stock',
        longDesc: 'Out Of Stock',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_OUT_OF_STOCK',
            templateTypes: [
              {
                reportableId: 5,
                name: 'NUMERICAL_OUT_OF_STOCK',
                isSelected: false,
                templateUuid: '73d0d1f1-1612-481f-a30c-4fdb9d069af9',
                templateType: 1,
                dependencies: [
                  {
                    id: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                    name: 'NUMERICAL_DISTRIBUTION',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 78,
                name: 'NUMERICAL_OUT_OF_STOCK_LEGACY',
                isSelected: false,
                templateUuid: 'f029ab90-b502-4cff-80e0-340401379ada',
                templateType: 2,
                dependencies: [
                  {
                    id: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                    name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 79,
                name: 'OUT_OF_STOCK_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: '3ea7a4b6-6466-47c9-ab7b-b2f7afb56a23',
                templateType: 2,
                dependencies: [
                  {
                    id: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 63,
                name: 'OUT_OF_STOCK_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: '3c9de73a-ca9c-4b06-a065-8c4e333173fa',
                templateType: 3,
                dependencies: [
                  {
                    id: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 17,
        name: 'Numerical Distribution',
        tag: 'numerical_distribution',
        longDesc: 'Numerical Distribution',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Pricing Dashboards',
    deliverables: [
      {
        id: 11,
        name: 'Pricing Vs Benchmark',
        tag: 'pricing_vs_benchmark',
        longDesc: 'Pricing Vs Benchmark',
        isSelected: null,
        businessTypes: [
          {
            name: 'TARGET_PRICE',
            templateTypes: [
              {
                reportableId: 44,
                name: 'TARGET_PRICE',
                isSelected: false,
                templateUuid: 'acb8e172-d6b2-422c-bffc-642a99ee7dea',
                templateType: 1,
              },
            ],
          },
          {
            name: 'MIN_NET_PRICE',
            templateTypes: [
              {
                reportableId: 45,
                name: 'MIN_NET_PRICE',
                isSelected: false,
                templateUuid: '48cbc32d-fb0e-4391-8a0a-54329cb4e936',
                templateType: 1,
                dependencies: [
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'MAX_NET_PRICE',
            templateTypes: [
              {
                reportableId: 46,
                name: 'MAX_NET_PRICE',
                isSelected: false,
                templateUuid: '5ce45a4b-a68e-4a94-8ec0-09fa6e2a0347',
                templateType: 1,
                dependencies: [
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 18,
        name: 'Regular Price',
        tag: 'regular_price',
        longDesc: 'Regular Price',
        isSelected: null,
        businessTypes: [
          {
            name: 'REGULAR_PRICE',
            templateTypes: [
              {
                reportableId: 7,
                name: 'AVERAGE_PRICE',
                isSelected: false,
                templateUuid: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                templateType: 1,
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: 'Offer Price',
        tag: 'offer_price',
        longDesc: 'Offer Price',
        isSelected: null,
        businessTypes: [
          {
            name: 'OFFER_PRICE',
            templateTypes: [
              {
                reportableId: 8,
                name: 'AVERAGE_PRICE_WA',
                isSelected: false,
                templateUuid: '5ac1334a-f705-4bac-afd1-65c574290806',
                templateType: 1,
              },
            ],
          },
        ],
      },
      {
        id: 20,
        name: 'Net Price',
        tag: 'net_price',
        longDesc: 'Net Price',
        isSelected: null,
        businessTypes: [
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'Pricing Grid',
    deliverables: [
      {
        id: 9,
        name: 'Pricing Grid',
        tag: 'pricing_grid',
        longDesc: 'Pricing Grid',
        isSelected: null,
        businessTypes: [
          {
            name: 'REGULAR_PRICE',
            templateTypes: [
              {
                reportableId: 7,
                name: 'AVERAGE_PRICE',
                isSelected: false,
                templateUuid: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                templateType: 1,
              },
            ],
          },
          {
            name: 'OFFER_PRICE',
            templateTypes: [
              {
                reportableId: 8,
                name: 'AVERAGE_PRICE_WA',
                isSelected: false,
                templateUuid: '5ac1334a-f705-4bac-afd1-65c574290806',
                templateType: 1,
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: 'Shelving Dashboards',
    deliverables: [
      {
        id: 14,
        name: 'Share Of Facing',
        tag: 'share_of_facing',
        longDesc: 'Share Of Facing',
        isSelected: null,
        businessTypes: [
          {
            name: 'SHARE_OF_FACING',
            templateTypes: [
              {
                reportableId: 9,
                name: 'SHARE_OF_FACING',
                isSelected: false,
                templateUuid: '5ac501ed-6801-483c-8ae2-2deb850627da',
                templateType: 1,
                dependencies: [
                  {
                    id: '37c3204c-cd34-4de5-8949-2834df285ecb',
                    name: 'FACING_UNITS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 73,
                name: 'SHARE_OF_FACING_UNITS_LEGACY',
                isSelected: false,
                templateUuid: '6587dac1-bab9-46fd-a5ac-69a731e49e17',
                templateType: 2,
                dependencies: [
                  {
                    id: '536eb48c-1e05-4e36-bba8-3439ef3175b5',
                    name: 'FACING_UNITS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Share Of Linear Mts',
        tag: 'share_of_linear_mts',
        longDesc: 'Share Of Linear Mts',
        isSelected: null,
        businessTypes: [
          {
            name: 'SHARE_OF_FACING_LINEAR',
            templateTypes: [
              {
                reportableId: 75,
                name: 'SHARE_OF_FACING_LINEAR_LEGACY',
                isSelected: false,
                templateUuid: 'c0dbbbe4-6b21-4ced-a167-019e1f16ffec',
                templateType: 2,
                dependencies: [
                  {
                    id: '4247e448-c4bd-40e8-99d2-9e1433786ea2',
                    name: 'FACING_LINEAR_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 10,
                name: 'SHARE_OF_FACING_LINEAR',
                isSelected: false,
                templateUuid: 'e6981843-2692-4cab-918e-74775d428eaf',
                templateType: 1,
                dependencies: [
                  {
                    id: 'fd5fa2cb-b763-4828-aa18-8667433e801b',
                    name: 'FACING_LINEAR',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: 'Special Activation',
    deliverables: [
      {
        id: 22,
        name: 'Number Displays',
        tag: 'number_displays',
        longDesc: 'Number Displays',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_DISPLAY',
            templateTypes: [
              {
                reportableId: 30,
                name: 'SHARE_OF_DISPLAY',
                isSelected: false,
                templateUuid: '4a7837ac-831e-482e-8a74-ff9522c5125c',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NUMBER_OF_DISPLAY',
            templateTypes: [
              {
                reportableId: 36,
                name: 'NUMBER_OF_DISPLAY',
                isSelected: false,
                templateUuid: '4003443a-52d4-4ffa-b2da-77d39638b32f',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: 'Share Of Displays',
        tag: 'share_of_displays',
        longDesc: 'Share Of Displays',
        isSelected: null,
        businessTypes: [
          {
            name: 'SHARE_OF_DISPLAY',
            templateTypes: [
              {
                reportableId: 30,
                name: 'SHARE_OF_DISPLAY',
                isSelected: false,
                templateUuid: '4a7837ac-831e-482e-8a74-ff9522c5125c',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 24,
        name: 'Displays By Type',
        tag: 'displays_by_type',
        longDesc: 'Displays By Type',
        isSelected: null,
        businessTypes: [
          {
            name: 'SHARE_OF_DISPLAY',
            templateTypes: [
              {
                reportableId: 30,
                name: 'SHARE_OF_DISPLAY',
                isSelected: false,
                templateUuid: '4a7837ac-831e-482e-8a74-ff9522c5125c',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 28,
        name: 'Distribution of Displays',
        tag: 'percentage_distribution_displays',
        longDesc: 'Distribution of Displays',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 24,
    name: 'Linkage To Sales',
    deliverables: [
      {
        id: 33,
        name: 'Special Exhibitions vs Sales Index',
        tag: 'special_exhibitions_vs_sales_index',
        longDesc: 'Special Exhibitions vs Sales Index',
        isSelected: null,
        businessTypes: [
          {
            name: 'PRESENCE',
            templateTypes: [
              {
                reportableId: 21,
                name: 'PRESENCE',
                isSelected: false,
                templateUuid: '06604575-1ca2-4d58-85be-1484da1da8c5',
                templateType: 1,
              },
            ],
          },
          {
            name: 'SALES_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 56,
                name: 'SALES_INDEX_UNITS',
                isSelected: false,
                templateUuid: 'd8b89da4-e25b-41db-8518-2fd1bf37c314',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 57,
                name: 'SALES_INDEX_VALUE',
                isSelected: false,
                templateUuid: '67a83855-bc24-4ab4-9683-90b32f9a40d0',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VOLUME',
            templateTypes: [
              {
                reportableId: 69,
                name: 'SALES_INDEX_VOLUME',
                isSelected: false,
                templateUuid: 'f0ef1f08-3e06-4480-8258-46fa66361989',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 34,
        name: 'Exhibition Count vs Sales Index',
        tag: 'exhibition_count_vs_sales_index',
        longDesc: 'Exhibition Count vs Sales Index',
        isSelected: null,
        businessTypes: [
          {
            name: 'PRESENCE',
            templateTypes: [
              {
                reportableId: 21,
                name: 'PRESENCE',
                isSelected: false,
                templateUuid: '06604575-1ca2-4d58-85be-1484da1da8c5',
                templateType: 1,
              },
            ],
          },
          {
            name: 'EXHIBITION_COUNT',
            templateTypes: [
              {
                reportableId: 31,
                name: 'EXHIBITION_COUNT',
                isSelected: false,
                templateUuid: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                templateType: 1,
              },
              {
                reportableId: 85,
                name: 'EXHIBITION_COUNT_LEGACY',
                isSelected: false,
                templateUuid: '3c157953-fca1-43ff-9796-ad57e44703da',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 56,
                name: 'SALES_INDEX_UNITS',
                isSelected: false,
                templateUuid: 'd8b89da4-e25b-41db-8518-2fd1bf37c314',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 57,
                name: 'SALES_INDEX_VALUE',
                isSelected: false,
                templateUuid: '67a83855-bc24-4ab4-9683-90b32f9a40d0',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VOLUME',
            templateTypes: [
              {
                reportableId: 69,
                name: 'SALES_INDEX_VOLUME',
                isSelected: false,
                templateUuid: 'f0ef1f08-3e06-4480-8258-46fa66361989',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 35,
        name: 'Price vs Sales Index',
        tag: 'price_vs_sales_index',
        longDesc: 'Price vs Sales Index',
        isSelected: null,
        businessTypes: [
          {
            name: 'REGULAR_PRICE',
            templateTypes: [
              {
                reportableId: 7,
                name: 'AVERAGE_PRICE',
                isSelected: false,
                templateUuid: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                templateType: 1,
              },
            ],
          },
          {
            name: 'OFFER_PRICE',
            templateTypes: [
              {
                reportableId: 8,
                name: 'AVERAGE_PRICE_WA',
                isSelected: false,
                templateUuid: '5ac1334a-f705-4bac-afd1-65c574290806',
                templateType: 1,
              },
            ],
          },
          {
            name: 'PRESENCE',
            templateTypes: [
              {
                reportableId: 21,
                name: 'PRESENCE',
                isSelected: false,
                templateUuid: '06604575-1ca2-4d58-85be-1484da1da8c5',
                templateType: 1,
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 56,
                name: 'SALES_INDEX_UNITS',
                isSelected: false,
                templateUuid: 'd8b89da4-e25b-41db-8518-2fd1bf37c314',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 57,
                name: 'SALES_INDEX_VALUE',
                isSelected: false,
                templateUuid: '67a83855-bc24-4ab4-9683-90b32f9a40d0',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VOLUME',
            templateTypes: [
              {
                reportableId: 69,
                name: 'SALES_INDEX_VOLUME',
                isSelected: false,
                templateUuid: 'f0ef1f08-3e06-4480-8258-46fa66361989',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 36,
        name: 'Share Of Shelf vs Sales Index',
        tag: 'share_of_shelf_vs_sales_index',
        longDesc: 'Share Of Shelf vs Sales Index',
        isSelected: null,
        businessTypes: [
          {
            name: 'PRESENCE',
            templateTypes: [
              {
                reportableId: 21,
                name: 'PRESENCE',
                isSelected: false,
                templateUuid: '06604575-1ca2-4d58-85be-1484da1da8c5',
                templateType: 1,
              },
            ],
          },
          {
            name: 'SALES_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 56,
                name: 'SALES_INDEX_UNITS',
                isSelected: false,
                templateUuid: 'd8b89da4-e25b-41db-8518-2fd1bf37c314',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 57,
                name: 'SALES_INDEX_VALUE',
                isSelected: false,
                templateUuid: '67a83855-bc24-4ab4-9683-90b32f9a40d0',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VOLUME',
            templateTypes: [
              {
                reportableId: 69,
                name: 'SALES_INDEX_VOLUME',
                isSelected: false,
                templateUuid: 'f0ef1f08-3e06-4480-8258-46fa66361989',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_FACING_LINEAR',
            templateTypes: [
              {
                reportableId: 10,
                name: 'SHARE_OF_FACING_LINEAR',
                isSelected: false,
                templateUuid: 'e6981843-2692-4cab-918e-74775d428eaf',
                templateType: 1,
                dependencies: [
                  {
                    id: 'fd5fa2cb-b763-4828-aa18-8667433e801b',
                    name: 'FACING_LINEAR',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 42,
        name: 'Trended View',
        tag: 'trended_view',
        longDesc: 'Trended View',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_OUT_OF_STOCK',
            templateTypes: [
              {
                reportableId: 5,
                name: 'NUMERICAL_OUT_OF_STOCK',
                isSelected: false,
                templateUuid: '73d0d1f1-1612-481f-a30c-4fdb9d069af9',
                templateType: 1,
                dependencies: [
                  {
                    id: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                    name: 'NUMERICAL_DISTRIBUTION',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 78,
                name: 'NUMERICAL_OUT_OF_STOCK_LEGACY',
                isSelected: false,
                templateUuid: 'f029ab90-b502-4cff-80e0-340401379ada',
                templateType: 2,
                dependencies: [
                  {
                    id: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                    name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 79,
                name: 'OUT_OF_STOCK_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: '3ea7a4b6-6466-47c9-ab7b-b2f7afb56a23',
                templateType: 2,
                dependencies: [
                  {
                    id: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 63,
                name: 'OUT_OF_STOCK_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: '3c9de73a-ca9c-4b06-a065-8c4e333173fa',
                templateType: 3,
                dependencies: [
                  {
                    id: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                    name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'REGULAR_PRICE',
            templateTypes: [
              {
                reportableId: 7,
                name: 'AVERAGE_PRICE',
                isSelected: false,
                templateUuid: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                templateType: 1,
              },
            ],
          },
          {
            name: 'OFFER_PRICE',
            templateTypes: [
              {
                reportableId: 8,
                name: 'AVERAGE_PRICE_WA',
                isSelected: false,
                templateUuid: '5ac1334a-f705-4bac-afd1-65c574290806',
                templateType: 1,
              },
            ],
          },
          {
            name: 'SHARE_OF_FACING',
            templateTypes: [
              {
                reportableId: 9,
                name: 'SHARE_OF_FACING',
                isSelected: false,
                templateUuid: '5ac501ed-6801-483c-8ae2-2deb850627da',
                templateType: 1,
                dependencies: [
                  {
                    id: '37c3204c-cd34-4de5-8949-2834df285ecb',
                    name: 'FACING_UNITS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 73,
                name: 'SHARE_OF_FACING_UNITS_LEGACY',
                isSelected: false,
                templateUuid: '6587dac1-bab9-46fd-a5ac-69a731e49e17',
                templateType: 2,
                dependencies: [
                  {
                    id: '536eb48c-1e05-4e36-bba8-3439ef3175b5',
                    name: 'FACING_UNITS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'EXHIBITION_COUNT',
            templateTypes: [
              {
                reportableId: 31,
                name: 'EXHIBITION_COUNT',
                isSelected: false,
                templateUuid: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                templateType: 1,
              },
              {
                reportableId: 85,
                name: 'EXHIBITION_COUNT_LEGACY',
                isSelected: false,
                templateUuid: '3c157953-fca1-43ff-9796-ad57e44703da',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_STOCK_IN_UNITS',
            templateTypes: [
              {
                reportableId: 43,
                name: 'SHARE_OF_STOCK_UNITS',
                isSelected: false,
                templateUuid: '1a97cda5-83f3-48cb-add5-bafbee928c24',
                templateType: 1,
                dependencies: [
                  {
                    id: 'a5170503-48bc-40fc-ad9e-aadf3b89c2d6',
                    name: 'STOCK_UNITS',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'NET_PRICE',
            templateTypes: [
              {
                reportableId: 6,
                name: 'NET_PRICE_AVG',
                isSelected: false,
                templateUuid: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                templateType: 1,
                dependencies: [
                  {
                    id: '60a7c41f-794a-4d98-a0ed-1adcd3324c45',
                    name: 'AVERAGE_PRICE',
                    isDeprecated: false,
                  },
                  {
                    id: '5ac1334a-f705-4bac-afd1-65c574290806',
                    name: 'AVERAGE_PRICE_WA',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 56,
                name: 'SALES_INDEX_UNITS',
                isSelected: false,
                templateUuid: 'd8b89da4-e25b-41db-8518-2fd1bf37c314',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SALES_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 57,
                name: 'SALES_INDEX_VALUE',
                isSelected: false,
                templateUuid: '67a83855-bc24-4ab4-9683-90b32f9a40d0',
                templateType: 1,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_FACING_LINEAR',
            templateTypes: [
              {
                reportableId: 75,
                name: 'SHARE_OF_FACING_LINEAR_LEGACY',
                isSelected: false,
                templateUuid: 'c0dbbbe4-6b21-4ced-a167-019e1f16ffec',
                templateType: 2,
                dependencies: [
                  {
                    id: '4247e448-c4bd-40e8-99d2-9e1433786ea2',
                    name: 'FACING_LINEAR_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 10,
                name: 'SHARE_OF_FACING_LINEAR',
                isSelected: false,
                templateUuid: 'e6981843-2692-4cab-918e-74775d428eaf',
                templateType: 1,
                dependencies: [
                  {
                    id: 'fd5fa2cb-b763-4828-aa18-8667433e801b',
                    name: 'FACING_LINEAR',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_MARKET_INDEX_UNITS',
            templateTypes: [
              {
                reportableId: 80,
                name: 'SHARE_OF_MARKET_INDEX_UNITS_LEGACY',
                isSelected: false,
                templateUuid: '7ffdaf33-2b6a-403b-a2ab-296903688646',
                templateType: 2,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_MARKET_INDEX_VALUE',
            templateTypes: [
              {
                reportableId: 81,
                name: 'SHARE_OF_MARKET_INDEX_VALUE_LEGACY',
                isSelected: false,
                templateUuid: '8bc8e462-7edd-43df-8e98-3ce70de4d59f',
                templateType: 2,
                dependencies: [
                  {
                    id: '72c49746-f125-40fe-9660-a6816787a495',
                    name: 'AUDIT_STATUS_SALES_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_EXHIBITIONS',
            templateTypes: [
              {
                reportableId: 83,
                name: 'SHARE_OF_EXHIBITIONS',
                isSelected: false,
                templateUuid: 'e8cf3640-a8bc-4ac2-b5aa-028448de0cce',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_EXHIBITIONS_NOPBE',
            templateTypes: [
              {
                reportableId: 84,
                name: 'SHARE_OF_EXHIBITIONS_NOPBE',
                isSelected: false,
                templateUuid: 'a8a9e37c-e836-40f4-986a-64d141ac78a4',
                templateType: 2,
                dependencies: [
                  {
                    id: '4dd618f2-32f8-4f36-8256-1bb24da06e5f',
                    name: 'NO_OF_PRODUCTS_BY_EXHIBITION',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'AVG_EXHIBITION_PER_STORE',
            templateTypes: [
              {
                reportableId: 87,
                name: 'AVG_EXHIBITIONS_PER_STORE',
                isSelected: false,
                templateUuid: '6d270f63-8c92-4042-9a62-8145780a6c14',
                templateType: 1,
                dependencies: [
                  {
                    id: 'c2abadb2-e6cb-49f3-a79a-bc5704639020',
                    name: 'EXHIBITION_COUNT',
                    isDeprecated: false,
                  },
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 88,
                name: 'AVG_EXHIBITIONS_PER_STORE_LEGACY',
                isSelected: false,
                templateUuid: 'e4d82065-2423-4c76-ab9d-8bbaf75bda8b',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                  {
                    id: '3c157953-fca1-43ff-9796-ad57e44703da',
                    name: 'EXHIBITION_COUNT_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'AVG_EXHIBITIONS_PER_STORE_NOPBE_LEGACY',
            templateTypes: [
              {
                reportableId: 89,
                name: 'AVG_EXHIBITIONS_PER_STORE_NOPBE_LEGACY',
                isSelected: false,
                templateUuid: '3bcb8dc5-73c1-4ac3-bdb6-41d0b9dfd819',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                  {
                    id: '1cb0eb22-bc5d-466c-8752-c69838def0ec',
                    name: 'NO_OF_PRODUCTS_BY_EXHIBITION_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 26,
    name: 'SORT',
    deliverables: [
      {
        id: 38,
        name: 'Weighted Distribution',
        tag: 'weighted_distribution',
        longDesc: 'Weighted Distribution',
        isSelected: null,
        businessTypes: [
          {
            name: 'WEIGHTED_DISTRIBUTION_SALES_VALUE',
            templateTypes: [
              {
                reportableId: 60,
                name: 'WEIGHTED_DISTRIBUTION_SALES_VALUE',
                isSelected: false,
                templateUuid: '8340566c-84b6-4fbb-a0a5-51fbf2596369',
                templateType: 3,
                dependencies: [
                  {
                    id: '42c32585-852d-4435-85ac-de9ae0f038c7',
                    name: 'CLAIMED_SALES_VALUE',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'WEIGHTED_DISTRIBUTION_SALES_VOLUME',
            templateTypes: [
              {
                reportableId: 61,
                name: 'WEIGHTED_DISTRIBUTION_SALES_VOLUME',
                isSelected: false,
                templateUuid: '618f3c94-e14f-4156-be6b-7b5bd8eb90d7',
                templateType: 3,
                dependencies: [
                  {
                    id: '401976d9-324b-4253-bf01-3dd835e72504',
                    name: 'CLAIMED_SALES_VOLUME',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 39,
        name: 'Weighted OOS',
        tag: 'weighted_oos',
        longDesc: 'Weighted OOS',
        isSelected: null,
        businessTypes: [
          {
            name: 'WEIGHTED_OUT_OF_STOCK_VOLUME',
            templateTypes: [
              {
                reportableId: 58,
                name: 'WEIGHTED_OUT_OF_STOCK_VOLUME',
                isSelected: false,
                templateUuid: '9f53ff92-39f5-47c0-98eb-7970fafca48d',
                templateType: 3,
                dependencies: [
                  {
                    id: '401976d9-324b-4253-bf01-3dd835e72504',
                    name: 'CLAIMED_SALES_VOLUME',
                    isDeprecated: false,
                  },
                  {
                    id: '3c9de73a-ca9c-4b06-a065-8c4e333173fa',
                    name: 'OUT_OF_STOCK_HANDLING_STORES_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'WEIGHTED_OUT_OF_STOCK_VALUE',
            templateTypes: [
              {
                reportableId: 59,
                name: 'WEIGHTED_OUT_OF_STOCK_VALUE',
                isSelected: false,
                templateUuid: 'ce0a8570-6eee-43e8-8f5e-c94cbf6107e1',
                templateType: 3,
                dependencies: [
                  {
                    id: '42c32585-852d-4435-85ac-de9ae0f038c7',
                    name: 'CLAIMED_SALES_VALUE',
                    isDeprecated: false,
                  },
                  {
                    id: '3c9de73a-ca9c-4b06-a065-8c4e333173fa',
                    name: 'OUT_OF_STOCK_HANDLING_STORES_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 40,
        name: 'Numerical Distribution vs Weighted Distribution',
        tag: 'numerical_distribution_vs_weighted_distribution',
        longDesc: 'Numerical Distribution vs Weighted Distribution',
        isSelected: null,
        businessTypes: [
          {
            name: 'NUMERICAL_DISTRIBUTION',
            templateTypes: [
              {
                reportableId: 11,
                name: 'NUMERICAL_DISTRIBUTION',
                isSelected: false,
                templateUuid: '1501cbec-3629-41ea-9d9e-00c77766aaa8',
                templateType: 1,
                dependencies: [
                  {
                    id: '9cbfed12-ca32-462e-a019-a43f0f33d400',
                    name: 'AUDIT_STATUS',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 76,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_LEGACY',
                isSelected: false,
                templateUuid: 'ea6f6e06-0d35-4a61-a0ed-cd749621d850',
                templateType: 2,
              },
              {
                reportableId: 77,
                name: 'NUMERICAL_DISTRIBUTION_LEGACY',
                isSelected: false,
                templateUuid: '7beca8c7-a851-4f6a-94df-4f3a2257f743',
                templateType: 2,
                dependencies: [
                  {
                    id: '9c2e347c-be9e-45c3-923f-bb89d140013d',
                    name: 'AUDIT_STATUS_LEGACY',
                    isDeprecated: false,
                  },
                ],
              },
              {
                reportableId: 65,
                name: 'NUMERICAL_DISTRIBUTION_HANDLING_STORES_SORT',
                isSelected: false,
                templateUuid: 'f3a65ac7-5e61-4a55-9092-3818fcc55d53',
                templateType: 3,
                dependencies: [
                  {
                    id: 'c9913c4a-0753-4851-91f8-fe9778203310',
                    name: 'AUDIT_STATUS_HANDLING_SORT',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'WEIGHTED_DISTRIBUTION_SALES_VALUE',
            templateTypes: [
              {
                reportableId: 60,
                name: 'WEIGHTED_DISTRIBUTION_SALES_VALUE',
                isSelected: false,
                templateUuid: '8340566c-84b6-4fbb-a0a5-51fbf2596369',
                templateType: 3,
                dependencies: [
                  {
                    id: '42c32585-852d-4435-85ac-de9ae0f038c7',
                    name: 'CLAIMED_SALES_VALUE',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'WEIGHTED_DISTRIBUTION_SALES_VOLUME',
            templateTypes: [
              {
                reportableId: 61,
                name: 'WEIGHTED_DISTRIBUTION_SALES_VOLUME',
                isSelected: false,
                templateUuid: '618f3c94-e14f-4156-be6b-7b5bd8eb90d7',
                templateType: 3,
                dependencies: [
                  {
                    id: '401976d9-324b-4253-bf01-3dd835e72504',
                    name: 'CLAIMED_SALES_VOLUME',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 41,
        name: 'Claimed Sales',
        tag: 'claimed_sales',
        longDesc: 'Claimed Sales',
        isSelected: null,
        businessTypes: [
          {
            name: 'CLAIMED_SALES_VALUE',
            templateTypes: [
              {
                reportableId: 29,
                name: 'CLAIMED_SALES_VALUE',
                isSelected: false,
                templateUuid: '42c32585-852d-4435-85ac-de9ae0f038c7',
                templateType: 3,
                dependencies: [
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'CLAIMED_SALES_VOLUME',
            templateTypes: [
              {
                reportableId: 32,
                name: 'CLAIMED_SALES_VOLUME',
                isSelected: false,
                templateUuid: '401976d9-324b-4253-bf01-3dd835e72504',
                templateType: 3,
              },
            ],
          },
          {
            name: 'SHARE_OF_SALES_VOLUME',
            templateTypes: [
              {
                reportableId: 33,
                name: 'SHARE_OF_SALES_VOLUME',
                isSelected: false,
                templateUuid: '6e9add6d-bcad-40c5-8462-c10512a6bed4',
                templateType: 3,
                dependencies: [
                  {
                    id: '401976d9-324b-4253-bf01-3dd835e72504',
                    name: 'CLAIMED_SALES_VOLUME',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_SALES_VALUE',
            templateTypes: [
              {
                reportableId: 34,
                name: 'SHARE_OF_SALES_VALUE',
                isSelected: false,
                templateUuid: '0f9fc185-f2cb-4b34-8e88-668141285e40',
                templateType: 3,
                dependencies: [
                  {
                    id: '42c32585-852d-4435-85ac-de9ae0f038c7',
                    name: 'CLAIMED_SALES_VALUE',
                    isDeprecated: false,
                  },
                  {
                    id: '581c2ad1-07a8-4fcf-86dc-c2ee73924d52',
                    name: 'NET_PRICE_AVG',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'SHARE_OF_SALES_IN_UNITS',
            templateTypes: [
              {
                reportableId: 67,
                name: 'SHARE_OF_SALES_IN_UNITS',
                isSelected: false,
                templateUuid: 'c8291ea1-33e2-4c6f-a567-1858a138604e',
                templateType: 3,
                dependencies: [
                  {
                    id: '32ff0672-179d-467a-a371-ccff923a7fae',
                    name: 'CLAIMED_SALES_UNITS',
                    isDeprecated: false,
                  },
                ],
              },
            ],
          },
          {
            name: 'CLAIMED_SALES_UNITS',
            templateTypes: [
              {
                reportableId: 68,
                name: 'CLAIMED_SALES_UNITS',
                isSelected: false,
                templateUuid: '32ff0672-179d-467a-a371-ccff923a7fae',
                templateType: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 27,
    name: 'Retailer vs Rest of Market',
    deliverables: [
      {
        id: 43,
        name: 'Retailer vs Rest of Market',
        tag: 'retailer_vs_rest_of_market',
        longDesc: 'Retailer vs Rest of Market',
        isSelected: null,
        businessTypes: [],
      },
    ],
  },
] as DashboardDeliverySubtypeModel[];
