import { DanovixLogo, DanovixMonogram } from "./danovix-logo";

const COLORS = [
  { name: "Matte Black", hex: "#111111", role: "Primary" },
  { name: "Ivory White", hex: "#F8F7F4", role: "Background" },
  { name: "Champagne Gold", hex: "#C6A15B", role: "Accent" },
  { name: "Stone Gray", hex: "#D7D7D7", role: "Secondary" },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-danovix-accent">
      {children}
    </p>
  );
}

function DeckTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl font-light tracking-[0.04em] text-danovix-primary md:text-4xl">
      {children}
    </h2>
  );
}

export function BrandIdentityDeck() {
  return (
    <div className="bg-danovix-background text-danovix-primary">
      <header className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <SectionLabel>Brand Identity System</SectionLabel>
        <div className="max-w-[1040px]">
          <DanovixLogo sizes="1040px" className="w-full max-w-[min(100%,1040px)]" />
        </div>
        <p className="mt-10 max-w-xl text-sm leading-7 text-danovix-primary/65">
          Visual identity for a premium global fashion house. Timeless,
          architectural, and editorial — designed to endure across every touchpoint
          from leather embossing to digital interfaces.
        </p>
      </header>

      <section className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-20">
        <SectionLabel>01 — Primary Logo</SectionLabel>
        <DeckTitle>DV monogram lockup</DeckTitle>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-danovix-primary/60">
          The official DANOVIX mark — gold monogram on matte black. Designed for
          navigation, packaging, hardware, and digital applications.
        </p>
        <div className="mt-12 rounded-[24px] border border-danovix-primary/8 bg-danovix-primary p-10 md:p-16 lg:p-20">
          <DanovixLogo sizes="1120px" className="mx-auto w-full max-w-[min(100%,1120px)]" />
        </div>
      </section>

      <section className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-20">
        <SectionLabel>02 — Monogram</SectionLabel>
        <DeckTitle>DV architectural lockup</DeckTitle>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-danovix-primary/60">
          Minimal DV monogram for hardware, embossing, favicon, and packaging.
          Balanced geometry suitable from 16px to billboard scale.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="flex aspect-square items-center justify-center rounded-[24px] border border-danovix-primary/8 bg-white p-12 md:p-16">
            <DanovixMonogram variant="black" className="max-w-[180px]" />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-[24px] bg-danovix-primary p-12 md:p-16">
            <DanovixMonogram variant="white" className="max-w-[180px]" />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-[24px] bg-danovix-primary p-12 md:p-16">
            <DanovixMonogram variant="gold" className="max-w-[180px]" />
          </div>
        </div>
      </section>

      <section className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-20">
        <SectionLabel>03 — Logo Application</SectionLabel>
        <DeckTitle>Primary mark on brand backgrounds</DeckTitle>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex min-h-[280px] flex-col justify-between rounded-[24px] bg-danovix-primary p-10 md:min-h-[320px] md:p-14">
            <p className="text-[10px] uppercase tracking-[0.28em] text-danovix-background/45">
              On Black
            </p>
            <DanovixLogo sizes="800px" className="w-full max-w-[560px]" />
          </div>
          <div className="flex min-h-[280px] flex-col justify-between rounded-[24px] border border-danovix-primary/8 bg-white p-10 md:min-h-[320px] md:p-14">
            <p className="text-[10px] uppercase tracking-[0.28em] text-danovix-primary/45">
              On Ivory
            </p>
            <DanovixLogo sizes="800px" className="w-full max-w-[560px]" />
          </div>
        </div>
      </section>

      <section className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-20">
        <SectionLabel>04 — Color System</SectionLabel>
        <DeckTitle>Brand palette</DeckTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLORS.map((color) => (
            <div
              key={color.hex}
              className="overflow-hidden rounded-[18px] border border-danovix-primary/8"
            >
              <div
                className="h-32 md:h-40"
                style={{ backgroundColor: color.hex }}
              />
              <div className="bg-white p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-danovix-primary/45">
                  {color.role}
                </p>
                <p className="mt-1 font-medium">{color.name}</p>
                <p className="mt-1 font-mono text-xs text-danovix-primary/55">
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-danovix-primary/8 px-6 py-16 md:px-12 lg:px-20 lg:py-20">
        <SectionLabel>05 — Applications</SectionLabel>
        <DeckTitle>Touchpoint mockups</DeckTitle>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <MockupEmbossedLeather />
          <MockupShoppingBag />
          <MockupBusinessCard />
          <MockupWebsiteHeader />
          <MockupPackaging />
          <MockupMetalHardware />
          <MockupDustBag />
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <SectionLabel>06 — Scalability</SectionLabel>
        <DeckTitle>Recognizable at every size</DeckTitle>
        <div className="mt-12 flex flex-wrap items-end gap-10 md:gap-14">
          {[128, 256, 512].map((size) => (
            <div key={size} className="flex flex-col items-center gap-3">
              <DanovixLogo
                sizes={`${size}px`}
                className="w-auto"
                style={{ height: size, width: "auto" }}
              />
              <span className="font-mono text-[10px] text-danovix-primary/45">
                {size}px
              </span>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[24px] border border-danovix-primary/8 bg-white p-8 md:p-12">
          <DanovixLogo sizes="1800px" className="w-full max-w-full" />
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-danovix-primary/40">
            Full wordmark — billboard scale
          </p>
        </div>
      </section>

      <footer className="border-t border-danovix-primary/8 px-6 py-10 text-center text-[10px] uppercase tracking-[0.3em] text-danovix-primary/40 md:px-12">
        DANOVIX Brand Identity — Confidential
      </footer>
    </div>
  );
}

function MockupEmbossedLeather() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="bg-[#3d342c] p-10 md:p-14">
        <div className="relative flex min-h-[220px] items-center justify-center rounded-[12px] bg-[#4a4038] md:min-h-[280px]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(92deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
            }}
          />
          <DanovixMonogram
            variant="white"
            className="max-w-[140px] opacity-[0.18] md:max-w-[180px]"
          />
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Embossed Leather
      </p>
    </div>
  );
}

function MockupShoppingBag() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="flex min-h-[320px] items-end justify-center bg-danovix-background p-10 md:min-h-[380px] md:p-14">
        <div className="relative w-full max-w-[280px]">
          <div className="mx-auto h-[300px] w-[240px] bg-danovix-primary">
            <div className="flex h-full flex-col items-center justify-center px-8">
              <DanovixLogo sizes="400px" className="w-full max-w-[360px]" />
            </div>
          </div>
          <div className="absolute -top-3 left-1/2 h-16 w-px -translate-x-1/2 bg-danovix-primary/30" />
          <div className="absolute -top-3 left-[calc(50%-48px)] h-16 w-px rotate-12 bg-danovix-primary/30" />
          <div className="absolute -top-3 left-[calc(50%+48px)] h-16 w-px -rotate-12 bg-danovix-primary/30" />
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Shopping Bag
      </p>
    </div>
  );
}

function MockupBusinessCard() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="flex min-h-[320px] items-center justify-center bg-[#eceae6] p-10 md:min-h-[380px]">
        <div className="w-full max-w-[340px] rounded-[8px] bg-white p-10 md:p-12">
          <DanovixLogo sizes="480px" className="w-full max-w-[440px]" />
          <div className="mt-10 space-y-1 text-[11px] leading-6 text-danovix-primary/55">
            <p>Creative Director</p>
            <p>danovix.com</p>
            <p>New York · London</p>
          </div>
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Business Card
      </p>
    </div>
  );
}

function MockupWebsiteHeader() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="min-h-[320px] bg-danovix-primary p-6 md:min-h-[380px] md:p-8">
        <div className="overflow-hidden rounded-[12px] border border-danovix-background/10">
          <div className="flex h-14 items-center justify-between bg-danovix-primary/60 px-6 backdrop-blur-md">
            <DanovixLogo sizes="280px" className="w-full max-w-[240px]" />
            <div className="hidden gap-6 sm:flex">
              {["Collection", "About", "Journal"].map((item) => (
                <span
                  key={item}
                  className="text-[9px] uppercase tracking-[0.2em] text-danovix-background/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="h-[220px] bg-[#c8c0b4]" />
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Website Header
      </p>
    </div>
  );
}

function MockupPackaging() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="flex min-h-[320px] items-center justify-center bg-danovix-background p-10 md:min-h-[380px]">
        <div className="relative h-[200px] w-full max-w-[300px] bg-danovix-primary md:h-[240px]">
          <div className="absolute inset-x-0 top-0 h-px bg-danovix-accent/40" />
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <DanovixMonogram variant="gold" className="max-w-[72px]" />
            <DanovixLogo sizes="360px" className="w-full max-w-[320px]" />
          </div>
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Luxury Packaging
      </p>
    </div>
  );
}

function MockupMetalHardware() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8">
      <div className="flex min-h-[320px] items-center justify-center bg-[#e8e6e2] p-10 md:min-h-[380px]">
        <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full border border-[#b8a88a] bg-[#d4c4a8] md:h-[200px] md:w-[200px]">
          <DanovixMonogram variant="black" className="max-w-[80px] opacity-80 md:max-w-[100px]" />
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Metal Hardware
      </p>
    </div>
  );
}

function MockupDustBag() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-danovix-primary/8 lg:col-span-2">
      <div className="flex min-h-[280px] items-center justify-center bg-[#f0eeea] p-10 md:min-h-[340px] md:p-16">
        <div className="relative w-full max-w-[480px] rounded-[4px] bg-[#f8f7f4] px-12 py-16 md:px-20 md:py-20">
          <div className="absolute left-6 top-0 h-full w-px bg-danovix-primary/8 md:left-10" />
          <div className="flex flex-col items-center gap-6">
            <DanovixMonogram variant="black" className="max-w-[64px]" />
            <DanovixLogo sizes="800px" className="w-full max-w-[min(100%,720px)]" />
          </div>
        </div>
      </div>
      <p className="bg-white px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-danovix-primary/50">
        Cotton Dust Bag
      </p>
    </div>
  );
}
