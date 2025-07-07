export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Linux Fundamentals for DevOps",
      level: "Beginner",
      duration: "4 weeks",
      description: "Master Linux command line, file systems, processes, and permissions essential for DevOps.",
      skills: ["Command Line", "File Systems", "Process Management", "Shell Scripting"],
      icon: "🐧"
    },
    {
      id: 2,
      title: "Git & Version Control Mastery",
      level: "Beginner",
      duration: "3 weeks",
      description: "Learn Git workflows, branching strategies, and collaboration techniques.",
      skills: ["Git Basics", "Branching", "Merging", "Collaboration"],
      icon: "📝"
    },
    {
      id: 3,
      title: "Docker Containerization",
      level: "Intermediate",
      duration: "5 weeks",
      description: "Build, deploy, and manage containers with Docker and Docker Compose.",
      skills: ["Docker Basics", "Dockerfile", "Docker Compose", "Container Security"],
      icon: "🐳"
    },
    {
      id: 4,
      title: "Kubernetes Orchestration",
      level: "Advanced",
      duration: "8 weeks",
      description: "Deploy and manage containerized applications at scale with Kubernetes.",
      skills: ["Pods", "Services", "Deployments", "Helm", "Monitoring"],
      icon: "☸️"
    },
    {
      id: 5,
      title: "CI/CD with Jenkins",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Build automated pipelines for continuous integration and deployment.",
      skills: ["Pipeline Creation", "Testing", "Deployment", "Automation"],
      icon: "🔧"
    },
    {
      id: 6,
      title: "Infrastructure as Code with Terraform",
      level: "Intermediate",
      duration: "5 weeks",
      description: "Manage infrastructure using code with Terraform and best practices.",
      skills: ["Terraform Basics", "State Management", "Modules", "Cloud Resources"],
      icon: "🏗️"
    },
    {
      id: 7,
      title: "AWS Cloud for DevOps",
      level: "Intermediate",
      duration: "7 weeks",
      description: "Learn AWS services essential for DevOps practices and cloud deployment.",
      skills: ["EC2", "S3", "Lambda", "CloudFormation", "IAM"],
      icon: "☁️"
    },
    {
      id: 8,
      title: "Monitoring & Observability",
      level: "Advanced",
      duration: "6 weeks",
      description: "Implement comprehensive monitoring with Prometheus, Grafana, and ELK stack.",
      skills: ["Prometheus", "Grafana", "Elasticsearch", "Logging", "Alerting"],
      icon: "📊"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                🚀 DevOps Hub
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/courses" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="#tools" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tools</a>
                <a href="#roadmap" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Courses</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Master DevOps with our comprehensive, hands-on courses designed for all skill levels
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            All Levels
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Beginner
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Intermediate
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            Advanced
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Duration: {course.duration}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                    Start Course
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your DevOps Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who have transformed their careers with our comprehensive DevOps courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200">
              Browse All Courses
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
