const stats = [
  {
    number: '18',
    label: 'Years',
    sublabel: 'Experience',
  },
  {
    number: '9',
    label: 'Years',
    sublabel: 'Remote Work',
    suffix: '+',
  },
  {
    number: '3',
    label: 'Teams',
    sublabel: 'Led',
    suffix: '+',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-4xl text-white md:text-5xl">About me</div>

              <div className="text-gray space-y-6 leading-relaxed">
                <p>
                  With over 15 years of experience in software development, I specialize in
                  designing robust, scalable applications using Node.js, TypeScript, and React,
                  underpinned by Clean Architecture and solid testing practices.
                </p>
                <p>
                  My background spans over 9 years in team leadership, guiding multicultural teams
                  toward high-impact solutions, and 5 years building efficient, cloud-native systems
                  with a wide range of AWS services. I bring deep expertise in SQL and MongoDB,
                  ensuring performance and data integrity across complex systems.
                </p>
                <p>
                  Outside of work, I'm fiercely loyal to the things that energize me — sports, great
                  food, and exploring the world.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {stats.map((stat) => (
                <div key={stat.sublabel} className="flex items-center gap-6">
                  <div className="text-secondary-400 text-6xl md:text-7xl">
                    {stat.number}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg text-white">{stat.label}</div>
                    <div className="text-gray">{stat.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
