#!/usr/bin/env node
var fs = require('fs');
var forge = require('node-forge');

fs.readFile('www/dist/app.js', 'utf8', function (err, data) {
    var hash = function (string) {
        var md = forge.md.sha256.create();
        md.update(string);
        return md.digest().toHex();
    };

    if (err) {
        return console.error(err);
    }
    var fileHash = hash(data);

    var jsonFile = 'www/app.json';
    fs.readFile(jsonFile, 'utf8', function (err, data) {
        if (err) {
            return console.error(jsonFile + ' readFile: ' + err);
        }
        var dataObj = JSON.parse(data);
        dataObj.app.hash = fileHash;
        var dataToSave = JSON.stringify(dataObj, null, '  ');

        fs.writeFile(jsonFile, dataToSave, function(err) {
            if (err) {
                return console.error(jsonFile + ' writeFile: ' + err);
            }

            console.log(dataToSave);
        });
    });
});
