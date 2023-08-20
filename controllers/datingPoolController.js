const express = require("express");
const router = express.Router();

const {
  getAllDatingPoolUsers,
  getSingleDatingPoolUser,
  createSingleDatingPoolUser,
  updateDatingPoolUserById,
  deleteDatingPoolUserById,
} = require("../queries/datingPool");

const { checkIfNotNull } = require("../validations/checkDatingPool");

router.get("/", async (req, res) => {
  try {
    const allDatingPoolUsers = await getAllDatingPoolUsers();

    res.json(allDatingPoolUsers);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const singleDatingPoolUser = await getSingleDatingPoolUser(req.params.id);
    res.json(singleDatingPoolUser);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", checkIfNotNull, async (req, res) => {
    try {
        const createDatingPoolUser = await createSingleDatingPoolUser(req.body);
        res.json(createDatingPoolUser);
    } catch(error) {
        res.status(error.status).json({ error: error.message });
    }
}); 

router.put("/:id", checkIfNotNull, async (req, res) => {
    try {
        const updatedDatingPoolUser = await updateDatingPoolUserById(req.params.id, req.body); 
        res.json(updatedDatingPoolUser);
    } catch (error) {
        res.status(error.status).json({ error: error.message})
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleteDatingPoolUser = await deleteDatingPoolUserById(req.params.id);
        res.json(deleteDatingPoolUser);
    } catch (error) {
        res.status(error.status).json({error: error.message}); 
    }
});

module.exports = router;
