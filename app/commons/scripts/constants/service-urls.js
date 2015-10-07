'use strict';


angular.module('myProjectApp').constant('SERVICE_URLS', {

	apiUrl: 'http://localhost:8080',
	loginService: '/api/v1/login',
	logoutService: '/api/v1/logout',
	customersService: '/api/v1/customers'


});