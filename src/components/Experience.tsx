import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My professional journey
        </p>
        
        <div className="space-y-8">
          <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">Frontend Development Intern</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Zulfah Academy • January - September 2023
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed responsive components using React and Tailwind CSS</li>
                <li>Collaborated with team members using GitHub for version control</li>
                <li>Participated in code reviews and improved code quality</li>
                <li>Learned best practices for modern web development</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">BSc Computer Science</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Crescent University, Abeokuta • 2023 - 2027 (Expected)
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently pursuing an undergraduate degree in Computer Science with a focus on 
                software development, algorithms, and web technologies. Actively involved in 
                coding projects and learning new frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
