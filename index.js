'use strict';

const fs = require('fs');
const ncp = require('ncp');
const path = require('path');
const replaceStream = require('replacestream');

function createProjectAsync(directory, projectName) {
  let projectDirectory = path.join(directory, projectName);
  return mkdirAsync(projectDirectory).then(function() {
    let templatePath = path.join(__dirname, 'Template');
    return ncpAsync(templatePath, projectDirectory, {
      rename: function(dest) {
        return dest.replace('Template', projectName, 'g');
      },
      transform: function(read, write) {
        read.pipe(replaceStream('Template', projectName)).pipe(write);
      },
    });
  });
}

function mkdirAsync(path, mode) {
  return new Promise(function(resolve, reject) {
    fs.mkdir(path, mode, function(error) {
      if (error == null) {
        resolve();
      } else {
        reject(error);
      }
    });
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

exports.createProjectAsync = createProjectAsync;
