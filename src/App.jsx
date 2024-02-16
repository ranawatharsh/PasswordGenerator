import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAll, setNumAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [pass, setPass] = useState('');
  const [btntext,setbtntext]=useState('Copy')
  const [okcolor,setokcolor]=useState('blue')
  const CopyPass =()=>{
    window.navigator.clipboard.writeText(pass)
    setbtntext('Copied')
    setokcolor('cyan')
    

  }
  const pasgen = useCallback(() => {
    let generatedPass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAll) {
      str += '0123456789';
    }
    if (charAll) {
      str += '!@#$%^&*';
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      generatedPass += str.charAt(char);
    }
    setPass(generatedPass);
  }, [length, numAll, charAll]);

  useEffect(() => {
    pasgen();
  }, [length, numAll, charAll, ]);

  return (
    <div >
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 mb-4 pb-4 text-gray-500 bg-yellow-500 text-lg'>
        <h1 className='text-center text-white bg-inherit pt-2'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={pass} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly></input>
          <button onClick={CopyPass} className={`bg-${okcolor}-500 outline-none text-stone-100 px-3 py-0.4 rounded-lg`}>{btntext}</button>
        </div>

        <div className='flex  text-sm gap-x-2 bg-yellow-500'>
          <div className='flex items-center gap-x-1 bg-yellow-500'>
            <input type='range' min={8} max={69} value={length} className='bg-yellow-500 cursor-pointer' onChange={(e) => { setLength(e.target.value) }}></input>
            <label className='bg-yellow-500'>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1 bg-yellow-500'>
            <input type='checkbox'
              defaultChecked={numAll}
              id='numinput'
              onChange={() => { setNumAll((prev) => !prev) }}
            ></input>
            <label className='bg-inherit'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 bg-yellow-500'>
            <input type='checkbox'
              defaultChecked={charAll}
              id='numinput'
              onChange={() => { setCharAll((prev) => !prev) }}
            ></input>
            <label className='bg-inherit'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
