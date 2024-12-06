import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      ></div>
      <div
        onClick={accordionToggle}
        style={{
          cursor: "pointer",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      {isOpen && <div>{content}</div>}
      <div style={{ padding: "10px", backgroundColor: "#fff" }}></div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
