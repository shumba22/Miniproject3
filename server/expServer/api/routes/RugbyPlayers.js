import express from "express";
import PoolConnection from "./PoolConnection.js";
const RugbyPlayers = express.Router();

// Retrieve all RugbyPlayers
RugbyPlayers.get("/", async (req, res) => {
    try {
        const result = await PoolConnection.query("SELECT * FROM RugbyPlayers");
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" });
    }
});

// Retrieve a specific player by ID
RugbyPlayers.get("/getplayer", async (req, res) => {
    try {
        const id1 = req.query.id;
        console.log(id1);
        const result = await PoolConnection.query("SELECT * FROM RugbyPlayers WHERE id=$1", [id1]);
        console.log(result);
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ rows: [] });
    }
});

// Delete a specific player by ID
RugbyPlayers.get("/delplayer", async (req, res) => {
    try {
        const id1 = req.query.id;
        console.log(id1);
        const result = await PoolConnection.query("DELETE FROM RugbyPlayers WHERE id=$1", [id1]);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

// Add a new player (POST request)
RugbyPlayers.post("/addplayer", async (req, res) => {
    try {
        var id = RugbyPlayers.id; // RugbyPlayers's ID to update
        var name = RugbyPlayers.name;
        var age = RugbyPlayers.age;
        var nationalTeam = RugbyPlayers.nationalTeam;
        
        const qry = "INSERT INTO RugbyPlayers (name, age, nationalTeam) VALUES ($1, $2, $3, $4)";
        const result = await PoolConnection.query(qry, [name, age,nationalTeam, id]);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

// Update an existing player
RugbyPlayers.post("/updatePlayer", async (req, res) => {
    try {
        var id = RugbyPlayers.id; // RugbyPlayers's ID to update
        var name = RugbyPlayers.name;
        var age = RugbyPlayers.age;
        var nationalTeam = RugbyPlayers.nationalTeam;
      
        const qry = "UPDATE RugbyPlayers SET name=$1, age=$2, nationalTeam=$3 WHERE id=$4";
        const result = await PoolConnection.query(qry, [name, age,nationalTeam, id]);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

export default RugbyPlayers