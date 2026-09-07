'use client';

import { useEffect, useRef } from 'react';
import Reveal from '@/components/ui/Reveal';

function PlatformRing() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dots = Array.from({ length: 1500 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.8 + Math.pow(Math.random(), 0.55) * 0.185,
      size: 0.35 + Math.random() * 0.95,
      opacity: 0.25 + Math.random() * 0.75,
      speed: 0.12 + Math.random() * 0.5,
    }));
    let time = 0;
    let frame = 0;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
      const context = canvas.getContext('2d');
      if (!context) return;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) / 2;
      time += reduceMotion ? 0.0002 : 0.0013;
      for (const dot of dots) {
        const angle = dot.angle + time * dot.speed * 6;
        context.globalAlpha = dot.opacity;
        context.fillStyle = '#F4F5FA';
        context.beginPath();
        context.arc(width / 2 + Math.cos(angle) * radius * dot.radius, height / 2 + Math.sin(angle) * radius * dot.radius, dot.size, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas id="platformRing" ref={canvasRef} aria-hidden="true" />;
}

export default function PlatformEcosystem() {
  return (
    <section className="sec sec-dark" id="platform">
      <div className="wrap">
        <Reveal className="ecosystem-head">
          <span className="eyebrow">The Platform</span>
          <h2>One Platform, One Ecosystem</h2>
        </Reveal>
        <Reveal className="ecosystem-map" delay="d2">
          <div className="ecosystem-side ecosystem-side-left">
            <div className="ecosystem-copy">
              <h3>Restaurant Management</h3>
              <p>POS, Online Orders, Guest Mgt, CRM, Marketing &amp; staff workflows</p>
            </div>
            <div className="ecosystem-connector"><span></span><i></i></div>
          </div>
          <div className="ecosystem-ring">
            <PlatformRing />
            <div className="ecosystem-core">EpiVerse</div>
          </div>
          <div className="ecosystem-side ecosystem-side-right">
            <div className="ecosystem-connector"><i></i><span></span></div>
            <div className="ecosystem-copy">
              <h3>Customer Engagement</h3>
              <p>Venue Discovery, Reservation, Check-in &amp; Ordering, Bill Payment and Rewards</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
