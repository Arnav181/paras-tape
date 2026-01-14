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
    image: "products/Boppall.jpeg",
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
    image: "products/Floormarking.jpeg",
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
    image: "products/Tissue.jpeg",
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
    image: "/products/Foam.jpeg",
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
    image: "/products/Aluminium.jpeg",
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
    image: "/products/Craft.jpeg",
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
    image: "/products/Filament.jpeg",
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
    image: "/products/Masking.jpeg",
    description: "Professional masking tape for painting and surface protection.",
    specifications: [
      "Width: 6MM to 72MM",
      "Length: 15M to 45M",
      "Thickness: 80 to 120 micron",
      "Clean removal",
    ],
  },
  {
    id: "jumbo-roll",
    name: "Jumbo Roll",
    image: "/products/Jumboroll.webp",
    description: "Large jumbo rolls of adhesive tapes for industrial use and high-volume applications.",
    specifications: [
      "Available in various tape types",
      "Custom widths and lengths",
      "Cost-effective for bulk use",
      "Suitable for automated dispensers",
    ],
  }
  
];
