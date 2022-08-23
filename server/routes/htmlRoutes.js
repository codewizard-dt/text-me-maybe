const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) => {
    let indexPath = path.resolve(__dirname, '../client/dist/index.html')
    console.log("HEYYYY", indexPath)
    return res.sendFile(indexPath)
  });
