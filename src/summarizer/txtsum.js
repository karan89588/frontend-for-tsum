import React, { useState } from "react";
import Layout from "../component/layout";
import axios from "axios";
export default function Txtsum() {
  const [name, setName] = useState("karan");
  const [txts, settxts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in txts) {
      formdata.append("txts", txts[key]);
    }
    formdata.append("name", name);
    const res = await axios.post(
      "https://doctotxtapi.onrender.com/api/v1/txt/create",
      formdata
    );
    if (res.data.success) {
      document.getElementById("info").innerText = "Text fetched Successfully";
      console.log(res.data.txt);
      const txt = res.data.txt;
      try {
        const sum = await axios.post("http://localhost:4000/getSummary", txt);
        if (sum.data.success) document.getElementById("sum").innerText = sum;
      } catch (e) {
        console.log(e);
      }
    } else {
      document.getElementById("info").innerText = "Problem in fetching Text";
      console.log(res.data.error);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="words">Upload Words</label>
        <input
          type="file"
          name="words"
          id="words"
          multiple
          onChange={(e) => settxts(e.target.files)}
        />
        <input type="submit" value="Upload" />
      </form>
      <div id="info"></div>
      <div id="sum"></div>
    </Layout>
  );
}
