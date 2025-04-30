'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          An error occurred. Please try again later.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 