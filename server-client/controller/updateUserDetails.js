const getUSerDetailsFromToken = require("../helpers/getUsersDetailsFromToken");
const UserModel = require("../models/UserModel");

async function updateUserDetails(req, res) {
  try {
    const token = req.cookies.token || "";

    const user = await getUSerDetailsFromToken(token);

    const { name, profile_pic } = req.body;

    const updateUser = await UserModel.updateOne(
      { _id: user.id },
      { name, profile_pic }
    );

    const userInformation = await UserModel.findById(user.id);
    return res.json({
      message: "User updated successfully",
      data: userInformation,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = updateUserDetails;
