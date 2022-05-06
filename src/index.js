const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const route = require("./route/route");
const {default:mongoose} = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

mongoose.connect("mongodb+srv://SatyamRandawa:Loveyam@cluster0.jpuyq.mongodb.net/project2?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("Mongodb is connected"))
.catch( err => console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 3000, (err) => {
    console.log("Connected to PORT 3000")
})
