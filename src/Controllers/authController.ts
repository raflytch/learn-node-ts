import { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response): Promise<any> => {
  const { username, email, password, role } = req.body;

  try {
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    const user = await User.create({
      ...req.body,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to login user",
    });
  }
};
