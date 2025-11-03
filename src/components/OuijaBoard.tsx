export default function OuijaBoard() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full drop-shadow-2xl"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="boardGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#d4a574" />
          <stop offset="100%" stopColor="#8b6f47" />
        </radialGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.5" />
        </filter>
      </defs>

      <rect
        x="50"
        y="50"
        width="700"
        height="500"
        rx="30"
        fill="url(#boardGradient)"
        stroke="#5a4a3a"
        strokeWidth="4"
        filter="url(#shadow)"
      />

      <rect
        x="60"
        y="60"
        width="680"
        height="480"
        rx="25"
        fill="none"
        stroke="#3a2a1a"
        strokeWidth="2"
      />

      <text x="150" y="90" className="fill-amber-900 text-4xl font-bold" textAnchor="middle">
        SIM
      </text>
      <circle cx="150" cy="90" r="45" fill="none" stroke="#5a4a3a" strokeWidth="3" />

      <text x="650" y="90" className="fill-amber-900 text-4xl font-bold" textAnchor="middle">
        NÃO
      </text>
      <circle cx="650" cy="90" r="45" fill="none" stroke="#5a4a3a" strokeWidth="3" />

      {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'].map((letter, i) => {
        const x = 120 + i * 45;
        const y = 180;
        return (
          <g key={letter}>
            <text
              x={x}
              y={y}
              className="fill-amber-950 text-3xl font-bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {letter}
            </text>
          </g>
        );
      })}

      {['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter, i) => {
        const x = 120 + i * 45;
        const y = 260;
        return (
          <g key={letter}>
            <text
              x={x}
              y={y}
              className="fill-amber-950 text-3xl font-bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {letter}
            </text>
          </g>
        );
      })}

      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, i) => {
        const x = 200 + i * 42;
        const y = 340;
        return (
          <g key={num}>
            <text
              x={x}
              y={y}
              className="fill-amber-950 text-2xl font-bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {num}
            </text>
          </g>
        );
      })}

      <g>
        <path
          d="M 200 450 Q 400 470 600 450"
          fill="none"
          stroke="#5a4a3a"
          strokeWidth="3"
        />
        <text
          x="400"
          y="460"
          className="fill-amber-900 text-3xl font-bold"
          textAnchor="middle"
        >
          ADEUS
        </text>
      </g>

      <path
        d="M 100 420 Q 150 400 200 420"
        fill="none"
        stroke="#5a4a3a"
        strokeWidth="2"
      />
      <path
        d="M 600 420 Q 650 400 700 420"
        fill="none"
        stroke="#5a4a3a"
        strokeWidth="2"
      />

      <circle cx="120" cy="150" r="8" fill="#8b6f47" opacity="0.5" />
      <circle cx="680" cy="150" r="8" fill="#8b6f47" opacity="0.5" />
      <circle cx="120" cy="380" r="8" fill="#8b6f47" opacity="0.5" />
      <circle cx="680" cy="380" r="8" fill="#8b6f47" opacity="0.5" />
    </svg>
  );
}
