import React, { useEffect } from 'react'
import { useState } from 'react'
import './Cps.css'

const Cps = () => {
  const [counter, setCounter] = useState(60);
  const [count, setCount] = useState(0)
  const [clicou, setClicou] = useState(false)
  
    {/*useEffect(() => {
      if(count > 0){
      counter > 0 &&
        setInterval(() => {
          console.log(counter);
          console.log(clicou)
          setCounter(counter - 1);
        }, 1000);
      }

        if(counter === 0){
          alert('O tempo acabou.')
        }
    }, [clicou === true]);*/}


  {/* useEffect(() => {
  if(count === 50){
    alert('Você atingiu 50 cliques!')
  }
  }, [count],)*/}

  return (
    <div className="cps-counter">
      <h1>Contador de clicks</h1>
      <button onClick={() => setClicou(true)}>Começar</button>

      {clicou &&(
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicks: {count}
        </button>
        {counter}
      </div>
      )}

    </div>
  )
}

export default Cps