import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";

// Shared with the static loader markup in index.html -- same wave, same
// look, for both the initial page load and route-chunk transitions.
const FRONT_WAVE_PATH =
  "M0.0,32.0 L36.0,33.4 L72.0,34.8 L108.0,36.1 L144.0,37.3 L180.0,38.4 L216.0,39.3 L252.0,40.0 L288.0,40.6 L324.0,40.9 L360.0,41.0 L396.0,40.9 L432.0,40.6 L468.0,40.0 L504.0,39.3 L540.0,38.4 L576.0,37.3 L612.0,36.1 L648.0,34.8 L684.0,33.4 L720.0,32.0 L756.0,30.6 L792.0,29.2 L828.0,27.9 L864.0,26.7 L900.0,25.6 L936.0,24.7 L972.0,24.0 L1008.0,23.4 L1044.0,23.1 L1080.0,23.0 L1116.0,23.1 L1152.0,23.4 L1188.0,24.0 L1224.0,24.7 L1260.0,25.6 L1296.0,26.7 L1332.0,27.9 L1368.0,29.2 L1404.0,30.6 L1440.0,32.0 L1476.0,33.4 L1512.0,34.8 L1548.0,36.1 L1584.0,37.3 L1620.0,38.4 L1656.0,39.3 L1692.0,40.0 L1728.0,40.6 L1764.0,40.9 L1800.0,41.0 L1836.0,40.9 L1872.0,40.6 L1908.0,40.0 L1944.0,39.3 L1980.0,38.4 L2016.0,37.3 L2052.0,36.1 L2088.0,34.8 L2124.0,33.4 L2160.0,32.0 L2196.0,30.6 L2232.0,29.2 L2268.0,27.9 L2304.0,26.7 L2340.0,25.6 L2376.0,24.7 L2412.0,24.0 L2448.0,23.4 L2484.0,23.1 L2520.0,23.0 L2556.0,23.1 L2592.0,23.4 L2628.0,24.0 L2664.0,24.7 L2700.0,25.6 L2736.0,26.7 L2772.0,27.9 L2808.0,29.2 L2844.0,30.6 L2880.0,32.0 L2880,64 L0,64 Z";
const BACK_WAVE_PATH =
  "M0.0,35.9 L36.0,34.1 L72.0,32.1 L108.0,30.0 L144.0,27.9 L180.0,25.7 L216.0,23.5 L252.0,21.4 L288.0,19.5 L324.0,17.7 L360.0,16.2 L396.0,14.9 L432.0,13.9 L468.0,13.2 L504.0,12.9 L540.0,12.9 L576.0,13.3 L612.0,14.0 L648.0,15.0 L684.0,16.3 L720.0,17.9 L756.0,19.7 L792.0,21.6 L828.0,23.7 L864.0,25.9 L900.0,28.1 L936.0,30.3 L972.0,32.4 L1008.0,34.3 L1044.0,36.1 L1080.0,37.6 L1116.0,38.9 L1152.0,39.9 L1188.0,40.5 L1224.0,40.8 L1260.0,40.8 L1296.0,40.5 L1332.0,39.8 L1368.0,38.8 L1404.0,37.4 L1440.0,35.9 L1476.0,34.1 L1512.0,32.1 L1548.0,30.0 L1584.0,27.9 L1620.0,25.7 L1656.0,23.5 L1692.0,21.4 L1728.0,19.5 L1764.0,17.7 L1800.0,16.2 L1836.0,14.9 L1872.0,13.9 L1908.0,13.2 L1944.0,12.9 L1980.0,12.9 L2016.0,13.3 L2052.0,14.0 L2088.0,15.0 L2124.0,16.3 L2160.0,17.9 L2196.0,19.7 L2232.0,21.6 L2268.0,23.7 L2304.0,25.9 L2340.0,28.1 L2376.0,30.3 L2412.0,32.4 L2448.0,34.3 L2484.0,36.1 L2520.0,37.6 L2556.0,38.9 L2592.0,39.9 L2628.0,40.5 L2664.0,40.8 L2700.0,40.8 L2736.0,40.5 L2772.0,39.8 L2808.0,38.8 L2844.0,37.4 L2880.0,35.9 L2880,64 L0,64 Z";

// Keep these in sync with the water-rise-in / water-rise-out durations in
// index.html's <style> block for #site-loader.
const RISE_MS = 550;
const DRAIN_MS = 650;

const WaterWave = () => (
  <div className="water-rise">
    <svg
      className="water-crest water-crest--back"
      viewBox="0 0 2880 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="#16140f" d={BACK_WAVE_PATH} />
    </svg>
    <div className="water-fill" />
    <svg
      className="water-crest water-crest--front"
      viewBox="0 0 2880 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="#16140f" d={FRONT_WAVE_PATH} />
    </svg>
  </div>
);

const BurkeMuseumPage = lazy(() => import("./pages/BurkeMuseum"));
const RecognizeAppPage = lazy(() => import("./pages/RecognizeApp"));
const OceanWatchPage = lazy(() => import("./pages/OceanWatch"));
const ChimuPage = lazy(() => import("./pages/Chimu"));
const AboutPage = lazy(() => import("./pages/About"));
const EAGlobalPage = lazy(() => import("./pages/EAGlobal"));
const StudentWorkflow = lazy(() => import("./screens/StudentWorkflow"));

const HomePage = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-blur-wrapper"),
    );
    sectionsRef.current = sections;

    let rafId: number;
    let lastActive: HTMLElement | null = null;
    const LOCK_THRESHOLD = 0.52;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        let bestSection: HTMLElement | null = null;
        let bestRatio = 0;

        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
          const ratio = Math.max(0, visible) / Math.min(rect.height, vh);
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestSection = sec;
          }
        });

        if (bestRatio >= LOCK_THRESHOLD && bestSection !== lastActive) {
          lastActive = bestSection;
          document.body.classList.add("has-focused-section");
          sections.forEach((s) => s.classList.remove("section-active"));
          if (bestSection)
            (bestSection as HTMLElement).classList.add("section-active");
        } else if (bestRatio < LOCK_THRESHOLD) {
          lastActive = null;
          document.body.classList.remove("has-focused-section");
          sections.forEach((s) => s.classList.remove("section-active"));
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="text-black text-sm not-italic normal-nums font-normal box-border tracking-[normal] leading-[16.1px] pointer-events-auto font-m"
      style={{ backgroundColor: "#fdfaf5" }}
    >
      <Navbar />
      <h1 className="sr-only">Kai Andreic — UX Designer</h1>
      <main className="box-border">
        <Hero />
      </main>
    </div>
  );
};

const RouteLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "#fdfaf5",
        overflow: "hidden",
      }}
    >
      {/* Same wave as the initial site loader in index.html, so route
          transitions feel consistent with the site's own opening moment */}
      <WaterWave />
    </div>
  );
};

const usePageLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("site-loader");
    const rise = document.getElementById("water-rise");
    const mountedAt = performance.now();

    const dismiss = () => {
      if (loaded) return;
      setLoaded(true);
      if (!loader) return;

      // Never cut the rise animation off mid-motion -- wait for it to
      // actually finish covering the screen before starting the drain,
      // even if the real page happens to be ready almost instantly.
      const elapsed = performance.now() - mountedAt;
      const untilRiseDone = Math.max(0, RISE_MS - elapsed);

      window.setTimeout(() => {
        loader.style.pointerEvents = "none";
        rise?.classList.add("exit");
        window.setTimeout(() => {
          loader.style.display = "none";
        }, DRAIN_MS + 50);
      }, untilRiseDone);
    };

    // Dismiss once window is fully loaded (fonts + images)
    if (document.readyState === "complete") {
      // Small delay so the first paint is already flushed
      setTimeout(dismiss, 300);
    } else {
      window.addEventListener("load", () => setTimeout(dismiss, 300), {
        once: true,
      });
    }

    // Safety net: never show loader for more than 4 seconds
    const safetyTimer = setTimeout(dismiss, 4000);
    return () => clearTimeout(safetyTimer);
  }, []);

  return loaded;
};

export const App = () => {
  usePageLoader();

  return (
    <HashRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/burkemuseum" element={<BurkeMuseumPage />} />
          <Route path="/recognize" element={<RecognizeAppPage />} />
          <Route path="/oceanwatch" element={<OceanWatchPage />} />
          <Route path="/chimu" element={<ChimuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/eaglobal" element={<EAGlobalPage />} />
          <Route path="/studentworkflow" element={<StudentWorkflow />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
