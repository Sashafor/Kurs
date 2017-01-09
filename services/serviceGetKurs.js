app.service('API', function ($http, $q) {
    return {
        getKurs: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
            }).then(function (data) {
                var kurs = data.data;
                d.resolve(kurs)
            });
            return d.promise
        }
    }
});

