import "./SubmitComplaintPage.css";
import { useState } from "react";

const categories = ["Food", "Equipment", "Command", "Other"];
const URL = "http://localhost:3000/api/complaints";

export const SubmitComplaintPage = () => {
  const [selected, setSelected] = useState("other");
  const [text, setText] = useState("");
  const [message, setMessage] = useState({ display: false, text: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ category : selected, message : text }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await result.json();

      setMessage({display : true, text : data.message});

    } catch (error) {
      
    }
  }

  return (
    <section className="complaint-page">
      <h1>Submit Complaint Page</h1>
      <div className="complaint-container">
        <h2>Send A Complaint</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="select-container">
            <label>Select a category</label>
            <select
              defaultValue="other"
              onChange={(e) => setSelected(e.target.value)}
            >
              {categories.map((val, index) => (
                <option key={index} value={val.toLowerCase()}>
                  {val}
                </option>
              ))}
            </select>
          </div>

          <div className="input-section">
            <label>Complaint</label>
            <textarea
              rows="5"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button>Send</button>
        </form>
        {message.display && <div className="success-msg">{message.text}</div>}
      </div>
    </section>
  );
};

export default SubmitComplaintPage;
