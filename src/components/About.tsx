import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Get to know me better
        </p>
        
        <Card className="mb-8 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a strong interest in coding and technology, and I enjoy exploring how digital 
              tools can solve real-world problems. My learning goal is to keep improving my development 
              skills, stay updated with new technologies, and build projects that combine creativity 
              with functionality. I approach coding with curiosity, patience, and a focus on writing 
              clean, efficient solutions.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable and efficient code
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground">
                Finding creative solutions to challenges
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Always exploring new technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
