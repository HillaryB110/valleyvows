const db = require("../db/dbConfig");

const getAllDatingPoolUsers = async () => {
  try {
    const allDatingPoolUsers = await db.any("SELECT * FROM dating_pool_users");

    return allDatingPoolUsers;
  } catch (error) {
    return error;
  }
};

const getSingleDatingPoolUser = async (id) => {
  try {
    const singleDatingPoolUser = await db.any(
      "SELECT * FROM dating_pool_users WHERE id = $1",
      id
    );
    return singleDatingPoolUser;
  } catch (error) {
    return error;
  }
};

const createSingleDatingPoolUser = async (data) => {
  try {
    const createDatingPoolUser = await db.one(
      "INSERT INTO dating_pool_users(firstname, gender, birthday, family, bio_short, full_profile, gift_received) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        data.firstname,
        data.gender,
        data.birthday,
        data.family,
        data.bio_short,
        data.full_profile,
        data.gift_received,
      ]
    );
    return createDatingPoolUser;
  } catch (error) {
    return error;
  }
};

const updateDatingPoolUserById = async (id, data) => {
  try {
    console.log(id, data);
    const updatedDatingPoolUser = await db.one(
      "UPDATE dating_pool_user SET firstname = $1, gender = $2, birthday = $3, family = $4, bio_short = $5, full_profile = $6, gift_received = $7 WHERE id = $8 RETURNING *",

      [
        data.firstname,
        data.gender,
        data.birthday,
        data.family,
        data.bio_short,
        data.full_profile,
        data.gift_received,
        id,
      ]
    );
    return updatedDatingPoolUser;
  } catch (error) {
    return error;
  }
};
const deleteDatingPoolUserById= async (id) => {
  try {
    const deleteDatingPoolUser = await db.one(
      "DELETE FROM dating_pool_user WHERE id = $1 RETURNING *",
      id
    );
    return deleteDatingPoolUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllDatingPoolUsers,
  getSingleDatingPoolUser,
  createSingleDatingPoolUser,
  updateDatingPoolUserById,
  deleteDatingPoolUserById,
};