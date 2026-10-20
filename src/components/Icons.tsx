import { useId } from "react";

type IconProps = { className?: string };

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ícones de linha, finos e abstratos (sem dentes genéricos). */
function Line({ className = "h-6 w-6", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export const PinIcon = (p: IconProps) => (
  <Line {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Line>
);
export const ClockIcon = (p: IconProps) => (
  <Line {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Line>
);
export const CheckIcon = (p: IconProps) => (
  <Line {...p}><circle cx="12" cy="12" r="8.5" /><path d="m8.5 12.2 2.4 2.3 4.6-4.8" /></Line>
);
export const RootIcon = (p: IconProps) => (
  <Line {...p}><path d="M12 3v7" /><path d="M8 6.5h8" /><path d="M7 10h10l-1.2 4.5L14 21h-4l-1.8-6.5Z" /></Line>
);
export const LayersIcon = (p: IconProps) => (
  <Line {...p}><path d="m12 4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" /></Line>
);
export const FacetIcon = (p: IconProps) => (
  <Line {...p}><path d="M12 3 20 9l-3 11H7L4 9Z" /><path d="M4 9h16M12 3v17" /></Line>
);
export const RestoreIcon = (p: IconProps) => (
  <Line {...p}><path d="M5 12a7 7 0 1 0 2-4.9" /><path d="M5 4v4h4" /></Line>
);
export const SunIcon = (p: IconProps) => (
  <Line {...p}><circle cx="12" cy="12" r="3.5" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></Line>
);
export const PlanIcon = (p: IconProps) => (
  <Line {...p}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" /></Line>
);
export const DetailIcon = (p: IconProps) => (
  <Line {...p}><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></Line>
);
export const LeafIcon = (p: IconProps) => (
  <Line {...p}><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" /><path d="M5 19 13 11" /></Line>
);
export const HeartIcon = (p: IconProps) => (
  <Line {...p}><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" /></Line>
);

/* ---------- Ícones odontológicos (traço fino, 24x24) ---------- */

const TOOTH =
  "M8 3C5.5 3 4 4.9 4 7.4c0 2.3.9 3.7 1.4 5.7.5 2.1.8 7.9 2.7 7.9 1.5 0 1.7-3.6 2.3-5.2.4-1 2.8-1 3.2 0 .6 1.6.8 5.2 2.3 5.2 1.9 0 2.2-5.8 2.7-7.9.5-2 1.4-3.4 1.4-5.7C20 4.9 18.5 3 16 3c-1.7 0-2.6.9-4 .9S9.7 3 8 3Z";

export const ToothIcon = (p: IconProps) => (
  <Line {...p}><path d={TOOTH} /></Line>
);
export const ToothImplantIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M7 2.5c-2 0-3 1.5-3 3.4 0 1.5.6 2.5 1 3.6h14c.4-1.1 1-2.1 1-3.6 0-1.9-1-3.4-3-3.4-1.6 0-2.8.8-5 .8s-3.4-.8-5-.8Z" />
    <path d="M9.2 9.5h5.6l-.6 11.5h-4.4Z" />
    <path d="M9.3 12.8h5.4M9.5 15.8h5M9.7 18.8h4.6" />
  </Line>
);
export const ToothVeneerIcon = (p: IconProps) => (
  <Line {...p}><path d={TOOTH} /><path d="M6.6 9.2c3.4 1.3 7.4 1.3 10.8 0" /><path d="M8.2 5.8c.7-.4 1.5-.5 2.3-.3" /></Line>
);
export const ToothFillingIcon = (p: IconProps) => (
  <Line {...p}><path d={TOOTH} /><circle cx="12" cy="8.6" r="2" fill="currentColor" stroke="none" /></Line>
);
export const ToothCheckIcon = (p: IconProps) => (
  <Line {...p}><path d={TOOTH} /><path d="m9.4 8.6 1.8 1.7 3.4-3.4" /></Line>
);
export const ToothShineIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M7.5 5C5.4 5 4.2 6.6 4.2 8.7c0 1.9.8 3.1 1.2 4.8.4 1.8.7 6.5 2.3 6.5 1.3 0 1.4-3 2-4.3.3-.8 2.3-.8 2.6 0 .5 1.3.7 4.3 2 4.3 1.6 0 1.8-4.7 2.3-6.5.4-1.7 1.2-2.9 1.2-4.8 0-.8-.2-1.5-.5-2.1" />
    <path d="M7.5 5c1.4 0 2.1.7 3.3.7" />
    <path d="M18.5 1.8v4M16.5 3.8h4M21 7.5v1.6M20.2 8.3h1.6" />
  </Line>
);
export const ToothHeartIcon = (p: IconProps) => (
  <Line {...p}><path d={TOOTH} /><path d="M12 11.3s-2.4-1.4-2.4-3a1.2 1.2 0 0 1 2.4-.5 1.2 1.2 0 0 1 2.4.5c0 1.6-2.4 3-2.4 3Z" /></Line>
);
export const ToothSearchIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M7 3C4.9 3 3.6 4.6 3.6 6.7c0 2 .8 3.2 1.2 4.9.4 1.8.7 6.4 2.3 6.4 1.2 0 1.4-3 1.9-4.3" />
    <path d="M7 3c1.5 0 2.2.8 3.4.8S12.5 3 14 3c2 0 3.2 1.5 3.4 3.4" />
    <circle cx="15" cy="13" r="3.5" /><path d="m17.6 15.6 3 3" />
  </Line>
);
export const CalendarIcon = (p: IconProps) => (
  <Line {...p}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="m9.5 15 1.8 1.6 3.3-3.3" /></Line>
);

/* ---------- Logotipos oficiais coloridos ---------- */

/** Ícone do Instagram com o degradê oficial. */
export function InstagramLogo({ className = "h-6 w-6" }: IconProps) {
  const id = `ig-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={id} cx="0.3" cy="1.07" r="1.3">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${id})`} />
      <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
    </svg>
  );
}

/** Ícone do WhatsApp no verde oficial. */
export function WhatsAppLogo({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        transform="translate(4.2 4.1) scale(0.66)"
        fill="#fff"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"
      />
    </svg>
  );
}
/** Dente dentro de um quadro de escaneamento (odontologia digital). */
export const ToothScanIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M9.6 7.5c-1.5 0-2.4 1.2-2.4 2.7 0 1.4.6 2.2.9 3.5.3 1.3.5 4.3 1.6 4.3.9 0 1-2 1.4-3 .2-.6 1.6-.6 1.8 0 .4 1 .5 3 1.4 3 1.1 0 1.3-3 1.6-4.3.3-1.3.9-2.1.9-3.5 0-1.5-.9-2.7-2.4-2.7-1 0-1.5.5-2.4.5s-1.4-.5-2.4-.5Z" />
    <path d="M3 7V4.5A1.5 1.5 0 0 1 4.5 3H7M17 3h2.5A1.5 1.5 0 0 1 21 4.5V7M21 17v2.5a1.5 1.5 0 0 1-1.5 1.5H17M7 21H4.5A1.5 1.5 0 0 1 3 19.5V17" />
  </Line>
);
