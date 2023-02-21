import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets';

const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

const Clients = () => {
  return (
    <div className='flex justify-center items-center my-4'>
      <div className='w-full flex justify-center items-center flex-wrap'>
        {clients.map((client) => (
          <div key={client.id} className='flex-1 flex justify-center items-center min-w-[120px] sm:min-w-[192px]'> 
            <img src={client.logo} alt={client.id} className='w-[100%] sm:w-[192px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients