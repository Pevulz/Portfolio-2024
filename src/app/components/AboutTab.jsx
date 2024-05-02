import React from "react";

function AboutTab({ item, active, activeTab }) {
  const isActive = active === item.title.toLowerCase() ? true : false; //check if tab is active

  const activeMode = isActive //change css if active
    ? "text-sky-500 border-b border-b-sky-500"
    : "text-white";

  return (
    <p
      onClick={activeTab}
      className={`cursor-pointer hover:pointer hover:text-sky-500 ${activeMode}`}
    >
      {item.title}
    </p>
  );
}

export default AboutTab;
