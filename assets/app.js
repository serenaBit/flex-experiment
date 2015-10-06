var app = angular.module('bitmamaCorsoAngular',['bitmamamDataProvider']); 
//tutti imoduli iniziano con ng bitmamaData.. è dipendende dal primo

app.controller ('mainCrtl', function ($scope, adressBook) {
	adressBook.get()
		.then(function (adressbook){
			$scope.adressbook = adressbook;
		}, function (error) {
			$scope.error = 'cretino';
		});
});