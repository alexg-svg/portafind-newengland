import { Vendor } from "@/types/vendor";

export const vendors: Vendor[] = [
  // ── Connecticut ──────────────────────────────────────────────
  {
    id: "ct-001",
    name: "Nutmeg Sanitation",
    slug: "nutmeg-sanitation",
    state: "CT",
    city: "Hartford",
    phone: "(860) 555-0101",
    website: "https://nutmegsanitation.example.com",
    description:
      "Greater Hartford's go-to portable restroom provider since 1998. We serve construction sites, outdoor events, and residential projects across central Connecticut with clean, well-maintained units.",
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 87,
    services: [
      "Standard Portable Restrooms",
      "Deluxe Units",
      "ADA-Compliant Units",
      "Handwashing Stations",
      "Restroom Trailers",
    ],
    serviceArea: ["Hartford", "New Britain", "Bristol", "Meriden", "Middletown"],
    featured: true,
    reviews: [
      {
        id: "r1",
        author: "Mike T.",
        rating: 5,
        date: "2025-11-10",
        comment:
          "Used them for our backyard wedding. Units were spotless, dropped off on time, and the trailer was gorgeous.",
      },
      {
        id: "r2",
        author: "Sarah L.",
        rating: 4,
        date: "2025-10-02",
        comment:
          "Good price, responsive team. Driver was a few minutes late but called ahead. Would use again.",
      },
      {
        id: "r3",
        author: "Connor B.",
        rating: 5,
        date: "2025-09-14",
        comment: "Best service in Hartford. Always clean and priced right.",
      },
    ],
  },
  {
    id: "ct-002",
    name: "Constitution Portables",
    slug: "constitution-portables",
    state: "CT",
    city: "New Haven",
    phone: "(203) 555-0177",
    description:
      "Serving the greater New Haven area with affordable, reliable portable restroom rentals for events, job sites, and everything in between.",
    priceRange: "$",
    rating: 4.1,
    reviewCount: 52,
    services: [
      "Standard Portable Restrooms",
      "ADA-Compliant Units",
      "Handwashing Stations",
    ],
    serviceArea: ["New Haven", "Milford", "West Haven", "Hamden", "Branford"],
    reviews: [
      {
        id: "r4",
        author: "Denise R.",
        rating: 4,
        date: "2025-12-01",
        comment: "Very affordable and the units were clean. Will book again.",
      },
      {
        id: "r5",
        author: "Frank M.",
        rating: 3,
        date: "2025-08-20",
        comment:
          "Decent service but had to call twice to confirm pick-up. They got it done, just needed more communication.",
      },
    ],
  },
  {
    id: "ct-003",
    name: "Yankee Restroom Solutions",
    slug: "yankee-restroom-solutions",
    state: "CT",
    city: "Stamford",
    phone: "(203) 555-0222",
    website: "https://yankeerestroomsolutions.example.com",
    description:
      "Premium portable restroom and luxury restroom trailer rentals for Fairfield County's upscale events, corporate functions, and construction projects.",
    priceRange: "$$$$",
    rating: 4.9,
    reviewCount: 134,
    services: [
      "Luxury Restroom Trailers",
      "Climate-Controlled Units",
      "Standard Portable Restrooms",
      "ADA-Compliant Units",
      "VIP Event Restrooms",
      "Long-Term Construction Rentals",
    ],
    serviceArea: ["Stamford", "Greenwich", "Norwalk", "Darien", "Westport"],
    featured: true,
    reviews: [
      {
        id: "r6",
        author: "Amanda K.",
        rating: 5,
        date: "2026-01-15",
        comment:
          "Rented the luxury trailer for a 200-person gala. Guests kept complimenting it. Absolutely worth every penny.",
      },
      {
        id: "r7",
        author: "James W.",
        rating: 5,
        date: "2025-10-30",
        comment:
          "Flawless service start to finish. The team was professional and the trailer was immaculate.",
      },
      {
        id: "r8",
        author: "Patricia N.",
        rating: 5,
        date: "2025-09-05",
        comment:
          "I was blown away. This is not your typical porta potty company. Luxury is an understatement.",
      },
    ],
  },
  {
    id: "ct-004",
    name: "Valley Portables",
    slug: "valley-portables",
    state: "CT",
    city: "Waterbury",
    phone: "(203) 555-0399",
    description:
      "Family-owned portable sanitation company serving the Naugatuck Valley with honest pricing and dependable service since 2005.",
    priceRange: "$",
    rating: 3.9,
    reviewCount: 38,
    services: [
      "Standard Portable Restrooms",
      "Handwashing Stations",
      "Construction Site Packages",
    ],
    serviceArea: ["Waterbury", "Naugatuck", "Ansonia", "Derby", "Shelton"],
    reviews: [
      {
        id: "r9",
        author: "Tony A.",
        rating: 4,
        date: "2025-07-11",
        comment: "Good budget option. Nothing fancy but got the job done.",
      },
      {
        id: "r10",
        author: "Brenda C.",
        rating: 4,
        date: "2025-06-22",
        comment:
          "Very fair pricing, friendly owner. Had a minor issue and he fixed it same-day.",
      },
    ],
  },

  // ── Rhode Island ─────────────────────────────────────────────
  {
    id: "ri-001",
    name: "Ocean State Porta Pros",
    slug: "ocean-state-porta-pros",
    state: "RI",
    city: "Providence",
    phone: "(401) 555-0144",
    website: "https://oceanstateportapros.example.com",
    description:
      "Rhode Island's most reviewed portable restroom rental service. From intimate backyard parties to large-scale outdoor festivals in Providence and beyond.",
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 211,
    services: [
      "Standard Portable Restrooms",
      "Deluxe Flushing Units",
      "ADA-Compliant Units",
      "Restroom Trailers",
      "Handwashing Stations",
      "Event Packages",
    ],
    serviceArea: ["Providence", "Cranston", "Johnston", "North Providence", "Pawtucket"],
    featured: true,
    reviews: [
      {
        id: "r11",
        author: "Maria S.",
        rating: 5,
        date: "2025-12-18",
        comment:
          "Always my first call for any outdoor event. Reliable, affordable, and the trailers are beautiful.",
      },
      {
        id: "r12",
        author: "Dan F.",
        rating: 5,
        date: "2025-11-05",
        comment: "Five stars all the way. Units were perfectly clean for our 5K race.",
      },
      {
        id: "r13",
        author: "Lisa H.",
        rating: 4,
        date: "2025-09-30",
        comment:
          "Great service. Arrived early and picked up on time. Slightly pricey but worth it.",
      },
    ],
  },
  {
    id: "ri-002",
    name: "Narragansett Rentals",
    slug: "narragansett-rentals",
    state: "RI",
    city: "Warwick",
    phone: "(401) 555-0255",
    description:
      "Budget-friendly portable restroom rentals throughout Kent County and southern Rhode Island. Ideal for small events and short-term construction projects.",
    priceRange: "$",
    rating: 3.8,
    reviewCount: 44,
    services: [
      "Standard Portable Restrooms",
      "Handwashing Stations",
    ],
    serviceArea: ["Warwick", "Cranston", "East Greenwich", "West Warwick", "Coventry"],
    reviews: [
      {
        id: "r14",
        author: "Kevin P.",
        rating: 4,
        date: "2025-08-14",
        comment: "Cheapest in the area. Does the job. No complaints.",
      },
      {
        id: "r15",
        author: "Tina M.",
        rating: 3,
        date: "2025-07-01",
        comment:
          "OK experience. Unit wasn't fully stocked on arrival but they sent someone quickly.",
      },
    ],
  },
  {
    id: "ri-003",
    name: "Newport Luxury Loos",
    slug: "newport-luxury-loos",
    state: "RI",
    city: "Newport",
    phone: "(401) 555-0388",
    website: "https://newportluxuryloos.example.com",
    description:
      "Specializing in high-end restroom trailers for Newport's weddings, yacht club events, and private estate gatherings. We set the gold standard for portable luxury.",
    priceRange: "$$$$",
    rating: 5.0,
    reviewCount: 63,
    services: [
      "Luxury Restroom Trailers",
      "Climate-Controlled Trailers",
      "VIP Units",
      "Attendant Service",
    ],
    serviceArea: ["Newport", "Middletown", "Portsmouth", "Jamestown", "Tiverton"],
    featured: true,
    reviews: [
      {
        id: "r16",
        author: "Catherine B.",
        rating: 5,
        date: "2026-02-10",
        comment:
          "Rented for our Newport mansion wedding. Guests thought it was part of the venue. Absolutely perfect.",
      },
      {
        id: "r17",
        author: "Robert M.",
        rating: 5,
        date: "2025-10-22",
        comment:
          "The attendant service was a wonderful touch. Our guests were so impressed.",
      },
    ],
  },
  {
    id: "ri-004",
    name: "Bay State Sanitation RI",
    slug: "bay-state-sanitation-ri",
    state: "RI",
    city: "Woonsocket",
    phone: "(401) 555-0411",
    description:
      "Serving northern Rhode Island and the Blackstone Valley with dependable portable sanitation at competitive rates.",
    priceRange: "$$",
    rating: 4.2,
    reviewCount: 29,
    services: [
      "Standard Portable Restrooms",
      "ADA-Compliant Units",
      "Handwashing Stations",
      "Long-Term Rentals",
    ],
    serviceArea: ["Woonsocket", "North Smithfield", "Burrillville", "Cumberland", "Lincoln"],
    reviews: [
      {
        id: "r18",
        author: "Greg O.",
        rating: 4,
        date: "2025-05-17",
        comment: "Good company, responsive, reasonably priced. Solid option for the valley.",
      },
    ],
  },

  // ── Massachusetts ─────────────────────────────────────────────
  {
    id: "ma-001",
    name: "Bay State Portables",
    slug: "bay-state-portables",
    state: "MA",
    city: "Boston",
    phone: "(617) 555-0199",
    website: "https://baystate-portables.example.com",
    description:
      "Boston's premier portable restroom provider for major events, film productions, construction, and private parties. Serving the Metro Boston area with a large modern fleet.",
    priceRange: "$$$",
    rating: 4.5,
    reviewCount: 305,
    services: [
      "Standard Portable Restrooms",
      "Deluxe Flushing Units",
      "ADA-Compliant Units",
      "Luxury Restroom Trailers",
      "Handwashing Stations",
      "Holding Tank Service",
    ],
    serviceArea: ["Boston", "Cambridge", "Somerville", "Quincy", "Brookline", "Waltham"],
    featured: true,
    reviews: [
      {
        id: "r19",
        author: "Alexis R.",
        rating: 5,
        date: "2026-01-20",
        comment:
          "Used for the Boston Marathon viewing party. 20+ units, all delivered perfectly. Amazing logistics team.",
      },
      {
        id: "r20",
        author: "Tom D.",
        rating: 4,
        date: "2025-11-12",
        comment: "Great company, slight delay on delivery but communicated well. Clean units.",
      },
      {
        id: "r21",
        author: "Jessica L.",
        rating: 5,
        date: "2025-09-28",
        comment: "Very professional. Clean units, great pricing for the area.",
      },
    ],
  },
  {
    id: "ma-002",
    name: "Pioneer Valley Portables",
    slug: "pioneer-valley-portables",
    state: "MA",
    city: "Springfield",
    phone: "(413) 555-0266",
    description:
      "Western Massachusetts' affordable portable restroom rental company. Serving Springfield, Holyoke, and the entire Pioneer Valley at unbeatable prices.",
    priceRange: "$",
    rating: 4.0,
    reviewCount: 71,
    services: [
      "Standard Portable Restrooms",
      "Handwashing Stations",
      "ADA-Compliant Units",
    ],
    serviceArea: ["Springfield", "Holyoke", "Chicopee", "Westfield", "Northampton"],
    reviews: [
      {
        id: "r22",
        author: "Mark G.",
        rating: 4,
        date: "2025-10-08",
        comment:
          "Best price in western Mass. No frills but totally reliable. Used for a 3-month construction job.",
      },
      {
        id: "r23",
        author: "Kelly A.",
        rating: 4,
        date: "2025-07-19",
        comment: "Responsive and fair. Would recommend to anyone on a budget.",
      },
    ],
  },
  {
    id: "ma-003",
    name: "Cape & Islands Sanitation",
    slug: "cape-and-islands-sanitation",
    state: "MA",
    city: "Hyannis",
    phone: "(508) 555-0344",
    website: "https://capeislandssanitation.example.com",
    description:
      "Serving Cape Cod and the Islands with seasonal and year-round portable restroom rentals. Specialists in beach weddings, outdoor festivals, and oceanfront events.",
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 189,
    services: [
      "Standard Portable Restrooms",
      "Luxury Restroom Trailers",
      "ADA-Compliant Units",
      "Beach Event Packages",
      "Handwashing Stations",
    ],
    serviceArea: ["Hyannis", "Barnstable", "Falmouth", "Sandwich", "Yarmouth", "Martha's Vineyard"],
    featured: true,
    reviews: [
      {
        id: "r24",
        author: "Emily T.",
        rating: 5,
        date: "2025-08-05",
        comment:
          "Used for our Cape Cod beach wedding. The trailer was gorgeous and the team was so helpful setting up in the sand.",
      },
      {
        id: "r25",
        author: "Paul R.",
        rating: 5,
        date: "2025-07-28",
        comment:
          "Perfect for our Vineyard Music Festival. Professional delivery and very clean units throughout the weekend.",
      },
      {
        id: "r26",
        author: "Sandra F.",
        rating: 5,
        date: "2025-06-14",
        comment: "Five stars. Best on the Cape, hands down.",
      },
    ],
  },
  {
    id: "ma-004",
    name: "North Shore Porta",
    slug: "north-shore-porta",
    state: "MA",
    city: "Salem",
    phone: "(978) 555-0455",
    description:
      "North Shore Massachusetts portable restroom experts. From Salem's famous Halloween events to North Shore weddings and job sites, we've got you covered.",
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 112,
    services: [
      "Standard Portable Restrooms",
      "Deluxe Units",
      "ADA-Compliant Units",
      "Restroom Trailers",
      "Event Packages",
    ],
    serviceArea: ["Salem", "Beverly", "Peabody", "Lynn", "Gloucester", "Marblehead"],
    reviews: [
      {
        id: "r27",
        author: "Heather J.",
        rating: 5,
        date: "2025-11-01",
        comment:
          "Used them every year for Salem's HauntFest. Always reliable, always clean. Huge event and they never miss a beat.",
      },
      {
        id: "r28",
        author: "Chris V.",
        rating: 4,
        date: "2025-08-22",
        comment: "Great service for our outdoor concert. Reasonable prices for the North Shore.",
      },
    ],
  },
  {
    id: "ma-005",
    name: "Worcester Portables Plus",
    slug: "worcester-portables-plus",
    state: "MA",
    city: "Worcester",
    phone: "(508) 555-0577",
    description:
      "Central Massachusetts' full-service portable restroom provider. We serve events, construction sites, and special occasions throughout the Worcester region.",
    priceRange: "$$",
    rating: 4.3,
    reviewCount: 95,
    services: [
      "Standard Portable Restrooms",
      "ADA-Compliant Units",
      "Handwashing Stations",
      "Deluxe Units",
      "Long-Term Construction Rentals",
    ],
    serviceArea: ["Worcester", "Auburn", "Millbury", "Shrewsbury", "Leominster", "Fitchburg"],
    reviews: [
      {
        id: "r29",
        author: "Brian T.",
        rating: 4,
        date: "2025-10-15",
        comment:
          "Used for a 6-month commercial construction project. Regular service was always on schedule.",
      },
      {
        id: "r30",
        author: "Nicole D.",
        rating: 5,
        date: "2025-09-01",
        comment: "Great local company. Friendly owner, clean equipment.",
      },
    ],
  },
];

export function getVendorBySlug(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug);
}

export function getFilteredVendors(params: {
  state?: string;
  priceRange?: string;
  minRating?: number;
  search?: string;
}): Vendor[] {
  return vendors.filter((v) => {
    if (params.state && params.state !== "all" && v.state !== params.state) return false;
    if (params.priceRange && params.priceRange !== "all" && v.priceRange !== params.priceRange)
      return false;
    if (params.minRating && v.rating < params.minRating) return false;
    if (params.search) {
      const q = params.search.toLowerCase();
      if (
        !v.name.toLowerCase().includes(q) &&
        !v.city.toLowerCase().includes(q) &&
        !v.description.toLowerCase().includes(q) &&
        !v.services.some((s) => s.toLowerCase().includes(q))
      )
        return false;
    }
    return true;
  });
}
