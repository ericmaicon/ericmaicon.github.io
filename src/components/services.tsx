import { Card, CardContent } from './ui/card';
import { Server, Cloud, Monitor, Smartphone } from 'lucide-react';

const technologies = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs using modern technologies.',
    technologies: [
      { name: 'Node.js', description: 'JavaScript runtime for scalable server applications' },
      {
        name: 'TypeScript',
        description: 'Strongly typed programming language built on JavaScript',
      },
      {
        name: 'Golang',
        description: 'Fast, statically typed language for high-performance systems',
      },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Infrastructure',
    description:
      'Infrastructure automation, deployment pipelines, and cloud architecture solutions.',
    technologies: [
      { name: 'AWS', description: 'Cloud computing services and infrastructure' },
      { name: 'Terraform', description: 'Infrastructure as code for cloud provisioning' },
      {
        name: 'CDK',
        description: 'Define cloud infrastructure using familiar programming languages',
      },
      { name: 'CI/CD', description: 'Automated testing, building, and deployment pipelines' },
    ],
  },
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive user interfaces with modern frameworks and tools.',
    technologies: [
      {
        name: 'React',
        description: 'Library for building user interfaces with component-based architecture',
      },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with native performance.',
    technologies: [
      { name: 'React Native', description: 'Build native mobile apps using React and JavaScript' },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl text-white md:text-5xl">Technical Expertise</h2>
            <p className="text-xl text-gray-500">
              Specialized knowledge across the full technology stack
            </p>
          </div>

          <div className="space-y-8">
            {technologies.map((technology) => {
              const IconComponent = technology.icon;
              return (
                <Card key={technology.title}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-secondary/10 group-hover:bg-primary/20 flex h-16 w-16 items-center justify-center rounded-lg transition-colors">
                            <IconComponent className="text-secondary-400 h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl text-white">{technology.title}</h3>
                            <div className="bg-secondary-400 mt-2 h-px w-12"></div>
                          </div>
                        </div>
                        <p className="text-gray leading-relaxed">{technology.description}</p>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="space-y-4">
                          <div className="text-secondary-400 mb-6 text-lg">
                            Technologies & Tools
                          </div>
                          <div className="grid gap-4">
                            {technology.technologies.map((tech) => (
                              <div
                                key={tech.name}
                                className="flex items-start gap-4 rounded-lg bg-blue-900/20 p-4 transition-colors hover:bg-blue-900/30"
                              >
                                <div className="bg-secondary-400 mt-2 h-3 w-3 flex-shrink-0 rounded-full"></div>
                                <div className="space-y-1">
                                  <div className="text-lg text-white">{tech.name}</div>
                                  <div className="text-gray text-sm leading-relaxed">
                                    {tech.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
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
