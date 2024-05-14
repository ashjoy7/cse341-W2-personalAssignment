const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Temple API'
  },
  host: 'cse341-w2-personalassignment-1.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['.routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
