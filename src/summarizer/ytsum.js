import React, { useEffect, useState } from "react";
import Layout from "../component/layout";
import axios from "axios";

export default function Ytsum() {
  const [ytlink, setytlink] = useState();
  const youtube_parser = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
  const handleform = async (e) => {
    e.preventDefault();
    const url = youtube_parser(ytlink);
    setytlink(url);
    console.log(ytlink);
    const res = await axios.post(
      `https://ytlinktotxt.onrender.com/getTranscript`,
      {
        ytlink: url,
      }
    );
    console.log(res.data.msg);
    if (res.data.success) {
      document.getElementById("info").innerText =
        "Transcript fetched successfully.";
      const txt = res.data.msg;
      try {
        const sum = await axios.post("http://localhost:4000/getSummary", txt);
        if (sum.data.success) document.getElementById("sum").innerText = sum;
      } catch (e) {
        console.log(e);
      }
    } else
      document.getElementById("info").innerText = "Transcript fetching failed.";
  };
  return (
    <Layout>
      <div className="ytsummain">
        <h2>Youtube Video Summarizer</h2>
        <p>Youtube Video with English Subtitle will only be summarized</p>
        <form onSubmit={handleform}>
          <label htmlFor="ytlink">Enter Youtube URL :</label>
          <input
            id="ytlink"
            type="text"
            value={ytlink}
            onChange={(e) => {
              setytlink(e.target.value);
            }}
          />
          <input type="submit" value="Summary" />
          <p id="info"></p>
          <p id="sum"></p>
        </form>
      </div>
    </Layout>
  );
}
