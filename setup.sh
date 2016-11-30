#!/bin/bash
npm install
###
# run to set up platforms with cordova
###
CORDOVA="node_modules/cordova/bin/cordova"

node_modules/grunt/bin/grunt

rm -R platforms
rm -R plugins

#if $CORDOVA platform add android 2>/dev/null; then
#   echo Android add finished
#else
#   $CORDOVA platform update android
#fi
#
#if ls /Applications > /dev/null 2>&1; then
#   if $CORDOVA platform add ios > /dev/null 2>&1; then
#       echo expression evaluated as true
#    else
#       $CORDOVA platform update ios
#    fi
#else
#   echo Mac OS X not detected, install only Android
#fi

$CORDOVA serve
#$CORDOVA build android