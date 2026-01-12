export const products = [
    {
        id: 'angle',
        name: 'MS Angle',
        category: 'finished',
        image: '/products/angle.png',
        description: 'High-strength L-shaped structural steel used in construction, bridges, and industrial frames.',
        grades: ['IS 2062 E250 (India)', 'ASTM A36 (USA)', 'EN S275JR (Europe)', 'JIS SS400 (Japan)'],
        features: ['Precision Dimensions', 'High Tensile Strength', 'Rust Resistant Coating'],
        specs: [
            { label: 'Standard', value: 'IS 808: 1989' },
            { label: 'Length', value: '6m, 12m (Custom cut)' },
            { label: 'Equivalent', value: 'ASTM A36 / GOST 380' },
        ],
        table: {
            headers: ['Size (mm)', 'Thickness (mm)', 'Weight (kg/m)'],
            rows: [
                ['25 x 25', '3, 4, 5', '1.1, 1.5, 1.8'],
                ['30 x 30', '5', '2.2'],
                ['32 x 32', '3, 4', '1.5, 1.9'],
                ['35 x 35', '3, 4, 5, 6', '1.6, 2.1, 2.6, 3.0'],
                ['37 x 37', '3', '1.7'],
                ['40 x 40', '3, 4, 5, 6', '1.8, 2.4, 3.0, 3.5'],
                ['45 x 45', '3, 4, 5, 6', '2.1, 2.7, 3.4, 4.0'],
                ['50 x 50', '3, 4, 5, 6, 8', '2.3, 3.0, 3.8, 4.5, 5.8'],
                ['65 x 65', '5, 6, 8, 10', '4.9, 5.8, 7.7, 9.4'],
                ['75 x 75', '5, 6, 8, 10', '5.7, 6.8, 8.9, 11.0'],
                ['90 x 90', '6, 8, 10, 12', '8.2, 10.8, 13.4, 15.8'],
                ['100 x 100', '6, 8, 10, 12', '9.2, 12.1, 15.0, 17.7'],
                ['130 x 130', '10, 12, 16', '19.7, 23.5, 30.6'],
            ]
        }
    },
    {
        id: 15,
        name: 'Mild Steel Ingot',
        category: 'raw',
        image: '/products/ingot.png',
        description: 'Standard pencil Ingots for rolling. High-quality semi-finished casting used as feedstock for rolling mills.',
        grades: ['IS 2830', 'Mild Steel'],
        specs: [
            { label: 'Carbon', value: '0.15% - 0.25%' },
            { label: 'Manganese', value: '0.60% - 0.90%' },
            { label: 'Phosphorus', value: '0.05% Max' },
            { label: 'Sulphur', value: '0.05% Max' }
        ],
        features: ['Good Surface Finish', 'Uniform Grain Structure', 'Free from Blowholes'],
        table: {
            headers: ['Type / Cross Section', 'Length (mm)', 'Approx Weight (kg/pc)'],
            rows: [
                ['3.5 x 4.5 inch (Pencil)', '60 inches', '100 - 110'],
                ['4 x 5 inch', '60 inches', '130 - 140'],
            ]
        }
    },
    {
        id: 16,
        name: 'Mild Steel Billet',
        category: 'raw',
        image: '/products/billet.jpg',
        description: 'Continuous Cast (CC) Billets with superior surface quality and internal soundness for structural steel manufacturing.',
        grades: ['IS 2830', 'IS 14650', '3SP / 4SP'],
        specs: [
            { label: 'Carbon', value: '0.14% - 0.25%' },
            { label: 'Manganese', value: '0.50% - 1.20%' },
            { label: 'Section Size', value: '100x100 to 160x160 mm' }
        ],
        features: ['Square Cross Section', 'No Internal Cracks', 'Consistent Chemistry'],
        table: {
            headers: ['Size (mm)', 'Length (meters)', 'Grade Standard'],
            rows: [
                ['100 x 100', '6 / 12', 'IS 2830'],
                ['125 x 125', '6 / 12', 'IS 2830'],
                ['160 x 160', '6 / 12', 'IS 2830'],
            ]
        }
    },
    {
        id: 17,
        name: 'Sponge Iron (DRI)',
        category: 'raw',
        image: '/products/sponge_iron.jpg',
        description: 'High-quality Direct Reduced Iron (DRI) coal-based sponge iron, ideal for quality steel making in Induction Furnaces.',
        grades: ['IS 15774', 'Grade 80 / 82'],
        specs: [
            { label: 'Fe (Total)', value: '88% Min' },
            { label: 'Fe (Metallic)', value: '78% - 80% Min' },
            { label: 'Metallization', value: '86% - 88%' },
            { label: 'Carbon', value: '0.50% - 1.20%' }
        ],
        features: ['High Metallization', 'Low Gangue', 'Consistent Quality'],
        table: {
            headers: ['Parameter', 'Specification', 'Tolerance'],
            rows: [
                ['Total Fe', '88% Min', '-'],
                ['Metallic Fe', '78% Min', '± 1%'],
                ['Sulphur', '0.05% Max', '0.06% Max'],
                ['Phosphorus', '0.06% Max', '-'],
            ]
        }
    },
    {
        id: 18,
        name: 'Foundry Pig Iron',
        category: 'raw',
        image: '/products/pig_iron.jpg',
        description: 'Foundry grade Pig Iron with low phosphorus and sulphur, suitable for grey iron and ductile iron castings.',
        grades: ['IS 13502', 'Foundry Grade'],
        specs: [
            { label: 'Carbon', value: '3.5% - 4.5%' },
            { label: 'Silicon', value: '1.5% - 3.0%' },
            { label: 'Phosphorus', value: '0.12% Max' }
        ],
        features: ['Uniform Chip Size', 'Low Impurities', 'High Fluidity'],
        table: {
            headers: ['Grade', 'Silicon (Si) %', 'Manganese (Mn) %'],
            rows: [
                ['FG-1 High Silicon', '2.5 - 3.0', '0.5 - 1.0'],
                ['FG-2 Med Silicon', '2.0 - 2.5', '0.5 - 1.0'],
                ['FG-3 Low Silicon', '1.5 - 2.0', '0.5 - 1.0'],
            ]
        }
    },
    {
        id: 19,
        name: 'Iron Ore (Lumps & Fines)',
        category: 'raw',
        image: '/products/iron_ore.jpg',
        description: 'High-grade Hematite Iron Ore Lumps and Fines sourced from top mines. Excellent feed for Blast Furnaces and DRI kilns.',
        grades: ['CLO (Calibrated Lump Ore)', 'Fines'],
        specs: [
            { label: 'Fe Content', value: '62% - 65%' },
            { label: 'Alumina', value: '2.5% Max' },
            { label: 'Silica', value: '3.0% Max' }
        ],
        features: ['High Reducibility', 'Low Mositure', 'Sized Properly'],
        table: {
            headers: ['Type', 'Size (mm)', 'Fe Content %'],
            rows: [
                ['Lumps (CLO)', '10 - 40 mm', '63% Rejection (<60%)'],
                ['Lumps (Special)', '5 - 18 mm', '64% Rejection (<62%)'],
                ['Fines', '0 - 10 mm', '62% basis'],
            ]
        }
    },
    {
        id: 20,
        name: 'Industrial Coal',
        category: 'raw',
        image: '/products/coal.jpg',
        description: 'Premium South African and Indian Thermal Coal for industrial boilers and DRI kilns. High Calorific Value options available.',
        grades: ['RB1', 'RB2', 'Indian High GCV'],
        specs: [
            { label: 'GCV (ARB)', value: '6000 - 4800 Kcal/kg' },
            { label: 'Volatile Matter', value: '25% - 28%' },
            { label: 'Ash', value: '15% - 30%' }
        ],
        features: ['High Heat Value', 'Control Ash', 'Sized Coal'],
        table: {
            headers: ['Origin / Grade', 'GCV (Kcal/kg)', 'Ash Content'],
            rows: [
                ['South African RB1', '6000', '14 - 16 %'],
                ['South African RB2', '5500 - 5700', '19 - 22 %'],
                ['South African RB3', '4800 - 5000', '23 - 26 %'],
                ['Indian Anthracite', '6800+', '10-12%'],
                ['Indian Steam Coal', '4500-5500', '30-35%'],
            ]
        }
    },
    {
        id: 'channel',
        name: 'MS Channel',
        category: 'finished',
        image: '/products/channel.png',
        description: 'Joy-shaped structural beams (C-beams) essential for heavy machinery, sheds, and fabrication.',
        grades: ['IS 2062 E250 (India)', 'ASTM A36 (USA)', 'EN 10025 S275 (EU)', 'GOST 8240 (Russia)'],
        features: ['Uniform Thickness', 'Can withstand lateral loads', 'Easy to weld'],
        specs: [
            { label: 'Standard', value: 'IS 808' },
            { label: 'Type', value: 'ISMC (Medium Channel)' },
            { label: 'Equivalent', value: 'UPN / UPE Profiles' },
        ],
        table: {
            headers: ['Designation', 'Depth x Width (mm)', 'Weight (kg/m)'],
            rows: [
                ['ISMC 75', '75 x 40', '7.14'],
                ['ISMC 100', '100 x 50', '9.56'],
                ['ISMC 125', '125 x 65', '13.1'],
                ['ISMC 150', '150 x 75', '16.8'],
                ['ISMC 200', '200 x 75', '22.3'],
                ['ISMC 250', '250 x 80', '30.6'],
                ['ISMC 300', '300 x 90', '36.3'],
                ['ISMC 400', '400 x 100', '50.1'],
            ]
        }
    },
    {
        id: 'tmt',
        name: 'TMT Bar',
        category: 'finished',
        image: '/products/tmt.png',
        description: 'Thermo-Mechanically Treated bars essential for earthquake-resistant concrete reinforcement.',
        grades: ['IS 1786 Fe 550D (India)', 'ASTM A615 Gr 75 (USA)', 'BS 4449 Gr B500B (UK)', 'DIN 488 BST 500 (Germany)'],
        features: ['Superior Ductility', 'Corrosion Resistant', 'Perfect Bonding with Cement'],
        specs: [
            { label: 'Standard', value: 'IS 1786: 2008' },
            { label: 'Brands', value: 'Primary & Secondary' },
            { label: 'Equivalent', value: 'ASTM A615 / BS 4449' },
        ],
        table: {
            headers: ['Diameter (mm)', 'Weight per Meter (kg)', 'Piece Length'],
            rows: [
                ['8 mm', '0.395', '12m'],
                ['10 mm', '0.617', '12m'],
                ['12 mm', '0.888', '12m'],
                ['16 mm', '1.580', '12m'],
                ['20 mm', '2.470', '12m'],
                ['25 mm', '3.850', '12m'],
                ['28 mm', '4.830', '12m'],
                ['32 mm', '6.310', '12m'],
            ]
        }
    },
    {
        id: 'pipe',
        name: 'MS Rectangular Pipe',
        category: 'finished',
        image: '/products/pipe.png',
        description: 'Round, Square, and Rectangular hollow sections for furniture, structures, and fluid transport.',
        grades: ['IS 1239 / IS 3589', 'ASTM A53 Grade A/B (USA)', 'BS 1387 (UK)', 'JIS G3452 (Japan)'],
        features: ['High Pressure Tolerance', 'Leak Proof', 'Uniform Wall Thickness'],
        specs: [
            { label: 'Shapes', value: 'Round, Square, Rectangular' },
            { label: 'Standard', value: 'IS 1239 / IS 4923' },
            { label: 'Equivalent', value: 'ASTM A53 / BS 1387' },
        ],
        table: {
            headers: ['NB Size (Inch)', 'Outer Dia (mm)', 'Key Thicknesses (mm)'],
            rows: [
                ['1/2"', '21.3', '2.0, 2.6, 3.2'],
                ['3/4"', '26.9', '2.3, 2.6, 3.2'],
                ['1"', '33.7', '2.6, 3.2, 4.0'],
                ['1.5"', '48.3', '2.9, 3.2, 4.0'],
                ['2"', '60.3', '2.9, 3.6, 4.5'],
                ['3"', '88.9', '3.2, 4.0, 4.8'],
                ['4"', '114.3', '3.6, 4.5, 5.4'],
                ['6"', '165.1', '4.8, 5.4'],
            ]
        }
    },
    {
        id: 'plate',
        name: 'MS Plates',
        image: '/products/plate.png',
        description: 'Hot rolled steel plates used in heavy fabrication, ship building, and industrial flooring.',
        grades: ['IS 2062 E250 (India)', 'ASTM A36 (USA)', 'S235JR / S275JR (Europe)', 'SS400 (Japan)'],
        features: ['Flat Surface', 'Consistent Thickness', 'Easy Cutting'],
        specs: [
            { label: 'Widths', value: '1250mm - 2500mm' },
            { label: 'Length', value: 'Up to 12m' },
            { label: 'Equivalent', value: 'ASTM A36 / S275' },
        ],
        table: {
            headers: ['Thickness (mm)', 'Weight (kg/sq.m)', 'Application'],
            rows: [
                ['3 mm', '23.55', 'Light Fabrication'],
                ['5 mm', '39.25', 'Flooring / Tanks'],
                ['6 mm', '47.10', 'General Structural'],
                ['8 mm', '62.80', 'Heavy Machinery'],
                ['10 mm', '78.50', 'Base Plates'],
                ['12 mm', '94.20', 'Columns'],
                ['16 - 25 mm', '125+', 'Heavy Engineering'],
                ['32 - 100 mm', '250+', 'Special Projects'],
            ]
        }
    },
    {
        id: 'beam',
        name: 'MS Beam (I-Beam)',
        category: 'finished',
        image: '/products/beam.png',
        description: 'Primary load-bearing I-sections (ISMB) for constructing immense industrial sheds and high-rises.',
        grades: ['IS 2062 E250 (India)', 'ASTM A572 Gr 50 (USA)', 'EN 10025 S355 (Europe)', 'UB / UC Profiles'],
        features: ['Maximum Load Bearing', 'Structural Stability', 'Standard Section Modulus'],
        specs: [
            { label: 'Type', value: 'ISMB / NPB' },
            { label: 'Standard', value: 'IS 808' },
            { label: 'Equivalent', value: 'IPE / HEA / HEB' },
        ],
        table: {
            headers: ['Designation', 'Depth x Width (mm)', 'Weight (kg/m)'],
            rows: [
                ['ISMB 100', '100 x 50', '8.9'],
                ['ISMB 125', '125 x 75', '13.3'],
                ['ISMB 150', '150 x 75', '15.0'],
                ['ISMB 200', '200 x 100', '25.4'],
                ['ISMB 250', '250 x 125', '37.3'],
                ['ISMB 300', '300 x 140', '44.2'],
                ['ISMB 400', '400 x 140', '61.6'],
                ['ISMB 500', '500 x 180', '86.9'],
                ['ISMB 600', '600 x 210', '122.6'],
            ]
        }
    },
    {
        id: 'wire-rod',
        name: 'Wire Rod',
        image: '/products/wirerod.png',
        description: 'Raw material for drawing wires, nails, and fasteners. Supplied in coil form.',
        grades: ['SAE 1008 / 1010 (USA)', 'IS 7887 (India)', 'JIS G3505 SWRM (Japan)'],
        features: ['Uniform Casting', 'Smooth Surface', 'High Drawability'],
        specs: [
            { label: 'Coil Weight', value: '1000kg - 1200kg' },
            { label: 'Standard', value: 'IS 2879' },
            { label: 'Equivalent', value: 'SAE 1008 / SWRM' },
        ],
        table: {
            headers: ['Diameter (mm)', 'Type', 'Application'],
            rows: [
                ['5.5 mm', 'Mild Steel', 'Binding Wire / Nails'],
                ['6.0 mm', 'Mild Steel', 'Mesh / Netting'],
                ['8.0 mm', 'Mild Steel', 'Fasteners'],
                ['10.0 mm', 'MS / High Carbon', 'Springs'],
                ['12.0 mm', 'MS / High Carbon', 'Engineering'],
            ]
        }
    },
    {
        id: 'hb-wire',
        name: 'HB Wire',
        image: '/products/hbwire.png',
        description: 'Hard Bright wire drawn from wire rods, used for making nails, cycling spokes, and weld mesh.',
        grades: ['HB (Hard Bright)', 'SAE 1010/1018', 'DIN 17140'],
        features: ['Shiny Finish', 'Consistent Gauge', 'Hardness'],
        specs: [
            { label: 'Packaging', value: 'Coils of 50kg - 500kg' },
            { label: 'Standard', value: 'IS 4826' },
        ],
        table: {
            headers: ['Gauge (SWG)', 'Diameter (mm)', 'Usage'],
            rows: [
                ['6 SWG', '4.88', 'Heavy Nails'],
                ['8 SWG', '4.06', 'Fencing'],
                ['10 SWG', '3.25', 'General Hardware'],
                ['12 SWG', '2.64', 'Weld Mesh'],
                ['14 SWG', '2.03', 'Pins / Clips'],
            ]
        }
    },
    {
        id: 'gi-wire',
        name: 'GI Wire',
        image: '/products/giwire.png',
        description: 'Galvanized Iron wire with zinc coating for superior rust protection. Ideal for farming and fencing.',
        grades: ['IS 280 (India)', 'ASTM A641 (USA)', 'BS 443 (UK)'],
        features: ['Rust Proof', 'Silver Finish', 'Long Life'],
        specs: [
            { label: 'Coating', value: '40gsm - 270gsm Zinc' },
            { label: 'Equivalent', value: 'ASTM A641 Class 1' },
        ],
        table: {
            headers: ['Gauge (SWG)', 'Diameter (mm)', 'Zinc Coating'],
            rows: [
                ['8 SWG', '4.06', 'High Zinc'],
                ['10 SWG', '3.25', 'Medium / High'],
                ['12 SWG', '2.64', 'Standard'],
                ['14 SWG', '2.03', 'Standard'],
                ['16 SWG', '1.63', 'Standard'],
            ]
        }
    },
    {
        id: 'binding-wire',
        name: 'Binding Wire',
        image: '/products/bindingwire.png',
        description: 'Annealed soft wire used for tying rebar (TMT) in construction. Flexible yet strong.',
        grades: ['IS 280 Soft Quality', 'ASTM A853 (USA)', 'DIN 17140 (Germany)'],
        features: ['Soft & Flexible', 'Prevents breakage', 'Easy to twist'],
        specs: [
            { label: 'Packaging', value: '25kg Bundles' },
            { label: 'Type', value: 'Annealed' },
        ],
        table: {
            headers: ['Gauge (SWG)', 'Diameter (mm)', 'Approx Length/kg'],
            rows: [
                ['18 SWG', '1.22', '110 meters'],
                ['20 SWG', '0.91', '200 meters'],
                ['22 SWG', '0.71', '325 meters'],
            ]
        }
    },
    {
        id: 'flat',
        name: 'MS Flat Bar',
        category: 'finished',
        image: '/products/flat.png',
        description: 'Flat bars used in grills, gates, earthing strips, and general fabrication.',
        grades: ['IS 2062 E250 (India)', 'ASTM A36 (USA)', 'S275JR (Europe)'],
        features: ['Sharp Edges', 'Straight lengths', 'Weldable'],
        specs: [
            { label: 'Length', value: '6 meters' },
            { label: 'Standard', value: 'IS 1732' },
        ],
        table: {
            headers: ['Width (mm)', 'Thickness (mm)', 'Weight (kg/m)'],
            rows: [
                ['20 mm', '3, 5, 6', '0.47 - 0.94'],
                ['25 mm', '3, 5, 6', '0.59 - 1.18'],
                ['32 mm', '5, 6, 8, 10', '1.26 - 2.51'],
                ['40 mm', '5, 6, 8, 10, 12', '1.57 - 3.77'],
                ['50 mm', '6, 8, 10, 12, 16', '2.36 - 6.28'],
                ['65 mm', '6, 8, 10, 12', '3.06 - 6.12'],
                ['75 mm', '6, 8, 10, 12', '3.53 - 7.06'],
                ['100 mm', '6, 8, 10, 12', '4.71 - 9.42'],
            ]
        }
    },
    {
        id: 'sq-round',
        name: 'Square & Round Bars',
        image: '/products/round.png',
        description: 'Solid steel bars used for machining, bright bars, nuts/bolts, and grill work.',
        grades: ['IS 2062 / En8', 'AISI 1018 (USA)', 'C45 / S45C (Global)'],
        features: ['Solid Core', 'Machinable', 'High Polish'],
        specs: [
            { label: 'Length', value: '6 meters' },
            { label: 'Equivalent', value: 'AISI 1018 / 1045' },
        ],
        table: {
            headers: ['Size/Dia (mm)', 'Type', 'Weight (kg/m)'],
            rows: [
                ['6 mm', 'Square / Round', '0.22 / 0.28'],
                ['8 mm', 'Square / Round', '0.39 / 0.50'],
                ['10 mm', 'Square / Round', '0.62 / 0.78'],
                ['12 mm', 'Square / Round', '0.89 / 1.13'],
                ['16 mm', 'Square / Round', '1.58 / 2.01'],
                ['20 mm', 'Square / Round', '2.47 / 3.14'],
                ['25 mm', 'Square / Round', '3.85 / 4.91'],
                ['32 mm', 'Square / Round', '6.31 / 8.04'],
            ]
        }
    },
    {
        id: 'gp',
        name: 'Galvanized Products',
        image: '/products/gp.png',
        description: 'GP Sheets, Coils, and Corrugated Sheets for roofing and paneling.',
        grades: ['IS 277 (India)', 'ASTM A653 (USA)', 'DX51D (Europe)', 'SGCC (Japan)'],
        features: ['Weather Proof', 'Shiny Spangles', 'Corrugated or Plain'],
        specs: [
            { label: 'Standard', value: 'IS 277' },
            { label: 'Equivalent', value: 'ASTM A653 / DX51D' },
        ],
        table: {
            headers: ['Thickness (mm)', 'Gauge', 'Application'],
            rows: [
                ['0.30 - 0.40', '28g - 26g', 'Roofing'],
                ['0.45 - 0.50', '26g - 24g', 'Cladding'],
                ['0.63 - 0.80', '24g - 22g', 'Ducting'],
                ['1.00 - 1.60', '20g - 16g', 'Paneling'],
                ['2.00+', '14g+', 'Structural Decking'],
            ]
        }
    },
    {
        id: 'joist',
        name: 'RS Joist',
        category: 'finished',
        image: '/products/joist.png',
        description: 'Lighter I-beams (ISJB) used for smaller spans/loads compared to standard beams.',
        grades: ['IS 2062 E250 (India)', 'ASTM A36 (USA)'],
        features: ['Economical', 'Lightweight', 'High Efficiency'],
        specs: [
            { label: 'Type', value: 'ISJB' },
            { label: 'Standard', value: 'IS 808' },
        ],
        table: {
            headers: ['Designation', 'Depth x Width (mm)', 'Weight (kg/m)'],
            rows: [
                ['ISJB 150', '150 x 50', '7.1'],
                ['ISJB 175', '175 x 50', '8.1'],
                ['ISJB 200', '200 x 60', '9.9'],
                ['ISJB 225', '225 x 80', '12.8'],
            ]
        }
    }
];
