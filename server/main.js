const express = require('express');
const app = express();
const port = 3000; 
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const users = {
    "fatan@gmail.com": "password1",
}

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    var {email, password} = req.body;
    var userPassword = users[email];
    setTimeout(function(){
    if(userPassword === password){
        return res.status(200).json({"token": generateSecureRandomString(100)})
    }
    
    res.status(401).json({"message": "email atau password anda salah"});
    }, 2000);
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});


function generateSecureRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}