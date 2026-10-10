export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#1F2A37] bg-[#121821] p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%)]" aria-hidden="true" />
      <svg viewBox="0 0 420 320" className="relative z-10 h-auto w-full" role="img" aria-label="Stylized office network illustration">
        <rect x="18" y="120" width="120" height="94" rx="12" fill="#161F2B" stroke="#1F2A37" />
        <rect x="36" y="138" width="84" height="14" rx="7" fill="#0B0F14" />
        <rect x="36" y="164" width="56" height="10" rx="5" fill="#22D3EE" opacity="0.9" />
        <rect x="36" y="182" width="70" height="10" rx="5" fill="#1F2A37" />

        <rect x="280" y="92" width="120" height="96" rx="12" fill="#161F2B" stroke="#1F2A37" />
        <rect x="298" y="110" width="84" height="14" rx="7" fill="#0B0F14" />
        <rect x="298" y="136" width="62" height="10" rx="5" fill="#22D3EE" opacity="0.9" />
        <rect x="298" y="154" width="74" height="10" rx="5" fill="#1F2A37" />

        <circle cx="210" cy="165" r="46" fill="#121821" stroke="#22D3EE" strokeWidth="2" />
        <circle cx="210" cy="165" r="12" fill="#22D3EE" />
        <path d="M210 112V78M210 254v-34M157 165H122M298 165h-34M177 128l-22-20M243 128l22-20M177 202l-22 20M243 202l22 20" stroke="#8B98A8" strokeWidth="2" strokeLinecap="round" />
        <path d="M138 168h50M234 168h50M180 128l20-18 20 18M180 202l20 18 20-18" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="150" y="236" width="120" height="40" rx="12" fill="#161F2B" stroke="#1F2A37" />
        <rect x="170" y="252" width="80" height="10" rx="5" fill="#1F2A37" />
      </svg>
    </div>
  );
}
