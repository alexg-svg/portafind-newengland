import Link from "next/link";
import { getFilteredVendors } from "@/lib/vendors";
import { VendorCard } from "@/components/VendorCard";

interface Props {
  searchParams: Promise<{ state?: string; priceRange?: string; minRating?: string; search?: string }>;
}

const STATE_OPTIONS = [
  { value: "all", label: "All States" },
  { value: "CT", label: "Connecticut" },
  { value: "RI", label: "Rhode Island" },
  { value: "MA", label: "Massachusetts" },
];

const PRICE_OPTIONS = [
  { value: "all", label: "Any Price" },
  { value: "$", label: "$ – Budget" },
  { value: "$$", label: "$$ – Moderate" },
  { value: "$$$", label: "$$$ – Premium" },
  { value: "$$$$", label: "$$$$ – Luxury" },
];

const RATING_OPTIONS = [
  { value: "", label: "Any Rating" },
  { value: "4.5", label: "4.5+ Stars" },
  { value: "4", label: "4.0+ Stars" },
  { value: "3.5", label: "3.5+ Stars" },
];

function buildUrl(
  current: Record<string, string | undefined>,
  overrides: Record<string, string | undefined>
): string {
  const params = new URLSearchParams();
  const merged = { ...current, ...overrides };
  for (const [k, v] of Object.entries(merged)) {
    if (v && v !== "all" && v !== "") params.set(k, v);
  }
  const str = params.toString();
  return `/vendors${str ? `?${str}` : ""}`;
}

export default async function VendorsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const state = sp.state || "all";
  const priceRange = sp.priceRange || "all";
  const minRating = sp.minRating ? parseFloat(sp.minRating) : undefined;
  const search = sp.search || "";

  const results = getFilteredVendors({
    state: state === "all" ? undefined : state,
    priceRange: priceRange === "all" ? undefined : priceRange,
    minRating,
    search: search || undefined,
  });

  const currentParams = { state, priceRange, minRating: sp.minRating, search };

  const activeFilters = [
    state !== "all" && state,
    priceRange !== "all" && priceRange,
    minRating && `${minRating}+ stars`,
    search && `"${search}"`,
  ].filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800">
          {state === "all"
            ? "All Porta Potty Vendors"
            : `Porta Potty Vendors in ${STATE_OPTIONS.find((o) => o.value === state)?.label}`}
        </h1>
        <p className="text-slate-500 mt-1">
          {results.length} vendor{results.length !== 1 ? "s" : ""} found
          {activeFilters.length > 0 && ` · Filtered by: ${activeFilters.join(", ")}`}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-60 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-20">
            <h2 className="font-bold text-slate-700 mb-4">Filter Results</h2>

            {/* Search */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Search
              </label>
              <form method="GET" action="/vendors">
                {state !== "all" && <input type="hidden" name="state" value={state} />}
                {priceRange !== "all" && (
                  <input type="hidden" name="priceRange" value={priceRange} />
                )}
                {minRating && (
                  <input type="hidden" name="minRating" value={String(minRating)} />
                )}
                <input
                  type="text"
                  name="search"
                  defaultValue={search}
                  placeholder="Vendor name, city, service…"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg py-2 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>

            {/* State */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">State</p>
              <div className="flex flex-col gap-1">
                {STATE_OPTIONS.map((o) => (
                  <Link
                    key={o.value}
                    href={buildUrl(currentParams, { state: o.value, search })}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      state === o.value
                        ? "bg-emerald-600 text-white font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Price Range
              </p>
              <div className="flex flex-col gap-1">
                {PRICE_OPTIONS.map((o) => (
                  <Link
                    key={o.value}
                    href={buildUrl(currentParams, { priceRange: o.value, search })}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      priceRange === o.value
                        ? "bg-emerald-600 text-white font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Min Rating */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Minimum Rating
              </p>
              <div className="flex flex-col gap-1">
                {RATING_OPTIONS.map((o) => (
                  <Link
                    key={o.value}
                    href={buildUrl(currentParams, { minRating: o.value, search })}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      (sp.minRating || "") === o.value
                        ? "bg-emerald-600 text-white font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </div>

            {activeFilters.length > 0 && (
              <Link
                href="/vendors"
                className="mt-5 block text-center text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
              >
                ✕ Clear all filters
              </Link>
            )}
          </div>
        </aside>

        {/* Results Grid */}
        <div className="flex-1">
          {results.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <p className="text-4xl mb-4">🚽</p>
              <h3 className="font-bold text-slate-700 text-lg mb-2">No vendors found</h3>
              <p className="text-slate-500 text-sm mb-5">
                Try adjusting your filters or searching for a different term.
              </p>
              <Link
                href="/vendors"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {results.map((v) => (
                <VendorCard key={v.id} vendor={v} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
