const cnx = require("../config/cnx");

module.exports = {
  //select all burgers
  getAllBurgers: (req, res) => {
    cnx.query("SELECT * FROM burgers", (err, dbburgers) => {

      res.json(dbburgers);
    });
  },

  //add a burger
  addBurger: (req, res) => {
    cnx.query("INSERT INTO burgers SET ?", req.body, (err, result) => {
      if (err) {
        console.log("Insert Error: " + err);
        res.status(400).json(err);
      };
      res.json(result);
    });
  },

  //update a buger /:id
  updateBuger: (req, res) => {
    
    //Update products set ? where ?
    cnx.query("update burgers set devoured = 1 where id =?", req.params.id, (err, result) => {
      if (err) {
        console.log("Update Error: " + err);
        res.status(400).json(err);
      };
      res.json(result);
    });
  },

  //delete a burger
  deleteBurger: (req, res) => {
    cnx.query("delete from burgers where id = ?", req.params.id, (err, result) => {
      if (err) {
        console.log("Delete Error: " + err);
        res.status(400).json(err);
      };
      res.json(result);

    });
  },
  //delete Aallr
  deleteAll: (req, res) => {
    cnx.query("delete FROM burgers", (err, result) => {
      if (err) {
        console.log("Delete Error: " + err);
        res.status(400).json(err);
      };
      res.json(result);

    });
  },
  //Reset All
  resetAll: (req, res) => {
    cnx.query("Update burgers set devoured = 0", (err, result) => {
      if (err) {
        console.log("Delete Error: " + err);
        res.status(400).json(err);
      };
      res.json(result);

    });
  }
}