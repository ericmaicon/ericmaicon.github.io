import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
