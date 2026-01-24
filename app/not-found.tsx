'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-zinc-300 dark:text-zinc-700 mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Page Not Found
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Sorry, the page you&#39;re looking for doesn&#39;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            If you believe this is an error, please{' '}
            <a
              href="mailto:contact@deronkao.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}