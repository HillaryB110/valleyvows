const db = require("../db/dbConfig");

const getAllUsersGifts = async () => {
  try {
    const allUsersGifts = await db.any("SELECT * FROM users_gifts");
    return allUsersGifts;
  } catch (error) {
    return error;
  }
};

const getUserGift = async (id) => {
  try {
    const userGift = await db.one(
      "SELECT * FROM users_gifts WHERE id = $1",
      id
    );
    return userGift;
  } catch (error) {
    return error;
  }
};

const createNewUserGift = async (data) => {
  try {
    const newUserGift = await db.one(
      "INSERT INTO users_gifts (dating_pool_id, gift_id) VALUES ($1, $2) RETURNING id",
      [data.dating_pool_id, data.gift_id]
    );
    return newUserGift;
  } catch (error) {
    return error;
  }
};

const updateUserGift = async (id, dating_pool_id, gift_id) => {
  try {
    const updatedUserGift = await db.none(
      "UPDATE users_gifts SET dating_pool_id = $1, gift_id = $2 WHERE id = $3",
      [dating_pool_id, gift_id, id]
    );
    return "User gift entry updated successfully";
  } catch (error) {
    return error;
  }
};

const deleteUserGift = async (id) => {
  try {
    await db.none("DELETE FROM users_gifts WHERE id = $1", id);
    return "User gift entry deleted successfully";
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsersGifts,
  getUserGift,
  createNewUserGift,
  updateUserGift,
  deleteUserGift,
};
