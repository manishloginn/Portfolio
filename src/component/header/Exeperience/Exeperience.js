import React from "react";
import "./experience.css";
import { FaLaptopCode, FaCode, FaBriefcase } from "react-icons/fa";

function Experience() {
  const data = [
   {
  icon: <FaLaptopCode />,
  title: "Software Development Engineer I — Thrivedge Edutech Pvt. Ltd.",
  date: "Dec 2024 – Present | Mumbai",
  points: [
    "Architected and developed scalable payment microservices from scratch, supporting multiple gateways (Razorpay, Cashfree, PayU, Easebuzz, HDFC) under a unified ERP payment dashboard.",
    "Led, mentored, and managed an engineering team of 8+ developers, ensuring high-quality delivery, code reviews, sprint planning, and microservices best practices.",
    "Built fintech-critical modules including automated reconciliation, settlement tracking, gateway optimizer, and high-volume asynchronous transaction workflows.",
    "Improved system reliability by introducing structured coding practices, enhanced test coverage, detailed logging, and alerting systems to track failures and settlement delays.",
    "Collaborated with payment gateway technical teams and clients to gather requirements, resolve integration issues, and deliver custom payment workflows for schools.",
    "Tech Stack: NestJS, Node.js, React, Git, AWS, MongoDB, REST APIs",
  ],
},
    {
      icon: <FaCode />,
      title: "Freelance Developer — Tatatal",
      date: "Nov 2024 – Dec 2024 | Remote",
      points: [
        "Built a custom landing page using React & JavaScript.",
        "Integrated animations & dynamic content.",
        "Performed testing, debugging & optimization.",
        "Deployed app on Vercel with fast performance.",
      ],
    },
    {
      icon: <FaBriefcase />,
      title: "Full Stack Developer Intern — CodeAlpha",
      date: "Oct 2024 – Nov 2024 | Remote",
      points: [
        "Developed dynamic websites using React.js.",
        "Tested & debugged applications for production.",
        "Collaborated in a fast-paced environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="exp-section">
      <div className="exp-header">
        <h5>Experience</h5>
        <h2>My Professional Journey</h2>
      </div>

      <div className="timeline">
        {data.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="exp-date">{item.date}</p>

              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            {/* Line between nodes */}
            {index !== data.length - 1 && <span className="line" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
