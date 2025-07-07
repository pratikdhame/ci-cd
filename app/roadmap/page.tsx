export default function Roadmap() {
  const roadmapSteps = [
    {
      phase: "Foundation",
      duration: "2-3 months",
      description: "Build your fundamental knowledge and get comfortable with basic tools",
      color: "bg-green-500",
      topics: [
        {
          title: "Linux Administration",
          skills: ["Command line basics", "File system navigation", "Process management", "User permissions", "Shell scripting"],
          timeEstimate: "3-4 weeks",
          resources: ["Linux Journey", "OverTheWire Bandit", "Linux Academy"]
        },
        {
          title: "Networking Fundamentals", 
          skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "Load balancing", "Firewalls"],
          timeEstimate: "2-3 weeks",
          resources: ["Computer Networking course", "Cisco networking basics"]
        },
        {
          title: "Version Control",
          skills: ["Git basics", "Branching strategies", "Merge conflicts", "GitHub/GitLab"],
          timeEstimate: "2 weeks",
          resources: ["Pro Git book", "GitHub Learning Lab", "Atlassian Git tutorials"]
        }
      ]
    },
    {
      phase: "Programming & Scripting",
      duration: "2-3 months", 
      description: "Learn programming languages essential for automation and DevOps",
      color: "bg-blue-500",
      topics: [
        {
          title: "Python for DevOps",
          skills: ["Python basics", "Libraries (requests, boto3)", "API integration", "Automation scripts"],
          timeEstimate: "4-6 weeks",
          resources: ["Automate the Boring Stuff", "Python for DevOps book", "Real Python"]
        },
        {
          title: "Bash Scripting",
          skills: ["Advanced bash", "Text processing", "System automation", "Error handling"],
          timeEstimate: "2-3 weeks", 
          resources: ["Advanced Bash-Scripting Guide", "ShellCheck", "Bash Academy"]
        },
        {
          title: "YAML & JSON",
          skills: ["Data formats", "Configuration files", "API responses", "Template engines"],
          timeEstimate: "1 week",
          resources: ["YAML documentation", "JSON tutorials", "Jinja2 templating"]
        }
      ]
    },
    {
      phase: "Cloud Fundamentals",
      duration: "2-3 months",
      description: "Master cloud platforms and their core services",
      color: "bg-purple-500", 
      topics: [
        {
          title: "Choose a Cloud Provider",
          skills: ["AWS/Azure/GCP basics", "Compute services", "Storage options", "Networking"],
          timeEstimate: "6-8 weeks",
          resources: ["AWS Free Tier", "Azure Free Account", "GCP Free Tier", "A Cloud Guru"]
        },
        {
          title: "Infrastructure Basics",
          skills: ["Virtual machines", "Load balancers", "Databases", "Security groups"],
          timeEstimate: "3-4 weeks",
          resources: ["Cloud provider documentation", "Hands-on labs"]
        }
      ]
    },
    {
      phase: "Containerization",
      duration: "2-3 months",
      description: "Learn to containerize applications and manage containers",
      color: "bg-indigo-500",
      topics: [
        {
          title: "Docker Mastery",
          skills: ["Docker basics", "Dockerfile best practices", "Multi-stage builds", "Docker Compose"],
          timeEstimate: "4-5 weeks",
          resources: ["Docker official docs", "Docker Deep Dive book", "Play with Docker"]
        },
        {
          title: "Container Orchestration",
          skills: ["Kubernetes basics", "Pods and services", "Deployments", "ConfigMaps & Secrets"],
          timeEstimate: "6-8 weeks",
          resources: ["Kubernetes docs", "Kubernetes Up & Running", "Katacoda scenarios"]
        }
      ]
    },
    {
      phase: "CI/CD Pipelines",
      duration: "2-3 months",
      description: "Build automated testing and deployment pipelines",
      color: "bg-pink-500",
      topics: [
        {
          title: "CI/CD Concepts",
          skills: ["Pipeline design", "Testing strategies", "Build automation", "Deployment patterns"],
          timeEstimate: "2 weeks",
          resources: ["Continuous Delivery book", "CI/CD best practices"]
        },
        {
          title: "CI/CD Tools",
          skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"],
          timeEstimate: "6-8 weeks",
          resources: ["Tool-specific documentation", "Hands-on projects"]
        }
      ]
    },
    {
      phase: "Infrastructure as Code",
      duration: "2-3 months",
      description: "Manage infrastructure through code and automation",
      color: "bg-yellow-500",
      topics: [
        {
          title: "Terraform",
          skills: ["HCL syntax", "State management", "Modules", "Workspaces", "Best practices"],
          timeEstimate: "5-6 weeks",
          resources: ["Terraform docs", "Terraform Up & Running", "HashiCorp Learn"]
        },
        {
          title: "Configuration Management",
          skills: ["Ansible basics", "Playbooks", "Roles", "Inventory management"],
          timeEstimate: "3-4 weeks",
          resources: ["Ansible docs", "Ansible for DevOps book"]
        }
      ]
    },
    {
      phase: "Monitoring & Security",
      duration: "2-3 months",
      description: "Implement observability and security best practices",
      color: "bg-red-500",
      topics: [
        {
          title: "Monitoring & Observability",
          skills: ["Prometheus", "Grafana", "ELK Stack", "Alerting", "SLA/SLI/SLO"],
          timeEstimate: "5-6 weeks", 
          resources: ["Prometheus docs", "Grafana tutorials", "Observability Engineering book"]
        },
        {
          title: "Security & Compliance",
          skills: ["Security scanning", "Secrets management", "Network security", "Compliance frameworks"],
          timeEstimate: "3-4 weeks",
          resources: ["OWASP guidelines", "Security tools documentation"]
        }
      ]
    }
  ];

  const milestones = [
    {
      title: "First 3 months",
      description: "Complete foundation and start with cloud basics",
      achievements: ["Linux proficiency", "Git workflow mastery", "Basic cloud knowledge"]
    },
    {
      title: "6 months",
      description: "Build and deploy your first containerized application",
      achievements: ["Docker expertise", "CI/CD pipeline creation", "Cloud deployment"]
    },
    {
      title: "9 months", 
      description: "Implement Infrastructure as Code for a complete project",
      achievements: ["Terraform proficiency", "Kubernetes deployment", "Monitoring setup"]
    },
    {
      title: "12 months",
      description: "Master advanced DevOps practices and security",
      achievements: ["Production-ready deployments", "Advanced monitoring", "Security implementation"]
    }
  ];

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
                <a href="/courses" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="/tools" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tools</a>
                <a href="/roadmap" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Learning Roadmap</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Your complete guide to becoming a DevOps engineer in 12 months
            </p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Learning Timeline Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{milestone.description}</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  {milestone.achievements.map((achievement, i) => (
                    <li key={i}>✓ {achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Roadmap */}
        <div className="space-y-12">
          {roadmapSteps.map((step, stepIndex) => (
            <div key={stepIndex} className="relative">
              {/* Progress Line */}
              {stepIndex < roadmapSteps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gray-300 dark:bg-gray-600 z-0"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Step Number */}
                <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg z-10 flex-shrink-0`}>
                  {stepIndex + 1}
                </div>
                
                {/* Step Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.phase}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        📅 {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Topics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {step.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          ⏱️ {topic.timeEstimate}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Skills to Learn:
                          </h4>
                          <ul className="space-y-1">
                            {topic.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="text-green-500 mr-2 mt-0.5">•</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Recommended Resources:
                          </h4>
                          <div className="space-y-1">
                            {topic.resources.map((resource, resourceIndex) => (
                              <span key={resourceIndex} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs mr-1 mb-1">
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            💡 Learning Tips for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">🎯 Practice Hands-On</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Build real projects and labs. Theory is important, but practical experience is what makes you job-ready.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">🏗️ Build a Portfolio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Document your projects on GitHub. Show potential employers your automation scripts and infrastructure code.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">👥 Join Communities</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Engage with DevOps communities on Discord, Reddit, and professional networks for support and networking.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            This roadmap will guide you from beginner to DevOps engineer. Remember, consistency is key - dedicate time daily to practice and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
              Start with Foundation
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-200">
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
