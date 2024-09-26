require('dotenv').config();
var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert(
    {
      "type": "service_account",
      "project_id": "gfg-hackathon-42b93",
      "private_key_id": "cb349f2a242703beaef55d65b0e4c6cfb57286da",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC80pl3GxYVQLRu\nL2saPokbiiXVn2F8g6q/JQ8mT6TJutav9N+xqUePCkDhl51/1Ld0zexaSri9PGYP\nxtnNPYnzmUAYobB9AmIC6ScQerqnAGTfxrFzukw/7I4eUvuiUTKUWLYZDGty0aXZ\noEQASIectvn07NCqcXTZMBHW/TTRfiPuEvyLW0DxKcFV1WA9qxMq9LYKLEpA1IAa\nEW5WgRVc/me1YNECX2orqPaxKGEjs/fBC1ofZ9c86CD1p8SWuTPBuccoRVUxl+3U\nVQ2DXS7WHdS2iCXwYFf0jp3o7cbMQb/5BcO7KDKGlgDKS88mRg6W9Ofev9ZgZYzC\nu5+5w03PAgMBAAECggEADRjg7JvXXOM5E+KvUvAYtVO2xIOJBCIwR/cVGIfLtIzR\nWWRRCjl/E8ZKGJvAoMSrcpGm0RIZXR7nlJteMVgRNCSVupLa80DYDyWgjQpGQ7eW\nR6NR9oBq/sAbKrIZopLWDee9WC1xXB+u/+v+HrSCzsIuW+iVOYCKWPCpooTu35At\nNrrcld3kveFOm/sWx7bKHEhZosavLAL+0UlskwmcwsRhkRf0riZ0X6xzIdoMHc7l\nEAyhkSZ8IbAkL2fEuNpiK7tjy1JtZ7h1hK+8CTVJiK52q3X2zDKHNkcKRORpCJ8/\nIvJWbqGNaqD4wDuMV/0zaP/rXrHlWh92ML+EwUML+QKBgQDdTXLwCRjRqEPY69cO\nx4hJLgNDr0VJz3TmlO64TFZJ65cJbis0RVm01v/g0yu+BcUYOg85TZv3wW0EM6fU\nMN1HswBMLY2i2SiQ3aKl0oR7h+OKvoZyOjrw48/5SGWUVyVHxdgwFTXJoJ6iGa2t\nR0Q7S1b5dhcVBz6M7eqRmXJWuwKBgQDabXx8ECMLOXb+oZr0+sidam3DOoZ6wVUU\nCTGQUOOiXhF3zrh90KhaN0YMWva/k2VS2pA58tnNBgk3HdeQlMOdaWgEqj2+UjPv\nxUKOHNSgXNvRAcI1V1kwpD5wDfXTUNykxL//soR3sBhn5EPQgnvIYaEKp+6M4irv\nYBRKVC7V/QKBgEubCCeFlBsct4FGoYSFGsSVmbvoB23+GFwmiaAhRGGgwUsRfmUv\nRESKJ4Ux4AHdisaKH2VeZGiyhoIm+7F8uDykpPdhoMAAHOHRNp4cW/KwLEbcbKZd\nyoE983GhEEMruqrYptFWjbfCzi9nQnSuolr3lFFJzPz8KpyPM9JmcC+9AoGAFnho\n9AJc+Iyi1zMc09LwzHDkdc8RgpNdA0Cm3qfToyJ2PZMAm8DZcN560E6TT8YECG//\nolZ/XX4feJITWQZU0V7EmqZAz9F5ElOCs0f3/79NxcSejAo+XKio27Iz9dc9u52Z\n+t4MjpuJBzcOWubxgP26KXR5L/kcXZ/Oto7OeqkCgYEAz2E05GFFZVssMdNzN3z5\nsK9mALb9R7nczySThOy9fSqO3wrLqMApAxzg7NqRJeGPcw3euwEgQqLWZ/8UsYAZ\nGiA892gGEfg2t9jbWwTFIZhyIABsXH+CJMEI5XH3ZOVmQmrx2bNS1KjzLiHlXpfs\nXE4sAWgMR05kn1bDGVYz1Fk=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-k20qh@gfg-hackathon-42b93.iam.gserviceaccount.com",
      "client_id": "102031148562514089046",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k20qh%40gfg-hackathon-42b93.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }),
});

const db = admin.firestore();
module.exports = db;
console.log(db);