import React from 'react'

import Speech from 'react-speech';
function Verb1({verb1}) {

  return (
    <div className='flex !flex-row !justify-center !items-center'>
         <h1 className='text-green-400 text-6xl text-center mt-4 select-none '>{verb1}</h1>
    </div>
  )
}

export default Verb1