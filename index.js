const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use("/spavis", require("./routes/app.routes"));

const port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log("Server Ready!")
});