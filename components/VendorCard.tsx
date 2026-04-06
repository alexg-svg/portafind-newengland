import Link from "next/link";
import { Vendor } from "@/types/vendor";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            rating >= star
              ? "text-amber-400"
              : rating >= star - 0.5
              ? "text-amber-300"
              : "text-slate-200"
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

const priceColor: Record<string, string> = {
  $: "bg-green-50 text-green-700 border-green-200",
  $$: "bg-blue-50 text-blue-700 border-blue-200",
  $$$: "bg-purple-50 text-purple-700 border-purple-200",
  $$$$: "bg-amber-50 text-amber-700 border-amber-200",
};

const stateLabels: Record<string, string> = { CT: "Connecticut", RI: "Rhode Island", MA: "Massachusetts" };

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Link
      href={`/vendors/${vendor.slug}`}
      className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-3 hover:border-emerald-400 hover:shadow-md transition-all group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors leading-tight">
            {vendor.name}
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">
            {vendor.city}, {stateLabels[vendor.state]}
          </p>
        </div>
        <span
          className={`text-xs font-bold border rounded-full px-2.5 py-0.5 shrink-0 ${priceColor[vendor.priceRange]}`}
        >
          {vendor.priceRange}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <StarRating rating={vendor.rating} />
        <span className="text-sm font-semibold text-slate-700">{vendor.rating.toFixed(1)}</span>
        <span className="text-xs text-slate-400">({vendor.reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm line-clamp-2">{vendor.description}</p>

      {/* Services */}
      <div className="flex flex-wrap gap-1.5">
        {vendor.services.slice(0, 3).map((s) => (
          <span
            key={s}
            className="bg-slate-100 text-slate-600 text-xs rounded-full px-2.5 py-0.5"
          >
            {s}
          </span>
        ))}
        {vendor.services.length > 3 && (
          <span className="bg-slate-100 text-slate-400 text-xs rounded-full px-2.5 py-0.5">
            +{vendor.services.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 mt-auto">
        {vendor.featured && (
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <span>★</span> Featured
          </span>
        )}
        <span className="text-emerald-700 text-sm font-semibold ml-auto group-hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
}
