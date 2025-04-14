import express from "express";
import cors from "cors";   
import Users from "./routes/Users.js";  // Updated to handle roles
import RugbyPlayers from "./routes/RugbyPlayers.js";
//import PoolConnection from "./routes/PoolConnection.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  route paths
app.use("/users", Users);  // Route for managing roles  /Users/Users/
app.use("/rugbyplayers",RugbyPlayers);// Route for Managing the people(Athletes/Players) /rugbyPlayers/RugbyPlayers
//app.use("/poolConnection", PoolConnection); //Database Connection*/

// Home route
app.get("/", (req, res) => {
    try {
        res.send("Hello from Express Server");
    } catch (error) {
        console.error("Query error:", error);
        res.send("Sorry, error occurred.");
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));
