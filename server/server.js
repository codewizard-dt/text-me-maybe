const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const publicPath = path.join(process.cwd(), "client", dist);

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () =>
  console.log(`Now listening on port: http://localhost:${PORT} `)
);
