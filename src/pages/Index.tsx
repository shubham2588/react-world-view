
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'Express.js', icon: Server, category: 'Backend' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Node.js', icon: Server, category: 'Backend' },
    { name: 'JavaScript', icon: Code, category: 'Language' },
    { name: 'TypeScript', icon: Code, category: 'Language' },
    { name: 'REST APIs', icon: Globe, category: 'Backend' },
    { name: 'Git', icon: Github, category: 'Tools' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and reporting.',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Crafting scalable web applications with the MERN stack. 
            Passionate about creating seamless user experiences and robust backend solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-slate-300 mb-6">
                  I'm a passionate full-stack developer specializing in the MERN stack. With a strong foundation in 
                  modern web technologies, I create dynamic, responsive, and user-friendly applications.
                </p>
                <p className="text-lg text-slate-300 mb-6">
                  My expertise spans from crafting intuitive frontend interfaces with React to building robust 
                  backend APIs with Node.js and Express, all while leveraging MongoDB for efficient data management.
                </p>
                <p className="text-lg text-slate-300">
                  I'm constantly learning and adapting to new technologies, always striving to write clean, 
                  maintainable code and deliver exceptional user experiences.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>🚀 3+ years of MERN stack development</li>
                  <li>💻 20+ projects completed</li>
                  <li>🎯 Focus on scalable, maintainable code</li>
                  <li>📱 Responsive design advocate</li>
                  <li>🔧 DevOps and deployment experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-800/50 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <p className="text-slate-400 text-sm">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-700/50 border-slate-600 hover:border-blue-400 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video bg-slate-600 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-slate-500 text-slate-300 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
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
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Full Stack Developer Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
