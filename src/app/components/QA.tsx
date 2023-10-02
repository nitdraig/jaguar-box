"use client";
import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const ContentFAQ = [
    { question: "Chaou", answer: "hola", id: "1" },
    { question: "Chaou", answer: "hola", id: "2" },
    { question: "Chaou", answer: "hola", id: "3" },
  ];

  return (
    <div className="py-12">
      <div>
        <div>
          <h3>Frequent questions</h3>
        </div>
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {ContentFAQ.map((faq) => (
            <AccordionItem
              key={faq.id}
              aria-label="Accordion 1"
              title={
                <div className="lg:text-3xl text-2xl font-semibold">
                  {faq.question}
                </div>
              }
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
