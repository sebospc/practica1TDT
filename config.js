
var env = process.env.NODE_ENV || 'development';
console.log("este es el env: "+env)
var config = {
  development: {
    db: 'mongodb://mongo-server-practica1:27017/practica1',
    port: process.env.PORT || 3000,
    SECRET_TOKEN: "claveseguratokens"
  },
  test: {
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
