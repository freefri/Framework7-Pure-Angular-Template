var NgCvFile = {};
NgCvFile.$cordovaFileError = {
    1: 'NOT_FOUND_ERR',
    2: 'SECURITY_ERR',
    3: 'ABORT_ERR',
    4: 'NOT_READABLE_ERR',
    5: 'ENCODING_ERR',
    6: 'NO_MODIFICATION_ALLOWED_ERR',
    7: 'INVALID_STATE_ERR',
    8: 'SYNTAX_ERR',
    9: 'INVALID_MODIFICATION_ERR',
    10: 'QUOTA_EXCEEDED_ERR',
    11: 'TYPE_MISMATCH_ERR',
    12: 'PATH_EXISTS_ERR'
};
NgCvFile.hash = function (string) {
    var md = forge.md.sha256.create();
    md.update(string);
    return md.digest().toHex();
};

NgCvFile.writeFile = function (path, fileName, text, replaceBool) {
    var injector = angular.injector(['ng']),
        $q = injector.get('$q');
    var q = $q.defer();

    var $cordovaFileError = NgCvFile.$cordovaFileError;

    if ((/^\//.test(fileName))) {
        q.reject('file-name cannot start with \/');
    }

    replaceBool = replaceBool ? false : true;

    var options = {
        create: true,
        exclusive: replaceBool
    };

    try {
        window.resolveLocalFileSystemURL(path, function (fileSystem) {
            fileSystem.getFile(fileName, options, function (fileEntry) {
                fileEntry.createWriter(function (writer) {
                    if (options.append === true) {
                        writer.seek(writer.length);
                    }

                    if (options.truncate) {
                        writer.truncate(options.truncate);
                    }

                    writer.onwriteend = function (evt) {
                        if (this.error) {
                            q.reject(this.error);
                        } else {
                            if (evt && evt.target && evt.target.localURL) {
                                q.resolve(evt);
                            } else {
                                console.log('Error writeend evt: '+JSON.stringify(evt));
                                q.reject(evt);
                            }
                        }
                    };

                    writer.write(text);

                    q.promise.abort = function () {
                        writer.abort();
                    };
                });
            }, function (error) {
                console.error('xx error '+$cordovaFileError[error.code]+ error.toString());
                error.message = $cordovaFileError[error.code];
                q.reject(error);
            });
        }, function (err) {
            console.error('xx err '+$cordovaFileError[err.code]+ err.toString());
            err.message = $cordovaFileError[err.code];
            q.reject(err);
        });
    } catch (e) {
        console.error('xx e '+$cordovaFileError[e.code]+ e.toString());
        e.message = $cordovaFileError[e.code];
        q.reject(e);
    }

    return q.promise;
};

NgCvFile.readAsText = function (path, file) {
    var injector = angular.injector(['ng']),
        $q = injector.get('$q');
    var q = $q.defer();

    if ((/^\//.test(file))) {
        q.reject('file-name cannot start with \/');
    }

    var $cordovaFileError = NgCvFile.$cordovaFileError;

    try {
        window.resolveLocalFileSystemURL(path, function (fileSystem) {
            fileSystem.getFile(file, {create: false}, function (fileEntry) {
                fileEntry.file(function (fileData) {
                    var reader = new FileReader();

                    reader.onloadend = function (evt) {
                        if (evt.target.result !== undefined || evt.target.result !== null) {
                            q.resolve(evt.target.result);
                        } else if (evt.target.error !== undefined || evt.target.error !== null) {
                            q.reject(evt.target.error);
                        } else {
                            q.reject({code: null, message: 'READER_ONLOADEND_ERR'});
                        }
                    };

                    reader.readAsText(fileData);
                });
            }, function (error) {
                console.error('xxx error '+$cordovaFileError[error.code]+ error.toString());
                error.message = $cordovaFileError[error.code];
                q.reject(error);
            });
        }, function (err) {
            console.error('xxx err '+$cordovaFileError[err.code]+ err.toString());
            err.message = $cordovaFileError[err.code];
            q.reject(err);
        });
    } catch (e) {
        console.error('xxx e '+$cordovaFileError[e.code]+ e.toString());
        e.message = $cordovaFileError[e.code];
        q.reject(e);
    }

    return q.promise;
};