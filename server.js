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

//Magic 8 Ball

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get(`/magic/:question`, (request, response) => {
    var answer = magicBall[Math.floor(Math.random()*magicBall.length)]
    response.send(`<h1>${request.params.question}? <br> ${answer}</h1>`)

})



app.listen(3000, () => {
    console.log(`listening to port 3000`);
});
