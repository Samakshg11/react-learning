function buttons(props) {
    const handleClick = () => {
        alert("button clicked");
    };
  return (
    <button onClick={handleClick}
      style={{
        backgroundColor: props.bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {props.label}
    </button>
  );
}

export default buttons;