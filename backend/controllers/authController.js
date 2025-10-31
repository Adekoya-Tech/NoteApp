import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import Notes from "../models/notesModel.js";

const authControllers = {
  signUp: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      if (!firstName || !lastName || !email || !password)
        return res.status(400).json({ msg: "Please fill in all fields" });

      if (password.length < 6)
        return res.status(400).json({ msg: "Password is too short" });

      const userExits = await User.findOne({ email });
      if (userExits)
        return res
          .status(400)
          .json({ msg: "User with this email already exits" });

      const hashPassword = await bcrypt.hash(password, 12);

      // const token =  jwt.sign(
      // 	{ _id: userExits._id },
      // 	process.env.JWT_SECRET,
      // );

      const newUser = User({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });

      await newUser.save();

      return res.status(201).json({
        msg: "Signup successfully.",
        data: newUser,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res.status(400).json({ msg: "Please fill in all fields" });

      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "User with this email does not exists." });

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword)
        return res.status(400).json({ msg: "Password deos not match." });

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      return res
        .status(200)
        .json({ msg: "Sign In was successful.", token, data: user });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      return res.status(200).json({ msg: "All Users", data: users });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserProfile: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id }).select(
        "-password"
      );

      const notes = await Notes.find({ postedBy: req.params.id }).populate(
        "postedBy",
        "-password"
      );
	  return res.status(200).json({ msg: "Users Profile", user, notes });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authControllers;
