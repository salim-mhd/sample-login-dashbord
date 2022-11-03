const { Router, response } = require("express")
var express=require("express")
var router=express.Router()


const credential={
    email:"salim@gmail.com",
    password:"salim1280"
}


//login user
router.post("/login",(req,res)=>{
    
    // let user=req.session.user
    if(req.body.email ==credential.email && req.body.password ==credential.password){
        req.session.user = req.body.email
        res.redirect("/route/dashboard")
        req.session.user=true
        

    }else{
        // res.render("base",{title:"Alert",invalid:"invalid Username.!!!"})
        // res.redirect("/"),{title:"Alert",invalid:"invalid Username.!!!"}
        
        // res.redirect("/login",{title:"Login Syste"})
        res.redirect("/invalid")
        

    }

})



//dashbord
router.get("/dashboard",(req,res)=>{
    // req.session.user=true;

        let products=[
        {
            "imag":"https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-c4a9cdcf0a58353aa5323d397bde7f34.jpg",
            "name":"Bugatti",
            "discription":"Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles. The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born industrial designer Ettore Bugatti.",
            "imlink":"https://www.google.com/search?q=bugatti+image&sa=X&biw=1536&bih=656&sxsrf=ALiCzsbOH7UmXmWfIee2aIUwGVakuKT4GQ:1657725009955&tbm=isch&source=iu&ictx=1&vet=1&fir=l9n-x0eu21r06M%252C1Yx9rAcPDeqjxM%252C_%253BFu0bzlAJXrwClM%252C1Yx9rAcPDeqjxM%252C_%253BQjntljp0UV7FhM%252Chjo6rH2OIaXhvM%252C_%253BmVPbSCgLvcXW1M%252CClkzX6MgySVSAM%252C_%253BAW3N6zJx2aUmUM%252C2dMv7WYp3URMUM%252C_%253BnGnoQJMuhlRgUM%252C112EwKb11w0jZM%252C_%253B2KYk2aH_AZZdFM%252C2dMv7WYp3URMUM%252C_%253BX9re4Q0JLNih6M%252CGUXb0Ju9PFJkeM%252C_%253B00LV72ZRwQqg9M%252C-VBQX-3s5eagBM%252C_%253BOxms3aatmk6qJM%252CILCy8clw51-9bM%252C_%253BJlC0XbTfPF8bjM%252CXS7EYQjnsKkgAM%252C_%253BxS7u5Gc4dz06zM%252C112EwKb11w0jZM%252C_%253BZkBuzk3Ep0LjCM%252CfvlBXBEDyR7muM%252C_&usg=AI4_-kSDYuKfArk7hYBeAZcWRwCUFP1vLQ&ved=2ahUKEwiP6-nykvb4AhV-UPUHHb4VBdwQ9QF6BAgPEAE#imgrc=Fu0bzlAJXrwClM",
            "link":"https://www.bugatti.com/"


        },
        {
            "imag":"https://images.netdirector.co.uk/gforces-auto/image/upload/w_600,h_450,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/1a6b91f2ed54a654469b5946776887d5/fluo_4.png",
            "name":"Lamborghini",
            "discription":"Automobili Lamborghini S.p.A. (Italian pronunciation: [autoˈmɔːbili lamborˈɡiːni]) is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.",
            "imlink":"https://www.google.com/search?q=lamborghini+images&sxsrf=ALiCzsb1PHMRy2t9i3KqDWIEIL4hQSmyRw:1657724717424&tbm=isch&source=iu&ictx=1&vet=1&fir=1b4_tsvSn9e_DM%252CeCU9XdVOV-bG0M%252C_%253BqQCMQJ24gBM56M%252C2mBnkJJLofePTM%252C_%253BK3_IaXzdz4FRSM%252C2mBnkJJLofePTM%252C_%253BtoljGzMWboCJBM%252C2mBnkJJLofePTM%252C_%253BN7ZFz4WDE-_lFM%252C_bAJpt45-SHSDM%252C_%253BodHNm-BU5D5pIM%252CeN5PggTmOWAL2M%252C_%253BZ38UFFju2lLw1M%252CPIqv95aB8df1KM%252C_%253Big_FDKvK2jA_-M%252Cgx-JEY_O_3p7uM%252C_%253BivenQzeuYbx6pM%252CnpxcWHTbqY8ekM%252C_%253BdcbtK7ANMpsbeM%252CUcon4gsHibX1mM%252C_%253BjstwcysB1IIAOM%252CNAhIpnZlYQVqzM%252C_%253BI7U7mJFVNui-kM%252CeN5PggTmOWAL2M%252C_%253B5r9S4XA_2t0fvM%252C2mBnkJJLofePTM%252C_%253B9fa7B5EP29cFKM%252CzYMJCOdcBOsmPM%252C_%253BPh2RhfvYrlb7FM%252CkNrcXpsf7_85ZM%252C_&usg=AI4_-kQLZuDXJu7xte7Kk7nY1ptOhMGZpQ&sa=X&ved=2ahUKEwi4havnkfb4AhVHBYgKHWlhAVgQ9QF6BAgJEAE#imgrc=dcbtK7ANMpsbeM",
            "link":"https://www.lamborghini.com/en-en",

        },
        {
            "imag":"https://startuppakistan.com.pk/wp-content/uploads/2021/12/rolls-royce-black-badge-wraith-by-spofec.jpg",
            "name":"Rolls Royce",
            "discription":"Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom",
            "imlink":"https://www.google.com/search?q=rolls+royce+image&tbm=isch&ved=2ahUKEwiW1aP1kvb4AhV9i9gFHbKVBZQQ2-cCegQIABAA&oq=rolls+image&gs_lcp=CgNpbWcQARgCMgUIABCABDIFCAAQgAQyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOgQIABBDOggIABCABBCxAzoICAAQsQMQgwE6BAgAEAM6CggAELEDEIMBEENQzgtYjD5ghFRoAnAAeACAAV-IAaEGkgEBOZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=V-DOYtbNBf2W4t4PsquWoAk&bih=656&biw=1536#imgrc=J2jKdecMBlENQM&imgdii=dLLxr7IMHCwqPM",
            "link":"https://www.rolls-roycemotorcars.com/en_GB/home.html",

        },
        {
            "imag":"https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Company/Porsche-deliveries-2021/The-all-electric-Porsche-Taycan-saw-an-outstanding-increase-with-41,296-units.jpeg/jcr:content/The%20all-electric%20Porsche%20Taycan%20saw%20an%20outstanding%20increase%20with%2041,296%20units.jpeg",
            "name":"Porsche",
            "discription":"Dr.-Ing. h.c. F. Porsche AG, usually shortened to Porsche (German pronunciation: [ˈpɔʁʃə] (listen); see below), is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany. ",
            "imlink":"",
            "link":"",

        },
        {
            "imag":"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
            "name":"Bentley",
            "discription":"Bentley Motors Limited is a British manufacturer and marketer of luxury cars and SUVs, and a subsidiary of the Volkswagen Group since 1998 and consolidated under VW's premium brand arm Audi since 2022.",
            "imlink":"",
            "link":"",

        },
        {
            "imag":"https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            "name":"Mercedes-Benz",
            "discription":"Mercedes-Benz (German pronunciation: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-] (listen)),[6][7] commonly referred to as Mercedes, is a German luxury and commercial vehicle automotive brand established in 1926.",
            "imlink":"",
            "link":"",

        }, {
            "imag":"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg",
            "name":"Range Rover",
            "discription":"The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. ",
            "imlink":"",
            "link":"",

        }, {
            "imag":"https://images.carandbike.com/car-images/big/volkswagen/virtus/volkswagen-virtus.jpg?v=14",
            "name":"Volkswagen",
            "discription":"Volkswagen (German: [ˈfɔlksˌvaːɡn̩] (listen);[Note 1] shortened to VW [faʊˈveː] (listen)) is a German motor vehicle manufacturer headquartered in Wolfsburg, Lower Saxony, Germany. ",
            "imlink":"",
            "link":"",

        }
       
    ]
    
    if(req.session.user){
        res.render("dashboard",{user:req.session.user,products})
        // req.session.user=true
    }else{
        res.redirect("/")
    }
})
router.get("/",(req,res)=>{
    if(req.session.user){
        // req.session.user=true
        res.redirect("/dashboard")
    }else{
        // res.render("base",{title:"Alert",invalid:"invalid Username.!!!"})
        res.redirect("/")
    }
})

//home page
router.get("/home",(req,res)=>{

    let table=[
        {
               "no":"1",
            "brand":"Bugatti",
            "model":"Y-300",
             "site":"www.Bugatti"
        },
        {
            "no":"2",
         "brand":"Lamborghi",
         "model":"Z-500",
          "site":"www.Lamborghi"
     }
    ]
    
    if(req.session.user){
        
        res.render("home",{table})
    
    }else{
        // res.render("base",{title:"Alert",invalid:"invalid Username.!!!"})
        res.redirect("/")
    }

})

//logout
router.get("/logout",(req,res)=>{
    req.session.user=false
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("Error")
        }else{
            // res.render("base",{title:"Login System",logout:"Logout Successfulli...!!!"})
            res.redirect("/")
        }
    })
})

module.exports=router