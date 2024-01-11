"use client";

import { useState, useEffect } from "react";

const AnimatedTexts = [
  {
    heading: "Plan a trip",
    bodies: [
      "to see the northern lights in Norway",
      "to experience Seoul like a local",
    ],
  },
  {
    heading: "Write a text",
    bodies: [
      "that goes with a kitten gif for a friend having a rough day",
      "asking a friend to be my plus-one at a wedding",
    ],
  },
  {
    heading: "Help me debug",
    bodies: [
      "why the linked list appears empty after I've reversed it",
      "a Python script automating daily reports",
    ],
  },
  {
    heading: "Give me ideas",
    bodies: [
      "for what to do with my kids' art",
      "for a customer loyalty program in a small bookstore",
    ],
  },
  {
    heading: "Draft an email",
    bodies: [
      "to request a quote from local plumbers",
      "requesting a deadline extension for my project",
    ],
  },
  {
    heading: "Suggest fun activities",
    bodies: [
      "for a family of 4 to do indoors on a rainy day",
      "for a team-building day with remote employees",
    ],
  },
  {
    heading: "Brainstorm names",
    bodies: [
      "for my fantasy football team",
      "for an orange cat we're adopting from the shelter",
    ],
  },
  {
    heading: "Recommend a dish",
    bodies: ["to impress a date who's a picky eater", "to bring to a potluck"],
  },
  {
    heading: "Improve my post",
    bodies: [
      "for hiring a store associate",
      "for selling a used vacuum in good condition",
    ],
  },
  {
    heading: "Write a thank-you note",
    bodies: ["to our babysitter for the last-minute help", "to my interviewer"],
  },
  {
    heading: "Help me pick",
    bodies: [
      "an outfit that will look good on camera",
      "a gift for my dad who loves fishing",
    ],
  },
  {
    heading: "Summarize this article",
    bodies: ["as a table of pros and cons", "into three key points"],
  },
];

type Props = {};

export default function LoginScreenAnimatedText({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBodyIndex, setCurrentBodyIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("entry");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("exit");

      setTimeout(() => {
        setAnimationClass("entry");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % AnimatedTexts.length);
        setCurrentBodyIndex(0);
      }, 1000);
    }, 3000);

    // Apply entry animation on mount
    setAnimationClass("entry");

    return () => clearInterval(interval);
  }, []);

  const currentText = AnimatedTexts[currentIndex];
  const currentBody = currentText.bodies[currentBodyIndex];

  return (
    <div
      className={`hidden md:flex items-center w-full h-full col-span-2 lg:col-span-3 text-[#FE7600] dark:text-[#D292FF] px-6 lg:px-8 py-[22px] ${animationClass}`}
    >
      <div className="flex flex-col text-[32px] md:text-[40px] leading-[1.2]">
        <h1 className="flex flex-wrap font-bold">{currentText.heading}</h1>
        <div className="flex flex-wrap">{currentBody}</div>
      </div>
    </div>
  );
}
