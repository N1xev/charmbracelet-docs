import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center min-h-screen  px-4">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Header Section */}
        <div className="mt-12">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white dark:text-slate-900">C</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-light text-slate-900 dark:text-white tracking-tight">
                Charm
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                We make the command line glamorous
              </p>
            </div>
          </div>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Building delightful developer tools and libraries that bring joy to terminal experiences.
            Our open-source projects power modern CLI applications with beautiful interfaces and robust functionality.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/docs/bubbletea"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200 border border-slate-900 dark:border-white"
          >
            View Documentation
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="https://github.com/charmbracelet"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 dark:text-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 border border-slate-300 dark:border-slate-700"
          >
            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-left space-y-4 p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-slate-900 dark:text-white">Bubble Tea</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A powerful little TUI framework for Go. Build interactive terminal applications with ease using The Elm Architecture.
            </p>
            <Link 
              href="/docs/bubbletea" 
              className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white hover:underline"
            >
              Learn more
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="text-left space-y-4 p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-slate-900 dark:text-white">Lip Gloss</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Style definitions for nice terminal layouts. Common and custom components for building beautiful CLIs.
            </p>
            <Link 
              href="/docs/lipgloss" 
              className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white hover:underline"
            >
              Learn more
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Open source software crafted with care by the Charm team and contributors worldwide.
          </p>
        </div>
      </div>
    </main>
  );
}