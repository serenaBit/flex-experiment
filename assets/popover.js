angular.module('bitmamaCorsoAngular')
	.directive('popover', function() {
		return {
			restrict: 'A',
			templateUrl: ('assets/popover-tpl.html'),
			scope: {
				text: '@text',
				tooltip: '=popover'
			}
		};
	});


//@ copia il valore
//= crea un binding
//^ per riferimento, si usa per passare funzioni