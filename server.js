var express = require('express');
const app = express();
app.use(express.static('./dist/myPortfolio'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/myPortfolio/'}
  );
  });

  app.listen(process.env.PORT || 8080);