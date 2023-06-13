import "./item.css";
import { useState } from "react";
/* eslint-disable react/prop-types */
export const Item = (props) => {
  const { title, description } = props;
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "ซ่อน" : "แสดง"}
        </button>
      </div>
      {show && <p>{description}</p>}
    </section>
  );
};
