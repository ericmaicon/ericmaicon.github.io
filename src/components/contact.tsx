import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'eric@ericmaicon.com.br',
    href: 'mailto:eric@ericmaicon.com.br',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/ericmaicon',
    href: 'https://linkedin.com/in/ericmaicon',
  },
  {
    icon: Github,
    title: 'Github',
    value: 'github.com/ericmaicon',
    href: 'https://github.com/ericmaicon',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-16 space-y-6">
            <h2 className="text-4xl text-white md:text-5xl">Let's work together</h2>
            <p className="text-gray mx-auto max-w-2xl text-xl">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title}>
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="bg-secondary/10 group-hover:bg-secondary/20 mx-auto flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                        <IconComponent className="text-secondary-400 h-6 w-6" />
                      </div>
                      <div>
                        <div className="mb-2 font-medium text-white">{method.title}</div>
                        <div className="text-gray mb-4 text-sm break-all">{method.value}</div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={method.href} target="_blank" rel="noopener noreferrer">
                            Contact
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
