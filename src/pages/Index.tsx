import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'MongoDB', icon: Database, category: 'Database', level: 'Advanced' },
    { name: 'Express.js', icon: Server, category: 'Backend', level: 'Advanced' },
    { name: 'React', icon: Code, category: 'Frontend', level: 'Expert' },
    { name: 'Node.js', icon: Server, category: 'Backend', level: 'Advanced' },
    { name: 'JavaScript', icon: Code, category: 'Language', level: 'Expert' },
    { name: 'TypeScript', icon: Code, category: 'Language', level: 'Advanced' },
    { name: 'REST APIs', icon: Globe, category: 'Backend', level: 'Advanced' },
    { name: 'Git & GitHub', icon: Github, category: 'Tools', level: 'Advanced' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with secure payment processing, real-time inventory management, and comprehensive admin dashboard. Implemented user authentication, order tracking, and automated email notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      live: '#',
      highlight: 'Increased conversion rate by 35%'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'Team productivity application with live document editing, video conferencing integration, and project management features. Built with Socket.io for real-time updates.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      github: '#',
      live: '#',
      highlight: 'Used by 500+ teams daily'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Business intelligence platform with interactive charts, automated reporting, and data visualization tools. Integrated with multiple data sources and APIs.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      github: '#',
      live: '#',
      highlight: 'Processes 1M+ data points'
    }
  ];

  const experience = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices.',
      achievements: ['Reduced load times by 40%', 'Led team of 5 developers', 'Deployed 15+ production applications']
    },
    {
      position: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: ['Built 10+ client projects', 'Improved code quality by 60%', 'Reduced bug reports by 45%']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4 text-blue-400 font-semibold text-lg">👋 Hello, I'm</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            Senior Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specializing in MERN stack development with 4+ years of experience building scalable, 
            user-centric web applications. Passionate about clean code and innovative solutions.
          </p>
          <div className="flex justify-center items-center gap-4 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for hire</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate Senior Full Stack Developer with over 4 years of experience specializing in the MERN stack. 
                  I have a proven track record of delivering high-quality, scalable web applications that drive business growth 
                  and enhance user experiences.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  My expertise spans across modern JavaScript frameworks, cloud technologies, and agile development practices. 
                  I excel at translating complex business requirements into efficient, maintainable code while leading 
                  cross-functional teams to success.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I'm passionate about staying current with emerging technologies and best practices, always looking for ways 
                  to optimize performance and improve development workflows.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Professional Highlights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🚀 4+ years of MERN stack development</li>
                  <li>💻 30+ successful projects delivered</li>
                  <li>👥 Led development teams of 5+ developers</li>
                  <li>📈 Improved application performance by up to 40%</li>
                  <li>🎯 Expert in agile development methodologies</li>
                  <li>🔧 AWS and cloud deployment experience</li>
                  <li>📱 Responsive design and mobile-first approach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-blue-400 font-semibold text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-gray-400 font-medium">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-200">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-gray-700 border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">{skill.category}</p>
                  <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                    {skill.level}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.highlight}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm currently available for new opportunities. Let's discuss how I can help bring your next project to life 
              with innovative solutions and clean, scalable code.
            </p>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to hire? Let's connect!</h3>
              <p className="text-gray-300 mb-4">
                📧 john.doe@email.com | 📱 (555) 123-4567
              </p>
              <p className="text-sm text-gray-400">
                Response time: Usually within 24 hours
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            © 2024 John Doe - Senior Full Stack Developer
          </p>
          <p className="text-blue-200 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
