import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import RegistrationPage from "./Components/RegistrationPage";
import LoginPage from "./Components/LoginPage";
export const DataContext = createContext("");
export default function App() {
  if (sessionStorage.getItem("admin") == null) {
    sessionStorage.setItem("admin", 0);
  }
  var login = 0;
  if (sessionStorage.getItem("logged") != null) {
    login = sessionStorage.getItem("logged"); //Check
  }

  const [logStatus, setLogStatus] = useState(login);
  return (
    <div>
      <DataContext.Provider
        value={{ logStatus: logStatus, setLogStatus: setLogStatus }}
      >
        <div className="w-[100vw] h-[100vh] bg-amber-100">
          <div className="">
            <NavBar />
          </div>
          <div className="text-center">
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<Home />} />

                <Route path="/Home" element={<Home />} />
                <Route path="/RegistrationPage" element={<RegistrationPage />}/>
                <Route path="/LoginPage" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
}
