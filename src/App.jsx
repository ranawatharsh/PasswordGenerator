import { useState , useCallback, useEffect} from 'react'

import './App.css'

function App() {
  const [length,setlen]=useState(8);
  const [numall,setnumall]=useState(false);
  const [charall,setcharall]=useState(false);
  const [pass,setpass]=useState("")

  const pasgen = useCallback(()=>{let pass=""
                                  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                                  if(numall){str+="0123456789"}
                                  if(charall){str+="!@#$%^&*"}
                                  for(let i=1;i<=length;i++){
                                    let char=Math.floor(Math.random()*str.length + 1)
                                    pass+=str.charAt(char)
                                  }  
                                  setpass(pass)
  }, [length,numall,charall,pass])

  useEffect(()=>{pasgen()},[length,numall,charall,pasgen])
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 mb-4 pb-4 text-gray-500 bg-yellow-500 text-lg'>
    <h1 className='text-center text-white bg-inherit pt-2'>PASSWORD GENERATOR</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={pass} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly></input>
      <button className='bg-blue-500 outline-none text-stone-100 px-3 py-0.4 rounded-lg'>COPY</button>
    </div>

    <div className='flex  text-sm gap-x-2 bg-yellow-500'>
      <div className='flex items-center gap-x-1 bg-yellow-500'>
        <input type='range' min={8} max={69} value={length} className='bg-yellow-500 cursor-pointer' onChange={(e)=>{setlen(e.target.value)}}></input>
        <label className='bg-yellow-500'>Length :{length}</label>
      </div>
      <div className='flex items-center gap-x-1 bg-yellow-500'>
        <input type='checkbox'
              defaultChecked={numall}
              id='numinput'
              onChange={()=>{setnumall((prev)=>!prev)}}
          ></input>
          <label className='bg-inherit'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1 bg-yellow-500'>
        <input type='checkbox'
              defaultChecked={charall}
              id='numinput'
              onChange={()=>{setcharall((prev)=>!prev)}}
          ></input>
          <label className='bg-inherit'>Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
