define("MohseenRequests_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "MohseenRequests"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "MohseenRequests"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_MohseenName",
							"caption": "#ResourceString(PDS_MohseenName)#",
							"dataValueType": 1
						},
						{
							"id": "b87eeb39-81ae-435d-1e92-8a593f120cc4",
							"code": "PDS_MohseenStatus",
							"caption": "#ResourceString(PDS_MohseenStatus)#",
							"dataValueType": 10
						},
						{
							"id": "c1a8f49b-f915-98eb-d3dd-870b53685edb",
							"code": "PDS_MohseenCategory",
							"caption": "#ResourceString(PDS_MohseenCategory)#",
							"dataValueType": 10
						},
						{
							"id": "47623b26-5898-a8b1-73fd-64bbb9e13f3d",
							"code": "PDS_MohseenSubCategory",
							"caption": "#ResourceString(PDS_MohseenSubCategory)#",
							"dataValueType": 10
						},
						{
							"id": "83e4fea3-b228-8dd2-b4c5-b8b93fd00cdd",
							"code": "PDS_MohseenOwner",
							"caption": "#ResourceString(PDS_MohseenOwner)#",
							"dataValueType": 10
						},
						{
							"id": "157865a1-2782-0d9a-8386-4c388c6f22f2",
							"code": "PDS_MohseenApplicant",
							"caption": "#ResourceString(PDS_MohseenApplicant)#",
							"dataValueType": 10
						},
						{
							"id": "60119cfa-2825-94df-891a-f961d47ed8de",
							"code": "PDS_MohseenApplicant_Type",
							"caption": "#ResourceString(PDS_MohseenApplicant_Type)#",
							"dataValueType": 10
						},
						{
							"id": "f7d98ecd-b7ae-5d2d-9f84-72660b2ea8ad",
							"code": "PDS_MohseenExpensesMohseenRequst_Id_8ac4a10",
							"caption": "#ResourceString(PDS_MohseenExpensesMohseenRequst_Id_8ac4a10)#",
							"dataValueType": 4
						},
						{
							"id": "a2d4bd4f-0b50-43c9-e16c-9f495e278ba5",
							"code": "PDS_MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc",
							"caption": "#ResourceString(PDS_MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc)#",
							"dataValueType": 6
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": true,
							"resizing": true,
							"sorting": true
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "MohseenRequests",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_trk5dfv",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_trk5dfv_config_caption)#",
						"hint": "",
						"icon": "copilot-rewrite-friendly-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_trk5dfv_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "MohseenApplicant"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_trk5dfv_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_1kefkct",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_1kefkct_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_1kefkct_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_1kefkct_Value"
					},
					"filterType": "date-range"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_xelutxq",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_xelutxq_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_xelutxq_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"961ed590-8246-4614-9e5d-5a568c1679ec": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "MohseenStatus"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "MohseenRequeststatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Approval",
																				"Id": "588ff672-8359-46ba-8dc7-fa6eb6584ad0",
																				"value": "588ff672-8359-46ba-8dc7-fa6eb6584ad0",
																				"displayValue": "Approval"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "In progress",
																				"Id": "f84e1ab4-c951-40b7-beb6-5d7b2c2e8662",
																				"value": "f84e1ab4-c951-40b7-beb6-5d7b2c2e8662",
																				"displayValue": "In progress"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "New",
																				"Id": "14d69a93-3d16-40a7-b4e0-ab25c625a61a",
																				"value": "14d69a93-3d16-40a7-b4e0-ab25c625a61a",
																				"displayValue": "New"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Canceled",
																				"Id": "467cc8cd-bf2f-4746-bbac-ed9a32f31ecc",
																				"value": "467cc8cd-bf2f-4746-bbac-ed9a32f31ecc",
																				"displayValue": "Canceled"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "MohseenRequests"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_xelutxq_Value"
						]
					},
					"filterType": "custom"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FlexContainer_y369tf0",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_q27abeo",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_y369tf0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_5idvcc5",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_5idvcc5_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_5idvcc5_Data",
								"schemaName": "MohseenRequests",
								"filters": {
									"filter": {
										"items": {
											"fc55eaa9-fa60-4396-8ec9-ca9a83023b6f": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "MohseenStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "MohseenRequeststatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "New",
																"Id": "14d69a93-3d16-40a7-b4e0-ab25c625a61a",
																"value": "14d69a93-3d16-40a7-b4e0-ab25c625a61a",
																"displayValue": "New"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In progress",
																"Id": "f84e1ab4-c951-40b7-beb6-5d7b2c2e8662",
																"value": "f84e1ab4-c951-40b7-beb6-5d7b2c2e8662",
																"displayValue": "In progress"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Approval",
																"Id": "588ff672-8359-46ba-8dc7-fa6eb6584ad0",
																"value": "588ff672-8359-46ba-8dc7-fa6eb6584ad0",
																"displayValue": "Approval"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Denied",
																"Id": "5481adad-aad3-456d-9014-855a6137e162",
																"value": "5481adad-aad3-456d-9014-855a6137e162",
																"displayValue": "Denied"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "MohseenRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_5idvcc5_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "burnt-coral"
						},
						"theme": "glassmorphism",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "FlexContainer_y369tf0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GaugeWidget_p6hnjgo",
				"values": {
					"type": "crt.GaugeWidget",
					"config": {
						"title": "#ResourceString(GaugeWidget_p6hnjgo_title)#",
						"data": {
							"providing": {
								"attribute": "GaugeWidget_p6hnjgo_Data",
								"schemaName": "MohseenRequests",
								"filters": {
									"filter": {
										"items": {
											"b603e833-8258-44d1-9e10-387f58944a99": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "MohseenStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "MohseenRequeststatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Completed",
																"Id": "719e7c40-7ba0-4f04-a436-e72452c5d57b",
																"value": "719e7c40-7ba0-4f04-a436-e72452c5d57b",
																"displayValue": "Completed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "MohseenRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
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
								},
								"MohseenOwner": {
									"path": "MohseenOwner"
								},
								"MohseenApplicant": {
									"path": "MohseenApplicant"
								},
								"MohseenApplicant_Type": {
									"type": "ForwardReference",
									"path": "MohseenApplicant.Type"
								},
								"MohseenExpensesMohseenRequst_Id_8ac4a10": {
									"type": "Aggregation",
									"path": "[MohseenExpenses:MohseenRequst].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count"
									}
								},
								"MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc": {
									"type": "Aggregation",
									"path": "[MohseenExpenses:MohseenRequst].MohseenAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum"
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(GaugeWidget_p6hnjgo_template)#",
							"metricMacros": "{0}"
						},
						"layout": {
							"color": "burnt-coral"
						},
						"theme": "partial-fill",
						"thresholds": {
							"0": {
								"color": "#20A959"
							},
							"2": {
								"color": "#0058EF"
							},
							"10": {
								"color": "#E23911"
							}
						},
						"min": 0,
						"max": 10,
						"orderDirection": 2
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FlexContainer_y369tf0",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_MohseenName": {
						"modelConfig": {
							"path": "PDS.MohseenName"
						}
					},
					"PDS_MohseenStatus": {
						"modelConfig": {
							"path": "PDS.MohseenStatus"
						}
					},
					"PDS_MohseenCategory": {
						"modelConfig": {
							"path": "PDS.MohseenCategory"
						}
					},
					"PDS_MohseenSubCategory": {
						"modelConfig": {
							"path": "PDS.MohseenSubCategory"
						}
					},
					"PDS_MohseenOwner": {
						"modelConfig": {
							"path": "PDS.MohseenOwner"
						}
					},
					"PDS_MohseenApplicant": {
						"modelConfig": {
							"path": "PDS.MohseenApplicant"
						}
					},
					"PDS_MohseenApplicant_Type": {
						"modelConfig": {
							"path": "PDS.MohseenApplicant_Type"
						}
					},
					"PDS_MohseenExpensesMohseenRequst_Id_8ac4a10": {
						"modelConfig": {
							"path": "PDS.MohseenExpensesMohseenRequst_Id_8ac4a10"
						}
					},
					"PDS_MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc": {
						"modelConfig": {
							"path": "PDS.MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_trk5dfv_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_1kefkct_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_xelutxq_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "MohseenApplicant_Type"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [],
				"properties": [
					"dependencies"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
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
						},
						"MohseenOwner": {
							"path": "MohseenOwner"
						},
						"MohseenApplicant": {
							"path": "MohseenApplicant"
						},
						"MohseenApplicant_Type": {
							"type": "ForwardReference",
							"path": "MohseenApplicant.Type"
						},
						"MohseenExpensesMohseenRequst_Id_8ac4a10": {
							"type": "Aggregation",
							"path": "[MohseenExpenses:MohseenRequst].Id",
							"aggregationConfig": {
								"aggregationFunction": "Count"
							}
						},
						"MohseenExpensesMohseenRequst_MohseenAmount_o35vbfc": {
							"type": "Aggregation",
							"path": "[MohseenExpenses:MohseenRequst].MohseenAmount",
							"aggregationConfig": {
								"aggregationFunction": "Sum"
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});