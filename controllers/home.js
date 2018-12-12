const path = require('path');

const awsUrl = 'http://s3-us-west-2.amazonaws.com/outdoorsy-demo-assets/static';

exports.index = (req, res) => {
  // headers.get('ODC-PARTNER-ID');

  const file = req.query.file || 'footer.html';
  const partnerId = req.headers['ODC-PARTNER-ID'] || '1234-1234-1234';
  const redirectUrl = path.join(awsUrl, partnerId, file);

  res.render('home', {
    title: redirectUrl,
    redirectUrl
  });
};

exports.redirect = (req, res) => {
  // headers.get('ODC-PARTNER-ID');

  const file = req.query.file || 'footer.html';
  const partnerId = req.headers['ODC-PARTNER-ID'] || '1234-1234-9999';
  const redirectUrl = path.join(awsUrl, partnerId, file);

  res.redirect(redirectUrl);
};
