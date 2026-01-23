export default function AIFutureVisual() {
  return (
    <svg
      viewBox="0 0 800 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#8fd3f4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0b1026" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill="url(#g1)" />

      <circle cx="400" cy="300" r="120" fill="none" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="400" cy="300" r="180" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.4"/>
      <circle cx="400" cy="300" r="240" fill="none" stroke="#38bdf8" strokeWidth="0.6" opacity="0.25"/>
    </svg>
  );
}
