const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const router = new Router();

// ALL SPACES ROUTER
router.get("/", async (request, response, next) => {
  try {
    const spaces = await Space.findAll();
    console.log("Got the spaces", spaces);
    response.send(spaces);
  } catch (e) {
    next(e);
  }
});

// SPECIFIC SPACE
router.get("/:id", async (request, response, next) => {
  try {
    const params = request.params;
    const id = params.id;
    // console.log("what's inside Id?", id);
    // console.log("what's inside the params?", params);
    const spaces = await Space.findByPk(id, { include: { model: Story } });
    // console.log("Got the spaces", spaces);
    response.send(spaces);
  } catch (e) {
    next(e);
  }
});

//EXPORT
module.exports = router;
