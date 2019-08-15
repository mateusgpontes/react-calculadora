import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";

const Calculator = () => {
  const resulte = useSelector(state => {
    return state;
  });

  const [first, setFirst] = useState(undefined);
  const [operation, setOperation] = useState(undefined);
  const [two, setTwo] = useState(undefined);

  const dispatch = useDispatch();

  function calculaParams() {
    switch (operation) {
      case "+":
        return Number(first) + Number(two);
      case "-":
        return Number(first) - Number(two);
      case "*":
        return Number(first) * Number(two);
      case "/":
        return Number(first) / Number(two);
      case "%":
        return (Number(first) * 100) / Number(two);
      default:
        return null;
    }
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="Number"
        placeholder="Primeiro valor"
        onChange={e => {
          setFirst(e.target.value);
        }}
      />
      <input
        placeholder="Qual operação"
        onChange={e => {
          setOperation(e.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="Segundo valor"
        onChange={e => {
          setTwo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(actions("SHOW_RESULTADO", calculaParams()));
        }}
      >
        Calcular
      </button>
      <ul>
        {resulte.map((res, i) => {
          return (
            <li key={i}>
              Resposta:
              {res.data}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Calculator;
