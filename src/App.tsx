import React, { useState } from 'react';
import { Github, Linkedin, Mail as EmailIcon, BookOpen, Briefcase, Award, Code, ChevronDown, ChevronUp, FileDown } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/gowtham-a-8b2310249/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={24} />,
      url: 'https://github.com/GTGowtham',
      label: 'GitHub',
    },
    {
      icon: <EmailIcon size={24} />,
      url: 'mailto:gowthamayyappan47@gmail.com',
      label: 'Email',
    },
  ];

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const SectionHeader = ({ title, icon, section }: { title: string; icon: React.ReactNode; section: string }) => (
    <button
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      </div>
      {activeSection === section ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Gowtham A</h1>
        <nav className="space-x-6">
          <a href="#about-me" className="text-blue-400 hover:text-blue-600 transition duration-300">
            About Me
          </a>
          <a href="#contact" className="text-blue-400 hover:text-blue-600 transition duration-300">
            Contact
          </a>
          <a 
            href="/Gowtham_resume.pdf" 
            download
            className="text-blue-400 hover:text-blue-600 transition duration-300 inline-flex items-center gap-2"
          >
            Resume <FileDown size={18} />
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={'/profile.jpg'}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl font-bold mb-4">Gowtham A</h1>
          <p className="text-xl text-gray-300 mb-8">AI & ML Enthusiast</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group"
                aria-label={link.label}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* About Me Section */}
          <section id="about-me" className="bg-gray-800 p-8 rounded-lg shadow-xl mt-16 space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">About Me</h2>

            {/* Introduction */}
            <div className="space-y-4">
              <SectionHeader title="Introduction" icon={<BookOpen size={24} className="text-blue-400" />} section="intro" />
              {activeSection === 'intro' && (
                <div className="p-4 bg-gray-750 rounded-lg animate-fadeIn">
                  <p className="text-gray-300 leading-relaxed">
                    Hello! I'm <span className="font-semibold text-blue-400">Gowtham A</span>, a passionate and driven 
                    <span className="font-semibold text-blue-400"> Artificial Intelligence and Machine Learning enthusiast</span>. 
                    As a final-year B.Tech student specializing in 
                    <span className="font-semibold text-blue-400"> Artificial Intelligence and Data Science</span>, 
                    I am committed to harnessing the power of data to design intelligent systems and solve real-world challenges. 
                    My approach combines innovation, precision, and a deep understanding of emerging technologies to deliver impactful solutions.
                  </p>
                </div>
              )}
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <SectionHeader title="Expertise" icon={<Code size={24} className="text-blue-400" />} section="expertise" />
              {activeSection === 'expertise' && (
                <div className="p-4 bg-gray-750 rounded-lg animate-fadeIn">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I specialize in Machine Learning, Data Analysis, and Data Visualization, with hands-on expertise in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li>Python (NumPy, Pandas, Matplotlib, Seaborn)</li>
                    <li>Power BI and Tableau for crafting insightful dashboards and reports</li>
                    <li>Exploratory Data Analysis (EDA) to uncover meaningful insights</li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['EDA', 'Machine Learning', 'Power BI', 'Python', 'Tableau'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <SectionHeader title="Projects" icon={<Briefcase size={24} className="text-blue-400" />} section="projects" />
              {activeSection === 'projects' && (
                <div className="p-4 bg-gray-750 rounded-lg animate-fadeIn">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Lung Cancer Detection System</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Leveraged deep learning using ResNet50 architecture for cancer classification</li>
                        <li>Developed a Streamlit-based user interface for seamless interaction</li>
                        <li>Implemented user registration with SQLite database for patient data management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Taxi Price Prediction System</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Built ML model for dynamic taxi fare prediction</li>
                        <li>Engineered features from historical trip data</li>
                        <li>Deployed interactive Streamlit web application</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <SectionHeader title="Certifications" icon={<Award size={24} className="text-blue-400" />} section="certs" />
              {activeSection === 'certs' && (
                <div className="p-4 bg-gray-750 rounded-lg animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Data Analysis using Python – Coursera, 2022',
                      'Excel Basics for Data Analysis – Coursera, 2022',
                      'Fundamentals of Deep Learning – NVIDIA, 2021',
                      'Supervised Learning – Coursera (Andrew Ng), 2023'
                    ].map((cert, index) => (
                      <div key={index} className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collaboration */}
            <div className="mt-8 p-6 bg-blue-600 bg-opacity-20 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Let's Collaborate!</h3>
              <p className="text-gray-300">
                I thrive in collaborative environments where technology and creativity intersect. 
                With a keen eye for innovation and a results-oriented mindset, I aim to develop 
                cutting-edge solutions that positively impact lives. Let's connect and transform ideas into reality!
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-800 p-8 rounded-lg shadow-xl mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <a
                href="mailto:gowthamayyappan47@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <EmailIcon size={24} />
                <span className="font-semibold">gowthamayyappan47@gmail.com</span>
              </a>
              <p className="mt-4 text-gray-300">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;