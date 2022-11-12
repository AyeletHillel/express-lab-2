const express = require("express")
require("dotenv").config()
const app = express();

//Greetings
app.listen(3000, () => {
    console.log(`listening to port 3000`);
});

app.get(`/greeting`, (request, response) => {
    response.send("Hey stranger")
})

app.get(`/greeting/:name`, (request, response) => {
    response.send(`Hi ${request.params.name}! So good to see you!`)
})