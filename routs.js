app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/kurs.html',
        controller: 'getKursController'
    })
});