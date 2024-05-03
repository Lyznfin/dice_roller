import dice1 from './assets/Dice-1.png'
import dice2 from './assets/Dice-2.png'
import dice3 from './assets/Dice-3.png'
import dice4 from './assets/Dice-4.png'
import dice5 from './assets/Dice-5.png'
import dice6 from './assets/Dice-6.png'
import {useState} from "react"

function Dice(){
    const [diceList, setDices] = useState([])
    const [numDice, setNumDices] = useState(1)
    const [accPoint, setAccPoint] = useState(0)

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    const numOfDice = (event) => {
        setNumDices(event.target.value)
        if (numDice < 1 || numDice > 5) {
            setNumDices(1)
        }
    }

    const rollDice = () => {
        let newDiceList = [];
        let accumulate = 0
        for (let i = 0; i < numDice; i++) {
            let diceIndex = Math.floor(Math.random() * 6);
            newDiceList.push(dices[diceIndex]);
            accumulate = accumulate + diceIndex + 1
        }
        setDices(newDiceList)
        setAccPoint(accumulate)
    }

    return(
        <div className="container">
            <h3 className="title">Dice Roller</h3>
            <div className="input-container">
                <label htmlFor="num-dice">Number of dices: {numDice}</label>
                <input type="number" name="num-dice" id="num-dice" onChange={numOfDice} value={numDice}/>
            </div>
            <button id="roll-btn" onClick={rollDice}>Roll it!</button>
            <div id="roll-result-img">
                {
                    diceList.map((dice, index) => (
                        <img key={index} src={dice} alt={`Dice ${index + 1}`} />
                    ))
                }
            </div>
            {
                accPoint > 0 ? <h4 className="title">You got {accPoint} {accPoint > 1 ? "points" : "point"}</h4> : null
            }
        </div>
    )
}

export default Dice