'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Reveal from '@/components/ui/Reveal';
import { floorFrames } from '@/data/floor';

function formatClock(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [clock, setClock] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Clock is computed client-side only, to avoid a server/client render mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClock(formatClock(new Date()));
    const clockTimer = setInterval(() => {
      setClock(formatClock(new Date()));
    }, 30000);
    return () => {
      clearInterval(clockTimer);
    };
  }, []);

  useEffect(() => {
    const floorTimer = setInterval(() => {
      setTick((t) => t + 1);
    }, 3200);
    return () => {
      clearInterval(floorTimer);
    };
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const spotEl = spotRef.current;
    if (!heroEl || !spotEl) return;

    const onMouseMove = (e: MouseEvent) => {
      const r = heroEl.getBoundingClientRect();
      spotEl.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
      spotEl.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
    };
    heroEl.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => heroEl.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSec = heroRef.current;
    if (!canvas || !heroSec) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = heroSec.clientWidth;
    let h = heroSec.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 9);

    const cnt1 = 1600;
    const pos1 = new Float32Array(cnt1 * 3);
    for (let i = 0; i < cnt1; i++) {
      const r = 3.2 + (Math.random() - 0.5) * 0.35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos1[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos1[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos1[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute('position', new THREE.BufferAttribute(pos1, 3));
    const mat1 = new THREE.PointsMaterial({ color: 0xe8a83e, size: 0.028, transparent: true, opacity: 0.8, sizeAttenuation: true });
    const sphere1 = new THREE.Points(geo1, mat1);
    sphere1.position.set(2.8, 0.2, 0);
    sphere1.scale.setScalar(0.78);
    scene.add(sphere1);

    const cnt2 = 400;
    const pos2 = new Float32Array(cnt2 * 3);
    for (let i = 0; i < cnt2; i++) {
      const r = 1.8 + (Math.random() - 0.5) * 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos2[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos2[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo2 = new THREE.BufferGeometry();
    geo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
    const mat2 = new THREE.PointsMaterial({ color: 0xf4c46a, size: 0.02, transparent: true, opacity: 0.45, sizeAttenuation: true });
    const sphere2 = new THREE.Points(geo2, mat2);
    sphere2.position.copy(sphere1.position);
    sphere2.scale.setScalar(0.78);
    scene.add(sphere2);

    const icoGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x2a3880, wireframe: true, transparent: true, opacity: 0.15 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.copy(sphere1.position);
    ico.scale.setScalar(0.78);
    scene.add(ico);

    let mx = 0;
    let my = 0;
    const onHeroMove = (e: MouseEvent) => {
      const r = heroSec.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    if (!reduceMotion) {
      heroSec.addEventListener('mousemove', onHeroMove, { passive: true });
    }

    const resize = () => {
      w = heroSec.clientWidth;
      h = heroSec.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize, { passive: true });

    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const spd = reduceMotion ? 0.0006 : 0.0016;
      sphere1.rotation.y += spd;
      sphere1.rotation.x += spd * 0.15;
      sphere2.rotation.y -= spd * 0.7;
      sphere2.rotation.z += spd * 0.4;
      ico.rotation.y += spd * 0.65;
      ico.rotation.x += spd * 0.25;
      if (!reduceMotion) {
        camera.position.x += (mx * 1.4 - camera.position.x) * 0.03;
        camera.position.y += (-my * 0.9 - camera.position.y) * 0.03;
      }
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      heroSec.removeEventListener('mousemove', onHeroMove);
      geo1.dispose();
      mat1.dispose();
      geo2.dispose();
      mat2.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-spot" ref={spotRef} aria-hidden="true"></div>
      <canvas id="heroCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-content">
          <Reveal>
            <div className="hero-badge">
              <span className="live"></span>
              Restaurant Infrastructure
            </div>
            <h1>
              You don&apos;t need another POS.<br />
              You need <span className="accent">reliable infrastructure.</span>
            </h1>
            <p className="lead">EpiVerse combines operations, guest experience, growth and compliance into one integrated system, built for cafés, QSRs, restaurants, cloud kitchens and nightlife venues, without enterprise cost or complexity.</p>
          </Reveal>

          <Reveal className="hero-panel-wrap" delay="d2">
            <div className="hero-panel" id="heroPanel">
              <div className="panel-cap">
                <span className="panel-live"></span>Live on the floor, right now
              </div>
              {floorFrames[tick % floorFrames.length].map((row) => (
                <div className="panel-row" key={row.title}>
                  <span className="panel-icon">{row.icon}</span>
                  <div className="panel-mid">
                    <div className="panel-title">{row.title}</div>
                    <div className="panel-meta">{row.meta}</div>
                  </div>
                  <span className="panel-status">{row.status}</span>
                </div>
              ))}
              {clock ? <div className="panel-footer">updated {clock}</div> : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
