import React, { useState } from 'react'

export const Practice = () => {
    const [color, setColor] = useState("white")
    return (
        <>
            <div className='w-52 h-52 duration-75 shadow-lg rounded-sm mt-4 ms-4 border-2 border-black ' style={{ backgroundColor: color }}>
            </div>
            <div className="ps-4 mt-4 gap-3 flex-wrap flex">
                <button onClick={() => { setColor("red") }} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "red" }}>red</button>
                <button onClick={() => { setColor("black") }} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "black" }}>black</button>
                <button onClick={() => { setColor("purple") }} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "purple" }}>purple</button>
                <button onClick={() => { setColor("blue") }} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "blue" }}>blue</button>
            </div>

        </>
    )
}

export default Practice