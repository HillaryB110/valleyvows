const express = require("express");
const router = express.Router();

const {
  getAllGiftsSent,
  getGiftSent,
  createNewGiftSent,
  updateGiftSent,
  deleteGiftSent,
} = require("../queries/giftSent");

router.get("/", async (req, res) => {
  try {
    const allGiftsSent = await getAllGiftsSent();
    res.json(allGiftsSent);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const giftSent = await getGiftSent(req.params.id);
    res.json(giftSent);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newGiftSent = await createNewGiftSent(req.body);
    res.json(newGiftSent);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGiftSent = await updateGiftSent(req.params.id, req.body);
    res.json(updatedGiftSent);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGiftSent = await deleteGiftSent(req.params.id);
    res.json(deletedGiftSent);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
