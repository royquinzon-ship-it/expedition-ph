/* protected-areas-data.js — Expedition PH
   Shared dataset for protected-areas.html and protected-area-detail.html
   Key = pa_id used across province records, protected-areas.html cards, and detail links
*/

var PROTECTED_AREAS = {
  'puerto-princesa': {
    name: 'Puerto Princesa Subterranean River NP',
    type: 'np',
    island: 'luzon',
    province: 'Palawan',
    area: '202 km²',
    established: '1971',
    unesco: true,
    desc: 'The Puerto Princesa Subterranean River winds 8.2 km through a vast limestone karst cavern system before emptying directly into the South China Sea — making it one of the few navigable underground rivers on Earth that opens into open ocean. Its chambers host massive stalactites, colonies of swiftlets, and several species of bats. Inscribed as a UNESCO World Heritage Site in 1999 and named one of the New Seven Wonders of Nature in 2012.',
    funfact: 'At low tide, seawater flows back into the cave entrance — creating a rare tidal underground river where freshwater and saltwater meet beneath the limestone.',
    image: 'image/Photo coming soon.jpg'
  },
  'northern-sierra-madre': {
    name: 'Northern Sierra Madre Natural Park',
    type: 'np',
    island: 'luzon',
    province: 'Isabela',
    area: '3,590 km²',
    established: '1997',
    desc: 'The largest protected area in the Philippines covers an almost unbroken expanse of lowland dipterocarp and montane forest along Luzon\'s Pacific coast. Its forests shelter the Philippine Eagle, Philippine Crocodile, Giant Cloud Rat, and hundreds of endemic plant and animal species. Much of its interior has never been fully surveyed by scientists.',
    funfact: 'Northern Sierra Madre Natural Park is larger than the entire island of Cebu — yet entire river systems within its interior remain unsurveyed by science.',
    image: 'image/Photo coming soon.jpg'
  },
  'mount-pulag': {
    name: 'Mount Pulag National Park',
    type: 'np',
    island: 'luzon',
    province: 'Benguet / Ifugao / Nueva Vizcaya',
    area: '113 km²',
    established: '1987',
    desc: 'Luzon\'s highest peak at 2,922 metres is sacred to the Ibaloi and Kalanguya peoples of the Cordillera. Its upper slopes are covered by rare dwarf bamboo grasslands, and on clear mornings the summit rises above a spectacular sea of clouds that stretches to every horizon. The park shelters mossy forests, highland pitcher plants, and the Luzon Water Shrew.',
    funfact: 'The Ibaloi people call Mount Pulag "Playground of the Gods." Its summit sea of clouds is one of the most celebrated natural spectacles in the Philippine highlands.',
    image: 'image/Photo coming soon.jpg'
  },
  'banao': {
    name: 'Banao Protected Landscape',
    type: 'np',
    typeLabel: 'Protected Landscape',
    island: 'luzon',
    province: 'Kalinga',
    area: '215.68 km²',
    established: '2022',
    desc: 'The Banao Protected Landscape covers 21,567.53 hectares in the municipality of Balbalan, Kalinga, declared under Republic Act No. 11688 signed on April 8, 2022. It incorporates the former Balbalasang-Balbalan National Park area, expanding its protected perimeter across the northern Cordillera highlands. Dubbed the "green heart of the Cordillera," the landscape shelters intact pine and mossy forests at elevations reaching over 2,400 metres, with the Chico River watershed and its tributaries draining from its slopes. It is recognized for its representative Cordillera biodiversity and cultural significance to the Kalinga people.',
    funfact: 'The Banao Protected Landscape was legislated in 2022, expanding the boundaries of the former Balbalasang-Balbalan National Park — one of the few examples in Philippine conservation history where an existing protected area was expanded rather than reduced.',
    image: 'image/Photo coming soon.jpg'
  },
  'mount-data': {
    name: 'Mount Data National Park',
    type: 'np',
    island: 'luzon',
    province: 'Mountain Province / Benguet',
    area: '55.13 km²',
    established: '1936',
    desc: 'Mount Data National Park straddles the provincial boundary of Mountain Province and Benguet along the Halsema Highway, one of the world\'s highest roads. Established as a national park in 1936 and covering 5,513 hectares, its mossy montane forest at over 2,300 metres sits at the watershed divide between rivers flowing east into the Cagayan Valley and west toward the Ilocos lowlands. The park was declared under the NIPAS Act and remains significant for watershed protection, though its forest cover has experienced encroachment from highland vegetable farming over recent decades.',
    funfact: 'Mount Data sits astride the Halsema Highway — a road that climbs to over 2,500 metres, making it one of the highest roads in the Philippines and passing directly through the protected park boundary.',
    image: 'image/Photo coming soon.jpg'
  },
  'mayon-volcano': {
    name: 'Mayon Volcano Natural Park',
    type: 'np',
    island: 'luzon',
    province: 'Albay',
    area: '55 km²',
    established: '1938',
    desc: 'Mayon is considered the world\'s most perfectly formed volcanic cone — its symmetrical profile rising 2,462 metres above the Bicol lowlands. It is one of the most active volcanoes in the Philippines, with over 50 recorded eruptions. The surrounding biosphere reserve shelters endemic Bicol species and lowland forest fragments, while the volcano itself remains in near-constant state of activity.',
    funfact: 'The name Mayon comes from Magayon — "beautiful" in Bicolano. Local legend says the volcano is the body of a princess who died of a broken heart and was buried there by her grieving lover.',
    image: 'image/Photo coming soon.jpg'
  },
  'mount-pinatubo': {
    name: 'Mount Pinatubo Natural Park',
    type: 'np',
    island: 'luzon',
    province: 'Zambales / Pampanga / Tarlac',
    area: '97 km²',
    established: '2000',
    desc: 'The site of the 20th century\'s second-largest volcanic eruption (June 15, 1991) now harbours a stunning turquoise crater lake ringed by lahar-sculpted badlands. The eruption ejected so much material into the stratosphere that global temperatures dropped by 0.5°C for over a year. The surrounding Aeta communities, who had lived on the mountain for centuries, were displaced but have slowly returned.',
    funfact: 'The 1991 Pinatubo eruption temporarily cooled the entire planet by 0.5°C — demonstrating that a single volcanic event can alter global climate for years.',
    image: 'image/Photo coming soon.jpg'
  },
  'hundred-islands': {
    name: 'Hundred Islands Natural Monument',
    type: 'np',
    island: 'luzon',
    province: 'Pangasinan',
    area: '18 km²',
    established: '1940',
    desc: 'Scattered across the Lingayen Gulf, the Hundred Islands were formed by millennia of wave erosion on uplifted coral limestone. Despite the name, there are actually 124 islands at low tide (123 at high tide). The park is one of the Philippines\' oldest protected areas and supports extensive reef fish communities, nesting seabirds, and centuries-old marine biodiversity.',
    funfact: 'Hundred Islands Natural Monument was originally proclaimed a national park in 1940 — predating the post-war republic itself — and reclassified as a Natural Monument under NIPAS in 2013.',
    image: 'image/Hundred Islands.jpg'
  },
  'taal-volcano': {
    name: 'Taal Volcano Protected Landscape',
    type: 'np',
    island: 'luzon',
    province: 'Batangas',
    area: '243 km²',
    established: '1996',
    desc: 'Taal is one of Earth\'s most unique volcanic systems — an active island volcano rising from a crater lake, itself contained within one of Southeast Asia\'s largest calderas. The lake holds the world\'s only known population of the freshwater Tawilis sardine. The January 2020 eruption sent a phreatomagmatic column 15 kilometres into the sky and forced the evacuation of tens of thousands of people.',
    funfact: 'Taal is a volcano within a lake within a volcano — a geological configuration found in very few places on Earth, making it one of the most complex volcanic systems on the planet.',
    image: 'image/Photo coming soon.jpg'
  },
  'paoay-lake': {
    name: 'Paoay Lake Protected Landscape',
    type: 'np',
    typeLabel: 'Protected Landscape',
    island: 'luzon',
    province: 'Ilocos Norte',
    area: '3.47 km²',
    established: '2025',
    desc: 'Paoay Lake is a natural barrier lake in the Municipality of Paoay, Ilocos Norte, formed by coastal sand dune progradation during the late Quaternary period. Roughly circular and about 2.5 kilometres across, the lake has no inflowing rivers — its water comes entirely from groundwater seepage and rainy-season runoff off the surrounding hills, with depths reaching nearly 5 metres at the height of the wet season. Its still waters support a diverse zooplankton community of two dozen-plus species alongside aquatic plants such as water spinach and tape grass, drawing resident waterbirds including the White-collared Kingfisher and Philippine Duck, along with migratory Grey Herons, Ospreys, and Great Egrets. The lake and its surrounding 347-hectare area were formally declared a Protected Landscape under Republic Act 12230, signed on August 4, 2025, in recognition of the biological resources — both flora and fauna — native and distinct to the lake and their aesthetic and ecological importance.',
    funfact: 'Paoay Lake was not formed by volcanic activity but by the gradual enclosure of a coastal lagoon by advancing sand dunes — making it a rare natural barrier lake, one of only a few of this type in the Philippines.',
    image: 'image/Paoay Lake Protected Landscape.jpg',
    address: 'Paoay, Ilocos Norte',
    wildlife: [
      { name: 'White-collared Kingfisher (Todiramphus chloris)', id: 'white-collared-kingfisher' },
      { name: 'Philippine Duck (Anas luzonica)', id: 'philippine-duck' }
    ]
  },
  'kalbario-patapat': {
    name: 'Kalbario-Patapat Natural Park',
    type: 'np',
    typeLabel: 'Natural Monument',
    island: 'luzon',
    province: 'Ilocos Norte',
    area: '38 km²',
    established: '2007',
    desc: 'Kalbario-Patapat Natural Park covers 3,800 hectares of mountain forest — with a further 1,937-hectare buffer zone — spanning Pagudpud and Adams at the northernmost tip of Ilocos Norte, where the Patapat Mountains meet the Central Cordillera. Adams, the province\'s smallest and only landlocked municipality, is entirely mountainous — terrain that has helped keep much of the park\'s interior forest cover intact. Established by Proclamation No. 1275 on April 20, 2007, the park is classified as IUCN Category III (Natural Monument) and recognised as a Key Biodiversity Area, its terrain ranging from lowland dipterocarp to mossy montane forest across steep, fault-riddled slopes that feed numerous springs and waterfalls. It shelters the Vulnerable Rufous Hornbill and numerous restricted-range birds of the Luzon Endemic Bird Area, though its mammal fauna has never been formally surveyed — leaving much of the park\'s biodiversity still undocumented. The Patapat Viaduct — a 7-kilometre coastal highway carved into sheer sea cliffs — passes through its northern edge above Pasaleng Bay.',
    funfact: 'The Patapat Viaduct running along the park\'s coastal cliffs is one of the most dramatic road sections in the Philippines — a 7-kilometre highway cut into vertical sea cliffs, often misted by ocean spray from the South China Sea below.',
    image: 'image/Kalbario-Patapat Natural Park.jpg',
    address: 'Pagudpud, Ilocos Norte',
    wildlife: [
      { name: 'Rufous Hornbill (Buceros hydrocorax)', id: 'philippine-hornbill' },
      { name: 'Hawksbill Sea Turtle (Eretmochelys imbricata)', id: 'hawksbill-sea-turtle' }
    ]
  },
  'tirad-pass': {
    name: 'Tirad Pass Protected Landscape',
    type: 'np',
    typeLabel: 'Protected Landscape',
    island: 'luzon',
    province: 'Ilocos Sur',
    area: '75 km²',
    established: '2022',
    desc: 'Tirad Pass Protected Landscape covers 7,507.60 hectares across the municipalities of Gregorio del Pilar, Quirino, Sigay, Cervantes, and Suyo in Ilocos Sur, declared under Republic Act No. 11687, signed on April 8, 2022. The protected area encompasses the historic mountain pass where General Gregorio del Pilar and 60 Filipino soldiers made their last stand against American forces during the Philippine-American War of 1899, set within the rugged terrain of the Cordillera range.',
    funfact: 'At Tirad Pass on December 2, 1899, General Gregorio del Pilar — just 24 years old — and 60 soldiers held off 500 American troops for hours to allow President Emilio Aguinaldo to escape. Del Pilar was killed at the pass and is honoured as the "Boy General" of the Philippine Revolution.',
    image: 'image/Tirad Pass Protected Landscape.jpg'
  },
  'agoo-damortis': {
    name: 'Agoo-Damortis Protected Landscape and Seascape',
    type: 'mpa',
    typeLabel: 'Protected Landscape & Seascape',
    island: 'luzon',
    province: 'La Union',
    area: '106 km²',
    established: '2000',
    desc: 'The Agoo-Damortis Protected Landscape and Seascape covers 10,648.94 hectares along approximately 30 kilometres of the Lingayen Gulf coastline in southern La Union, encompassing the municipalities of Agoo, Santo Tomas, and Rosario. First gazetted as a national park in 1965 and formally protected under Proclamation No. 277 in 2000 pursuant to the NIPAS Act, the area encompasses mangrove swamps, seagrass beds, and fine black sand beaches that serve as critical spawning and nursery grounds for coastal fisheries and habitat for migratory birds.',
    funfact: 'The Agoo-Damortis coastline features distinctive black sand beaches formed from the erosion of dark basaltic rock carried down from the Cordillera mountains by rivers — a geological signature rarely seen along the rest of the Lingayen Gulf shoreline.',
    image: 'image/Photo coming soon.jpg'
  },
  'batanes': {
    name: 'Batanes Protected Landscapes &amp; Seascapes',
    type: 'np',
    island: 'luzon',
    province: 'Batanes',
    area: '189 km²',
    established: '2000',
    desc: 'The northernmost Philippine province sits directly in the path of more typhoons than almost anywhere else on Earth. Its rugged rolling hills, stone Ivatan villages, and dramatic cliff coastlines are unlike any other landscape in the archipelago. The Ivatan people\'s traditional limestone and cogon-grass houses — with walls up to a metre thick — are built to withstand the full force of Pacific typhoon winds.',
    funfact: 'The Ivatan stone houses of Batanes have walls up to a metre thick — built by communities who have weathered more typhoons per year than almost any other people on Earth.',
    image: 'image/Photo coming soon.jpg'
  },
  'palaui-island': {
    name: 'Palaui Island Protected Landscape and Seascape',
    type: 'mpa',
    typeLabel: 'Protected Landscape & Seascape',
    island: 'luzon',
    province: 'Cagayan',
    area: '80.49 km²',
    established: '1994',
    desc: 'Palaui Island Protected Landscape and Seascape covers 8,048 hectares off the northeastern tip of Luzon in Santa Ana, Cagayan. First proclaimed as a marine reserve in 1994 under Presidential Proclamation No. 447, the island was formally designated as a national park under the Expanded NIPAS Act (R.A. 11038) in 2018. Its 10-kilometre length encompasses volcanic rock formations, high cliffs rising to 250 metres, pristine coves, mangrove forests, coral reefs, and seagrass beds. Limited access by outrigger boat has preserved some of the most intact marine and coastal habitats in northern Luzon.',
    funfact: 'Palaui Island\'s isolation at the northeastern tip of Luzon — reachable only by outrigger boat — has been its greatest conservation asset, preserving coral reefs and forest cover largely intact while much of the Philippine coastline was developed.',
    image: 'image/Photo coming soon.jpg'
  },
  'quirino-pl': {
    name: 'Quirino Protected Landscape',
    type: 'np',
    typeLabel: 'Protected Landscape',
    island: 'luzon',
    province: 'Quirino',
    area: '1,759 km²',
    established: '2004',
    desc: 'The Quirino Protected Landscape covers 175,943 hectares of the central Sierra Madre Mountain Range. Presidential Proclamation No. 548 established the area at 206,875 hectares on February 9, 2004; it was redrawn to its current 175,943 hectares under Proclamation No. 779 in 2005. Spanning five municipalities — Diffun, Cabarroguis, Aglipay, Maddela, and Nagtipunan — it serves as the headwaters of the Cagayan River system and supports at least 41 threatened species. The Philippine Eagle and the Critically Endangered Cantor\'s Giant Softshell Turtle have been documented in its rivers, placing Quirino among the most biologically significant protected landscapes in northern Luzon.',
    funfact: 'The Addalam River flowing through Quirino Protected Landscape is one of the few rivers in the Philippines where the Cantor\'s Giant Softshell Turtle — one of the world\'s largest freshwater turtles — has been confirmed present in the wild.',
    image: 'image/Photo coming soon.jpg'
  },
  'casecnan': {
    name: 'Casecnan Protected Landscape',
    type: 'wf',
    typeLabel: 'Protected Landscape',
    island: 'luzon',
    province: 'Nueva Vizcaya / Quirino',
    established: '2000',
    desc: 'The Casecnan Protected Landscape was established by Presidential Proclamation No. 289 on April 23, 2000, to protect the watershed of the Casecnan River across portions of Nueva Vizcaya and Quirino provinces. The reserve sustains the catchment supplying the Casecnan Hydroelectric Power Plant, one of the major energy infrastructure projects in the Cagayan Valley. Its montane and transitional forests lie at the ecological interface between the Caraballo Mountains and the southern Sierra Madre, sheltering freshwater species and upland wildlife in an area critical to regional water and energy security.',
    funfact: 'The Casecnan Protected Landscape directly sustains a hydroelectric plant supplying power to the national grid — one of the clearest examples in the Philippines of the direct economic value of intact watershed forest.',
    image: 'image/Photo coming soon.jpg'
  },
  'el-nido': {
    name: 'El Nido–Taytay Managed Resource PA',
    type: 'np',
    island: 'luzon',
    province: 'Palawan',
    area: '903 km²',
    established: '1998',
    desc: 'El Nido\'s ancient limestone cliffs began as coral reefs some 30 million years ago. The managed resource area covers over 900 km² of some of the most biodiverse marine habitat in the Coral Triangle — hidden lagoons, white sand beaches, and clear shallows sheltering dugong, sea turtles, and over 800 fish species. The limestone towers rise directly from the sea, some reaching over 300 metres.',
    funfact: 'The limestone karst cliffs of El Nido contain fossils of ancient marine organisms — visible in the rock walls above the waterline — evidence that these formations were once living coral reefs on the seafloor.',
    image: 'image/Photo coming soon.jpg'
  },
  'iglit-baco': {
    name: 'Mts. Iglit-Baco Natural Park',
    type: 'np',
    island: 'luzon',
    province: 'Occidental Mindoro',
    area: '750 km²',
    established: '1997',
    desc: 'The last stronghold of the Tamaraw — the critically endangered dwarf buffalo endemic to Mindoro — this protected landscape covers montane grasslands and forest mosaic sheltering fewer than 500 remaining individuals. The Tamaraw is unique among bovines in being solitary rather than social. The park also shelters the Mindoro Bleeding-heart Dove and several endemic forest birds found only on this island.',
    funfact: 'The Tamaraw population collapsed from over 10,000 individuals in 1900 to fewer than 500 today — one of the steepest wildlife declines in Philippine history, driven by hunting, habitat loss, and a rinderpest outbreak introduced by livestock.',
    image: 'image/Photo coming soon.jpg'
  },
  'callao-cave': {
    name: 'Callao Cave Reservation',
    type: 'np',
    island: 'luzon',
    province: 'Cagayan',
    area: '32 km²',
    desc: 'A seven-chambered limestone cave on the Pinacanauan River in Cagayan, where sunlight streams through a natural skylight to illuminate a chapel inside the cave. Its deeper passages yielded bones of Homo luzonensis in 2019 — a previously unknown human species that lived in the Philippines at least 50,000 years ago, rewriting Southeast Asian prehistory.',
    funfact: 'Callao Cave is where Homo luzonensis was discovered in 2019 — a completely new human species that rewrote our understanding of when and how humans first reached the Philippine archipelago.',
    image: 'image/Photo coming soon.jpg'
  },
  'quezon-protected': {
    name: 'Quezon Protected Landscape',
    type: 'np',
    island: 'luzon',
    province: 'Quezon',
    area: '984 km²',
    established: '2000',
    desc: 'A mosaic of lowland dipterocarp forest, mangroves, and coastal habitats stretching across Quezon province. The protected landscape shelters the Philippine warty pig, cloud rats, and numerous endemic birds in one of the largest remaining forest blocks on the eastern Luzon coast. It also encompasses the Quezon National Park, established in 1940 as one of the first protected areas in the Philippines.',
    funfact: 'Quezon Protected Landscape contains some of the last remaining lowland dipterocarp forest on the eastern coast of Luzon — a forest type that once blanketed the entire region.',
    image: 'image/Photo coming soon.jpg'
  },
  'bataan-natural': {
    name: 'Bataan Natural Park',
    type: 'np',
    typeLabel: 'Natural Park',
    island: 'luzon',
    province: 'Bataan',
    area: '200.04 km²',
    established: '1945',
    desc: 'Bataan Natural Park covers 20,004.17 hectares of the Mariveles Mountains at the southern tip of the Bataan Peninsula today, under its current designation via the Expanded NIPAS Act (R.A. 11038, 2018) — down from the roughly 31,400 hectares first proclaimed as Bataan National Park through Presidential Proclamation No. 24 in 1945, after decades of boundary reductions. Its intact tropical forest shelters the upper watershed of the Bataan Peninsula, filtering freshwater runoff into Manila Bay. Surrounded by military and industrial zones, it is one of the last significant natural ecosystems in Bataan, sheltering endemic Luzon species in a landscape of deep historical significance — the same mountains that formed the backdrop for the Bataan Death March of 1942.',
    funfact: 'Bataan Natural Park covers the mountains across which the Bataan Death March of April 1942 began — making it simultaneously one of the Philippines\' most important historical landscapes and one of its most ecologically significant forest reserves.',
    image: 'image/Photo coming soon.jpg'
  },
  'mount-arayat': {
    name: 'Mount Arayat National Park',
    type: 'np',
    island: 'luzon',
    province: 'Pampanga',
    area: '37.15 km²',
    desc: 'Mount Arayat National Park covers 3,715 hectares of the forested slopes of an isolated Pleistocene stratovolcano rising to 1,026 metres above the flat agricultural plains of Pampanga. Surrounded on all sides by rice paddies, it stands as the only significant upland habitat in an otherwise entirely lowland province. The park shelters endemic Luzon forest birds and provides a critical biodiversity refuge in the heart of Central Luzon\'s most intensively farmed lowlands. Its twin peaks — North Peak at approximately 1,030 m and South Peak at 984 m — are visible for kilometres across the flat Central Luzon plain.',
    funfact: 'Mount Arayat is one of the few places in the Philippines where a forested volcano rises directly from an almost perfectly flat agricultural plain — its twin forested peaks visible from most of Pampanga, like an island of wilderness in a sea of rice.',
    image: 'image/Photo coming soon.jpg'
  },
  'aurora-memorial': {
    name: 'Aurora Memorial National Park',
    type: 'np',
    island: 'luzon',
    province: 'Aurora',
    area: '98 km²',
    desc: 'A forested reserve on the Pacific coast of Aurora province, sheltering endemic Luzon species in a landscape of steep river gorges and coastal forest. The surrounding marine area supports whale sharks, dolphins, and extensive reef systems in one of the most productive stretches of the Philippine Pacific coast.',
    funfact: 'Aurora province sits directly on the Pacific typhoon belt — its forests absorb the brunt of some of the strongest storms that reach Luzon each year, acting as a natural buffer for inland communities.',
    image: 'image/Photo coming soon.jpg'
  },
  'donsol': {
    name: 'Donsol Whale Shark Interaction Area',
    type: 'ws',
    island: 'luzon',
    province: 'Sorsogon',
    desc: 'A small fishing town in Sorsogon where whale sharks (butanding) gather in extraordinary numbers from November to June, feeding on plankton in the warm Ticao Pass. Interaction is strictly regulated — no touching, no flash photography, snorkel only. Donsol is considered a global model for sustainable whale shark tourism and helped establish that wild whale shark aggregations could be reliably encountered.',
    funfact: 'Before the late 1990s, Donsol\'s whale shark aggregations were virtually unknown to the outside world. Local fishermen had simply lived alongside them for generations without publicising their presence.',
    image: 'image/Photo coming soon.jpg'
  },
  'subic-forest': {
    name: 'Subic Bay Forest Reserve',
    type: 'ws',
    island: 'luzon',
    province: 'Zambales',
    area: '146 km²',
    desc: 'The former US Naval Base at Subic Bay left behind an unexpected conservation legacy — 14,600 hectares of intact tropical forest protected by decades of restricted military access. The forest now shelters Philippine Eagles, wild deer, and one of the most accessible intact lowland forest ecosystems near Metro Manila.',
    funfact: 'The Subic Bay forest survived precisely because it was a US military base for nearly a century — restricted access prevented the logging and agricultural clearing that destroyed forests elsewhere in Luzon.',
    image: 'image/Photo coming soon.jpg'
  },
  'masungi': {
    name: 'Masungi Georeserve',
    type: 'ws',
    island: 'luzon',
    province: 'Rizal',
    area: '28 km²',
    desc: 'A limestone georeserve in the mountains of Rizal, just an hour from Manila, where a network of rope courses, trails, and climbing structures winds through karst formations overgrown with returning forest. The reserve is a pioneer in privately managed conservation, demonstrating how degraded forest can be actively restored and how ecotourism revenue can fund reforestation.',
    funfact: 'Masungi Georeserve has planted over 25,000 trees in its restoration zones — returning a once-denuded hillside to functioning forest within two decades through a combination of active planting and ecotourism funding.',
    image: 'image/Photo coming soon.jpg'
  },
  'bicol-natural': {
    name: 'Bicol Natural Park',
    type: 'ws',
    island: 'luzon',
    province: 'Camarines Sur',
    area: '119 km²',
    established: '2000',
    desc: 'A forest reserve in the Bicol Peninsula sheltering endemic birds and mammals in the shadow of the Mayon and Iriga volcanoes. Its forests form a biological corridor linking the volcanic highlands with lowland dipterocarp fragments, supporting populations of Philippine warty pigs, cloud rats, and numerous Luzon endemic birds.',
    funfact: 'The Bicol region sits at the junction of two major biogeographic zones — species from both northern and southern Luzon meet here, creating unusual assemblages of wildlife found nowhere else together.',
    image: 'image/Photo coming soon.jpg'
  },
  'calauit': {
    name: 'Calauit Wildlife Sanctuary',
    type: 'ws',
    island: 'luzon',
    province: 'Palawan',
    area: '37 km²',
    established: '1976',
    desc: 'In 1976, President Marcos displaced the indigenous Tagbanwa community of Calauit Island to create an African game reserve, importing giraffes, zebras, impalas, and waterbucks. Today the African animals roam freely alongside endemic Philippine species including the Calamian Deer, Palawan Bearcat, and Philippine Cockatoo — creating the world\'s most unusual wildlife overlap.',
    funfact: 'Calauit\'s African animals have lived on the island for nearly 50 years and have established self-sustaining populations. Nowhere else on Earth do African savanna ungulates share a landscape with endemic Philippine rainforest species.',
    image: 'image/Photo coming soon.jpg'
  },
  'apo-reef': {
    name: 'Apo Reef Natural Park',
    type: 'mpa',
    island: 'luzon',
    province: 'Occidental Mindoro',
    area: '270 km²',
    established: '1996',
    desc: 'The world\'s second-largest contiguous coral reef system and the Philippines\' largest coral reef — a remote atoll rising from the Sulu Sea between Mindoro and Palawan. Its outer walls plunge hundreds of metres into the deep, drawing hammerhead sharks, thresher sharks, and massive schools of barracuda. Despite protected status, it faces persistent pressure from poaching vessels.',
    funfact: 'Apo Reef\'s recovery since protection began in 1996 is considered one of the most successful large-scale reef rehabilitations in the Philippines — though it remains under severe poaching pressure from foreign fishing vessels.',
    image: 'image/Photo coming soon.jpg'
  },
  'malampaya': {
    name: 'Malampaya Sound Protected Landscape &amp; Seascape',
    type: 'mpa',
    island: 'luzon',
    province: 'Palawan',
    area: '806 km²',
    established: '2000',
    desc: 'A vast marine protected area in northern Palawan encompassing the Malampaya Sound — a deep inland sea ringed by limestone cliffs and mangrove forests. The sound is a critical breeding and feeding ground for the Irrawaddy Dolphin, dugong, and sea turtles. It also overlies the Malampaya natural gas field, which supplies a significant portion of Luzon\'s electricity.',
    funfact: 'The Malampaya Sound is home to one of the few remaining populations of the Irrawaddy Dolphin in the Philippines — a freshwater-tolerant dolphin that regularly enters river mouths and shallow estuaries.',
    image: 'image/Photo coming soon.jpg'
  },
  'angat': {
    name: 'Angat Watershed Forest Reserve',
    type: 'wf',
    island: 'luzon',
    province: 'Bulacan / Rizal',
    area: '688 km²',
    desc: 'The Angat watershed supplies approximately 90% of Metro Manila\'s drinking water and generates significant hydroelectric power. The forest reserve that protects the watershed\'s upper catchment is one of the most strategically important conservation areas in the Philippines — its trees literally sustain the water supply of the largest city in Southeast Asia.',
    funfact: 'The Angat Watershed supplies drinking water to roughly 12 million people in Metro Manila — making its forest cover one of the most economically critical ecosystems in the entire country.',
    image: 'image/Photo coming soon.jpg'
  },
  'la-mesa': {
    name: 'La Mesa Watershed Reservation',
    type: 'wf',
    island: 'luzon',
    province: 'Quezon City',
    area: '27 km²',
    desc: 'An urban forest reserve and watershed within Quezon City — one of the largest remaining forest patches within Metro Manila. The La Mesa Dam and its surrounding forest provide supplemental water supply to the metropolis while offering a rare urban wildlife refuge for birds, small mammals, and reptiles surrounded by one of Asia\'s most densely populated cities.',
    funfact: 'La Mesa is one of the world\'s few remaining intact urban forests inside a megacity — a 27 km² patch of forest entirely surrounded by one of the most densely populated metropolitan areas in Asia.',
    image: 'image/Photo coming soon.jpg'
  },
  'pantabangan': {
    name: 'Pantabangan–Carranglan Watershed',
    type: 'wf',
    island: 'luzon',
    province: 'Nueva Ecija',
    area: '801 km²',
    desc: 'A large watershed reserve protecting the upper catchment of the Pantabangan River in Nueva Ecija. The reservoir it feeds is one of the largest in the Philippines and provides irrigation water to much of Central Luzon\'s rice-growing heartland. The forested slopes shelter endemic Luzon species and help regulate the floodwaters that once devastated downstream communities.',
    funfact: 'Pantabangan reservoir, fed by this watershed, irrigates farmland that produces a significant portion of the Philippines\' rice supply — the health of this forest is directly tied to national food security.',
    image: 'image/Photo coming soon.jpg'
  },
  'palawan-biotic': {
    name: 'Palawan Biotic Area',
    type: 'nba',
    island: 'luzon',
    province: 'Palawan',
    desc: 'A designated natural biotic area covering parts of Palawan that support indigenous Tagbanwa and Batak communities whose traditional land use practices have maintained the island\'s extraordinary biodiversity. The designation recognises the inseparable connection between indigenous cultural heritage and ecological conservation on what is often called the Philippines\' last ecological frontier.',
    funfact: 'The Tagbanwa and Batak peoples of Palawan have been stewards of its forests for thousands of years — their traditional practices have helped maintain ecosystems that Western conservation arrived to protect only recently.',
    image: 'image/Photo coming soon.jpg'
  },
  'tubbataha': {
    name: 'Tubbataha Reefs Natural Park',
    type: 'np',
    island: 'visayas',
    province: 'Palawan (Sulu Sea)',
    area: '971 km²',
    established: '1988',
    unesco: true,
    desc: 'A remote atoll in the Sulu Sea accessible only by liveaboard for roughly three months a year due to sea conditions. Tubbataha holds 360 coral species, 600 fish species, and nesting populations of sharks and sea turtles on atolls untouched by daily human contact. Its fish biomass rivals the most pristine mid-Pacific reefs. Inscribed as a UNESCO World Heritage Site in 1993.',
    funfact: 'Tubbataha is off-limits to all visitors for most of the year due to sea conditions — its remoteness and inaccessibility are its greatest protection, creating a de facto no-take zone for nine months annually.',
    image: 'image/Photo coming soon.jpg'
  },
  'chocolate-hills': {
    name: 'Chocolate Hills Natural Monument',
    type: 'np',
    island: 'visayas',
    province: 'Bohol',
    area: '57 km²',
    established: '1997',
    desc: 'Over 1,700 conical limestone mounds scattered across Bohol\'s interior turn chocolate-brown in the dry season as the grass covering them desiccates. The hills are composed of marine limestone overlaid with grassland — formed by a combination of uplift, karst dissolution, and weathering over millions of years. Declared a Philippine National Geological Monument.',
    funfact: 'The exact origin of the Chocolate Hills\' remarkable uniformity of size and shape is still debated by geologists. Local Bohol legend attributes them to the tears of a heartbroken giant who wept over a lost love.',
    image: 'image/Photo coming soon.jpg'
  },
  'kanlaon': {
    name: 'Mount Kanlaon Natural Park',
    type: 'np',
    island: 'visayas',
    province: 'Negros Occidental / Oriental',
    area: '246 km²',
    established: '1996',
    desc: 'The most active volcano in the Visayas, with over 30 recorded eruptions since 1866, Kanlaon\'s montane forests shelter critically endangered Visayan birds found nowhere else on Earth — including the Visayan Flowerpecker and Writhed Hornbill. The national park is one of the last intact forest sanctuaries on the heavily deforested island of Negros.',
    funfact: 'Mount Kanlaon\'s forests are so critical that they function as an island of biodiversity within a sea of sugarcane — the last refuge for endemic Negros birds whose habitat has been reduced to a fraction of its original extent.',
    image: 'image/Photo coming soon.jpg'
  },
  'samar-island': {
    name: 'Samar Island Natural Park',
    type: 'np',
    island: 'visayas',
    province: 'Eastern / Northern / Western Samar',
    area: '1,332 km²',
    established: '2003',
    desc: 'The largest block of intact lowland rainforest remaining in the Visayas — a vast karst and forest wilderness that shelters the Philippine Cockatoo, Samar Cobra, Philippine Warty Pig, and rare cave-dwelling species. Its extensive limestone cave systems include some of the largest caverns in Southeast Asia, with entire ecosystems sustained by guano and darkness.',
    funfact: 'Samar Island Natural Park contains limestone cave systems so large and so poorly explored that new species of cave-adapted invertebrates are still being discovered in its deeper passages.',
    image: 'image/Photo coming soon.jpg'
  },
  'rajah-sikatuna': {
    name: 'Rajah Sikatuna Protected Landscape',
    type: 'np',
    island: 'visayas',
    province: 'Bohol',
    area: '90 km²',
    established: '1987',
    desc: 'Named after the Bohol chieftain who formed a blood compact with Legazpi in 1565, Rajah Sikatuna Protected Landscape shelters one of the most important lowland forest remnants in the Visayas. It is a critical refuge for the Philippine Tarsier — one of the world\'s smallest primates — and supports a diverse assemblage of endemic Visayan birds and mammals.',
    funfact: 'The Philippine Tarsier — one of the world\'s smallest primates — depends almost entirely on intact lowland forest like that found in Rajah Sikatuna. Outside protected areas, tarsier populations have collapsed across much of the Visayas.',
    image: 'image/Photo coming soon.jpg'
  },
  'twin-lakes': {
    name: 'Twin Lakes Natural Park',
    type: 'np',
    island: 'visayas',
    province: 'Negros Oriental',
    area: '61 km²',
    desc: 'Twin Lakes Natural Park protects the volcanic crater lakes of Balinsasayao and Danao in the mountains of Negros Oriental. The lakes sit within primary montane forest sheltering critically endangered Negros endemic birds, including species found nowhere else on Earth. The lakes themselves support rare freshwater species and are sacred to local communities.',
    funfact: 'The forests around Twin Lakes are among the last places where the critically endangered Visayan Spotted Deer can still be observed in the wild — a species so rare it was believed extinct until its rediscovery in the 1980s.',
    image: 'image/Photo coming soon.jpg'
  },
  'olango': {
    name: 'Olango Island Wildlife Sanctuary',
    type: 'ws',
    island: 'visayas',
    province: 'Cebu',
    area: '9 km²',
    established: '1992',
    desc: 'A Ramsar-listed wetland and one of the most important migratory bird stopovers in Southeast Asia. Every year tens of thousands of shorebirds — including the globally threatened Chinese Egret and Far Eastern Curlew — rest and refuel on Olango\'s tidal flats after flying from breeding grounds in Siberia and Alaska, before continuing south to Australia. Over 48 shorebird species have been recorded.',
    funfact: 'Some of the shorebirds that stop at Olango have flown non-stop from Alaska or Siberia — covering thousands of kilometres in a single flight before landing on these tidal flats to feed and rest.',
    image: 'image/Photo coming soon.jpg'
  },
  'apo-island': {
    name: 'Apo Island Marine Reserve',
    type: 'ws',
    island: 'visayas',
    province: 'Negros Oriental',
    area: '0.7 km²',
    established: '1982',
    desc: 'A tiny volcanic island off Negros Oriental encircled by one of Southeast Asia\'s most celebrated community-managed marine sanctuaries, established in 1982. Green sea turtles gather here year-round, reef fish biomass rivals pristine mid-Pacific reefs, and the no-take sanctuary zone has allowed the reef to recover to near-pristine condition. Fish biomass inside the sanctuary is more than five times higher than in unprotected areas.',
    funfact: 'Apo Island\'s marine sanctuary is globally cited as proof that small-scale community management can reverse reef decline — its recovery from degraded reef to pristine sanctuary in under two decades changed how conservation science approaches community-based marine protection.',
    image: 'image/Photo coming soon.jpg'
  },
  'sohoton': {
    name: 'Sohoton Natural Bridge National Park',
    type: 'ws',
    island: 'visayas',
    province: 'Samar',
    area: '8 km²',
    established: '1935',
    desc: 'A hidden tidal cove in Northern Samar reachable only at low tide through a narrow limestone passage. Inside, brackish water teems with millions of stingless jellyfish that have lost their venom over thousands of generations due to the absence of predators. Cathedral-ceilinged caves glow with bioluminescent organisms, and the forest above shelters rare hornbills and flying foxes.',
    funfact: 'The jellyfish of Sohoton Cove are completely stingless — they lost their venom over thousands of generations because the enclosed lagoon has no predators. Visitors can swim through millions of jellyfish with no risk of being stung.',
    image: 'image/Photo coming soon.jpg'
  },
  'balicasag': {
    name: 'Balicasag Island Wildlife Sanctuary',
    type: 'ws',
    island: 'visayas',
    province: 'Bohol',
    area: '1.1 km²',
    established: '1985',
    desc: 'A tiny coral island encircled by a wall reef that drops vertically into deep water. Green and hawksbill sea turtles rest on the reef plateau year-round, spinner dolphins ride the offshore currents, and the no-take sanctuary zone — one of the oldest in the Philippines — has allowed the reef to recover to near-pristine condition after decades of protection.',
    funfact: 'A single hectare of healthy reef at Balicasag supports more fish biomass than many entire reef systems elsewhere in Southeast Asia — a testament to over three decades of community protection.',
    image: 'image/Photo coming soon.jpg'
  },
  'tanon-strait': {
    name: 'Tañon Strait Protected Seascape',
    type: 'ws',
    island: 'visayas',
    province: 'Negros / Cebu',
    area: '4,227 km²',
    established: '1998',
    desc: 'The Tañon Strait between Negros and Cebu is one of the Philippines\' most important marine corridors — a deep-water channel that supports resident spinner dolphin populations, whale sharks, and extensive seagrass beds sheltering dugong. As the largest marine protected area in the Visayas, it plays a critical role in maintaining connectivity between reef systems on both sides of the strait.',
    funfact: 'The Tañon Strait supports one of the Philippines\' largest resident spinner dolphin populations — pods of hundreds can be encountered year-round in the channel\'s deeper waters.',
    image: 'image/Photo coming soon.jpg'
  },
  'leyte-corridor': {
    name: 'Leyte Corridor Protected Landscape',
    type: 'ws',
    island: 'visayas',
    province: 'Leyte',
    area: '222 km²',
    desc: 'A forest corridor linking montane habitats across Leyte, one of the most biodiverse islands in the eastern Visayas. The protected landscape shelters endemic Leyte species including forest birds found nowhere else, and serves as a critical green corridor allowing wildlife to move between fragmented highland forest patches.',
    funfact: 'Leyte was among the hardest-hit regions by Super Typhoon Haiyan (Yolanda) in 2013. The areas with intact forest cover recovered significantly faster than deforested zones, demonstrating the direct protective value of standing trees.',
    image: 'image/Photo coming soon.jpg'
  },
  'boracay-wetland': {
    name: 'Boracay Island Wetland',
    type: 'gr',
    island: 'visayas',
    province: 'Aklan',
    desc: 'A small but ecologically significant wetland on the island of Boracay, designated as a game refuge and bird sanctuary amid one of the Philippines\' most intensively developed tourist destinations. The wetland provides critical habitat for migratory waterbirds and resident wetland species in sharp contrast to the surrounding hotel and resort development.',
    funfact: 'Boracay\'s wetland survived the island\'s tourism boom and remains one of the few intact natural habitats on an island that receives millions of visitors per year.',
    image: 'image/Photo coming soon.jpg'
  },
  'hamiguitan': {
    name: 'Mount Hamiguitan Range Wildlife Sanctuary',
    type: 'np',
    island: 'mindanao',
    province: 'Davao Oriental',
    area: '161 km²',
    established: '2003',
    unesco: true,
    desc: 'A UNESCO World Heritage Site inscribed in 2014 for its extraordinary range of ecosystems — from tropical dipterocarp forest at sea level to a rare pygmy forest at its 1,637m summit. The park shelters 341 plant species, 177 animal species, and carnivorous pitcher plants endemic to its peaks, including the critically endangered Philippine Eagle. Its complete elevational gradient survives entirely intact within a single protected area.',
    funfact: 'Mount Hamiguitan is one of the very few places on Earth where a complete forest gradient — from coastal lowlands to pygmy summit forest — survives entirely intact within a single connected protected area.',
    image: 'image/Photo coming soon.jpg'
  },
  'mount-apo': {
    name: 'Mount Apo Natural Park',
    type: 'np',
    island: 'mindanao',
    province: 'Davao del Sur / North Cotabato',
    area: '640 km²',
    established: '1936',
    desc: 'The Philippines\' highest peak at 2,954 metres — a massive stratovolcano sheltering ancient rainforests, hot springs, and geothermal activity. The national park is the primary stronghold for the Philippine Eagle, and its forests shelter an extraordinary diversity of endemic species across multiple elevational zones. The mountain\'s geothermal energy now powers a significant portion of Mindanao\'s electricity grid.',
    funfact: 'Mount Apo means "grandfather" or "master" in several Mindanao languages. The mountain literally powers the island — its geothermal reservoirs supply electricity to millions of Mindanaoans.',
    image: 'image/Photo coming soon.jpg'
  },
  'kitanglad': {
    name: 'Mount Kitanglad Range Natural Park',
    type: 'np',
    island: 'mindanao',
    province: 'Bukidnon',
    area: '470 km²',
    established: '2000',
    desc: 'A mountain range in Bukidnon sheltering critical habitat for the Philippine Eagle and numerous Mindanao endemic birds in its mossy montane forests. The Kitanglad range is a biodiversity hotspot within a hotspot — its forests act as both a refuge for endemic wildlife and a water tower supplying rivers that irrigate much of the Cagayan de Oro watershed.',
    funfact: 'Mount Kitanglad\'s forests supply water to rivers that irrigate some of Mindanao\'s most productive agricultural land — its conservation is inseparably linked to regional food and water security.',
    image: 'image/Photo coming soon.jpg'
  },
  'liguasan': {
    name: 'Liguasan Marsh Protected Landscape',
    type: 'np',
    island: 'mindanao',
    province: 'Maguindanao / Cotabato / Sultan Kudarat',
    area: '2,190 km²',
    desc: 'One of Southeast Asia\'s largest freshwater wetlands, spanning the floodplain of several major rivers across three provinces of central Mindanao. The marsh is a critical habitat for the Philippine Crocodile, rare waterbirds, and endemic freshwater species, while also supporting the livelihoods of hundreds of thousands of fisherfolk and farming communities.',
    funfact: 'Liguasan Marsh expands and contracts dramatically with the seasons — at peak flood stage it covers more than twice its dry-season area, becoming one of the largest seasonal wetlands in the Philippines.',
    image: 'image/Photo coming soon.jpg'
  },
  'lake-sebu': {
    name: 'Lake Sebu Protected Landscape',
    type: 'np',
    island: 'mindanao',
    province: 'South Cotabato',
    area: '116 km²',
    desc: 'A highland lake ringed by hills and T\'boli communities in South Cotabato. The surrounding forests shelter endemic birds, the lake is home to rare freshwater species, and the Seven Falls cascade through one of the most culturally rich landscapes in Mindanao. The T\'boli are celebrated for the dream-woven T\'nalak cloth, produced only by women called Fu Dalu, whose designs come to them in visions.',
    funfact: 'The T\'boli dream weavers of Lake Sebu create their elaborate T\'nalak cloth patterns from visions they receive in sleep — a weaving tradition considered one of the most distinctive indigenous art forms in Southeast Asia.',
    image: 'image/Photo coming soon.jpg'
  },
  'camiguin-volcano': {
    name: 'Camiguin Volcano Protected Landscape',
    type: 'np',
    island: 'mindanao',
    province: 'Camiguin',
    area: '60 km²',
    desc: 'Seven volcanoes on an island smaller than most cities — Camiguin has more volcanoes per square kilometre than any other island on Earth. The protected landscape covers the active volcanic peaks and their surrounding montane forests, which shelter the Critically Endangered Camiguin Flying Fox and endemic bird species found only on this island.',
    funfact: 'One of Camiguin\'s eruptions in 1871 was so violent it submerged an entire coastal cemetery — whose cross now stands visible offshore at low tide, a haunting landmark locals call the Sunken Cemetery.',
    image: 'image/Photo coming soon.jpg'
  },
  'lake-holon': {
    name: 'Mount Parker (Lake Holon) Protected Landscape',
    type: 'np',
    island: 'mindanao',
    province: 'South Cotabato',
    area: '101 km²',
    desc: 'One of the Philippines\' most pristine crater lakes, nestled inside the summit caldera of Mount Parker in South Cotabato. Sacred to the T\'boli people who call it Maughan ("forbidden lake"), the lake was formally opened to trekkers only in the 2000s. Its emerald waters are surrounded by endemic pitcher plants, wild orchids, and intact mossy montane forest.',
    funfact: 'Lake Holon was considered off-limits to outsiders by the T\'boli for generations — its restricted access meant the surrounding forest remained almost entirely intact until trekking began only in the 2000s.',
    image: 'image/Photo coming soon.jpg'
  },
  'agusan-marsh': {
    name: 'Agusan Marsh Wildlife Sanctuary',
    type: 'ws',
    island: 'mindanao',
    province: 'Agusan del Sur',
    area: '145 km²',
    established: '1996',
    desc: 'One of Southeast Asia\'s largest freshwater swamp forests — a mosaic of lakes, floating islands, and floodplain forest in Agusan del Sur. The floating islands physically drift with the seasons, shifting the landscape each year. It is home to the Philippine Crocodile, Estuarine Crocodile, rare waterbirds, and the Manobo people who have lived on and with its waters for generations.',
    funfact: 'The floating islands of Agusan Marsh physically move with the seasons — entire plant communities drift across the marsh, shifting the landscape. Manobo communities have lived in harmony with these moving islands for generations.',
    image: 'image/Photo coming soon.jpg'
  },
  'lake-mainit': {
    name: 'Lake Mainit Protected Landscape',
    type: 'ws',
    island: 'mindanao',
    province: 'Surigao del Norte / Agusan del Norte',
    area: '171 km²',
    desc: 'One of the deepest lakes in the Philippines, Lake Mainit sits at the border of Surigao del Norte and Agusan del Norte. Its waters support endemic freshwater species including the Mainit Climbing Perch, and the surrounding forests shelter rare birds and mammals. The lake is a critical water source for communities across two provinces.',
    funfact: 'Lake Mainit is one of the deepest lakes in the Philippines — its cold abyssal waters support endemic species found nowhere else, isolated by depth in the same way island species are isolated by ocean.',
    image: 'image/Photo coming soon.jpg'
  },
  'dinagat': {
    name: 'Dinagat Island Protected Landscape',
    type: 'ws',
    island: 'mindanao',
    province: 'Dinagat Islands',
    area: '802 km²',
    desc: 'The Dinagat Islands harbour an extraordinary concentration of endemic species for such a small archipelago — including the Dinagat Bushy-tailed Cloud Rat, Dinagat Moonrat, and several endemic reptiles found nowhere else. The islands\' unique geology, combining ultramafic rocks with coastal karst, created conditions for rapid species radiation.',
    funfact: 'The Dinagat Bushy-tailed Cloud Rat was unknown to science until the 1970s. The Dinagat Islands\' isolation and unique geology have produced a miniature radiation of endemic mammals rivalling much larger archipelagos.',
    image: 'image/Photo coming soon.jpg'
  },
  'eagle-center': {
    name: 'Philippine Eagle Center',
    type: 'ws',
    island: 'mindanao',
    province: 'Davao City',
    area: '8 km²',
    established: '1987',
    desc: 'The primary conservation breeding facility for the Philippine Eagle — the country\'s national bird and one of the world\'s most endangered raptors. Home to rescued and captive-bred eagles in large naturalistic enclosures, the center leads research into eagle ecology, conducts captive breeding programmes, and runs education programmes reaching thousands of students annually.',
    funfact: 'The Philippine Eagle Center has successfully bred the Philippine Eagle in captivity — considered nearly impossible for large raptors. Each captive-bred eagle costs more to raise than a full human university education.',
    image: 'image/Photo coming soon.jpg'
  },
  'siargao': {
    name: 'Siargao Island Protected Landscape &amp; Seascape',
    type: 'mpa',
    island: 'mindanao',
    province: 'Surigao del Norte',
    area: '179 km²',
    established: '1996',
    desc: 'A teardrop-shaped island in Surigao del Norte fringed by mangroves, lagoons, and world-class reef breaks. The protected landscape and seascape covers the island\'s extraordinary reef system, which generates the Cloud 9 surf break — one of the most powerful and celebrated waves in Asia. The surrounding marine area shelters rich reef fish communities, sea turtles, and the Sohoton Cove cave system.',
    funfact: 'Cloud 9, Siargao\'s famous surf break, was unknown to the international surf world until the early 1990s — local fishermen had simply lived alongside it for generations.',
    image: 'image/Photo coming soon.jpg'
  },
  'lake-lanao': {
    name: 'Lake Lanao Watershed Reservation',
    type: 'wf',
    island: 'mindanao',
    province: 'Lanao del Sur',
    area: '2,350 km²',
    desc: 'The Philippines\' second-largest lake and one of Southeast Asia\'s most ancient — estimated to be over a million years old. Its isolation produced one of the world\'s most remarkable freshwater fish radiations, with dozens of endemic cyprinid species. Tragically, most have been driven to extinction by introduced tilapia and overfishing within living memory. The lake is sacred to the Maranao people.',
    funfact: 'Lake Lanao is estimated to be over a million years old. Its antiquity allowed its endemic fish to evolve in total isolation — producing a flock of species found absolutely nowhere else. Most are now extinct due to introduced tilapia.',
    image: 'image/Photo coming soon.jpg'
  },
  'bukidnon-watershed': {
    name: 'Bukidnon Watershed Forest Reserve',
    type: 'wf',
    island: 'mindanao',
    province: 'Bukidnon',
    area: '1,480 km²',
    desc: 'A vast forest reserve protecting the headwaters of several major rivers flowing from the Bukidnon plateau. The watershed\'s forests supply water to the Del Monte pineapple plantations and irrigated rice lands of the Cagayan de Oro basin, while sheltering remnant populations of endemic Mindanao birds and mammals in the upper montane zones.',
    funfact: 'The Bukidnon highlands are sometimes called the "water tower of Mindanao" — rivers flowing from its forests irrigate farmland feeding millions of people across northern Mindanao.',
    image: 'image/Photo coming soon.jpg'
  },
  'manobo-salug': {
    name: 'Manobo–Salug Valley Natural Biotic Area',
    type: 'nba',
    island: 'mindanao',
    province: 'Bukidnon',
    desc: 'A designated natural biotic area protecting the traditional homeland of the Manobo peoples of the Salug Valley in Bukidnon. The designation recognises the inseparable connection between indigenous land stewardship and the remarkable biodiversity of the surrounding montane forest, where the Manobo have maintained sustainable resource use for generations.',
    funfact: 'The Manobo people of the Salug Valley maintain oral traditions mapping the location of every medicinal plant, hunting trail, and sacred grove in their territory — a knowledge system accumulated over centuries of living within the forest.',
    image: 'image/Photo coming soon.jpg'
  }
};

var PA_TYPE_LABELS = {
  np: 'National Park', ws: 'Wildlife Sanctuary', mpa: 'Marine Reserve',
  nba: 'Natural Biotic Area', gr: 'Game Refuge', wf: 'Watershed'
};
var PA_TYPE_CLASSES = {
  np: 'type-np', ws: 'type-ws', mpa: 'type-mpa',
  nba: 'type-nba', gr: 'type-gr', wf: 'type-wf'
};
var PA_ISLAND_LABELS = { luzon: 'Luzon', visayas: 'Visayas', mindanao: 'Mindanao' };

