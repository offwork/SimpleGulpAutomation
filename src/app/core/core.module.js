/**
 * Created by keremozdemir on 16/05/2017.
 */
(function () {
    'use strict';
    angular.module('app.core', ['app.main', 'app.dashboard', 'app.profile', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('main', {
                    url: '/',
                    views: {
                        '@': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl',
                            controllerAs: 'vm'
                        },
                        'topbar@main': {templateUrl: 'app/main/partials/topbar.html'},
                        'aside@main': {templateUrl: 'app/main/partials/aside.html'},
                        'content@main': {templateUrl: 'app/main/partials/content.html'}
                    }
                })
                .state('main.dashboard', {
                    url: 'dashboard',
                    views: {
                        '': {
                            templateUrl: 'app/dashboard/dashboard.html',
                            controllerAs: 'DashboardCtrl as vm'
                        }
                    }
                })
                .state('main.profile', {
                    url: 'profile',
                    views: {
                        '': {
                            templateUrl: 'app/profile/profile.html',
                            controllerAs: 'ProfileCtrl as vm'
                        }
                    }
                });
        });
})();
