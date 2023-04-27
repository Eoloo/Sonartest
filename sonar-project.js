const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login': 'admin',
            'sonar.password': 'Nairobi@254',
            'sonar.sources':  '',
            'sonar.tests':  '',
            'sonar.inclusions'  :  '**',
            // Entry point of your code
            'sonar.test.inclusions':  '/**/*.spec.js/**/*.spec.jsx/**/*.test.js/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});