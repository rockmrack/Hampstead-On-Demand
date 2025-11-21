export const services = [
  // --- 1. PLUMBING (Aspect Match) ---
  {
    id: '1',
    category: 'Plumbing & Heating',
    title: 'Boiler Service (Annual)',
    description: 'Full safety check & certificate (CP12). Essential for warranty validity.',
    price: 120.00,
    duration: '60 mins',
    features: ['Gas Safe Registered', 'CP12 Certificate', 'Efficiency Check']
  },
  {
    id: '2',
    category: 'Plumbing & Heating',
    title: 'Tap Repair / Replace',
    description: 'We supply standard tap or fit yours. Includes removal of old unit.',
    price: 130.00,
    duration: '60 mins',
    features: ['Removal of old tap', 'Testing', '12 Month Guarantee']
  },
  {
    id: '3',
    category: 'Plumbing & Heating',
    title: 'Toilet Unblock',
    description: 'Fixed price unblocking. Includes machinery if needed.',
    price: 160.00,
    duration: '60 mins',
    features: ['Sanitary cleanup', 'Flow test', 'No hidden fees']
  },
  {
    id: '4',
    category: 'Plumbing & Heating',
    title: 'Radiator Bleed (All)',
    description: 'Improve heating efficiency. Bleed all radiators in property.',
    price: 110.00,
    duration: '60 mins',
    features: ['System pressure check', 'Heat distribution test', 'Clean finish']
  },
  {
    id: '5',
    category: 'Plumbing & Heating',
    title: 'Leak Investigation',
    description: 'Diagnostic visit to identify source of leak.',
    price: 120.00,
    duration: '60 mins',
    features: ['Expert diagnosis', 'Minor repairs included', 'Damage assessment']
  },
  {
    id: '6',
    category: 'Plumbing & Heating',
    title: 'Gas Safety Cert (CP12)',
    description: 'Landlord Gas Safety Certificate for one appliance.',
    price: 110.00,
    duration: '45 mins',
    features: ['Legal requirement', 'Digital certificate', 'Safety check']
  },

  // --- 2. ELECTRICAL (Aspect Match) ---
  {
    id: '7',
    category: 'Electrical',
    title: 'Replace Socket / Switch',
    description: 'Per unit. White plastic standard faceplate included.',
    price: 110.00,
    duration: '45 mins',
    features: ['Parts included', 'Safety test', 'Clean finish']
  },
  {
    id: '8',
    category: 'Electrical',
    title: 'Hang Chandelier',
    description: 'Installation up to 3m ceiling height. Heavy duty fixings.',
    price: 180.00,
    duration: '90 mins',
    features: ['Load testing', 'Assembly included', 'Dimmer check']
  },
  {
    id: '9',
    category: 'Electrical',
    title: 'EICR (1-2 Bed Flat)',
    description: 'Electrical safety check for landlords (1-2 Bed Flat).',
    price: 200.00,
    duration: '120 mins',
    features: ['NICEIC Certified', 'Digital Report', 'Legal Requirement']
  },
  {
    id: '10',
    category: 'Electrical',
    title: 'Fault Finding',
    description: 'Diagnostic visit for tripping fuses or power loss.',
    price: 120.00,
    duration: '60 mins',
    features: ['Expert diagnosis', 'Minor repairs included', 'Safety Report']
  },

  // --- 3. HANDYMAN (Aspect Match) ---
  {
    id: '11',
    category: 'Handyman',
    title: 'General Handyman (1 Hour)',
    description: 'Small repairs, hanging pictures, etc.',
    price: 95.00,
    duration: '60 mins',
    features: ['Multi-skilled', 'Tools provided', 'Heavy lifting']
  },
  {
    id: '12',
    category: 'Handyman',
    title: 'TV Wall Mounting',
    description: 'Up to 55 inch TV. Bracket not included (can be supplied).',
    price: 140.00,
    duration: '90 mins',
    features: ['Cable management', 'Solid/Stud wall', 'Level guarantee']
  },
  {
    id: '13',
    category: 'Handyman',
    title: 'Hang Mirror / Art',
    description: 'Up to 3 items. Heavy duty fixings included for safety.',
    price: 85.00,
    duration: '45 mins',
    features: ['Laser level accuracy', 'Wall type assessment', 'Fixings supplied']
  },
  {
    id: '14',
    category: 'Handyman',
    title: 'Flatpack Assembly (Large)',
    description: 'Wardrobe or Bed frame assembly.',
    price: 180.00,
    duration: '120 mins',
    features: ['Two person team', 'Anchoring to wall', 'Packaging removal']
  },

  // --- 4. CARPENTRY (Aspect Match) ---
  {
    id: '15',
    category: 'Carpentry',
    title: 'Hang Internal Door',
    description: 'Trimming and hanging 1 standard door (door not included).',
    price: 160.00,
    duration: '90 mins',
    features: ['Hinge recessing', 'Latch fitting', 'Perfect fit guarantee']
  },
  {
    id: '16',
    category: 'Carpentry',
    title: 'Sash Window Cord Repair',
    description: 'Replace snapped cord (Lower sash). Per window.',
    price: 180.00,
    duration: '120 mins',
    features: ['New cord included', 'Weight balancing', 'Smooth operation']
  },
  {
    id: '17',
    category: 'Carpentry',
    title: 'Fit Door Lock/Latch',
    description: 'Install new handle/latch mechanism.',
    price: 110.00,
    duration: '60 mins',
    features: ['Security check', 'Keys tested', 'Clean installation']
  },
  {
    id: '18',
    category: 'Carpentry',
    title: 'Build Shelves (Alcove)',
    description: 'Labour only. Floating or batten shelves in 1 alcove.',
    price: 250.00,
    duration: '180 mins',
    features: ['Custom fit', 'Heavy duty support', 'Ready for paint']
  },
  {
    id: '19',
    category: 'Carpentry',
    title: 'Boxing In Pipework',
    description: 'Hide unsightly pipes in bathroom/kitchen.',
    price: 140.00,
    duration: '90 mins',
    features: ['Neat finish', 'Access panel if needed', 'Primed wood']
  },

  // --- 5. PAINTING (Aspect Match) ---
  {
    id: '20',
    category: 'Painting & Decorating',
    title: 'Painter for a Day (8 Hrs)',
    description: 'One professional decorator. You supply paint.',
    price: 550.00,
    duration: '480 mins',
    features: ['Professional tools', 'Preparation included', 'Clean up']
  },
  {
    id: '21',
    category: 'Painting & Decorating',
    title: 'Touch-Up Repairs',
    description: 'Filling cracks and painting patches (up to 2 hours).',
    price: 150.00,
    duration: '120 mins',
    features: ['Colour matching', 'Filler included', 'Seamless finish']
  },
  {
    id: '22',
    category: 'Painting & Decorating',
    title: 'Paint Front Door',
    description: 'Sand, prime, and gloss exterior door.',
    price: 220.00,
    duration: '180 mins',
    features: ['Weatherproof paint', 'Hardware removal', 'Drying time management']
  },
  {
    id: '23',
    category: 'Painting & Decorating',
    title: 'Wallpaper Feature Wall',
    description: 'Hanging paper on one standard wall.',
    price: 280.00,
    duration: '180 mins',
    features: ['Pattern matching', 'Paste included', 'Smooth finish']
  },

  // --- 6. ROOFING (Aspect Match) ---
  {
    id: '24',
    category: 'Roofing & Gutters',
    title: 'Gutter Clean (Terrace)',
    description: 'Clean gutters front and back. Ladder access only.',
    price: 160.00,
    duration: '90 mins',
    features: ['Debris removal', 'Downpipe check', 'Flow test']
  },
  {
    id: '25',
    category: 'Roofing & Gutters',
    title: 'Roof Inspection (Drone)',
    description: 'High resolution camera inspection with report.',
    price: 200.00,
    duration: '60 mins',
    features: ['4K Images', 'Condition Report', 'No scaffolding needed']
  },
  {
    id: '26',
    category: 'Roofing & Gutters',
    title: 'Replace Roof Tile',
    description: 'Replace up to 5 accessible tiles.',
    price: 150.00,
    duration: '60 mins',
    features: ['Tiles matched', 'Watertight check', 'Debris removal']
  },

  // --- 7. DRAINAGE (Aspect Match) ---
  {
    id: '27',
    category: 'Drainage',
    title: 'High Pressure Jetting',
    description: 'Clear external blockage/manhole.',
    price: 180.00,
    duration: '60 mins',
    features: ['Powerful equipment', 'Full clearance', 'Flow test']
  },
  {
    id: '28',
    category: 'Drainage',
    title: 'CCTV Drain Survey',
    description: 'Camera inspection with report (Look for rats/roots).',
    price: 250.00,
    duration: '90 mins',
    features: ['Video footage', 'Written report', 'Recommendations']
  },

  // --- 8. LOCKSMITH (Aspect Match) ---
  {
    id: '29',
    category: 'Locksmith & Security',
    title: 'Gain Entry (Standard)',
    description: 'Non-destructive entry (if possible).',
    price: 140.00,
    duration: '45 mins',
    features: ['ID verification', 'No damage priority', 'Fast access']
  },
  {
    id: '30',
    category: 'Locksmith & Security',
    title: 'Change Rim Cylinder (Yale)',
    description: 'Replace standard front door barrel.',
    price: 110.00,
    duration: '30 mins',
    features: ['New keys (x2)', 'Security check', '1 year warranty']
  },
  {
    id: '31',
    category: 'Locksmith & Security',
    title: 'Board Up Window',
    description: 'Emergency security boarding for broken glass.',
    price: 180.00,
    duration: '60 mins',
    features: ['Secure fixing', 'Weatherproof', 'Temporary solution']
  },

  // --- 9. GLAZING (Aspect Match) ---
  {
    id: '32',
    category: 'Glazing',
    title: 'Replace Single Pane',
    description: 'Standard small window glass replacement.',
    price: 160.00,
    duration: '60 mins',
    features: ['Glass supplied', 'Putty/Beading', 'Disposal of broken glass']
  },
  {
    id: '33',
    category: 'Glazing',
    title: 'Reseal Windows (Silicone)',
    description: 'Remove old silicone and reseal (up to 3 windows).',
    price: 120.00,
    duration: '60 mins',
    features: ['Mould resistant', 'Watertight seal', 'Clean lines']
  },

  // --- 10. AC (Aspect Match) ---
  {
    id: '34',
    category: 'Air Conditioning',
    title: 'AC Service (Single Unit)',
    description: 'Clean filters, check gas levels, antibacterial spray.',
    price: 150.00,
    duration: '60 mins',
    features: ['Efficiency check', 'Bacteria clean', 'Leak test']
  },
  {
    id: '35',
    category: 'Air Conditioning',
    title: 'AC Regas',
    description: 'Top up refrigerant gas.',
    price: 180.00,
    duration: '60 mins',
    features: ['Gas included', 'Pressure test', 'Performance check']
  },

  // --- 11. MAJOR RENOVATIONS (Consultations) ---
  {
    id: '36',
    category: 'Major Renovations',
    title: 'Full Property Renovation Consultation',
    description: 'Site visit with Senior Architect to discuss layout & budget.',
    price: 0.00,
    duration: '60 mins',
    features: ['Senior Architect', 'Budget Planning', 'Layout Advice']
  },
  {
    id: '37',
    category: 'Major Renovations',
    title: 'Kitchen Design Visit',
    description: 'Measure up and material consultation.',
    price: 0.00,
    duration: '60 mins',
    features: ['Measurements', 'Material Samples', 'Design Ideas']
  },
  {
    id: '38',
    category: 'Major Renovations',
    title: 'Full House Repainting Quote',
    description: 'Detailed quote for interior/exterior painting.',
    price: 0.00,
    duration: '45 mins',
    features: ['Detailed Quote', 'Colour Advice', 'Schedule Planning']
  },
  {
    id: '39',
    category: 'Major Renovations',
    title: 'The Pre-Sale Refresh Package',
    description: '2-Day blitz: Fix handles, touch-up paint, grout, deep clean.',
    price: 2500.00,
    duration: '960 mins',
    features: ['2-Day Service', 'Multi-trade Team', 'Deep Clean Included']
  },

  // --- 12. SEASONAL & LIFESTYLE (Local Trust) ---
  {
    id: '40',
    category: 'Seasonal & Lifestyle',
    title: 'Patio Jet Wash (Spring Prep)',
    description: 'High pressure clean of patio and garden furniture setup.',
    price: 250.00,
    duration: '120 mins',
    features: ['High Pressure Clean', 'Furniture Setup', 'Algae Treatment']
  },
  {
    id: '41',
    category: 'Seasonal & Lifestyle',
    title: 'Holiday Home Check',
    description: 'We visit while you are away: Check boiler, post, plants.',
    price: 45.00,
    duration: '30 mins',
    features: ['Boiler Check', 'Post Collection', 'Plant Watering']
  },
  {
    id: '42',
    category: 'Seasonal & Lifestyle',
    title: 'Christmas Tree Disposal',
    description: 'Collection and recycling in January.',
    price: 40.00,
    duration: '30 mins',
    features: ['Collection', 'Recycling', 'Clean Up']
  },

  // --- 13. LANDLORD SERVICES ---
  {
    id: '43',
    category: 'Landlord Services',
    title: 'Rental Turnaround Package',
    description: 'Safety checks, lock change, smoke alarms, 1 room paint.',
    price: 1200.00,
    duration: '480 mins',
    features: ['Safety Checks', 'Lock Change', 'Smoke Alarms', '1 Room Paint']
  }
];
