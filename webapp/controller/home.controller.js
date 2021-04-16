sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.yash.EmpCrudApp.controller.home", {

	
		onInit: function () {
			var localModel = this.getOwnerComponent().getModel("LocalModel");
			this.getView().setModel(localModel, "LocalDataModel");
		},

		onPressShowEmp: function(){
			UIComponent.getRouterFor(this).navTo("getEmpl");
		},
		
		onPressCreateEmp: function(){
			UIComponent.getRouterFor(this).navTo("createEmp");
		},
		
		onPressUpdateEmp: function(){
			UIComponent.getRouterFor(this).navTo("updateEmp");
		},
		
		onPressDeleteEmp: function(){
			UIComponent.getRouterFor(this).navTo("deleteEmp");
		}

	});

});