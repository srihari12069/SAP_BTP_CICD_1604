sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	Opa5.createPageObjects({
		onTheDeleteEmpPage: {
			actions: {
				iPressPage_deleteEmp: function () {
					return this.waitFor({
						id: "deleteEmp",
						viewName: "deleteEmp",
						actions: new Press(),
						errorMessage: "Was not able to find the control with the id deleteEmp"
					});
				}
			},
			assertions: {
				iShouldSeeDeleteEmpPage: function () {
					return this.waitFor({
						id: "deleteEmp",
						viewName: "deleteEmp",
						success: function () {
							Opa5.assert.ok(true, "Able to see the Delete emplyee page.");
						},
						errorMessage: "Was not able to find the control with the id ControlId"
					});
				}
			}
		}
	});
});