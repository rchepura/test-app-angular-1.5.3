(function () {
    var app = angular.module('gemStore', ['products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
        
        $http.get('/js/data.json').success(function(data) {
            store.products = data;
        });
        
    }]);
})();