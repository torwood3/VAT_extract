const pdfParserService = require('../services/pdfParser');

exports.extractVatNumbers = (req, res, next) => {
  console.log(req.files)
  const file = req.files ? req.files.invoice : null;

  if (!file) {
    return res.status(400).json({ err: 'No file found' });
  }
  if (file.mimetype !== 'application/pdf') {
    return res.status(400).json({ err: 'Invalid file type'});
  }
  
  return pdfParserService
    .extractVatNumbersFromFile(file)
    .then(vatNumbers => res.json(vatNumbers))
    .catch(next);
};
