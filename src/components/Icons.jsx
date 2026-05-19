function IconBase({ className = 'w-4 h-4', children, viewBox = '0 0 24 24', ...props }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function RocketIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5 20 4m-7.5 1.5c2.5-2.5 5.5-3 7.5-1 2 2 1.5 5-1 7.5l-5.5 5.5-6 1.5 1.5-6 5.5-5.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 11 9 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c1.5-3 4-4 7-5" />
    </IconBase>
  )
}

export function ZapIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </IconBase>
  )
}

export function WrenchIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5a5.5 5.5 0 0 1-7.47 5.14L7.5 18.68a2.12 2.12 0 1 1-3-3l6.04-6.03A5.5 5.5 0 0 1 16 3a3.5 3.5 0 0 0 5 4.5Z" />
    </IconBase>
  )
}

export function ChartIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16v-7" />
    </IconBase>
  )
}

export function MessageIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 18.5c-2.58 0-4.5-1.92-4.5-4.5V8c0-2.58 1.92-4.5 4.5-4.5h10c2.58 0 4.5 1.92 4.5 4.5v6c0 2.58-1.92 4.5-4.5 4.5h-5.5L7 21v-2.5Z" />
    </IconBase>
  )
}

export function SparklesIcon({ className }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3L7.5 7.5l3.3-1.2L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m18.5 13 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 12 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" />
    </IconBase>
  )
}

export function CheckCircleIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5" />
    </IconBase>
  )
}

export function ClockIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </IconBase>
  )
}