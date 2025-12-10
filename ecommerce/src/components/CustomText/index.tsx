// ---- Component Definition components/CustomText.jsx

import React from "react";

function replaceAnchorsInHtmlString(htmlString: any, links: any[]) {
  // Create a DOM parser to parse the string into DOM elements
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Find all <a> elements in the parsed document
  doc.querySelectorAll("a").forEach((anchor, i) => {
    const linkMatch = links.find((link) => anchor.href.endsWith(link.key));
    if (linkMatch) {
      // Build your custom anchor element
      const newAnchor = document.createElement("a");

      // Example logic: set new attributes based on existing anchor
      // Replace with your own custom model format
      newAnchor.href = `/products/${linkMatch?.product?.value?.data?.handle}`; // copy href
      newAnchor.target = linkMatch?.target; // open in new tab
      newAnchor.rel = linkMatch?.rel; // set rel attribute
      newAnchor.innerText = linkMatch?.label; // set link's text value

      // Replace the old anchor with the new one
      anchor.replaceWith(newAnchor);
    }
  });

  // Serialize the DOM back into a string
  return doc.body.innerHTML;
}

// A Custom Text-rendering replacement for Builder's built-in Text component,
// Does a key-based replace on links, replacing
const CustomText = (props: any) => {
  // TODO: Should probably memo-ize this!
  const updatedHtmlString = replaceAnchorsInHtmlString(props.text, props.links);

  return <div dangerouslySetInnerHTML={{ __html: updatedHtmlString }}></div>;
};

export default CustomText;
