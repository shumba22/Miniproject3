import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Fetch rugby players from backend on component load
  useEffect(() => {
    axios.get("http://localhost:3000/rugbyplayers/")
      .then((res) => {
        // Assuming your backend returns data as: { rows: [...] }
        setPlayers(res.data.rows);
      })
      .catch((err) => {
        console.error("Error fetching rugby players:", err);
      });
  }, []);

  return (
    <div className="flex h-screen p-6">
      {/* Left Column: List */}
      <div className="w-1/3 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Professional Rugby Players</h2>
        <ul>
          {players.map((player) => (
            <li
              key={player.id}
              className="p-2 cursor-pointer hover:bg-gray-200 rounded"
              onMouseEnter={() => setSelectedPlayer(player)}
            >
              {player.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Details */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-4">Associated Rugby Team</h2>
        {selectedPlayer ? (
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">{selectedPlayer.name}</h3>
            <p className="text-gray-700">
              Age: {selectedPlayer.age} <br />
              Team: {selectedPlayer.national_team}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-500">
  <img 
    src="https://wallpapercave.com/wp/wp4695674.jpg" 
    alt="Rugby Ball" 
    className="w-250 h-100 rounded-lg shadow-md object-cover mb-2"
  />
</div>


        )}
      </div>
    </div>
  );
}
