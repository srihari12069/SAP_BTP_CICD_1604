sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	Opa5.createPageObjects({
		onTheHomePage: {
			actions: {
				iPressPage_Home: function () {
					return this.waitFor({
						id: "MISSING_ID",
						viewName: "home",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id MISSING_ID"
					});
				},
				iPressButton_showEmployee: function () {
					return this.waitFor({
						id: "showEmployee",
						viewName: "home",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id showEmployee"
					});
				},
				iPressButton_createEmployee: function () {
					return this.waitFor({
						id: "createEmployee",
						viewName: "home",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id createEmployee"
					});
				},
				iPressButton_updateEmployee: function () {
					return this.waitFor({
						id: "updateEmployee",
						viewName: "home",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id updateEmployee"
					});
				},
				iPressButton_deleteEmployee: function () {
					return this.waitFor({
						id: "deleteEmployee",
						viewName: "home",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id deleteEmployee"
					});
				}
			},
			assertions: {
				iShouldSeeHomePage: function () {
					return this.waitFor({
						id: "home",
						viewName: "home",
						success: function () {
							Opa5.assert.ok(true, "Able to see Home page");
						},
						errorMessage: "Was not able to find the control with the id ControlId"
					});
				}
			}
		}
	});
});