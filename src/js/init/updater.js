angular.element(document).ready(function() {
    var CFG = {
        app: {
            checkUrl: 'app.json',
            version: '1.0.0'
        }
    };
    if (window.MyApp && MyApp.conf && MyApp.conf.checkUrl && MyApp.conf.version) {
        CFG.app.checkUrl = MyApp.conf.checkUrl;
        CFG.app.version = MyApp.conf.version;
    }

    var injector = angular.injector(['ng']),
        $http = injector.get('$http');

    var pathJsFile;
    var nameJsFile = 'app.js';

    function addScript(src) {
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.src = src;
        console.log('Using JS file ' + src);
        angular.element(document).find('body').append(js);
    }

    function checkUpdater() {
        var lastVersionAndHash = CFG.app.checkUrl;

        $http.get(lastVersionAndHash, {})
            .then(function (res) {
                var newVersion = res.data.app.version;

                if (newVersion !== CFG.app.version) {
                    var newJsFile = res.data.app.downloadUrl + 'app.js?v=' + newVersion;
                    localStorage.setItem('hashJsFile', res.data.app.hash);

                    $http.get(newJsFile, {})
                        .then(function (res) {

                            console.log('JsFile downloaded ' + newVersion + ' ' + NgCvFile.hash(res.data));

                            var writeFile = function(fileData) {
                                NgCvFile.writeFile(pathJsFile, nameJsFile, fileData, true)
                                    .then(loadJsFile, function (error) {
                                        console.error('error writing file '+pathJsFile+nameJsFile);
                                    });
                            };

                            onDeviceReady(function () {
                                writeFile(res.data);
                            });
                        });
                } else {
                    console.log('local loadJsFile');
                    onDeviceReady(function () {
                        loadJsFile();
                    });
                }
            });

        function loadJsFile() {
            NgCvFile.readAsText(pathJsFile, nameJsFile)
                .then(function (res) {
                    var fileHash = NgCvFile.hash(res);
                    var storedHash = localStorage.getItem('hashJsFile');

                    var forcePassHash = false;
                    //forcePassHash = true;// TODO dont commit
                    if (forcePassHash || storedHash == fileHash) {
                        addScript(pathJsFile + nameJsFile);
                    } else {
                        console.error('Different fileHash and storedHash');
                        console.error('hashNew '+fileHash);
                        console.error('hashOld '+storedHash);
                        checkUpdater();
                    }
                });
        }

        function onDeviceReady(fn) {
            if (!window.resolveLocalFileSystemURL || !cordova.file.dataDirectory) {
                console.log('Waiting deviceready event');
                document.addEventListener('deviceready', function() {
                    console.log('Gotcha! device ready');
                    pathJsFile = cordova.file.dataDirectory;
                    //pathJsFile = cordova.file.externalRootDirectory;
                    fn();
                });
            } else {
                console.log('Ready very fast');
                pathJsFile = cordova.file.dataDirectory;
                fn();
            }
        }
    }

    var url = window.location.toString();
    var isTestingBrowser = url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
    if (isTestingBrowser) {
        addScript('dist/app.js');
    } else {
        checkUpdater();
    }
});
