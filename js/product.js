(function () {
    angular.module('products', [])

        .directive('productTabs', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/product-tabs.html',
                controller: function () {
                    this.tab = 1;

                    this.setTab = function (tab) {
                        this.tab = tab;
                    };

                    this.isSet = function (tab) {
                        return (this.tab === tab);
                    };
                },
                controllerAs: 'tab'
            };
        })

        .directive('productGallery', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/product-gallery.html',
                controller: function () {
                    this.current = 0;
                    this.setCurrent = function (imageNumber) {
                    console.log('imageNumber: ' + imageNumber);
                        this.current = imageNumber || 0;
                    };
                },
                controllerAs: 'gallery'
            };
        })
        
        .directive('myDescription', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/my-description.html'
            };
        })

        .directive('productReviews', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/product-reviews.html',
                controller: function () {
                    this.review = {};

                    this.addReview = function (product) {
                        this.review.createdOn = new Date();
                        product.reviews.push(this.review);

                        this.review = {};
                    };
                },
                controllerAs: 'reviewCtrl'
            };
        })

        .directive('productSpecs', function () {
            return {
                restrict: 'A',
                templateUrl: 'views/product-specs.html'
            };
        });
})();

