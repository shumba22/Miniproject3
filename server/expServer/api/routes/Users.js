import express from "express";
const Users = express.Router();
import PoolConnection from "./PoolConnection.js";

// Retrieve all users 
Users.get("/", async (req, res) => {
    try {
        const result = await PoolConnection.query("SELECT * FROM Users");
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" });
    }
});

// Retrieve a specific user by ID
Users.get("/getuser", async (req, res) => {
    try {
        const id = req.query.id;
        const result = await PoolConnection.query("SELECT * FROM Users WHERE id=$1", [id]);
        res.json({ rows: result.rows });  // Ensure response format matches your provided data
    } catch (error) {
        console.error("Query error:", error);
        res.json({ rows: [] });
    }
});

// Delete a specific user by ID
Users.get("/deluser", async (req, res) => {
    try {
        const id = req.query.id;
        const result = await PoolConnection.query("DELETE FROM Users WHERE id=$1", [id]);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

// Add a new user (POST request)
Users.post("/adduser", async (req, res) => {
    try {
        
        const { firstname, lastname, userid, email, city, zipcode, username, password } = req.body;
        const qry = "INSERT INTO Users (firstname, lastname, userid, email, city, zipcode, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        const result = await PoolConnection.query(qry, [firstname, lastname, userid, email, city, zipcode, username, password]);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

// Update an existing user
Users.post("/updateuser", async (req, res) => {
    try {
        const { id, firstname, lastname, userid, email, city, zipcode, username, password } = req.body;
        const qry = "UPDATE Users SET firstname=$1, lastname=$2, userid=$3, email=$4, city=$5, zipcode=$6, username=$7, password=$8 WHERE id=$9";
        const result = await PoolConnection.query(qry, [firstname, lastname, userid, email, city, zipcode, username, password, id]);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

export default Users;
