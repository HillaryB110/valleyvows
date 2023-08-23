const express = require("express");
const router = express.Router();

const {
  getAllGifts,
  getGift,
  createNewGift,
  updateGift,
  deleteGift,
} = require("../queries/gifts");

router.get("/", async (req, res) => {
  try {
    const allGifts = await getAllGifts();
    res.json(allGifts);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const gift = await getGift(req.params.id);
    res.json(gift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newGift = await createNewGift(req.body);
    res.json(newGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGift = await updateGift(
      req.params.id,
      req.body.gift_name,
      req.body.gift_description,
      req.body.category
    );
    res.json(updatedGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGift = await deleteGift(req.params.id);
    res.json(deletedGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
