const PARTICLE_COUNT = 14;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
  id,
  left: `${(id * 17 + 7) % 100}%`,
  top: `${(id * 23 + 11) % 100}%`,
  size: 0.75 + (id % 3) * 0.4,
  duration: 14 + (id % 5) * 2,
  delay: (id % 7) * 0.8,
}));

export function HeroGlobalAmbient() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgb(198_161_91/0.06),transparent_70%)]" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hero-dust-particle absolute rounded-full bg-danovix-background/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
}
