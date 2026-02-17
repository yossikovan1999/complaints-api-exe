import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:3000/api/admin/login";


export const HomePage = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState();

  async function login(e) {
    e.preventDefault();

     try {
      const result = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await result.json();
    
      if(!result.ok){       
        return navigate("/admin/login")
      }
      
      localStorage.setItem("token", data.token);
      navigate("/admin");

    } catch (error) {
      
    }
  }

  return (
    <section className="home-page">
      <h1>Home Page</h1>
      <div className="sections">
        <section className="send-section">
          <h2>Anonymous complaints</h2>
          <div>
            <h3>Send a message without your name being revealed</h3>
            <button
              className="send-complaint-btn"
              onClick={() => navigate("/submit")}
            >
              Send Complaint
            </button>
          </div>
        </section>
        <section className="admin-passwrod-section">
          <h2>Admin Sign In</h2>
          <form>
            <div>
              <label>Password</label>
              <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={login}>Log in</button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default HomePage;
