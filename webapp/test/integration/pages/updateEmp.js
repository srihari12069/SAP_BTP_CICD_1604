sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	Opa5.createPageObjects({
		onTheUpdateEmpPage: {
			actions: {
				iPressPage_updateEmp: function () {
					return this.waitFor({
						id: "updateEmp",
						viewName: "updateEmp",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id updateEmp"
					});
				}
			},
			assertions: {
				iShouldSeeUpdateEmpPage: function () {
					return this.waitFor({
						id: "updateEmp",
						viewName: "updateEmp",
						success: function () {
							Opa5.assert.ok(true, "Able to see the Update emplyee page.");
						},
						errorMessage: "Was not able to find the control with the id ControlId"
					});
				}
			}
		}
	});
});