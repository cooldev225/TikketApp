import { useEffect, useState } from "react";
import "./style.scss";
export const Accordian: React.FC<{ items: any }> = (props) => {
  const [state, setState] = useState<any>(0);
  console.log(state);
  return (
    <div className="accordian-widget">
      {props.items.map((item, index) => (
        <div className={"item" + (state === index ? " active" : "")}>
          <div className="title" key={index} onClick={(e) => setState(index)}>
            <div className="left">{item.title}</div>
            <div className="right">{state === index ? "-" : "+"}</div>
          </div>
          <div
            className="content"
            key={"content-" + index}
            style={{ display: state === index ? "block" : "none" }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
