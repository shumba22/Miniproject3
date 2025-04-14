import { useState, useEffect } from "react";
import axios from "axios";

export default function NavBar() {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginSt, setLogin] = useState(
    sessionStorage.getItem("logged") !== null ? parseInt(sessionStorage.getItem("logged")) : 0
  );
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users/")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  function check() {
    const user = users.find(
      (u) => u.uname === uname.trim() && u.password === pwd.trim()
    );

    if (user) {
      sessionStorage.setItem("admin", user.role); // 1 for admin, 0 for user
      sessionStorage.setItem("logged", 1);
      setLogin(1);
      alert(
        `Login successful! Welcome ${user.name} (${user.role === 1 ? "Admin" : "User"})`
      );
    } else {
      alert("Invalid username or password.");
    }
  }

  return (
    <nav className="bg-blue-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Home link on the left */}
        <div className="text-xl font-semibold text-blue-800 hover:text-blue-900 transition-all duration-200">
          <a href="/Home">Home</a>
        </div>

        {/* Right-side navigation links */}
        <div className="flex space-x-8 text-lg text-blue-900 font-medium">
          <a
            href="/RegistrationPage"
            className="hover:text-blue-600 transition-colors duration-150"
          >
            Registration
          </a>
          <a
            href="/LoginPage"
            className="hover:text-blue-600 transition-colors duration-150"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
