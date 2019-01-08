app.directive('calculator', function () {
    return {
        restrict: 'E',        
        controller: 'CalculatorController',
        controllerAs: 'ctrl',
        templateUrl: 'CalcTemplate.html'
        
    }
});
