import { notFound } from "next/navigation";
import Link from "next/link";
import { getVendorBySlug, vendors } from "@/lib/vendors";
import { Vendor, Review } from "@/types/vendor";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return vendors.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);
  if (!vendor) return {};
  return {
    title: `${vendor.name} – PortaFind New England`,
    description: vendor.description,
  };
}

const stateLabels: Record<string, string> = {
  CT: "Connecticut",
  RI: "Rhode Island",
  MA: "Massachusetts",
};

const priceLabel: Record<string, string> = {
  $: "Budget",
  $$: "Moderate",
  $$$: "Premium",
  $$$$: "Luxury",
};

const priceColor: Record<string, string> = {
  $: "bg-green-50 text-green-700 border-green-200",
  $$: "bg-blue-50 text-blue-700 border-blue-200",
  $$$: "bg-purple-50 text-purple-700 border-purple-200",
  $$$$: "bg-amber-50 text-amber-700 border-amber-200",
};

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sz = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3 h-3" : "w-4 h-4";
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sz} ${
            rating >= star ? "text-amber-400" : rating >= star - 0.5 ? "text-amber-300" : "text-slate-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            {review.author[0]}
          </div>
          <span className="font-semibold text-slate-700 text-sm">{review.author}</span>
        </div>
        <span className="text-slate-400 text-xs">{new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
      </div>
      <StarRating rating={review.rating} size="sm" />
      <p className="text-slate-600 text-sm mt-2 leading-relaxed">{review.comment}</p>
    </div>
  );
}

export default async function VendorDetailPage({ params }: Props) {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);
  if (!vendor) notFound();

  const ratingBars = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: vendor.reviews.filter((r) => r.rating === star).length,
    pct: vendor.reviews.length
      ? Math.round((vendor.reviews.filter((r) => r.rating === star).length / vendor.reviews.length) * 100)
      : 0,
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
        <span>›</span>
        <Link href="/vendors" className="hover:text-emerald-700 transition-colors">Vendors</Link>
        <span>›</span>
        <Link href={`/vendors?state=${vendor.state}`} className="hover:text-emerald-700 transition-colors">
          {stateLabels[vendor.state]}
        </Link>
        <span>›</span>
        <span className="text-slate-700 font-medium">{vendor.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {vendor.featured && (
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full px-2.5 py-0.5 mb-2">
                    ★ Featured Vendor
                  </span>
                )}
                <h1 className="text-2xl font-extrabold text-slate-800">{vendor.name}</h1>
                <p className="text-slate-500 mt-1">
                  {vendor.city}, {stateLabels[vendor.state]}
                </p>
              </div>
              <span
                className={`text-sm font-bold border rounded-full px-3 py-1 shrink-0 ${priceColor[vendor.priceRange]}`}
              >
                {vendor.priceRange} · {priceLabel[vendor.priceRange]}
              </span>
            </div>

            {/* Rating summary */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold text-slate-800">{vendor.rating.toFixed(1)}</span>
              <div>
                <StarRating rating={vendor.rating} size="lg" />
                <p className="text-slate-500 text-xs mt-1">{vendor.reviewCount} reviews</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">{vendor.description}</p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-800 text-lg mb-4">Services Offered</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vendor.services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-800 text-lg mb-4">Service Area</h2>
            <div className="flex flex-wrap gap-2">
              {vendor.serviceArea.map((area) => (
                <span
                  key={area}
                  className="bg-slate-100 text-slate-600 text-sm rounded-full px-3 py-1"
                >
                  📍 {area}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-800 text-lg mb-6">Customer Reviews</h2>

            {/* Rating breakdown */}
            <div className="flex gap-6 items-center mb-6 pb-6 border-b border-slate-100">
              <div className="text-center shrink-0">
                <p className="text-4xl font-extrabold text-slate-800">{vendor.rating.toFixed(1)}</p>
                <StarRating rating={vendor.rating} size="md" />
                <p className="text-slate-400 text-xs mt-1">{vendor.reviewCount} total</p>
              </div>
              <div className="flex-1 space-y-1.5">
                {ratingBars.map(({ star, count, pct }) => (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 w-3">{star}</span>
                    <svg className="w-3 h-3 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-amber-400 h-full rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-slate-400 w-5 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {vendor.reviews.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-6">No reviews yet.</p>
            ) : (
              <div className="space-y-3">
                {vendor.reviews.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-20">
            <h3 className="font-bold text-slate-800 mb-4">Contact This Vendor</h3>
            <a
              href={`tel:${vendor.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 py-3 font-semibold transition-colors text-sm mb-3"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              {vendor.phone}
            </a>
            {vendor.website && (
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 rounded-xl px-4 py-3 font-semibold transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            )}

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span className="font-medium">Location</span>
                <span>{vendor.city}, {vendor.state}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-medium">Price Range</span>
                <span className="font-semibold text-emerald-700">{vendor.priceRange}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-medium">Rating</span>
                <span className="font-semibold">{vendor.rating.toFixed(1)} / 5.0</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-medium">Reviews</span>
                <span>{vendor.reviewCount}</span>
              </div>
            </div>
          </div>

          {/* Back link */}
          <Link
            href={`/vendors?state=${vendor.state}`}
            className="block text-center text-sm text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
          >
            ← More vendors in {stateLabels[vendor.state]}
          </Link>
        </div>
      </div>
    </div>
  );
}
