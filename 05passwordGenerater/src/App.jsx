import { useEffect, useRef } from 'react'
import { useCallback, useState } from 'react'


function App() {
  const [length, setlenght] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [Password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "{' '..$} !  # $ % & ' ( ) * + , - . / "
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numAllow, charAllow])

  const copyPassword= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.selectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => { passwordGenerator() }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generater</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input className='outline-none w-full py-1 px-3' type="text" placeholder='Password' readOnly value={Password} name="" id="" ref={passwordRef} />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" className="cursor-pointer" min={6} max={100} onChange={(e) => { setlenght(e.target.value) }} />
            <label htmlFor="">Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" defaultChecked={numAllow} id="numInput" onChange={() => {
              setnumAllow((prev) => !prev)
            }} />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" defaultChecked={charAllow} id="charInput" onChange={() => {
              setcharAllow((prev) => !prev)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
