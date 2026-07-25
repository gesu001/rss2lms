export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-white dark:bg-black">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 to-purple-800 dark:from-purple-900 dark:to-purple-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About RSS2LMS</h1>
          <p className="text-lg text-purple-100">
            Understanding the project, assessment scope, and future development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Student Information */}
        <div className="about-focus-card mb-12 p-6 bg-purple-50 dark:bg-slate-800 rounded-lg border-l-4 border-purple-600 dark:border-purple-400">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Student Information</h2>
          <dl className="space-y-3">
            <div className="flex">
              <dt className="font-semibold text-gray-700 dark:text-gray-300 w-32">Name:</dt>
              <dd className="text-gray-700 dark:text-gray-300">Ge Su</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold text-gray-700 dark:text-gray-300 w-32">Student ID:</dt>
              <dd className="text-gray-700 dark:text-gray-300">21724222</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold text-gray-700 dark:text-gray-300 w-32">Subject:</dt>
              <dd className="text-gray-700 dark:text-gray-300">2026-CSE5006-T4-W - Cloud-Base Web Application</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold text-gray-700 dark:text-gray-300 w-32">Assessment:</dt>
              <dd className="text-gray-700 dark:text-gray-300">Assessment 1 - Frontend Design & Usability</dd>
            </div>
          </dl>
        </div>

        {/* Video Tutorial */}
        <div className="mb-12 p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📹 How to Use RSS2LMS - Video Tutorial
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Watch this walkthrough to see how to navigate and use the RSS2LMS application, including theme switching, menu navigation, and key features.
          </p>
          
          {/* Video Placeholder */}
          <div className="relative w-full pt-[56.25%] bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg border-2 border-dashed border-gray-400 dark:border-gray-600">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-950">
              <div className="text-center text-white p-6">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2">Video Coming Soon</h3>
                <p className="text-gray-300 mb-4">
                  Student: Ge Su | Student ID: 21724222
                </p>
                <p className="text-gray-400">
                  Replace this placeholder with your video once recorded and uploaded to YouTube, Loom, or Vimeo.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            <strong>Student:</strong> Ge Su | <strong>Student ID:</strong> 21724222 | <strong>Subject:</strong> Cloud-Base Web Application | <strong>Assessment 1:</strong> Frontend Design & Usability
          </p>
          
          <div className="about-video-note mt-4 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-200 dark:border-purple-700">
            <p className="about-video-note-text text-sm text-purple-900 dark:text-purple-100">
              <strong>Note:</strong> This video placeholder will be replaced with your actual demo video. 
              Upload your 3-8 minute walkthrough to YouTube, Loom, or Vimeo and update the iframe src.
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              <strong>RSS2LMS</strong> is an application that bridges the gap between RSS (Really Simple Syndication) feed content and Learning Management Systems (LMS).
              The goal is to enable educators to easily aggregate content from multiple sources and deliver it to learners in a
              unified, intuitive interface.
            </p>
            <p>
              RSS allows content creators to publish updates that can be automatically aggregated by readers.
              By integrating RSS feeds with LMS, we create a seamless content delivery pipeline that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Aggregates content from multiple educational sources</li>
              <li>Provides learners with personalized content feeds</li>
              <li>Integrates with existing learning platforms</li>
              <li>Enables content discovery and organization</li>
              <li>Supports different learning styles and preferences</li>
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• React 19 with TypeScript</li>
                <li>• Next.js 16+ (App Router)</li>
                <li>• Tailwind CSS 4 for styling</li>
                <li>• Context API for state management</li>
                <li>• Local Storage for persistence</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Design & UX</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Responsive mobile-first design</li>
                <li>• WCAG accessibility compliance</li>
                <li>• Semantic HTML structure</li>
                <li>• Keyboard navigation support</li>
                <li>• Light/Dark theme system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next Step</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The immediate next step is to implement the backend RSS service: accept and validate feed URLs,
            parse and normalize feed items, and expose them through API endpoints for this frontend. After that,
            the project will add LMS synchronization and persistent storage so real educational content can flow
            from RSS sources into the learner interface.
          </p>
        </div>

      </section>
    </div>
  );
}

const features = [
  {
    id: 1,
    title: '📱 Responsive Design',
    description:
      'Seamless experience across mobile, tablet, and desktop devices with mobile-first approach.',
  },
  {
    id: 2,
    title: '🎨 Light & Dark Themes',
    description:
      'Easy theme switching with automatic detection and persistent user preferences.',
  },
  {
    id: 3,
    title: '🧭 Intuitive Navigation',
    description:
      'Hamburger menu for mobile, clear breadcrumbs, and organized page structure.',
  },
  {
    id: 4,
    title: '♿ Accessibility',
    description:
      'WCAG compliance with semantic HTML, ARIA labels, and keyboard navigation support.',
  },
  {
    id: 5,
    title: '📖 Component Architecture',
    description:
      'Reusable, modular components following React best practices for maintainability.',
  },
  {
    id: 6,
    title: '💾 Local Storage',
    description:
      'User preferences and theme selection persisted using browser local storage.',
  },
];
