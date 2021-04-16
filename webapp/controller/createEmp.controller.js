sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/Dialog",
	"sap/m/DialogType",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/Text"
], function (Controller, MessageBox, Dialog, DialogType, Button, ButtonType, Text) {
	"use strict";

	return Controller.extend("com.yash.EmpCrudApp.controller.createEmp", {

		onInit: function () {
			var localModel = this.getOwnerComponent().getModel("LocalModel");
			this.getView().setModel(localModel, "LocalDataModel");
		},
		onPressGetData: function (oEvent) {
			var oModel = this.getOwnerComponent().getModel(),
				localModel = this.getOwnerComponent().getModel("LocalModel");

			oModel.read("/EmployeeSet", {
				success: function (oData) {
					localModel.setProperty("/employyeData", oData.results);
				},
				error: function (oError) {
					MessageBox.error("technical error", {
						title: "error"
					});
				}
			});
		},

		onPressOpenCreateDialog: function () {
			if (!this.oDefaultDialog) {
				this.oDefaultDialog = new Dialog({
					title: "Create Employees!!",
					content: new Text({
						text: "Are You Sure To Create Employee?"
					}),

					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function () {
							this.onPressCreate();
							this.oDefaultDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function () {
							this.oDefaultDialog.close();
						}.bind(this)
					})
				});

				this.getView().addDependent(this.oDefaultDialog);
			}

			this.oDefaultDialog.open();
		},
		
		clearInputFields: function(){
			this.getView().byId("Employeeid").setValue("");
			this.getView().byId("Employeename").setValue("");
			this.getView().byId("Gender").setValue("");
			this.getView().byId("Age").setValue("");
			this.getView().byId("Designation").setValue("");
		},

		onPressCreate: function (oEvent) {
			var oModel = this.getOwnerComponent().getModel(),
				localModel = this.getOwnerComponent().getModel("LocalModel"),
				odata = localModel.getProperty("/createEmployeeData") || [],
				lineItems;
			lineItems = {
				"Employeeid": this.getView().byId("Employeeid").getValue(),
				"Employeename": this.getView().byId("Employeename").getValue(),
				"Gender": this.getView().byId("Gender").getValue(),
				"Age": this.getView().byId("Age").getValue(),
				"Designation": this.getView().byId("Designation").getValue()
			};
			odata.push(lineItems);
			localModel.setProperty("/createEmployeeData", odata);
			localModel.updateBindings(true);

			if (odata) {
				oModel.setUseBatch(false);
				odata.forEach(function (element, indez) {
					oModel.create("/EmployeeSet", element, {
						success: function (oData) {
							localModel.setProperty("/createEmployeeData", []);
							MessageBox.show("The Employee with id: " + oData.Employeeid + " created Succcesfully", {
								title: "Success"
							});
							oModel.setUseBatch(true);
							this.onPressGetData();
							this.clearInputFields();
						}.bind(this),
						error: function (oError) {
							oModel.setUseBatch(true);
							MessageBox.error("technical error", {
								title: "error"
							});
						}
					});
				}.bind(this));

			}
		},

		backToHome: function () {
			window.history.back();
		}

	});

});