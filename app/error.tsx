'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Something went wrong
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            We apologize for the inconvenience. An unexpected error occurred.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <div className="text-sm text-zinc-500 dark:text-zinc-500">
            <p>If the problem persists, please contact support.</p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-3 bg-zinc-100 dark:bg-zinc-800 rounded text-xs overflow-auto">
                  {error.message}
                  {error.stack && (
                    <>
                      {'\n\n'}
                      {error.stack}
                    </>
                  )}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}