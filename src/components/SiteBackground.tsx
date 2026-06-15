import { useEffect, useRef } from "react";

export function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--mx", `${e.clientX}px`);
      ref.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0a0a2e 0%, #000000 60%), linear-gradient(180deg, #000000, #050518)",
      }}
    >
      {/* mouse-follow glow */}
      <div
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full opacity-30 blur-3xl transition-transform"
        style={{
          background: "radial-gradient(circle, #3733ff 0%, transparent 60%)",
          transform: "translate(calc(var(--mx, 50vw) - 300px), calc(var(--my, 50vh) - 300px))",
        }}
      />
      {/* orbs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-gradient-shift"
        style={{ background: "radial-gradient(circle, #3733ff 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-gradient-shift"
        style={{
          background: "radial-gradient(circle, #5a55ff 0%, transparent 70%)",
          animationDelay: "5s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[700px] w-[700px] rounded-full opacity-25 blur-3xl animate-gradient-shift"
        style={{
          background: "radial-gradient(circle, #3733ff 0%, transparent 70%)",
          animationDelay: "10s",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </div>
  );
}
