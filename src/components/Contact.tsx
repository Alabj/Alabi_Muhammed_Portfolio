import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's work together on your next project
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">alamuhammed005@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+234 913 5092 873</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/muhammad-alabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary"
                  >
                    muhammad-alabi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} required />
                </div>
                <Button type="submit" className="w-full hover-scale">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
