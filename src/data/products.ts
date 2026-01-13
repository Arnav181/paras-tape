export interface Product {
  id: string;
  name: string;
  description: string;
  specifications: string[];
  image?: string;
}

export const products: Product[] = [
  {
    id: "bopp-tapes",
    name: "BOPP Tapes",
    description: "Premium quality BOPP packaging tapes available in transparent and all colors, with custom printing options.",
    specifications: [
      "Printed all kinds (single printed box also available, additional charges apply)",
      "Transparent and in all colours",
      "Width: 12MM to 96MM",
      "Length: 25M to 600M",
      "Thickness: 36 Micron to 50 Micron",
    ],
  },
  {
    id: "floor-marking-tapes",
    name: "Floor Marking Tapes",
    description: "High-visibility floor marking tapes for industrial safety and organization.",
    specifications: [
      "Black and yellow striped tape",
      "Yellow and red also available",
      "Durable and long-lasting",
      "Easy to apply",
    ],
  },
  {
    id: "tissue-tape",
    name: "Tissue Tape",
    description: "Versatile tissue tapes for various bonding and mounting applications.",
    specifications: [
      "All types available",
      "Solvent based available",
      "Water based also available",
      "Multiple adhesive strengths",
    ],
  },
  {
    id: "foam-tape",
    name: "Foam Tape",
    description: "Double-sided foam tapes for mounting and sealing applications.",
    specifications: [
      "Width: 12MM to 48MM",
      "Thickness: 3MM to 5MM",
      "Length: 3M to 10M",
      "Strong adhesion on both sides",
    ],
  },
  {
    id: "aluminum-tape",
    name: "Aluminum Tape",
    description: "Heat-resistant aluminum foil tape for HVAC and insulation applications.",
    specifications: [
      "Width: 24MM to 96MM",
      "Length: 25M to 50M",
      "Thickness: 90 to 150 micron",
      "Heat resistant",
    ],
  },
  {
    id: "craft-tape",
    name: "Craft Tape",
    description: "Durable craft tapes for packaging and reinforcement purposes.",
    specifications: [
      "Self adhesive tape",
      "Reinforcement tape",
      "Strong and durable",
      "Multiple applications",
    ],
  },
  {
    id: "filament-tape",
    name: "Filament Tape",
    description: "High-strength filament tape for heavy-duty strapping and bundling.",
    specifications: [
      "Cross filament tape",
      "High tensile strength",
      "Excellent load bearing",
      "Ideal for heavy packages",
    ],
  },
  {
    id: "masking-tape",
    name: "Masking Tape",
    description: "Professional masking tape for painting and surface protection.",
    specifications: [
      "Width: 6MM to 72MM",
      "Length: 15M to 45M",
      "Thickness: 80 to 120 micron",
      "Clean removal",
    ],
  },
  {
    id: "insulation-tape",
    name: "Insulation Tape",
    description: "Electrical insulation tape for wiring and electrical applications.",
    specifications: [
      "FR (Flame Retardant) available",
      "Non-FR also available",
      "Excellent insulation properties",
      "Multiple colors",
    ],
  },
  {
    id: "jumbo-roll",
    name: "Jumbo Roll",
    description: "Large format BOPP rolls for high-volume slitting operations.",
    specifications: [
      "Baby jumbo: 288mm",
      "1350mm jumbo also available",
      "For industrial slitting",
      "Bulk quantities",
    ],
  },
  {
    id: "stretch-film",
    name: "Stretch Film",
    description: "High-quality stretch film for pallet wrapping and product protection.",
    specifications: [
      "Width: 4 inch to 18 inch",
      "Sold in units of kg",
      "Strong stretch properties",
      "Clear and tinted options",
    ],
  },
  {
    id: "ep-foam",
    name: "EP Foam",
    description: "Expanded polyethylene foam for cushioning and protection.",
    specifications: [
      "Various thicknesses available",
      "Excellent cushioning",
      "Lightweight material",
      "Custom cutting available",
    ],
  },
  {
    id: "bubble-roll",
    name: "Bubble Roll",
    description: "Protective bubble wrap rolls for fragile item packaging.",
    specifications: [
      "Width: 30 inch to 45 inch",
      "GSM: 80 to 120",
      "Sold in units of kg",
      "Various bubble sizes",
    ],
  },
];
