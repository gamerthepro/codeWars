// Configure package json for a node application

// Instructions

// Nodejs package.json
// Node applications require a file named package.json on the root of the project.

// You can create this file manually or have the command npm init to assist you in this process.

// The fields name and version are mandatory. But there a lot of other fields that you can include:

// for a documentation on all fields see https://docs.npmjs.com/files/package.json

// name: must be lowercase and url friendly
// version: must include major, minor and patch version
// description: can contain a description of your project
// main: the entry point of your application (when running node without args)
// scripts: a set of commands that can be executed with npm run <cmd>
// keywords: an array of strings containing keywords that describe your application
// bugs: an object with the url and/or email to contact about bugs
// license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
// author: the name, email and url in a single string or an object with these three properties
// contributors: an array of items that follow the same rules as author
// repository: an object with type (e.g. git) and url (e.g. git url)
// private: true|false; if true the repository field can be omitted without any warnings
// preferGlobal: true|false; if your application is preferred to be installed globally
// engines: object listing engines and versions used by your application
// os: array of strings with supported OS
// cpu: array of strings with supported CPU
// dependencies: run-time dependencies of your application, things that will run in production
// devDependencies: compile-time dependencies of your application, things that should not be in production
// The dependencies is an object with the name of modules as keys and the values are the versions. For example to require babel in your application you would have these entries:

// {
//   "babel-core": "^6.0.0",
//   "babel-polyfill": "^6.0.0",
//   "babel-preset-es2015": "^6.0.0",
//   "babel-preset-stage-0": "^6.0.0"
// }
// Your task
// Create a package.json configuration and assign it to the configuration constant so it can be tested.

// To pass the kata you need only the least that a real package file would require.


	



// Sample Tests

const {assert,config} = require("chai")
config.truncateThreshold = 0



describe('package.json', () => {
  const isObjStringDictionary = (obj) => {
    if (typeof obj !== 'object') return false;
    if (obj instanceof Array) return false;

    const keys = Object.keys(obj);
    for (let key of keys) {
      if (typeof obj[key] !== 'string')
        return false;
    }
    
    return true;
  };
  const warn = msg => console.log(`warning: ${msg}`);

  it('check for mandatory fields', () => {
    assert.isOk(!!configuration.name, 'Missing required field: name');
    assert.isOk(!!configuration.version, 'Missing required field: version');
    
    if (!configuration.description)
      warn('Missing recommended field: description');
    if (!configuration.keywords)
      warn('Missing recommended field: keywords');
    if (!configuration.bugs)
      warn('Missing recommended field: bugs');
    if (!configuration.license)
      warn('Missing recommended field: license');
    if (!configuration.author)
      warn('Missing recommended field: author');
    if (!configuration.contributors)
      warn('Missing recommended field: contributors');
    if (!configuration.repository && !configuration.private)
      warn('Missing recommended field: repository (or private)');
  });

  it('validating name field', () => {
    assert.deepEqual(typeof configuration.name, 'string', 'name should be a string'); 
    assert.isOk(!/^[._]/.test(configuration.name)
      && /^[\w.~-]+$/.test(configuration.name), 'valid names may have uppercase and lowercase letters, decimal digits, hyphen, period, underscore, and tilde');

    assert.isOk(configuration.name.length < 214, 'name should be shorter than 214 characters');
    
    assert.deepEqual(configuration.name, configuration.name.toLowerCase(), 'only lowercase is allowed');
    
    if (/node/i.test(configuration.name)) {
      warn(`You shouldn't use 'node' in the package name, use engines section instead`);
    }
    if (/js/i.test(configuration.name)) {
      warn(`You shouldn't use 'js' in the package name, use engines section instead`);
    }
    
    console.info(`it is always good to check the npm registry to see if the name isn't already taken`);
  });
  
  it('validating version field', () => {
    assert.isOk(/^\d+[.]\d+[.]\d+[\w-]*$/.test(configuration.version), 'expected format [0-9].[0-9].[0-9] (major.minor.patch) optionally followed by [A-Za-z0-9_-]');
  });
  
  it('validate description if present', () => {
    if (configuration.description)
      assert.deepEqual(typeof configuration.description, 'string', 'description should be a string');
  });

  it('validate main if present', () => {
    if (configuration.main)
      assert.deepEqual(typeof configuration.main, 'string', 'main should be a string');
  });
  
  it('validate keywords if present', () => {
    if (configuration.keywords) {
      assert.deepEqual(typeof configuration.keywords, 'object', 'keywords should be an array');
      assert.isOk(configuration.keywords instanceof Array, 'keywords should be an array');
      
      if (configuration.keywords instanceof Array) {
        configuration.keywords.forEach(kw => assert.deepEqual(typeof kw, 'string', `keyword ${kw} should be a string`));
      }
    }
  });

  it('validate bugs if present', () => {
    if (configuration.bugs) {
      if (typeof configuration.bugs !== 'string')
        assert.isOk(!!(configuration.bugs.url || configuration.bugs.email), 'bugs should contain url and/or email');
      else
        assert.isOk(/^(https?|ftp)/i.test(configuration.bugs), 'if not an object a valid url is expected');
    }
  });

  it('validate license if present', () => {
    if (configuration.license) {
      if (typeof configuration.license === 'string') {
        assert.isOk(/^(ISC|MIT|UNLICENSED|SEE LICENSE IN [\w. -]+)$/.test(configuration.license)
          , `Sorry, license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICENSE IN <filename>".`);
      }
      else {
        assert.isOk(false, 'license field is expected to by a string');
      }
    }
  });
  
  it('validate author if present', () => {
    if (configuration.author) {
      if (typeof configuration.author === 'string') {
        assert.isOk(!!configuration.author.replace(/\s/g, '').length);
      }
      else {
        assert.isOk(!!configuration.author.name, 'name field is mandatory');
        assert.deepEqual(typeof configuration.author.name, 'string', 'name field should be a string');
      }
    }
  });

  it('validate contributors if present', () => {
    if (configuration.contributors) {
      assert.isOk(configuration.contributors instanceof Array, 'contributors should be an array');
      
      if (configuration.contributors instanceof Array) {
        configuration.contributors.forEach(c => {
          assert.deepEqual(typeof c.name, 'string', 'name should be a string');
          
          if (typeof c.name === 'string')
            assert.isOk(!!c.name.replace(/\s/g, '').length, 'name field is mandatory');
        });
      }
    }
  });
  
  it('validate repository if present', () => {
    if (configuration.repository) {
      assert.deepEqual(typeof configuration.repository, 'object');
      
      assert.isOk(!!configuration.repository.type, 'type is mandatory');
      assert.isOk(!!configuration.repository.url, 'url is mandatory');
      
      assert.deepEqual(typeof configuration.repository.type, 'string');
      assert.deepEqual(typeof configuration.repository.url, 'string');
    }
  });
  
  it('validate private if present', () => {
    if (typeof configuration.private !== 'undefined') {
      assert.deepEqual(typeof configuration.private, 'boolean', 'private should be a boolean');
    }
  });
  
  it('validate preferGlobal if present', () => {
    if (typeof configuration.preferGlobal !== 'undefined') {
      assert.deepEqual(typeof configuration.preferGlobal, 'boolean', 'preferGlobal should be a boolean');
    }
  });
  
  it('validate engines if present', () => {
    if (configuration.engines) {
      assert.isOk(isObjStringDictionary(configuration.engines));
    }
  });
  
  it('validate os if present', () => {
    if (configuration.os) {
      assert.isOk(configuration.os instanceof Array, 'OS should be an array');
      
      if (configuration.os instanceof Array) {
        configuration.os.forEach(o => {
          assert.deepEqual(typeof o, 'string');
          
          if (typeof o === 'string')
            assert.isOk(!!o.replace(/\s/g, '').length);
        });
      }
    }
  });
  
  it('validate cpu if present', () => {
    if (configuration.cpu) {
      assert.isOk(configuration.cpu instanceof Array, 'CPU should be an array');
      
      if (configuration.cpu instanceof Array) {
        configuration.cpu.forEach(o => {
          assert.deepEqual(typeof o, 'string');
          
          if (typeof o === 'string')
            assert.isOk(!!o.replace(/\s/g, '').length);
        });
      }
    }
  });
  
  it('validate scripts if present', () => {
    if (configuration.scripts) {
      assert.isOk(isObjStringDictionary(configuration.scripts));
    }
  });
  
  const validateDependency = dp => {
    assert.isOk(isObjStringDictionary(dp));
    
    const keys = Object.keys(dp);
    for (let key of keys) {
      let dependency = dp[key];
      let isValid = false;
      
      if (/^(>=?|<=?|[~^])?\d+[.]\d+[.]\d+[\w-]*$/.test(dependency)) isValid = true;
      else if (/^\d+[.]\d+[.]x$/.test(dependency)) isValid = true;
      else if (/^[*]?$/.test(dependency)) isValid = true;
      else if (/^(http|git)/.test(dependency)) isValid = true;
      else if (/^(\w+\/\w+|\w+)$/.test(dependency)) isValid = true;
      else if (/^([.~]?\/|[.][.]\/)/.test(dependency)) isValid = true;
      else if (/^\d+[.]\d+[.]\d+[\w-]*\s*-\s*\d+[.]\d+[.]\d+[\w-]*$/.test(dependency)) isValid = true;
      
      assert.isOk(isValid, `dependency '${dependency}' is not valid`);
    }
  };
  
  it('validate dependencies if present', () => {
    if (configuration.dependencies) {
      validateDependency(configuration.dependencies);
    }
  });
  
  it('validate devDependencies if present', () => {
    if (configuration.devDependencies) {
      validateDependency(configuration.devDependencies);
    }
  });
});