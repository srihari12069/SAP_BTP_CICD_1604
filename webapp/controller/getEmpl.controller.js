sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.yash.EmpCrudApp.controller.getEmpl", {

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

		backToHome: function () {
			window.history.back();
		}

	});

});