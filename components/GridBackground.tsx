"use client"

const GridBackground = () => {
  return (
    <div 
      /* 'fixed' keeps it relative to the viewport.
         'inset-0' stretches it to all edges.
         'z-[-1]' ensures it is ALWAYS the bottom layer.
         'pointer-events-none' makes clicks pass through it like it's not there.
      */
      className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base White Layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Grid Layer with CSS Masking */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0b162c 1px, transparent 1px),
            linear-gradient(to bottom, #0b162c 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.12,
          maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 85%)',
        }}
      />

      {/* Subtle corner glow - adds depth without distraction */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(11,22,44,0.03)_0%,transparent_60%)]" />
    </div>
  );
};

export default GridBackground;