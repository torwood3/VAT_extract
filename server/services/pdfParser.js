const pdfText = require('pdf-text');
const fs = require('fs');

exports.extractVatNumbersFromFile = (file) => {
  return new Promise((resolve, reject) => {
      fs.stat(file, function(err, stat) {
          if(err === null) { //file exist
              pdfText(file , (err, chunks) => {
                  console.log("in pdfText");
                  if (err) {
                      console.log(err);
                      return reject(new Error(err));
                  }

                  const listOfVAT = chunks.filter(el => {
                      el.replace(/\s/g, '');
                      return /[a-zA-Z]{2}[a-zA-Z0-9]{1}[0-9]{6,11}[a-zA-Z0-9]{0,3}/.test(el);
                  });

                  if (listOfVAT.length === 0) {
                      return reject(new Error('No VAT found!'));
                  } else {
                      return resolve(listOfVAT);
                  }
              });
          } else if(err.code == 'ENOENT') {
              console.log("File not exist !")
              return reject(new Error("File not exist!"));
          } else {
              return reject(new Error(err));
          }
      });
  });
};


