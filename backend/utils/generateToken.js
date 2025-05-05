// 📁 backend/utils/generateToken.js
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role || "admin", // default admin
    },
    process.env.JWT_SECRET || "secret", // secure it via .env in production
    {
      expiresIn: "7d",
    }
  );
};

export default generateToken;
