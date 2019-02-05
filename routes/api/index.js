const router = require("express").Router();
// import any api routes
const burgerRoutes = require("./burgersRoutes");

// prefix api routes with their specific endpoint name
router.use("/burgers", burgerRoutes);

module.exports = router;