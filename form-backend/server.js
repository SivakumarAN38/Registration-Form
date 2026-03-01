require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ------------------ MONGODB CONNECTION ------------------ */
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

/* ------------------ SCHEMA ------------------ */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

/* ------------------ ROUTES ------------------ */

// CREATE USER
app.post("/register", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const newUser = await User.create({ name, email });

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// GET USERS
app.get("/users", async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Delete failed" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});