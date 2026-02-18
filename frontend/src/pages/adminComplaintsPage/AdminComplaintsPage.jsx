import "./AdminComplaintsPage.css";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const categories = ["Food", "Equipment", "Command", "All"];
const URL = "http://localhost:3000/api/complaints";

const AdminComplaintsPage = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState("all");

  function getMessages() {
    if (selected === "all") {
      return messages;
    }

    return messages.filter(
      (obj) => obj.category?.toLowerCase() === selected.toLocaleLowerCase()
    );
  }

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
      }

      try {
        const result = await fetch(URL, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const data = await result.json();

        console.log(data);

        if (result.status === 401) {
          return navigate("/");
        }

        setMessages(data.complaints);
      } catch (err) {}
    }

    getData();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin complaints page</h1>
      <section className="table-section">
        <div>
          <h2>Complaints List</h2>
        </div>
        <div className="select-container">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {categories.map((val, index) => (
              <option key={index} value={val.toLowerCase()}>
                {val}
              </option>
            ))}
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {getMessages().map((obj) => {
              return (
                <tr key={obj["_id"]}>
                  <td>{obj.category}</td>
                  <td>{obj.message}</td>
                  <td>{obj.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminComplaintsPage;
