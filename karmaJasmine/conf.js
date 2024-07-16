exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['--disable-gpu']
      },
      'chromeDriver': 'C:/Users/Rushi/Nodejs/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_114.0.5735.90' // Replace with your ChromeDriver path
    }
  };
  