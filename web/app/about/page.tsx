import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-gray-900 dark:to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Discovery IT Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading cybersecurity and IT solutions provider in Kenya, dedicated to protecting businesses 
            from digital threats while enabling growth through technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide comprehensive, innovative cybersecurity and IT solutions that protect businesses 
                from digital threats while enabling them to leverage technology for growth and competitive advantage. 
                We are committed to delivering excellence through cutting-edge technology and exceptional service.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading cybersecurity and IT solutions provider in East Africa, recognized for our 
                innovation, reliability, and commitment to client success. We envision a future where businesses 
                can operate securely in the digital landscape without fear of cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2014, Discovery IT Solutions emerged from a vision to bridge the cybersecurity gap 
                in the Kenyan market. Our founders, experienced IT professionals, recognized the growing need 
                for comprehensive digital security solutions as businesses increasingly embraced digital transformation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Starting as a small team of cybersecurity experts, we have grown into a leading provider of 
                IT solutions, serving over 500 clients across various industries. Our journey has been marked 
                by continuous innovation, strategic partnerships, and an unwavering commitment to client success.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we leverage cutting-edge technologies including Jac Language and Jaseci Runtime to 
                deliver graph-based security solutions that provide unparalleled visibility and control 
                over digital assets.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2014</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Company Founded</h3>
                    <p className="text-gray-600 dark:text-gray-300">Started with a vision to secure Kenya's digital future</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2018</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Major Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300">Expanded services to include cloud solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Innovation Leader</h3>
                    <p className="text-gray-600 dark:text-gray-300">Launched advanced Jac-powered security platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize security in every solution we deliver, ensuring robust protection against evolving threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Client-Centric</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our clients' success is our success. We build lasting partnerships through exceptional service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace cutting-edge technologies to provide innovative solutions for complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Discovery IT?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What sets us apart in the cybersecurity landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Local Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Deep understanding of the Kenyan business environment and regulatory requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Round-the-clock monitoring and support to ensure your systems are always protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Over 10 years of experience protecting businesses across various industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leveraging advanced technologies like Jac Language for superior security solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Solutions that grow with your business, from startups to enterprise organizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance Ready</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ensuring your business meets all relevant cybersecurity and data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}