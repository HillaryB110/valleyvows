const express = require("express");
const router = express.Router();

const {
  getAllProfiles,
  getUserProfile,
  createNewUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../queries/userProfile");

router.get("/", async (req, res) => {
  try {
    const allProfiles = await getAllProfiles();
    res.json(allProfiles);
  } catch (error) {
    res.status(error.status).json({ error: error.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userProfile = await getUserProfile();
    res.json(userProfile);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserProfile = await createNewUserProfile(req.body);
    res.json(newUserProfile);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUserProfile = await updateUserProfile(req.params.id, req.body);
    res.json(updatedUserProfile);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUserProfile = await deleteUserProfile(req.params.id);
    res.json(deletedUserProfile);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
