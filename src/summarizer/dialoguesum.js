import React, { useState } from "react";
import Layout from "../component/layout";
import axios from "axios";

export default function Dialoguesum() {
  const [txt, setTxt] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Received", txt);
    try {
      const sum = await axios.post("http://localhost:4000/getSummary", txt);
      if (sum.data.success) document.getElementById("sum").innerText = sum;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout>
      <div className="txtpastemain">
        <h2 className="text-center">Enter Dialogue Here</h2>
        <form onSubmit={handleSubmit} className="text-center">
          <textarea
            className="text-center txtpastetext"
            cols={50}
            rows={5}
            name="txt"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div id="info"></div>
        <div id="sum"></div>
      </div>
    </Layout>
  );
}
