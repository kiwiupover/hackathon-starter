const path = require('path');

const awsUrl = 's3-us-west-2.amazonaws.com/outdoorsy-demo-assets/static';

exports.index = (req, res) => {
  // headers.get('ODC-PARTNER-ID');

  const file = req.query.file || 'footer.html';
  const partnerId = req.headers['odc-partner-id'] || '1234-1234-1234';
  const urlPath = path.join(awsUrl, partnerId, file);
  const redirectUrl = `http://${urlPath}`;

  console.log('req.headers', req.headers);

  res.render('home', {
    title: redirectUrl,
    redirectUrl
  });
};

exports.redirect = (req, res) => {
  const file = req.query.file || 'footer.html';
  const partnerId = req.headers['odc-partner-id'] || '1234-1234-9999';
  const urlPath = path.join(awsUrl, partnerId, file);
  const redirectUrl = `http://${urlPath}`;

  res.redirect(redirectUrl);
};
