export default function Tools() {
  const toolCategories = [
    {
      category: "Version Control",
      description: "Tools for managing code versions and collaboration",
      tools: [
        {
          name: "Git",
          icon: "📝",
          description: "Distributed version control system for tracking changes in source code",
          features: ["Branching", "Merging", "Distributed", "Fast"],
          difficulty: "Beginner",
          website: "https://git-scm.com/",
          type: "Free"
        },
        {
          name: "GitHub",
          icon: "🐙",
          description: "Web-based Git repository hosting service with collaboration features",
          features: ["Repository Hosting", "Pull Requests", "Issues", "Actions"],
          difficulty: "Beginner",
          website: "https://github.com/",
          type: "Freemium"
        }
      ]
    },
    {
      category: "Containerization",
      description: "Tools for packaging and running applications in containers",
      tools: [
        {
          name: "Docker",
          icon: "🐳",
          description: "Platform for developing, shipping, and running applications in containers",
          features: ["Containerization", "Image Building", "Registry", "Compose"],
          difficulty: "Intermediate",
          website: "https://docker.com/",
          type: "Freemium"
        },
        {
          name: "Kubernetes",
          icon: "☸️",
          description: "Container orchestration platform for automating deployment and scaling",
          features: ["Orchestration", "Auto-scaling", "Service Discovery", "Rolling Updates"],
          difficulty: "Advanced",
          website: "https://kubernetes.io/",
          type: "Free"
        }
      ]
    },
    {
      category: "CI/CD",
      description: "Continuous Integration and Continuous Deployment tools",
      tools: [
        {
          name: "Jenkins",
          icon: "🔧",
          description: "Open-source automation server for building CI/CD pipelines",
          features: ["Pipeline as Code", "Plugins", "Distributed Builds", "Integration"],
          difficulty: "Intermediate",
          website: "https://jenkins.io/",
          type: "Free"
        },
        {
          name: "GitHub Actions",
          icon: "⚡",
          description: "GitHub's built-in CI/CD platform for automating workflows",
          features: ["Workflow Automation", "Matrix Builds", "Marketplace", "Integration"],
          difficulty: "Beginner",
          website: "https://github.com/features/actions",
          type: "Freemium"
        },
        {
          name: "GitLab CI",
          icon: "🦊",
          description: "Integrated CI/CD tool built into GitLab",
          features: ["Built-in CI/CD", "Auto DevOps", "Security Scanning", "Monitoring"],
          difficulty: "Intermediate",
          website: "https://about.gitlab.com/",
          type: "Freemium"
        }
      ]
    },
    {
      category: "Infrastructure as Code",
      description: "Tools for managing infrastructure through code",
      tools: [
        {
          name: "Terraform",
          icon: "🏗️",
          description: "Infrastructure as Code tool for building, changing, and versioning infrastructure",
          features: ["Multi-cloud", "State Management", "Plan & Apply", "Modules"],
          difficulty: "Intermediate",
          website: "https://terraform.io/",
          type: "Freemium"
        },
        {
          name: "Ansible",
          icon: "⚙️",
          description: "Automation tool for configuration management and application deployment",
          features: ["Agentless", "Playbooks", "Configuration Management", "Orchestration"],
          difficulty: "Intermediate",
          website: "https://ansible.com/",
          type: "Free"
        }
      ]
    },
    {
      category: "Cloud Platforms",
      description: "Major cloud service providers",
      tools: [
        {
          name: "AWS",
          icon: "☁️",
          description: "Amazon Web Services - comprehensive cloud computing platform",
          features: ["Compute", "Storage", "Database", "Networking", "ML"],
          difficulty: "Intermediate",
          website: "https://aws.amazon.com/",
          type: "Pay-as-go"
        },
        {
          name: "Azure",
          icon: "🔷",
          description: "Microsoft's cloud computing service",
          features: ["Compute", "Analytics", "Storage", "Networking", "Integration"],
          difficulty: "Intermediate",
          website: "https://azure.microsoft.com/",
          type: "Pay-as-go"
        },
        {
          name: "Google Cloud",
          icon: "🌐",
          description: "Google's suite of cloud computing services",
          features: ["Compute", "Storage", "Big Data", "Machine Learning", "API"],
          difficulty: "Intermediate",
          website: "https://cloud.google.com/",
          type: "Pay-as-go"
        }
      ]
    },
    {
      category: "Monitoring & Observability",
      description: "Tools for monitoring applications and infrastructure",
      tools: [
        {
          name: "Prometheus",
          icon: "📊",
          description: "Open-source monitoring and alerting toolkit",
          features: ["Time Series DB", "PromQL", "Alerting", "Service Discovery"],
          difficulty: "Intermediate",
          website: "https://prometheus.io/",
          type: "Free"
        },
        {
          name: "Grafana",
          icon: "📈",
          description: "Analytics and interactive visualization platform",
          features: ["Dashboards", "Alerting", "Data Sources", "Plugins"],
          difficulty: "Beginner",
          website: "https://grafana.com/",
          type: "Freemium"
        },
        {
          name: "ELK Stack",
          icon: "🔍",
          description: "Elasticsearch, Logstash, and Kibana for search and analytics",
          features: ["Log Analysis", "Real-time Search", "Visualization", "Data Ingestion"],
          difficulty: "Advanced",
          website: "https://elastic.co/",
          type: "Freemium"
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Free":
        return "bg-green-100 text-green-800";
      case "Freemium":
        return "bg-blue-100 text-blue-800";
      case "Pay-as-go":
        return "bg-orange-100 text-orange-800";
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
                <a href="/courses" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="/tools" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tools</a>
                <a href="#roadmap" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Tools</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Explore the essential tools that power modern DevOps practices and automation
            </p>
          </div>
        </div>
      </div>

      {/* Tools by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {category.category}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-3">{tool.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tool.difficulty)}`}>
                        {tool.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(tool.type)}`}>
                        {tool.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center"
                    >
                      Visit Site
                    </a>
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tool Comparison Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Not sure which tools to start with? Here are some popular combinations and learning paths.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Beginner Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Perfect for getting started</p>
              <div className="space-y-1 text-sm">
                <div>Git + GitHub</div>
                <div>Docker</div>
                <div>GitHub Actions</div>
                <div>AWS/Azure basics</div>
              </div>
            </div>
            
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Intermediate Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">For growing teams</p>
              <div className="space-y-1 text-sm">
                <div>Kubernetes</div>
                <div>Terraform</div>
                <div>Jenkins/GitLab CI</div>
                <div>Prometheus + Grafana</div>
              </div>
            </div>
            
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Enterprise Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">For large organizations</p>
              <div className="space-y-1 text-sm">
                <div>Multi-cloud setup</div>
                <div>Service Mesh</div>
                <div>Advanced monitoring</div>
                <div>Security tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
