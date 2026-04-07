export function RobotIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyGrad" x1="200" y1="60" x2="200" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A2A40" />
          <stop offset="100%" stopColor="#18182A" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="200" cy="220" r="200" fill="url(#glow)" />

      {/* Head */}
      <rect x="150" y="60" width="100" height="80" rx="20" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="175" cy="95" r="9" fill="#0D0D1C" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="225" cy="95" r="9" fill="#0D0D1C" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="175" cy="95" r="3.5" fill="#3B82F6" opacity="0.8" />
      <circle cx="225" cy="95" r="3.5" fill="#3B82F6" opacity="0.8" />
      {/* Antenna */}
      <line x1="200" y1="60" x2="200" y2="42" stroke="#3A3A50" strokeWidth="1.5" />
      <circle cx="200" cy="38" r="4" fill="#0D0D1C" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />

      {/* Neck */}
      <rect x="185" y="140" width="30" height="22" rx="5" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1" />

      {/* Torso */}
      <rect x="125" y="162" width="150" height="148" rx="18" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      {/* Chest plate */}
      <rect x="152" y="188" width="96" height="65" rx="10" fill="#0D0D1C" stroke="#3A3A50" strokeWidth="1" />
      {/* Core light */}
      <circle cx="200" cy="220" r="14" fill="#0D0D1C" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="200" cy="220" r="6" fill="#3B82F6" opacity="0.4" />
      {/* Chest detail lines */}
      <line x1="160" y1="268" x2="240" y2="268" stroke="#3A3A50" strokeWidth="1" />
      <line x1="168" y1="282" x2="232" y2="282" stroke="#3A3A50" strokeWidth="0.75" />
      <line x1="175" y1="296" x2="225" y2="296" stroke="#3A3A50" strokeWidth="0.5" />

      {/* Left arm */}
      <circle cx="118" cy="172" r="12" fill="#0D0D1C" stroke="#3A3A50" strokeWidth="1.5" />
      <rect x="80" y="178" width="38" height="105" rx="14" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      {/* Left forearm detail */}
      <line x1="92" y1="220" x2="110" y2="220" stroke="#3A3A50" strokeWidth="0.75" />
      {/* Left hand */}
      <rect x="82" y="288" width="34" height="38" rx="12" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1" />

      {/* Right arm */}
      <circle cx="282" cy="172" r="12" fill="#0D0D1C" stroke="#3A3A50" strokeWidth="1.5" />
      <rect x="282" y="178" width="38" height="105" rx="14" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      <line x1="290" y1="220" x2="312" y2="220" stroke="#3A3A50" strokeWidth="0.75" />
      {/* Right hand */}
      <rect x="284" y="288" width="34" height="38" rx="12" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1" />
      {/* Dental tool */}
      <line x1="301" y1="326" x2="301" y2="385" stroke="#8B8BA8" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="301" cy="390" rx="7" ry="5" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
      <circle cx="301" cy="390" r="2" fill="#3B82F6" opacity="0.5" />

      {/* Legs */}
      <rect x="148" y="318" width="42" height="115" rx="14" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      <rect x="210" y="318" width="42" height="115" rx="14" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1.5" />
      {/* Knee joints */}
      <circle cx="169" cy="372" r="7" fill="#0D0D1C" stroke="#3A3A50" strokeWidth="1" />
      <circle cx="231" cy="372" r="7" fill="#0D0D1C" stroke="#3A3A50" strokeWidth="1" />
      {/* Feet */}
      <rect x="138" y="433" width="60" height="22" rx="10" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1" />
      <rect x="202" y="433" width="60" height="22" rx="10" fill="url(#bodyGrad)" stroke="#3A3A50" strokeWidth="1" />

      {/* Ground reflection */}
      <ellipse cx="200" cy="468" rx="120" ry="10" fill="#3B82F6" opacity="0.04" />
    </svg>
  );
}
