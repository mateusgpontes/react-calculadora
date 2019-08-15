import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions/";

const Calcula = () => {
  const resulte = useSelector(state => {
    return state;
  });

  const [first, setFirst] = useState(undefined);
  const [operator, setOperator] = useState(undefined);
  const [two, setTwo] = useState(undefined);

  const dispatch = useDispatch();

  function showCacula(cal) {
    dispatch(actions(cal));
  }

  function calculaParams() {
    switch (operator) {
      case "+":
        return Number(first) + Number(two);
      case "-":
        return Number(first) - Number(two);
      case "*":
        return Number(first) * Number(two);
      case "/":
        return Number(first) / Number(two);
      default:
        return null;
    }
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        placeholder="Primeiro valor"
        onChange={e => {
          setFirst(e.target.value);
        }}
      />
      <input
        placeholder="Qual operação"
        onChange={e => {
          setOperator(e.target.value);
        }}
      />
      <input
        placeholder="Segundo valor"
        onChange={e => {
          setTwo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          showCacula(calculaParams());
        }}
      >
        Calcular
      </button>
      <ul>
        {resulte.map((res, i) => {
          return <li key={i}>Resposta:{res.data}</li>;
        })}
      </ul>
    </div>
  );
};

export default Calcula;
