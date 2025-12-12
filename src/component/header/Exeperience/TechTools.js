import React, { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiMongodb,
  SiTestinglibrary,
  SiExpress,
  SiAntdesign,
  SiNestjs,
  SiAmazonaws,
  SiGraphql,
} from "react-icons/si";

import { FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { MdHttp } from "react-icons/md";

import "./techtools.css";

function TechTools() {
  const [tab, setTab] = useState("backend");

  const frontend = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiAntdesign />, name: "Ant Design" },
    { icon: <FaGitAlt />, name: "Git / GitHub" },
    { icon: <SiTestinglibrary />, name: "Testing Library" },
  ];

  const backend = [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <MdHttp />, name: "REST API" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiAmazonaws />, name: "AWS" },
  ];

  const data = tab === "frontend" ? frontend : backend;

  return (
    <section id="tech-tools" className="tt-section">

      {/* Title */}
      <div className="tt-title">
        <h5>Tech Tools</h5>
        <h2 style={{ color: "white" }}>My Technology Stack</h2>
      </div>

      {/* Tabs */}
      <div className="tt-tabs">
        <button
          className={tab === "backend" ? "active" : ""}
          onClick={() => setTab("backend")}
        >
          Backend
        </button>

        <button
          className={tab === "frontend" ? "active" : ""}
          onClick={() => setTab("frontend")}
        >
          Frontend
        </button>
      </div>

      {/* Cards */}
      <div className="tt-grid">
        {data.map((item, i) => (
          <div key={i} className="tt-card">
            <div className="tt-icon">{item.icon}</div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechTools;
