import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                🚀 DevOps Hub
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/courses" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="/tools" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tools</a>
                <a href="/roadmap" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
                <a href="#resources" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Master <span className="text-blue-600 dark:text-blue-400">DevOps</span>
            <br />
            Build the Future
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn DevOps practices, automation, CI/CD, cloud technologies, and infrastructure as code. 
            Transform your career with hands-on projects and real-world scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 text-center">
              Start Learning
            </a>
            <a href="/roadmap" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-200 text-center">
              View Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beginner Path */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Beginner</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start your DevOps journey with fundamental concepts and basic tools.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
              <li>• Linux Fundamentals</li>
              <li>• Git & Version Control</li>
              <li>• Basic Scripting</li>
              <li>• Introduction to Cloud</li>
            </ul>
            <a href="/courses" className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center">
              Start Path
            </a>
          </div>

          {/* Intermediate Path */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Intermediate</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dive deeper into automation, CI/CD, and infrastructure management.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
              <li>• CI/CD Pipelines</li>
              <li>• Docker & Containers</li>
              <li>• Infrastructure as Code</li>
              <li>• Monitoring & Logging</li>
            </ul>
            <a href="/courses" className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center">
              Start Path
            </a>
          </div>

          {/* Advanced Path */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Advanced</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Master complex architectures, security, and enterprise-level practices.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
              <li>• Kubernetes & Orchestration</li>
              <li>• Security & Compliance</li>
              <li>• Multi-cloud Strategies</li>
              <li>• Performance Optimization</li>
            </ul>
            <a href="/courses" className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center">
              Start Path
            </a>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="tools" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Essential DevOps Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Docker", icon: "🐳" },
              { name: "Kubernetes", icon: "☸️" },
              { name: "Jenkins", icon: "🔧" },
              { name: "AWS", icon: "☁️" },
              { name: "Terraform", icon: "🏗️" },
              { name: "Ansible", icon: "⚙️" },
              { name: "Prometheus", icon: "📊" },
              { name: "Git", icon: "📝" },
              { name: "Grafana", icon: "📈" },
              { name: "Redis", icon: "🔴" },
              { name: "Nginx", icon: "🌐" },
              { name: "MongoDB", icon: "🍃" }
            ].map((tool, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition duration-200">
                  {tool.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition duration-200">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/tools" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
              Explore All Tools
            </a>
          </div>
        </div>
      </section>

      {/* DevOps Roadmap Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Your Learning Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Foundation",
                description: "Master Linux, networking basics, and version control",
                color: "bg-green-500"
              },
              {
                step: "2",
                title: "Programming & Scripting",
                description: "Learn Python, Bash, and automation fundamentals",
                color: "bg-blue-500"
              },
              {
                step: "3",
                title: "Cloud Platforms",
                description: "Get hands-on with AWS, Azure, or Google Cloud",
                color: "bg-purple-500"
              },
              {
                step: "4",
                title: "Containerization",
                description: "Master Docker and container orchestration",
                color: "bg-indigo-500"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/roadmap" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
              View Complete Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Free Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Official docs and guides</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🎥</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Step-by-step video guides</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hands-on Labs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Practice with real scenarios</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Connect with other learners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">🚀 DevOps Hub</div>
              <p className="text-gray-400 text-sm">
                Your comprehensive guide to mastering DevOps practices and tools.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learning Paths</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/courses" className="hover:text-white">Beginner</a></li>
                <li><a href="/courses" className="hover:text-white">Intermediate</a></li>
                <li><a href="/courses" className="hover:text-white">Advanced</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/tools" className="hover:text-white">Docker</a></li>
                <li><a href="/tools" className="hover:text-white">Kubernetes</a></li>
                <li><a href="/tools" className="hover:text-white">AWS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 DevOps Learning Hub. Made with ❤️ for DevOps learners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
