import React, { useState } from "react";
import Layout from "../component/layout";
import axios from "axios";
export default function Audiosum() {
  const [audios, setAudios] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in audios) {
      formdata.append("audios", audios[key]);
    }
    formdata.append("name", "karan");
    const res = await axios.post(
      "https://audiototext-95ee.onrender.com/api/v1/media/create",
      formdata
    );
    if (res.data.success) {
      document.getElementById("info").innerText =
        "Transcript fetched Successfully";
      console.log(res.data.transcript.text);
      const txt = res.data.transcript.text;
      const sum = await axios.post("http://localhost:4000/getSummary", txt);
      if (sum.data.success) document.getElementById("sum").innerText = sum;
    } else {
      document.getElementById("info").innerText =
        "Problem in fetching transcript";
      console.log(res.data.error);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="audios">Upload Audio</label>
        <input
          type="file"
          name="videos"
          id="videos"
          multiple
          onChange={(e) => setAudios(e.target.files)}
        />
        <input type="submit" value="Upload" />
      </form>
      <div id="info"></div>
      <div id="sum"></div>
    </Layout>
  );
}
