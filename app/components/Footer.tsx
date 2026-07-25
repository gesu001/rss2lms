export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Student:</strong> Ge Su
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Student ID:</strong> 21724222
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 RSS2LMS Assessment 1
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Frontend Design & Usability
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
