import React from "react";

export default function OverViewBox(props) {
  return (
    <div className="overview__box d-flex flex-row px-3 gap-3">
      <div className="overview__box--icon d-flex justify-content-center align-items-center">
        <i
          className={props?.item.icon}
          style={{
            color: props?.item.color,
            fontSize: "2rem",
          }}
        />
        {props?.item.icon}
      </div>
      <div className="overview__box--content">
        <div className="overview__box--title">{props?.item.title}</div>
        <div className="overview__box--number">{props?.item.value}</div>
      </div>
    </div>
  );
}
