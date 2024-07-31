import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoPlus } from 'react-icons/go';

function MyDropzone({ onUpload }) {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setAcceptedFiles(acceptedFiles);
    setFileRejections(rejectedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
      'application/pdf': []
    },
    maxSize: 4.5 * 1024 * 1024 // 4.5 MB in bytes
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className='flex flex-col justify-center items-center cursor-pointer rounded-lg border-dotted border-2 min-h-44 bg-slate-100 mt-4 border-black'
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <div className='bg-white p-2 rounded-full'>
              <GoPlus />
            </div>
            <div className='text-xl font-bold'>Select a Document</div>
            <div>or drag and drop into the box</div>
          </>
        )}
      </div>
      {fileRejections.length > 0 && (
        <div className='mt-4 text-red-500'>
          {fileRejections.map(({ file, errors }) => (
            <div key={file.path}>
              <div>{file.name}:</div>
              {errors.map(e => (
                <div key={e.code}>
                  {e.code === 'file-too-large' && <div>File is too large (max 4.5 MB).</div>}
                  {e.code === 'file-invalid-type' && <div>File type is not supported.</div>}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {acceptedFiles.length > 0 && (
        <div className='mt-4'>
          <h4 className='text-xl font-bold'>Uploaded Files</h4>
          <ul>
            {acceptedFiles.map(file => (
              <li key={file.path}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className='mt-4 max-w-28 rounded-lg text-red-600 border-red-600 border-2 py-2 px-4'
        onClick={() => onUpload(acceptedFiles)}
      >
        Upload
      </button>
    </div>
  );
}

export default MyDropzone;
