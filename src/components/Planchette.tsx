interface PlanchetteProps {
  position: { x: number; y: number };
  isMoving: boolean;
}

export default function Planchette({ position, isMoving }: PlanchetteProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        transition: isMoving ? 'all 0.6s ease-in-out' : 'none',
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className={`drop-shadow-2xl ${isMoving ? 'animate-pulse' : ''}`}
      >
        <defs>
          <radialGradient id="planchetteGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 50 10 L 90 90 Q 50 85 10 90 Z"
          fill="url(#planchetteGradient)"
          stroke="#78350f"
          strokeWidth="2"
          filter="url(#glow)"
        />

        <circle
          cx="50"
          cy="50"
          r="12"
          fill="#fef3c7"
          stroke="#78350f"
          strokeWidth="2"
          opacity="0.9"
        />

        <circle cx="50" cy="50" r="6" fill="#78350f" opacity="0.3" />
      </svg>
    </div>
  );
}
