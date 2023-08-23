const express = require("express");
const router = express.Router();

const {
  getAllUsersGifts,
  getUserGift,
  createNewUserGift,
  updateUserGift,
  deleteUserGift,
} = require("../queries/userGifts");

router.get("/", async (req, res) => {
  try {
    const allUsersGifts = await getAllUsersGifts();
    res.json(allUsersGifts);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userGift = await getUserGift(req.params.id);
    res.json(userGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserGift = await createNewUserGift(req.body);
    res.json(newUserGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUserGift = await updateUserGift(
      req.params.id,
      req.body.dating_pool_id,
      req.body.gift_id
    );
    res.json(updatedUserGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUserGift = await deleteUserGift(req.params.id);
    res.json(deletedUserGift);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
