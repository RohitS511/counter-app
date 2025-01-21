import React, { useEffect, useState } from 'react'
import styles from './css/Counter-demo.module.css'

function CounterDemo() {

    const [count,setCount] = useState(0);
    const [textDisplay, setTextDisplay] = useState("");
 
    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    const handleReset = () => {
        setCount(0);
        setTextDisplay("");
    }

    useEffect(() => {
        if(count===5){
        setTextDisplay("High Five 🖐");
        } else if(count>9){
            setTextDisplay("Double digits 🙌");
        } else{
            setTextDisplay("");
        }
    },[count])

  return (
    <div className={styles.container}>
        <div className={styles.heading}>Counter Demo</div>
        <div className={styles.count}>{count}</div>
        <div className={styles.text}>{textDisplay}</div>

        <div className={styles.buttonContainer}>
            <button className={styles.incrementBtn} onClick={handleIncrement}>+1</button>
            <button className={styles.decrementBtn} onClick={handleDecrement}>-1</button>
        </div>
        <div className={styles.resetContainer}>
            <button className={styles.resetBtn} onClick={handleReset}>Reset Counter</button>
        </div>
    </div>
  )
}

export default CounterDemo