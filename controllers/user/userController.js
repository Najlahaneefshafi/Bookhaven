const pageNotFound=async(req,res)=>{
    try{
         res.render("pageNotFound")
    }catch(error){
      res.redirect("/pageNotfound")
    }
};


const loadSignup = async(req,res)=>{
    try{
        return res.render("signup")
    }catch(error){
        console.log("Home Page Not Found");
        res.status(500).send("Server error")
    }
}



const loadHomepage = async(req,res)=>{
    try{
        return res.render("home")
    }catch(error){
        console.log("Home Page Not Found");
        res.status(500).send("Server error")
    }
}
module.exports = {
    loadHomepage,
    loadSignup,
    pageNotFound
}