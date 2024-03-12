// import { useState, useMemo } from "react";
// import "./App.css";

// function App() {
//   const [num, setNum] = useState(0);
//   const [str, setStr] = useState("abcdefghijklmnopqrstuvwxyz");
//   const [password, setPassword] = useState("_Ypk^*RrwZvgKM");
//   const [range, setRange] = useState(8);
//   const [symbol, setSymbol] = useState(false);
//   const [capital, setCapital] = useState(false);

//   const generate_pass = useMemo(() => {
//     let pass = "";

//     for (let i = 0; i < range; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass = pass + str.charAt(char);
//     }
//     console.log("run");
//     setPassword(pass);
//   }, [range, symbol, capital]);

//   // why we are not able to enter function in dependencies ....?

//   function validation() {
//     if (capital) {
//       if (symbol) {
//         setStr(
//           "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ0123456789"
//         );
//       } else {
//         setStr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ");
//       }
//     } else {
//       if (symbol) {
//         setStr("abcdefghijklmnopqrstuvwxyz0123456789");
//       } else {
//         setStr("abcdefghijklmnopqrstuvwxyz");
//       }
//     }
//   }

//   return (
//     <>
//       <h1 onChange={() => alert("Jai Siya Ram")}>Radhe Radhe</h1>

//       <div className="container">
//         <input type="text" value={password} id="display" readOnly />
//         <button
//           onClick={() => {
//             validation();
//           }}
//         >
//           click
//         </button>
//         <input
//           type="range"
//           id="range"
//           min={8}
//           max={20}
//           value={range}
//           onChange={(e) => {
//             setRange(e.target.value);
//             validation();
//           }}
//         />
//         <label htmlFor="range"> Range {range}</label>
//         <br />
//         <input
//           type="checkbox"
//           name="capital"
//           id="capital"
//           onClick={(e) => {
//             setCapital(e.target.checked);
//             validation();
//           }}
//         />
//         <label htmlFor="capital">Capital Letters</label>
//         <br />
//         <input
//           type="checkbox"
//           name="symbol"
//           id="symbol"
//           onClick={() => {
//             setSymbol(e.target.checked);
//             validation();
//           }}
//         />
//         <label htmlFor="symbol">Symbols</label>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [str, setStr] = useState("abcdefghijklmnopqrstuvwxyz");
  const [password, setPassword] = useState("_Ypk^*RrwZvgKM");
  const [range, setCount] = useState(8);

  useMemo(() => {
    let pass = "";

    for (let i = 0; i < range; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [str, range]);

  function validation() {
    if (document.getElementById("capital").checked) {
      if (document.getElementById("symbol").checked) {
        setStr(
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ!@#$%^&*_+~"
        );
      } else {
        setStr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ");
      }
    } else {
      if (document.getElementById("symbol").checked) {
        setStr("abcdefghijklmnopqrstuvwxyz!@#$%^&*_+~");
      } else {
        setStr("abcdefghijklmnopqrstuvwxyz");
      }
    }
  }
  return (
    <>
      <h1 onChange={() => alert("Jai Siya Ram")}>Radhe Radhe</h1>

      <div className="container">
        <input type="text" value={password} id="display" readOnly />
        <button onClick={() => validation()}>click</button>
        <input
          type="range"
          id="range"
          min={8}
          max={20}
          value={range}
          onChange={(e) => {
            setCount(e.target.value);
            validation();
          }}
        />
        <label htmlFor="range"> Range {range}</label>
        <br />
        <input
          type="checkbox"
          name="capital"
          id="capital"
          onClick={() => validation()}
        />
        <label htmlFor="capital">Capital Letters</label>
        <br />
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          onClick={() => validation()}
        />
        <label htmlFor="symbol">Symbols</label>
      </div>
    </>
  );
}

export default App;