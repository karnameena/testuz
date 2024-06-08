const express = require("express"); 
const app = express();






 app.get("/", (req, res) => { res.send('<h1 align="center">Karna Server Activated GK</h1>'); }); 
 const PORT = process.env.PORT || 5000; 
 app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
