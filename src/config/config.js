var config = {
    development: {
      // mysql connection settings
      database: {
        host: 'localhost',
        user: 'root',
        password: '',
        dbName: 'airflyDB'
      },
      // server details
      server: {
        host: 'localhost',
        port: '3010'
      },
      // sendMail settings
      smtp: {
        host: 'smtp.office365.com',
        port: 587,
        auth: {
          user: 'ruben@ontechnology.com.mx',
          pass: '#Rubs2506'
        }
      },
    },
    production: {
      // mysql connection settings
      database: {
        host: '',
        user: '',
        password: '',
        dbName: ''
      },
      // server details
      server: {
        host: '',
        port: ''
      },
      // sendMail settings
      smtp: {
        host: '',
        port: 0,
        auth: {
          user: '',
          pass: ''
        }
      },
     
    }
  };
  module.exports = config;
  