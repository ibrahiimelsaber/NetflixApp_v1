/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";

//     //using useState hooks
// export default function Hooks() {
//   const [counter, setCounter] = useState(0);
//   let [names, setNames] = useState([]);
//   const counterUp = () => {
//     // setCounter(counter + 1);
//     setCounter((c) => c + 1);
//   };
//   const namesUp = () => {
//     setNames((names = ["ibrahim", " mohammed", " Elsaber"]));
//   };

//   return (
// <div className="text-center mt-5 mb-5 offset-4 col-lg-4">
//   <button className="btn btn-warning mb-5" onClick={counterUp}>
//     Plus Counter
//   </button>
//   <p className="bg-dark text-center text-white">{counter}</p>
//   <hr className="bg-dark mt-5" />
//   <button className="btn btn-warning mb-5" onClick={namesUp}>
//     Plus Names
//   </button>
//   <p className="bg-dark text-center text-white">{names}</p>
//   <hr className="bg-dark mt-5" />
// </div>
//   );
// }

// using MemoizationExample step by step without useMemo() Hook
/* 1-declare obj to hold cashed data
   2-check if the data is already cached or not!
   3-if cached then resolve 
   4-if not then render */

//    1-declare obj to hold cashed data
const cachedResult = {};
const sumCalculating = (fNum, sNum) => {
  console.log(cachedResult);
  return new Promise((resolve, reject) => {
    //   2-check if the data is already cached or not!
    if (cachedResult[fNum + "+" + sNum]) resolve(cachedResult[fNum + "+" + sNum]); //  3-if cached then resolve
    //  4-if not then render
    setTimeout(() => {
      const result = fNum + sNum;
      cachedResult[fNum + "+" + sNum] = result;
      resolve(result);
    }, 2000);
  });
};

// example take two numbers from then calculate sum
const Hooks = () => {
  //MemoizationExample
  const [sum, setSum] = useState(0);
  const firstNumber = useRef();
  const secondNumber = useRef();
  const handelSum = () => {
    if (firstNumber.current.value === "" || secondNumber.current.value === "") {
      alert("please enter your numbers values ...");
    } else
      sumCalculating(+firstNumber.current.value, +secondNumber.current.value).then((res) => {
        setSum(res);
        firstNumber.current.value = "";
        secondNumber.current.value = "";
      });
  };

  return (
    <div className="text-center mt-5 mb-5 offset-4 col-lg-4">
      <p className="bg-dark text-center text-white">Sum = [ {sum} ]</p>
      <input type="number" ref={firstNumber} className="form-control" />
      <input type="number" ref={secondNumber} className="form-control" />
      <hr className="bg-dark mt-2" />
      <button className="btn btn-warning mb-5" onClick={handelSum}>
        Calculate
      </button>
    </div>
  );
};
export default Hooks;
