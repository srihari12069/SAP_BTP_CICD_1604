sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	Opa5.createPageObjects({
		onTheCreateEmpPage: {
			actions: {
				iPressPage_createEmp: function () {
					return this.waitFor({
						id: "createEmp",
						viewName: "createEmp",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id createEmp"
					});
				}
			},
			assertions: {
				iShouldSeeCreateEmpPage: function () {
					return this.waitFor({
						id: "createEmp",
						viewName: "createEmp",
						success: function () {
							Opa5.assert.ok(true, "Able to see the create emplyee page.");
						},
						errorMessage: "Was not able to find the control with the id ControlId"
					});
				}
			}
		}
	});
});