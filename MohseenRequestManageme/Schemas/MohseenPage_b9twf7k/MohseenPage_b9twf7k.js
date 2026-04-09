define("MohseenPage_b9twf7k", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "IndicatorWidget_m4hf58r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 5,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_m4hf58r_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_m4hf58r_Data",
								"schemaName": "MohseenRequests",
								"filters": {
									"filter": {
										"items": {
											"84d0e909-8363-45e4-8031-3faf35e506a5": {
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
											},
											"e6a37e94-285c-43a6-830d-0c57ebb93198": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "MohseenApplicant"
												},
												"isAggregative": false,
												"dataValueType": 0,
												"referenceSchemaName": "Contact",
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 2
												}
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
										"relationPath": "DashboardDS.Id"
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
							"template": "#ResourceString(IndicatorWidget_m4hf58r_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ListWidget_xgcprnm",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"row": 1,
						"rowSpan": 7
					},
					"type": "crt.ListWidget",
					"widgetConfig": {
						"theme": "full-fill",
						"layout": {
							"color": "green"
						}
					},
					"title": "#ResourceString(ListWidget_xgcprnm_title)#",
					"features": {
						"rows": {
							"numeration": true,
							"selection": {
								"enable": true,
								"multiple": false
							}
						},
						"editable": false
					},
					"items": "$ListWidget_xgcprnm",
					"primaryColumnName": "ListWidget_xgcprnmDS_Id",
					"columns": [
						{
							"id": "72fd3698-fbe8-a262-0884-e759cd29320a",
							"code": "ListWidget_xgcprnmDS_MohseenName",
							"caption": "#ResourceString(ListWidget_xgcprnmDS_MohseenName)#",
							"dataValueType": 28,
							"width": 141
						},
						{
							"id": "ac1aac7e-2cfa-626d-241e-b02acb064930",
							"code": "ListWidget_xgcprnmDS_MohseenApplicant",
							"caption": "#ResourceString(ListWidget_xgcprnmDS_MohseenApplicant)#",
							"dataValueType": 10,
							"width": 131
						},
						{
							"id": "27f9c580-2946-9292-b984-74809e55688e",
							"code": "ListWidget_xgcprnmDS_MohseenCategory",
							"caption": "#ResourceString(ListWidget_xgcprnmDS_MohseenCategory)#",
							"dataValueType": 10,
							"width": 137
						},
						{
							"id": "a7b1ef88-cf8f-a501-8bcf-262edf302716",
							"code": "ListWidget_xgcprnmDS_MohseenSubCategory",
							"caption": "#ResourceString(ListWidget_xgcprnmDS_MohseenSubCategory)#",
							"dataValueType": 10,
							"width": 140
						},
						{
							"id": "92229f05-3d00-0420-c3ae-85756904cdb4",
							"code": "ListWidget_xgcprnmDS_MohseenStatus",
							"caption": "#ResourceString(ListWidget_xgcprnmDS_MohseenStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": null,
					"visible": true,
					"fitContent": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"ListWidget_xgcprnm": {
							"isCollection": true,
							"modelConfig": {
								"path": "ListWidget_xgcprnmDS",
								"filterAttributes": [
									{
										"loadOnChange": true,
										"name": "ListWidget_xgcprnm_PredefinedFilter"
									}
								]
							},
							"viewModelConfig": {
								"attributes": {
									"ListWidget_xgcprnmDS_MohseenName": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.MohseenName"
										}
									},
									"ListWidget_xgcprnmDS_MohseenApplicant": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.MohseenApplicant"
										}
									},
									"ListWidget_xgcprnmDS_MohseenCategory": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.MohseenCategory"
										}
									},
									"ListWidget_xgcprnmDS_MohseenSubCategory": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.MohseenSubCategory"
										}
									},
									"ListWidget_xgcprnmDS_MohseenStatus": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.MohseenStatus"
										}
									},
									"ListWidget_xgcprnmDS_Id": {
										"modelConfig": {
											"path": "ListWidget_xgcprnmDS.Id"
										}
									}
								}
							}
						},
						"ListWidget_xgcprnm_PredefinedFilter": {
							"value": {
								"items": {
									"336152ea-193f-4494-8c9f-e45124495cc2": {
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
									},
									"1c538d8a-9d93-48bb-ad55-b0394d19c637": {
										"filterType": 1,
										"comparisonType": 3,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "MohseenApplicant"
										},
										"isAggregative": false,
										"dataValueType": 0,
										"referenceSchemaName": "Contact",
										"rightExpression": {
											"expressionType": 1,
											"functionType": 1,
											"macrosType": 2
										}
									}
								},
								"logicalOperation": 0,
								"isEnabled": true,
								"filterType": 6,
								"rootSchemaName": "MohseenRequests"
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"ListWidget_xgcprnmDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "MohseenRequests",
								"attributes": {
									"MohseenName": {
										"path": "MohseenName"
									},
									"MohseenApplicant": {
										"path": "MohseenApplicant"
									},
									"MohseenCategory": {
										"path": "MohseenCategory"
									},
									"MohseenSubCategory": {
										"path": "MohseenSubCategory"
									},
									"MohseenStatus": {
										"path": "MohseenStatus"
									}
								}
							}
						}
					},
					"loadingConfig": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});