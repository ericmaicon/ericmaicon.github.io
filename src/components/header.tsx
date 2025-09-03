import { Button } from './ui/button';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="border-primary-900 fixed top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-medium text-white">Eric Maicon</h1>
        <nav className="hidden gap-8 md:flex">
          <Button onClick={() => scrollToSection('home')}>Home</Button>
          <Button onClick={() => scrollToSection('about')}>About</Button>
          <Button onClick={() => scrollToSection('tech')}>Technologies</Button>
          <Button onClick={() => scrollToSection('contact')}>Contact</Button>
        </nav>
      </div>
    </header>
  );
}
