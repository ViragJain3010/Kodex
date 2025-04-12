export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Built by{' '}
          <a
            href="https://linkedin.com/in/virag-jain"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-500 dark:text-blue-400 hover:underline"
          >
            Virag Jain
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/ViragJain3010/Kodex-Server"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-500 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
