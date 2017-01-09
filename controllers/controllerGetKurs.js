app.controller('getKursController', function ($scope, API) {
    API.getKurs().then(function (kurs) {
        $scope.kurses = kurs;
        console.log(kurs)
    });
});