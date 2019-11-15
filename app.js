const csv = require('csv-parser');
const fs = require('fs');



let leer=fs.createReadStream('datos.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
  
  


  module.exports = {
    leer
};

