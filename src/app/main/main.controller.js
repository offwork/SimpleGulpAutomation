/**
 * Created by keremozdemir on 16/05/2017.
 */
(function () {
    'use strict';
    angular.module('app.main')
        .controller('MainCtrl', MainCtrl);
    function MainCtrl() {
        var vm = this;
        vm.toggleShow = false;
        vm.mainText = 'GitHub';
    }
})();
