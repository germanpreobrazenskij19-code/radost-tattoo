export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M24 2 L24 46 M2 24 L46 24 M8.2 8.2 L39.8 39.8 M39.8 8.2 L8.2 39.8"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <polygon
        points="24,8 37.8,16 37.8,32 24,40 10.2,32 10.2,16"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function GeometryField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="0.6">
        {[-1, 0, 1].flatMap((dx) =>
          [-1, 0, 1].map((dy) => (
            <circle
              key={`${dx}-${dy}`}
              cx={400 + dx * 90}
              cy={400 + dy * 90}
              r="90"
            />
          )),
        )}
        <circle cx="400" cy="400" r="180" />
        <circle cx="400" cy="400" r="270" />
        <circle cx="400" cy="400" r="360" />
      </g>
    </svg>
  );
}
