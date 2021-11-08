const { Router } = require("express");
const Spaces = require("../models").space;
const router = new Router();

// ALL SPACES ROUTER
router.get("/", async (request, response, next) => {
  try {
    const spaces = await Spaces.findAll();
    console.log("Got the spaces", spaces);
    response.send(spaces);
  } catch (e) {
    next(e);
  }
});

// // SPECIFIC SPACE
// router.get("/:spaceId", async (request, response, next) => {
//   try {
//     const spaces = await Spaces.findByPk(request.params.spaceId);
//     console.log("Got the spaces", spaces);
//     response.send(spaces);
//   } catch (e) {
//     next(e);
//   }
// });

// EXPORT

module.exports = router;
