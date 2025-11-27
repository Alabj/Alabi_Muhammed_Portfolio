import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import adminDashboard from "@/assets/admin-dashboard.jpg";
import tradeBarter from "@/assets/trade-barter.jpg";

const projects = [
  {
    title: "Admin Dashboard",
    description:
      "The admin section provides tools for managing users, content, and system settings efficiently. It ensures smooth control over all key operations within the application.",
    image: adminDashboard,
    techStack: ["React.js", "TypeScript", "Node.js", "Tailwind"],
    github: "#",
    liveDemo: "https://admin-dashboard-rouge-five-80.vercel.app",
  },
  {
    title: "Trade by Barter Website",
    description:
      "A Trade by Barter website that allows users to exchange goods and services directly without using money. Users can list items, find matches, and negotiate fair trades easily online.",
    image: tradeBarter,
    techStack: ["React.js", "TypeScript", "Node.js", "Tailwind"],
    github: "#",
    liveDemo: "https://tradehub-barter.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Here are some of my recent works
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
