const checkIfNotNull = (req, res, next) => {
  try {
    const fields = [
      "firstname",
      "gender",
      "birthday",
      "bio_short",
      "full_profile",
    ];
    const emptyFields = fields.filter((field) => !req.body[field]);

    if (emptyFields.length > 0) {
      throw {
        error: `Value for ${emptyFields.join(", ")} cannot be empty`,
        status: 400,
      };
    } else {
      next();
    }
  } catch (error) {
    res.status(error.status).json({ error: error.error });
  }
};

module.exports = { checkIfNotNull };
