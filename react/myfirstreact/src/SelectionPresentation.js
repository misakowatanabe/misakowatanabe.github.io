import React from "react";
import { FadeInSection } from "./picAnimation";

export function SelectionPresentation(props) {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: "0px" }}>
      {props.catPics.map((pic) => (
        <FadeInSection key={pic} name={props.name}>
          <li key={pic} className="catPics" style={{ marginBottom: "5px" }}>
            <img src={pic} alt="Cat" style={{ width: "100%" }} />
          </li>
        </FadeInSection>
      ))}
    </ul>
  );
}
