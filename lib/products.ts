export type Category = { slug: string; name: string; blurb: string; image: string };
export type Product = {
  slug: string; name: string; price: number; category: string; image: string;
  short: string; description: string; details: string[]; included: string[]; care: string[];
};

export const CATEGORIES: Category[] = [
  { slug: 'razors-blades', name: 'Razors & Blades', blurb: 'Safety razors and refill packs for a close, clean shave.', image: '/images/safety-razor.jpg' },
  { slug: 'creams-soaps-aftershave', name: 'Creams, Soaps & Aftershave', blurb: 'Lather makers and post-shave finishers.', image: '/images/lather.jpg' },
  { slug: 'brushes-bowls', name: 'Brushes & Bowls', blurb: 'Brushes, stands and bowls for a proper lather.', image: '/images/silvertip-brush.jpg' },
  { slug: 'grooming-kits', name: 'Grooming Kits', blurb: 'Complete sets for home, gifting and travel.', image: '/images/deluxe-set.jpg' },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'alum-block', name: 'Classic Alum Block, 2.6 oz', price: 9.99, category: 'creams-soaps-aftershave', image: '/images/alum-block.jpg',
    short: 'Traditional crystal alum block for the finish of your shave.',
    description: 'A traditional potassium alum block in a compact, easy-to-hold shape. Wet the block and glide it over freshly shaved areas as part of your usual routine. Alum blocks have been part of the barbershop ritual for generations, and this one is sized to sit comfortably in a dopp kit or on the sink.',
    details: ['Weight: 2.6 oz', 'Size: about 3 in x 1.2 in x 0.9 in', 'Material: natural alum crystal', 'Unscented'],
    included: ['1 alum block'], care: ['Rinse after each use and let it air dry.', 'Store dry on a soap dish or stand.', 'For external use only.'],
  },
  {
    slug: 'walnut-beard-comb', name: 'Walnut Beard Comb, 5 in', price: 13.95, category: 'grooming-kits', image: '/images/beard-comb.jpg',
    short: 'Fine-tooth walnut comb for neat beards and mustaches.',
    description: 'A hand-finished walnut comb with polished, rounded teeth that glide through beards and mustaches without snagging. The pocket-friendly 5 in length keeps it handy at home or on the road.',
    details: ['Length: 5 in', 'Material: natural walnut wood', 'Finish: smooth sanded, wax polished', 'Weight: about 0.6 oz'],
    included: ['1 beard comb'], care: ['Wipe clean with a dry cloth.', 'Keep away from standing water.', 'Condition with a drop of wood oil now and then.'],
  },
  {
    slug: 'sandalwood-shave-soap', name: 'Sandalwood Shave Soap Puck, 4.4 oz', price: 14.75, category: 'creams-soaps-aftershave', image: '/images/shave-soap.jpg',
    short: 'Dense, slow-wearing shave soap with a warm sandalwood scent.',
    description: 'A traditional hard shave soap puck that builds a thick, cushioned lather with a wet brush. Scented with a warm sandalwood fragrance. The 4.4 oz puck fits standard shaving bowls and lasts for many weeks of regular use.',
    details: ['Weight: 4.4 oz', 'Diameter: about 2.9 in', 'Scent: sandalwood', 'Use with a shaving brush'],
    included: ['1 shave soap puck'], care: ['Let the puck dry between uses.', 'Keep out of standing water.', 'For external use only; avoid contact with eyes.'],
  },
  {
    slug: 'copper-lid-shaving-cream', name: 'Copper Lid Shaving Cream, 5.3 oz', price: 17.95, category: 'creams-soaps-aftershave', image: '/images/shave-cream.jpg',
    short: 'Soft, rich lathering cream in a glass jar with a copper-tone lid.',
    description: 'A soft shaving cream that whips up into a full, slick lather with a brush and a little warm water. Packed in a reusable black glass jar with a copper-tone screw lid, it looks at home next to any razor stand.',
    details: ['Net weight: 5.3 oz', 'Jar: black glass, 3 in tall', 'Scent: light cedar and citrus', 'Use with a shaving brush'],
    included: ['1 jar of shaving cream'], care: ['Keep the lid closed when not in use.', 'Store at room temperature.', 'For external use only.'],
  },
  {
    slug: 'cartridge-refill-pack', name: 'Five-Blade Cartridge Refill Pack, 8 Count', price: 18.75, category: 'razors-blades', image: '/images/blade-refills.jpg',
    short: 'Eight five-blade cartridges with a lubricating strip.',
    description: 'A multi-month supply of five-blade cartridges with a pivoting head and a lubricating strip. Each cartridge snaps onto compatible handles in one click. Packed in a sealed tray to keep blades clean and dry until you need them.',
    details: ['Count: 8 cartridges', 'Blades per cartridge: 5', 'Pivoting head with lubricating strip', 'Fits compatible snap-on handles'],
    included: ['8 replacement cartridges in a sealed tray'], care: ['Rinse the cartridge after each shave and shake dry.', 'Store dry.', 'Replace when the blade feels dull.', 'Keep out of reach of children.'],
  },
  {
    slug: 'oak-aftershave-balm', name: 'Copper Oak Aftershave Balm, 4 oz', price: 28.76, category: 'creams-soaps-aftershave', image: '/images/aftershave-balm.jpg',
    short: 'Light, non-greasy balm with a warm oak and amber scent.',
    description: 'A lightweight aftershave balm in an amber glass bottle with a copper pump. Smooth a pump or two over your face after shaving for a comfortable, moisturized feel and a warm oak and amber scent that fades through the day.',
    details: ['Volume: 4 oz', 'Bottle: amber glass with pump', 'Scent: oak, amber and a hint of citrus', 'Non-greasy finish'],
    included: ['1 bottle of aftershave balm'], care: ['Shake gently before use.', 'Store away from direct sunlight.', 'For external use only; avoid contact with eyes.'],
  },
  {
    slug: 'chrome-safety-razor', name: 'Chrome Double Edge Safety Razor', price: 38.64, category: 'razors-blades', image: '/images/safety-razor.jpg',
    short: 'Heavy chrome-plated safety razor with a knurled handle.',
    description: 'A weighty, chrome-plated brass safety razor with a knurled 3.5 in handle for a secure grip. It takes standard double edge blades, which are inexpensive and widely available. The balanced weight lets the razor do the work with light pressure.',
    details: ['Handle length: 3.5 in', 'Weight: 3.4 oz', 'Material: chrome-plated brass', 'Uses standard double edge blades'],
    included: ['1 safety razor', '5 double edge blades'], care: ['Rinse under warm water after each shave and dry.', 'Change the blade regularly.', 'Handle blades with care and dispose of them safely.'],
  },
  {
    slug: 'synthetic-brush-stand', name: 'Synthetic Shaving Brush with Stand', price: 47.89, category: 'brushes-bowls', image: '/images/brush-stand.jpg',
    short: 'Soft synthetic knot brush with a chrome drip stand.',
    description: 'A synthetic-fiber shaving brush with a 24 mm knot and a black resin handle. It loads quickly, builds lather fast and dries quickly. The included chrome stand holds the brush upside down so water drains away from the handle.',
    details: ['Knot diameter: 24 mm (0.95 in)', 'Brush height: 4.2 in', 'Handle: black resin', 'Stand: chrome-finished metal'],
    included: ['1 shaving brush', '1 brush stand'], care: ['Rinse thoroughly after use.', 'Shake out excess water.', 'Hang on the stand to dry.'],
  },
  {
    slug: 'ceramic-bowl-soap-set', name: 'Ceramic Lather Bowl & Shave Soap Set', price: 49.76, category: 'brushes-bowls', image: '/images/bowl-soap-set.jpg',
    short: 'Glazed ceramic bowl packaged with a 4.4 oz shave soap puck.',
    description: 'A heavy glazed ceramic bowl with a wide rim and a textured base, supplied with a 4.4 oz sandalwood shave soap puck that fits inside. The weight keeps the bowl steady on the counter while you load your brush and build lather.',
    details: ['Bowl diameter: 4 in', 'Bowl height: 2.2 in', 'Soap: 4.4 oz, sandalwood scent', 'Dishwasher-safe bowl (top rack)'],
    included: ['1 ceramic lather bowl', '1 sandalwood shave soap puck, 4.4 oz'], care: ['Rinse the bowl after each use.', 'Let the soap dry between uses.', 'Do not use abrasive pads on the glaze.'],
  },
  {
    slug: 'brass-razor-brush-stand', name: 'Brass Razor & Brush Stand', price: 53.45, category: 'brushes-bowls', image: '/images/razor-brush-stand.jpg',
    short: 'Solid brass stand that holds a razor and a brush upright.',
    description: 'A solid brass stand with a weighted base and two holders: a ring for the brush and a slot for a safety razor. Keeping tools upright lets them drain and dry between shaves, helping them last longer.',
    details: ['Height: 5.5 in', 'Base diameter: 3.2 in', 'Weight: 1.1 lbs', 'Fits brush handles up to 1.2 in wide'],
    included: ['1 brass stand'], care: ['Wipe with a soft cloth.', 'Polish with brass cleaner for a bright finish or leave to develop a natural patina.', 'Not intended for use in the dishwasher.'],
  },
  {
    slug: 'beginner-shaving-set', name: 'Beginner Safety Razor Shaving Set', price: 54.95, category: 'grooming-kits', image: '/images/beginner-set.jpg',
    short: 'Razor, brush and soap in one tin to learn wet shaving.',
    description: 'Everything needed to try traditional wet shaving: a safety razor, a soft shaving brush and a shave soap, packed together in a hinged metal tin. The set pairs a mild razor head with easy-to-use soap so it is simple to build good habits.',
    details: ['Razor handle length: 3.4 in', 'Brush height: 3.6 in', 'Soap: 3.5 oz', 'Tin: 4.5 in wide'],
    included: ['1 safety razor', '1 shaving brush', '1 shave soap, 3.5 oz', '5 double edge blades', '1 storage tin'], care: ['Rinse tools after use and let them dry.', 'Keep the soap dry between shaves.', 'Dispose of used blades safely.'],
  },
  {
    slug: 'deluxe-shaving-set', name: 'Deluxe Wet Shaving Set, 5-Piece', price: 86.88, category: 'grooming-kits', image: '/images/deluxe-set.jpg',
    short: 'Razor, brush, stand, ceramic bowl and soap in one set.',
    description: 'A complete five-piece wet shaving setup: chrome safety razor, badger-style brush, drip stand, ceramic lather bowl and a sandalwood shave soap. Every piece matches in finish, so the whole set looks good on the counter or boxed as a gift.',
    details: ['Razor handle: 3.5 in', 'Brush height: 4.1 in', 'Bowl diameter: 4 in', 'Soap: 4.4 oz'],
    included: ['1 chrome safety razor', '1 shaving brush', '1 brush stand', '1 ceramic bowl', '1 shave soap, 4.4 oz'], care: ['Rinse each piece after use.', 'Hang the brush on the stand to dry.', 'Wipe the razor dry before storing.'],
  },
  {
    slug: 'leather-travel-grooming-kit', name: 'Leather Travel Grooming Kit', price: 87.64, category: 'grooming-kits', image: '/images/travel-kit.jpg',
    short: 'Zippered leather case with razor, brush, comb and more.',
    description: 'A compact zippered case in full-grain leather with an interior sized for a folding razor handle, travel brush, comb, nail clippers and a mirror. The case opens flat on a hotel counter so everything is easy to reach.',
    details: ['Case size: 9 in x 4.5 in x 3.5 in', 'Weight: 1.0 lb filled', 'Material: leather with cotton lining', 'Zippered main compartment'],
    included: ['1 leather case', '1 travel razor with 5 blades', '1 travel brush', '1 beard comb', '1 pair of nail clippers', '1 pocket mirror'], care: ['Wipe leather with a damp cloth.', 'Condition occasionally with leather balm.', 'Pack blades in the sleeve provided.'],
  },
  {
    slug: 'adjustable-safety-razor', name: 'Adjustable Safety Razor, 6-Setting', price: 87.76, category: 'razors-blades', image: '/images/adjustable-razor.jpg',
    short: 'Dial from mild to aggressive with a twist of the handle.',
    description: 'A premium safety razor with a six-position dial at the base of the handle so you can set blade exposure from mild to more assertive. Machined from stainless steel with a polished finish and a 3.9 in handle for control and balance.',
    details: ['Settings: 6', 'Handle length: 3.9 in', 'Weight: 3.9 oz', 'Material: polished stainless steel'],
    included: ['1 adjustable safety razor', '10 double edge blades', '1 protective pouch'], care: ['Rinse with warm water and dry after each shave.', 'Replace blades regularly.', 'Handle blades with care and dispose of them safely.'],
  },
  {
    slug: 'silvertip-badger-brush', name: 'Silvertip Badger Brush with Stand', price: 94.82, category: 'brushes-bowls', image: '/images/silvertip-brush.jpg',
    short: 'Dense silvertip badger knot with a resin handle and stand.',
    description: 'A premium shaving brush with a 26 mm silvertip badger hair knot, known for soft tips and excellent water retention. Set in a resin handle with a weighted feel, and delivered with a matching drip stand.',
    details: ['Knot diameter: 26 mm (1.0 in)', 'Brush height: 4.5 in', 'Hair: silvertip badger', 'Handle: hand-finished resin'],
    included: ['1 silvertip badger brush', '1 drip stand'], care: ['Rinse well after use.', 'Gently squeeze out excess water.', 'Dry bristles-down on the stand.'],
  },
  {
    slug: 'heritage-gift-set', name: 'Heritage Shaving Gift Set in Walnut Box', price: 96.95, category: 'grooming-kits', image: '/images/heritage-set.jpg',
    short: 'Razor, brush, stand and soap in a hinged walnut presentation box.',
    description: 'A gift-ready set in a hinged walnut box lined with cream velvet. Includes a chrome safety razor, a shaving brush, a brass-tone stand and a 4.4 oz shave soap. The box doubles as a keepsake for storing razor blades and accessories after the set is unpacked.',
    details: ['Box size: 11 in x 7 in x 3.5 in', 'Razor handle: 3.5 in', 'Soap: 4.4 oz', 'Weight: 2.4 lbs boxed'],
    included: ['1 chrome safety razor', '1 shaving brush', '1 brush stand', '1 shave soap, 4.4 oz', '1 walnut presentation box'], care: ['Keep the box dry.', 'Wipe the wood with a soft cloth.', 'Let tools dry before storing them in the box.'],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const catName = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.name ?? '';
export const money = (n: number) => `$${n.toFixed(2)}`;
