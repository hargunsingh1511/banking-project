import React from 'react';

function AccountInfo({ info }) {
  return (
    <div className="account-info px-32 flex flex-col ">
      <button  onClick={() => window.history.back()} className=" w-fit text-gray-400">← Go Back</button>

      <div className=' flex mt-6  gap-7'>
        <div className=' gap-8 items-center bg-slate-700 h-48 px-12 rounded-lg flex'>
        <div>
            <p className='text-gray-400 pb-2'>IFSC</p>
            <p className=' font-bold'>{info.ifsc}</p>
        </div>
        <div>
        <p className='text-gray-400 pb-2'>Account number</p>
        <p className=' font-bold'>{info.acc_no}</p>
        </div>
         </div>
         <div className=' gap-8 items-center bg-purple-700 h-48 px-12 rounded-lg flex'>
        <div>
            <p className='text-gray-400 pb-2'>Available balance</p>
            <p className=' font-bold'>${info.total_bal}</p>
        </div>
        <div>
        <p className='text-gray-400 pb-2'>Account Type</p>
        <p className=' font-bold'>{info.type}</p>
        </div>
         </div>
         <div className=' gap-8 items-center bg-slate-700 h-48 px-12 rounded-lg flex'>
        <div>
            <p className='text-gray-400 pb-2'>Gross Interest</p>
            <p className=' font-bold'>{info.gross_interest}</p>
        </div>
        <div>
        <p className='text-gray-400 pb-2'>Aer Interest</p>       
        <p className=' font-bold'>{info.aer_interest}</p>
        </div>
         </div>
        <div></div>
      </div>
      
    </div>
  );
}

export default AccountInfo;
