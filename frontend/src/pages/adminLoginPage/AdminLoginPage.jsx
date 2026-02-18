import "./AdminLoginPage.css"

const AdminLoginPage = () => {
  
  
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
    <section className="admin-login-page">
      <h1>Admin Login Page</h1>
      <div className="container">
        <h2>Admin Sign In</h2>
        <form>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={login}>Log in</button>
        </form>
        <div className="error-container">Password in incorrect. please try again...</div>
      </div>
    </section>
  );
};

export default AdminLoginPage;
