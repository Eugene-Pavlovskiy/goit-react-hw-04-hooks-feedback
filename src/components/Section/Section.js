import React from "react";
import s from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section title={title} className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;