const path = require('path');

const awsUrl = 'http://s3-us-west-2.amazonaws.com/outdoorsy-demo-assets/static';

exports.index = (req, res) => {
  // headers.get('ODC-PARTNER-ID');

  const { file } = req.query;
  const partnerId = req.headers['ODC-PARTNER-ID'];
  const redirectUrl = path(awsUrl, partnerId, file);

  res.redirect(redirectUrl);
};
