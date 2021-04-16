sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	Opa5.createPageObjects({
		onShowEmpPage: {
			actions: {
				iPressPage_showEmp: function () {
					return this.waitFor({
						id: "showEmp",
						viewName: "getEmpl",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id showEmp"
					});
				}
			},
			assertions: {
				iShouldSeeTheShowEmpPage: function () {
					return this.waitFor({
						id: "showEmp",
						viewName: "getEmpl",
						success: function () {
							Opa5.assert.ok(true, "Able to see the Show Employee page.");
						},
						errorMessage: "Was not able to find the control with the id ControlId"
					});
				}
			}
		}
	});
});