import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";

const BurkeMuseumPage = lazy(() => import("./pages/BurkeMuseum"));
const RecognizeAppPage = lazy(() => import("./pages/RecognizeApp"));
const OceanWatchPage = lazy(() => import("./pages/OceanWatch"));
const ChimuPage = lazy(() => import("./pages/Chimu"));
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "999px",
            background: "#1a1a1a",
            animation: "loaderDot 1.2s ease-in-out infinite",
            animationDelay: "0s",
            display: "block",
          }}
        />
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "999px",
            background: "#1a1a1a",
            animation: "loaderDot 1.2s ease-in-out infinite",
            animationDelay: "0.2s",
            display: "block",
          }}
        />
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "999px",
            background: "#1a1a1a",
            animation: "loaderDot 1.2s ease-in-out infinite",
            animationDelay: "0.4s",
            display: "block",
          }}
        />
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "'PP Neue Montreal', 'PPNouveauMontreal', sans-serif",
          fontSize: "12px",
          letterSpacing: "0.08em",
          color: "#777",
        }}
      >
        Loading
      </p>
    </div>
  );
};

const usePageLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("site-loader");

    const dismiss = () => {
      if (loaded) return;
      setLoaded(true);
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => {
          loader.style.display = "none";
        }, 650);
      }
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
          <Route path="/studentworkflow" element={<StudentWorkflow />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
