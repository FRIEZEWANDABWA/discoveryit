import { Shield, Users, Globe, Lock, Server, Cloud, Database, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Policy Review", "Compliance Auditing"]
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic IT planning and digital transformation guidance for your business growth.",
      features: ["IT Strategy Development", "Digital Transformation", "Technology Roadmapping", "Risk Assessment"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud migration and infrastructure management for scalable business operations.",
      features: ["Cloud Migration", "Infrastructure Management", "Backup Solutions", "Disaster Recovery"]
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Advanced authentication and authorization systems to protect your digital assets.",
      features: ["Multi-Factor Authentication", "Role-Based Access", "Identity Management", "Single Sign-On"]
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Comprehensive network protection including firewalls, monitoring, and threat detection.",
      features: ["Firewall Management", "Network Monitoring", "Intrusion Detection", "Traffic Analysis"]
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Secure your sensitive data with encryption, backup, and compliance solutions.",
      features: ["Data Encryption", "Backup & Recovery", "Data Loss Prevention", "Compliance Management"]
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Protect your mobile workforce with comprehensive mobile device management.",
      features: ["Mobile Device Management", "App Security", "Remote Wipe", "Policy Enforcement"]
    },
    {
      icon: Globe,
      title: "Web Security",
      description: "Secure your web applications and online presence from cyber threats.",
      features: ["Web Application Firewall", "SSL/TLS Management", "DDoS Protection", "Security Monitoring"]
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-gray-900 dark:to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive cybersecurity and IT solutions tailored to protect and empower your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we deliver exceptional cybersecurity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your current security posture and identify potential vulnerabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We develop a customized security strategy tailored to your business needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deploy and configure security solutions with minimal business disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide ongoing monitoring and support to ensure continuous protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your cybersecurity needs and get a customized solution.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-block transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}