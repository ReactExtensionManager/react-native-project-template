const parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2), {
  string: ['name'],
  boolean: ['verbose'],
  alias: {
    name: 'n',
    verbose: 'v',
  },
});

if (argv._.length !== 1) {
  console.log('Usage: %s --name=<name> <directory>', process.argv[1]);
  process.exit(1);
}

const installTemplateAsync = require('./index').installTemplateAsync;

var destinationDirectory = argv._[0];
var projectName = argv.name || 'App';
installTemplateAsync(destinationDirectory, projectName).then(function() {
  console.log('Created %s at %s', projectName, destinationDirectory);
}, function(error) {
  if (argv.verbose) {
    console.error(error.stack);
  } else {
    console.error('Error creating %s project: %s', projectName, error.message);
  }
  process.exit(1);
});
