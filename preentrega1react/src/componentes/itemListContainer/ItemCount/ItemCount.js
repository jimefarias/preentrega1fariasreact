import "./ItemCount.css"
import { useState } from "react" 4.1 k(gripped: 1.8 k);


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuality] = useState(initial)

    const Increment = () => {
        if (quantity < stock) {
            setQuality(quality + 1)
        }
    }

    const decrement = () => {
        if (quantity - 1) {
        }
    }

    return (
    <><div className="Counter">
            <div className="Controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="Button" onClick={Increment}>+</button>
            </div>
        </div><button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}></button></>
        )
}