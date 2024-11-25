import React from "react";

function ButtonComponent(props) {
  return (
    <button
      style={{
        backgroundColor: "white",
        color: "#b38f5d",
        fontSize: "16px",
        padding: "12px 24px",
        border: "2px solid #b38f5d",
        borderRadius: "12px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}
    >
      {props.text}
    </button>
  );
}

export default ButtonComponent;
