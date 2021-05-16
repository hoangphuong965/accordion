import React, { useState } from "react";

const Questions = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOnlick = (index) => {
    setOpen(!open);
    setActiveIndex(index);
  };

  const renderQuestion = () => {
    return questions.map((question, index) => {
      const actives = index === activeIndex ? "active" : "hide";
      const opens = index === activeIndex ? "-" : "+";
      const info = index === activeIndex ? "open" : "close";
      return (
        <article key={question.title}>
          <header>
            <h3>{question.title}</h3>
            <button onClick={() => handleOnlick(index)}>{opens}</button>
          </header>
          <p className={`${info} ${actives}`}>{question.info}</p>
        </article>
      );
    });
  };

  return <div className='renderQuestion'>{renderQuestion()}</div>;
};

export default Questions;
