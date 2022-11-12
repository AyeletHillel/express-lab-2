const express = require("express")
require("dotenv").config()
const app = express();

//Greetings
app.get(`/greeting`, (request, response) => {
    response.send("Hey stranger")
})

app.get(`/greeting/:name`, (request, response) => {
    response.send(`Hi ${request.params.name}! So good to see you!`)
})

//Tip Calculator

app.get(`/tip/:total/:tipPercentage`, (request, response) => {
    const percentage = parseInt(request.params.tipPercentage)
    const total = parseInt(request.params.total)
    response.send(`The tip is ${(percentage/100)*total}`)
})


app.listen(3000, () => {
    console.log(`listening to port 3000`);
});
