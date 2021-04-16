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

	return Controller.extend("com.yash.EmpCrudApp.controller.deleteEmp", {

		onInit: function () {
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

		onPressOpenDeleteDialog: function () {
			if (!this.oDefaultDialog) {
				this.oDefaultDialog = new Dialog({
					title: "Delete Employees!!",
					content: new Text({
						text: "Are You Sure To Delete Employees?"
					}),

					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function () {
							this.onPressDelete();
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

		onPressDelete: function () {
			var oTable = this.getView().byId("idsecondTable");
			var aContexts = oTable.getSelectedContexts();
			var oModel = this.getOwnerComponent().getModel();
			oModel.setUseBatch(false);
			for (var i = aContexts.length - 1; i >= 0; i--) {
				var tableRow = aContexts[i].getObject();
				var key = tableRow.Employeeid;
				oModel.remove("/EmployeeSet('" + key + "')", {
					success: function (oData) {
						MessageBox.show("Employee With ID: " + key + " Deleted Succcesfully", {
							title: "Success"
						});
						//oModel.setUseBatch(true);
						this.onPressGetData();
					}.bind(this),
					error: function (oError) {
						//	oModel.setUseBatch(true);
						MessageBox.error("technical error", {
							title: "error"
						});
					}
				});
				console.log();
			}

		},

		backToHome: function () {
			window.history.back();
		}

	});

});