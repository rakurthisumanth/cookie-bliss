import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

export function Logo3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const model = modelRef.current;
    if (!scene || !model) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let hover = false;
    let rotX = 0;
    let rotY = 0;
    let scrollP = 0;
    let raf = 0;
    let start = performance.now();

    const onMove = (event: PointerEvent) => {
      hover = true;
      const box = scene.getBoundingClientRect();
      pointerX = ((event.clientX - box.left) / box.width - 0.5) * 2;
      pointerY = ((event.clientY - box.top) / box.height - 0.5) * 2;
    };

    const onLeave = () => {
      hover = false;
    };

    const tick = (now: number) => {
      const box = scene.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const nextScroll = (view * 0.42 - (box.top + box.height / 2)) / view;
      scrollP += (nextScroll - scrollP) * 0.08;

      const targetX = hover ? pointerY * -16 : scrollP * 32;
      const targetY = hover ? pointerX * 24 : scrollP * -42;
      rotX += (targetX - rotX) * 0.1;
      rotY += (targetY - rotY) * 0.1;

      const t = (now - start) / 1000;
      const floatY = Math.sin(t * 1.15) * 10;
      const spin = Math.sin(t * 0.35) * 4;
      const depth = 48 + Math.abs(scrollP) * 36;

      model.style.transform = [
        `translateY(${floatY}px)`,
        `rotateX(${rotX + 8}deg)`,
        `rotateY(${rotY + spin}deg)`,
        `rotateZ(${scrollP * -8}deg)`,
        `translateZ(${depth}px)`,
      ].join(" ");

      scene.style.setProperty("--glint-x", `${50 + rotY * 1.4}%`);
      scene.style.setProperty("--glint-y", `${42 - rotX * 1.2}%`);

      raf = requestAnimationFrame(tick);
    };

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={sceneRef} className="logo-3d-scene mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-lg">
      <div className="logo-3d-orbit pointer-events-none" aria-hidden />
      <div className="logo-3d-glow pointer-events-none" aria-hidden />
      <div ref={modelRef} className="logo-3d-model">
        <div className="logo-3d-disc" aria-hidden />
        <img
          src={logo}
          alt="Bachelor Baabulu Cookies brand logo"
          width={1024}
          height={1024}
          fetchPriority="high"
          className="relative z-[2] w-full object-contain"
        />
        <div className="logo-3d-glint" aria-hidden />
        <div className="logo-3d-shadow" aria-hidden />
      </div>
    </div>
  );
}
