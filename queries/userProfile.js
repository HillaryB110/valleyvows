const db = require("../db/dbConfig");

const getAllProfiles = async () => {
  try {
    const allProfiles = await db.any("SELECT * FROM user_profile");
    return allProfiles;
  } catch (error) {
    return error;
  }
};

const getUserProfile = async (id) => {
  try {
    const userProfile = await db.one(
      "SELECT * FROM user_profile WHERE id = $1",
      id
    );
    return userProfile;
  } catch (error) {
    return error;
  }
};

const createNewUserProfile = async (data) => {
  try {
    const newUserProfile = await db.one(
      "INSERT INTO user_profile (firstname, gender, birthday, skill, bio_short, full_profile, best_gift) VALUES($1, $2, $3,$4, $5, $6, $7) RETURNING *",
      [
        data.firstname,
        data.gender,
        data.birthday,
        data.skill,
        data.bio_short,
        data.full_profile,
        data.best_gift,
      ]
    );
    return newUserProfile;
  } catch (error) {
    return error;
  }
};

const updateUserProfile = async (id, data) => {
  try {
    const updatedData = await db.one(
      "UPDATE user_profile SET firstname = $1, gender = $2, birthday = $3, skill = $4, bio_short = $5, full_profile = $6, best_gift = $7 WHERE id = $8 RETURNING *",

      [
        data.firstname,
        data.gender,
        data.birthday,
        data.skill,
        data.bio_short,
        data.full_profile,
        data.best_gift,
        id,
      ]
    );
    return updatedData;
  } catch (error) {
    return error;
  }
};

const deleteUserProfile = async (id) => {
    try {
        const deletedUserProfile = await db.one(
            "DELETE FROM user_profile WHERE id = $1 RETURNING *", id
        );
        return deletedUserProfile;
    } catch (error) {
        return error;
    }
};

module.exports = {
  getAllProfiles,
  getUserProfile,
  createNewUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
