import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <img
            src={avatar}
            alt="Alabi Muhammed"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-2xl mx-auto hover-scale"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hi, I'm Alabi Muhammed
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          Frontend Developer
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I'm a frontend developer passionate about building clean, responsive, and user-friendly web interfaces. 
          I enjoy turning ideas into interactive digital experiences using modern web technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="hover-scale">
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
          <Button size="lg" variant="outline" className="hover-scale">
            View My Work
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all hover-scale"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-alabi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all hover-scale"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:alamuhammed005@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all hover-scale"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
