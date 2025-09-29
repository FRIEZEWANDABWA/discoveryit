import Link from 'next/link'
import { Shield, Server, Monitor, Camera, Network, Cloud, Headphones, Settings, Users, Zap } from 'lucide-react'

export default function Solutions() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/milan-malkomes-a40akJxBhT8-unsplash.jpg')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Enterprise Solutions for you
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors text-lg"
            >
              <span>Schedule Your Live Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600">Discovery IT Solutions LTD</Link>
            <span className="mx-2">&gt;</span>
            <span>Enterprise Solutions</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Discovery I.T Solutions provides a variety of backup and storage services to businesses and institutions. 
              A variety of file and data backup solutions are available for desktop computers and servers. We have a 
              disk replication service as a backup and recovery solution that backs up data from PCs and servers to 
              either online or offline disaster recovery backups.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Its storage portfolio covers everything from software-defined to all-flash to spinning disk and tape. 
              Servers include tower, rack and blade, as well as integrated systems, while networking includes switches, 
              routers and access points.
            </p>
            <div className="text-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-block transition-colors"
              >
                Get a free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Laptops, Desktops & Servers */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Laptops, Desktops & Servers
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Dell | HP | Lenovo</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We offer a wide range of Dell, HP and Lenovo laptops, desktop computers, servers and accessories, 
                such as monitors, keyboards, mice, printers, scanners, speakers, headphones, webcams, and more. 
                Whether you need a powerful gaming PC, a sleek portable laptop, or a reliable and durable workstation, 
                we have it all.
              </p>
            </div>

            {/* Switches and Routers */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6">
                <Network className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Switches and Routers
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4">Cisco Router ISR 2900 Series</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To meet today's medium-sized branches, Cisco 2900 Series Integrated Services Routers (ISR) are designed. 
                The 2900 Series can offer 2 or 3 GE ports with 1 SFP ports, 4 EHWIC Slots, and can deliver virtualized 
                applications and highly secure collaboration through the widest array of WAN connectivity at high performance 
                that offers concurrent services at up to 75 Mbps.
              </p>
            </div>

            {/* CCTV Surveillance */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                CCTV Surveillance Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                A good business deserves good security. You've built a successful company with a strong reputation. 
                Now it's up to us to keep it safe.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our experienced team ensures that every system and service from us delivers on its respective promise. 
                From a free floor-plan customization to free lifetime customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Managed IT services will help you succeed. Let's get started
          </h2>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-block transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Comprehensive IT Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">COMPREHENSIVE IT SERVICES INCLUDE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Network</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cloud services are network dependent, which is why Discovery network management and monitoring services 
                have become critical to IT.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service desk</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discovery's 24/7 support is about maximising service efficiency, resolving problems and driving 
                continuous service improvement.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discovery ensures your IT infrastructure is always optimised to support the stable and highly 
                available services organisations demand.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Endpoint management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Client and server endpoints are managed as one estate, ensuring security and stability while 
                maximising uptime and employee productivity.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Applications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discovery supports Software as well as on-premise deployments, ensuring applications are always 
                optimised for the best possible user experience.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Managed services plus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discovery provides advanced management tools to clients who want to take their IT Service Management 
                to a higher level.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}