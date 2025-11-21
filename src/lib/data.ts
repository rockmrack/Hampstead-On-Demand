import { Service } from "@/types";

export const services: Service[] = [
  // --- 1. PLUMBING (Aspect Match) ---
  {
    id: 'e1302833-87ae-4f2f-abc4-34dbff66f882',
    category: 'Plumbing & Heating',
    title: 'Boiler Service (Annual)',
    description: 'Full safety check & certificate (CP12). Essential for warranty validity.',
    price: 120.00,
    duration: '60 mins',
    features: ['Gas Safe Registered', 'CP12 Certificate', 'Efficiency Check']
  },
  {
    id: '5feeadb9-61c2-4969-a642-576ca81e8575',
    category: 'Plumbing & Heating',
    title: 'Tap Repair / Replace',
    description: 'We supply standard tap or fit yours. Includes removal of old unit.',
    price: 130.00,
    duration: '60 mins',
    features: ['Removal of old tap', 'Testing', '12 Month Guarantee']
  },
  {
    id: 'f151ccfc-0b3c-422e-aafe-0ed073615b6b',
    category: 'Plumbing & Heating',
    title: 'Toilet Unblock',
    description: 'Fixed price unblocking. Includes machinery if needed.',
    price: 160.00,
    duration: '60 mins',
    features: ['Sanitary cleanup', 'Flow test', 'No hidden fees']
  },
  {
    id: '0fab8cc9-ec3b-4756-b2a1-e65af3d7bcb8',
    category: 'Plumbing & Heating',
    title: 'Radiator Bleed (All)',
    description: 'Improve heating efficiency. Bleed all radiators in property.',
    price: 110.00,
    duration: '60 mins',
    features: ['System pressure check', 'Heat distribution test', 'Clean finish']
  },
  {
    id: '87acdde3-9571-4e3a-9a7a-f7c43aab615a',
    category: 'Plumbing & Heating',
    title: 'Leak Investigation',
    description: 'Diagnostic visit to identify source of leak.',
    price: 120.00,
    duration: '60 mins',
    features: ['Expert diagnosis', 'Minor repairs included', 'Damage assessment']
  },
  {
    id: 'd24850fe-8739-4524-8ea0-e50926c92225',
    category: 'Plumbing & Heating',
    title: 'Gas Safety Cert (CP12)',
    description: 'Landlord Gas Safety Certificate for one appliance.',
    price: 110.00,
    duration: '45 mins',
    features: ['Legal requirement', 'Digital certificate', 'Safety check']
  },

  // --- 2. ELECTRICAL (Aspect Match) ---
  {
    id: '43f7fdb0-baca-4fbc-971c-d90d8eb9ed21',
    category: 'Electrical',
    title: 'Replace Socket / Switch',
    description: 'Per unit. White plastic standard faceplate included.',
    price: 110.00,
    duration: '45 mins',
    features: ['Parts included', 'Safety test', 'Clean finish']
  },
  {
    id: 'c43c4f81-9677-4d24-ab1c-12417fb2e9a8',
    category: 'Electrical',
    title: 'Hang Chandelier',
    description: 'Installation up to 3m ceiling height. Heavy duty fixings.',
    price: 180.00,
    duration: '90 mins',
    features: ['Load testing', 'Assembly included', 'Dimmer check']
  },
  {
    id: '222f035d-b76a-4bc4-bfd2-09460b8d0955',
    category: 'Electrical',
    title: 'EICR (1-2 Bed Flat)',
    description: 'Electrical safety check for landlords (1-2 Bed Flat).',
    price: 200.00,
    duration: '120 mins',
    features: ['NICEIC Certified', 'Digital Report', 'Legal Requirement']
  },
  {
    id: '7b98a1c5-8c4e-48ec-a734-1e79e00904c6',
    category: 'Electrical',
    title: 'Fault Finding',
    description: 'Diagnostic visit for tripping fuses or power loss.',
    price: 120.00,
    duration: '60 mins',
    features: ['Expert diagnosis', 'Minor repairs included', 'Safety Report']
  },

  // --- 3. HANDYMAN (Aspect Match) ---
  {
    id: '492186ba-41be-41e3-9c2e-984a801c0c15',
    category: 'Handyman',
    title: 'General Handyman (1 Hour)',
    description: 'Small repairs, hanging pictures, etc.',
    price: 95.00,
    duration: '60 mins',
    features: ['Multi-skilled', 'Tools provided', 'Heavy lifting']
  },
  {
    id: '87cb3cd3-29a0-4164-ac21-1a0970447fec',
    category: 'Handyman',
    title: 'TV Wall Mounting',
    description: 'Up to 55 inch TV. Bracket not included (can be supplied).',
    price: 140.00,
    duration: '90 mins',
    features: ['Cable management', 'Solid/Stud wall', 'Level guarantee']
  },
  {
    id: '2726a07b-ada1-48a8-839a-d47a63c60f1f',
    category: 'Handyman',
    title: 'Hang Mirror / Art',
    description: 'Up to 3 items. Heavy duty fixings included for safety.',
    price: 85.00,
    duration: '45 mins',
    features: ['Laser level accuracy', 'Wall type assessment', 'Fixings supplied']
  },
  {
    id: '18269f73-8e7c-4bfa-89e6-874669d4a302',
    category: 'Handyman',
    title: 'Flatpack Assembly (Large)',
    description: 'Wardrobe or Bed frame assembly.',
    price: 180.00,
    duration: '120 mins',
    features: ['Two person team', 'Anchoring to wall', 'Packaging removal']
  },

  // --- 4. CARPENTRY (Aspect Match) ---
  {
    id: '68343816-6071-420e-8c56-060424931175',
    category: 'Carpentry',
    title: 'Hang Internal Door',
    description: 'Trimming and hanging 1 standard door (door not included).',
    price: 160.00,
    duration: '90 mins',
    features: ['Hinge recessing', 'Latch fitting', 'Perfect fit guarantee']
  },
  {
    id: '8bd7bb5b-4a2b-4759-82fe-b4c9e76fb3a8',
    category: 'Carpentry',
    title: 'Sash Window Cord Repair',
    description: 'Replace snapped cord (Lower sash). Per window.',
    price: 180.00,
    duration: '120 mins',
    features: ['New cord included', 'Weight balancing', 'Smooth operation']
  },
  {
    id: 'd0594bca-795f-42a1-849f-d34d09e650b9',
    category: 'Carpentry',
    title: 'Fit Door Lock/Latch',
    description: 'Install new handle/latch mechanism.',
    price: 110.00,
    duration: '60 mins',
    features: ['Security check', 'Keys tested', 'Clean installation']
  },
  {
    id: 'dbabefa3-ba9c-4718-8ff6-4cf05c4a5b12',
    category: 'Carpentry',
    title: 'Build Shelves (Alcove)',
    description: 'Labour only. Floating or batten shelves in 1 alcove.',
    price: 250.00,
    duration: '180 mins',
    features: ['Custom fit', 'Heavy duty support', 'Ready for paint']
  },
  {
    id: '24ffb886-2268-49b6-bc36-3409bd459968',
    category: 'Carpentry',
    title: 'Boxing In Pipework',
    description: 'Hide unsightly pipes in bathroom/kitchen.',
    price: 140.00,
    duration: '90 mins',
    features: ['Neat finish', 'Access panel if needed', 'Primed wood']
  },

  // --- 5. PAINTING (Aspect Match) ---
  {
    id: '48079dd1-e231-44a4-8ccf-dd8c51774185',
    category: 'Painting & Decorating',
    title: 'Painter for a Day (8 Hrs)',
    description: 'One professional decorator. You supply paint.',
    price: 550.00,
    duration: '480 mins',
    features: ['Professional tools', 'Preparation included', 'Clean up']
  },
  {
    id: '15c5cb9d-0706-47bf-84cd-f55db7f60a3e',
    category: 'Painting & Decorating',
    title: 'Touch-Up Repairs',
    description: 'Filling cracks and painting patches (up to 2 hours).',
    price: 150.00,
    duration: '120 mins',
    features: ['Colour matching', 'Filler included', 'Seamless finish']
  },
  {
    id: '9a28b34c-b5eb-4ed3-a442-93dbb4e937b2',
    category: 'Painting & Decorating',
    title: 'Paint Front Door',
    description: 'Sand, prime, and gloss exterior door.',
    price: 220.00,
    duration: '180 mins',
    features: ['Weatherproof paint', 'Hardware removal', 'Drying time management']
  },
  {
    id: '9c40454c-8ee9-4087-8bd9-54bafdc17967',
    category: 'Painting & Decorating',
    title: 'Wallpaper Feature Wall',
    description: 'Hanging paper on one standard wall.',
    price: 280.00,
    duration: '180 mins',
    features: ['Pattern matching', 'Paste included', 'Smooth finish']
  },

  // --- 6. ROOFING (Aspect Match) ---
  {
    id: 'dfc1c7f2-64fc-4a93-95b4-fa34d82027a3',
    category: 'Roofing & Gutters',
    title: 'Gutter Clean (Terrace)',
    description: 'Clean gutters front and back. Ladder access only.',
    price: 160.00,
    duration: '90 mins',
    features: ['Debris removal', 'Downpipe check', 'Flow test']
  },
  {
    id: '12101fed-8076-41f7-90b1-4eac500379e5',
    category: 'Roofing & Gutters',
    title: 'Roof Inspection (Drone)',
    description: 'High resolution camera inspection with report.',
    price: 200.00,
    duration: '60 mins',
    features: ['4K Images', 'Condition Report', 'No scaffolding needed']
  },
  {
    id: 'b983cb34-2e4f-4ffd-97e7-23b8973d596e',
    category: 'Roofing & Gutters',
    title: 'Replace Roof Tile',
    description: 'Replace up to 5 accessible tiles.',
    price: 150.00,
    duration: '60 mins',
    features: ['Tiles matched', 'Watertight check', 'Debris removal']
  },

  // --- 7. DRAINAGE (Aspect Match) ---
  {
    id: '1c218bfc-ea0f-4f6b-8951-7c29fdf3cc6e',
    category: 'Drainage',
    title: 'High Pressure Jetting',
    description: 'Clear external blockage/manhole.',
    price: 180.00,
    duration: '60 mins',
    features: ['Powerful equipment', 'Full clearance', 'Flow test']
  },
  {
    id: 'dbe4c6f7-3ca8-4b7a-ad14-e8f725fee6ff',
    category: 'Drainage',
    title: 'CCTV Drain Survey',
    description: 'Camera inspection with report (Look for rats/roots).',
    price: 250.00,
    duration: '90 mins',
    features: ['Video footage', 'Written report', 'Recommendations']
  },

  // --- 8. LOCKSMITH (Aspect Match) ---
  {
    id: 'bf04c567-a58a-47af-aaf1-f2d6a4cd9a60',
    category: 'Locksmith & Security',
    title: 'Gain Entry (Standard)',
    description: 'Non-destructive entry (if possible).',
    price: 140.00,
    duration: '45 mins',
    features: ['ID verification', 'No damage priority', 'Fast access']
  },
  {
    id: 'a995b48b-6094-49de-aa27-f5a04514ea23',
    category: 'Locksmith & Security',
    title: 'Change Rim Cylinder (Yale)',
    description: 'Replace standard front door barrel.',
    price: 110.00,
    duration: '30 mins',
    features: ['New keys (x2)', 'Security check', '1 year warranty']
  },
  {
    id: '3a467cdf-98ee-46fd-a867-fdc4a98f5820',
    category: 'Locksmith & Security',
    title: 'Board Up Window',
    description: 'Emergency security boarding for broken glass.',
    price: 180.00,
    duration: '60 mins',
    features: ['Secure fixing', 'Weatherproof', 'Temporary solution']
  },

  // --- 9. GLAZING (Aspect Match) ---
  {
    id: 'e19a0749-dc44-4219-a769-ead87d10e3eb',
    category: 'Glazing',
    title: 'Replace Single Pane',
    description: 'Standard small window glass replacement.',
    price: 160.00,
    duration: '60 mins',
    features: ['Glass supplied', 'Putty/Beading', 'Disposal of broken glass']
  },
  {
    id: 'da4853ff-cdae-4e7a-840d-cd47d98c1fef',
    category: 'Glazing',
    title: 'Reseal Windows (Silicone)',
    description: 'Remove old silicone and reseal (up to 3 windows).',
    price: 120.00,
    duration: '60 mins',
    features: ['Mould resistant', 'Watertight seal', 'Clean lines']
  },

  // --- 10. AC (Aspect Match) ---
  {
    id: '218933c9-2214-4ec1-a07c-53e7e7c3f83e',
    category: 'Air Conditioning',
    title: 'AC Service (Single Unit)',
    description: 'Clean filters, check gas levels, antibacterial spray.',
    price: 150.00,
    duration: '60 mins',
    features: ['Efficiency check', 'Bacteria clean', 'Leak test']
  },
  {
    id: '5f9fb31c-1b06-4083-a158-c32eb9c5f8f9',
    category: 'Air Conditioning',
    title: 'AC Regas',
    description: 'Top up refrigerant gas.',
    price: 180.00,
    duration: '60 mins',
    features: ['Gas included', 'Pressure test', 'Performance check']
  },

  // --- 11. MAJOR RENOVATIONS (Consultations) ---
  {
    id: 'e4ec1626-371c-48a3-b26c-983e59d1a625',
    category: 'Major Renovations',
    title: 'Full Property Renovation Consultation',
    description: 'Site visit with Senior Architect to discuss layout & budget.',
    price: 0.00,
    duration: '60 mins',
    features: ['Senior Architect', 'Budget Planning', 'Layout Advice']
  },
  {
    id: 'e13f1b06-602a-4d0f-a4a9-e2c7a6018026',
    category: 'Major Renovations',
    title: 'Kitchen Design Visit',
    description: 'Measure up and material consultation.',
    price: 0.00,
    duration: '60 mins',
    features: ['Measurements', 'Material Samples', 'Design Ideas']
  },
  {
    id: 'bcc2fd7b-73fd-4efe-b936-2ec906c5da22',
    category: 'Major Renovations',
    title: 'Full House Repainting Quote',
    description: 'Detailed quote for interior/exterior painting.',
    price: 0.00,
    duration: '45 mins',
    features: ['Detailed Quote', 'Colour Advice', 'Schedule Planning']
  },
  {
    id: 'f4021238-4cc2-40c4-8ca7-1129d4479e2e',
    category: 'Major Renovations',
    title: 'The Pre-Sale Refresh Package',
    description: '2-Day blitz: Fix handles, touch-up paint, grout, deep clean.',
    price: 2500.00,
    duration: '960 mins',
    features: ['2-Day Service', 'Multi-trade Team', 'Deep Clean Included']
  },

  // --- 12. SEASONAL & LIFESTYLE (Local Trust) ---
  {
    id: '7a8d8b4c-ac31-4848-af52-3d8ce1bec26f',
    category: 'Seasonal & Lifestyle',
    title: 'Patio Jet Wash (Spring Prep)',
    description: 'High pressure clean of patio and garden furniture setup.',
    price: 250.00,
    duration: '120 mins',
    features: ['High Pressure Clean', 'Furniture Setup', 'Algae Treatment']
  },
  {
    id: 'f828a784-878c-4e73-bd74-738c06f138e4',
    category: 'Seasonal & Lifestyle',
    title: 'Holiday Home Check',
    description: 'We visit while you are away: Check boiler, post, plants.',
    price: 45.00,
    duration: '30 mins',
    features: ['Boiler Check', 'Post Collection', 'Plant Watering']
  },
  {
    id: 'f8ccefc9-0c92-4b42-91e4-574e8728259c',
    category: 'Seasonal & Lifestyle',
    title: 'Christmas Tree Disposal',
    description: 'Collection and recycling in January.',
    price: 40.00,
    duration: '30 mins',
    features: ['Collection', 'Recycling', 'Clean Up']
  },

  // --- 13. LANDLORD SERVICES ---
  {
    id: 'a93eb997-cd65-4d9c-aa49-2c7b39632e8e',
    category: 'Landlord Services',
    title: 'Rental Turnaround Package',
    description: 'Safety checks, lock change, smoke alarms, 1 room paint.',
    price: 1200.00,
    duration: '480 mins',
    features: ['Safety Checks', 'Lock Change', 'Smoke Alarms', '1 Room Paint']
  }
];
