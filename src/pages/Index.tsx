import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "JavaScript", icon: Code, category: "Language", level: "Advanced" },
    { name: "Node.js", icon: Server, category: "Backend", level: "Advanced" },
    { name: "React", icon: Code, category: "Frontend", level: "Advanced" },
    { name: "Redux", icon: Code, category: "Frontend", level: "Expert" },
    {
      name: "Express.js",
      icon: Server,
      category: "Backend",
      level: "Advanced",
    },
    {
      name: "MongoDB",
      icon: Database,
      category: "Database",
      level: "Intermediate",
    },
    {
      name: "DynamoDB",
      icon: Database,
      category: "Database",
      level: "Advanced",
    },
    {
      name: "TypeScript",
      icon: Code,
      category: "Language",
      level: "Intermediate",
    },
    {
      name: "Next.js",
      icon: Code,
      category: "Frontend",
      level: "Intermediate",
    },
    // {
    //   name: "Nest.js",
    //   icon: Server,
    //   category: "Backend",
    //   level: "Advanced",
    // },
    {
      name: "AWS Services",
      icon: Server,
      category: "Backend",
      level: "Intermediate",
    },
    {
      name: "HTML",
      icon: Code,
      category: "Frontend",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: Code,
      category: "Frontend",
      level: "Beginner",
    },
    {
      name: "Git & GitHub",
      icon: Github,
      category: "Tools",
      level: "Advanced",
    },
  ];

  const projects = [
    {
      title: "Logistics Platform",
      description:
        "End-to-end logistics solution enabling businesses to create, manage, and track shipments efficiently.Built interactive dashboards with date-range filters, drill-down views, and shipment history. Real-time data handling, automated backend workflows, label generation, and robust reporting with 90-day exports.",
      tech: [
        "React",
        "Node.js",
        "AWS",
        "DynamoDB",
        "Serverless",
        "GraphQL",
        "Redux",
        "Mocha Chai",
      ],
      image: "../../../logisticsPlatform.png",
      github: "#",
      live: "https://development.d23fx5b9jaftrw.amplifyapp.com/dashboard/default",
      highlight: "Real-time shipment tracking & 90-day reporting",
    },
    {
      title: "B2B Gamified Platform",
      description:
        "B2B SaaS gamified community engagement platform enabling businesses to create branded spaces where users complete challenges to earn rewards. Built interactive dashboards with analytics, real-time leaderboards, 3D animated reward cards, automated workflow management, and comprehensive reporting with real-time data synchronization.",
      tech: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "ShadCN UI",
      ],
      image: "../../../nudjPlatform.png",
      github: "#",
      live: "https://devadmin.nudj.cx/admin",
      highlight: "B2B SaaS gamified community engagement platform",
    },
    {
      title: "VR Platform",
      description:
        "Virtual reality experience platform that allows businesses to build interactive VR tours and virtual stores. Users can explore products in 360°, generate leads, and analyze visitor behavior through integrated analytics for improved customer engagement.",
      tech: ["React", "Node.js", "Express.js", "Firebase", "Redux Toolkit"],
      image: "../../../vrPlatform.png",
      github: "#",
      live: "https://astra3d.com/",
      highlight: "360° VR tours",
    },
    {
      title: "Job Portal",
      description:
        "Full-stack job portal platform enabling users to search and apply for jobs and track applications, secure authentication, and role-based dashboards for job seekers and employers.",
      tech: ["React", "Node.js", "MongoDb", "Tailwind CSS", "Express.js"],
      image: "../../../jobportal.png",
      github: "https://github.com/shubham2588/JobWeb",
      live: "https://jobweb-frontend.onrender.com/",
      highlight: "Job search and hiring platform",
    },
    {
      title: "Nurse Calling System",
      description:
        "Real-time Nurse Calling System enabling patients to request assistance from specific rooms and nurses to manage and attend room-based calls instantly using WebSockets and a responsive React-based interface.",
      tech: [
        "React",
        "Node.js",
        "Socket.io",
        "Express",
        "MongoDB",
        "MaterialUI",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      highlight: "Real-time room-based calling with WebSockets",
    },
  ];
  // Depthin Solution	  November 2022 – Present
  // Full Stack Developer	       Surat, Gujarat
  // •	Spearheaded and maintained a logistics platform for managing shippers and carriers, determining rates and carrier selection based on postal codes and package details.
  // •	Built a dashboard with date range filters, drill-down features, and scrollable shipment lists, handling both frontend (React.js) and backend (Node.js, DynamoDB).
  // •	Implemented shipment management features, including item sections, filters, 90-day report export, and shipment history filtering using AWS AppSync and GraphQL.
  // •	Updated company and warehouse forms, enabling bulk CSV uploads for zones and managing data operations.
  // •	Built robust backend solutions such as webhooks for real-time customer tracking updates, automated tasks for fuel surcharge adjustments, and command-line interfaces (CLI) for data handling.
  // •	Generated PDF and ZPL labels for shipments and tracked company/warehouse updates through a history feature.
  // •	Enhanced code reliability with comprehensive unit tests using the Mocha Chai framework and reducing bug reports by 40%, leading to a more stable application for end users.

  const experience = [
    {
      company: "Depthin Solution",
      position: "Full Stack Developer",
      period: "Nov 2022 - Present",
      projects: [
        {
          name: "B2B Gamified Community Platform",
          period: "May 2025 - Jan 2026",
          description:
            "Developed and maintained an admin dashboard for a B2B SaaS gamified community engagement platform.",
          achievements: [
            "  Built a challenge analytics dashboard with date-range filters, drill-down views, and participant tracking using MongoDB queries",
            "Developed multi-step forms for challenges, actions, and rewards with validation and auto-save functionality",
            "Implemented analytics to track challenge completion, action performance, reward distribution, and user engagement",
            "Created a user management system with search and filters to track completed challenges, actions, and earned rewards",
            "Built a reward management system with configurable reward types, allocation rules, and real-time redemption tracking",
            "Optimized database queries and dashboard performance, significantly reducing page load times",
          ],
        },
        {
          name: "Logistics & Shipment Management Platform",
          period: "Nov 2022 - April 2025, Feb 2026 - Present",
          description:
            "Spearheaded a logistics platform for managing shippers, carriers, rates, and shipments.",
          achievements: [
            "Built a dashboard with date range filters, drill-down features, and scrollable shipment lists, handling both frontend (React.js) and backend (Node.js, DynamoDB)",
            "Implemented shipment management features, including item sections, filters, 90-day report export, and shipment history filtering using AWS AppSync and GraphQL",
            "Updated company and warehouse forms, enabling bulk CSV uploads for zones and managing data operations",
            "Built robust backend solutions such as webhooks for real-time customer tracking updates",
            "Generated PDF and ZPL labels and tracked shipment history",
            "Enhanced code reliability with comprehensive unit tests using the Mocha Chai framework",
          ],
        },
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Real-estate VR Platform",
      period: "Jan 2024 - March 2024",
      description:
        "Contributed to the development of a VR-based real estate platform enabling users to create, manage, and experience immersive virtual property tours.",
      achievements: [
        "Implemented scene uploads, floor plan management, and center logo functionality with complete file operations including upload, delete, rename, and sorting",
        "Built an intuitive and responsive user interface using Tailwind CSS to enhance usability across multiple application modules",
        "Integrated Firebase for media management, handling image uploads, deletions, and storage optimization",
        "Implemented Cashfree payment gateway to enable secure online payments for platform services, handling payment initiation, verification, and success/failure flows",
        "Collaborated on improving overall platform UX to support seamless virtual tour creation and navigation for end users",
      ],
    },
    {
      position: "Backend Developer Intern",
      company: "Netsol IT Solutions Pvt. Ltd.",
      period: "Dec 2021 - June 2022",
      description:
        "Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Contributed to a parking optimization solution, reduce search times for parking lots, and minimize unnecessary vehicle travel",
        "Managed the creation of CRUD operations for user pages, featuring image zoom and user update logs; resulted in a streamlined process that now logs over 400 user changes each month, improving data management",
        "Utilized Node.js, Express.js, and MySQL for backend development and database management",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "../../Shubham_Resume.pdf"; // path to your resume file in public folder
    link.download = "Shubham_Chaudhary_Resume.pdf"; // suggested filename
    link.click();
  };
  const showGitHub = ["Job Portal", "Nurse Calling System"];
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shubham Chaudhary
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div
          className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-4 text-blue-400 font-semibold text-lg">
            👋 Hello, I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shubham Chaudhary
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            Senior Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specializing in MERN stack development with 3+ years of experience
            building scalable, user-centric web applications. Passionate about
            clean code and innovative solutions.
          </p>
          <div className="flex justify-center items-center gap-4 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Surat, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for hire</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
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
                  I am a Computer Science graduate with over 3 years of
                  experience in web development, specializing in building robust
                  and scalable applications. With 3 years of hands-on experience
                  in Full Stack developer, I have honed my skills as a
                  full-stack developer, delivering efficient solutions and
                  contributing to impactful projects.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I thrive in collaborative environments, bringing excellent
                  focus, clear communication, and a strong ability to learn and
                  adapt rapidly. My passion for coding drives my curiosity to
                  explore new technologies and continuously improve my technical
                  expertise.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I am actively seeking opportunities as a full-stack developer
                  where I can leverage my experience and skills to contribute to
                  an organization’s success while enhancing my professional
                  growth.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Let’s connect to build innovative solutions together!.
                </p>
                <div className="flex gap-4">
                  {/* <a
                    href="https://github.com/shubham2588"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                  {/* <Button
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    > */}
                  {/* <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a> */}

                  <a
                    href="https://www.linkedin.com/in/shubham-chaudhary-23a00016b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Professional Highlights
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🚀 3+ years of MERN stack development</li>
                  <li>💻 Work experience in Multiple projects</li>
                  <li>💻 Work experience in Next.js</li>
                  <li>👥 Led development teams of 4+ developers</li>
                  <li>🎯 Expert in agile development methodologies</li>
                  <li>🔧 AWS and cloud deployment experience</li>
                  <li>📦 API integration using REST & GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-10">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700">
                {/* Company Header */}
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white text-xl">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* PROJECT-WISE MODE */}
                  {exp.projects ? (
                    exp.projects.map((project, pIndex) => (
                      <div
                        key={pIndex}
                        className="bg-gray-700/40 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-400">
                            {project.name}
                          </h4>
                          <span className="text-sm text-gray-400">
                            {project.period}
                          </span>
                        </div>

                        <p className="text-gray-300 mt-2">
                          {project.description}
                        </p>

                        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                          {project.achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    /* NORMAL EXPERIENCE MODE */
                    <>
                      <p className="text-gray-300">{exp.description}</p>

                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {exp.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
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
              <Card
                key={skill.name}
                className="bg-gray-700 border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-white font-semibold mb-1">
                    {skill.name}
                  </h3>
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
              <Card
                key={project.title}
                className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {/* <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.highlight}
                  </div> */}
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
                    {showGitHub.includes(project.title) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
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
              I'm currently available for new opportunities. Let's discuss how I
              can help bring your next project to life with innovative solutions
              and clean, scalable code.
            </p>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Ready to hire? Let's connect!
              </h3>
              <p className="text-gray-300 mb-4">
                📧 adarshshubham217@gmail.com | 📱 +91 7878705514
              </p>
            </div>
            {/* <div className="flex justify-center space-x-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me  
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            © 2025 Shubham Chaudhary - Senior Full Stack Developer
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
