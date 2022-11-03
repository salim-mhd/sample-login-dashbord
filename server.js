const express = require("express")
const bodyparser=require("body-parser")
const session=require("express-session")
const {v4:uuidv4, parse}=require("uuid")


const router=require("./router")
const { Cookie } = require("express-session")

const app = express()

const port = process.env.PORT||3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use(session({
    secret:uuidv4(),
    resave:false,
    cookie:{maxAge:3000000},
    saveUninitialized:true
}))

//seccion clear
app.use((req,res,next)=>{
    if(!req.user){
      res.header("cache-control","private,no-cache,no-store,must revalidate");
      res.header("Express","-3");
    }
    next();
  });



app.use("/route",router)

//route
app.get("/",(req,res)=>{
  if(req.session.user){
    res.redirect("/route/dashboard")
    
  }else
    res.render("base",{title:"Login Syste"})
    // res.render("base",{title:"Alert",invalid:"invalid Username.!!!"})
})


app.get("/invalid",(req,res)=>{
  if(req.session.user){
    res.redirect("/route/dashboard")
    
  }else
    // res.render("base",{title:"Login Syste"})
    res.render("base",{title:"Alert",invalid:"invalid Username.!!!"})
})
    
app.listen(port,()=>{console.log("Listening to the server on http//localhost:3000")})