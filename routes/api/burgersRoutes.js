const router = require("express").Router();
const burgerController = require("../../controllers/burgers_controllers");

// methods for /api/burger (GET, POST,PUT and DELETE)
router
  .route("/")
  .get(burgerController.getAllBurgers)
  .post(burgerController.addBurger);


router
      .route("/reset")
      .put( burgerController.resetAll);
router
      .route("/clear")
      .delete(burgerController.deleteAll)


  //methods for api/burger/:id (PUT)
router
  .route("/:id")
  .put(burgerController.updateBuger)
  .delete(burgerController.deleteBurger);

  
module.exports = router;