	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/app",
		"./pages/updateEmp",
		"./pages/deleteEmp",
		"./pages/createEmp",
		"./pages/showEmp",
		"./pages/home"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();

		});
		opaTest("Should see the Home page of the app and should able to navigate to Show employee page", function (Given, When, Then) {

			// Assertions
			Then.onTheHomePage.iShouldSeeHomePage();

			// Actions
			When.onTheHomePage.iPressButton_showEmployee();
		});
		opaTest("Should see the Show Employee page of the app and should able to navigate back to the home page", function (Given, When, Then) {

			// Assertions
			Then.onShowEmpPage.iShouldSeeTheShowEmpPage();

			// Actions
			When.onShowEmpPage.iPressPage_showEmp();

		});
		opaTest("Should see the Home page of the app and should able to navigate to Create employee page", function (Given, When, Then) {

			// Assertions
			Then.onTheHomePage.iShouldSeeHomePage();

			// Actions
			When.onTheHomePage.iPressButton_createEmployee();

		});
		opaTest("Should see the Create Employee page of the app and should able to navigate back to the home page", function (Given, When, Then) {

			// Assertions
			Then.onTheCreateEmpPage.iShouldSeeCreateEmpPage();

			// Actions
			When.onTheCreateEmpPage.iPressPage_createEmp();

		});
		opaTest("Should see the Home page of the app and should able to navigate to Update employee page", function (Given, When, Then) {

			// Assertions
			Then.onTheHomePage.iShouldSeeHomePage();

			// Actions
			When.onTheHomePage.iPressButton_updateEmployee();

		});
		opaTest("Should see the Update Employee page of the app and should able to navigate back to the home page", function (Given, When, Then) {

			// Assertions
			Then.onTheUpdateEmpPage.iShouldSeeUpdateEmpPage();

			// Actions
			When.onTheUpdateEmpPage.iPressPage_updateEmp();

		});
		opaTest("Should see the Home page of the app and should able to navigate to Delete employee page", function (Given, When, Then) {

			// Assertions
			Then.onTheHomePage.iShouldSeeHomePage();

			// Actions
			When.onTheHomePage.iPressButton_deleteEmployee();

		});
		opaTest("Should see the Delete Employee page of the app and should able to navigate back to the home page", function (Given, When, Then) {

			// Assertions
			Then.onTheDeleteEmpPage.iShouldSeeDeleteEmpPage();

			// Actions
			When.onTheDeleteEmpPage.iPressPage_deleteEmp();

		});
		opaTest("Should see the Home page of the app ", function (Given, When, Then) {

			// Assertions
			Then.onTheHomePage.iShouldSeeHomePage();

			//Cleanup
			Then.iTeardownMyApp();

		});
	});