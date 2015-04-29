'use strict';

const fs = require('fs');
const ncp = require('ncp');
const path = require('path');
const replaceStream = require('replacestream');

function installTemplateAsync(directory, projectName) {
  var templatePath = path.join(__dirname, 'Template');
  return ncpAsync(templatePath, directory, {
    rename: function(dest) {
      return dest.replace('Template', projectName, 'g');
    },
    transform: function(read, write) {
      read.pipe(replaceStream('Template', projectName)).pipe(write);
    },
  });
}

function ncpAsync(source, destination, options) {
  return new Promise(function(resolve, reject) {
    ncp(source, destination, options, function(error) {
      if (error == null) {
        resolve();
      } else {
        reject(error[0]);
      }
    })
  });
}

exports.installTemplateAsync = installTemplateAsync;
