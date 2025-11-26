import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React & Next.js", level: 90 },
      { name: "JavaScript & TypeScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Styling",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Sass", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "npm/yarn", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies I work with
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover-scale"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
