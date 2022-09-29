import React from 'react'
import { useState } from 'preact/hooks';

export default function Mint() {
  const [NFT, setNFT] = useState(null);
  const [NFTurl, setNFTurl] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attributes, setAttributes] = useState('');

  const handleMediaChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setNFT(e.target.files[0]);
      setNFTurl(URL.createObjectURL(e.target.files[0]));
      console.log(NFTurl);
    }
  }

  return (
    <div className='h-screen w-screen text-center'>
        <h1 className='font-Inter pt-28 font-extrabold text-7xl mb-16'>Mint NFT</h1>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='flex gap-5'>
              <input type="text" placeholder="Name"   onChange={(e) => setName(e.target.value)} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-96"/>
              <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-96"/>
            </div>
            <div className='flex gap-5 w-1/3'>
              <input type="text" placeholder="Attributes" onChange={(e) => setAttributes(e.target.value)} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-full"/>
            </div>
            <div>
              <h5 className='text-start ml-2 text-lg font-bold'>Media</h5>
              <input type="file" onChange={handleMediaChange} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-96"/>
            </div>
        </div>
        <button type="button" class="mt-16 tracking-wider font-Inter border-0 font-extrabold text-2xl bg-gradient-to-r from-green-400 to-blue-500">Mint NFT</button>
    </div>
  )
}
