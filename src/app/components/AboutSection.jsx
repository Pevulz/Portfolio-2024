"use client";

import React from "react";
import { useState } from "react";
import AboutTab from "./AboutTab";

function AboutSection() {
  const [tab, setTab] = useState("education");

  const tabData = [
    { title: "Education", content: <p>Brooklyn College</p> },
    {
      title: "Skills",
      content: (
        <ul>
          <li>JavaScript</li>
          <li> HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>Unity</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Github</li>
        </ul>
      ),
    },
    {
      title: "Experiences",
      content: (
        <ul>
          <li>Fun Fun Saturday</li>
          <li>Adventure Park</li>
          <li>Hunan Restaurant</li>
          <li>Yaya Tea</li>
          <li>Starbucks</li>
        </ul>
      ),
    },
  ];

  function activeTab(e) {
    setTab(e.target.textContent.toLowerCase());
  }

  return (
    <section className="my-[150px] text-white">
      <div className="lg:grid lg:grid-cols-2">
        <div>IMAGE</div>
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="pt-5 text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing espant. Nam
            facilis numquam nulla quae facere minima. Non soluta, quidem velit
            laudantium asperiores provident nihil nisi corrupti explicabo
            assumenda voluptatem fuga necessitatibus?
          </p>
          <div className="flex gap-5 pt-10 text-lg">
            {tabData.map((item, index) => (
              <AboutTab
                key={index}
                item={item}
                active={tab}
                activeTab={activeTab}
              ></AboutTab>
            ))}
          </div>
          <div className="text-lg py-10">
            {tabData.find((item) => item.title.toLowerCase() === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
