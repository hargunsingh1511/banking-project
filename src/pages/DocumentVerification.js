import React, { Component } from 'react';
import MyDropzone from '../components/MyDropzone';
import { IoDocuments } from "react-icons/io5";
import { handleUpload } from '../utils/uploadUtils';

export class DocumentVerification extends Component {
  render() {
    return (
      <div className=' w-full'>
        <div className=' flex  flex-col max-w-[900px] mx-auto'>
          <div className=' flex flex-col my-4'>
            <div className=' font-bold text-xl'>Document Upload</div>
            <div>We just need a little more information from you</div>
          </div>
          <div className=' p-5 rounded-md flex flex-row bg-slate-100 max-w-[900px] gap-x-4'>
            <div><IoDocuments/></div>
            <div className=' flex flex-col'>
              <div className=' font-bold'>We need some documents from you</div>
              <div>Please upload one document from section below for verification</div>
              <div className=' flex gap-x-2 mt-7 '>
                <div className=' rounded-lg flex flex-col gap-y-3 bg-white p-4'>
                  <div className=' font-semibold'>Identity Verification</div>
                  <ul className=' list-disc px-7'>
                    <li>Uk Passport</li>
                    <li>Non-uk Passport-also provide copy of residence</li>
                    <li>Uk Driving Lisence</li>
                  </ul>
                </div>
                <div  className=' flex rounded-lg flex-col gap-y-4 bg-white p-4'>
                  <div className=' font-semibold'> Nominated Account Verification</div>
                  <ul className=' list-disc px-7'>
                    <li>Bank Statement (Last 3 months)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 shadow-md shadow-slate-300 p-5 flex flex-col rounded-md'>
            <div className='text-lg font-bold'>Identify Verification</div>
            <div className='w-full bg-slate-100 mt-4 h-1 rounded-2xl'></div>
            <div className='mt-4'>Select Document</div>
            <select className='border-slate-200 border-2 rounded-md max-w-96'>
              <option>Uk Passport</option>
              <option>Non-uk Passport-also provide copy of residence</option>
              <option>Uk Driving Lisence</option>
              <option>Bank Statement (Last 3 months)</option>
            </select>
            <div>
              <MyDropzone onUpload={handleUpload} />
            </div>
            <div className='mt-4'>Accepted formats: PDF, JPG, JPEG, PDF</div>
            <div>Max file size: 4.5MB</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentVerification;
