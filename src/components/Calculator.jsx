import React from "react";
import { useState } from "react";

const Calculator = ()=>{
    const [num1,setNum1]= useState ('');
    const [num2,setNum2]= useState ('');
    const [result,setResult]=useState(null);

    const operation =(op)=>{
        const operator1 = parseFloat(num1);
        const operator2 = parseFloat(num2);
        if (isNaN(operator1) || isNaN(operator2)){
            alert ('Introduce números válidos')
            return;
        }

        let opResult;
        if (op === 'sum'){
            opResult = operator1+operator2;
        }else if (op ==='subtract'){
            opResult = operator1-operator2;
        }else if (op === 'multiply'){
            opResult = operator1*operator2;
        }else if (op === 'divide'){
            if (operator2 !== 0){
                opResult = operator1/operator2;
            }else{
                alert('No es posible dividir por 0');
            }
        }
        setResult(opResult);
    }

    return(
        <div className="calculator">
            <input type="number" value={num1} placeholder= "Primer número" onChange={(event)=> setNum1(event.target.value)}/>
            <input type="number" value={num2} placeholder= "Segundo número" onChange={(event)=> setNum2(event.target.value)}/>
            
            <div>
                <button onClick={()=>operation('sum')}>Sumar</button>
                <button onClick={()=>operation('subtract')}>Restar</button>
                <button onClick={()=>operation('multiply')}>Multiplicar</button>
                <button onClick={()=>operation('divide')}>Dividir</button>
            </div>

            <div className="result">
                <h2>Resultado:{result !== null ? result : ''}</h2>
            </div>

        </div>

    );
}

export default Calculator;