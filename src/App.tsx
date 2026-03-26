import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BattleDecks from './components/BattleDecks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ppt-bg text-white font-sans selection:bg-ppt selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <BattleDecks />
      <Footer />
    </div>
  )
}

export default App
