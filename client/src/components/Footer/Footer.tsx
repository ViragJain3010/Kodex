import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by{' '}
          <a
            href="https://linkedin.com/in/virag-jain"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-900 dark:text-blue-400 hover:underline"
          >
            Virag Jain
          </a>
        </p>
      </div>
    </footer>
  );
}
