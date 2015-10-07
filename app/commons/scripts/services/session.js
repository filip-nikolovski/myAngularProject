'use strict';

angular.module('myProjectApp').factory('session', ['$cookies', '$cookieStore', function($cookies, $cookieStore){

	var instance = {};

	instance.user = function (){
		if(typeof(Storage) !== 'undefined' && sessionStorage.user){
			instance.usr = angular.formJson(sessionStorage.user)
		}else{
			instance.usr = $cookieStore.get('user');
		}
		return instance.usr;
	}

	instance.create = function (user){
		instance.user = user;
		$cookieStore.put('user', user);
		instance.configureRememberMe(user);
	}


	instance.destroy = function (){
		instance.usr = null;
		var key;
		if(typeof(Storage) !== 'undefined'){
			localStorage.clear();
		}
		for(key in $cookies){
			delete $cookies[key];
		}
	}


	instance.configureRememberMe = function (user){
		if(user.rememberMeToken){
			var rememberMeObj = {};
			rememberMeObj.username = user.username;
			rememberMeObj.rememberMeToken = user.rememberMeToken;
			if(typeof (Storage) !== 'undefined'){
				localStorage.rememberMeObj = angular.toJson(rememberMeObj);
			}else{
				$cookies.rememberMeObj = angular.toJson(rememberMeObj);
			}

		}
	}


	instance.rememberMeObj = function(){
		if(typeof(Storage) !== 'ubdefined' && localStorage.rememberMeObj){
			return angular.fromJson(localStorage.rememberMeObj);
		}else if($cookies.rememberMeObj){
			return angular.formJson($cookies.rememberMeObj);
		}
		return null;
	}

	return instance;
}]);