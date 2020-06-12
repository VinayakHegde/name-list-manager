import * as React from "react";

interface Props {
  name?: string;
  onClick?: () => void;
  btnName?: string;
}

const DisplayItem: React.FC<Props> = ({ name, onClick, btnName }) => {
  return (
    <div className="displayItem">
      <span className="displayItem__name">{name}</span>
      <button className={`${btnName ? "primary" : "danger"}`} onClick={onClick}>
        {btnName || "Remove"}
      </button>
    </div>
  );
};

export default DisplayItem;
