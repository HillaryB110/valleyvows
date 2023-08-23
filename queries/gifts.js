const db = require("../db/dbConfig");

const getAllGifts = async () => {
  try {
    const allGifts = await db.any("SELECT * FROM gifts");
    return allGifts;
  } catch (error) {
    return error;
  }
};

const getGift = async (id) => {
  try {
    const gift = await db.one("SELECT * FROM gifts WHERE id = $1", id);
    return gift;
  } catch (error) {
    return error;
  }
};

const createNewGift = async (data) => {
  try {
    const newGift = await db.one(
      "INSERT INTO gifts (gift_name, gift_description, category) VALUES ($1, $2, $3) RETURNING id",
      [data.gift_name, data.gift_description, data.category]
    );
    return newGift;
  } catch (error) {
    return error;
  }
};

const updateGift = async (id, gift_name, gift_description, category) => {
  try {
    const updatedGift = await db.none(
      "UPDATE gifts SET gift_name = $1, gift_description = $2, category = $3 WHERE id = $4",
      [gift_name, gift_description, category, id]
    );
    return "Gift entry updated successfully";
  } catch (error) {
    return error;
  }
};

const deleteGift = async (id) => {
  try {
    await db.none("DELETE FROM gifts WHERE id = $1", id);
    return "Gift entry deleted successfully";
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGifts,
  getGift,
  createNewGift,
  updateGift,
  deleteGift,
};
