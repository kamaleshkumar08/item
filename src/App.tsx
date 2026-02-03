
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import SystemVisualizer from './components/SystemVisualizer';
import Offer from './components/Offer';
import MouseGlow from './components/MouseGlow';
import NoiseOverlay from './components/NoiseOverlay';
import Marquee from './components/Marquee';
import HierarchyComparison from './components/HierarchyComparison';
import TransmissionLogs from './components/TransmissionLogs';
import FinalPush from './components/FinalPush';

function App() {
  return (
    <main className="bg-cyber-black min-h-screen relative overflow-hidden">
      <MouseGlow />
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Marquee text="System Integrity: 100% • Focus Sanctum Active • Quest Board Updated • Join the Elite Hierarchy" />
      <SystemVisualizer />
      <HierarchyComparison />
      <Marquee text="Ascend Beyond Comparison • Real-World Execution • Mastery over Reality • 99% Off Access" reverse speed={25} />
      <TransmissionLogs />
      <FeatureSection />
      <Offer />
      <FinalPush />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2026 ASCENSION PROTOCOL. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
