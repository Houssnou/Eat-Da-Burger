const router = require("express").Router();
const cnx=require("../../config/cnx");

//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/burgers", (req, res) => {
  cnx.query("Select * from burgers",(err,dbBurgers) =>{
    if(err){
      console.log(err);
    }
    //console.log(dbBurgers);

    res.render("burgers",{burgers:dbBurgers});
  });
});

module.exports = router;