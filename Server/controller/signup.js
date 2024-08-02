import User from "../model/signup.js";
import bcrypt from "bcrypt";
import sendEmail from "../helper/sendMail.js";

const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    await sendEmail(
      email,
      "Welcome to Our Service!",
      "Thank you for signing up!",
      "<h1>Welcome!</h1><p>Thank you for signing up!</p>"
    );

    res.status(200).json("mai send successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export default signupController;
