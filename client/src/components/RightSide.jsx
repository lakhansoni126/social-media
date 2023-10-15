import React, { useState } from "react";
import "./CSS/RightSide.css";
import TrendCard from "./TrendCard";
import ShareModal from "./ShareModal";
import NavIcons from "./NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}

      <NavIcons />
      {/* TrendCard */}
      <TrendCard />

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;