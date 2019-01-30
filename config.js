
  env = process.env.NODE_ENV || 'test';

var config = {
  development: {
    db: 'mongodb://mongo-server-practica1:27017/practica1',
    port: process.env.PORT || 3000,
    SECRET_TOKEN: "claveseguratokens"
  },
  test: {
    //    baseUrl: "/nodeArticulos/",
    db: 'mongodb://localhost:27017/practica1',
    port: process.env.PORT || 3000,
    SECRET_TOKEN: "claveinseguratokens"
  },
  production: {
    db: 'mongodb://mongo-server-practica1:27017/practica1',
    port: process.env.PORT || 3000,
    SECRET_TOKEN: "claveseguratokens"
  }
};

module.exports = config[env];
