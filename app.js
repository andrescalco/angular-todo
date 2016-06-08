var app = angular.module('todo',[]);

app.controller('formCtrl', function($scope){

	$scope.formModel = {};

	$scope.items = [];

	if ( localStorage.getItem('dados') ) {
		var data = localStorage.getItem('dados');
		data = JSON.parse(data);
		$scope.items = data;
	}

	$scope.saveItem = function( data ) {
		var values = {};
			values.titulo = data.titulo;
			values.descricao = data.descricao;
		// Salva os itens
		$scope.items.push( values );
		// Reseta o formModel
		$scope.formModel = {};
	}

	$scope.removeItem = function(index) {
		$scope.items.splice(index,1);
	}

	$scope.saveStorage = function(data) {
		var values = JSON.stringify(data);
		localStorage.setItem('dados', values);
	}

	// Fica vendo as mudanças no array de itens
	$scope.$watchCollection('items',function(newVal, oldVal){
		$scope.saveStorage( newVal );
	});

});