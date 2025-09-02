export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/90 border-border fixed top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <div className="text-2xl font-medium">Eric Maicon</div>
        <nav className="hidden gap-8 md:flex">
          <button
            onClick={() => scrollToSection('home')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
