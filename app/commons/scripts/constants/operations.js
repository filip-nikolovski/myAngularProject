'use strict';

/**
 * @ngdoc object
 * @name koseiDartUiApp.constant:OP_TYPE
 * @description
 * This object provides various operation types that can be performed against Entities which the help of services
 * available at the Kosei backend.
 * # OP_TYPE
 * Constant of the koseiDartUiApp
 */

angular.module('koseiDartUiApp').constant('OP_TYPE', {

	create: 'POST',
	read: 'GET',
	update: 'PUT',
	delete: 'DELETE'
});
