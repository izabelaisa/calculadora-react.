import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Erro");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.display}>{input || "0"}</div>
      <div style={styles.row}>
        <button onClick={handleClear} style={styles.button}>
          C
        </button>
        <button onClick={() => handleClick("/")} style={styles.button}>
          /
        </button>
        <button onClick={() => handleClick("*")} style={styles.button}>
          *
        </button>
        <button onClick={() => handleClick("-")} style={styles.button}>
          -
        </button>
      </div>
      <div style={styles.row}>
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={styles.button}
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleClick("+")} style={styles.button}>
          +
        </button>
      </div>
      <div style={styles.row}>
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={styles.button}
          >
            {num}
          </button>
        ))}
        <button onClick={handleCalculate} style={styles.equalsButton}>
          =
        </button>
      </div>
      <div style={styles.row}>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={styles.button}
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleClick("0")} style={styles.button}>
          0
        </button>
        <button onClick={() => handleClick(".")} style={styles.button}>
          .
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#F4F8D3",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  display: {
    height: "50px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "24px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "right",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  button: {
    flex: "1",
    margin: "5px",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#dcdcdc",
    cursor: "pointer",
  },
  equalsButton: {
    flex: "1",
    margin: "5px",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#81E7AF",
    color: "#fff",
    cursor: "pointer",
  },
};

function App() {
  return <Calculator />;
}

export default App;
