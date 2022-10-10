const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use("/spavis", require("./routes/app.routes"));

app.listen(5000, function(){
  console.log("Server Ready!")
});