// Philippine Provinces – natural history & cultural reference data
var PH_PROVINCES = [

  // ── REGION I – Ilocos Region ──────────────────────────────────────────────
  {
    name: "Ilocos Norte",
    capital: "Laoag City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Kapurpurawan Rock Formation",
    desc: "Ilocos Norte occupies the northwestern tip of Luzon, where rolling sand dunes near Paoay and the Bangui Windmill Complex line a rugged coastline battered by the South China Sea. The Kapurpurawan Rock Formation in Burgos stands as one of the most striking coastal geological features in the north, while Paoay Lake — a natural barrier lake formed by coastal sand dune progradation during the late Quaternary — shelters freshwater birds and endemic aquatic life year-round. The province's coastline along Pagudpud is a nesting ground for sea turtles, and Saud Beach and Patapat Viaduct offer dramatic encounters with the raw Luzon Strait shoreline. Inland, Ilocos Norte's rivers and wetlands support migratory waterbirds, and the Cordillera foothills harbour resident Cordillera raptors and forest birds.",
    fact: "The Kapurpurawan Rock Formation is a rare coastal outcrop of calcium carbonate-rich sedimentary rock sculpted by millennia of wind and wave erosion along the Luzon Strait — its blindingly white surface is caused by dense concentrations of calcium carbonate originally deposited by ancient marine organisms.",
    img_seed: "ilocos-norte",
    img: "image/Kapurpurawan  Rock Formation.jpg",
    geography: {
      area: "3,467.89 km²",
      highest_peak: "Mount Sicapoo (2,361 m)",
      major_river: "Padsan River (Laoag River, 73.1 km)",
      coastline: "South China Sea & Luzon Strait"
    },
    wildlife: [
      { name: "Hawksbill Sea Turtle", latin: "Eretmochelys imbricata", status: "Critically Endangered", note: "Documented nesting at Pagudpud coastline", page: "reptiles.html" },
      { name: "Olive Ridley Sea Turtle", latin: "Lepidochelys olivacea", status: "Vulnerable", note: "Documented along Pagudpud and Patapat coastline" },
      { name: "Green Sea Turtle", latin: "Chelonia mydas", status: "Least Concern", note: "Nesting recorded at Pagudpud; globally downlisted Oct 2025", page: "reptiles.html" }
    ],
    flora: [
      "Agoho (Casuarina equisetifolia) — characteristic coastal tree of the Ilocos shoreline, stabilising sand dunes near Paoay",
      "Mangrove forests — intertidal fringe along river estuaries of the South China Sea coast",
      "Dipterocarp lowland forest — remnant patches on Cordillera foothills in the eastern interior"
    ],
    protected_areas: [
      { name: "Paoay Lake Protected Landscape", type: "Protected Landscape", pa_id: "paoay-lake" },
      { name: "Kalbario-Patapat Natural Park", type: "Natural Monument", pa_id: "kalbario-patapat" }
    ],

    landmarks: [
      { name: "Kapurpurawan Rock Formation", type: "Rock Formation", note: "White calcium carbonate coastal outcrop sculpted by millennia of wind and wave erosion; Burgos, facing the Luzon Strait" },
      { name: "La Paz Sand Dunes", type: "Sand Dunes", note: "85 km² coastal sand desert in Laoag City; one of the largest dune systems in the Philippines" },
      { name: "Kabigan Falls", type: "Waterfall", note: "27 m (87 ft) single-drop waterfall in dense forest, Balaoi, Pagudpud; accessible via a 15-minute trail" },
      { name: "Bantay Abot Cave", type: "Rock Arch", note: "Natural coastal rock arch formed by wave erosion; name means 'mountain with a hole' in Ilocano; Balaoi, Pagudpud" },
      { name: "Pagudpud Blue Lagoon", type: "Coastal Lagoon", note: "Clear cerulean cove near Dos Hermanos Islands with white sand and old-growth canopy shoreline; Pagudpud" }
    ],
    conservation_note: "Paoay Lake, declared a Protected Landscape under R.A. 12230 (2025), faces ongoing threats from agricultural runoff and invasive water hyacinth that choke native aquatic habitats."
  },
  {
    name: "Ilocos Sur",
    capital: "Vigan City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Pinsal Falls",
    desc: "Ilocos Sur stretches along the northwestern Luzon coast, its narrow coastal plain squeezed between the Cordillera foothills and the South China Sea. Pinsal Falls in Santa Maria is a powerful multi-cascade waterfall set within forested slopes, fed by Cordillera rivers at their most dramatic during the wet season. The Abra River delta creates productive wetlands that attract egrets, herons, and migratory ducks each dry season, while the Nagbacalan Lily Pond in Caoayan offers a rare lowland wetland rich in native aquatic plants and waterbirds. The Bantay Nature Park preserves a remnant patch of lowland forest, and the rugged coastline south of Vigan shelters small coves and rocky intertidal zones teeming with marine invertebrates.",
    fact: "Pinsal Falls in Santa Maria plunges 85 feet from a wide limestone ledge into twin basins flanked by limestone cliffs — considered the largest waterfall in Ilocandia, it is fed by rivers draining the western slopes of the Cordillera and runs at its most dramatic during the wet season when monsoon rainfall channels directly into the falls.",
    img_seed: "ilocos-sur",
    img: "image/Pinsal Falls ILocos Sur.jpg",
    geography: {
      area: "2,596 km²",
      highest_peak: "Mount Namandiraan (2,331 m)",
      major_river: "Abra River",
      coastline: "South China Sea (western)"
    },
    flora: [
      "Limestone canyon forest — Pinsal Falls gorge walls, Santa Maria",
      "Riparian forest — Abra River lower corridor before it meets the South China Sea near Vigan",
      "Dipterocarp lowland forest — foothill remnants along the Cordillera western slopes"
    ],
    protected_areas: [
      { name: "Tirad Pass Protected Landscape", type: "Protected Landscape", pa_id: "tirad-pass" }
    ],
    landmarks: [
      { name: "Pinsal Falls", type: "Waterfall", note: "85-foot twin-cascade waterfall in Santa Maria; largest waterfall in the Ilocos Region; fed by Cordillera rivers" },
      { name: "Pikkang Falls", type: "Waterfall", note: "Curtain-style multi-cascade waterfall in Barangay Malamin, San Juan; reached via a 30-minute river-crossing trek" }
    ],
    conservation_note: "Ilocos Sur's remaining lowland forest cover is among the most fragmented in Luzon — the Abra River corridor is its last significant lowland riparian habitat."
  },
  {
    name: "La Union",
    capital: "San Fernando City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Immuki Island",
    desc: "La Union is the smallest province in the Ilocos Region, yet it packs a remarkable diversity of natural landscapes. Immuki Island off the coast of Balaoan is a dead coral island whose compacted coral rock forms a series of crystal-clear tidal lagoons and natural pools, offering some of the most distinctive coastal formations along the Ilocos shoreline. Tangadan Falls in San Gabriel tumbles through dense montane forest in the lower Cordillera, while the Baroro River valley provides a rich riparian corridor for kingfishers, herons, and native freshwater fish. The Pugo highlands along the Cordillera foothills are blanketed in pine forest, and the surf beaches of San Juan sit on a coastline shaped by the long-shore drift of the South China Sea.",
    fact: "Immuki Island in Balaoan, La Union is a dead coral island — its surface composed entirely of compacted coral rock — whose sheltered tidal lagoons and crystal-clear pools are formed by water trapped between ancient coral formations, making it one of the most unusual coastal natural features along the Ilocos shoreline.",
    img_seed: "la-union",
    img: "image/Immuki Island La Union.jpg",
    geography: {
      area: "1,497.70 km²",
      highest_peak: "Mount Mugong, San Gabriel",
      major_river: "Amburayan River",
      coastline: "Lingayen Gulf (South China Sea)"
    },
    flora: [
      "Benguet Pine (Pinus kesiya) — montane forest on Cordillera foothills, Pugo and Bagulin highlands",
      "Mossy cloud forest — upper watershed above Tangadan Falls, San Gabriel",
      "Mangrove and coastal vegetation — Agoo-Damortis shoreline, Lingayen Gulf"
    ],
    protected_areas: [
      { name: "Agoo-Damortis Protected Landscape and Seascape", type: "Protected Landscape & Seascape", pa_id: "agoo-damortis" }
    ],
    landmarks: [
      { name: "Tangadan Falls", type: "Waterfall", note: "Two-tier cascade along the Baroro River, San Gabriel; 15 m lower drop with a deep natural plunge pool; cold water draining from the Cordillera highlands" },
      { name: "Immuki Island", type: "Coral Island", note: "Dead coral island off Balaoan; compacted coral rock forming crystal-clear tidal lagoons and natural pools" }
    ],
    conservation_note: "The Agoo-Damortis Protected Landscape and Seascape (10,648 ha along Lingayen Gulf) protects critical mangrove and seagrass habitat that serves as nursery ground for coastal fisheries."
  },
  {
    name: "Pangasinan",
    capital: "Lingayen",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Hundred Islands & Bolinao Falls",
    desc: "Pangasinan faces Lingayen Gulf along a wide coastal plain flanked by the Cordillera and Zambales mountain ranges, creating one of Luzon's most productive agricultural and fishery landscapes. The Hundred Islands National Park — actually 124 islands at low tide — shelters coral reefs and rich marine ecosystems within Alaminos Bay. The province's vast salt beds in Dasol and Infanta are some of the country's largest, and its bangus (milkfish) aquaculture industry supplies much of the national demand.",
    fact: "Bolinao in northwestern Pangasinan hosts one of the largest colonies of the Vulnerable giant clam (Tridacna gigas) under active mariculture conservation by the UP Marine Science Institute, with some individuals exceeding 1 metre in shell width.",
    img_seed: "pangasinan",
    img: "image/Bolinao Falls Panggasinan.jpg",
    geography: {
      area: "5,451 km²",
      highest_peak: "Mount San Isidro (770 m), Labrador",
      major_river: "Agno River (248 km)",
      coastline: "Lingayen Gulf"
    },
    wildlife: [
      { name: "Giant Clam", latin: "Tridacna gigas", status: "Vulnerable", note: "Active mariculture conservation colony in Bolinao, managed by UP Marine Science Institute" }
    ],

    flora: [
      "Mangrove forests — Lingayen Gulf coast, critical nursery habitat for coastal fisheries",
      "Seagrass beds — Hundred Islands shallow bays and Bolinao coastal zones",
      "Limestone karst vegetation — 124 islands and islets of Hundred Islands National Park"
    ],
    protected_areas: [
      { name: "Hundred Islands National Park", type: "Natural Monument", pa_id: "hundred-islands" }
    ],
    landmarks: [
      { name: "Hundred Islands National Park", type: "Island Group", note: "124 islands at low tide in Lingayen Gulf, Alaminos; limestone cliffs, coral reefs, and white sand coves" },
      { name: "Bolinao Falls", type: "Waterfall", note: "Three-cascade waterfall series with turquoise plunge pools in Bolinao; bamboo rafts navigate between levels" },
      { name: "Enchanted Cave", type: "Limestone Cave", note: "Ancient coral reef limestone cave with an underground freshwater pool 3–6 ft deep; Bolinao; accessible via 14 m stairway" }
    ],
    conservation_note: "Hundred Islands National Park was declared a Natural Monument under NIPAS in 2013 — its 124 islands protect coral reefs and hawksbill turtle nesting grounds in Lingayen Gulf."
  },

  // ── REGION II – Cagayan Valley ────────────────────────────────────────────
  {
    name: "Batanes",
    capital: "Basco",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Naidi Hills",
    desc: "Batanes is the northernmost province of the Philippines, a remote archipelago perched between the Luzon Strait and the Pacific, battered by typhoons and sculpted into sweeping green hillscapes unlike anywhere else in the country. The islands sit atop the Luzon Strait volcanic arc, and their exposed position means they intercept nearly every typhoon system forming in the western Pacific before it reaches mainland Luzon. The surrounding seas support seasonal runs of flying fish, mahi-mahi, skipjack, and yellowfin tuna through the Luzon Strait — one of the most productive and ecologically dynamic marine passages in the western Pacific.",
    fact: "Batanes sits atop the Luzon Strait volcanic arc and receives more direct typhoon hits per year than any other Philippine province — its exposed position between the Pacific Ocean and the South China Sea places it directly in the path of typhoon systems forming in the western Pacific before they track toward the Philippine mainland.",
    geography: {
      area: "203.22 km²",
      highest_peak: "Mount Iraya, Batan Island (1,085 m)",
      coastline: "Pacific Ocean, South China Sea, Babuyan Channel & Luzon Strait"
    },
    protected_areas: [
      { name: "Batanes Protected Landscape and Seascape", type: "Protected Landscape & Seascape", pa_id: "batanes" }
    ],
    landmarks: [
      { name: "Mount Iraya", type: "Active Volcano", note: "PHIVOLCS-monitored active stratovolcano, 1,085 m, Batan Island; cloud forest on upper slopes; one of three volcanoes in the Batanes island group" },
      { name: "Valugan Boulder Beach", type: "Boulder Beach", note: "Pacific-facing shoreline in northern Basco strewn with volcanic boulders averaging 1–2 m in diameter; displaced onto shore by typhoon swells" },
      { name: "Marlboro Country (Rakuh-a-Payaman)", type: "Plateau Pasturelands", note: "Open rolling pasturelands on Sabtang Island's western plateau with sea cliffs dropping to the Pacific; Rakuh-a-Payaman is the Ivatan name" }
    ],
    conservation_note: "The Batanes Islands serve as a critical migratory bird flyway between East Asia and the Philippines; their deep marine waters support some of the last remaining pink and red coral beds in Philippine territory.",
    img_seed: "batanes",
    img: "image/Batanes Light House .jpg"
  },
  {
    name: "Cagayan",
    capital: "Tuguegarao City",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Cape Engaño & Callao Cave",
    desc: "Cagayan is the fifth-largest province in the Philippines by land area, occupying the wide Cagayan Valley drained by the Cagayan River — the country's longest river at 505 kilometres. The Sierra Madre mountain range lines its eastern edge, sheltering the largest remaining tract of old-growth tropical rainforest in the Philippines and harbouring endemic species including the Philippine Eagle, the Giant Cloud Rat, and hundreds of bird species documented across the Cagayan Valley. Fossil beds in the Cagayan Valley have yielded Pleistocene megafauna including Stegodon and giant tortoise remains, making the province a treasure trove of Philippine paleontology.",
    fact: "The Callao Cave archaeological site in Cagayan contains fossilised bones of Homo luzonensis, a distinct human species described in a 2019 Nature paper — 2023 dating research revised the age of specimens to at least 134,000 years ago, making Homo luzonensis the oldest known human species documented in the Philippines.",
    geography: {
      area: "9,398.07 km²",
      major_river: "Cagayan River (505 km, longest river in the Philippines)",
      coastline: "Pacific Ocean & Babuyan Channel"
    },
    protected_areas: [
      { name: "Palaui Island Protected Landscape and Seascape", type: "Protected Landscape & Seascape", pa_id: "palaui-island" }
    ],
    landmarks: [
      { name: "Callao Cave", type: "Limestone Cave", note: "Seven-chamber limestone cave in Peñablanca; main chamber lit by a natural ceiling skylight; site where Homo luzonensis fossil bones were recovered, described in a 2019 Nature paper" },
      { name: "Palaui Island", type: "Volcanic Island", note: "Pristine volcanic island off Santa Ana; boulder beaches, fringing coral reefs, and coastal forest; part of Palaui Island Protected Landscape and Seascape" }
    ],
    conservation_note: "Palaui Island off Santa Ana — designated under R.A. 11038 (2018) — protects pristine coral reefs, mangroves, and volcanic rock formations at the northeastern tip of Luzon where the Pacific meets the Babuyan Channel.",
    img_seed: "cagayan",
    img: "image/Capen Engano Cagayan.jpg"
  },
  {
    name: "Isabela",
    capital: "Ilagan City",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Sta. Victoria Caves & Sierra Madre",
    desc: "Isabela is the second-largest Philippine province by land area, a vast lowland agricultural plain flanked by the Sierra Madre to the east and the Caraballo Mountains to the southwest, drained by the Cagayan River and its tributaries. The Magat River watershed feeds the Magat Dam, one of the country's largest hydroelectric reservoirs, which creates an important freshwater ecosystem for wading birds and migratory waterfowl. Vast tracts of Sierra Madre old-growth forest within Isabela form one of the most critical bird conservation landscapes in Luzon, recognised in peer-reviewed literature for its role in sheltering the majority of Luzon's threatened and near-threatened bird species.",
    fact: "The Northern Sierra Madre Natural Park in Isabela is the largest protected area in the Philippines at 359,486 hectares, sheltering approximately 1,500 vascular plant species — over 50 locally endemic — and 291 bird species including 83 endemic taxa, making it the single richest protected area in the Philippines in terms of species and habitat diversity.",
    geography: {
      area: "10,664.56 km²",
      highest_peak: "Mount Dos Cuernos (1,785 m), San Pablo",
      major_river: "Cagayan River and Magat River",
      coastline: "Pacific Ocean (eastern Sierra Madre coast)"
    },
    wildlife: [
      { name: "Philippine Eagle", latin: "Pithecophaga jefferyi", status: "Critically Endangered", note: "Documented within Northern Sierra Madre Natural Park", page: "birds.html" },
      { name: "Philippine Crocodile", latin: "Crocodylus mindorensis", status: "Critically Endangered", note: "Breeding population documented in San Mariano — Disulap River, Dinang Creek, and Dunoy Lake", page: "reptiles.html" }
    ],
    protected_areas: [
      { name: "Northern Sierra Madre Natural Park", type: "Natural Park", pa_id: "northern-sierra-madre" }
    ],
    landmarks: [
      { name: "Sta. Victoria Caves", type: "Limestone Cave", note: "Limestone cave complex within Fuyot Springs National Park, Ilagan City; 12+ caves with 3 open to visitors; subterranean waterfalls and sparkling crystalline rock formations" },
      { name: "Dibulo Falls", type: "Waterfall", note: "~100 m single-drop waterfall in Barangay Dibulo, Dinapigue; tallest waterfall in Isabela; fed by Sierra Madre streams; 15–20 minute forest trek from trailhead" }
    ],
    conservation_note: "Northern Sierra Madre Natural Park (359,486 ha, R.A. 9125, 2001) is the largest protected area in the Philippines and shelters a critically endangered Philippine Crocodile breeding population in the San Mariano river system — one of the last confirmed sites in northern Luzon.",
    img_seed: "isabela",
    img: "image/Sta. Victoria Caves Isabela.jpg"
  },
  {
    name: "Nueva Vizcaya",
    capital: "Bayombong",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Caraballo Range & Magat River",
    desc: "Nueva Vizcaya is a landlocked highland province sitting astride the Caraballo Mountains and the southern end of the Cagayan Valley, serving as the gateway between Luzon's northern highlands and the southern lowlands. Its cool climate and fertile clay loam soils support the province's role as the Vegetable Bowl of Region II, producing strawberries, citrus, and highland vegetables across its upland farms, while its river valleys and mossy forest patches shelter a diverse community of montane birds and small mammals. The Magat River originates in its mountains, and traditional Ifugao and Isinai communities maintain ancestral domain forests across much of the province.",
    fact: "The river valleys of Nueva Vizcaya sit within the southern Cagayan Valley fossil basin — the same geological depression that has yielded Pleistocene megafauna including Stegodon, an extinct proboscidean relative of modern elephants whose remains have been documented across northern Luzon, indicating that this highland corridor was once a corridor for large mammals moving through ancient forested valleys.",
    geography: {
      area: "4,813.88 km²",
      major_river: "Magat River (226 km, originates in Aritao)"
    },
    protected_areas: [
      { name: "Mount Pulag Protected Landscape", type: "Protected Landscape", pa_id: "mount-pulag" },
      { name: "Casecnan Protected Landscape", type: "Protected Landscape", pa_id: "casecnan" }
    ],
    landmarks: [
      { name: "Capisaan Cave System", type: "Cave System", note: "4.2 km limestone cave system in Kasibu; fifth-longest cave in the Philippines; nine entrances, subterranean river, and formations including stalactites, stalagmites, soda straws, and helictites" },
      { name: "Imugan Falls", type: "Waterfall", note: "35-foot (10.7 m) cascade in Santa Fe at the foot of the Caraballo Mountains; rock formations rim a shallow pool at the base" }
    ],
    conservation_note: "Nueva Vizcaya forms the headwaters of the Magat River — the largest tributary of the Cagayan River by discharge — making its upland forests critical to irrigation and flood control for farming communities throughout the Cagayan Valley.",
    img_seed: "nueva-vizcaya",
    img: "image/Caraballo Range Nueva Viscaya.jpg"
  },
  {
    name: "Quirino",
    capital: "Cabarroguis",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Siitan River & Quirino Rainforest",
    desc: "Quirino is one of the least-populated provinces in Luzon, a rugged upland territory nestled between the Sierra Madre to the east and the Caraballo Mountains to the southwest, largely blanketed by tropical rainforest and bisected by white-water rivers including the Cagayan tributary system. The Quirino Protected Landscape shelters Philippine Eagles, the Critically Endangered Philippine Crocodile (Crocodylus mindorensis) in its river systems, and a remarkable diversity of endemic reptiles and amphibians. Its remoteness has kept significant forest cover intact, making it a priority landscape for Philippine biodiversity conservation.",
    fact: "The Philippine Crocodile (Crocodylus mindorensis) — listed as Critically Endangered by the IUCN and considered one of the most threatened crocodile species in the world — is known to persist in the river systems of northern Luzon, including within the forested river corridors of the Quirino Protected Landscape, making the province one of the last strongholds of this endemic freshwater species.",
    geography: {
      area: "3,323.47 km²",
      highest_peak: "Mount Dialanese (1,808 m), Maddela",
      major_river: "Addalam River (tributary of Cagayan River)"
    },
    wildlife: [
      { name: "Philippine Eagle", latin: "Pithecophaga jefferyi", status: "Critically Endangered", note: "Recorded within Quirino Protected Landscape", page: "birds.html" },
      { name: "Cantor's Giant Softshell Turtle", latin: "Pelochelys cantorii", status: "Critically Endangered", note: "Documented in Addalam River, Cabarroguis", page: "reptiles.html" }
    ],
    protected_areas: [
      { name: "Quirino Protected Landscape", type: "Protected Landscape", pa_id: "quirino-pl" }
    ],
    landmarks: [
      { name: "Aglipay Crystal Caves", type: "Limestone Cave", note: "Multi-chamber limestone cave system in Aglipay; stalactites, stalagmites, and crystal formations; one of the principal cave attractions in the Quirino Protected Landscape area" },
      { name: "Siitan River", type: "River / Whitewater", note: "Major tributary of the Cagayan River through the Quirino Protected Landscape; known for whitewater rapids through intact old-growth rainforest canopy" }
    ],
    conservation_note: "The Quirino Protected Landscape (175,943 ha, Proclamation 548, 2004) anchors the central Sierra Madre Biodiversity Corridor — recording at least 41 threatened species and serving as one of the last Philippine Eagle strongholds in the Cagayan Valley region.",
    img_seed: "quirino",
    img: "image/Nagtipunan Quirino.jpg"
  },

  // ── CAR – Cordillera Administrative Region ────────────────────────────────
  {
    name: "Abra",
    capital: "Bangued",
    region_key: "car",
    island_group: "luzon",
    known_for: "Kaparkan Falls",
    desc: "Abra is a landlocked Cordillera province drained by the Abra River, which cuts through steep mountain ridges before emptying into the Ilocos Sur coast. Kaparkan Falls in Tineg is the province's most spectacular natural feature — a rare travertine cascade whose terraced limestone pools are unlike any other waterfall formation in northern Luzon. Kili Falls in Tubo offers a further deep-forest waterfall experience along the Cordillera river systems, while the province's remote mountain interior shelters dense montane forest rich in endemic birds. The upper Abra River tributaries support one of the last confirmed populations of the Philippine Freshwater Crocodile, and the surrounding forest slopes shelter a remarkable diversity of Cordillera raptors and hornbills.",
    fact: "Kaparkan Falls in Tineg, Abra is a rare multi-tiered travertine waterfall — its stepped terraces are built up over centuries by calcium carbonate deposits precipitating out of the mineral-rich mountain water, the same geological process that forms cave stalactites, making it one of the few travertine formations of its kind in the Philippines.",
    geography: {
      area: "4,199.72 km²",
      major_river: "Abra River (179 km)"
    },
    conservation_note: "The Abra River drains the western Cordillera highlands toward the Ilocos lowlands — its upper watershed forests are among the last intact highland-to-coast forest corridors on the western slope of the Cordillera range.",
    landmarks: [
      { name: "Kaparkan Falls", type: "Travertine Waterfall", note: "Multi-tiered travertine cascade in Tineg; calcium carbonate terraces built over centuries by mineral-rich mountain water cascading 530 m to the Tineg River; one of the few travertine formations in the Philippines" },
      { name: "Kili Falls", type: "Waterfall & Hot Spring", note: "Waterfall in Tubo where a hot spring meets an icy cold river at the base; natural wading pool and small cave at the basin; remote forest setting in the western Cordillera foothills" }
    ],
    img_seed: "abra",
    img: "image/Kaparkan Falls Abra.jpg"
  },
  {
    name: "Apayao",
    capital: "Kabugao",
    region_key: "car",
    island_group: "luzon",
    known_for: "Lussok Cave",
    desc: "Apayao is the most remote and least-visited province of the Cordillera, a densely forested upland territory where vast limestone karst formations hide some of the most spectacular cave systems in northern Luzon. Lussok Cave in Luna is the province's crown jewel — a cathedral-like underground river cave carved through ancient limestone by the Lussok River, navigable by boat through chambers draped with stalactites and flowstone curtains. The Maton River in Pudtol and other forest rivers offer pristine deep-forest water features within old-growth forest, while natural hot springs in Kabugao provide a rare geothermal feature deep within the mountain interior. The Apayao-Abulug River flows through dramatic limestone gorges that remain virtually untouched, supporting endemic freshwater fish, Philippine Crocodile populations, and some of the richest montane bird communities in northern Luzon.",
    fact: "Lussok Cave in Luna, Apayao is an active underground river cave carved through Miocene-age limestone by the Lussok River — its cave formations, including stalactites and flowstone curtains, are still actively growing as mineral-saturated groundwater seeps through the rock, depositing calcite layer by layer over thousands of years.",
    geography: {
      area: "4,502.33 km²",
      highest_peak: "Mount Sicapoo (2,361 m), Calanasan — straddles Apayao–Ilocos Norte border",
      major_river: "Apayao River"
    },
    conservation_note: "Apayao is the least densely-populated province in the Philippines — its vast river basin forests remain largely intact, making it one of the most ecologically significant yet least-studied landscapes in northern Luzon.",
    landmarks: [
      { name: "Lussok Cave", type: "Underground River Cave", note: "Seven-chamber cave in Luna carved through limestone by the Lussok River; ~100 m navigable by boat on calm azure waters; stalactites, stalagmites, and crystal formations" },
      { name: "Apayao-Abulug River", type: "River System", note: "9th largest river system in the Philippines by watershed; limestone karst gorges through the Cordillera interior; vast old-growth forest corridor along its banks" }
    ],
    img_seed: "apayao",
    img: "image/Lussok Cave.jpeg"
  },
  {
    name: "Benguet",
    capital: "La Trinidad",
    region_key: "car",
    island_group: "luzon",
    known_for: "Mt. Pulag, Ambongdolan River & Cordillera Highlands",
    desc: "Benguet is the gateway to the Cordillera highlands, home to the summer capital Baguio City and some of the Philippines' most dramatic mountain scenery. Mount Pulag — the highest peak in Luzon at 2,928 metres — rises through mossy forest into rare Philippine dwarf bamboo grassland above the clouds. The Ambongdolan River flows through scenic gorges and turquoise pools in Tublay, one of the province's most pristine river ecosystems. Bued River carves its way through the lowlands and has been central to Ibaloy settlements for generations. The vast pine forests of Atok and Kabayan shelter cold-spring creeks and waterfalls including Lengsad Falls and other cascades near Kibungan. The Kankanaey and Ibaloy peoples have terraced these mountain slopes for agriculture for centuries, maintaining an intimate land-culture relationship.",
    fact: "The summit grasslands of Mount Pulag create a sea of clouds phenomenon at dawn that draws tens of thousands of hikers annually, and they shelter endemic Luzon montane birds including the Luzon Water-redstart and the Whiskered Pitta — both restricted to the forests and mountain slopes of Luzon and documented in Mount Pulag National Park. The Ambongdolan River in Tublay is known for its striking blue-green waters fed by cold mountain springs, and remains one of the cleanest river systems in the Cordillera.",
    geography: {
      area: "2,769.08 km²",
      highest_peak: "Mount Pulag (2,922 m), Kabayan — highest peak in Luzon",
      major_river: "Agno River (headwaters in Benguet highlands)"
    },
    protected_areas: [
      { name: "Mount Pulag Protected Landscape", type: "Protected Landscape", pa_id: "mount-pulag" }
    ],
    conservation_note: "Mount Pulag, Luzon's highest peak at 2,922 metres, is sacred to the Ibaloi and Kalanguya peoples — its summit hosts rare dwarf bamboo grasslands above a cloud forest belt, a landscape with no parallel elsewhere in the Philippines.",
    landmarks: [
      { name: "Mount Pulag", type: "Protected Mountain", note: "2,922 m — highest peak in Luzon; rare dwarf bamboo summit grasslands above a cloud forest belt; sea of clouds at dawn; within Mount Pulag National Park" },
      { name: "Ambongdolan River", type: "River", note: "Clear deep-green river in Tublay fed by cold mountain springs; flows past the mouths of Paterno and Bengaongao Caves; one of the cleanest river systems in the Cordillera" }
    ],
    img_seed: "benguet",
    img: "image/Ambongdolan River Benguet.jpg"
  },
  {
    name: "Ifugao",
    capital: "Lagawe",
    region_key: "car",
    island_group: "luzon",
    known_for: "Tappiyah Falls & Hapao Wetlands",
    desc: "Ifugao rises into the heart of the Cordillera Central, its steep mountain slopes carved by the Ibulao River and its tributaries into limestone gorges and dense forest corridors. Mount Napulawan, one of the Cordillera's highest peaks at over 2,600 metres, shelters old-growth mossy forest and is a critical habitat for the Philippine Eagle. The Hapao wetlands in Hungduan host migratory waterbirds and endemic freshwater species, while Tappiyah Falls plunges approximately 70 metres into a clear pool below cloud-forest ridges that shelter the Philippine Bush Warbler — a montane endemic restricted to the Cordillera of northern Luzon — and dozens of other endemic highland birds.",
    fact: "Mount Napulawan in Ifugao rises to over 2,600 metres and is mantled in old-growth mossy forest — the province's cloud forest ridges shelter the Philippine Bush Warbler and other Luzon montane endemics, while the Ibulao River and its limestone gorge tributaries form one of the Cordillera's most intact highland watershed systems.",
    geography: {
      area: "2,618.01 km²",
      major_river: "Ibulao River and Magat River"
    },
    conservation_note: "The Rice Terraces of the Philippine Cordilleras — five clusters in Ifugao inscribed as a UNESCO World Heritage Site in 1995 — represent over 2,000 years of continuous Ifugao agricultural engineering, sustaining living ecosystems of flooded paddies, cloud forest, and terraced hillsides as a single unified cultural landscape.",
    landmarks: [
      { name: "Tappiyah Falls", type: "Waterfall", note: "Tall waterfall near Batad village accessible via trek through Banaue rice terraces and cloud forest; set within a limestone gorge below mossy ridgelines" },
      { name: "Mount Napulawan", type: "Mountain", note: "2,642 m; old-growth mossy forest on the upper slopes; critical Philippine Eagle habitat; among the highest and least-disturbed peaks in the Cordillera Central" },
      { name: "Hapao Birdwatching Site", type: "Birdwatching Site", note: "Alfonso Lista Birdwatching Site in Hungduan; rice paddies and river banks of the Hapao-Baang-Nungulunan UNESCO terraces cluster attract resident and migratory birds" }
    ],
    img_seed: "ifugao",
    img: "image/Banaue Rice Terreces.jpg"
  },
  {
    name: "Kalinga",
    capital: "Tabuk City",
    region_key: "car",
    island_group: "luzon",
    known_for: "Chico River & Tinglayan Gorge",
    desc: "Kalinga is a rugged mountain province carved by the Chico River and its tributaries, which have cut dramatic gorges and river terraces through ancient limestone and granite. The Chico River Gorge in Tinglayan is one of the most spectacular river canyons in the Philippines, its sheer cliff walls and rapids defining a wild hydrological corridor through the Cordillera highlands. Balbalasang-Balbalan National Park in the northern highlands protects vast tracts of old-growth montane forest, cloud forest, and mossy ridgelines that are home to the Philippine Eagle and the elusive Whiskered Pitta. The Pasil River, another major Chico tributary, flows through limestone outcrops rich in cave formations and unexplored forest catchments.",
    fact: "Balbalasang-Balbalan National Park is one of the least disturbed protected areas in Luzon, with elevations ranging from 700 to over 2,400 metres — its intact watershed forests shelter the Philippine Eagle, Whiskered Pitta, and some of the Cordillera's most undisturbed old-growth montane ecosystems.",
    geography: {
      area: "3,282.04 km²",
      major_river: "Chico River (longest tributary of the Cagayan River, 233 km)"
    },
    protected_areas: [
      { name: "Banao Protected Landscape", type: "Protected Landscape", pa_id: "banao" }
    ],
    conservation_note: "The Chico River — referred to as the 'River of Life' by the Kalinga people — was the subject of a landmark 1970s indigenous-led resistance that successfully halted a World Bank-funded dam project, one of the earliest victories for indigenous rights and environmental protection in Philippine history.",
    landmarks: [
      { name: "Chico River", type: "River Corridor", note: "233 km — longest tributary of the Cagayan River; white-water rafting through basalt gorges from Luplupa to Tinglayan on Class II–III rapids; corridor of towering mountains and old-growth rainforest through Kalinga" },
      { name: "Balbalasang-Balbalan National Park", type: "National Park", note: "1,338 ha in Balbalan municipality; elevations 700–2,400 m; one of the least-disturbed protected areas in Luzon; Philippine Eagle and Whiskered Pitta habitat" }
    ],
    img_seed: "kalinga",
    img: "image/Chicko River Kalinga.jpg"
  },
  {
    name: "Mountain Province",
    capital: "Bontoc",
    region_key: "car",
    island_group: "luzon",
    known_for: "Sagada Caves, Blue Soil Hills & Bomod-ok Falls",
    desc: "Mountain Province sits at the geographic heart of the Cordillera, its landscape a dramatic succession of river gorges, pine-forested ridges, and ancient rice terraces carved into steep mountain slopes. Sagada is home to Sumaguing Cave and Lumiang Cave, two interconnected limestone caverns whose towering chambers and underground rivers rank among the most impressive cave systems in the Philippines. The Blue Soil Hills of Sagada — locally known as Kaman-utek — are an otherworldly geological formation, their rolling slopes stained a striking bluish-grey by high concentrations of copper sulfate in the soil. Lake Danum in Sagada is a serene high-altitude lake ringed by mossy forest, while the Bomod-ok (Big) Falls in Sagada drops about 60 metres through dense forest and is one of the most powerful waterfalls in the Cordillera. The province's upper elevation forests shelter endemic amphibians and birds found only in the central Cordillera, including the Mountain Shrike, a Near Threatened Philippine endemic restricted to highland forest above 1,200 metres on Luzon, Mindoro, and Mindanao.",
    fact: "The Blue Soil Hills of Sagada owe their otherworldly bluish-grey colour to high concentrations of copper sulfate in the soil — the same oxidation chemistry that turns copper rooftops and bronze statues green — making this one of the only natural copper-mineral soil exposures of its kind in the Philippines. Below ground, Sumaguing Cave, the deepest cave in Sagada at over 150 metres, has been sculpted over millennia by dripping calcium carbonate into cathedral-like chambers of stalactites, stalagmites, and underground pools, while its connection through roughly 500 metres of subterranean passages to the adjacent Lumiang Cave creates one of the most spectacular underground traverses in Southeast Asia.",
    geography: {
      area: "2,157.38 km²",
      highest_peak: "Mount Data (2,310 m), Bauko",
      major_river: "Chico River (originates in Mountain Province, 233 km total)"
    },
    protected_areas: [
      { name: "Mount Data National Park", type: "National Park", pa_id: "mount-data" }
    ],
    conservation_note: "Mount Data National Park straddles the Mountain Province–Benguet border along the Halsema Highway — its mossy montane forest marks the watershed divide between rivers draining east into the Cagayan Valley and west into the Ilocos lowlands.",
    landmarks: [
      { name: "Sumaguing Cave", type: "Cave", note: "One of the largest cave systems in Sagada; 150+ m deep with vast stalactite chambers and underground pools; connects to Lumiang Cave via ~500 m subterranean passage" },
      { name: "Lumiang Cave", type: "Burial Cave", note: "Entrance stacked with ~100 ancient coffins rising 9 layers high — oldest estimated at 500 years old; Kankanaey burial tradition still practised; connects underground to Sumaguing Cave" },
      { name: "Blue Soil Hills", type: "Geological Formation", note: "Copper sulfate–stained rolling hills (Kaman-utek, meaning \"like a brain\" in Bontoc dialect) in Bontoc municipality; distinctive bluish-grey colour from copper oxidation; one of the only natural copper mineral soil exposures in the Philippines" },
      { name: "Bomod-ok Falls", type: "Waterfall", note: "~200 feet (~60 m) waterfall in Banga-an accessible via trek through rice terraces; \"bomod-ok\" means \"big\" in Bontoc; among the most voluminous waterfalls in the Cordillera" }
    ],
    img_seed: "mountain-province",
    img: "image/Blue Soil Hills Mountain Province.jpg"
  },

  // ── REGION III – Central Luzon ────────────────────────────────────────────
  {
    name: "Aurora",
    capital: "Baler",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Millennium Balete Tree & Sierra Madre Rainforest",
    desc: "Aurora faces the Pacific Ocean along Luzon's eastern coast, sheltered from the west by the Sierra Madre — the Philippines' longest mountain range and one of its most biodiverse forest landscapes. Within the municipality of Maria Aurora stands the Millennium Balete Tree (Ficus balete), one of the oldest and largest trees in the Philippines, its massive intertwined root system encircling a cold freshwater spring pool where visitors swim beneath an ancient canopy. Aurora's interior Sierra Madre forests are critical habitat for the Philippine Eagle, the Golden-crowned Flying Fox, and more than 60 species of Luzon-endemic birds, while its Pacific-facing coast hosts powerful swells that first brought surfing to the Philippines.",
    fact: "The Millennium Balete Tree of Maria Aurora is a Ficus species carbon-dated at between 400 and 600 years old, with a trunk so vast that dozens of people linking hands cannot encircle it — freshwater springs well up naturally at its roots to form a clear swimming pool, making it one of the few trees in the Philippines that functions as both a living ecological monument and an active bathing site for the local community.",
    geography: {
      area: "3,147.32 km²",
      highest_peak: "Mount Anacuao (1,850 m)",
      coastline: "Pacific Ocean (eastern Luzon coast)"
    },
    wildlife: [
      { name: "Philippine Eagle", latin: "Pithecophaga jefferyi", status: "Critically Endangered", note: "Documented within Aurora Memorial National Park", page: "birds.html" }
    ],
    protected_areas: [
      { name: "Aurora Memorial National Park", type: "National Park", pa_id: "aurora-memorial" }
    ],
    landmarks: [
      { name: "Millennium Balete Tree", type: "Ancient Tree", note: "Ficus balete in Barangay Quirino, Maria Aurora; carbon-dated 400–600 years; trunk too wide for dozens of people linking hands to encircle; freshwater spring wells up naturally at the roots" },
      { name: "Ditumabo Falls (Mother Falls)", type: "Waterfall", note: "42 m (140 ft) waterfall in Barangay Ditumabo, San Luis; 30 m wide basin forms a natural cold swimming pool; fed by Sierra Madre streams" }
    ],
    conservation_note: "Aurora Memorial National Park (est. 1949, Proclamation 130) shelters the Philippine Eagle in the Sierra Madre's old-growth forest — one of the few mainland Luzon sites where the eagle's presence within a protected area has been specifically documented.",
    img_seed: "aurora",
    img: "image/Balete Tree , Balete Park Aurora.jpg"
  },
  {
    name: "Bataan",
    capital: "Balanga City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Pantingan Peak & Mangrove Coast",
    desc: "Bataan is a mountainous peninsula jutting into Manila Bay, its rugged interior anchored by two separate volcanic massifs: Pantingan Peak — the highest summit in the province at 1,388 metres, rising from the Mariveles Mountain Range in southern Bataan — and the dormant stratovolcano Mount Natib in the north, whose dense rainforest feeds the Manila Bay watershed. The western shore is lined with some of Luzon's best-preserved mangrove ecosystems, while Bataan's landscape of cloud-shrouded peaks, jungle, and coastal wetlands frames one of the Philippines' most historically significant peninsulas, site of the World War II Bataan Death March.",
    fact: "Pantingan Peak, the highest point in Bataan at 1,388 metres, rises from the Mariveles Mountain Range in the province's southern tip — a separate massif from Mount Natib's dormant stratovolcano in the north, whose 6-by-7-kilometre caldera complex contains five geothermal spring fields with water temperatures reaching 56°C. Together these two forested massifs shelter populations of the Philippine Hawk-Eagle and the Luzon Hornbill within Bataan National Park's old-growth dipterocarp and mossy forest.",
    geography: {
      area: "1,372.98 km²",
      highest_peak: "Pantingan Peak, Mariveles Mountains (1,388 m)",
      coastline: "Manila Bay and South China Sea"
    },
    protected_areas: [
      { name: "Bataan Natural Park", type: "Natural Park", pa_id: "bataan-natural" }
    ],
    landmarks: [
      { name: "Mount Natib", type: "Volcanic Caldera", note: "Potentially active stratovolcano, 1,253 m, northern Bataan; 6×7 km caldera open to the northwest; five geothermal spring fields (Asin, Mamot, Tigulangin, Uyong, Paipit) with temperatures reaching 56°C" },
      { name: "Pantingan Peak", type: "Mountain Summit", note: "1,388 m summit of the Mariveles Mountain Range, southern tip of Bataan; highest point in the province; old-growth dipterocarp and mossy forest within Bataan Natural Park" }
    ],
    conservation_note: "Bataan Natural Park (18,335 ha, Proclamation 24, 1945) covers the Mariveles Mountains at the tip of the Bataan Peninsula — its forest watershed filters runoff into Manila Bay and shelters endemic species in one of the Philippines' most historically significant landscapes.",
    img_seed: "bataan",
    img: "image/Pantingan Peak  Bataan.jpg"
  },
  {
    name: "Bulacan",
    capital: "Malolos City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Biak-na-Bato National Park & Angat Watershed",
    desc: "Bulacan occupies the northern fringe of Manila Bay's vast delta system, with its uplands anchored by Biak-na-Bato National Park — a labyrinthine landscape of limestone formations, cave networks, and forest-clad ridges carved by centuries of erosion along the foothills of the Sierra Madre. The Angat Reservoir and its surrounding watershed forests form the primary water supply for Metro Manila, making Bulacan's upland ecosystems critically important to millions of people. The province's broad alluvial plains, fed by the Pampanga and Angat rivers, transition from productive rice-growing lowlands into these rugged forested highlands sheltering endemic wildlife.",
    fact: "Biak-na-Bato National Park's limestone cave network shelters large colonies of cave-roosting bats and swiftlets whose accumulated guano builds up deep deposits on cave floors over thousands of years — these deposits sustain entire invertebrate food webs of cave-adapted beetles, mites, and detritivores that form the base of a self-contained underground ecosystem independent of sunlight.",
    geography: {
      area: "2,783.69 km²",
      major_river: "Pampanga River"
    },
    landmarks: [
      { name: "Biak-na-Bato Cave Complex", type: "Limestone Caves", note: "100+ limestone caves carved by the Madlum River through karst terrain, San Miguel; includes Bahay Paniki Cave (House of Bats); \"Biak-na-Bato\" means \"split boulder\"" }
    ],
    conservation_note: "Bulacan's lowlands are drained by the lower Pampanga River basin before it reaches Manila Bay — the Candaba Swamp in its northern lowlands is one of the last significant freshwater wetland habitats remaining in the heavily developed Central Luzon plain.",
    img_seed: "bulacan",
    img: "image/Biak na Bato Bulacan.jpg"
  },
  {
    name: "Nueva Ecija",
    capital: "Palayan City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Minalungao National Park & Pantabangan Reservoir",
    desc: "Nueva Ecija is the Philippines' premier rice-producing province, but its eastern edge rises into the Caraballo Mountains where Minalungao National Park preserves a dramatic gorge carved by the Peñaranda River through towering limestone karst formations, its turquoise waters threading beneath sheer rock faces draped in forest. The Pantabangan Reservoir and surrounding watershed forest reserve protect the upstream catchment feeding one of the largest irrigation networks in Southeast Asia. The province's vast rice paddies and wetlands also serve as critical wintering habitat for migratory shorebirds and ducks along the East Asian-Australasian Flyway.",
    fact: "Minalungao National Park's gorge was sculpted by millions of years of river erosion cutting through Miocene-age limestone, producing sheer karst cliffs and a vivid turquoise river channel that contrasts sharply with the surrounding lowland plain. Pantabangan Reservoir, covering approximately 8,400 hectares when full, is one of the largest dam-created inland water bodies in the Philippines; during severe drought years, the submerged ruins of the old town of Pantabangan re-emerge from the receding water.",
    geography: {
      area: "5,689.69 km²",
      major_river: "Pampanga River (260 km)"
    },
    protected_areas: [
      { name: "Pantabangan–Carranglan Watershed Forest Reserve", type: "Watershed Forest Reserve", pa_id: "pantabangan" }
    ],
    landmarks: [
      { name: "Minalungao National Park", type: "Limestone Gorge", note: "Peñaranda River gorge with emerald-green waters threading beneath limestone walls up to 16 m high, General Tinio; 2,018 ha national park established 1967" }
    ],
    conservation_note: "The Pantabangan–Carranglan Watershed Forest Reserve (84,500 ha, Proclamation 561, 1969) protects the catchment feeding the Pantabangan Reservoir — which irrigates farmland across 24 municipalities, directly sustaining Nueva Ecija's role as the Rice Granary of the Philippines.",
    img_seed: "nueva-ecija",
    img: "image/Minalungao Park Nueva Ecija.jpg"
  },
  {
    name: "Pampanga",
    capital: "City of San Fernando",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Tutulari Avatar Gorge & Mount Arayat",
    desc: "Pampanga's dramatic natural interior is anchored by the Tutulari Avatar Gorge — a narrow canyon of towering volcanic rock walls draped in hanging vegetation, carved by centuries of river erosion through the Zambales mountain foothills. The isolated volcanic cone of Mount Arayat rises from the flat Pampanga plain, its forests forming a sky-island supporting Philippine forest birds separated from the main Luzon ranges. Along Manila Bay's northern shore, the province's wetlands and fishponds are internationally important wintering grounds for migratory shorebirds, including globally significant populations of the Far Eastern Curlew.",
    fact: "Tutulari Gorge sits within the foothills of the Zambales volcanic arc, where ancient lava flows and pyroclastic deposits were later incised by river erosion to form sheer canyon walls — the same volcanic geology that produced Mount Pinatubo to the northwest. Mount Arayat, rising 1,026 metres above an otherwise featureless plain, is an isolated Pleistocene volcano whose forest interior shelters the endemic Luzon Bleeding-heart Pigeon.",
    geography: {
      area: "2,001.22 km²",
      highest_peak: "Mount Arayat (1,026 m)",
      major_river: "Pampanga River"
    },
    protected_areas: [
      { name: "Mount Arayat National Park", type: "National Park", pa_id: "mount-arayat" },
      { name: "Mount Pinatubo Natural Park", type: "Natural Park", pa_id: "mount-pinatubo" }
    ],
    landmarks: [
      { name: "Tutulari Avatar Gorge", type: "Rock Canyon", note: "Narrow moss-covered canyon in Porac within Aeta ancestral domain (Inarraro); 500 m gorge trail through dripping rock walls and hanging vegetation; shaped by post-Pinatubo volcanic geology; \"tutulu\" means \"dripping\" in Kapampangan" },
      { name: "Mount Arayat", type: "Isolated Volcano", note: "Isolated Pleistocene volcanic cone, 1,026 m, rising from the flat Pampanga plain; sky-island forest separated from the main Luzon ranges; within Mount Arayat National Park" }
    ],
    conservation_note: "Mount Arayat stands as an isolated Pleistocene volcano rising from the flat Pampanga plain — its 3,715-hectare forest is the only significant upland habitat in an otherwise entirely low-lying agricultural province.",
    img_seed: "pampanga",
    img: "image/Tutulari Avatar Gorge  Pampanga.jpg"
  },
  {
    name: "Tarlac",
    capital: "Tarlac City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Ubod Falls & Zambales Mountain Foothills",
    desc: "Tarlac is a landlocked province at the heart of Central Luzon, its western edge climbing into the Zambales Mountains where forest streams cascade down to form Ubod Falls — a powerful waterfall fed by cold springs deep within the foothills. The province's vast plains are divided between sugarcane estates and rice paddies, while the Tarlac River and its tributaries support productive wetlands hosting nesting Purple Heron and Purple Swamphen colonies. The Sacobia-Bamban River basin was dramatically reshaped by the 1991 eruption of Mount Pinatubo, whose lahar flows buried entire barrios and farmlands before secondary vegetation slowly reclaimed the hardened plains.",
    fact: "Ubod Falls in the Zambales foothills is fed by springs draining through volcanic rock of the Zambales Ophiolite Complex — one of the oldest and best-exposed sections of ancient oceanic crust on land in Southeast Asia, thrust onto the surface by tectonic collision during the Oligocene to Miocene. The same Pinatubo eruption that reshaped Tarlac's river valleys temporarily lowered global temperatures by 0.5°C — the largest climate cooling event since Krakatoa in 1883.",
    geography: {
      area: "3,046.49 km²",
      major_river: "Tarlac River (95.2 km, tributary of Agno River)"
    },
    protected_areas: [
      { name: "Mount Pinatubo Natural Park", type: "Natural Park", pa_id: "mount-pinatubo" }
    ],
    landmarks: [
      { name: "Ubod Falls", type: "Waterfall", note: "Approximately 40 m multi-tiered waterfall in San Clemente, deep in the Zambales foothills; accessed via river trekking through dense forest" }
    ],
    conservation_note: "The 1991 Pinatubo eruption deposited lahar flows across Tarlac's river valleys, temporarily reshaping the province's hydrology and cooling global temperatures by 0.5°C — the largest volcanic climate cooling event since Krakatoa in 1883.",
    img_seed: "tarlac",
    img: "image/Ubod Falls Tarlac.jpg"
  },
  {
    name: "Zambales",
    capital: "Iba",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Camara Island & Mt. Pinatubo Crater Lake",
    desc: "Zambales is a rugged coastal province on Luzon's western seaboard where ancient oceanic geology, active volcanism, and coral-rich island waters converge in a single landscape. Camara Island — twin coral-sand islands off the coast of Pundaquit that connect at low tide across a shared sandbar — rises from coral-encrusted shallows that support medium to high diversity reef fish communities, part of a broader arc of coral reef ecosystems documented in surveys extending along the Zambales coastline. Inland, the province rests on the Zambales Ophiolite Complex — one of the largest and best-preserved exposures of ancient oceanic crust on land in the world, spanning 160 kilometres north to south and documented in publications by the United States Geological Survey as a scientifically significant window into the earth's tectonic history. Mt. Pinatubo, on the province's eastern boundary, erupted catastrophically in 1991, burying approximately 18,000 hectares of forest under volcanic ash; its flooded summit crater is now one of the most dramatic crater lakes in Southeast Asia, and its post-eruption lahar landscape has become one of the most intensively studied sites of primary ecological succession in the region.",
    fact: "The Zambales Ophiolite Complex — a 160-kilometre-long exposure of ancient ocean floor thrust onto Luzon by tectonic collision — preserves two structurally distinct blocks with different geological origins: the Acoje Block, composed of Late Jurassic to Early Cretaceous island arc rocks, and the Coto Block, composed of Eocene mid-ocean ridge basalt; the complex is documented by the United States Geological Survey as one of the most geologically significant ophiolite sequences in Southeast Asia.",
    geography: {
      area: "3,630.35 km²",
      highest_peak: "Mount Tapulao (2,044 m), Palauig",
      coastline: "South China Sea"
    },
    protected_areas: [
      { name: "Subic Bay Forest Reserve", type: "Wildlife Sanctuary", pa_id: "subic-forest" },
      { name: "Mount Pinatubo Natural Park", type: "Natural Park", pa_id: "mount-pinatubo" }
    ],
    landmarks: [
      { name: "Lake Pinatubo", type: "Crater Lake", note: "2.5 km diameter crater lake formed after the 1991 Pinatubo eruption; 95–115 m deep; turquoise-green hue from dissolved volcanic minerals; Botolan, Zambales" },
      { name: "Camara Island", type: "Coral Island / Sandbar", note: "Twin coral-sand islands off Pundaquit, San Antonio; connected at low tide across a shared sandbar; fringing coral reefs with documented reef fish diversity" },
      { name: "Mount Tapulao", type: "Mountain Peak", note: "2,044 m summit of the Zambales Mountains, Palauig; highest peak in the range; pine forest on upper slopes above largely degraded terrain" }
    ],
    conservation_note: "Mount Tapulao (2,044 m), the highest peak in the Zambales Mountains, harbours pine forests above an otherwise largely degraded mountain range — its upper slopes retain biodiversity amid a landscape significantly altered by decades of chromite mining.",
    img_seed: "zambales",
    img: "image/Camara Island Zambales.jpg"
  },

  // ── REGION IV-A – CALABARZON ──────────────────────────────────────────────
  {
    name: "Batangas",
    capital: "Batangas City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Mt. Maculot & Verde Island Passage",
    desc: "Batangas is a rugged peninsula province south of Manila where dramatic volcanic geology, highland trekking terrain, and one of Earth's most extraordinary marine corridors converge in a remarkably compact landscape. Mt. Maculot rises sharply above the southern shore of Lake Taal, its iconic basalt rockpile summit commanding sweeping panoramas over the Taal Caldera — a volcano nested within a lake nested within an ancient caldera, one of the planet's most geologically layered landforms. Lake Taal's isolated freshwater caldera harbours two biological anomalies found nowhere else on Earth: the Tawilis (Sardinella tawilis), the world's only truly freshwater sardine, and the Lake Taal sea snake (Hydrophis semperi), a marine reptile stranded and gradually adapted to fresh water over millennia of geological isolation. Offshore, the Verde Island Passage separating Batangas from Mindoro shelters more reef fish species per unit area than any other marine habitat on Earth, with scientists designating it the \"centre of the centre of marine biodiversity.\"",
    fact: "The Lake Taal sea snake (Hydrophis semperi) is one of the world's only sea snakes to have permanently colonised a freshwater lake — isolated within Taal's caldera after its marine connection closed, it adapted into a fully freshwater reptile that completes its entire life cycle within a landlocked volcanic lake, listed as Vulnerable on the IUCN Red List and found nowhere else on Earth.",
    geography: {
      area: "3,115.05 km²",
      highest_peak: "Mount Maculot (c. 947 m), Cuenca",
      major_river: "Pansipit River — sole river outlet of Taal Lake to Balayan Bay",
      coastline: "Verde Island Passage, Batangas Bay, Balayan Bay"
    },
    wildlife: [
      { name: "Tawilis", latin: "Sardinella tawilis", status: "Endangered", note: "World's only freshwater sardine; endemic to Taal Lake; assessed Endangered by IUCN in 2019 due to overfishing and habitat degradation", page: "freshwater.html" },
      { name: "Lake Taal Sea Snake", latin: "Hydrophis semperi", status: "Vulnerable", note: "Fully freshwater-adapted sea snake endemic to Taal Lake; one of only two truly landlocked sea snake populations on Earth", page: "reptiles.html" },
      { name: "Whale Shark", latin: "Rhincodon typus", status: "Endangered", note: "Sightings documented in the Verde Island Passage off Batangas coast; drawn by the passage's exceptional marine productivity", page: "marine.html" }
    ],
    flora: [
      "Lowland dipterocarp forest — Mount Maculot and Lobo highlands; shelters Luzon endemic forest birds including the Luzon Bleeding-heart",
      "Taal Volcano island scrub — pioneering vegetation on post-eruption lava flows within the caldera; dominated by grasses and early-colonising shrubs",
      "Mangrove forests — Batangas Bay and Lobo–Mabini coastline; critical nursery habitat feeding the Verde Island Passage fisheries"
    ],
    protected_areas: [
      { name: "Taal Volcano Protected Landscape", type: "Protected Landscape", pa_id: "taal-volcano" }
    ],
    landmarks: [
      { name: "Taal Volcano", type: "Active Volcano / Nested Caldera", note: "Active volcano on Volcano Island in Taal Lake; 39 recorded historical eruptions; contains Main Crater Lake with Vulcan Point — a unique nested structure: island within a lake within a lake within an island; Philippines' second most active volcano" },
      { name: "Mount Maculot", type: "Mountain Summit", note: "~947 m basalt rockpile summit above the southern shore of Taal Lake, Cuenca; iconic silhouette visible from across the Taal Caldera" }
    ],
    conservation_note: "The Tawilis (Sardinella tawilis) — the world's only freshwater sardine, endemic to Taal Lake — was assessed as Endangered on the IUCN Red List in 2019; overfishing pressure in the small lake leaves it with no alternative habitat should the lake ecosystem degrade.",
    img_seed: "batangas",
    img: "image/Mt Maculot Batangas.jpg"
  },
  {
    name: "Cavite",
    capital: "Imus City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Malibiclibic Falls & Mt. Palay-Palay Forest",
    desc: "Cavite is a compact peninsula province on the southwestern shore of Manila Bay, its urbanised lowlands giving way to forested hills in the south where pockets of extraordinary biodiversity persist. Malibiclibic Falls in General Emilio Aguinaldo cascades through forested slopes near the foot of Mt. Mataas na Gulod, fed by rivers draining the southern highlands of the province. To the southwest, the Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape preserves Cavite's last remaining tract of lowland dipterocarp rainforest — a 3,973-hectare refuge that shelters the Luzon Bleeding-heart, the Philippine Eagle-Owl, and the Rufous Hornbill among over 80 documented bird species. Along the coast, Manila Bay's degraded but still biologically active mudflats and mangrove fringes provide feeding habitat for resident waterbirds and migratory shorebirds during the Northeast Monsoon.",
    fact: "The Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape — Cavite's last remaining lowland dipterocarp rainforest — shelters over 80 bird species including the Philippine Eagle-Owl, Luzon Bleeding-heart, and Rufous Hornbill, making this 3,973-hectare fragment one of the most important lowland forest refuges in Southwestern Luzon despite being approximately 60 kilometres southwest of Manila.",
    geography: {
      area: "1,526.28 km²",
      highest_peak: "Mount Mataas na Gulod, Mounts Palay-Palay Protected Landscape",
      coastline: "Manila Bay (north), Verde Island Passage (southwest)"
    },
    wildlife: [
      { name: "Luzon Bleeding-heart", latin: "Gallicolumba luzonica", status: "Near Threatened", note: "Documented in Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape; Luzon endemic", page: "birds.html" },
      { name: "Philippine Eagle-Owl", latin: "Bubo philippensis", status: "Vulnerable", note: "Resident in old-growth dipterocarp forest of Mounts Palay-Palay; Philippine endemic", page: "birds.html" },
      { name: "Rufous Hornbill", latin: "Buceros hydrocorax", status: "Vulnerable", note: "Documented in Mounts Palay-Palay forest; Philippine endemic hornbill", page: "birds.html" }
    ],
    flora: [
      "Lowland dipterocarp rainforest — Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape (3,973 ha); one of the last lowland dipterocarp fragments in southwestern Luzon",
      "Riparian forest — Malibiclibic and Maragondon river corridors; shelters kingfishers, herons, and endemic freshwater fish",
      "Mangrove and mudflat communities — Manila Bay coastline; feeding habitat for migratory shorebirds during the northeast monsoon"
    ],
    protected_areas: [
      { name: "Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape", type: "Protected Landscape", pa_id: "palay-palay" }
    ],
    landmarks: [
      { name: "Malibiclibic Falls", type: "Waterfall", note: "Multi-tier waterfall in General Emilio Aguinaldo; cascades through forested slopes near the foot of Mount Mataas na Gulod; fed by rivers draining the southern Cavite highlands" }
    ],
    conservation_note: "The Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape is Cavite's last lowland dipterocarp forest — a 3,973-hectare biodiversity refuge for over 80 bird species hemmed in by one of Southeast Asia's most rapidly urbanising coastlines.",
    img_seed: "cavite",
    img: "image/Malibiclibic Falls Cavite.jpg"
  },
  {
    name: "Laguna",
    capital: "Santa Cruz",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Pagsanjan Falls & Mt. Makiling Reserve",
    desc: "Laguna wraps around the southern shore of Laguna de Bay — the Philippines' largest lake at nearly 950 square kilometres yet averaging only 2.8 metres in depth — whose vast shallow waters support an extraordinary diversity of freshwater life and one of the country's most productive inland fisheries. Pagsanjan Falls plunges through a dramatic gorge carved by the Balanac and Bumbungan rivers, its towering cliffs draped in ferns and orchids within the forested Pagsanjan Gorge National Park. To the south, Mt. Makiling — a forest reserve established in 1910, administered by the University of the Philippines Los Baños, and designated an ASEAN Heritage Park in 2013 — is one of the most intensively studied forests in the Philippines, its cloud-draped slopes sheltering over 1,000 plant species of which 28% are endemic to the Philippines, alongside a rich fauna of endemic birds, reptiles, and bats. At the Laguna-Quezon border, the active volcanic cone of Mt. Banahaw rises to 2,170 metres, its isolated forests serving as the type locality for multiple endemic species found nowhere else on Earth.",
    fact: "Mt. Banahaw–San Cristobal Protected Landscape is the type locality for at least four endemic small mammal species — Apomys banahao, Apomys magnus, Musseromys gulantang, and Rhynchomys banahao — all described from specimens collected on its forested slopes and confirmed by peer-reviewed research to be found nowhere else in the Philippines.",
    geography: {
      area: "1,928.23 km²",
      highest_peak: "Mount Banahaw (2,170 m), boundary with Quezon Province",
      major_river: "Pagsanjan (Lumban) River — drains through the Pagsanjan Gorge to Laguna de Bay",
      coastline: "Laguna de Bay southern shore"
    },
    wildlife: [
      { name: "Philippine Flying Lemur", latin: "Cynocephalus volans", status: "Least Concern", note: "Resident in Mt. Makiling forest; largest gliding mammal in the Philippines, capable of gliding over 100 metres", page: "mammals.html" },
      { name: "Luzon Bleeding-heart", latin: "Gallicolumba luzonica", status: "Near Threatened", note: "Documented in Mt. Makiling Forest Reserve and Mt. Banahaw forests; Luzon endemic ground-dove", page: "birds.html" },
      { name: "Banahaw Forest Mouse", latin: "Apomys banahao", status: "Endemic", note: "Described from specimens collected on Mt. Banahaw slopes; type locality species found nowhere else; not yet assessed on the IUCN Red List", page: "mammals.html" }
    ],
    flora: [
      "Mt. Makiling lowland dipterocarp and mossy forest — over 1,000 plant species documented, 28% endemic to the Philippines; administered by UP Los Baños since 1910; ASEAN Heritage Park",
      "Mt. Banahaw cloud forest — type locality for multiple endemic small mammals; active volcanic soils support specialist plant communities",
      "Freshwater swamp and aquatic vegetation — Laguna de Bay littoral zone; critical spawning and nursery habitat for the province's inland fishery"
    ],
    protected_areas: [
      { name: "Mounts Banahaw–San Cristobal Protected Landscape", type: "Protected Landscape", pa_id: "banahaw-san-cristobal" },
      { name: "Pagsanjan Gorge National Park", type: "National Park", pa_id: "pagsanjan-gorge" }
    ],
    landmarks: [
      { name: "Pagsanjan Falls", type: "Waterfall / Gorge", note: "Approximately 90 m three-tiered waterfall in Cavinti; accessed by paddling 1.5 km upstream through a limestone and marble gorge; Devil's Cave lies behind the main falls" },
      { name: "Mount Makiling", type: "Forest Reserve", note: "Dormant volcanic massif straddling Laguna and Quezon; administered by UP Los Baños since 1910; ASEAN Heritage Park designated 2013; over 1,000 plant species documented with 28% Philippine-endemic" }
    ],
    conservation_note: "Laguna de Bay — the Philippines' largest lake at approximately 949 km² — supports a major commercial inland fishery yet receives untreated wastewater from Metro Manila's southern urbanised fringe; water quality degradation remains the province's most critical environmental pressure.",
    img_seed: "laguna",
    img: "image/Pagsanjan Falls Laguna.jpg"
  },
  {
    name: "Quezon",
    capital: "Lucena City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Jomalig Island & Polillo Archipelago",
    desc: "Quezon is CALABARZON's largest province, its territory stretching from the sheltered coast of Tayabas Bay to the raw Pacific seaboard, creating one of the most ecologically diverse coastlines in Luzon. Jomalig Island — part of the Polillo Archipelago lying 25 kilometres off the Pacific coast — is a designated Key Biodiversity Area sheltering an important population of the Philippine Duck (Anas luzonica) alongside over 25 species of migratory shorebirds in its wetlands and marshes. Inland, the Quezon Protected Landscape preserves 938 hectares of old-growth dipterocarp forest within the southern Sierra Madre, where a published botanical survey documented 328 plant species across 84 families. At the province's northern border, Mt. Banahaw–San Cristobal rises to 2,170 metres, its isolated volcanic forests supporting high plant endemism and serving as the type locality for several species found nowhere else on Earth.",
    fact: "The Polillo Islands archipelago of Quezon Province is designated a Key Biodiversity Area by BirdLife International, harbouring seven endemic bird subspecies and several reptile species restricted to the archipelago — including the Polillo Calotes and Polillo Forest Frog — alongside globally threatened Philippine endemics such as the Gray's Monitor Lizard (Varanus olivaceus), Sailfin Lizard (Hydrosaurus pustulatus), and the Giant Golden-crowned Flying Fox (Acerodon jubatus).",
    geography: {
      area: "8,743.84 km²",
      highest_peak: "Mount Banahaw (2,170 m), boundary with Laguna Province",
      major_river: "Agos River (110 km) — drains the Sierra Madre foothills to Lamon Bay",
      coastline: "Pacific Ocean (Lamon Bay, Polillo Strait), Tayabas Bay, Tayabas Sea"
    },
    wildlife: [
      { name: "Philippine Duck", latin: "Anas luzonica", status: "Least Concern", note: "Resident and migratory population in Polillo Islands wetlands; only duck species endemic to the Philippines; downlisted from Vulnerable by IUCN in 2025", page: "birds.html" },
      { name: "Giant Golden-crowned Flying Fox", latin: "Acerodon jubatus", status: "Endangered", note: "Roost colonies in Quezon Protected Landscape and Polillo Islands; world's largest bat by wingspan", page: "mammals.html" },
      { name: "Gray's Monitor Lizard", latin: "Varanus olivaceus", status: "Vulnerable", note: "Documented in the Polillo Archipelago; semi-arboreal frugivore and Philippine endemic", page: "reptiles.html" }
    ],
    flora: [
      "Old-growth dipterocarp forest — Quezon Protected Landscape (938 ha, southern Sierra Madre); 328 plant species across 84 families documented in published botanical survey",
      "Polillo island lowland forest — shelters multiple island-endemic reptiles and the Gray's Monitor Lizard; no formal protected area designation",
      "Mangrove and seagrass beds — Tayabas Bay and Lamon Bay coastline; nursery grounds for commercially important coastal fish and invertebrates"
    ],
    protected_areas: [
      { name: "Quezon Protected Landscape", type: "Protected Landscape", pa_id: "quezon-pl" },
      { name: "Mounts Banahaw–San Cristobal Protected Landscape", type: "Protected Landscape", pa_id: "banahaw-san-cristobal" }
    ],
    landmarks: [
      { name: "Mount Banahaw", type: "Active Volcanic Complex", note: "2,170 m active volcanic massif on the Laguna-Quezon boundary; type locality for multiple Luzon-endemic small mammals; mossy forest on summit slopes; within Mounts Banahaw–San Cristobal Protected Landscape" },
      { name: "Jomalig Island", type: "Pacific Island / Wetland", note: "Remote island 25 km off the Quezon Pacific coast; designated Key Biodiversity Area; wetlands shelter the Philippine Duck and over 25 migratory shorebird species" }
    ],
    conservation_note: "The Polillo Archipelago is a BirdLife Key Biodiversity Area harbouring seven endemic bird subspecies, the Gray's Monitor Lizard, and the Giant Golden-crowned Flying Fox — yet no part of the archipelago is currently gazetted under the NIPAS system, leaving its endemic wildlife without formal protection.",
    img_seed: "quezon",
    img: "image/Jomalig Island Quezon.jpg"
  },
  {
    name: "Rizal",
    capital: "Antipolo City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Masungi Georeserve & Antipolo Karst Caves",
    desc: "Rizal is the province immediately east of Metro Manila, its densely urbanised western lowlands ascending sharply into the rugged lower slopes of the Sierra Madre — the longest mountain range in the Philippines and home to approximately 40% of the country's remaining forest cover. Antipolo City, the provincial capital, sits atop a limestone ridge in the Sierra Madre foothills where karst formations shaped by millions of years of groundwater dissolution produce cave systems — including the stalactite- and stalagmite-filled Mystical Cave — set within the ancient limestone terrain of the eastern Luzon foothills. The Upper Marikina River Basin Protected Landscape covers 26,125 hectares of critical watershed forest declared under Proclamation No. 296 (2011), sheltering endemic and globally threatened plant species — including narra, kamagong, and lauan — while supplying Metro Manila with a significant portion of its freshwater. Within this protected landscape, the Masungi Georeserve in Tanay has restored over 400 hectares of degraded karst forest, documenting the Northern Luzon Giant Cloud Rat (Phloeomys pallidus) and producing peer-reviewed species discoveries within sight of the country's largest urban conglomeration.",
    fact: "The Masungi Georeserve in Tanay, Rizal — a 400-hectare restored karst limestone forest — became the type locality for the endemic land snail Hypselostoma latispira masungiensis, described by University of the Philippines Los Baños researchers Harold Lipae, Angelique Estabillo, Ian Kendrich Fontanilla, and Emmanuel Ryan de Chavez in a 2020 paper published in the Philippine Journal of Systematic Biology — making it one of the few sites in Luzon where a formally described new taxon was discovered within 50 kilometres of Metro Manila.",
    geography: {
      area: "1,182.65 km²",
      major_river: "Marikina River — originates in Sierra Madre foothills of Tanay; major tributary of Pasig River"
    },
    wildlife: [
      { name: "Northern Luzon Giant Cloud Rat", latin: "Phloeomys pallidus", status: "Least Concern", note: "Documented in Masungi Georeserve and Upper Marikina River Basin; nocturnal rodent endemic to Luzon, one of the world's largest rodents", page: "mammals.html" },
      { name: "Philippine Flying Lemur", latin: "Cynocephalus volans", status: "Least Concern", note: "Resident in Sierra Madre foothills forest within Upper Marikina River Basin Protected Landscape", page: "mammals.html" }
    ],
    flora: [
      "Karst limestone forest — Masungi Georeserve, Tanay (400+ ha restored); type locality for the endemic land snail Hypselostoma latispira masungiensis",
      "Old-growth and secondary dipterocarp forest — Upper Marikina River Basin Protected Landscape (26,125 ha); shelters narra, kamagong, and lauan",
      "Riverine forest — Marikina River corridor; regulates Metro Manila's flood peaks and supplies a significant portion of the city's freshwater"
    ],
    protected_areas: [
      { name: "Upper Marikina River Basin Protected Landscape", type: "Protected Landscape", pa_id: "upper-marikina" }
    ],
    landmarks: [
      { name: "Masungi Georeserve", type: "Karst Limestone Forest", note: "400+ ha restored karst limestone forest in Tanay; type locality for the endemic land snail Hypselostoma latispira masungiensis (described 2020); documents the Northern Luzon Giant Cloud Rat within 50 km of Metro Manila" }
    ],
    conservation_note: "The Upper Marikina River Basin Protected Landscape (26,125 ha, Proclamation 296, 2011) is the last significant forest watershed above Metro Manila — its intact forest moderates flooding in the Marikina–Pasig floodplain, protecting millions of residents downstream.",
    img_seed: "rizal",
    img: "image/Mystical Cave Antipolo.jpg"
  },

  // ── REGION IV-B – MIMAROPA ────────────────────────────────────────────────
  {
    name: "Marinduque",
    capital: "Boac",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Kawa Kawa Falls",
    desc: "Marinduque rises from the Sibuyan Sea as a heart-shaped island built around Mount Malindig, a potentially active andesitic stratovolcano reaching 1,157 metres above sea level. Its summit is draped in mossy forest thick with wild orchids and ferns, while the mountain's western foothills are warmed by the solfataric springs of Malbog — a quiet reminder of the volcanic heat still present below. Tucked into the forested hills of Sta. Cruz, Kawa Kawa Falls descends through a series of three cascades into deep, rounded pools sculpted from the bedrock over centuries of flowing water. The surrounding shallows of the Sibuyan Sea shelter coral reef communities, while the Boac River drainage still carries the long ecological shadow of the 1996 Marcopper tailings spill.",
    fact: "Kawa Kawa Falls in Sta. Cruz takes its name from the Filipino word for a large cooking cauldron — centuries of cascading water have carved a series of deep, rounded plunge pools into the bedrock through hydraulic action and abrasion, the largest measuring roughly 10 metres across and 4 metres deep at its centre.",
    geography: {
      area: "953 km²",
      highest_peak: "Mount Malindig (1,157 m) — potentially active andesitic stratovolcano",
      coastline: "Sibuyan Sea (north), Tayabas Sea (east), Bondoc Strait (south)"
    },
    wildlife: [
      { name: "Hawksbill Sea Turtle", latin: "Eretmochelys imbricata", status: "Critically Endangered", note: "Nesting documented on Marinduque beaches; forages on coral reefs in the Sibuyan Sea", page: "reptiles.html" }
    ],
    flora: [
      "Mossy montane forest — upper slopes of Mount Malindig; supports wild orchids, ferns, and mosses beneath near-permanent cloud cover",
      "Lowland dipterocarp forest — lower Malindig flanks and river valleys; remnant patches interspersed with agricultural land",
      "Mangrove and coastal vegetation — Boac River estuary and southern coastline; partially recovering from the 1996 Marcopper tailings spill"
    ],
    protected_areas: [
      { name: "Marinduque Wildlife Sanctuary", type: "Wildlife Sanctuary", pa_id: "marinduque-ws" }
    ],
    landmarks: [
      { name: "Kawa Kawa Falls", type: "Waterfall", note: "Three-cascade waterfall in Sta. Cruz; centuries of hydraulic action carved deep rounded plunge pools up to 10 m across and 4 m deep in the bedrock; \"Kawa Kawa\" means cooking cauldron in Filipino" },
      { name: "Malbog Sulfur Springs", type: "Hot Spring", note: "Solfataric hot springs at the foot of Mount Malindig, Buenavista; warm bluish-white sulfuric water fed by volcanic heat beneath the stratovolcano" }
    ],
    conservation_note: "The Boac River drainage still carries the ecological legacy of the 1996 Marcopper copper mine tailings spill — one of the worst mining environmental disasters in Philippine history — and while visible contamination has decreased, heavy metal accumulation in sediments persists decades later.",
    img_seed: "marinduque",
    img: "image/Kawa Kawa Falls Marinduque.jpg"
  },
  {
    name: "Occidental Mindoro",
    capital: "Mamburao",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Mounts Iglit–Baco Natural Park",
    desc: "Occidental Mindoro occupies the western half of Mindoro island, its rugged interior dominated by the peaks and plateaus of Mounts Iglit–Baco Natural Park — a mosaic of montane grassland, open plateau, and forest that forms the last secure habitat of the Critically Endangered Tamaraw (Bubalus mindorensis), a dwarf buffalo found nowhere else on Earth. The province's western coastline faces the Mindoro Strait, where coral reef systems and mangrove-lined estuaries provide nursery grounds for a wide range of fish and invertebrates. Inland, rivers draining the Iglit-Baco range support riparian forest corridors that shelter endemic birds including the Mindoro Bleeding-heart, one of many species found nowhere outside the island.",
    fact: "Mounts Iglit–Baco Natural Park is the last stronghold of the Tamaraw (Bubalus mindorensis) — the population crashed to fewer than 100 individuals in the 1970s due to hunting and habitat loss, but protection of the park has allowed the core population to recover at an average annual growth rate of approximately 5 percent in recent decades.",
    geography: {
      area: "5,851 km²",
      highest_peak: "Mount Baco (2,488 m), Mounts Iglit–Baco Natural Park",
      major_river: "Busuanga River system — drains the Iglit-Baco plateau westward to the Mindoro Strait",
      coastline: "Mindoro Strait (west), Sulu Sea (south)"
    },
    wildlife: [
      { name: "Tamaraw", latin: "Bubalus mindorensis", status: "Critically Endangered", note: "Last global stronghold in Mounts Iglit–Baco Natural Park; population recovering from fewer than 100 in the 1970s", page: "mammals.html" },
      { name: "Mindoro Bleeding-heart", latin: "Gallicolumba platenae", status: "Critically Endangered", note: "Endemic to Mindoro; documented in lowland and mid-elevation forest within Occidental Mindoro", page: "birds.html" },
      { name: "Oliver's Warty Pig", latin: "Sus oliveri", status: "Vulnerable", note: "Endemic to Mindoro island; heavily hunted and rare; found in forested areas across Occidental Mindoro", page: "mammals.html" }
    ],
    flora: [
      "Montane grassland and mosaic forest — Iglit-Baco plateau; primary habitat of the Tamaraw, maintained partly by the grazing behaviour of the buffalo itself",
      "Lowland dipterocarp forest — lower Iglit-Baco flanks and river valleys; shelters Mindoro endemic birds and small mammals",
      "Mangrove forests — Sablayan and San Jose coastlines; important coastal nursery for Mindoro Strait fisheries"
    ],
    protected_areas: [
      { name: "Mounts Iglit–Baco Natural Park", type: "Natural Park", pa_id: "iglit-baco" },
      { name: "Apo Reef Natural Park", type: "Natural Park", pa_id: "apo-reef" }
    ],
    landmarks: [
      { name: "Apo Reef", type: "Coral Reef System", note: "34 km² coral reef system in the Mindoro Strait; second-largest contiguous coral reef in the world after the Great Barrier Reef; within Apo Reef Natural Park" },
      { name: "Mount Baco", type: "Mountain Summit", note: "2,488 m summit within Mounts Iglit–Baco Natural Park; highest peak in Occidental Mindoro; core highland habitat of the Tamaraw" }
    ],
    conservation_note: "Mounts Iglit–Baco Natural Park is the only secure refuge of the Tamaraw (Bubalus mindorensis) — a dwarf buffalo found nowhere else on Earth; the species has been recovering at roughly 5% per year since active protection began, but encroachment on park boundaries from agricultural expansion remains a persistent threat.",
    img_seed: "occidental-mindoro",
    img: "image/Mt. Iglit Oc. Mindoro.jpg"
  },
  {
    name: "Oriental Mindoro",
    capital: "Calapan City",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Mount Halcon",
    desc: "Oriental Mindoro's interior is anchored by Mount Halcon, the highest peak in the MIMAROPA region at 2,585 metres, its slopes rising through lowland dipterocarp forest into dense montane growth and mossy summit forest. The mountain is a designated Key Biodiversity Area harbouring more threatened endemic species than any other KBA on Mindoro, including the Mindoro Bleeding-heart and the Mindoro Imperial Pigeon. The province's northern coastline faces the Verde Island Passage, one of the most species-dense marine corridors in the Coral Triangle, and Puerto Galera's reefs have been documented to contain more than 750 fish species within a 3-kilometre radius. Naujan Lake — the country's fourth-largest freshwater lake — lies at the mountain's eastern foothills and serves as a critical wintering habitat for migratory waterbirds.",
    fact: "Mount Halcon is a Key Biodiversity Area spanning 509 square kilometres and harbours more threatened endemic species than any other KBA on Mindoro — 16 in total, including three Critically Endangered, four Endangered, and nine Vulnerable, making it one of the most ecologically significant peaks in the Philippine highlands.",
    geography: {
      area: "4,238 km²",
      highest_peak: "Mount Halcon (2,585 m) — highest peak in MIMAROPA region",
      major_river: "Bongabong River — drains Halcon's eastern slopes to the Tablas Strait",
      coastline: "Verde Island Passage (north), Tablas Strait (east), Mindoro Sea (south)"
    },
    wildlife: [
      { name: "Mindoro Bleeding-heart", latin: "Gallicolumba platenae", status: "Critically Endangered", note: "Endemic to Mindoro; documented on Halcon forest slopes; one of only four bleeding-heart pigeon species", page: "birds.html" },
      { name: "Mindoro Imperial Pigeon", latin: "Ducula mindorensis", status: "Near Threatened", note: "Endemic to Mindoro; documented in Halcon forests; feeds on forest fruits", page: "birds.html" }
    ],
    flora: [
      "Old-growth lowland dipterocarp forest — lower Halcon slopes; most diverse forest type on Mindoro and KBA core habitat",
      "Mossy montane forest — upper Halcon ridges above 1,500 m; endemic ferns, orchids, and pitcher plants (Nepenthes mindanaoensis)",
      "Naujan Lake freshwater marsh — 3,448-ha freshwater lake ecosystem; critical wintering habitat for migratory waterfowl"
    ],
    protected_areas: [
      { name: "Naujan Lake National Park", type: "National Park", pa_id: "naujan-lake" }
    ],
    landmarks: [
      { name: "Mount Halcon", type: "Mountain Peak / KBA", note: "2,585 m summit, highest peak in the MIMAROPA region; Key Biodiversity Area spanning 509 km²; harbours 16 threatened endemic species including the Mindoro Bleeding-heart and Mindoro Imperial Pigeon" },
      { name: "Naujan Lake", type: "Freshwater Lake", note: "Philippines' fourth-largest freshwater lake at the eastern foothills of Mount Halcon; 3,448 ha; National Park; critical wintering habitat for migratory waterfowl" }
    ],
    conservation_note: "Puerto Galera's coral reefs in northern Oriental Mindoro — documented with over 750 reef fish species within a 3-kilometre radius — are part of the Verde Island Passage, the Earth's most fish-species-dense marine strait; increasing dive tourism and coastal development directly threaten this globally significant reef.",
    img_seed: "oriental-mindoro",
    img: "image/Mt. Halcon Or. Mindoro.jpg"
  },
  {
    name: "Palawan",
    capital: "Puerto Princesa City",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Palawan Karst Landscape",
    desc: "Palawan is the Philippines' last ecological frontier — a 450-kilometre narrow island stretching toward Borneo, its rugged interior built on limestone karst formed from ancient coral reefs roughly 20 million years old. The Puerto Princesa Subterranean River National Park, a UNESCO World Heritage Site, channels an 8.2-kilometre underground river through dramatic karst chambers packed with stalactites and cave-adapted fauna, its lower reach tidal and brackish where the river flows directly into the sea. Offshore, the Tubbataha Reefs Natural Park — a no-take marine protected area in the Sulu Sea — protects the Philippines' most pristine coral atolls, with manta rays, whale sharks, and nesting populations of hawksbill and green sea turtles.",
    fact: "The karst limestone underlying the Puerto Princesa Subterranean River National Park was formed from ancient coral reefs approximately 20 million years ago — the underground river carved an 8.2-kilometre channel through this ancient reef rock, and its lower half is tidal and brackish, making it one of the few navigable underground rivers in the world that empties directly into the sea.",
    geography: {
      area: "17,031 km²",
      highest_peak: "Mount Mantalingahan (2,086 m), Brooke's Point — highest peak in Palawan",
      major_river: "Iwahig River — drains the karst interior near Puerto Princesa",
      coastline: "South China Sea (west), Sulu Sea (east), Mindoro Strait (north)"
    },
    wildlife: [
      { name: "Palawan Bearcat", latin: "Arctictis binturong whitei", status: "Vulnerable", note: "Palawan subspecies of the binturong; documented in Mount Mantalingahan forests", page: "mammals.html" },
      { name: "Palawan Peacock-Pheasant", latin: "Polyplectron napoleonis", status: "Vulnerable", note: "Endemic to Palawan; one of the Philippines' most ornate endemic birds", page: "birds.html" },
      { name: "Philippine Cockatoo", latin: "Cacatua haematuropygia", status: "Critically Endangered", note: "Palawan holds the largest remaining wild population; congregates in mangrove and forest edges", page: "birds.html" }
    ],
    flora: [
      "Palawan lowland dipterocarp forest — primary forest type across interior Palawan; approximately 1,500 vascular plant species, over 200 endemic to Palawan",
      "Karst forest and caves — Puerto Princesa Subterranean River NP; calciphilous vegetation adapted to limestone substrate carved from 20-million-year-old coral reef",
      "Mangrove forests — Honda Bay, Malampaya Sound, and Ulugan Bay; among the most extensive and intact mangrove systems in the Philippines"
    ],
    protected_areas: [
      { name: "Puerto Princesa Subterranean River National Park", type: "UNESCO Natural World Heritage Site", pa_id: "puerto-princesa-river" },
      { name: "Tubbataha Reefs Natural Park", type: "UNESCO Natural World Heritage Site", pa_id: "tubbataha-reef" },
      { name: "Mount Mantalingahan Protected Landscape", type: "Protected Landscape", pa_id: "mount-mantalingahan" }
    ],
    landmarks: [
      { name: "Puerto Princesa Subterranean River", type: "Underground River", note: "UNESCO World Heritage Site; 8.2 km navigable underground river through karst chambers; lower reach is tidal and brackish, emptying directly into the sea at St. Paul Bay" },
      { name: "Tubbataha Reefs", type: "Coral Atoll", note: "UNESCO World Heritage Site in the Sulu Sea; two remote coral atolls; nesting ground for hawksbill and green sea turtles; documented manta ray and whale shark aggregations" },
      { name: "Bacuit Archipelago (El Nido)", type: "Karst Island Cluster", note: "45 limestone karst islands north of El Nido town; oldest rock formations date to 270 million years ago; vertical cliffs drop into hidden lagoons formed by collapsed limestone chambers" }
    ],
    conservation_note: "Palawan holds two UNESCO World Heritage Sites — the Puerto Princesa Subterranean River and Tubbataha Reefs — and houses the largest remaining Philippine Cockatoo population; rapid expansion of nickel mining concessions across the island's interior is the most immediate threat to its ecological integrity.",
    img_seed: "palawan",
    img: "image/Palawan Karst.jpg"
  },
  {
    name: "Romblon",
    capital: "Romblon",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Mount Guiting-Guiting",
    desc: "Romblon is an archipelagic province of three major islands — Romblon, Tablas, and Sibuyan — scattered across the Sibuyan Sea, linked by strong currents that maintain exceptionally clear, nutrient-rich waters. Sibuyan Island has been called the Galápagos of Asia for its extraordinary endemism, the product of millions of years of oceanic isolation — its interior is dominated by Mount Guiting-Guiting, a 2,058-metre granite massif whose jagged ridgeline and ultramafic soils support specialized plant communities found nowhere else, including the Sibuyan pitcher plant (Nepenthes sibuyanensis). The surrounding Sibuyan Sea plunges to depths exceeding 500 metres, where deep-water upwelling feeds shallow reefs frequented by thresher sharks, hammerheads, and passing cetaceans.",
    fact: "Mount Guiting-Guiting Natural Park harbours over 700 vascular plant species, with approximately 54 endemic to Sibuyan Island alone — the mountain's granite and ultramafic geology, combined with millions of years of isolation, has produced forest stands of up to 1,551 trees per hectare, among the densest recorded anywhere in the Philippines.",
    geography: {
      area: "1,533 km²",
      highest_peak: "Mount Guiting-Guiting (2,058 m), Sibuyan Island — among the most technically challenging treks in the Philippines",
      coastline: "Sibuyan Sea (all sides — Romblon, Tablas, and Sibuyan islands)"
    },
    wildlife: [
      { name: "Sibuyan Pitcher Plant", latin: "Nepenthes sibuyanensis", status: "Vulnerable", note: "Endemic to Mount Guiting-Guiting's upper slopes on Sibuyan Island; carnivorous plant found nowhere else on Earth", page: "flora.html" }
    ],
    flora: [
      "Ultramafic forest — Mount Guiting-Guiting; specialist plant community adapted to high nickel and chromium soils; over 54 species endemic to Sibuyan Island",
      "Granite ridge cloud forest — upper Guiting-Guiting (above 1,500 m); dense moss-draped trees and pitcher plants in near-permanent cloud cover",
      "Sibuyan Sea coral reefs — fringing and patch reefs in clear, deep waters; sustained by upwelling from the 500-metre-deep Sibuyan Sea basin"
    ],
    protected_areas: [
      { name: "Mount Guiting-Guiting Natural Park", type: "Natural Park", pa_id: "guiting-guiting" }
    ],
    landmarks: [
      { name: "Mount Guiting-Guiting", type: "Granite Mountain", note: "2,058 m granite massif on Sibuyan Island; jagged ultramafic ridgeline; 700+ vascular plant species documented with ~54 endemic to Sibuyan Island; one of the most technically demanding treks in the Philippines" }
    ],
    conservation_note: "Sibuyan Island — called the Galápagos of Asia — has been geologically isolated for millions of years, producing extraordinary endemism; Mount Guiting-Guiting Natural Park (15,235 ha) is the island's only gazetted protected area, leaving significant lowland forest outside any formal protection.",
    img_seed: "romblon",
    img: "image/Mt. Guiting guiting Romblon.jpg"
  },

  // ── REGION V – Bicol Region ───────────────────────────────────────────────
  {
    name: "Albay",
    capital: "Legazpi City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Quitinday Green Hills",
    desc: "Albay's landscape is defined by two geological extremes — the near-perfect cone of Mayon Volcano rising to 2,463 metres above the coastal plain, and the rolling limestone mounds of Quitinday Green Hills, formed from ancient coral reef deposits compressed and uplifted by tectonic plate movement millions of years ago. Mayon is the Philippines' most active stratovolcano, having erupted over 52 times in recorded history, yet its forested slopes support 104 land vertebrate species including the Giant Golden-Crowned Flying Fox and the Philippine Warty Pig. The Albay Gulf and Ticao Pass shelter diverse cetaceans, with sperm whales, whale sharks, and dolphins sighted offshore during the dry season.",
    fact: "The Quitinday Green Hills of Camalig are a field of limestone mounds formed from ancient coral reef deposits compressed and uplifted by tectonic plate movement millions of years ago — prehistoric marine fossils can still be found embedded in the slopes, making the hills a visible record of the seafloor that once lay beneath this part of Luzon.",
    landmarks: [
      { name: "Mayon Volcano", type: "Active Stratovolcano", note: "Philippines' most active stratovolcano, 2,463 m; near-perfect cone above the Albay Gulf; 52+ recorded historical eruptions; forested slopes shelter the Giant Golden-crowned Flying Fox" },
      { name: "Quitinday Green Hills", type: "Limestone Karst", note: "Field of limestone mounds in Camalig formed from ancient coral reef deposits uplifted by tectonic movement; prehistoric marine fossils embedded in the slopes" }
    ],
    img_seed: "albay",
    img: "image/Quitinday Green Hills Albay.jpg"
  },
  {
    name: "Camarines Norte",
    capital: "Daet",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Colasi Falls",
    desc: "Camarines Norte is the northernmost province of the Bicol Region, its landscape shaped by a Pacific-facing coastal plain bordering Lamon Bay and forested interior hills drained by rivers flowing east toward the Philippine Sea. In the municipality of Mercedes, Colasi Falls drops approximately 21 metres through three successive cascades in intact tropical forest, its catchment sustaining riparian habitat for migratory and resident birds. Offshore, the Calaguas Islands — a remote archipelago of 17 islands and islets — support a marine protected sanctuary whose reefs are among the most isolated along the Pacific coast of Luzon, though they face recurring Crown-of-Thorns starfish outbreaks that threaten live coral cover.",
    fact: "Colasi Falls in Mercedes drops approximately 21 metres in three successive cascades — the tiered structure is characteristic of waterfalls carved through alternating bands of harder and softer rock, where each resistant layer produces a distinct step in the stream's longitudinal profile as the river gradually incises through the hillside.",
    landmarks: [
      { name: "Colasi Falls", type: "Waterfall", note: "21 m three-cascade waterfall in Mercedes; tiered structure carved through alternating hard and soft rock bands; set within dense tropical forest" },
      { name: "Calaguas Islands", type: "Island Group", note: "Remote archipelago of 17 islands and islets off the Pacific coast; fringing coral reefs and white-sand beaches; one of the most isolated island groups along Luzon's Pacific seaboard" }
    ],
    img_seed: "camarines-norte",
    img: "image/Colasi Falls Camarines Norte.jpg"
  },
  {
    name: "Camarines Sur",
    capital: "Pili",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Caramoan Islands",
    desc: "Camarines Sur is the largest province in Bicol, its landscape ranging from the limestone karst islets of the Caramoan Peninsula to the volcanic slopes of Mount Isarog, whose mossy forest harbours the endemic Bicol Shrew and a subspecies of the Philippine Scops Owl. The province's coastal lagoons and river deltas provide nesting habitat for sea turtles and Philippine Forest Turtles, while Lake Buhi shelters the Sinarapan (Mistichthys luzonensis) — the world's smallest commercially harvested fish at just 9–12 mm in length, endemic to this single lake. The Ragay Gulf coastline supports mangrove systems and seagrass beds that serve as nursery grounds for diverse marine species.",
    fact: "Caramoan National Park was established in 1938, making it one of the oldest protected areas in the Philippines — its 34.5 square kilometres of limestone karst islets, sea cliffs, and coral-rich waters on the Bicol Peninsula preserve cave-adapted wildlife and coastal ecosystems that have been under formal protection for nearly nine decades.",
    landmarks: [
      { name: "Caramoan Islands", type: "Limestone Karst / National Park", note: "34.5 km² of limestone karst islets, sea cliffs, and coral-rich waters on the Bicol Peninsula; Caramoan National Park established 1938 — one of the oldest protected areas in the Philippines" },
      { name: "Mount Isarog", type: "Volcanic Mountain", note: "1,966 m potentially active stratovolcano above Naga City; 1,300+ vascular plant species; 143 bird species with 15 endemic; habitat of the endemic Isarog Shrewmouse and Isarog Shrew-rat" },
      { name: "Lake Buhi", type: "Freshwater Lake", note: "1,800 ha lake at ~91 m elevation; sole habitat of the Sinarapan (Mistichthys luzonensis) — world's smallest commercially harvested fish, averaging 12 mm in length" }
    ],
    img_seed: "camarines-sur",
    img: "image/Caramoan Islands Camrines Sur.jpg"
  },
  {
    name: "Catanduanes",
    capital: "Virac",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Binurong Point",
    desc: "Catanduanes is an island province off the Pacific coast of Bicol, positioned directly in the path of typhoons sweeping toward Luzon — one of the most typhoon-exposed landmasses in the world, averaging around five direct typhoon hits per year. Its rugged coastline is defined by volcanic rock formations like those of Binurong Point in Baras, where sheer cliffs drop directly into the Philippine Sea and strong updrafts draw raptors and seabirds to the exposed headland. The island's interior forests shelter endemic Bicol birds, while coastal wetlands and seagrass beds provide habitat for nesting marine turtles and dugongs.",
    fact: "Binurong Point in Baras sits atop volcanic rock formations where sheer cliffs plunge directly into the Philippine Sea — the exposed headland funnels strong coastal updrafts that attract raptors including the Philippine hawk-eagle and white-collared kingfisher, making it one of the most accessible seacliff bird-watching sites on Catanduanes.",
    landmarks: [
      { name: "Binurong Point", type: "Sea Cliff", note: "Volcanic rock headland in Baras where sheer cliffs plunge directly into the Philippine Sea; exposed coastal updrafts attract raptors and seabirds; one of the most accessible seacliff viewpoints on Catanduanes" }
    ],
    img_seed: "catanduanes",
    img: "image/Binurong point Catanduanes.jpg"
  },
  {
    name: "Masbate",
    capital: "Masbate City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Catandayagan Falls",
    desc: "Masbate is a three-island province sitting at the junction of the Sibuyan Sea, Visayan Sea, and Ticao Pass, its strategic position making it one of the most important cetacean migration corridors in the Philippines. The nutrient-rich Ticao Pass draws blue whales, Bryde's whales, and spinner dolphins and has been documented as one of Southeast Asia's most productive whale-watching straits. On the western shoreline of Ticao Island, Catandayagan Falls drops approximately 30 metres from a limestone sea cliff directly into the Masbate Pass, its source a small freshwater lake hidden within dense forest at the top of the escarpment.",
    fact: "Catandayagan Falls on Ticao Island is among an estimated 40 waterfalls worldwide that empty directly into the ocean — its cascade plunges approximately 30 metres from the edge of a limestone sea cliff straight into the Masbate Pass, fed by a freshwater lake concealed within dense forest on top of the escarpment.",
    landmarks: [
      { name: "Catandayagan Falls", type: "Sea-cliff Waterfall", note: "~30 m waterfall on Ticao Island that drops from a limestone sea cliff directly into Masbate Pass; fed by a freshwater lake within forest on the escarpment; one of ~40 waterfalls worldwide that empty directly into the ocean" },
      { name: "Ticao Pass", type: "Marine Strait", note: "Nutrient-rich tidal passage between Ticao Island and Luzon; documented blue whales, Bryde's whales, whale sharks, and spinner dolphins; one of Southeast Asia's most productive cetacean corridors" }
    ],
    img_seed: "masbate",
    img: "image/Catandayagan Falls Ticao Island Masbate.jpg"
  },
  {
    name: "Sorsogon",
    capital: "Sorsogon City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Tikling Island",
    desc: "Sorsogon occupies the southernmost tip of Luzon, its landscape shaped by the active Bulusan Volcano and its crater lake, and its waters at Donsol Bay hosting the world's largest known seasonal aggregation of whale sharks. Off the coast of Matnog, Tikling Island's beach glows pink from the accumulated shells of foraminifera — microscopic marine organisms whose calcium carbonate remains wash ashore and blend with the fine white coral sand. The island's northern shore is fringed by dense mangrove forest, and its surrounding reefs serve as breeding habitat for diverse reef fish. Sorsogon's coastline opens onto the San Bernardino Strait, one of the most powerful tidal passages in the archipelago.",
    fact: "The pink hue of Tikling Island's beach in Matnog comes from the accumulated shells of foraminifera — microscopic single-celled marine organisms that build calcium carbonate shells tinted red and pink, which break down over time and mix with the white coral sand to give the beach its distinctive colour.",
    landmarks: [
      { name: "Bulusan Volcano", type: "Active Stratovolcano", note: "1,565 m; fourth most active volcano in the Philippines; 300 m wide summit crater; within Bulusan Volcano National Park (3,672 ha)" },
      { name: "Tikling Island", type: "Pink Sand Beach", note: "Matnog, Sorsogon; distinctive pink hue from accumulated foraminifera shells mixed with white coral sand; mangrove forest on the island's northern shore" },
      { name: "Donsol Bay", type: "Marine Aggregation Site", note: "World's largest known seasonal aggregation of whale sharks; primary season December–June when plankton blooms draw feeding sharks to the Sorsogon coast" }
    ],
    img_seed: "sorsogon",
    img: "image/Tikling Island Sorsogon.jpg"
  },

  // ── REGION VI – Western Visayas ───────────────────────────────────────────
  {
    name: "Aklan",
    capital: "Kalibo",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Ati-Atihan Festival & Boracay",
    desc: "Aklan is a small province on the northwestern coast of Panay, its coastal lowlands rising to the northern Panay highlands and its offshore island of Boracay being the Philippines' most internationally renowned beach destination, famous for its powdery White Beach. The Aklan River winds through a lowland plain of rice paddies and coconut groves before entering the Sibuyan Sea, while the province's interior rainforest patches shelter endemic Panay birds including the Critically Endangered Visayan Warty Pig and the Writhed-billed Hornbill. The Ati-Atihan Festival in Kalibo, considered the mother of all Philippine festivals, celebrates the original Ati indigenous people and the Christianization of Aklan.",
    fact: "Boracay's iconic White Beach sand is composed almost entirely of crushed coral fragments with a mean grain size of 0.25 mm — finer than most beach sands globally — which gives it its characteristic powdery texture and brilliant white colour even in direct noon sunlight.",
    landmarks: [
      { name: "Jawili Falls", type: "Tiered Waterfall", note: "Seven natural terraced basins on a limestone staircase in Tangalan; cool spring water cascades through each level into clear swimming and diving pools; highest basin at ~30 m" },
      { name: "Boracay White Beach", type: "White-sand Beach", note: "4 km beach in Malay composed of pulverised coral and shell fragments from surrounding fringing reefs; one of the most visited beaches in the Philippines" }
    ],
    img_seed: "aklan"
  },
  {
    name: "Antique",
    capital: "San Jose de Buenavista",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Hinagdanan Caves & Mountain Terrain",
    desc: "Antique occupies the western coast of Panay Island, squeezed between the Sulu Sea and the Central Panay Mountain Range, which rises to 2,117 metres at Mount Madja-as and forms one of the most rugged and biodiverse highland landscapes in the Visayas. The province's rugged interior forests are critical habitat for the Critically Endangered Visayan Hornbill, the Philippine Cockatoo, and the endemic Visayan Warty Pig, while its coastal mangroves and seagrass beds shelter dugongs and hawksbill turtles. The Kinaray-a-speaking people of Antique maintain a proud highland cultural tradition, and the province's mountain trails connect remote Ati communities still practicing traditional forest resource management.",
    fact: "The Central Panay Mountain Range, which runs through Antique, Iloilo, and Capiz, has been identified as one of the world's most important biodiversity hotspot areas for Visayan endemic birds, with 18 endemic bird species — five of which are found in the Visayas and nowhere else on Earth.",
    landmarks: [
      { name: "Mount Madja-as", type: "Mountain", note: "2,117 m — highest peak in Panay and 2nd highest in the Visayas; source of four major rivers (Dalanas, Tibiao, Bacong, Mali-ao); crown-shyness mossy forest, sea of clouds, and 14 waterfalls on its slopes" },
      { name: "Mararison Island", type: "Island Marine Sanctuary", note: "Small island off Culasi with fringing coral reefs showing 53–65% live coral cover on the northwest side; declared marine sanctuary with seagrass beds and diverse reef fish" }
    ],
    img_seed: "antique"
  },
  {
    name: "Capiz",
    capital: "Roxas City",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Seafood Capital & Capiz Shells",
    desc: "Capiz is the \"Seafood Capital of the Philippines,\" its flat coastal plain facing the Sibuyan Sea and supporting one of the country's richest coastal fisheries, with Roxas City's fish market handling enormous volumes of crab, oysters, scallops, and capiz-shell bivalves daily. The Capiz shell — Placuna placenta — has been harvested from these waters for centuries and is crafted into translucent lampshades, decorative panels, and jeepney ornaments exported worldwide. Inland, Capiz' rice paddies and freshwater rivers provide habitat for nesting herons and migratory ducks, while the province's low profile and coastal geography have traditionally made it highly vulnerable to storm surges.",
    fact: "The Capiz shell (Placuna placenta) is a flat, nearly transparent bivalve up to 15 cm in diameter that was historically used as window glass in colonial Philippine buildings — window panes made from these shells can still be found in heritage bahay na bato houses across the Visayas.",
    landmarks: [
      { name: "Suhot Cave & Spring", type: "Cave & Spring", note: "Interconnected caverns in Dumalag fed by a cold sulfur-rich spring from Mount Panginra-on; natural pool at the cave entrance; stalactites and stalagmites inside the cave complex" }
    ],
    img_seed: "capiz"
  },
  {
    name: "Guimaras",
    capital: "Jordan",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Sweetest Mangoes on Earth",
    desc: "Guimaras is a small island province in the Iloilo Strait between Panay and Negros, its gently rolling terrain blanketed in mango orchards, coconut groves, and coastal mangroves that frame pristine white-sand beaches. The island is internationally recognised for producing the sweetest mangoes in the world — a claim supported by sugar content measurements, and the Guimaras mango has secured a Geographical Indication status. The surrounding Iloilo Strait and its coral reefs were severely affected by the 2006 Solar I oil spill — the worst in Philippine history — though coral and mangrove restoration efforts have achieved remarkable recovery over the following decade.",
    fact: "The 2006 Solar I oil tanker sinking off Guimaras released approximately 2.1 million litres of bunker fuel, coating 300 km of coastline and killing tens of thousands of seabirds and marine animals; however, the subsequent community-led mangrove replanting effort was so successful that the area was cited by the IUCN as a global model for oil spill ecological restoration.",
    landmarks: [
      { name: "Taklong Island National Marine Reserve", type: "Marine Reserve", note: "1,000 ha national marine reserve established 1990 in Nueva Valencia; mosaic of coral reefs, seagrass beds, and mangroves; UP-Visayas Marine Station within the reserve; directly impacted by the 2006 Solar I oil spill and subject of long-term ecological recovery monitoring" }
    ],
    img_seed: "guimaras"
  },
  {
    name: "Iloilo",
    capital: "Iloilo City",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Dinagyang Festival & Jusi Weaving",
    desc: "Iloilo Province wraps around the southern and eastern coast of Panay island and across to the separate island of Iloilo's peninsula, its broad river delta system creating extensive wetlands and shallow coastal seas that are among the most productive fishing grounds in the Visayas. The Jalaur River, the longest in Panay, drains the highland interior through a series of reservoirs that provide irrigation for Panay's central rice bowl. Iloilo City is considered the \"City of Love\" and the heritage centre of the Western Visayas, with a remarkable collection of colonial churches, Art Deco commercial buildings, and the vibrant Dinagyang Festival honoring the Santo Niño.",
    fact: "The Miag-ao Church in Iloilo Province, a UNESCO World Heritage Site, features a baroque facade carved with tropical plants — papaya, coconut, and guava — integrated into classical European religious iconography, creating one of the world's most botanically distinctive church facades.",
    landmarks: [
      { name: "Gigantes Islands", type: "Island Group", note: "~10 limestone islands and islets in Carles off the Visayan Sea; 73 documented caves including Bakwitan Cave; saltwater lagoons; two endemic species — Gekko gigante lizard and Island Forest Frog; classified as high conservation priority under the Philippine Biodiversity Conservation Priority-Setting Program" }
    ],
    img_seed: "iloilo"
  },
  {
    name: "Negros Occidental",
    capital: "Bacolod City",
    region_key: "region6",
    island_group: "visayas",
    known_for: "Sugar Industry & MassKara Festival",
    desc: "Negros Occidental is the Philippines' sugarcane capital, its vast western coastal plain blanketed in cane fields stretching from Bacolod City north and south along the Guimaras Strait, producing over half the country's total sugar output. The province's interior, rising to the peaks of the Kanlaon Natural Park on Mount Kanlaon — the Visayas' highest and most active volcano at 2,465 metres — shelters old-growth dipterocarp forest that is one of the most important wildlife sanctuaries for Critically Endangered Visayan endemic species. The MassKara Festival in Bacolod, born out of economic hardship in the 1980s, is now the Philippines' second most famous festival, celebrated with elaborately crafted smiling masks.",
    fact: "Mount Kanlaon Natural Park in Negros Occidental protects the last large tract of primary forest in the Visayas and is the only known habitat of the Critically Endangered Visayan Hornbill and the Negros Bleeding-heart Pigeon, both of which number fewer than 1,000 individuals in the wild.",
    landmarks: [
      { name: "Mount Kanlaon", type: "Active Volcano", note: "2,465 m — highest peak in the Visayas; most active volcano in the Visayas with 40+ eruptions since 1819; within Mount Kanlaon Natural Park (24,557 ha); only natural park in the greater Negros-Panay region protecting endemic birds including the Negros Bleeding-heart Pigeon" },
      { name: "Mambukal", type: "Hot Spring & Waterfall Complex", note: "Seven waterfalls and sulfur hot springs at 365 m elevation on the lower slopes of Mount Kanlaon in Murcia; colony of 7,500–8,000 Giant Golden-crowned Flying Fox" }
    ],
    img_seed: "negros-occidental"
  },

  // ── REGION VII – Central Visayas ──────────────────────────────────────────
  {
    name: "Bohol",
    capital: "Tagbilaran City",
    region_key: "region7",
    island_group: "visayas",
    known_for: "Chocolate Hills & Tarsiers",
    desc: "Bohol is one of the Philippines' most naturally spectacular provinces, famous worldwide for its 1,268 perfectly symmetrical Chocolate Hills — ancient coral limestone mounds carpeted in grass that turn chocolate-brown in the dry season — and for the Philippine Tarsier, one of the world's smallest primates, with enormous forward-facing eyes adapted to its nocturnal forest life. The Bohol Sea and the Danajon Bank — one of only two double barrier reefs in the Indo-Pacific — shelter whale sharks, spinner dolphins, and extraordinary coral diversity, while the Loboc River winds through dense tropical forest alive with fireflies and endemic birds. The 2013 magnitude-7.2 earthquake caused significant destruction but also revealed new geological formations in the karst landscape.",
    fact: "The Danajon Double Barrier Reef off Bohol's northern coast is one of only two double barrier reefs in the Indo-Pacific and one of the most biodiverse reef systems in the Coral Triangle, yet it experienced over 90% decline in live coral cover due to destructive fishing — making it also one of the most dramatic examples of reef degradation and ongoing restoration in Southeast Asia.",
    landmarks: [
      { name: "Chocolate Hills", type: "Karst Formation", note: "At least 1,268 conical marine limestone hills across Carmen, Batuan, and Sagbayan; turn chocolate-brown in the dry season; span more than 50 km²; part of the Bohol UNESCO Global Geopark (2023)" },
      { name: "Danajon Bank", type: "Double Barrier Reef", note: "One of three double barrier reefs in the Indo-Pacific and one of six worldwide; 272 km² total reef area with 40 islands and 699 km aggregate coastline; located north of Bohol island" }
    ],
    img_seed: "bohol"
  },
  {
    name: "Cebu",
    capital: "Cebu City",
    region_key: "region7",
    island_group: "visayas",
    known_for: "First Baptism & Marine Biodiversity",
    desc: "Cebu is the Philippines' oldest city and most historically significant province, the site of Ferdinand Magellan's arrival in 1521 and the first Catholic baptism in the Philippines, yet equally remarkable for its extraordinary marine biodiversity — the Cebu waters are part of the Coral Triangle and host whale shark aggregations at Oslob and the world-famous thresher shark dive site off Malapascua Island. The province is a long, narrow island surrounded by smaller satellite islands, its coastline mostly developed but its offshore reefs still harbouring remarkable density and diversity of reef life. Cebu City, the Queen City of the South, is the commercial and cultural capital of the Visayas.",
    fact: "The Oslob whale shark interaction site in southern Cebu has become one of the world's most visited wildlife tourism attractions, with researchers identifying over 200 individual whale sharks by their unique spot patterns using photographic AI recognition — making it simultaneously the most studied and most controversially managed whale shark population on Earth.",
    landmarks: [
      { name: "Kawasan Falls", type: "Tiered Waterfall", note: "Three-tiered cascade in Badian fed by Kabukalan Spring; first tier ~14 m high; total height ~40 m; vivid turquoise water flows to the Matutinao River and Tanon Strait" },
      { name: "Malapascua Island", type: "Marine Dive Site", note: "Only place in the world where pelagic thresher sharks visit a cleaning station at diveable depths on an almost daily basis; sharks gather at dawn at Kimud Shoal, a seamount rising from 200 m depth off northern Cebu" }
    ],
    img_seed: "cebu"
  },
  {
    name: "Negros Oriental",
    capital: "Dumaguete City",
    region_key: "region7",
    island_group: "visayas",
    known_for: "Apo Island & University Town",
    desc: "Negros Oriental occupies the eastern side of Negros island, its rugged interior highlands of the Central Negros Mountain Range forming a critical wildlife corridor with the Kanlaon Natural Park, and its coastline on the Bohol Strait facing the biodiverse waters of the Tanon Strait and the famous marine sanctuary of Apo Island. Apo Island's coral reef is considered one of the most successful examples of community-based marine protection in the world, with coral cover and fish biomass recovering dramatically after a fishing ban imposed by the community itself in 1985. Dumaguete City, a compact university town nicknamed the \"City of Gentle People,\" is a cultural hub for arts, literature, and marine biology research.",
    fact: "Apo Island Marine Reserve, established by local fishers in 1985 with the assistance of Silliman University, has increased fish biomass inside the reserve by over 400% compared to unprotected reefs, and fish spillover from the reserve has increased catches for surrounding fishing communities by more than 50% — making it the world's most-cited community-managed marine protected area success story.",
    landmarks: [
      { name: "Apo Island Marine Reserve", type: "Marine Reserve", note: "Small volcanic island 7 km off southeastern Negros; community-managed sanctuary established 1982 with Dr. Angel Alcala of Silliman University; fish biomass increased 400%+ compared to unprotected reefs" },
      { name: "Balinsasayao Twin Lakes", type: "Twin Crater Lakes", note: "Twin volcanic crater lakes within 8,016 ha natural park in Sibulan; Lake Balinsasayao (76 ha, 90 m deep) and Lake Danao (30 ha, 58 m deep) in a caldera formed by four surrounding mountains; ASEAN Heritage Park (2024)" },
      { name: "Casaroro Falls", type: "Waterfall", note: "~30 m narrow horsetail cascade in Valencia fed by springs from Mount Talinis; single-layer drop into a cold deep natural pool; distinctively narrow form unlike most Philippine waterfalls" }
    ],
    img_seed: "negros-oriental"
  },
  {
    name: "Siquijor",
    capital: "Siquijor",
    region_key: "region7",
    island_group: "visayas",
    known_for: "Faith Healing & Mystical Reputation",
    desc: "Siquijor is the second-smallest province of the Philippines by population, a small circular island rising to 628 metres at Mount Malabahoc and surrounded by productive fringing reefs and crystal-clear waters that have made it a premier scuba diving destination in the Central Visayas. The island is steeped in a centuries-old mystical reputation — it is known locally as \"Isla del Fuego\" (Island of Fire) from the bioluminescent plankton blooms seen by Magellan's crew — and its folk healers (mananambal) gather annually during Holy Week to prepare traditional herbal medicine. The island's forests shelter endemic reptiles and the spectacular Flame Tree forests that erupt in scarlet blossoms each March.",
    fact: "Siquijor's bioluminescent coastal waters, observed by Spanish explorers in 1565 as an island glowing at night, are caused by dinoflagellate plankton blooms in the warm shallow waters — the same phenomenon that gave the island its name, Isla del Fuego, or Island of Fire.",
    landmarks: [
      { name: "Cambugahay Falls", type: "Tiered Waterfall", note: "Three-tiered waterfall with vivid turquoise pools in Lazi; natural swimming basins along a forest-lined river" },
      { name: "Cantabon Cave", type: "Cave", note: "~800 m limestone cave system in Barangay Cantabon; underground river passage, stalactites, and stalagmites; the most visited cave on Siquijor" }
    ],
    img_seed: "siquijor"
  },

  // ── REGION VIII – Eastern Visayas ─────────────────────────────────────────
  {
    name: "Biliran",
    capital: "Naval",
    region_key: "region8",
    island_group: "visayas",
    known_for: "Volcanoes & Waterfalls",
    desc: "Biliran is a small island province north of Leyte, its compact territory dominated by the forested slopes of Mount Biliran — an active volcano — and a series of dramatic waterfalls cascading through dense forest into coastal streams that shelter endemic freshwater species. The island's compact geography means that a short hike from the coast brings a traveller into cloud forest at 1,301 metres, making it one of the most vertically dramatic small provinces in the Philippines. Biliran's surrounding waters in the Visayan Sea and Carigara Bay are important fishing grounds, and its coastal mangroves provide critical nursery habitat for the local fishery.",
    fact: "The Biliran volcano complex contains at least four volcanic vents with active geothermal energy potential; the Philippine government has developed a geothermal energy facility on the island that provides a significant portion of Biliran's electricity from renewable volcanic heat.",
    landmarks: [
      { name: "Mount Suiro (Biliran Volcano)", type: "Stratovolcano", note: "Biliran's highest peak at 1,301 m; classified as potentially active by PHIVOLCS with fumarolic activity; last recorded eruption 1939" },
      { name: "Tinago Falls", type: "Waterfall", note: "27 m cascade in Caibiran municipality, dropping into a natural pool ringed by old-growth rainforest; name means \"hidden\" in Visayan" },
      { name: "Ulan-Ulan Falls", type: "Waterfall", note: "Horsetail cascade 20–25 m high in Almeria; name means \"rain\" (ulan) in Visayan, earned from the fine mist spray; waters run at approximately 20°C year-round" }
    ],
    img_seed: "biliran"
  },
  {
    name: "Eastern Samar",
    capital: "Borongan City",
    region_key: "region8",
    island_group: "visayas",
    known_for: "Pacific Coastline & Typhoon Corridor",
    desc: "Eastern Samar faces the open Pacific Ocean and is one of the first landmasses struck by typhoons approaching from the Pacific, its coastline sculpted by immense wave energy into dramatic sea cliffs, pocket beaches, and offshore islets. The province's interior is largely covered by the Northern Samar-Eastern Samar Rainforest, one of the largest remaining tracts of old-growth lowland forest in the Visayas, sheltering Philippine Eagles, Rufous Hornbills, and the endemic Samar Hornbill. The Llorente area hosts an important Philippine Cockatoo colony, and the coastal lagoons at Borongan City are critical nesting grounds for endangered marine turtles.",
    fact: "Super Typhoon Haiyan (Yolanda) made its first Philippine landfall near Guiuan in Eastern Samar on November 8, 2013, with sustained winds of 315 km/h and gusts exceeding 380 km/h — making it the most powerful typhoon ever recorded at landfall in world meteorological history.",
    landmarks: [
      { name: "Calicoan Island", type: "Limestone Island / Protected Seascape", note: "Largest limestone forest within the Guiuan Marine Reserve Protected Landscape and Seascape (NIPAS, 1994; 60,448 ha); karst terrain with sea caves, saltwater lagoons, and coastal cliffs; 60 bird species documented in the limestone forest" },
      { name: "Linao Cave", type: "Cenote / Cave", note: "Semi-open sinkhole cenote on Calicoan Island, Guiuan; brackish water in a partially roofed limestone cavity with stalactites and stalagmites; \"linao\" means clear in Waray-Waray" }
    ],
    img_seed: "eastern-samar"
  },
  {
    name: "Leyte",
    capital: "Tacloban City",
    region_key: "region8",
    island_group: "visayas",
    known_for: "WWII Liberation & Leyte Gulf",
    desc: "Leyte is the largest province of Eastern Visayas, its northern plains and the broad Leyte Valley sandwiched between two mountain ranges that channel typhoon rainfall into the fertile agricultural lowlands. The Lake Danao National Park and the Leyte mountain ranges shelter remarkable endemic species including the Leyte Hawk-Eagle and the Philippine Crocodile in upper river tributaries. Tacloban City, devastated by Typhoon Haiyan in 2013, has become a global symbol of post-disaster resilience, while Palo's Red Beach commemorates General MacArthur's 1944 \"I shall return\" landing — one of WWII's pivotal Pacific engagements.",
    fact: "The Battle of Leyte Gulf in October 1944 remains the largest naval battle in recorded history by total tonnage of ships engaged, involving over 200,000 combatants and 367 warships across 115,000 square kilometres of the Philippine Sea — a four-day engagement that effectively ended Japan's naval power in WWII.",
    landmarks: [
      { name: "Lake Danao Natural Park", type: "Volcanogenic Lake / Natural Park", note: "Guitar-shaped volcanogenic lake at 650 m elevation, 18 km northeast of Ormoc; 148 ha lake within a 2,193-ha natural park; source of potable water for seven eastern Leyte towns" },
      { name: "Mahagnao Volcano Natural Park", type: "Dormant Volcano / Natural Park", note: "Dormant stratovolcano (860 m) in Burauen; 635-ha park proclaimed 1937; two crater lakes — Danao and Malagsom (green acidic water) — plus active fumaroles and multi-coloured mud pools" }
    ],
    img_seed: "leyte"
  },
  {
    name: "Northern Samar",
    capital: "Catarman",
    region_key: "region8",
    island_group: "visayas",
    known_for: "Biri Rock Formations & Old Forest",
    desc: "Northern Samar occupies the northernmost part of Samar Island, its interior forests forming the core of the Samar Island Natural Park — the second-largest protected area in the Philippines and one of the largest remaining lowland rainforests in Southeast Asia south of Palawan. The province's Pacific-facing coast is dotted with dramatic volcanic rock formations, most spectacularly at Biri Island where wave-sculpted basalt columns and sinkholes create a surreal coastal landscape. Endemic biodiversity in the Samar rainforest includes the Samar Bleeding-heart Pigeon, the Philippine Forest Turtle, and enormous Rafflesia blooms found within the forest interior.",
    fact: "The Biri Protected Landscape and Seascape in Northern Samar contains wave-eroded basalt formations formed from Pleistocene underwater lava flows that were subsequently exposed by tectonic uplift; the largest formation, called \"Magasang,\" is a natural rock arch 30 metres tall carved entirely by Pacific wave action.",
    landmarks: [
      { name: "Biri Rock Formations", type: "Basalt Rock Formation", note: "Seven named wave-sculpted basalt formations (Magasang, Magsapad, Macadlaw, Puhunan, Bel-at, Caranas, Pinanahawan) within the Biri Larosa Protected Landscape; formed ~18 million years ago from submarine lava exposed by tectonic uplift; declared a National Geological Monument" },
      { name: "Pinipisakan Falls", type: "Tiered Waterfall", note: "Four-tiered cascade on the Catubig River in Las Navas municipality, 15 km upstream from town; designated ecotourism site by SINP-DENR in 2009" }
    ],
    img_seed: "northern-samar"
  },
  {
    name: "Samar",
    capital: "Catbalogan City",
    region_key: "region8",
    island_group: "visayas",
    known_for: "Calbiga Caves & Pristine Rainforest",
    desc: "Samar (Western Samar) occupies the western portion of Samar Island, its coastline facing the Leyte Gulf and Samar Sea and its interior forming part of the Samar Island Natural Park's vast contiguous old-growth dipterocarp forest — one of the most ecologically intact large forest landscapes remaining in the Philippines. The Calbiga Cave System is one of the largest cave systems in Asia, its enormous chambers sheltering millions of swiftlets whose nests are harvested, and its passages containing rivers, waterfalls, and fossil evidence of pre-colonial human habitation. The province's rivers descend rapidly from the central Samar highlands, creating powerful rapids and cascades that attract adventure kayakers.",
    fact: "The Calbiga-Lanao Cave System in Samar extends for at least 2.9 kilometres of mapped passages and contains a chamber — Lanao Chamber — that is large enough to fit a 60-story building inside, with a ceiling height exceeding 180 metres, making it one of the largest cave chambers by volume in Asia.",
    landmarks: [
      { name: "Sohoton Caves and Natural Bridge National Park", type: "Cave System / Natural Bridge", note: "840-ha national park in Basey (established 1935); natural limestone arch spanning the Kadak-an River gorge; cave system with stalactites, stalagmites, underground rivers, and waterfalls; accessible by river boat" },
      { name: "Langun-Gobingob Cave System", type: "Cave System", note: "Largest cave system in the Philippines, in Calbiga; 12 major caves including Langun and Gobingob; Gobingob's main chamber measures approximately 340 × 140 m; multiple underground rivers and flowstones documented" }
    ],
    img_seed: "samar"
  },
  {
    name: "Southern Leyte",
    capital: "Maasin City",
    region_key: "region8",
    island_group: "visayas",
    known_for: "Whale Watching & Diverse Reefs",
    desc: "Southern Leyte is a rugged peninsula province at the southern tip of Leyte Island, its coastline facing the Surigao Strait and the open Mindanao Sea where strong tidal currents upwell cold, nutrient-rich water that fuels extraordinarily productive coral reef and cetacean ecosystems. Sogod Bay, a broad semi-enclosed gulf on the province's eastern coast, is one of Asia's most reliable sites for whale shark sightings and is also home to feeding aggregations of Bryde's whales and sperm whales. The landmass collapsed into the sea during the February 2006 Southern Leyte mudslide — the deadliest landslide in Philippine history — burying the village of Guinsaugon.",
    fact: "The Southern Leyte mudslide of February 17, 2006, buried the barangay of Guinsaugon under millions of cubic metres of liquefied rock and soil triggered by heavy rainfall and a small earthquake; the disaster killed approximately 1,100 people and was attributed partly to illegal logging that destabilised the hillside above the village.",
    landmarks: [
      { name: "Sogod Bay", type: "Marine Bay / Protected Seascape", note: "Semi-enclosed bay on the province's eastern coast; seasonal whale shark aggregation site (November–May); Bryde's whales and sperm whales also documented; Panaon Island designated Protected Seascape under Republic Act 12238 (2025)" },
      { name: "Mount Cabalian", type: "Active Stratovolcano / Crater Lake", note: "Active stratovolcano (945 m) in San Juan–Anahawan; PHIVOLCS-classified active with solfataric activity; summit crater holds Lake Danao (500 m wide, 733 m elevation); last eruption ~1820 by radiocarbon dating; flanks have hot springs reaching 63–64°C" }
    ],
    img_seed: "southern-leyte"
  },

  // ── REGION IX – Zamboanga Peninsula ──────────────────────────────────────
  {
    name: "Zamboanga del Norte",
    capital: "Dipolog City",
    region_key: "region9",
    island_group: "mindanao",
    known_for: "Dakak Beach & Subanen Heritage",
    desc: "Zamboanga del Norte occupies the northwestern tip of the Zamboanga Peninsula, its coastline on the Sulu Sea and Bohol Strait sheltering white-sand beaches, coral reefs, and seagrass beds important for dugongs and green sea turtles. The interior mountain ranges harbour old-growth dipterocarp forest that is one of the last refugia for the Philippine Cockatoo and the Mindanao Bleeding-heart Pigeon in western Mindanao. The indigenous Subanen people, one of Mindanao's largest ethnolinguistic groups, maintain traditional communities throughout the province's forested highlands, practicing animist rituals and forest-based livelihoods.",
    fact: "The Siocon Bay area in Zamboanga del Norte contains one of the largest documented seagrass meadows in the Philippines, with Thalassia hemprichii beds extending over 5,000 hectares and supporting a dugong population that is among the most viable remaining herds in the Philippine archipelago.",
    img_seed: "zamboanga-del-norte"
  },
  {
    name: "Zamboanga del Sur",
    capital: "Pagadian City",
    region_key: "region9",
    island_group: "mindanao",
    known_for: "Floating Villages & Colorful Vintas",
    desc: "Zamboanga del Sur wraps around the southern coast of the Zamboanga Peninsula and includes the culturally vibrant city of Zamboanga — the \"City of Flowers\" — famous for its Chabacano (Spanish-Creole) language, colorful outrigger vintas, and the fortified Real Fuerza de Nuestra Señora del Pilar. The province's coastal waters in the Moro Gulf and Basilan Strait are rich in commercially important fish species, and its offshore islands shelter diverse coral reefs that are heavily utilised by artisanal fishers. The Yakan and Tausug communities of the province maintain a rich material culture of weaving, brasswork, and maritime tradition.",
    fact: "Zamboanga City is the only place in the world where Chabacano — a Spanish-based creole language — is spoken as the dominant mother tongue by an entire urban population of over 800,000 people, having evolved from the interaction between 17th-century Spanish colonists and local Visayan and Malay-speaking populations.",
    img_seed: "zamboanga-del-sur"
  },
  {
    name: "Zamboanga Sibugay",
    capital: "Ipil",
    region_key: "region9",
    island_group: "mindanao",
    known_for: "Rubber Plantations & Sibugay Bay",
    desc: "Zamboanga Sibugay is a relatively young province carved from Zamboanga del Sur in 2001, its territory encompassing the Sibugay River basin and facing the sheltered Sibugay Bay, whose mangrove-fringed shores and seagrass beds are important nursery grounds for commercially important marine species. The province's interior lowlands have been extensively converted to rubber, oil palm, and coconut plantations, though patches of secondary forest in the highland interior still shelter endemic Mindanao birds and small mammals. The Subanen people are the predominant indigenous community in the province's interior, and their traditional communal land governance system (pananum) is still practiced in some upland communities.",
    fact: "The Sibugay Bay Protected Landscape and Seascape in Zamboanga Sibugay contains one of the most extensive undisturbed mangrove forests on Mindanao's western coast, with Rhizophora apiculata stands reaching 25 metres in height and serving as a carbon-sequestration hotspot recognised in national climate mitigation plans.",
    img_seed: "zamboanga-sibugay"
  },

  // ── REGION X – Northern Mindanao ──────────────────────────────────────────
  {
    name: "Bukidnon",
    capital: "Malaybalay City",
    region_key: "region10",
    island_group: "mindanao",
    known_for: "Highlands & Pineapple Plantations",
    desc: "Bukidnon is a vast, cool upland plateau province at the heart of Mindanao, its sweeping highland landscapes of pineapple plantations, sugarcane fields, and broad grasslands framed by the peaks of Mount Kitanglad — one of the Philippines' highest mountains at 2,899 metres and home to an extraordinary concentration of Mindanao endemic birds in its mossy forests. The Pulangi River, the longest river on Mindanao, originates in the Kitanglad range and drains north through dramatic gorges before entering the Mindanao Sea. The province is home to eight major indigenous groups including the Bukidnon, Higaonon, and Talaandig, who maintain traditional governance systems across significant portions of the highland.",
    fact: "Mount Kitanglad Natural Park harbours over 70 species of Philippine endemic birds, including the Philippine Eagle — Mindanao's highest-density eagle population — and the critically endemic Apo Sunbird, making it the single most species-rich Important Bird Area in the entire Philippine archipelago.",
    img_seed: "bukidnon"
  },
  {
    name: "Camiguin",
    capital: "Mambajao",
    region_key: "region10",
    island_group: "mindanao",
    known_for: "Volcanoes & White Island Sandbar",
    desc: "Camiguin is a small island province in the Bohol Sea nicknamed the \"Island Born of Fire\" — it has more volcanoes per square kilometre than any other island on Earth, with five volcanic peaks on an island smaller than Singapore, and eruptions have historically buried entire towns beneath lava and ash. The White Island sandbar off Mambajao is a pristine crescent of white sand that appears and disappears with the tides, surrounded by coral reefs with extraordinary fish diversity. Camiguin's cold freshwater springs emerge directly on the beach, creating unusual freshwater-saltwater mixing zones that support unique macro-algae and invertebrate communities.",
    fact: "The 1871–1875 eruptions of Vulcan Camiguin completely buried the old town of Catarman and its historic church under lava flows; today, the sunken cemetery and the ruined stone chapel cross — visible at low tide just offshore — have become one of the Philippines' most haunting and photographed heritage sites.",
    img_seed: "camiguin"
  },
  {
    name: "Lanao del Norte",
    capital: "Iligan City",
    region_key: "region10",
    island_group: "mindanao",
    known_for: "Waterfalls & Industrial City",
    desc: "Lanao del Norte is a province of dramatic contrasts — its northern coast on Iligan Bay is heavily industrialised, anchored by Iligan City's hydroelectric-powered steel and chemical industries, while its southern interior rises into the Lanao Plateau and borders the ancient Lake Lanao. The Maria Cristina Falls, dropping 320 feet in twin cascades, powers the NAPOCOR Agus hydroelectric system that supplies electricity across Mindanao. The province's forests shelter the critically endemic Mindanao Shrew and a rich community of highland Mindanao birds, while the Maranao people of the lake basin maintain a vibrant tradition of okir woodcarving and malong weaving.",
    fact: "The Maria Cristina Falls in Iligan City, at 98 metres tall, powers the Agus River hydroelectric complex that generates approximately 970 megawatts of electricity — roughly 25% of Mindanao's total power supply — making this single waterfall one of the most economically important natural features in the Philippine archipelago.",
    img_seed: "lanao-del-norte"
  },
  {
    name: "Misamis Occidental",
    capital: "Oroquieta City",
    region_key: "region10",
    island_group: "mindanao",
    known_for: "Layawan River & Rural Heartland",
    desc: "Misamis Occidental is a coastal province on Mindanao Bay, its gently rolling terrain producing coconut, rubber, and rice in abundance, while the Kauswagan and Sinacaban highlands to the south shelter secondary forest that is habitat for Mindanao endemic birds and fruit bats. The Layawan River watershed provides freshwater to much of the province and has been the focus of community-based watershed protection efforts by the indigenous Subanen communities of the interior. The province's coastline on Panguil Bay is sheltered by the narrow Ozamiz peninsula and sustains important small-scale fisheries and mangrove aquaculture.",
    fact: "The Pangil Bay area in Misamis Occidental historically supported one of Mindanao's largest Dugong populations; a 2015–2018 survey identified a residual population of approximately 35 individuals in the bay's seagrass beds, making it a priority site for the National Dugong Conservation Program.",
    img_seed: "misamis-occidental"
  },
  {
    name: "Misamis Oriental",
    capital: "Cagayan de Oro City",
    region_key: "region10",
    island_group: "mindanao",
    known_for: "Whitewater Rafting & Cagayan de Oro",
    desc: "Misamis Oriental is a dynamic coastal-highland province whose principal city, Cagayan de Oro, has grown into northern Mindanao's commercial capital, fed by the Cagayan de Oro River — which also provides some of the Philippines' most exhilarating Class III–IV white-water rapids through its canyon system just minutes from the city centre. The province's northern coast on Macajalar Bay is rich in skipjack tuna, squid, and coastal reef fish, while the inland mountain ranges of the Kitanglad and Kalatungan ranges shelter pristine mossy forest harbouring Mindanao's most diverse raptor community. The Initao Protected Landscape and Seascape harbours the country's densest flying fox (Pteropus vampyrus) roost colony.",
    fact: "The Initao Protected Landscape in Misamis Oriental contains one of the Philippines' largest known roost colonies of the Giant Golden-crowned Flying Fox (Acerodon jubatus) — the world's largest bat by wingspan at up to 1.7 metres — with a colony of over 10,000 individuals that departs en masse at dusk in a wildlife spectacle visible from the provincial highway.",
    img_seed: "misamis-oriental"
  },

  // ── REGION XI – Davao Region ──────────────────────────────────────────────
  {
    name: "Davao de Oro",
    capital: "Nabunturan",
    region_key: "region11",
    island_group: "mindanao",
    known_for: "Gold Mining & Mountain Forests",
    desc: "Davao de Oro (formerly Compostela Valley) is a mineral-rich interior province of the Davao Region, its mountains containing some of the Philippines' most productive gold deposits and its interior forests forming part of the Southern Mindanao Rainforest — a globally important biodiversity hotspot harbouring over 50 endemic vertebrate species. The province's rivers drain east toward the Davao Gulf and Compostela Valley's broad agricultural plain, which produces large volumes of banana and pineapple for export. Repeated conflicts between legal and illegal small-scale miners and international mining companies have left the province ecologically scarred in some areas while conservation efforts in the highland forests continue.",
    fact: "The Diwalwal Gold Rush area in Davao de Oro contains one of the richest alluvial gold deposits in Southeast Asia and has attracted over 20,000 small-scale miners; the area's streams have been severely contaminated by mercury from artisanal processing, creating one of the Philippines' most serious small-scale mining pollution problems.",
    img_seed: "davao-de-oro"
  },
  {
    name: "Davao del Norte",
    capital: "Tagum City",
    region_key: "region11",
    island_group: "mindanao",
    known_for: "Banana Exports & Philippine Eagle Center",
    desc: "Davao del Norte is a coastal province north of Davao City facing the Davao Gulf, its vast river plains extensively planted in Cavendish banana for export — making it the centre of the Philippines' banana industry — while its eastern hinterland in the Compostela Valley and the Mount Apo Natural Park shelter critical old-growth forest for the Philippine Eagle. The Philippine Eagle Center in Malagos (shared administratively with Davao City's Calinan district but associated with this region) is the primary facility for Philippine Eagle captive breeding and research. The province's Gulf of Davao coastline supports important mangrove ecosystems and productive inshore fisheries.",
    fact: "The Philippine Eagle (Pithecophaga jefferyi), the world's largest eagle by length at up to 1.02 metres and the Philippines' national bird, raises only one chick every two years and requires a territory of up to 133 square kilometres of old-growth forest; fewer than 800 individuals remain in the wild, primarily in Mindanao's forests.",
    img_seed: "davao-del-norte"
  },
  {
    name: "Davao del Sur",
    capital: "Digos City",
    region_key: "region11",
    island_group: "mindanao",
    known_for: "Mount Apo & National Bird Refuge",
    desc: "Davao del Sur is dominated by the presence of Mount Apo — the Philippines' highest peak at 2,954 metres and a UNESCO-recognised natural site — whose forested slopes above 2,000 metres are cloaked in mossy forest and pitcher plant (Nepenthes) communities found nowhere else on Earth. The mountain is the stronghold of the Philippine Eagle, and the Mount Apo Natural Park encompasses one of the last intact mid-elevation to summit forest gradients in Mindanao. The province's coastal lowlands face the Moro Gulf and support the Davao Gulf mangroves, which are internationally recognised as critical nursery habitat for commercially important fish species.",
    fact: "Mount Apo's summit supports over 272 bird species including 111 Philippine endemics and 64 Mindanao-specific species; its upper slopes contain the Philippines' highest density of Nepenthes (pitcher plant) species, with eight carnivorous species occurring on a single mountain — the highest concentration in the Philippine archipelago.",
    img_seed: "davao-del-sur"
  },
  {
    name: "Davao Occidental",
    capital: "Malita",
    region_key: "region11",
    island_group: "mindanao",
    known_for: "Secluded Coasts & Indigenous Culture",
    desc: "Davao Occidental is the newest province in the Davao Region, created in 2013 from the southern portion of Davao del Sur, its territory encompassing a rugged Pacific-facing coastline, offshore island groups, and interior mountains inhabited by the B'laan and T'boli indigenous peoples. The province's undeveloped coastline shelters some of the most undisturbed coral reefs in the Davao Gulf system, with sea turtle nesting beaches and undisturbed mangrove forests protected partly by inaccessibility. The T'boli people of the interior highlands maintain one of the Philippines' richest material culture traditions, centred on the tak cloth — a dream-inspired woven textile considered a masterpiece of intangible cultural heritage.",
    fact: "The T'boli tak cloth weavers of Davao Occidental's interior produce their intricate patterns by weaving abaca fibres pre-dyed in a resist-dye process before weaving — the weaver works entirely from memory, with designs said to come from dream-visions, so no two pieces are identical; this tradition was proclaimed a UNESCO Intangible Cultural Heritage in 2016.",
    img_seed: "davao-occidental"
  },
  {
    name: "Davao Oriental",
    capital: "Mati City",
    region_key: "region11",
    island_group: "mindanao",
    known_for: "Pacific Beaches & Cape San Agustin",
    desc: "Davao Oriental faces the Pacific Ocean along Mindanao's eastern coast, its dramatic coastline of wave-battered headlands, sea caves, and pristine white-sand beaches at Dahican sheltering seasonal sea turtle nesting and year-round reef fish abundance. The Pujada Bay Protected Landscape, enclosing the semi-enclosed Pujada Bay, is one of the Philippines' richest marine biodiversity areas, with extensive seagrass beds, mangroves, and coral reefs forming an interconnected coastal ecosystem. The interior mountains of the Mount Hamiguitan range — a UNESCO World Heritage Site — harbour a unique \"pygmy forest\" of trees stunted by ultramafic soil growing to just 1–2 metres on the plateau, alongside the Philippine Eagle and the Davao Pitcher Plant.",
    fact: "Mount Hamiguitan Range Wildlife Sanctuary, a UNESCO World Heritage Site, is the only known habitat of the Rafflesia magnifica — the world's largest flower by diameter — and the serpentine plateau supports a \"pigmy forest\" of dwarfed trees and over 341 plant species, 75 of which are endemic to this single mountain.",
    img_seed: "davao-oriental"
  },

  // ── REGION XII – SOCCSKSARGEN ─────────────────────────────────────────────
  {
    name: "Cotabato",
    capital: "Kidapawan City",
    region_key: "region12",
    island_group: "mindanao",
    known_for: "Mount Apo Foothills & Rice Plains",
    desc: "Cotabato Province (North Cotabato), not to be confused with Cotabato City which belongs to BARMM, is a landlocked province whose fertile Cotabato Basin produces much of Mindanao's rice and corn, drained by the Mindanao River system — the Philippines' second-longest river and most voluminous watercourse. The province's western edge rises to the foothills of Mount Apo Natural Park, where old-growth forest shelters Philippine Eagles and the critically endemic Mindanao Shrew, while the expansive Libungan and Kakar marshes in the basin are important wintering grounds for migratory waterbirds. The province's Manobo and Mandaya indigenous communities maintain traditional practices along the Mindanao River's upper tributaries.",
    fact: "The Mindanao River basin, which drains through Cotabato Province into Illana Bay, is the Philippines' largest river basin at 23,169 square kilometres — larger than the entire island of Taiwan — and its annual floodplain inundations create productive temporary wetlands that attract over 50,000 waterbirds in peak winter counts.",
    img_seed: "cotabato"
  },
  {
    name: "Sarangani",
    capital: "Alabel",
    region_key: "region12",
    island_group: "mindanao",
    known_for: "Coral Reefs & Blaan Tribal Culture",
    desc: "Sarangani is a coastal province at the southernmost tip of the Philippine mainland, its Sarangani Bay facing south toward the Celebes Sea and sheltering one of the most biodiverse and least-disturbed marine ecosystems in the country — with whale shark aggregation sites, manta ray cleaning stations, and coral reefs with over 400 fish species documented. The province's interior rises to forested mountain ranges inhabited by the B'laan and Tagakaulo indigenous peoples, whose colorful beadwork and brass crafts represent one of Mindanao's richest material cultural traditions. Sarangani is also famous as the home province of Manny Pacquiao, the world champion boxer who became a senator.",
    fact: "Sarangani Bay's whale shark aggregation site at Maasim hosts year-round sightings, with a population of over 50 identified individuals — and researchers from the Large Marine Vertebrates Research Institute Philippines have documented individual whale sharks travelling between this site and the Donsol aggregation in Sorsogon, over 1,000 kilometres north.",
    img_seed: "sarangani"
  },
  {
    name: "South Cotabato",
    capital: "Koronadal City",
    region_key: "region12",
    island_group: "mindanao",
    known_for: "Marbel Valley & Pineapple Farms",
    desc: "South Cotabato is a province of broad river valleys, volcanic highland ridges, and one of the Philippines' most biologically remarkable lakes — Lake Sebu, a crater lake at 1,000 metres elevation that is the cultural heartland of the T'boli people and supports the critically endemic Sebu Silvertip Shark, a species of freshwater stingray found only in these highland lake waters. The province's Marbel River valley is one of the most productive agricultural areas in Mindanao, growing pineapple, asparagus, and temperate vegetables in its rich volcanic soils. The Seven Falls of Lake Sebu — seven cascading waterfalls connected by zip lines — have made the area one of Mindanao's premier ecotourism attractions.",
    fact: "Lake Sebu in South Cotabato is home to the freshwater stingray Himantura kittipongi and the endemic Sebu silvertip sawfish (Pristis zephyreus subspecies) — species that evolved in isolation after the lake was cut off from ocean connections by tectonic uplift, representing one of the world's most remarkable examples of marine fish evolving in a landlocked freshwater environment.",
    img_seed: "south-cotabato"
  },
  {
    name: "Sultan Kudarat",
    capital: "Isulan",
    region_key: "region12",
    island_group: "mindanao",
    known_for: "Mindanao River Basin & Corn Belt",
    desc: "Sultan Kudarat is a large interior province extending from the Cotabato Basin westward to the Moro Gulf coastline, its terrain transitioning from the flat, rice-growing Mindanao River floodplain through volcanic foothills to the Allah Valley — a fertile intermontane basin producing corn, asparagus, and cut flowers at scale. The Daguma Mountain Range and the Tiruray Highlands along the province's borders shelter primary forest that is critical refuge for the Philippine Eagle and the Mindanao Hornbill. The province is historically named after Sultan Muhammad Dipatuan Kudarat, the 17th-century Maguindanao sultan who united Muslim resistance against Spanish colonial incursion.",
    fact: "The Allah River Valley in Sultan Kudarat, carved from volcanic highlands into a broad agricultural plain, sits on a major fault system and has experienced multiple significant earthquakes; its floodplain soils, renewing annually from upstream volcanic sediment deposits, produce some of the most fertile farmland in the SOCCSKSARGEN region.",
    img_seed: "sultan-kudarat"
  },

  // ── REGION XIII – CARAGA ──────────────────────────────────────────────────
  {
    name: "Agusan del Norte",
    capital: "Butuan City",
    region_key: "region13",
    island_group: "mindanao",
    known_for: "Butuan Balangay Boats & Wetlands",
    desc: "Agusan del Norte is a coastal province at the northern end of the Agusan River valley, its broad delta forming the Agusan Marsh and Butuan Bay's extensive mangrove-lined shores — among the most important coastal wetland ecosystems in Mindanao. Butuan City is an archaeological treasure site: the Butuan Balangay boats, discovered in 1976, are the oldest extant watercraft in Southeast Asia at over 1,300 years old, confirming Butuan's role as a major pre-colonial trading port linked to Sung Dynasty China and Srivijaya. The province's rivers and marshes are critical habitat for the Philippine Cockatoo and the Giant Golden-crowned Flying Fox.",
    fact: "The Butuan Balangay boats, excavated from the tidal flats of Libertad barangay and dated to 320 CE by radiocarbon analysis, are the oldest extant wooden boats ever found in Southeast Asia; they demonstrate a sophisticated plank-sewn shipbuilding tradition over 1,700 years old and are now recognised as National Cultural Treasures.",
    img_seed: "agusan-del-norte"
  },
  {
    name: "Agusan del Sur",
    capital: "Prosperidad",
    region_key: "region13",
    island_group: "mindanao",
    known_for: "Agusan Marsh & Lake Leonard",
    desc: "Agusan del Sur is one of the largest provinces in the Philippines, its territory encompassing the vast Agusan Marsh Wildlife Sanctuary — a 14,440-hectare freshwater swamp forest that is the largest freshwater wetland in the Philippines and one of the most biodiverse in Southeast Asia, sheltering rare freshwater crocodiles, purple herons, watercock, and enormous floating meadows of water hyacinth. The Agusan River, the Philippines' second-longest, flows through the province's heart and its upper tributaries drain the Diwata Mountain Range, which shelters old-growth dipterocarp forest. The Manobo and Mamanwa indigenous peoples have depended on the marsh ecosystem for generations, building stilt houses directly over the floating peat.",
    fact: "The Agusan Marsh in Agusan del Sur contains one of the last wild populations of the Philippine Freshwater Crocodile (Crocodylus mindorensis) in Mindanao, with an estimated 20–30 individuals surviving in the marsh's interior — part of a global wild population of fewer than 250 individuals, making it the most endangered crocodilian species in Asia.",
    img_seed: "agusan-del-sur"
  },
  {
    name: "Dinagat Islands",
    capital: "San Jose",
    region_key: "region13",
    island_group: "mindanao",
    known_for: "Ophiolite Rocks & Nickel Deposits",
    desc: "Dinagat Islands is one of the Philippines' newest provinces, separated from Surigao del Norte in 2006, an archipelago of rugged islands rising sharply from the Philippine Sea northeast of Mindanao and composed largely of ophiolite — ancient oceanic crust thrust above sea level by tectonic collision — which creates a uniquely poor, ultramafic soil that has driven the evolution of endemic plant species found nowhere else. The islands' forests and coastal reefs are largely undisturbed, and several endemic bird species and reptiles unique to the Dinagat group have been described by scientists since the province was established. Offshore nickel deposits in the ophiolitic rock have made mining a contentious economic and environmental issue for the province.",
    fact: "Dinagat Island's ophiolite substrate — ancient ocean floor peridotite — creates ultramafic soils with unusually high concentrations of nickel, chromium, and iron and very low levels of calcium and phosphorus, forcing the evolution of specialist endemic plants including the Dinagat Bleeding-heart Pigeon and the Dinagat Hawk-Owl, both of which were described as new species only after the islands were intensively surveyed in the late 2000s.",
    img_seed: "dinagat-islands"
  },
  {
    name: "Surigao del Norte",
    capital: "Surigao City",
    region_key: "region13",
    island_group: "mindanao",
    known_for: "Siargao Surfing & Cloud 9",
    desc: "Surigao del Norte is an archipelagic province facing the Pacific Ocean in northeastern Mindanao, its territory encompassing the Dinagat Islands and the famous surfing destination of Siargao Island — home to the Cloud 9 reef break, considered one of the world's best hollow right-hand barrels and host to the annual Siargao International Surfing Cup. The Del Carmen wetlands on Siargao contain the largest contiguous mangrove forest in the Philippines at 5,120 hectares, designated as a Ramsar Wetland of International Importance and a critical feeding ground for Philippine Cockatoos. The Sohoton Cove and its tidal lagoon, accessible only at low tide through a narrow underwater passage, contains luminescent jellyfish that have lost their sting due to the lagoon's protective geography.",
    fact: "The Sohoton Lagoon in Bucas Grande Island, Surigao del Norte, contains a unique isolated population of Lagoon Jellyfish (Mastigias papua etpisoni) that have lost their nematocysts (stinging cells) through evolutionary isolation in the predator-free enclosed lagoon — making them safe to swim with, in a phenomenon known from only two other locations worldwide.",
    img_seed: "surigao-del-norte"
  },
  {
    name: "Surigao del Sur",
    capital: "Tandag City",
    region_key: "region13",
    island_group: "mindanao",
    known_for: "Tinuy-an Falls & Pacific Coastline",
    desc: "Surigao del Sur is a long coastal province stretching along Mindanao's Pacific-facing eastern shore, its rugged terrain of coastal mountains, river gorges, and black-sand beaches backed by old-growth dipterocarp forest that forms part of the Eastern Mindanao Biodiversity Corridor. Tinuy-an Falls — dubbed the \"Niagara of the Philippines\" — is a 95-metre-wide, 55-metre-tall curtain waterfall that cascades in three tiers through lush jungle and into a natural swimming basin. The province's offshore waters regularly host blue whales, sperm whales, and manta rays attracted by deep Pacific upwelling, and its beaches are important nesting grounds for leatherback sea turtles.",
    fact: "The Enchanted River at Hinatuan in Surigao del Sur is a deep natural spring that flows into the sea with water of supernatural clarity and an impossibly vivid blue colour; the spring vent is at least 80 metres deep and divers have never reached the bottom, while the daily dramatic emergence of fish from the spring at noon during feeding remains unexplained by ichthyologists.",
    img_seed: "surigao-del-sur"
  },

  // ── BARMM – Bangsamoro Autonomous Region in Muslim Mindanao ───────────────
  {
    name: "Lanao del Sur",
    capital: "Marawi City",
    region_key: "barmm",
    island_group: "mindanao",
    known_for: "Lake Lanao & Maranao Culture",
    desc: "Lanao del Sur is the cultural heartland of the Maranao people, whose name means \"people of the lake\" — and Lake Lanao, the second-largest lake in the Philippines and one of the world's oldest at 12 million years old, is a UNESCO Ramsar Wetland harbouring 18 endemic freshwater fish species found nowhere else on Earth. The lake sits at 702 metres above sea level on a high volcanic plateau surrounded by mountains, its cold, deep waters exhibiting remarkable aquatic biodiversity including the Maranao Sardine and species of endemic gobiid fish. Marawi City, the only Islamic city in the Philippines, was rebuilt after a five-month siege in 2017 and remains the centre of Maranao brass crafts, weaving, and Islamic architectural heritage in the Philippines.",
    fact: "Lake Lanao in Lanao del Sur, at 12 million years old, is among the world's ancient lakes and harbours an endemic radiative species flock of cyprinid fish (the Barbodes genus) with 18 species that evolved within the lake itself — an adaptive radiation similar to the famous cichlid radiations of Africa's Great Rift Valley lakes, and unique in the Philippines.",
    img_seed: "lanao-del-sur"
  },
  {
    name: "Maguindanao del Norte",
    capital: "Cotabato City",
    region_key: "barmm",
    island_group: "mindanao",
    known_for: "Mindanao River Delta & Maguindanao Heritage",
    desc: "Maguindanao del Norte, created by the 2022 division of the former Maguindanao Province, encompasses the northern portion including Cotabato City — the regional capital of BARMM — and the lower Mindanao River delta, which fans out across a vast floodplain into Illana Bay with some of the most extensive coastal wetlands remaining in Mindanao. The Liguasan Marsh, shared with Maguindanao del Sur, is a vast freshwater wetland critical for migratory shorebirds and endemic freshwater fish, though it has been significantly reduced by agricultural conversion. The Maguindanao sultanate, one of the most powerful pre-colonial and early colonial Muslim polities in the Philippines, was centred in this territory, and the province preserves a rich tradition of kulintang bronze percussion music.",
    fact: "The Mindanao River delta in Maguindanao del Norte is the largest river delta in the Philippines, where the Rio Grande de Mindanao — the country's second-longest river — splits into multiple distributaries spanning 40 kilometres of coastline before emptying into Illana Bay, creating a dynamic mosaic of mangroves, brackish marshes, and tidal mudflats that are internationally important for migratory birds.",
    img_seed: "maguindanao-del-norte"
  },
  {
    name: "Maguindanao del Sur",
    capital: "Buluan",
    region_key: "barmm",
    island_group: "mindanao",
    known_for: "Liguasan Marsh & Maranao Crafts",
    desc: "Maguindanao del Sur, the southern portion of the divided Maguindanao Province, encompasses the interior highlands surrounding the Liguasan Marsh — the Philippines' largest freshwater marsh at approximately 154,000 hectares during flood season — and the upland territories inhabited by indigenous Teduray and Lambangian communities. The Liguasan Marsh and its adjacent Mindanao River tributaries are critical habitat for the Philippine Freshwater Crocodile, Oriental Darter, and an extraordinary diversity of migratory ducks and shorebirds during the northeast monsoon. The province's economy is anchored in rice and corn farming in the Mindanao River floodplain, supplemented by freshwater fishing in the marsh.",
    fact: "The Liguasan Marsh in Maguindanao del Sur expands from approximately 30,000 hectares in the dry season to over 154,000 hectares during the wet season — a fivefold increase in surface area — as the Mindanao River floods the surrounding plain, creating the largest seasonal freshwater wetland in Southeast Asia outside the Mekong Delta.",
    img_seed: "maguindanao-del-sur"
  },
  {
    name: "Sulu",
    capital: "Jolo",
    region_key: "barmm",
    island_group: "mindanao",
    known_for: "Tausug Culture & Coral Triangle Reefs",
    desc: "Sulu is an archipelagic province of over 400 islands scattered across the Sulu Sea, its location at the heart of the Coral Triangle making it one of the world's most biodiverse marine environments, with documented coral species exceeding 300 and fish species surpassing 1,500 in the surrounding waters. The Tausug people — \"people of the currents\" — have dominated these seaways for centuries as traders, warriors, and fishers, and their sultanate was one of the most powerful maritime states in Southeast Asian history. The province faces significant security challenges, but its offshore reefs — particularly around the Tawi-Tawi border islands — remain among the most pristine in the entire archipelago due to limited access.",
    fact: "The Sulu Archipelago lies within the Coral Triangle's core zone and the waters around Tawi-Tawi–Sulu have been documented to contain the highest fish species diversity in any comparable area in the Philippines, with a single reef transect near Cagayan de Sulu recording 379 fish species — a world record for a single-site reef fish count at the time of survey.",
    img_seed: "sulu"
  },
  {
    name: "Tawi-Tawi",
    capital: "Bongao",
    region_key: "barmm",
    island_group: "mindanao",
    known_for: "Sea Gypsies & Untouched Coral Reefs",
    desc: "Tawi-Tawi is the southernmost province of the Philippines, a 307-island archipelago in the Celebes Sea that almost touches the coast of Malaysian Borneo, its coral reefs considered among the most pristine and biodiverse in the entire Philippine archipelago and possibly the world, largely preserved by geographic remoteness and the maritime Sama-Bajau (Sea People) communities who have lived on houseboats above these waters for generations. The Bajau people of Tawi-Tawi are renowned as the world's most accomplished free-divers, with individuals regularly descending to 60 metres or more on a single breath, and genetic studies have confirmed that they possess a biologically enlarged spleen that provides an evolutionary advantage for deep breath-hold diving. The Turtle Islands Wildlife Sanctuary, shared with Malaysia, is the only nesting site of the Green Sea Turtle in the Philippines.",
    fact: "Genetic and physiological studies published in 2018 in Cell journal confirmed that the Bajau sea nomads of Tawi-Tawi have spleens 50% larger than neighbouring land-dwelling populations — an adaptation to breath-hold diving that evolved over millennia of marine foraging — making them the first known case of natural selection for an aquatic diving trait in humans.",
    img_seed: "tawi-tawi"
  }

];
