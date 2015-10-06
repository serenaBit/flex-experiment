//modulo per comunicare con la rubrica//servizio http per lo scambio dati
angular.module('bitmamamDataProvider', [])
	.service('adressBook', function ($http, $q){
		var _addrBook = null;
		var adressBookService = {
			get: function () {
				var deferred = $q.defer();
				if (!_addrBook || _addrBook.lenght == 0){ //se non è in memoria la chiedo tramite http
					$http.get('assets/data.json')
						.then(function (response){
							_addrBook = response.data;
							deferred.resolve(_addrBook);
						}, function(error){
							deferred.reject(error);
						});
				} else {
					deferred.resolve(_addrBook); //addBook già in cache
				}
				return deferred.promise;
			}
		};

		return adressBookService;
	});