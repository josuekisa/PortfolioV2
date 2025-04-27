import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen w-full  bg-[#f7f7f7] text-gray-800 '>

     <h1 className='text-4xl text-center'>Contact</h1>
     
     <div className='flex  justify-center items-center'>
       <form className='bg-green-200 w-[40rem] h-auto text-xl border border-green-400 rounded-lg p-6 shadow-md hover:shadow-lg space-y-6'>
        <div className='grid grid-cols-1'>
        <label className="py-1" htmlFor="firstName">Prénom </label>
        <input className='bg-green-50 p-2 rounded-md' type="text" id="firstName" name="firstName" placeholder='Prénom'/>
        
      </div>

      <div className='grid grid-cols-1'>
        <label className="py-1"htmlFor="lastName">Nom :</label>
        <input className='bg-green-50 rounded-md p-2'type="text" id="lastName" name="lastName"placeholder='Nom' />
      </div>

      <div  className='grid grid-cols-1'>
        <label className="py-1"htmlFor="email">Email :</label>
        <input className=' inline-block bg-green-50 rounded-md p-2'type="email" id="email" name="email" placeholder='email' />
      </div>

      <div  className='grid grid-cols-1'>
        <label className="py-1"htmlFor="email">Message :</label>
       
        <textarea className='bg-green-50 rounded-md' name="" id="" cols="30" rows="10" placeholder='Votre message'></textarea>
      </div>

      <div className='grid grid-cols-1'>
        <button className='text-center' type="submit">Envoyer</button>
      </div>
    </form>
     </div>

    </div>
  )
}

export default Contact