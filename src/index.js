 
const express = require("express"); 

const app = express(); 
const routes = require("./routers/routers");
const PORT = process.env.PORT || 3000; 



app.use("/", routes);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});