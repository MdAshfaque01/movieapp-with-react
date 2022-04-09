import React,{useState} from 'react'




function Pagination({pageProp,goBack,goAhead}) {

   
  
  return (
    <>

      <div class="w-full flex justify-center mb-8">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={goBack}>
          Prev
        </button>
        <button className='p-2 border-2 border-gray-400
         bg-white font-bold '>
          {pageProp}
          </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={goAhead}>
          Next
        </button>
      </div>

    </>
     
  )
  
}

export default Pagination;