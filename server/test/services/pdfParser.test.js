const pdfParserService = require('../../services/pdfParser');
const expect = require('chai').expect;

describe('pdfParser', function () {
  describe('#extractVatNumbersFromFile', () => {
      it('should return an error "File not exist"', (done) => {
          const file = __dirname + "/dzdzqqzdqz.pdf";
          pdfParserService
              .extractVatNumbersFromFile(file)
              .catch(err => {
                  expect(err.message)
                      .to.equal('File not exist!');
                  done();
              });
      });
    it('should return an none empty array', (done) => {
        const file = __dirname + "/../../../../invoices/417zngjx_Z_6699809.pdf";
        console.log(file)
        pdfParserService
            .extractVatNumbersFromFile(file)
            .then(vatNumbers =>{
                expect(vatNumbers).to.be.an('array').that.is.not.empty;
                done();
            });

    });
    it('should return an error', (done) => {
      const file = __dirname + "/../../../../invoices/2017_02_13-workable.pdf";
      pdfParserService
          .extractVatNumbersFromFile(file)
          .catch(err => {
            expect(err.message)
                .to.equal("No VAT found!");
            done();
          });
      });
  });
});
