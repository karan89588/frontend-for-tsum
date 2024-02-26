import React from "react";
import Layout from "./layout";
import YoutubeSummarizer from "./youtubeSummarizer";
import AudioSummarizer from "./audioSummarizer";
import PdfSummarizer from "./pdfSummarizer";
import WordSummarizer from "./wordSummarizer";
import TextFileSummarizer from "./textFileSummarizer";
import TextPasteSummarizer from "./textPasteSummarizer";
import DialogueSummarizer from "./dialogueSummarizer";
import NewsTitleGeneratation from "./newsTitleGeneratation";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <Layout>
      <div className="mainContent">
        <Link
          to="/youtubeSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <YoutubeSummarizer />
          </div>
        </Link>
        <Link
          to="/audioSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <AudioSummarizer />
          </div>
        </Link>
        <Link
          to="/pdfSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <PdfSummarizer />
          </div>
        </Link>
        <Link
          to="/wordSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <WordSummarizer />
          </div>
        </Link>
        <Link
          to="/txtSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <TextFileSummarizer />
          </div>
        </Link>
        <Link
          to="/txtPasteSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <TextPasteSummarizer />
          </div>
        </Link>
        <Link
          to="/dialogueSummary"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <DialogueSummarizer />
          </div>
        </Link>
        <Link
          to="/newsTitle"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="item">
            <NewsTitleGeneratation />
          </div>
        </Link>
      </div>
    </Layout>
  );
}
