const db = require("../db/dbConfig");

const getAllGiftsSent = async () => {
  try {
    const allGiftsSent = await db.any("SELECT * FROM gift_sent");
    return allGiftsSent;
  } catch (error) {
    return error;
  }
};

const getGiftSent = async (id) => {
  try {
    const giftSent = await db.one("SELECT * FROM gift_sent WHERE id = $1", id);
    return giftSent;
  } catch (error) {
    return error;
  }
};

const createNewGiftSent = async (data) => {
  try {
    const newGiftSent = await db.one(
      "INSERT INTO gift_sent (user_id, dating_pool_id, gift_id) VALUES ($1, $2, $3) RETURNING id",
      [data.user_id, data.dating_pool_id, data.gift_id]
    );
    return newGiftSent;
  } catch (error) {
    return error;
  }
};

const updateGiftSent = async (id, user_id, dating_pool_id, gift_id) => {
  try {
    const updatedGiftSent = await db.none(
      "UPDATE gift_sent SET user_id = $1, dating_pool_id = $2, gift_id = $3 WHERE id = $4",
      [user_id, dating_pool_id, gift_id, id]
    );
    return "Gift sent entry updated successfully";
  } catch (error) {
    return error;
  }
};

const deleteGiftSent = async (id) => {
  try {
    await db.none("DELETE FROM gift_sent WHERE id = $1", id);
    return "Gift sent entry deleted successfully";
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGiftsSent,
  getGiftSent,
  createNewGiftSent,
  updateGiftSent,
  deleteGiftSent,
};

