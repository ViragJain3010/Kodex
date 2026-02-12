'use client';

export default function KodexLogo() {
  return (
    <div className="relative cursor-pointer">
      <div
        className="relative z-10 text-4xl font-bold"
        style={
          {
            background: 'linear-gradient(135deg, #00FFFF, #0080FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          } as React.CSSProperties
        }
      >
        KODEX
      </div>
    </div>
  );
}
