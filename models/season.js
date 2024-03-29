
const mongoose = require("mongoose");
const { type } = require("os");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  
  walletAddress: { type: String},
  email: { type: String },
 userId:"",
totalPoint:0,
quiz:false,
s1:0,
s2:0,
s3:0,
profileImageUrl: String,
referrals:{type:[String]},
referrer:{type:String},
referralCode:{type:String},
wallet:String,
accesstoken:"",
followStatus:false,
walletStatus:false,
tweet:false,
likeStatus:false,
tgStatus:false,
discordStatus:false,
tweetStatus:false,
twitterUsername:"",
discordUsername:"",
tgUsername:"",



});

const User = mongoose.model("season", seasonSchema);

module.exports = User;

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Hashing failed", error);
  }
};
module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    throw new Error("Comparison failed", error);
  }
};

