import React from 'react';
const ErrorAlert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className='flex items-center justify-center h-[200]'>
      <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full max-w-md'>
        <strong className='font-bold'>Error!</strong>
        <span className='block sm:inline'>{message}</span>
        <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
          <button
            className='text-red-500 hover:text-red-700'
            onClick={() => window.location.reload()}
          >
            &#x2715;
          </button>
        </span>
      </div>
    </div>
  );
};

export default ErrorAlert;
