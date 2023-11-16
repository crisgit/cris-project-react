import { useState } from "react";
import styles from '../module/button.module.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
      setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    if (contador > 5 ) {
        return (
            <div>
                <h1>Contador maior que 5 </h1>
                <button className={styles.myButton} onClick={aumentar}> aumentar</button> 
                <button className={styles.myButton} onClick={diminuir}> diminuir</button> 
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Meu Contador: {contador}</h1><br/>

            {/* { contador > 9 ? <h1>Valor muito grande</h1> : null } */}
            <button className={styles.myButton} onClick={aumentar}> aumentar</button><br/>
            <button className={styles.myButton} onClick={diminuir}> diminuir</button>
        </div>
    )
}