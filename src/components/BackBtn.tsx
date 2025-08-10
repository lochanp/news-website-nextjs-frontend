'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackButton({ className = '', children }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`mb-8 cursor-pointer inline-flex items-center justify-center w-10 h-10 text-gray-00 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-md ${className}`}
    >
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
      </svg>
      <span className='sr-only'>Go back</span>
    </button>
  );
}
