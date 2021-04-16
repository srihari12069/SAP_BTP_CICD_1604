sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.yash.EmpCrudApp.controller.updateEmp", {

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

		onSelectItem: function (oEvent) {
			var sObject = oEvent.getSource().getBindingContext("LocalDataModel").getObject(),
				localModel = this.getOwnerComponent().getModel("LocalModel");
			localModel.setProperty("/createEmployeeData", [sObject]);
			this.getView().byId("idProductsTable").setVisible(true);
			this.getView().byId("bar2").setVisible(true);
			this.getView().byId("idsecondTable").setVisible(false);
		},
		onCancelUpdate: function (oEvent) {
			this.getView().byId("idProductsTable").setVisible(false);
			this.getView().byId("bar2").setVisible(false);
			this.getView().byId("idsecondTable").setVisible(true);
		},

		onUpdateItems: function (oEvent) {
			var obj = this.getOwnerComponent().getModel("LocalModel").getProperty("/createEmployeeData"),
				localModel = this.getOwnerComponent().getModel("LocalModel"),
				oModel = this.getOwnerComponent().getModel();
			if (obj && obj.length > 0) {
				var key = obj[0].Employeeid;
				oModel.update("/EmployeeSet(Employeeid='" + key + "')", obj[0], {
					success: function (oData) {
						localModel.setProperty("/createEmployeeData", [oData]);
						MessageBox.show("updated Succcesfully", {
							title: "Success"
						});
						this.onCancelUpdate();

					}.bind(this),
					error: function (oError) {
						//	oModel.setUseBatch(true);
						MessageBox.error("technical error", {
							title: "error"
						});
					}
				});
			}

		},

		backToHome: function () {
			window.history.back();
		}

	});

});