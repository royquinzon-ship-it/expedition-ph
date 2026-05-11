// Philippine Provinces – natural history & cultural reference data
var PH_PROVINCES = [

  // ── REGION I – Ilocos Region ──────────────────────────────────────────────
  {
    name: "Ilocos Norte",
    capital: "Laoag City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Heritage Churches & Windmills",
    desc: "Ilocos Norte occupies the northwestern tip of Luzon, where rolling sand dunes near Paoay and the Bangui Windmill Complex line a rugged coastline battered by the South China Sea. The province is draped in tobacco fields and cogon grasslands, and its coastline shelters nesting sea turtles and diverse shorebirds. Inland, Ilocos Norte's rivers and wetlands support migratory waterbirds, while centuries of Ilocano culture have produced the UNESCO-listed St. Augustine Church of Paoay and the vibrant Pamulinawen Festival.",
    fact: "The Bangui Windmill Complex along the Luzon Strait is the first wind farm in Southeast Asia, harnessing trade winds that gust at over 60 km/h for much of the year.",
    img_seed: "ilocos-norte",
    img: "image/Ilocos Norte Landmark.jpg"
  },
  {
    name: "Ilocos Sur",
    capital: "Vigan City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Colonial Vigan & Tobacco",
    desc: "Ilocos Sur stretches along the northwestern Luzon coast, its narrow coastal plain squeezed between the Cordillera foothills and the South China Sea. The Abra River delta creates productive wetlands that attract egrets, herons, and migratory ducks each dry season. Vigan City, a UNESCO World Heritage Site, preserves one of Asia's best-surviving examples of a Spanish colonial town, its cobblestoned Calle Crisologo flanked by ancestral bahay na bato mansions.",
    fact: "Vigan is the only Hispanic colonial town in Asia where the original urban fabric — grid layout, stone churches, and trading houses — has survived largely intact for over 400 years.",
    img_seed: "ilocos-sur",
    img: "image/Vigan.jpg"
  },
  {
    name: "La Union",
    capital: "San Fernando City",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Baluarte Watchtower & Urbiztondo Beach",
    desc: "La Union is the smallest province in the Ilocos Region, yet it packs a remarkable diversity of landscapes: white-sand surfing beaches at San Juan, rugged headlands, and the lower slopes of the Cordillera clothed in pine and broadleaf forest. Its freshwater rivers descend steeply from the mountains, providing habitat for native freshwater fish and riparian birds. The province is culturally known for its Ilocano-Ibaloy heritage and the Chinese-influenced Namnama Festival.",
    fact: "The surf break at San Juan, La Union — locally called \"Urbiztondo\" — is one of the most consistent beach breaks in the Philippines, drawing international surfers during the northeast monsoon from October to March.",
    img_seed: "la-union",
    img: "image/Baluarte watchtower La Union.jpg"
  },
  {
    name: "Pangasinan",
    capital: "Lingayen",
    region_key: "region1",
    island_group: "luzon",
    known_for: "Hundred Islands & Bolinao Falls",
    desc: "Pangasinan faces Lingayen Gulf along a wide coastal plain flanked by the Cordillera and Zambales mountain ranges, creating one of Luzon's most productive agricultural and fishery landscapes. The Hundred Islands National Park — actually 124 islands at low tide — shelters coral reefs, sea turtles, and hawksbill turtle nesting grounds within Alaminos Bay. The province's vast salt beds in Dasol and Infanta are some of the country's largest, and its bangus (milkfish) aquaculture industry supplies much of the national demand.",
    fact: "Bolinao in northwestern Pangasinan hosts one of the largest colonies of the Critically Endangered giant clam (Tridacna gigas) under active mariculture conservation, with some individuals exceeding 1 metre in shell width.",
    img_seed: "pangasinan",
    img: "image/Bolinao Falls Panggasinan.jpg"
  },

  // ── REGION II – Cagayan Valley ────────────────────────────────────────────
  {
    name: "Batanes",
    capital: "Basco",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Naidi Lighthouse & Ivatan Stone Villages",
    desc: "Batanes is the northernmost and smallest province of the Philippines, a remote archipelago of ten islands perched between the Luzon Strait and the Pacific, battered by typhoons and sculpted into sweeping green hillscapes unlike anywhere else in the country. The islands' isolation has preserved a unique Ivatan culture famous for its limestone-and-cogon vakul headgear and sturdy stone houses built to withstand typhoon winds exceeding 200 km/h. The surrounding seas are rich in marlins, tunas, and flying fish, and the cliffs of Sabtang Island provide nesting habitat for frigatebirds and petrels.",
    fact: "Batanes sits atop the Luzon Strait volcanic arc and experiences more typhoons per year than any other Philippine province, yet the traditional Ivatan stone houses have withstood direct hits from super typhoons for centuries without collapse.",
    img_seed: "batanes",
    img: "image/Batanes Light House .jpg"
  },
  {
    name: "Cagayan",
    capital: "Tuguegarao City",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Cape Engaño & Callao Cave",
    desc: "Cagayan is the largest province in the Philippines by land area, occupying the wide Cagayan Valley drained by the Cagayan River — the country's longest river at 505 kilometres. The Sierra Madre mountain range lines its eastern edge, sheltering one of the world's largest remaining contiguous tropical rainforests and harbouring endemic species including the Philippine Eagle, the Giant Cloud Rat, and more than 200 species of birds. Fossil beds in the Cagayan Valley have yielded Pleistocene megafauna including Stegodon and giant tortoise remains, making the province a treasure trove of Philippine paleontology.",
    fact: "The Callao Cave archaeological site in Cagayan contains fossilised foot bones of Homo luzonensis, a newly described human species that lived at least 67,000 years ago — predating any other known Homo sapiens presence in the Philippines.",
    img_seed: "cagayan",
    img: "image/Capen Engano Cagayan.jpg"
  },
  {
    name: "Isabela",
    capital: "Ilagan City",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Sta. Victoria Caves & Sierra Madre",
    desc: "Isabela is the second-largest Philippine province, a vast lowland agricultural plain flanked by the Sierra Madre to the east and the Caraballo Mountains to the southwest, drained by the Cagayan River and its tributaries. The Magat River watershed feeds the Magat Dam, one of the country's largest hydroelectric reservoirs, which creates an important freshwater ecosystem for wading birds and migratory waterfowl. Vast tracts of Sierra Madre old-growth forest within Isabela harbour the highest diversity of Philippine forest birds in Luzon.",
    fact: "The Northern Sierra Madre Natural Park in Isabela is the largest protected area in the Philippines at 359,486 hectares, sheltering over 700 plant species and more than 300 bird species, including 10 Critically Endangered taxa.",
    img_seed: "isabela",
    img: "image/Sta. Victoria Caves Isabela.jpg"
  },
  {
    name: "Nueva Vizcaya",
    capital: "Bayombong",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Caraballo Range & Magat River",
    desc: "Nueva Vizcaya is a landlocked highland province sitting astride the Caraballo Mountains and the southern end of the Cagayan Valley, serving as the gateway between Luzon's northern highlands and the southern lowlands. Its cool climate and fertile volcanic soils produce strawberries, peanuts, and highland vegetables, while its river valleys and mossy forest patches shelter a diverse community of montane birds and small mammals. The Magat River originates in its mountains, and traditional Ifugao and Isinai communities maintain ancestral domain forests across much of the province.",
    fact: "The Dupax del Norte fossil site in Nueva Vizcaya has produced some of the most complete Pleistocene proboscidean fossils in the Philippines, including Stegodon luzonensis teeth that indicate a wet, forested valley environment over 700,000 years ago.",
    img_seed: "nueva-vizcaya",
    img: "image/Caraballo Range Nueva Viscaya.jpg"
  },
  {
    name: "Quirino",
    capital: "Cabarroguis",
    region_key: "region2",
    island_group: "luzon",
    known_for: "Siitan River & Quirino Rainforest",
    desc: "Quirino is one of the least-populated provinces in Luzon, a rugged upland territory on the eastern slopes of the Caraballo Mountains largely blanketed by tropical rainforest and bisected by white-water rivers including the Cagayan tributary system. The Quirino Protected Landscape shelters Philippine Eagles, critically endangered freshwater crocodiles in the Siitan River, and a remarkable diversity of endemic reptiles and amphibians. Its remoteness has kept significant forest cover intact, making it a priority landscape for Philippine biodiversity conservation.",
    fact: "The Siitan River in Quirino is one of only a handful of confirmed wild habitats of the Philippine Crocodile (Crocodylus mindorensis), with a small but breeding population that conservationists have monitored since the 1990s.",
    img_seed: "quirino",
    img: "image/Nagtipunan Quirino.jpg"
  },

  // ── CAR – Cordillera Administrative Region ────────────────────────────────
  {
    name: "Abra",
    capital: "Bangued",
    region_key: "car",
    island_group: "luzon",
    known_for: "Tobacco & Itneg Culture",
    desc: "Abra is a landlocked Cordillera province drained by the Abra River, which cuts through steep mountain ridges before emptying into the Ilocos Sur coast. Its lower river valley is warm and produces tobacco and rice, while its upper slopes are cloaked in dipterocarp and pine forest inhabited by a remarkable diversity of Cordillera raptors and hornbills. The Itneg (Tingguian) people, renowned for their intricate weaving, oral epics, and sacred Bodong peace pact system, form the province's dominant indigenous community.",
    fact: "The Abra River is one of the few rivers in northern Luzon that still hosts confirmed populations of the Philippine Freshwater Crocodile in its upper tributaries, drawing researchers studying this Critically Endangered species.",
    img_seed: "abra"
  },
  {
    name: "Apayao",
    capital: "Kabugao",
    region_key: "car",
    island_group: "luzon",
    known_for: "Pristine Rivers & Isnag Heritage",
    desc: "Apayao is the most remote and least-visited province of the Cordillera, a densely forested upland territory bordering Cagayan, Ilocos Norte, and Kalinga. Its river system — particularly the Apayao-Abulug River — flows through limestone gorges and old-growth rainforest, supporting endemic freshwater fish and some of the richest montane bird communities in northern Luzon. The Isnag people, masters of forest survival and known for their fearsome historical warrior culture, remain the primary indigenous stewards of this extraordinarily biodiverse landscape.",
    fact: "The Apayao-Abulug watershed contains one of the last large intact lowland-to-montane rainforest gradients in northern Luzon, including dipterocarp forest below 500 m that has been almost entirely lost elsewhere in the region.",
    img_seed: "apayao"
  },
  {
    name: "Benguet",
    capital: "La Trinidad",
    region_key: "car",
    island_group: "luzon",
    known_for: "Strawberries & Baguio Highlands",
    desc: "Benguet is the gateway to the Cordillera highlands, home to the summer capital Baguio City and some of the Philippines' most dramatic mountain scenery, including Mount Pulag — the highest peak in Luzon at 2,922 metres — which rises through mossy forest into rare Philippine dwarf bamboo grassland above the clouds. The province's cold climate and fertile volcanic soils have made it the country's vegetable basket, producing strawberries, carrots, cabbage, and cut flowers. The Kankanaey and Ibaloy peoples have terraced these mountain slopes for agriculture for centuries, maintaining an intimate land-culture relationship.",
    fact: "The summit grasslands of Mount Pulag create a sea of clouds phenomenon at dawn that draws tens of thousands of hikers annually, and they host the Philippine Dwarf Kingfisher and the endemic Luzon Rosefinch found nowhere else on Earth.",
    img_seed: "benguet"
  },
  {
    name: "Ifugao",
    capital: "Lagawe",
    region_key: "car",
    island_group: "luzon",
    known_for: "UNESCO Rice Terraces & Hudhud",
    desc: "Ifugao is the heartland of the famous Banaue Rice Terraces, a 2,000-year-old hydraulic civilisation carved into steep mountain slopes by the Ifugao people, recognised as a UNESCO World Heritage Site and often called the Eighth Wonder of the World. The province's cloud forest ridges above the terraces shelter the Ifugao Leaf-warbler, Philippine Eagle, and dozens of endemic Luzon montane birds, while forest patches within the terrace system serve as critical water catchments maintaining the irrigation channels. The Ifugao oral epic Hudhud, chanted during rice harvest, is also a UNESCO Intangible Cultural Heritage.",
    fact: "The Ifugao muyong — privately owned family woodlots integrated into the terrace system — represent one of the world's oldest and most sophisticated community-based watershed management systems, maintaining spring-fed irrigation for over 2,000 years without modern infrastructure.",
    img_seed: "ifugao"
  },
  {
    name: "Kalinga",
    capital: "Tabuk City",
    region_key: "car",
    island_group: "luzon",
    known_for: "Chico River & Tattooing Tradition",
    desc: "Kalinga is a rugged mountain province carved by the Chico River and its tributaries, which have formed dramatic gorges and river terraces through ancient limestone and granite. Its forests are among the most important bird areas in the northern Cordillera, sheltering Philippine Eagles, Luzon Hornbills, and the elusive Whiskered Pitta in its old-growth dipterocarp stands. The Kalinga people are renowned for their Bodong peace pact system, which governed inter-tribal relations for centuries, and for the intricate batok (tattoo) tradition kept alive by centenarian elder Whang-od Oggay.",
    fact: "Whang-od Oggay of Buscalan village, Tinglayan, is the last traditional mambabatok (tattoo artist) of the Butbut Kalinga, now over 100 years old, and was recognised as a National Living Treasure (Gawad sa Manlilikha ng Bayan) by the Philippine government in 2018.",
    img_seed: "kalinga"
  },
  {
    name: "Mountain Province",
    capital: "Bontoc",
    region_key: "car",
    island_group: "luzon",
    known_for: "Hanging Coffins & Rice Terraces",
    desc: "Mountain Province sits at the geographic heart of the Cordillera, its landscape a dramatic succession of river gorges, pine-forested ridges, and ancient rice terraces clinging to near-vertical canyon walls along the Chico River. The Sagada municipality is globally known for its centuries-old practice of hanging coffins on limestone cliff faces, a burial tradition of the Kankanaey that keeps ancestors close to the sky. The province's upper elevation forests shelter an extraordinary concentration of endemic amphibians and birds found only in the central Cordillera.",
    fact: "Sagada's Echo Valley hanging coffins, some over 2,000 years old, represent one of the world's most unusual burial traditions; the oldest coffins were carved from single logs of solid pine by the deceased themselves before death.",
    img_seed: "mountain-province"
  },

  // ── REGION III – Central Luzon ────────────────────────────────────────────
  {
    name: "Aurora",
    capital: "Baler",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Pacific Swells & Cloud Forest",
    desc: "Aurora faces the Pacific Ocean along Luzon's eastern coast, shielded from the west by the Sierra Madre — the Philippines' longest mountain range and one of its most biodiverse forest landscapes. The province is famous among surfers for the powerful Pacific swells at Baler Bay, where the sport of surfing was introduced to the Philippines through the filming of Apocalypse Now. Its interior Sierra Madre forests are critical habitat for the Philippine Eagle, the Golden-crowned Flying Fox, and more than 60 species of Luzon-endemic birds.",
    fact: "Aurora Province contains the largest remaining lowland dipterocarp forest on the Pacific slope of the Sierra Madre, and its offshore waters regularly record blue marlin exceeding 500 kg — earning the bay the nickname \"Marlin Coast.\"",
    img_seed: "aurora"
  },
  {
    name: "Bataan",
    capital: "Balanga City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "WWII History & Mangrove Coast",
    desc: "Bataan is a mountainous peninsula jutting into Manila Bay, its western shore lined with some of Luzon's best-preserved mangrove ecosystems and its interior forested highlands sheltering nesting raptors and endemic forest birds. Mount Natib, the peninsula's dormant volcano, rises through dense rainforest that forms part of the Manila Bay watershed. The peninsula is historically sacred as the site of the World War II Bataan Death March, and its natural landscape of jungle, mountains, and coastal wetlands make it a compelling fusion of natural and historical heritage.",
    fact: "The Las Piñas–Parañaque Critical Habitat and Ecotourism Area is adjacent to Manila Bay; however, the mangroves of Bataan's Balanga City Wetland Park host one of Luzon's largest wintering populations of the Chinese Egret, a globally Vulnerable species.",
    img_seed: "bataan"
  },
  {
    name: "Bulacan",
    capital: "Malolos City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Pampanga Delta & Fireworks Capital",
    desc: "Bulacan occupies the northern fringe of Manila Bay's vast delta system, where the Pampanga and Angat rivers deposit rich alluvial soils across broad rice-growing plains that transition north into the rolling foothills of the Sierra Madre. The Angat Reservoir and its watershed forests form the primary water supply for Metro Manila, making Bulacan's upland ecosystems critically important to millions of people. The province is historically significant as the birthplace of Philippine Independence, where the First Philippine Republic was proclaimed in Malolos in 1899.",
    fact: "Bulacan's municipality of Bocaue hosts the annual Bocaue River Festival (Pagoda Festival), but the province is equally notable for its large fireworks manufacturing industry — responsible for supplying over 90% of consumer fireworks used nationwide during New Year celebrations.",
    img_seed: "bulacan"
  },
  {
    name: "Nueva Ecija",
    capital: "Palayan City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Rice Granary of the Philippines",
    desc: "Nueva Ecija is the Philippines' premier rice-producing province, an expansive lowland plain irrigated by the Pampanga River system and the Upper Pampanga River Integrated Irrigation System — one of the largest irrigation networks in Southeast Asia. The Pantabangan-Carranglan Watershed Forest Reserve in the Caraballo Mountains to the east protects the upstream catchment of the Pantabangan Dam, which irrigates hundreds of thousands of hectares of paddies. The province's rice paddies and wetlands are important wintering habitats for migratory shorebirds and ducks along the East Asian-Australasian Flyway.",
    fact: "Pantabangan Reservoir in Nueva Ecija is the Philippines' largest inland body of water created by a dam, covering over 8,700 hectares when full; when water levels drop during drought years, the ruins of the submerged town of Old Pantabangan emerge from the water.",
    img_seed: "nueva-ecija"
  },
  {
    name: "Pampanga",
    capital: "City of San Fernando",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Culinary Capital & Mount Arayat",
    desc: "Pampanga is the undisputed culinary capital of the Philippines, home to a rich Kapampangan food tradition that has produced some of the country's most celebrated dishes, from sisig to kare-kare to tocino. The volcanic cone of Mount Arayat rises dramatically from the flat Pampanga plain, its forests forming an isolated sky-island that supports populations of Philippine forest birds separated from the main Luzon mountain ranges. The province's wetlands and fishponds along Manila Bay's northern shore are internationally important for migratory shorebirds, hosting globally significant populations of Far Eastern Curlew and other species.",
    fact: "Mount Arayat is an isolated Pleistocene volcano rising 1,026 metres above an otherwise featureless plain; its forest interior shelters the endemic Luzon Bleeding-heart Pigeon, and its dual peaks are the subject of a Kapampangan legend involving two lovestruck giants.",
    img_seed: "pampanga"
  },
  {
    name: "Tarlac",
    capital: "Tarlac City",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Sugarcane Plains & Hacienda Luisita",
    desc: "Tarlac is a landlocked agricultural province at the center of Central Luzon, its vast plains divided between sugarcane estates, rice paddies, and the lower slopes of the Zambales Mountains to the west. The Tarlac River and its tributary network flow through productive wetlands that host nesting Purple Heron and Purple Swamphen colonies, while the Sacobia-Bamban River basin was dramatically reshaped by the 1991 eruption of Mount Pinatubo and its subsequent lahar flows. The province reflects the social tensions of Philippine agricultural history, most famously at Hacienda Luisita, which became a flashpoint for land reform debates.",
    fact: "The 1991 eruption of Mount Pinatubo deposited lahar flows up to 200 metres deep in some Tarlac river valleys, burying entire barrios and farmlands; two decades later, secondary vegetation and freshwater wetlands have colonised the hardened lahar plains, creating new ecosystems.",
    img_seed: "tarlac"
  },
  {
    name: "Zambales",
    capital: "Iba",
    region_key: "region3",
    island_group: "luzon",
    known_for: "Mount Pinatubo & Mangoes",
    desc: "Zambales is a rugged coastal province on Luzon's western seaboard, dominated by the Zambales Mountain Range and scarred by the 1991 cataclysmic eruption of Mount Pinatubo — one of the twentieth century's largest volcanic eruptions. The post-eruption lahar landscape has been progressively recolonised by pioneering plants, creating a unique mosaic of ash desert, lahar plains, and recovering forest that serves as a living laboratory for ecological succession. Zambales mangoes — harvested from the lower western slopes — are considered among the sweetest in the world and are a major export commodity.",
    fact: "The 1991 Mount Pinatubo eruption ejected approximately 10 cubic kilometres of pyroclastic material and lowered global temperatures by about 0.5°C for two years — the largest cooling effect on Earth's climate since Krakatoa's eruption in 1883.",
    img_seed: "zambales"
  },

  // ── REGION IV-A – CALABARZON ──────────────────────────────────────────────
  {
    name: "Batangas",
    capital: "Batangas City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Taal Volcano & Dive Sites",
    desc: "Batangas is a peninsula province south of Manila, dominated by the geological wonder of Taal Volcano — a volcano within a lake within a volcano — and bounded by the Batangas Bay and Verde Island Passage, which marine biologists have called the \"centre of the centre of marine biodiversity\" for its extraordinary concentration of reef fish and coral species. The Taal Caldera hosts Lake Taal, whose hyper-acidic crater lake supports the unique Taal Sardine and is home to one of the world's few freshwater-adapted sea snakes. Inland, Batangas' rolling hills are blanketed in lanzones orchards and sugarcane, while its coast is dotted with world-class dive resorts.",
    fact: "The Verde Island Passage, separating Batangas from Mindoro, has been documented to contain more fish species per unit area than any other marine habitat on Earth, including more than 1,700 species of fish and over 500 coral species — leading scientists to call it the \"Amazon of the Sea.\"",
    img_seed: "batangas"
  },
  {
    name: "Cavite",
    capital: "Imus City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Philippine Revolution & Bay Coast",
    desc: "Cavite is a compact, densely populated province on the southwestern shore of Manila Bay, its historic towns and peninsular geography having made it the cradle of the Philippine Revolution against Spain in 1896. Its northern shore faces Manila Bay's productive but heavily impacted coastal waters, while the Cavite Coastal Wetlands — though much reduced by urban expansion — remain important staging areas for migratory waders. The province's Tagaytay Ridge, shared with Batangas, offers commanding views over the Taal Caldera and is one of the country's premier highland escape destinations.",
    fact: "Kawit's Aguinaldo Shrine balcony is where General Emilio Aguinaldo proclaimed Philippine Independence from Spain on 12 June 1898 — the event now commemorated as Philippine Independence Day and one of the most historically charged sites in Southeast Asia.",
    img_seed: "cavite"
  },
  {
    name: "Laguna",
    capital: "Santa Cruz",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Laguna de Bay & Hot Springs",
    desc: "Laguna is home to Laguna de Bay — the Philippines' largest lake and Southeast Asia's third-largest — a vast shallow freshwater body that supports hundreds of thousands of fisherfolk and one of the country's most important inland fishery industries. The southern shore transitions into the dramatic landscape of the Sierra Madre foothills and the volcanic peaks of Mount Banahaw and Mount San Cristobal, whose cloud forests are sacred to folk religious communities and harbour remarkable endemic flora. Pagsanjan Falls in the Sierra Madre foothills plunges through a dramatic limestone gorge that has been used as a film set for several international productions.",
    fact: "Laguna de Bay has a surface area of 949 square kilometres but averages only 2.8 metres in depth, making it extremely productive for aquaculture — its floating fish pens produce over 100,000 metric tons of milkfish annually, the world's highest yield from a single lake.",
    img_seed: "laguna"
  },
  {
    name: "Quezon",
    capital: "Lucena City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Pacific Coastline & Coconuts",
    desc: "Quezon Province is the largest province in CALABARZON, its territory wrapping around the southern Sierra Madre and facing the Pacific Ocean on one side and the sheltered Bondoc Peninsula on the other, creating extraordinary ecological diversity in a single administrative unit. The Quezon Protected Landscape and the Sierra Madre corridor protect old-growth dipterocarp forest that shelters Philippine Eagles, Philippine Cockatoos, and an exceptional diversity of endemic Luzon wildlife. Offshore, Quezon's Pacific coast includes some of the country's least-disturbed coral reefs and whale shark aggregation sites near Atimonan.",
    fact: "Mount Banahaw in Quezon is considered sacred by millions of Filipino folk Catholics, and its summit forests — designated as a protected area — harbour the highest density of Philippine endemic epiphytic orchids recorded anywhere in Luzon.",
    img_seed: "quezon"
  },
  {
    name: "Rizal",
    capital: "Antipolo City",
    region_key: "region4a",
    island_group: "luzon",
    known_for: "Sierra Madre Foothills & Antipolo",
    desc: "Rizal is the province immediately east of Metro Manila, its densely urbanised western lowlands giving way eastward to the rugged foothills and lower slopes of the Sierra Madre, creating a striking juxtaposition of megacity suburbs and old-growth forest within a few kilometres. The Marikina River watershed, which drains much of the province, has been a focus of restoration efforts after catastrophic flooding events linked to deforestation upstream. The province is named after national hero José Rizal, who was born in Calamba (now in Laguna) and imprisoned in Fort Santiago, and its Antipolo City is one of the most-visited Catholic pilgrimage destinations in the country.",
    fact: "Despite being one of the most densely populated provinces in the Philippines, Rizal's Sierra Madre slopes still shelter populations of the Philippine Eagle, the country's national bird, that are documented within 20 kilometres of Metro Manila's eastern boundary.",
    img_seed: "rizal"
  },

  // ── REGION IV-B – MIMAROPA ────────────────────────────────────────────────
  {
    name: "Marinduque",
    capital: "Boac",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Moriones Festival & Heart-Shaped Isle",
    desc: "Marinduque is a heart-shaped island province sitting in the middle of the Sibuyan Sea, its interior dominated by three volcanic peaks — Marlanga, Malindig, and Talipan — clothed in secondary forest and orchards of calamansi and coconut. The coastal waters surrounding the island are home to diverse coral reef communities, though they were badly affected by the 1996 Marcopper mining tailings spill that discharged millions of tonnes of waste into the Boac River. The province is most famous for its Moriones Festival during Holy Week, in which participants don Roman centurion masks and costumes in a dramatic street re-enactment.",
    fact: "The 1996 Marcopper Mine disaster on Marinduque — caused by a drainage tunnel collapse that released tailings into the Boac River — was the largest mining disaster in Philippine history and rendered the Boac River biologically dead for years, becoming a landmark case in Philippine environmental law.",
    img_seed: "marinduque"
  },
  {
    name: "Occidental Mindoro",
    capital: "Mamburao",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Tamaraw Sanctuary & Reefs",
    desc: "Occidental Mindoro occupies the western portion of Mindoro island, its rugged interior mountains sheltering the Mount Iglit-Baco National Park — the last stronghold of the Critically Endangered Tamaraw (Bubalus mindorensis), the world's smallest and rarest wild bovine species. The province's western coastline faces the Mindoro Strait and Sulu Sea, with coral reefs rivalling the Tubbataha system in diversity, and the mangrove-lined estuaries are important nursery grounds for commercially important fish. The Mangyan indigenous peoples — including the Alangan and Iraya — maintain traditional communities in the interior forests, practicing swidden agriculture and rattan craft.",
    fact: "The Tamaraw (Bubalus mindorensis) is a dwarf buffalo found only on Mindoro and nowhere else on Earth; the global population has recovered from a low of fewer than 100 individuals in the 1970s to approximately 600 today, entirely due to the protection of Mount Iglit-Baco National Park.",
    img_seed: "occidental-mindoro"
  },
  {
    name: "Oriental Mindoro",
    capital: "Calapan City",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Whale Sharks & Mangyan Weaving",
    desc: "Oriental Mindoro is the more accessible and populous side of Mindoro island, facing the Verde Island Passage with productive coral reefs and featuring the whale shark aggregation site of Sabang Beach near Puerto Galera — a UNESCO-Man and Biosphere Reserve whose reefs are among the most studied in the Indo-Pacific. The Halcon-Naujan Lake National Park protects both the summit forests of Mount Halcon — one of the Philippines' most challenging climbs — and Naujan Lake, the country's fourth-largest lake and a critical wintering habitat for waterbirds. The Mangyan tribes of the interior continue their ancient tradition of pre-colonial baybayin script writing on bamboo strips.",
    fact: "Puerto Galera's reefs have been documented to contain more than 750 fish species and over 400 coral species within a 3-kilometre radius, making it one of the most species-dense marine areas in the Coral Triangle.",
    img_seed: "oriental-mindoro"
  },
  {
    name: "Palawan",
    capital: "Puerto Princesa City",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Last Frontier & Underground River",
    desc: "Palawan is the Philippines' \"Last Ecological Frontier\" — a 450-kilometre-long narrow island stretching from Mindoro Strait to Borneo, enveloped by the Sulu Sea and South China Sea and gifted with the country's most biodiverse and least-disturbed marine and terrestrial ecosystems. The Puerto Princesa Subterranean River National Park, a UNESCO World Heritage Site and one of the New Seven Wonders of Nature, features an 8.2-kilometre navigable underground river through dramatic karst limestone chambers filled with massive stalactites and diverse cave-adapted fauna. El Nido and the Tubbataha Reefs Natural Park — the latter a UNESCO World Heritage Site — contain the Philippines' most pristine coral atolls and are home to populations of manta rays, whale sharks, and nesting hawksbill turtles.",
    fact: "Tubbataha Reefs Natural Park in the Sulu Sea, accessible only from Palawan, harbours 360 coral species, 600 fish species, 13 shark species, and nesting populations of three marine turtle species within a 97,030-hectare no-take marine protected area with no permanent human habitation.",
    img_seed: "palawan"
  },
  {
    name: "Romblon",
    capital: "Romblon",
    region_key: "region4b",
    island_group: "luzon",
    known_for: "Marble Industry & Dugong Habitat",
    desc: "Romblon is an archipelagic province of three major islands — Romblon, Tablas, and Sibuyan — scattered across the Sibuyan Sea, connected by narrow straits rich in marine biodiversity and strong currents that maintain exceptionally clear, nutrient-rich waters. The province is world-famous for its white marble, quarried from the limestone mountains of Romblon Island and crafted into tiles, sculptures, and decorative pieces exported globally. Sibuyan Island's Mount Guiting-Guiting, rising to 2,058 metres, is one of the Philippines' most technically demanding climbs, its summit ridge guarded by razor-sharp ultramafic rock outcrops harbouring a unique mossy forest flora found nowhere else.",
    fact: "The Sibuyan Sea surrounding Romblon is one of the deepest inter-island seas in the Philippines, reaching depths of over 500 metres, and its combination of deep water upwelling and shallow reefs supports year-round sightings of thresher sharks, hammerheads, and blue whales.",
    img_seed: "romblon"
  },

  // ── REGION V – Bicol Region ───────────────────────────────────────────────
  {
    name: "Albay",
    capital: "Legazpi City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Mayon Volcano & Abaca Fibre",
    desc: "Albay is dominated by the near-perfect cone of Mayon Volcano — the Philippines' most active stratovolcano at 2,463 metres, which has erupted over 50 times in recorded history and whose slopes are draped in lush rainforest and productive volcanic soils yielding excellent abaca fibre and pili nuts. The Albay Gulf and the Ticao Pass shelter diverse cetaceans, with blue whales, sperm whales, and orcas regularly sighted offshore during the dry season. The Mayon Volcano Natural Park's forest serves as important habitat for Philippine Eagles and endemic Bicol forest birds, while the surrounding coast hosts nesting Olive Ridley sea turtles.",
    fact: "Mayon Volcano's nearly perfect symmetrical cone, with a slope deviation of less than 2 degrees from a perfect geometric cone, makes it one of the most geometrically precise stratovolcanoes on Earth — a combination of its frequent small eruptions and the way pyroclastic flows distribute material evenly down all sides.",
    img_seed: "albay"
  },
  {
    name: "Camarines Norte",
    capital: "Daet",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Gold Mining & Surf Destination",
    desc: "Camarines Norte is the northernmost province of the Bicol Region, its landscape shaped by a coastal plain facing Lamon Bay and interior hills rich in gold deposits that have been mined since pre-colonial times. The province's Pacific-facing coast at Mercedes and Bagasbas is famous for beginner-friendly surf breaks, and its offshore islands and reefs in the Calaguas Group contain pristine white-sand beaches and coral gardens among the most unspoiled in southern Luzon. The Paracale goldfields have been worked for over 400 years and continue to produce some of the Philippines' highest-grade alluvial gold.",
    fact: "The Calaguas Islands off Camarines Norte's coast remained effectively unreachable without local fishermen's guidance until the early 2000s; their reefs have since been documented to rival the Tubbataha system in coral cover, with over 65% live hard coral cover recorded on some transects.",
    img_seed: "camarines-norte"
  },
  {
    name: "Camarines Sur",
    capital: "Pili",
    region_key: "region5",
    island_group: "luzon",
    known_for: "CamSur Watersports & Pili Nuts",
    desc: "Camarines Sur is the largest province in Bicol, a diverse landscape of volcanic mountains, river deltas, coastal lagoons, and the Ragay Gulf coastline that provides habitat for an extraordinary range of wildlife including nesting sea turtles, Philippine Forest Turtles, and enormous colonies of cave-roosting swiftlets. The Isarog Natural Park on Mount Isarog protects a critical mossy forest that is home to the endemic Bicol Shrew and the CamSur subspecies of Philippine Scops Owl. Naga City, the regional centre, and the CWC Watersports Complex in Pili have made the province a centre of cable wakeboarding tourism.",
    fact: "Lake Buhi in Camarines Sur is home to the Sinarapan (Mistichthys luzonensis), recognized as the world's smallest commercially harvested fish at just 9–12 mm in length; it is endemic to this single lake and has been threatened by introduced species and habitat degradation.",
    img_seed: "camarines-sur"
  },
  {
    name: "Catanduanes",
    capital: "Virac",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Surfing & Typhoon-Resistant Culture",
    desc: "Catanduanes is an island province off the Pacific coast of Bicol, perched directly in the path of typhoons sweeping toward mainland Luzon and earning the reputation as the \"Land of the Howling Winds.\" Its Pacific-facing beaches, particularly Puraran's famous Majestic Beach, produce consistent, powerful surf barrels considered among the best in Asia. The island's interior forests shelter endemic Bicol birds, and its coastal wetlands and seagrass beds harbour nesting marine turtles, dugongs, and the Critically Endangered Humpback Wrasse. Catandunganon culture has evolved a remarkable resilience and resourcefulness in response to centuries of typhoon exposure.",
    fact: "Puraran Beach's \"Majestic\" break on Catanduanes is a barreling hollow reef wave that breaks perfectly for 200 metres and has been rated by international surf magazines as one of Asia's top ten surf breaks — yet the entire island receives an average of five direct typhoon hits per year.",
    img_seed: "catanduanes"
  },
  {
    name: "Masbate",
    capital: "Masbate City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Rodeo & Whale Shark Corridor",
    desc: "Masbate is a three-island province sitting at the junction of the Sibuyan Sea, Visayan Sea, and Ticao Pass, its strategic position in Philippine waters making it one of the most important cetacean migration corridors in the country. The Ticao Pass between Masbate and Sorsogon is one of the world's premier whale watching sites, with blue whales, Bryde's whales, and spinner dolphins frequenting these nutrient-rich straits. Masbate's rolling grasslands support the Philippines' most thriving cattle ranching industry, and the annual Masbate Rodeo Festival is the country's largest, drawing cowboys from across the archipelago.",
    fact: "The Ticao Pass between Masbate and Sorsogon records some of the highest densities of blue whales in Southeast Asian waters during the northeast monsoon, with researchers from Ticao Island documenting over 50 individual blue whales identified by fluke patterns in a single season.",
    img_seed: "masbate"
  },
  {
    name: "Sorsogon",
    capital: "Sorsogon City",
    region_key: "region5",
    island_group: "luzon",
    known_for: "Whale Sharks & Bulusan Volcano",
    desc: "Sorsogon occupies the southernmost tip of Luzon, its landscape shaped by the active Bulusan Volcano and its lake-filled crater, and its waters at Donsol Bay harboring the world's largest seasonal aggregation of whale sharks — which Filipinos call butanding — drawing ecotourists from across the globe. The Bulusan Volcano Natural Park's mossy forests are classified as one of the 25 most important bird areas in the Philippines, sheltering Philippine Cockatoos, Tarictic Hornbills, and a remarkable endemic forest avifauna. Sorsogon's coastline opens onto the San Bernardino Strait, one of the most powerful tidal passages in the archipelago.",
    fact: "Donsol Bay in Sorsogon hosts up to 200 individual whale sharks (Rhincodon typus) identified by spot patterns each season from November to June, making it the world's largest known seasonal gathering of this species — a discovery that transformed a small fishing town into an internationally recognised ecotourism destination.",
    img_seed: "sorsogon"
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
