define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Timeline",
				"values": {
					"filterValues": "$Timeline_AllTileFilters"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Email",
				"values": {
					"filters": "$TimelineTile_Email_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Task",
				"values": {
					"filters": "$TimelineTile_Task_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Call",
				"values": {
					"filters": "$TimelineTile_Call_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_OmniChat",
				"values": {
					"filters": "$TimelineTile_OmniChat_Items"
				}
			},
			{
				"operation": "insert",
				"name": "TabContainer_oyt2dti",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_oyt2dti_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2foav4i",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_oyt2dti",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_0ngjamf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_0ngjamf",
					"primaryColumnName": "DataGrid_0ngjamfDS_Id",
					"columns": [
						{
							"id": "ae824bc4-567d-739f-bd43-00a357ba4a6a",
							"code": "DataGrid_0ngjamfDS_MohseenName",
							"caption": "#ResourceString(DataGrid_0ngjamfDS_MohseenName)#",
							"dataValueType": 28,
							"width": 219
						},
						{
							"id": "f29309bb-54e4-0b2e-4e97-2ffdc4844fb4",
							"code": "DataGrid_0ngjamfDS_MohseenStatus",
							"caption": "#ResourceString(DataGrid_0ngjamfDS_MohseenStatus)#",
							"dataValueType": 10
						},
						{
							"id": "75029091-9930-c203-244e-b0f86227879d",
							"code": "DataGrid_0ngjamfDS_MohseenCategory",
							"caption": "#ResourceString(DataGrid_0ngjamfDS_MohseenCategory)#",
							"dataValueType": 10,
							"width": 124
						},
						{
							"id": "a7dff0f4-9d31-5682-2f53-f534a28e918c",
							"code": "DataGrid_0ngjamfDS_MohseenSubCategory",
							"caption": "#ResourceString(DataGrid_0ngjamfDS_MohseenSubCategory)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_2foav4i",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_0ngjamf": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_0ngjamfDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_0ngjamf_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_0ngjamfDS_MohseenName": {
									"modelConfig": {
										"path": "DataGrid_0ngjamfDS.MohseenName"
									}
								},
								"DataGrid_0ngjamfDS_MohseenStatus": {
									"modelConfig": {
										"path": "DataGrid_0ngjamfDS.MohseenStatus"
									}
								},
								"DataGrid_0ngjamfDS_MohseenCategory": {
									"modelConfig": {
										"path": "DataGrid_0ngjamfDS.MohseenCategory"
									}
								},
								"DataGrid_0ngjamfDS_MohseenSubCategory": {
									"modelConfig": {
										"path": "DataGrid_0ngjamfDS.MohseenSubCategory"
									}
								},
								"DataGrid_0ngjamfDS_Id": {
									"modelConfig": {
										"path": "DataGrid_0ngjamfDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_0ngjamf_PredefinedFilter": {
						"value": null
					},
					"Timeline_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_EmailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_TaskDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_CallDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_OmniChatDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OmniChat"
						}
					},
					"DataGrid_0ngjamfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "MohseenRequests",
							"attributes": {
								"MohseenName": {
									"path": "MohseenName"
								},
								"MohseenStatus": {
									"path": "MohseenStatus"
								},
								"MohseenCategory": {
									"path": "MohseenCategory"
								},
								"MohseenSubCategory": {
									"path": "MohseenSubCategory"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_0ngjamfDS": [
						{
							"attributePath": "MohseenApplicant",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});