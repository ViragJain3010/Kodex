'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Particle = ({ x, y, radius, color }) => (
  <motion.circle cx={x} cy={y} r={radius} fill={color} />
);

export default function KodexLogo() {
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 10 + Math.random() * 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 200,
          y: Math.random() * 50,
          radius: Math.random() * 2 + 1,
          color: i % 2 === 0 ? '#00FFFF' : '#0080FF',
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          },
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let { x, y, velocity } = particle;
          x += velocity.x * (isHovered ? 2 : 1);
          y += velocity.y * (isHovered ? 2 : 1);

          if (x < 0 || x > 150) velocity.x *= -1;
          if (y < 0 || y > 50) velocity.y *= -1;

          return { ...particle, x, y, velocity };
        })
      );

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={containerRef}
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="200" height="50" className="absolute top-0 left-0">
        {particles.map(particle => (
          <Particle key={particle.id} {...particle} />
        ))}
      </svg>
      <motion.div
        className="relative z-10 text-4xl font-bold"
        style={{
          background: 'linear-gradient(135deg, #00FFFF, #0080FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        KODEX
      </motion.div>
    </motion.div>
  );
}
