import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skills = ['Node.js', 'React', 'TypeScript', 'Golang', 'React Native', 'AWS', 'Serverless'];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-6xl text-white md:text-7xl lg:text-8xl">
                Hello<span className="text-secondary">.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-secondary-400 h-px w-20"></div>
                <div className="text-xl text-white md:text-2xl">I'm Eric</div>
              </div>
              <div className="text-4xl text-white md:text-5xl lg:text-6xl">
                Lead Fullstack Developer
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Got a project?
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-10 left-10 text-white/20">
              <ChevronLeft size={60} strokeWidth={1} />
            </div>
            <div className="absolute right-10 bottom-10 text-white/20">
              <ChevronRight size={60} strokeWidth={1} />
            </div>

            <div className="relative">
              <div className="bg-secondary-400/20 absolute -inset-4 h-80 w-80 rounded-full"></div>
              <div className="border-background relative z-10 h-72 w-72 overflow-hidden rounded-full border-4">
                <img
                  src="/images/eric.jpg"
                  alt="Eric Maicon"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-primary-900 mt-20 border-t pt-12">
          <div className="flex flex-wrap justify-center gap-8 text-white lg:justify-start">
            {skills.map((skill) => (
              <div
                key={skill}
                className="cursor-default text-lg transition-colors hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
