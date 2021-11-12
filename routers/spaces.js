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

router.delete("/story/:story_id", async (request, response, next) => {
  try {
    // delete story with id == story_id if this user is the owner of the space of the story
    const params = request.params;
    const id = params.story_id;
    // console.log("what's inside Id?", id);
    // console.log("what's inside the params?", params);

    const target_story = await Story.findByPk(id);
    console.log("found", target_story);
    await target_story.destroy();
    // console.log("Got the spaces", spaces);
    response.send(id);
  } catch (e) {
    next(e);
  }
});

//EXPORT
module.exports = router;
