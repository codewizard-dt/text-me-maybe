const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, '../client/dist/index.html')
    console.log("HEYYYY", indexPath)
    return res.sendFile(indexPath)
  });
