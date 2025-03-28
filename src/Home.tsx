import React from "react";
import headshot from "./assets/headshot.jpg"; // Assuming headshot.jpg is in the same directory
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "160px",
          height: "160px",
          overflow: "hidden",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px", // Move the image down a little
          float: "left", // Allow text to wrap around the image
          marginRight: "30px", // Add space between the image and text
        }}
      >
        <img
          src={headshot}
          alt="headshot"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      {/* <h1>Hi, I'm Annie!</h1> */}
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        Hi, I'm Annie&#8212;an MIT student studying Math (18) & Computer Science
        (6-3).
      </p>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        On campus, I'm involved with the{" "}
        <a
          href="https://hackmit.org/"
          target="_blank"
          style={{ color: "#366f72" }}
        >
          HackMIT
        </a>{" "}
        organizing team. As Head of DevOps, I led 14 engineers in building 5+
        apps, the largest one being{" "}
        <a
          href="https://plume.hackmit.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#366f72" }}
        >
          Plume
        </a>
        . See the{" "}
        <a href="/projects" style={{ color: "#366f72" }}>
          Projects
        </a>{" "}
        page for details. I'm also an active member of the{" "}
        <a
          href="https://poker.mit.edu/"
          target="_blank"
          style={{ color: "#366f72" }}
        >
          Poker Club
        </a>
        &#8212;we study theory and host weekly events to introduce people to
        different variants.
      </p>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        I love discovering new areas and exploring interests beyond software.
        Recently, I've felt inspired to dive into the world of hardware&#8212;so
        I'm excited to see where this new journey takes me.
      </p>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        Before college, I grew up in the suburbs of Massachusetts, where I
        studied math, captained{" "}
        <a
          href="https://sites.google.com/abschools.org/abscioly/home?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#366f72" }}
        >
          AB SciOly
        </a>
        , and helped organize{" "}
        <a
          href="https://abmathcompetitions.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#366f72" }}
        >
          ABMC
        </a>
        .
      </p>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        In my free time, I'm probably at a local cafe adding to my Beli
        collection or playing my favorite pieces on the piano.
      </p>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        Please contact me at awang27 [at] mit [dot] edu if you would like to
        chat!
      </p>
      <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/AnnieWang314"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/annie-wang-ma"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:awang27@mit.edu" style={{ margin: "0 10px" }}>
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Home;
