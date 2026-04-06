import Link from "next/link";
import { vendors } from "@/lib/vendors";
import { VendorCard } from "@/components/VendorCard";

const STATES = [
  {
    code: "CT",
    name: "Connecticut",
    emoji: "🏛️",
    desc: "From Fairfield County to the Quiet Corner",
  },
  {
    code: "RI",
    name: "Rhode Island",
    emoji: "⚓",
    desc: "Narragansett Bay to the Blackstone Valley",
  },
  {
    code: "MA",
    name: "Massachusetts",
    emoji: "🦞",
    desc: "Boston Metro, Cape Cod, Western Mass & more",
  },
];

const PRICE_RANGES = [
  { label: "$", name: "Budget", desc: "Affordable, no-frills rentals" },
  { label: "$$", name: "Moderate", desc: "Great value with solid service" },
  { label: "$$$", name: "Premium", desc: "Higher-end units and amenities" },
  { label: "$$$$", name: "Luxury", desc: "Upscale trailers and VIP service" },
];

export default function HomePage() {
  const featured = vendors.filter((v) => v.featured);
  const topRated = [...vendors].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-300 font-medium text-sm uppercase tracking-widest mb-3">
            Connecticut · Rhode Island · Massachusetts
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Find Porta Potty Rentals<br className="hidden sm:block" /> Across New England
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            Compare vendors by price range and customer reviews. Whether it's a construction site,
            outdoor wedding, or community event — we've got you covered.
          </p>

          {/* Quick state links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {STATES.map((s) => (
              <Link
                key={s.code}
                href={`/vendors?state=${s.code}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 text-sm font-semibold transition-colors"
              >
                {s.emoji} {s.name}
              </Link>
            ))}
            <Link
              href="/vendors"
              className="bg-white text-emerald-800 hover:bg-emerald-50 rounded-full px-5 py-2 text-sm font-semibold transition-colors"
            >
              Browse All Vendors →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-slate-200 text-center">
          <div className="px-4">
            <p className="text-2xl font-bold text-emerald-700">{vendors.length}</p>
            <p className="text-xs text-slate-500 mt-0.5">Vendors Listed</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-bold text-emerald-700">3</p>
            <p className="text-xs text-slate-500 mt-0.5">States Covered</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-bold text-emerald-700">
              {vendors.reduce((acc, v) => acc + v.reviewCount, 0).toLocaleString()}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">Customer Reviews</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Browse by State */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Browse by State</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {STATES.map((s) => {
              const count = vendors.filter((v) => v.state === s.code).length;
              return (
                <Link
                  key={s.code}
                  href={`/vendors?state=${s.code}`}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">{s.desc}</p>
                  <p className="text-emerald-600 text-sm font-semibold mt-3">
                    {count} vendor{count !== 1 ? "s" : ""} listed →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Price Range */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Browse by Price Range</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PRICE_RANGES.map((p) => {
              const count = vendors.filter((v) => v.priceRange === p.label).length;
              return (
                <Link
                  key={p.label}
                  href={`/vendors?priceRange=${encodeURIComponent(p.label)}`}
                  className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-emerald-400 hover:shadow-md transition-all group text-center"
                >
                  <p className="text-2xl font-bold text-emerald-600 mb-1">{p.label}</p>
                  <p className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">
                    {p.name}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">{p.desc}</p>
                  <p className="text-slate-400 text-xs mt-2">
                    {count} vendor{count !== 1 ? "s" : ""}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Vendors */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Featured Vendors</h2>
            <Link
              href="/vendors"
              className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold transition-colors"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((v) => (
              <VendorCard key={v.id} vendor={v} />
            ))}
          </div>
        </section>

        {/* Top Rated */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Top Rated</h2>
            <Link
              href="/vendors?minRating=4.5"
              className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold transition-colors"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRated.map((v) => (
              <VendorCard key={v.id} vendor={v} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
