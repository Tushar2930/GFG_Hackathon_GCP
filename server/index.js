const express=require('express');
const bodyParser=require("body-parser");
const cors=require("cors");
const firebase_admin=require("firebase-admin");
const app=express();
const path=require('path');


// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use(express.json());

app.use('/',require('./routes'));
 
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT} `);
})






server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/agrokart/client;

    index index.html index.htm index.nginx-debian.html;
    server_name_;

    location / {
    proxy_pass http://localhost:8000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}