import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 */
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({
                success:false,
                message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        res.status(201).json({
            success:true,
            message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error instanceof Error ? error.message : error });
    }
};

/**
 * @desc    Login user and return JWT token
 * @route   POST /api/auth/login
 */
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(400).json({ 
                success:false,
                message: "Invalid email or password" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({
                success:false,
                message: "Invalid email or password" });
            return;
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token,{ httpOnly: true, secure: false } )
           .status(200)
           .json({
            success:true,
            message: "Login successful" ,
            user:{
                email:user.email,
                name:user.name,
            }
        });
    } catch (error) {
        res.status(500).json({
            success:true,
            message: "Error logging in", error: error instanceof Error ? error.message : error });
    }
};

/**
 * @desc    Logout user and clear JWT cookie
 * @route   POST /api/auth/logout
 */
export const logoutUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie("token", { httpOnly: true, secure: false });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Error logging out", error: error instanceof Error ? error.message : error });
    }
};
