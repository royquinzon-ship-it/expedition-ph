/* species-profiles.js — Expedition PH
   Keyed detail data for species-detail.html
   Key = URL-safe slug derived from canonical name
   island: distribution range (display text)
   category: matches page name (birds / reptiles / marine / freshwater)
*/

const SPECIES_PROFILES = {

  // ── BIRDS ─────────────────────────────────────────────────────────────────

  'philippine-eagle': {
    name: 'Philippine Eagle',
    latin: 'Pithecophaga jefferyi',
    tag: 'Bird · Raptor',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Luzon · Leyte · Samar',
    description: 'The world\'s most powerful raptor by wingspan — reaching up to 2 metres tip to tip. Found only in the old-growth rainforests of Mindanao, Luzon, Leyte, and Samar, the Philippine Eagle is one of the most iconic symbols of Philippine conservation. It hunts flying lemurs, large lizards, and monkeys from below the forest canopy using explosive, low-altitude attacks that exploit the element of surprise.',
    funfact: 'A breeding pair raises only one chick every two years. The chick stays with its parents for up to 20 months — one of the longest parental care periods of any bird on Earth.',
    category: 'birds'
  },

  'philippine-cockatoo': {
    name: 'Philippine Cockatoo',
    latin: 'Cacatua haematuropygia',
    tag: 'Bird · Parrot',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan · Sulu Archipelago',
    description: 'Known locally as Katala — once widespread across the Philippine archipelago, the Philippine Cockatoo now survives primarily on Palawan and a few islands of the Sulu Sea. Community-led conservation programs, particularly in Palawan, have helped stabilise and slowly rebuild populations from near-extinction.',
    funfact: 'Philippine Cockatoos can live up to 40 years in the wild and mimic human speech. In some communities, individual birds are known by name and treated as members of the village.',
    category: 'birds'
  },

  'philippine-hornbill': {
    name: 'Philippine Hornbill',
    latin: 'Buceros hydrocorax',
    tag: 'Bird · Hornbill',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Samar · Leyte',
    description: 'The Rufous Hornbill — known locally as Kalaw — is a forest sentinel found across the Philippines. One of the largest and most distinctive hornbills in Southeast Asia, its far-carrying, raucous call echoes through lowland and montane rainforests, earning it the nickname "the forest timekeeper" among forest communities.',
    funfact: 'During nesting, the female seals herself inside a tree hollow using mud and droppings, leaving only a small slit. The male feeds her through this slit for the entire 40-day incubation period.',
    category: 'birds'
  },

  'palawan-peacock-pheasant': {
    name: 'Palawan Peacock-Pheasant',
    latin: 'Polyplectron napoleonis',
    tag: 'Bird · Pheasant',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan',
    description: 'Among the most stunning birds of the Philippine forest floor — the male\'s metallic blue-green plumage and iridescent eyespots make it one of the most beautiful pheasants in the world. Endemic to Palawan, it inhabits lowland and foothill rainforests where it forages for seeds, invertebrates, and small lizards.',
    funfact: 'The male\'s iridescent eyespots reflect UV light invisible to humans — females can see these patterns clearly and use them to select the most genetically fit mate.',
    category: 'birds'
  },

  'luzon-bleeding-heart-dove': {
    name: 'Luzon Bleeding-Heart Dove',
    latin: 'Gallicolumba luzonica',
    tag: 'Bird · Dove',
    status: 'Near Threatened',
    statusCode: 'NT',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'One of the most striking ground doves in the world — its vivid crimson breast patch mimics a bleeding wound with uncanny realism. Found in the forests of Luzon and nearby islands, it walks the forest floor in search of seeds and invertebrates and relies on camouflage rather than flight when threatened.',
    funfact: 'When threatened, the Luzon Bleeding-Heart Dove sprints through dense undergrowth rather than flying — relying on its cryptic back pattern to disappear among leaf litter while the dramatic red breast stays pressed to the ground.',
    category: 'birds'
  },

  'mindoro-bleeding-heart-dove': {
    name: 'Mindoro Bleeding-Heart Dove',
    latin: 'Gallicolumba platenae',
    tag: 'Bird · Dove',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindoro',
    description: 'One of the rarest and most mysterious doves in the world — confined to the forests of Mindoro. Deforestation on Mindoro has been severe, and the species\' secretive, ground-dwelling habits make it nearly impossible to study. It is almost never photographed in the wild.',
    funfact: 'So secretive and rare that almost no photographs of it in the wild exist — it is known to science primarily from museum specimens and a handful of expedition sightings across the past century.',
    category: 'birds'
  },

  'philippine-eagle-owl': {
    name: 'Philippine Eagle-Owl',
    latin: 'Bubo philippensis',
    tag: 'Bird · Owl',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Leyte · Samar',
    description: 'One of the largest owls in the world — a powerful nocturnal predator of Philippine lowland and foothill forests. Its deep booming call is one of the most haunting sounds of the Philippine night, carrying over a kilometre through dense forest. An apex nocturnal predator, it takes prey as large as flying foxes and large lizards.',
    funfact: 'Its deep resonant call can travel over a kilometre through dense forest — used to mark vast nocturnal territories that it defends aggressively year-round against rival pairs.',
    category: 'birds'
  },

  'waldens-hornbill': {
    name: 'Walden\'s Hornbill',
    latin: 'Rhabdotorrhinus waldeni',
    tag: 'Bird · Hornbill',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Panay · Negros',
    description: 'Found only on Panay and Negros — one of the world\'s most critically endangered hornbills. Relentless deforestation across the Visayas has reduced its population so severely that individual nesting pairs are now tracked by conservation teams. It is considered one of the world\'s 50 most endangered birds.',
    funfact: 'If the male is killed while the female is sealed inside a nesting cavity, both the female and chick will starve — the male is the sole food provider during the 40+ day incubation period.',
    category: 'birds'
  },

  'philippine-forest-duck': {
    name: 'Philippine Forest Duck',
    latin: 'Anas luzonica',
    tag: 'Bird · Waterfowl',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Widespread',
    description: 'The only dabbling duck endemic to the Philippines. Found across Luzon, Mindanao, and surrounding islands in rivers, lakes, marshes, and mangroves. Its chestnut, grey, and white plumage is unmistakable among Philippine waterbirds. Historically abundant, populations have declined sharply due to hunting and wetland loss.',
    funfact: 'Despite heavy hunting pressure, it has adapted to both freshwater wetlands and coastal mangroves — one of the most habitat-flexible waterfowl in Asia.',
    category: 'birds'
  },

  'philippine-leafbird': {
    name: 'Philippine Leafbird',
    latin: 'Chloropsis flavipennis',
    tag: 'Bird · Leafbird',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Cebu · Negros · Leyte',
    description: 'A jewel of the Visayan forest — the male\'s iridescent green, blue, and yellow plumage is among the most spectacular of any Philippine songbird. Critically threatened by deforestation across the Visayas, it is now one of the rarest birds on Cebu, where forest cover has been reduced to near zero.',
    funfact: 'The male\'s vivid emerald green and cobalt blue plumage makes it almost invisible among sunlit forest canopy leaves — a master of hiding in plain sight.',
    category: 'birds'
  },

  'philippine-serpent-eagle': {
    name: 'Philippine Serpent Eagle',
    latin: 'Spilornis holospilus',
    tag: 'Bird · Raptor',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas · Mindanao · Widespread',
    description: 'A medium-sized raptor found across the Philippine archipelago in lowland and montane forest. A specialist predator of snakes and lizards — its piercing yellow eyes and loud, far-carrying call make it a recognisable and vocal presence in Philippine forests. Relatively tolerant of secondary forest and logged areas compared to other raptors.',
    funfact: 'It can swallow a snake whole in flight, tossing the prey into the air and catching it head-first — using thick, heavily scaled legs as armour against bites during capture.',
    category: 'birds'
  },

  'sulu-hornbill': {
    name: 'Sulu Hornbill',
    latin: 'Anthracoceros montani',
    tag: 'Bird · Hornbill',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Sulu Archipelago',
    description: 'One of the world\'s most critically endangered hornbills — found only on Tawi-Tawi and surrounding islands in the Sulu Archipelago. With fewer than 40 individuals estimated to remain, it faces near-certain extinction without urgent intervention. Armed conflict in the region has made conservation efforts extremely difficult.',
    funfact: 'Fewer than 40 individuals are estimated to survive — found only in the Sulu Archipelago, its near-total forest habitat loss has pushed it to the very edge of extinction.',
    category: 'birds'
  },

  'philippine-hanging-parrot': {
    name: 'Philippine Hanging Parrot',
    latin: 'Loriculus philippensis',
    tag: 'Bird · Parrot',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas · Widespread',
    description: 'A tiny, vivid green parrot known for sleeping upside down like a bat. Found across the Philippine archipelago from sea level to montane forest. It feeds on nectar, pollen, and soft fruit — playing an important role as a forest pollinator in Philippine lowland forests.',
    funfact: 'One of the smallest parrots in the world, it pollinates flowers as it feeds on nectar — acting as a flying pollinator across Philippine forests.',
    category: 'birds'
  },

  'giant-scops-owl': {
    name: 'Giant Scops Owl',
    latin: 'Otus gurneyi',
    tag: 'Bird · Owl',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Leyte',
    description: 'One of the world\'s largest scops owls — believed extinct for over 80 years before its dramatic rediscovery in Mindanao in the 1990s. This massive, forest-dwelling owl inhabits old-growth lowland and montane rainforest. It is still rarely encountered and remains one of the least-studied large owls in Asia.',
    funfact: 'Known only from historical specimens for over 80 years, it was rediscovered alive in Mindanao in the 1990s — one of the most significant ornithological finds in Southeast Asia.',
    category: 'birds'
  },

  'flaming-sunbird': {
    name: 'Flaming Sunbird',
    latin: 'Aethopyga flagrans',
    tag: 'Bird · Sunbird',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas',
    description: 'A brilliantly coloured nectar-feeding bird of Philippine highland forests. The male\'s fiery crimson, orange, and yellow plumage is among the most spectacular of any small Philippine bird. Found in montane forest from 800 to 2,500 metres, it is a key pollinator of highland orchids and flowers.',
    funfact: 'Its curved bill is perfectly shaped to probe specific highland orchid flowers — making it an irreplaceable pollinator in Philippine mountain ecosystems.',
    category: 'birds'
  },

  'lowland-white-eye': {
    name: 'Lowland White-eye',
    latin: 'Zosterops meyeni',
    tag: 'Bird · White-eye',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A small, sociable bird endemic to the Philippine lowlands — recognisable by the distinctive white ring around its eye. Often the nucleus of large mixed-species feeding flocks that move through secondary and primary forest. Extremely active and vocal, its high-pitched calls are a constant presence in Philippine lowland vegetation.',
    funfact: 'Forms large mixed-species foraging flocks that police entire forest patches. Dozens of other bird species follow these flocks to exploit the insects they flush from vegetation.',
    category: 'birds'
  },

  'philippine-falconet': {
    name: 'Philippine Falconet',
    latin: 'Microhierax erythrogenys',
    tag: 'Bird · Raptor',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao',
    description: 'One of the world\'s smallest falcons — a pocket-sized predator that hunts insects, lizards, and occasionally small birds from open perches across Philippine lowland forests and forest edges. Despite its tiny size, it is bold, aggressive, and fully capable of taking prey its own size.',
    funfact: 'Barely larger than a sparrow — yet it hunts insects, lizards, and even small birds with the speed and aggression of a much larger falcon.',
    category: 'birds'
  },

  'philippine-hawk-eagle': {
    name: 'Philippine Hawk-Eagle',
    latin: 'Nisaetus philippensis',
    tag: 'Bird · Raptor',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao',
    description: 'A powerful, crested eagle endemic to the forests of Luzon and the Visayas — second only to the Philippine Eagle among the archipelago\'s forest raptors. Found in lowland and montane old-growth and mature secondary forest, it hunts birds, bats, and small mammals from ambush positions below the canopy.',
    funfact: 'Builds one of the largest nests of any raptor in Southeast Asia — a platform of sticks up to 1.5 metres wide, rebuilt and reused year after year high in the forest canopy.',
    category: 'birds'
  },

  'philippine-trogon': {
    name: 'Philippine Trogon',
    latin: 'Harpactes ardens',
    tag: 'Bird · Trogon',
    status: 'Near Threatened',
    statusCode: 'NT',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas · Mindanao',
    description: 'One of the most colourful birds in the Philippine forest — the male\'s deep crimson breast and emerald-green back make it a striking sight perched motionless in the shaded understorey. Found in primary and mature secondary forest across the archipelago, it is surprisingly difficult to spot despite its vivid colours.',
    funfact: 'Nests inside active termite mounds — excavating a chamber while the termites seal themselves off. The nest stays perfectly temperature-controlled by the termites\' own ventilation system.',
    category: 'birds'
  },

  'philippine-pitta': {
    name: 'Philippine Pitta',
    latin: 'Erythropitta erythrogaster',
    tag: 'Bird · Pitta',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas · Mindanao · Widespread',
    description: 'One of the most vividly coloured birds in the Philippine forest — its crimson, cobalt, and emerald plumage blazes on the forest floor. Despite its jewel-like appearance, it is surprisingly easy to miss; it spends most of its time walking quietly through deep leaf litter, hunting earthworms and invertebrates.',
    funfact: 'So vividly coloured that early naturalist collectors could not believe it was a real forest bird — its crimson belly, sky-blue wing patches, and bottle-green back make it look more like a jewel than a living creature.',
    category: 'birds'
  },

  'blue-naped-parrot': {
    name: 'Blue-naped Parrot',
    latin: 'Tanygnathus lucionensis',
    tag: 'Bird · Parrot',
    status: 'Near Threatened',
    statusCode: 'NT',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A large, vivid green parrot with a distinctive turquoise-blue nape — found across the Philippine archipelago in forest canopy and forest edges. A noisy, sociable bird that travels in flocks between fruiting trees. Heavily targeted by the wild bird trade, its populations have declined significantly.',
    funfact: 'Can live up to 30 years in the wild and mates for life. A pair will occupy and defend the same tree hollow year after year — returning to the same nest site even after the loss of a partner.',
    category: 'birds'
  },

  'philippine-kingfisher': {
    name: 'Philippine Kingfisher',
    latin: 'Ceyx melanurus',
    tag: 'Bird · Kingfisher',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao',
    description: 'A tiny, fiery-orange endemic kingfisher found along the forest streams of Luzon and Mindanao. One of the most threatened kingfishers in the world — entirely dependent on clear, unpolluted forest streams. Deforestation and siltation of upland waterways have caused severe population declines.',
    funfact: 'One of the smallest kingfishers in the world — yet it dives at over 40 km/h with such precision it can strike a fish in water less than 3 cm deep.',
    category: 'birds'
  },

  'philippine-bulbul': {
    name: 'Philippine Bulbul',
    latin: 'Hypsipetes philippinus',
    tag: 'Bird · Bulbul',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'One of the most vocal and widespread forest birds of the Philippine archipelago. Its loud, rich calls are among the defining sounds of Philippine forest from sea level to mountain summits. An important fruit disperser, it travels widely between forest patches to follow fruiting fig trees.',
    funfact: 'Forms enormous communal roosts in the forest canopy at dusk — sometimes thousands of birds converging on a single grove of trees, their combined noise audible from hundreds of metres away.',
    category: 'birds'
  },

  'johnstons-lorikeet': {
    name: 'Johnstone\'s Lorikeet',
    latin: 'Trichoglossus johnstoniae',
    tag: 'Bird · Parrot',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao',
    description: 'A small, brilliantly coloured lorikeet found only in the montane forests of Mindanao above 1,000 metres — one of the least-known parrots in the Philippines. Its strict dependence on highland forest and nectar-bearing flowers makes it highly sensitive to both altitude shifts caused by climate change and highland deforestation.',
    funfact: 'Feeds almost exclusively on nectar and pollen from highland flowers — its brush-tipped tongue is perfectly adapted to reach deep into blossoms.',
    category: 'birds'
  },

  'spotted-imperial-pigeon': {
    name: 'Spotted Imperial Pigeon',
    latin: 'Ducula carola',
    tag: 'Bird · Pigeon',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Palawan',
    description: 'A large fruit pigeon endemic to the Philippines — one of the biggest pigeons in the archipelago. A critical disperser of large forest seeds, it swallows whole fruits that most birds cannot manage. Heavily hunted and losing its forest habitat across its range.',
    funfact: 'A giant fruit dove that swallows whole fruits too large for most birds to eat, dispersing the seeds of large-seeded canopy trees across the Philippine forest.',
    category: 'birds'
  },

  'chinese-egret': {
    name: 'Chinese Egret',
    latin: 'Egretta eulophotes',
    tag: 'Bird · Egret',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Migratory',
    description: 'One of the rarest herons in Asia — a migratory egret that breeds along the coasts of China and Korea and winters in the Philippines and Southeast Asia. Philippine wetlands and intertidal mudflats are critical wintering habitat for this globally threatened species.',
    funfact: 'Once hunted nearly to extinction for its lacy breeding plumes — used in Victorian hat fashion. After protection its population partially recovered, but it remains one of the rarest herons in East Asia.',
    category: 'birds'
  },

  'philippine-green-pigeon': {
    name: 'Philippine Green Pigeon',
    latin: 'Treron lucionensis',
    tag: 'Bird · Pigeon',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A canopy-dwelling fruit pigeon endemic to the Philippines — its vivid green plumage is perfect camouflage against forest foliage. Feeds almost exclusively on wild figs, following fruiting cycles of specific fig species across its range. An important seed disperser across Philippine forest.',
    funfact: 'Its cryptic green plumage makes it nearly invisible against a canopy of leaves — even large flocks can be completely overlooked until they take flight.',
    category: 'birds'
  },

  'brahminy-kite': {
    name: 'Brahminy Kite',
    latin: 'Haliastur indus',
    tag: 'Bird · Raptor',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'A striking coastal raptor with rich chestnut plumage and a brilliant white head — one of the most recognisable birds along Philippine coastlines. A scavenger and opportunistic predator of fish, crabs, and carrion, it soars elegantly over mangroves, estuaries, and harbours.',
    funfact: 'Considered sacred in Hindu culture — its chestnut-and-white plumage inspired the name of Garuda, the mythical eagle that appears in Philippine indigenous art and mythology.',
    category: 'birds'
  },

  'grey-faced-buzzard': {
    name: 'Grey-faced Buzzard',
    latin: 'Butastur indicus',
    tag: 'Bird · Raptor',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippines · Migratory from East Asia',
    description: 'A migratory hawk that breeds in Japan and Korea and winters across the Philippines and Southeast Asia. One of the most abundant raptors in the Philippine archipelago during the northern winter. Hunts frogs, lizards, and large insects in agricultural land, grassland, and forest edge.',
    funfact: 'Every October, tens of thousands of Grey-faced Buzzards stream south through the Philippines in one of Asia\'s most spectacular raptor migrations — funnelled by geography through northern Luzon.',
    category: 'birds'
  },

  'pacific-reef-egret': {
    name: 'Pacific Reef Egret',
    latin: 'Egretta sacra',
    tag: 'Bird · Egret',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'A coastal egret found on rocky shores and coral reefs from the Philippines across the Pacific. The only egret that hunts coral reef platforms and rocky ocean coasts — foraging for fish, crabs, and marine invertebrates exposed by the tide.',
    funfact: 'The only egret species in the world that comes in two completely different colour forms — pure white and dark slate-grey — that look like entirely different birds yet belong to the same species.',
    category: 'birds'
  },

  'brown-breasted-kingfisher': {
    name: 'Brown-breasted Kingfisher',
    latin: 'Halcyon gularis',
    tag: 'Bird · Kingfisher',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Widespread Philippines',
    description: 'A Philippine endemic kingfisher found along rivers, streams, and forest edges across the archipelago. Its brilliant turquoise wings and chestnut-brown breast are unmistakable. Unlike many kingfishers, it also hunts large insects and lizards away from water.',
    funfact: 'Heard far more often than seen — its loud, rapid rattling call echoes through Philippine riverine forest while the bird itself sits motionless in dense riverside vegetation.',
    category: 'birds'
  },

  'coleto': {
    name: 'Coleto',
    latin: 'Sarcops calvus',
    tag: 'Bird · Starling',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas · Widespread',
    description: 'One of the most distinctive birds in the Philippines — a glossy black-and-white starling with bare, vivid pink facial skin. Endemic to the Philippine archipelago. Found in forest canopy and forest edges, it feeds on fruit, nectar, and insects. Highly vocal and often encountered in small noisy groups.',
    funfact: 'Unlike virtually all other starlings, it has bare, bright pink facial skin instead of feathers — a likely adaptation that keeps its face clean when probing into sticky fruits and nectar flowers.',
    category: 'birds'
  },

  'balicassiao': {
    name: 'Balicassiao',
    latin: 'Dicrurus balicassius',
    tag: 'Bird · Drongo',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Widespread Philippines',
    description: 'A boldly glossy black drongo endemic to the Philippines — its metallic blue-black plumage and forked tail make it one of the most elegant birds of the Philippine forest edge. Highly aggressive and territorial, it is a fixture of lowland and foothill forest edges throughout the archipelago.',
    funfact: 'Aggressively mobs raptors, crows, and other birds many times its size — its bold aerial attacks drive much larger birds away from nesting areas.',
    category: 'birds'
  },

  'luzon-boobook': {
    name: 'Luzon Boobook',
    latin: 'Ninox philippensis',
    tag: 'Bird · Owl',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Nearby Islands',
    description: 'A small hawk-owl endemic to Luzon and surrounding islands — one of several closely related Philippine hawk-owls that were long considered a single species. Found in lowland and foothill forest, it hunts insects, lizards, and small frogs from perches below the forest canopy.',
    funfact: 'For most of the 20th century, it was grouped with other Philippine hawk-owls into a single species. DNA analysis revealed it as a separate endemic species — highlighting how much Philippine biodiversity remains to be formally described.',
    category: 'birds'
  },

  'purple-heron': {
    name: 'Purple Heron',
    latin: 'Ardea purpurea',
    tag: 'Bird · Heron',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Wetlands · Widespread',
    description: 'A tall, slender heron with striking chestnut, slate, and purple-grey plumage — found in Philippine wetlands, river margins, mangroves, and reed beds. More secretive than the Great Blue Heron, it prefers dense emergent vegetation where it hunts fish, frogs, and aquatic invertebrates with explosive strikes.',
    funfact: 'Despite being nearly a metre tall, it can stand completely motionless in a reed bed with its neck stretched upward — its chestnut-streaked plumage perfectly mimicking surrounding reeds.',
    category: 'birds'
  },

  'pheasant-tailed-jacana': {
    name: 'Pheasant-tailed Jacana',
    latin: 'Hydrophasianus chirurgus',
    tag: 'Bird · Wader',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Wetlands · Widespread',
    description: 'A striking waterbird with enormous feet that spread its weight across floating vegetation — allowing it to walk on lily pads as if on solid ground. Found on Philippine lakes, rice paddies, and inland wetlands, it is one of the most visually dramatic waterbirds in the archipelago.',
    funfact: 'The female mates with multiple males and each male alone incubates the eggs and raises the chicks — a rare reversal of typical bird sex roles.',
    category: 'birds'
  },

  // ── REPTILES & AMPHIBIANS ─────────────────────────────────────────────────

  'philippine-crocodile': {
    name: 'Philippine Crocodile',
    latin: 'Crocodylus mindorensis',
    tag: 'Reptile · Crocodilian',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Palawan',
    description: 'One of the world\'s most endangered crocodilians and the only freshwater crocodile endemic to the Philippines. Fewer than 250 individuals are estimated to survive in rivers and freshwater marshes of Luzon and Mindanao. Community-based conservation programs — particularly in Northern Sierra Madre Natural Park — have made slow but measurable progress.',
    funfact: 'One of the smallest crocodile species in the world, rarely exceeding 3 metres. Despite their size, they are apex predators of Philippine freshwater ecosystems and an indicator of river health.',
    category: 'reptiles'
  },

  'philippine-cobra': {
    name: 'Philippine Cobra',
    latin: 'Naja philippinensis',
    tag: 'Reptile · Snake',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindoro · Masbate',
    description: 'One of the world\'s most venomous cobras — capable of spitting venom with deadly accuracy. Endemic to the northern Philippines. Found in lowland forest, grassland, and agricultural areas where it preys on frogs, rodents, and small birds. Its venom is primarily neurotoxic — it affects the nervous system more than tissue.',
    funfact: 'Can spit venom up to 3 metres with pinpoint accuracy, aiming directly for the eyes. Its venom is among the most potent of any cobra species — a spitting cobra evolved as a defensive weapon, not for hunting.',
    category: 'reptiles'
  },

  'philippine-pit-viper': {
    name: 'Philippine Pit Viper',
    latin: 'Trimeresurus flavomaculatus',
    tag: 'Reptile · Viper',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Widespread',
    description: 'A venomous tree-dwelling pit viper found across the Philippine archipelago. Its vivid green colouring provides perfect camouflage in forest undergrowth. Active mainly at night, it hunts rodents, frogs, and lizards using heat-sensing pits that make it a deadly nocturnal predator.',
    funfact: 'Its heat-sensing pits detect temperature differences as small as 0.003°C — allowing it to strike warm-blooded prey with precision in complete darkness.',
    category: 'reptiles'
  },

  'philippine-sailfin-lizard': {
    name: 'Philippine Sailfin Lizard',
    latin: 'Hydrosaurus pustulatus',
    tag: 'Reptile · Lizard',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Samar',
    description: 'A striking semi-aquatic lizard found along Philippine riverbanks, lake shores, and mangrove coasts. Named for the dramatic crest on its tail, it is an excellent swimmer and can sprint across the water surface on its hind legs to escape predators. Heavily targeted by the wild pet trade.',
    funfact: 'Can run bipedally across the water surface using powerful hind legs and its large sail-like tail crest — earning it the nickname \'the Jesus lizard of the Philippines.\'',
    category: 'reptiles'
  },

  'philippine-forest-turtle': {
    name: 'Philippine Forest Turtle',
    latin: 'Siebenrockiella leytensis',
    tag: 'Reptile · Turtle',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Leyte · Palawan',
    description: 'One of the world\'s most endangered freshwater turtles — found only in the forest streams of Leyte and Palawan. Critically threatened by habitat loss and collection for the illegal pet trade, it was once thought to be extinct. Considered one of the world\'s 25 most endangered turtle species.',
    funfact: 'Once thought extinct, it was rediscovered in the late 1980s. It is still found only in Leyte and Palawan — its entire global range fits within a handful of river valleys.',
    category: 'reptiles'
  },

  'samar-cobra': {
    name: 'Samar Cobra',
    latin: 'Naja samarensis',
    tag: 'Reptile · Snake',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Samar · Leyte · Bohol',
    description: 'A venomous cobra endemic to the southern Philippines — found on Mindanao, Samar, Leyte, Bohol, and nearby islands. Found in lowland rainforest, secondary forest, and forest edges. Unlike the Philippine Cobra, it cannot spit venom — but its bite is highly dangerous due to potent cytotoxic venom.',
    funfact: 'Unlike the Philippine Cobra, it cannot spit venom. However, its bite delivers highly cytotoxic venom that destroys tissue at the wound site — requiring rapid medical treatment.',
    category: 'reptiles'
  },

  'grays-monitor': {
    name: 'Gray\'s Monitor',
    latin: 'Varanus olivaceus',
    tag: 'Reptile · Monitor',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Catanduanes',
    description: 'The world\'s only fruit-eating monitor lizard — a remarkable evolutionary anomaly among the otherwise carnivorous Varanus genus. Found on Luzon and Catanduanes, it plays an irreplaceable role as a large seed disperser in Philippine forest — a function normally performed only by birds and bats.',
    funfact: 'One of the very few monitor lizards that eats fruit as a major part of its diet — dispersing seeds across Philippine forests in a role previously thought impossible for a large carnivorous reptile.',
    category: 'reptiles'
  },

  'ornate-monitor': {
    name: 'Ornate Monitor',
    latin: 'Varanus ornatus',
    tag: 'Reptile · Monitor',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Widespread',
    description: 'A large, powerfully built monitor lizard found across the Philippine archipelago — one of the most widespread Philippine monitors. An opportunistic predator of fish, crabs, birds, eggs, and small mammals. An excellent climber, swimmer, and runner — a true generalist apex predator.',
    funfact: 'Can climb vertical rock faces with ease using powerful claws — and has been observed raiding sea turtle nests on Philippine beaches, digging up buried eggs with its front feet.',
    category: 'reptiles'
  },

  'philippine-flying-dragon': {
    name: 'Philippine Flying Dragon',
    latin: 'Draco volans',
    tag: 'Reptile · Lizard',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A small agamid lizard capable of gliding between trees by extending its elongated ribs to stretch a colourful wing membrane. Found across the Philippine archipelago in lowland and montane forest. Males have vivid orange and blue throat fans used in territorial displays and courtship.',
    funfact: 'Extends its ribs outward to stretch a bright orange-and-blue skin membrane — gliding up to 9 metres between trees in a silent, controlled descent.',
    category: 'reptiles'
  },

  'tokay-gecko': {
    name: 'Tokay Gecko',
    latin: 'Gekko gecko',
    tag: 'Reptile · Gecko',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'The largest gecko in the Philippines — its loud two-syllable call \'to-kay\' echoes through Philippine homes and forests at night. A powerful nocturnal predator of large insects, lizards, and occasionally small rodents. Revered in folklore and — to the detriment of wild populations — targeted in vast numbers by the illegal wildlife trade.',
    funfact: 'Its adhesive toe pads use van der Waals forces — molecular-scale attraction between surfaces — allowing it to walk upside down on glass. Each toe pad contains millions of microscopic hair-like setae that create this grip.',
    category: 'reptiles'
  },

  'philippine-sun-skink': {
    name: 'Philippine Sun Skink',
    latin: 'Eutropis multicarinata',
    tag: 'Reptile · Skink',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'One of the most widespread lizards in the Philippines — its metallic bronze-and-copper scales glimmer in forest sunlight. Found in forest edge, grassland, gardens, and agricultural land across the archipelago. An important predator of insects, keeping Philippine agricultural pest populations in check.',
    funfact: 'Can shed and regrow its tail up to four times during its lifetime — each regenerated tail is composed of cartilage rather than bone and is a slightly different colour than the original.',
    category: 'reptiles'
  },

  'green-sea-turtle': {
    name: 'Green Sea Turtle',
    latin: 'Chelonia mydas',
    tag: 'Reptile · Sea Turtle',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'One of five sea turtle species that nest on Philippine beaches. The Philippines hosts critical nesting sites in the Turtle Islands (Tawi-Tawi), Palawan, and Batanes. A key grazer of seagrass meadows — without green turtles, seagrass beds become overgrown and collapse, destroying the nursery habitat of countless marine species.',
    funfact: 'Navigate back to the exact beach where they hatched — sometimes crossing the entire Pacific Ocean. Scientists believe they imprint on the unique magnetic signature of their birth beach as hatchlings.',
    category: 'reptiles'
  },

  'hawksbill-sea-turtle': {
    name: 'Hawksbill Sea Turtle',
    latin: 'Eretmochelys imbricata',
    tag: 'Reptile · Sea Turtle',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Reefs · Widespread',
    description: 'Critically endangered and among the most threatened sea turtles in the world. Philippine coral reefs are critical foraging and nesting habitat. Historically decimated for its beautiful tortoiseshell scutes (used in jewellery and accessories), it now faces ongoing threats from habitat loss and incidental capture.',
    funfact: 'Has a unique hawk-like beak that reaches into narrow coral crevices to extract sea sponges — its primary food. It is the only animal that eats sponges as a dietary staple, making it irreplaceable in reef ecology.',
    category: 'reptiles'
  },

  'king-cobra': {
    name: 'King Cobra',
    latin: 'Ophiophagus hannah',
    tag: 'Reptile · Snake',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Palawan · Mindanao · Visayas',
    description: 'The world\'s longest venomous snake — found in the forests of Luzon, Palawan, Mindanao, and the Visayas. A specialist predator of other snakes, including other venomous species. Despite its fearsome reputation, it is shy and actively avoids humans. Increasingly threatened by deforestation and collection for the wildlife trade.',
    funfact: 'Reaches up to 5.5 metres. It feeds almost exclusively on other snakes. A female King Cobra is the only snake known to build a nest and actively guard her eggs — remaining coiled over the nest for 60 to 90 days.',
    category: 'reptiles'
  },

  'reticulated-python': {
    name: 'Reticulated Python',
    latin: 'Malayopython reticulatus',
    tag: 'Reptile · Snake',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao · Palawan · Widespread',
    description: 'The world\'s longest snake — found in the rainforests of Luzon, Mindanao, and Palawan. This powerful constrictor is an apex predator capable of taking deer, large pigs, and — in very rare cases — humans. Philippine individuals typically reach 4–5 metres, though specimens over 6 metres have been recorded.',
    funfact: 'The world\'s longest snake — individuals exceeding 7 metres have been recorded in Philippine forests. It kills by constriction, tightening its coils each time the prey exhales, until the heart stops.',
    category: 'reptiles'
  },

  'blue-lipped-sea-krait': {
    name: 'Blue-lipped Sea Krait',
    latin: 'Laticauda laticaudata',
    tag: 'Reptile · Snake',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'A venomous amphibious sea snake found on Philippine coral reefs and rocky shorelines. Despite carrying some of the most potent venom of any sea snake, it is remarkably docile and rarely bites unless handled. Equally comfortable on land and at sea — it hunts eels in reef crevices and comes ashore to digest, rest, and lay eggs.',
    funfact: 'Equally at home on land and at sea — it hunts fish underwater, holding its breath for up to 30 minutes, then comes ashore to rest, digest, and lay eggs on rocky coasts.',
    category: 'reptiles'
  },

  'water-monitor': {
    name: 'Water Monitor',
    latin: 'Varanus salvator',
    tag: 'Reptile · Monitor',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'The Philippines\' largest lizard — reaching up to 2.5 metres. An adaptable apex predator found from mangrove coasts to highland rivers. An important ecological scavenger — it quickly removes carrion, reducing disease spread. Commonly seen basking near water across the archipelago.',
    funfact: 'Swims with a sinuous, crocodile-like movement of its flattened tail and can remain submerged for up to 30 minutes. It is immune to the toxic secretions of bufo toads — a trait that gives it access to food sources unavailable to other predators.',
    category: 'reptiles'
  },

  'philippine-forest-dragon': {
    name: 'Philippine Forest Dragon',
    latin: 'Gonocephalus sophiae',
    tag: 'Reptile · Lizard',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A spectacular crested agamid lizard found in the highland forests of Luzon. Its rough, bark-like green and brown colouring makes it nearly impossible to spot when motionless on a mossy branch — which is exactly where it spends most of its time, waiting for prey to come to it.',
    funfact: 'So cryptic that it relies entirely on camouflage — remaining completely motionless even when approached within centimetres, trusting its disguise to be more effective than fleeing.',
    category: 'reptiles'
  },

  'philippine-soft-shell-turtle': {
    name: 'Philippine Soft-shell Turtle',
    latin: 'Pelochelys cantorii',
    tag: 'Reptile · Turtle',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Palawan',
    description: 'One of the world\'s largest freshwater turtles — found in the major river systems of Luzon and Palawan. Also known as Cantor\'s Giant Softshell Turtle, it can reach over 2 metres in length. A highly secretive ambush predator that spends most of its life buried under sand or mud at the bottom of deep rivers.',
    funfact: 'Spends 95% of its life motionless, buried under sand or mud with only its eyes and snout exposed — surfacing only twice a day to breathe, and during nesting season.',
    category: 'reptiles'
  },

  'philippine-giant-forest-frog': {
    name: 'Philippine Giant Forest Frog',
    latin: 'Limnonectes leytensis',
    tag: 'Amphibian · Frog',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Leyte · Samar · Mindanao',
    description: 'One of the largest frogs in the Philippines — a powerful, fanged predator of forest streams. Found across Leyte, Samar, and Mindanao, it hunts invertebrates, small lizards, and even other frogs in fast-flowing forest streams. Heavily harvested for food across its range.',
    funfact: 'Has fangs on its lower jaw — making it one of the few frogs in the world capable of a genuinely painful bite. These fangs are used to hold prey and in combat between males.',
    category: 'reptiles'
  },

  'mindanao-horned-forest-frog': {
    name: 'Mindanao Horned Forest Frog',
    latin: 'Ceratobatrachus guentheri',
    tag: 'Amphibian · Frog',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Sulu',
    description: 'A remarkable frog of Mindanao forest floors — one of the few frogs in the world that completely bypasses the tadpole stage. Eggs are laid on damp forest soil and hatch directly as miniature, fully formed froglets. Its leaf-like shape and brown colouring make it almost impossible to spot on the forest floor.',
    funfact: 'Completely bypasses the tadpole stage — eggs are laid on damp forest soil and hatch directly as fully formed miniature froglets, skipping an entire phase of amphibian development.',
    category: 'reptiles'
  },

  'philippine-flying-frog': {
    name: 'Philippine Flying Frog',
    latin: 'Rhacophorus pardalis',
    tag: 'Amphibian · Frog',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan · Mindanao',
    description: 'A spectacular gliding frog found in the rainforests of Palawan and northern Mindanao. Its fully webbed hands and feet act as parachutes, allowing glides of over 12 metres between trees. It breeds in foam nests built over forest pools, depositing eggs in whipped foam that hangs over the water.',
    funfact: 'Uses its enormous, fully webbed feet like parachutes — spreading them wide during a leap to glide from tree to tree. A single glide can cover over 12 metres across a forest gap.',
    category: 'reptiles'
  },

  'philippine-rat-snake': {
    name: 'Philippine Rat Snake',
    latin: 'Ptyas luzonensis',
    tag: 'Reptile · Snake',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A large, fast-moving, non-venomous snake endemic to Luzon — one of the most important natural rodent controllers in Philippine agricultural areas. A skilled climber and agile predator of rodents, birds, and lizards. Despite being completely harmless, it is frequently killed by farmers who mistake it for a cobra.',
    funfact: 'Regularly raids bird nests in the forest canopy. Despite being completely harmless, its speed and defensive posturing cause it to be frequently mistaken for a cobra — leading to large numbers being killed unnecessarily.',
    category: 'reptiles'
  },

  'palawan-horned-frog': {
    name: 'Palawan Horned Frog',
    latin: 'Megophrys ligayae',
    tag: 'Amphibian · Frog',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan',
    description: 'A master of camouflage — its textured skin and leaf-like shape make it nearly indistinguishable from the forest floor. Endemic to Palawan\'s lowland and montane rainforests, it is an ambush predator that sits motionless for hours among dead leaves, waiting for insects and other small animals to walk within range.',
    funfact: 'Its leaf-like appearance is so convincing that it can sit motionless on the forest floor for hours among dead leaves — completely invisible to both predators and prey.',
    category: 'reptiles'
  },

  'olive-ridley-sea-turtle': {
    name: 'Olive Ridley Sea Turtle',
    latin: 'Lepidochelys olivacea',
    tag: 'Reptile · Sea Turtle',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'The most abundant sea turtle in the world — yet still Vulnerable. Named for its olive-grey shell, it nests along Philippine coastlines including Ilocos Norte. A highly migratory species, individuals tagged in the Philippines have been found thousands of kilometres away across the Pacific.',
    funfact: 'The only sea turtles that nest in mass synchronised events called \'arribadas\' — thousands of females emerge from the sea on the same night to nest on the same beach, overwhelming predators with sheer numbers.',
    category: 'reptiles'
  },

  'marbled-water-monitor': {
    name: 'Marbled Water Monitor',
    latin: 'Varanus marmoratus',
    tag: 'Reptile · Monitor Lizard',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A large Philippine endemic monitor lizard found along rivers, mangroves, and forest edges across the archipelago. Long classified as a colour variant of the widespread Asian Water Monitor, DNA analysis revealed it as a distinct Philippine endemic — one of several Varanus species unique to the archipelago.',
    funfact: 'Long thought to be the same species as the Asian Water Monitor found across Southeast Asia — DNA analysis revealed it as a Philippine endemic, one of several monitor lizards found only in the Philippines.',
    category: 'reptiles'
  },

  // ── MARINE ────────────────────────────────────────────────────────────────

  'dugong': {
    name: 'Dugong',
    latin: 'Dugong dugon',
    tag: 'Marine Mammal',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan · Sulu Sea · Mindanao · Widespread',
    description: 'The only strictly marine herbivorous mammal. Philippine waters — particularly around Palawan, the Sulu Sea, and Mindanao — hold some of the last significant Dugong populations in Asia. Entirely dependent on seagrass meadows, the Dugong is a sentinel species for seagrass ecosystem health across the Philippines.',
    funfact: 'More closely related to elephants than to whales or dolphins. Can live up to 70 years and are thought to be the origin of ancient mermaid legends among Filipino sailors.',
    category: 'marine'
  },

  'whale-shark': {
    name: 'Whale Shark',
    latin: 'Rhincodon typus',
    tag: 'Marine · Shark',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Donsol · Oslob · Tubbataha · Widespread',
    description: 'The world\'s largest fish. Donsol in Sorsogon is one of the world\'s premier sites for whale shark encounters — a peaceful filter-feeder that cruises near the surface consuming vast quantities of plankton and small fish. The Philippines has enacted strong legal protections for whale sharks, making it a global leader in whale shark conservation.',
    funfact: 'Every whale shark has a unique pattern of white spots — like a fingerprint. Scientists use photo-identification software to track individuals across ocean basins, some travelling over 13,000 km.',
    category: 'marine'
  },

  'whitefin-topeshark': {
    name: 'Whitefin Topeshark',
    latin: 'Hemitriakis leucoperiptera',
    tag: 'Marine · Shark',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Sulu Sea · Philippine Waters',
    description: 'A small, slender coastal shark found only in Philippine waters — one of the most geographically restricted sharks on Earth. Found in shallow coastal and estuarine habitats, its tiny range and slow reproductive rate make it extraordinarily vulnerable to fishing pressure. Almost nothing is known about its ecology or behaviour.',
    funfact: 'Found only in Philippine waters — one of the most range-restricted sharks in the world. Its small coastal habitat means that even modest fishing pressure poses an extinction-level threat.',
    category: 'marine'
  },

  'blue-spotted-angelfish': {
    name: 'Blue-spotted Angelfish',
    latin: 'Chaetodontoplus caeruleopunctatus',
    tag: 'Marine · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Central Philippines · Coral Triangle',
    description: 'A striking reef fish found only in Philippine waters and a handful of nearby Indonesian reefs — its vivid cobalt-blue spots on a dark body make it one of the most visually distinctive angelfish in the Indo-Pacific. Found on steep reef slopes and coral walls from 5 to 40 metres depth.',
    funfact: 'Endemic to the Philippines and a handful of nearby reefs — making it one of the most geographically restricted marine angelfish in the Indo-Pacific.',
    category: 'marine'
  },

  'philippine-guitarfish': {
    name: 'Philippine Guitarfish',
    latin: 'Rhinobatos whitei',
    tag: 'Marine · Ray',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Sulu Sea · Philippine Coastal Waters',
    description: 'A cartilaginous fish halfway between a shark and a ray — named for its guitar-shaped body outline. Found in shallow Philippine coastal waters and seagrass beds. Like many elasmobranchs, it is slow to mature and produces few offspring — making it extremely vulnerable to even modest fishing pressure.',
    funfact: 'A ray that looks like a shark from above and a ray from below — a living bridge between two of the ocean\'s most iconic fish groups.',
    category: 'marine'
  },

  'manila-sea-catfish': {
    name: 'Manila Sea Catfish',
    latin: 'Arius manillensis',
    tag: 'Marine · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Manila Bay · Laguna de Bay',
    description: 'A brackish-water catfish endemic to Manila Bay and Laguna de Bay — a cultural and culinary staple of the region for centuries. Known locally as kanduli, it is deeply embedded in Central Luzon food culture. Populations have declined severely due to water pollution in Manila Bay and overfishing.',
    funfact: 'Uses long, sensitive barbels around its mouth to detect prey buried in muddy seabed sediment — essentially \'feeling\' for food in the dark, turbid waters of Manila Bay.',
    category: 'marine'
  },

  'culion-silverside': {
    name: 'Culion Silverside',
    latin: 'Atherinomorus elymus',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Culion Island · Palawan',
    description: 'A small, schooling silverside fish endemic to the waters around Culion Island in Palawan. A key prey species in the food web of one of the Philippines\' most biodiverse marine regions, the Calamianes Islands group — part of the globally significant Coral Triangle.',
    funfact: 'Forms massive, shimmering schools near the surface of the sea — their mirrored scales moving in perfect unison, making the entire school appear as a single living organism to confuse predators.',
    category: 'marine'
  },

  'philippine-anchovy': {
    name: 'Philippine Anchovy',
    latin: 'Encrasicholina philippinensis',
    tag: 'Marine · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A small, abundant pelagic fish that forms the foundation of Philippine marine food webs — feeding tuna, dolphins, and seabirds. An economically vital species — dried and fermented into bagoong, one of the most essential condiments in Filipino cuisine, used across the country for centuries.',
    funfact: 'Travels in schools so dense they are visible from the surface as dark moving shadows beneath the water — a critical food source for virtually every large predator in the Philippine Sea.',
    category: 'marine'
  },

  'zulu-eelblenny': {
    name: 'Zulu Eelblenny',
    latin: 'Sticharium zulu',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Sulu Sea · Philippine Reefs',
    description: 'A cryptic, eel-like blenny endemic to Philippine reef habitats. Rarely seen and poorly studied, it lives hidden within coral rubble and reef crevices, emerging only to feed on small invertebrates. One of many small cryptic fish species that remain almost entirely unknown to science.',
    funfact: 'So secretive it spends almost its entire life hidden inside coral crevices and rocky reef holes — emerging only briefly at night to hunt, making it one of the most poorly studied fish in Philippine reefs.',
    category: 'marine'
  },

  'cuyo-coralbrotula': {
    name: 'Cuyo Coralbrotula',
    latin: 'Diancistrus cuyoensis',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Cuyo Islands · Palawan',
    description: 'A tiny, secretive fish found only in the coral reefs surrounding the Cuyo Islands of Palawan — one of the Philippines\' least-visited island groups. It lives entirely within living coral heads, sheltering inside coral structures and feeding on tiny invertebrates without ever venturing into open water.',
    funfact: 'Lives entirely within living coral heads — sheltering inside the coral structure and feeding on tiny invertebrates without ever needing to venture into open water.',
    category: 'marine'
  },

  'philippine-chimaera': {
    name: 'Philippine Chimaera',
    latin: 'Hydrolagus philippinensis',
    tag: 'Marine · Deep Sea',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Sea · Deep Water',
    description: 'A ghostly deep-sea fish from a lineage older than the dinosaurs. Found in the abyssal depths of Philippine waters, it belongs to a group of cartilaginous fishes (Chimaeriformes) that diverged from sharks over 400 million years ago. Almost entirely unknown to science.',
    funfact: 'Lives in the deep sea where no sunlight penetrates — using electrosensory pores on its snout to detect the faint electrical fields of prey buried in the seabed. Its lineage is unchanged for over 400 million years.',
    category: 'marine'
  },

  'short-horn-triangular-batfish': {
    name: 'Short-horn Triangular Batfish',
    latin: 'Halieutaea brevicornis',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Sea',
    description: 'A bizarre, flattened fish that walks along the seabed on modified fins rather than swimming. Its triangular, armoured body and lure-tipped snout make it one of the most unusual fish in Philippine waters. Found on the seafloor at moderate depths, it ambushes small invertebrates drawn to its bioluminescent lure.',
    funfact: 'Walks along the seabed using its modified pectoral fins as legs — one of the few fish in the world that literally walks rather than swims.',
    category: 'marine'
  },

  'onefin-catshark': {
    name: 'Onefin Catshark',
    latin: 'Apristurus investigatoris',
    tag: 'Marine · Shark',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Sea · Deep Water',
    description: 'A small, deep-water catshark found in the depths of the Philippine Sea. Rarely encountered and poorly understood, it is named for an unusual asymmetry — one of its two dorsal fins is dramatically reduced. Little is known about its diet, behaviour, or distribution within Philippine waters.',
    funfact: 'Named for an unusual anatomical feature — one of its two dorsal fins is dramatically reduced, giving it a distinctive silhouette unlike any other shark found in Philippine waters.',
    category: 'marine'
  },

  'brackish-crabs': {
    name: 'Brackish Crabs',
    latin: 'Varuna spp. / Scylla spp.',
    tag: 'Marine · Crustacean',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Coast · Widespread',
    description: 'A group of crabs inhabiting the mangrove fringes and estuaries of the Philippine archipelago — ecosystems that filter coastal waters, serve as nurseries for fish, and protect shorelines from typhoons. Mud crabs (Scylla) are among the most economically valuable crustaceans in Philippine aquaculture.',
    funfact: 'Can survive in waters that shift from almost freshwater to nearly full seawater within a single tide cycle — tolerating salt concentrations that would kill most marine or freshwater animals within hours.',
    category: 'marine'
  },

  'sinarapan': {
    name: 'Sinarapan',
    latin: 'Mistichthys luzonensis',
    tag: 'Freshwater · Fish',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Lake Buhi · Camarines Sur · Bicol',
    description: 'The world\'s smallest commercial fish — found only in Lake Buhi, Camarines Sur, Luzon. A cultural icon of the Bicol region, critically threatened by overfishing. So tiny that roughly 1,000 individuals weigh less than a gram — yet it has historically supported an entire lake fishery.',
    funfact: 'The world\'s smallest commercial fish — so tiny that roughly 1,000 individuals weigh less than a gram. Locals harvest them in ultra-fine nets and eat them whole. It exists nowhere else on Earth.',
    category: 'marine'
  },

  'thielles-anemonefish': {
    name: 'Thielle\'s Anemonefish',
    latin: 'Amphiprion thiellei',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Central Philippines',
    description: 'One of the world\'s rarest and least-known clownfish — found only in Philippine reef waters. Described from just a handful of specimens, almost nothing is known about its ecology, distribution, or population. Its relationship with specific host anemones remains unstudied.',
    funfact: 'One of the rarest clownfish in the world — found only in Philippine waters and known to science from just a handful of specimens. Even its host anemone species has not been confirmed.',
    category: 'marine'
  },

  'azure-damselfish': {
    name: 'Azure Damselfish',
    latin: 'Altrichthys azurelineatus',
    tag: 'Marine · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Batangas · Mindanao',
    description: 'A small, brilliantly coloured damselfish endemic to the reefs of the Philippines. One of the few damselfish species where both parents share equal responsibility for guarding the nest — an unusual arrangement in a family where male-only nest guarding is typical.',
    funfact: 'So territorial that it will charge fish many times its own size, including divers — forming small, tightly defended territories on coral rubble that it guards day and night.',
    category: 'marine'
  },

  'latigo-fairy-wrasse': {
    name: 'Latigo Fairy Wrasse',
    latin: 'Cirrhilabrus briangreenei',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Cebu · Mactan · Deep Reef',
    description: 'A dazzlingly coloured fairy wrasse discovered only recently in the deep reefs of the Philippines. Its vivid magenta and orange hues make it one of the most visually striking wrasses in the Indo-Pacific. Found in the mesophotic \'twilight zone\' between 40 and 70 metres — a depth range largely unexplored by science.',
    funfact: 'Only formally described in 2022 — discovered in the deep reef zone between 40–70 metres, a depth range often called the \'twilight zone\' that remains largely unexplored by scientists.',
    category: 'marine'
  },

  'magma-fairy-wrasse': {
    name: 'Magma Fairy Wrasse',
    latin: 'Cirrhilabrus shutmani',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Deep Reef',
    description: 'A brilliantly coloured wrasse found only in the deep Philippine reefs — its fiery red and orange body blazes through the dim water of the mesophotic zone. Formally described in 2020 from specimens collected from reefs deeper than 40 metres off Mindanao.',
    funfact: 'Gets its name from its fiery red coloration — which intensifies dramatically when males display to females or rivals. It was only scientifically described in 2020, from deep reefs off Mindanao.',
    category: 'marine'
  },

  'jaguar-dottyback': {
    name: 'Jaguar Dottyback',
    latin: 'Pseudochromis moorei',
    tag: 'Marine · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao · Philippine Reefs',
    description: 'A small but ferociously territorial reef fish endemic to Philippine waters. Its bold spotted pattern and aggressive disposition belie its tiny size. Like many dottybacks, it is a protogynous hermaphrodite — individuals can change sex depending on the social structure of the local reef.',
    funfact: 'So territorial that it defends a coral crevice against fish ten times its size. Males can change sex to female and back again depending on the social dynamics of the local reef.',
    category: 'marine'
  },

  'whitechin-surgeonfish': {
    name: 'Whitechin Surgeonfish',
    latin: 'Acanthurus albimento',
    tag: 'Marine · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'An endemic surgeonfish found grazing algae across Philippine coral reefs. As a key herbivore, it keeps reefs clean and free of algae overgrowth that would otherwise smother coral growth. One of many reef surgeonfish that perform an essential ecological function on Philippine reefs.',
    funfact: 'Uses the razor-sharp spine at the base of its tail — the \'scalpel\' that gives surgeonfish their name — as a defensive weapon so effective it can slice through fishing nets.',
    category: 'marine'
  },

  'philippine-flasher-wrasse': {
    name: 'Philippine Flasher Wrasse',
    latin: 'Paracheilinus carpenteri',
    tag: 'Marine · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Central Philippines · Coral Triangle',
    description: 'An endemic reef wrasse found on the reefs of the Philippines and nearby Indonesia. The male\'s electric-blue, orange, and red breeding colours are among the most vivid of any fish on the Coral Triangle. Its elaborate spawning display is one of the most spectacular sights on Philippine reefs.',
    funfact: 'During spawning displays, the male \'flashes\' — rapidly erecting elongated dorsal fin rays and firing bursts of intense colour as it spirals upward through the water column in a fraction of a second.',
    category: 'marine'
  },

  'philippine-nautilus': {
    name: 'Philippine Nautilus',
    latin: 'Nautilus pompilius',
    tag: 'Marine · Cephalopod',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Deep Reef · Widespread',
    description: 'A living fossil found in the deep reefs of the Philippines — its spiral shell and tentacled form virtually unchanged for 500 million years. Navigates the deep reef slope at night to feed, rising from depths below 300 metres to shallower waters. Heavily collected for its beautiful shell, reducing populations.',
    funfact: 'Survived virtually unchanged for 500 million years — outlasting the dinosaurs, three mass extinctions, and almost every major change in Earth\'s oceans.',
    category: 'marine'
  },

  'sulu-dragonfish': {
    name: 'Sulu Dragonfish',
    latin: 'Eustomias suluensis',
    tag: 'Marine · Deep Sea',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Sulu Sea · Deep Water',
    description: 'A bioluminescent deep-sea predator found only in the depths of the Sulu Sea — one of the deepest and most isolated bodies of water in the Philippines. Armed with long, fang-like teeth and photophore organs along its body that produce their own cold light in the permanent darkness of the deep sea.',
    funfact: 'Lives in permanent darkness over 200 metres deep — produces its own light through bioluminescent photophores along its body, using the glow to attract prey and communicate with others in the abyss.',
    category: 'marine'
  },

  // ── FRESHWATER ────────────────────────────────────────────────────────────

  'tawilis': {
    name: 'Tawilis',
    latin: 'Sardinella tawilis',
    tag: 'Freshwater · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Taal Lake · Batangas',
    description: 'The world\'s only freshwater sardine — found exclusively in Taal Lake, Batangas. A cultural and culinary icon of the Batangas region, now threatened by overfishing, water quality degradation, and periodic eruptions of the Taal Volcano that lies within the lake. It evolved from marine ancestors isolated when volcanic activity enclosed the lake from the sea.',
    funfact: 'Evolved from marine ancestors trapped when volcanic activity isolated Taal Lake from the sea thousands of years ago — adapting over millennia from saltwater to fully freshwater. The only freshwater sardine on Earth.',
    category: 'freshwater'
  },

  'luzon-ricefish': {
    name: 'Luzon Ricefish',
    latin: 'Oryzias luzonensis',
    tag: 'Freshwater · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A tiny endemic fish found in the shallow lakes, streams, and rice paddies of Luzon. One of several Philippine ricefish whose populations have declined sharply due to pesticide use in rice agriculture and habitat loss. An important experimental model organism in genetics and toxicology research.',
    funfact: 'Its life cycle is so perfectly synced with the Philippine wet season that its breeding peaks exactly when flooded paddies offer the most food and shelter — a co-evolution with Philippine rice agriculture.',
    category: 'freshwater'
  },

  'philippine-silver-perch': {
    name: 'Philippine Silver Perch',
    latin: 'Leiopotherapon plumbeus',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Visayas',
    description: 'Known locally as Ayungin — a beloved native perch of Philippine lakes and rivers, particularly Laguna de Bay. Once extremely common and an important part of local cuisine, it has been dramatically displaced by introduced tilapia and carp and is now increasingly difficult to find in many historical localities.',
    funfact: 'Once so abundant in Laguna de Bay that fishing communities harvested it alongside tilapia. Today, invasive fish species have overwhelmed it in most of its historical habitats — a quiet ecological tragedy.',
    category: 'freshwater'
  },

  'mindanao-rasbora': {
    name: 'Mindanao Rasbora',
    latin: 'Rasbora philippina',
    tag: 'Freshwater · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Mindanao',
    description: 'A small, schooling fish endemic to the highland streams of Mindanao. Its strict requirement for clean, fast-flowing, well-oxygenated water makes it a sensitive bio-indicator of stream health. Found in forest streams from 300 to 1,000 metres elevation — among the first species to disappear when highland deforestation causes siltation.',
    funfact: 'Its preference for clear, cool, well-oxygenated water makes it one of the first species to disappear when deforestation causes siltation of highland streams.',
    category: 'freshwater'
  },

  'luzon-river-pipefish': {
    name: 'Luzon River Pipefish',
    latin: 'Microphis pleurostictus',
    tag: 'Freshwater · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A freshwater relative of seahorses — found only in the rivers of Luzon. Slender, slow-moving, and cryptically coloured, it clings to aquatic vegetation in gentle river currents, hunting tiny invertebrates by pipette suction. Like all pipefishes, it is the male that broods the eggs.',
    funfact: 'Like its marine seahorse cousins, it is the male that carries and broods the eggs in a specialised pouch until they hatch — one of the few vertebrate species where males bear the reproductive burden.',
    category: 'freshwater'
  },

  'schoppes-barb': {
    name: 'Schoppe\'s Barb',
    latin: 'Cyclocheilichthys schoppeae',
    tag: 'Freshwater · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Palawan',
    description: 'A small, recently described cyprinid barb found in the freshwater rivers of Palawan and Luzon. One of several endemic freshwater fish discovered in the Philippines in the 21st century — highlighting how much freshwater biodiversity remains undocumented across the archipelago.',
    funfact: 'Only scientifically described in 2004 — found in a single river system in Palawan. Its discovery highlighted how many new fish species remain undescribed in Philippine freshwater habitats.',
    category: 'freshwater'
  },

  'palawan-blue-clawed-freshwater-crab': {
    name: 'Palawan Blue-clawed Freshwater Crab',
    latin: 'Insulamon palawanense',
    tag: 'Freshwater · Crustacean',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan',
    description: 'A stunning freshwater crab endemic to the mountain streams of Palawan, with brilliant electric-blue claws among the most vivid of any freshwater crustacean in Asia. Found only in fast-flowing, clear highland streams — it is entirely dependent on pristine Palawan forest for its survival.',
    funfact: 'Only described by science in 2012 — yet has probably existed in Palawan\'s forest streams for millions of years. Its vivid electric-blue claws became an instant conservation icon on social media when first photographed.',
    category: 'freshwater'
  },

  'giant-freshwater-prawn': {
    name: 'Giant Freshwater Prawn',
    latin: 'Macrobrachium rosenbergii',
    tag: 'Freshwater · Crustacean',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'The world\'s largest freshwater prawn — known in the Philippines as Ulang. Found in major rivers across Luzon, Mindanao, and the Visayas. An economically important aquaculture species farmed across the Philippines. Wild populations are important components of river food webs.',
    funfact: 'Can grow to 32 cm. Males develop two distinct types: one with massive blue claws for fighting dominant rivals, and one with small orange claws for sneaking past to mate. The sneakers outlive the fighters.',
    category: 'freshwater'
  },

  'giant-mottled-eel': {
    name: 'Giant Mottled Eel',
    latin: 'Anguilla marmorata',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'The world\'s largest freshwater eel — reaching over 1.8 metres. Found in rivers and lakes across the Philippine archipelago, it can travel overland on wet nights to move between water bodies. A catadromous species — born in the sea, it migrates to freshwater rivers to grow for up to 30 years before returning to spawn and die.',
    funfact: 'Migrates over 4,000 kilometres to spawn in the deep ocean — and then dies. Its larvae drift back to freshwater on ocean currents, growing for up to 30 years before making the final journey back to sea.',
    category: 'freshwater'
  },

  'philippine-stream-goby': {
    name: 'Philippine Stream Goby',
    latin: 'Stiphodon elegans',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao',
    description: 'A small, spectacularly coloured goby of Philippine highland streams. Males develop brilliant blue-green breeding colouration during the dry season — among the most vivid colours of any freshwater fish in the Philippines. Found only in clear, swift mountain streams with rocky beds.',
    funfact: 'During breeding season, males transform from pale grey to vivid electric blue-green almost overnight — a colour change so dramatic that early collectors thought they had found two different species.',
    category: 'freshwater'
  },

  'philippine-mudskipper': {
    name: 'Philippine Mudskipper',
    latin: 'Periophthalmus gracilis',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Philippine Mangroves · Widespread',
    description: 'A remarkable fish that spends much of its life out of water — walking on its pectoral fins across mangrove mud flats and climbing mangrove roots above the waterline. An amphibious fish that breathes through its moist skin and keeps air in enlarged gill chambers when on land.',
    funfact: 'Can spend more time out of water than in it — breathing through its moist skin and holding air in its gill chambers. It can even climb mangrove roots using its pectoral fins as arms.',
    category: 'freshwater'
  },

  'lake-lanao-barb': {
    name: 'Lake Lanao Barb',
    latin: 'Barbodes lanaoensis',
    tag: 'Freshwater · Fish',
    status: 'Critically Endangered',
    statusCode: 'CR',
    image: 'image/Photo coming soon.jpg',
    island: 'Lake Lanao · Mindanao',
    description: 'One of the last survivors of Lake Lanao\'s extraordinary freshwater fish radiation — a lake once famous for 18 endemic cyprinid species found nowhere else on Earth. The introduction of invasive carp and snakeheads in the 1960s caused the collapse of this unique ecosystem. Most Lanao endemics are now extinct.',
    funfact: 'Lake Lanao once harboured 18 species of endemic cyprinid fish found nowhere else on Earth. Today, most are extinct or critically endangered — one of the most severe freshwater mass extinctions in recorded history.',
    category: 'freshwater'
  },

  'philippine-snakehead': {
    name: 'Philippine Snakehead',
    latin: 'Channa striata',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A powerful predatory fish capable of breathing air and crossing land between water bodies. Known locally as Dalag — one of the most widespread and culturally important freshwater fish in the Philippines. Prized for its firm flesh and cultural significance in folk medicine across the archipelago.',
    funfact: 'Can cross dry land — using a wriggling motion and its pectoral fins, it can travel up to 400 metres over wet ground to reach a new water body. It can survive out of water for up to four days.',
    category: 'freshwater'
  },

  'philippine-glass-goby': {
    name: 'Philippine Glass Goby',
    latin: 'Gobiopterus lacustris',
    tag: 'Freshwater · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Philippine Lakes',
    description: 'A tiny, completely transparent goby found in Philippine lakes and coastal lagoons — its internal organs fully visible through its crystal-clear body. So small and transparent that it is often harvested together with Sinarapan and cooked whole. Known locally as Dulong.',
    funfact: 'Completely transparent — you can see its beating heart, spine, and internal organs through its body wall. Despite this seeming vulnerability, its transparency provides perfect camouflage in open water.',
    category: 'freshwater'
  },

  'palawan-barb': {
    name: 'Palawan Barb',
    latin: 'Barbodes palawanensis',
    tag: 'Freshwater · Fish',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan',
    description: 'A small, colourful barb endemic to the freshwater rivers of Palawan. Found in clear, fast-flowing forest streams of Palawan\'s mountain interior. One of several cyprinid fish endemic to Palawan\'s river systems — rivers that have been geographically isolated for millions of years, developing their own distinct fish fauna.',
    funfact: 'Palawan\'s freshwater streams have been so geographically isolated for millions of years that they have developed their own unique fish communities — evolving independently from mainland Southeast Asia.',
    category: 'freshwater'
  },

  'philippine-freshwater-shrimp': {
    name: 'Philippine Freshwater Shrimp',
    latin: 'Caridina philippinensis',
    tag: 'Freshwater · Crustacean',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Widespread',
    description: 'A tiny, transparent freshwater shrimp endemic to Philippine highland streams. Several distinct species inhabit the mountain rivers of Luzon, Mindanao, and Palawan — each river system sometimes harbouring its own genetically distinct population isolated for thousands of years.',
    funfact: 'Philippine freshwater shrimp of this genus trace their lineages back over 50 million years to when the Philippine islands first emerged from the sea.',
    category: 'freshwater'
  },

  'philippine-stone-loach': {
    name: 'Philippine Stone Loach',
    latin: 'Homaloptera orthogoniata',
    tag: 'Freshwater · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Mindanao',
    description: 'A small, flattened loach found in the swift mountain streams of the Philippines. Its entire body shape — depressed head, streamlined flanks, sucker-like mouth — is an adaptation for life on the bottom of fast-flowing rapids where most other fish cannot survive.',
    funfact: 'Uses its sucker-like mouth to anchor itself to rocks in the most turbulent rapids — feeding on algae and diatoms that coat submerged surfaces, exploiting a food source inaccessible to most stream fish.',
    category: 'freshwater'
  },

  'palawan-freshwater-stingray': {
    name: 'Palawan Freshwater Stingray',
    latin: 'Himantura chaophraya',
    tag: 'Freshwater · Ray',
    status: 'Endangered',
    statusCode: 'EN',
    image: 'image/Photo coming soon.jpg',
    island: 'Palawan',
    description: 'A large stingray found hundreds of kilometres inland in the major river systems of Palawan — one of the few rays fully adapted to freshwater. Among the largest freshwater fish in the Philippines, it is rarely seen and almost entirely unstudied in its Philippine river habitat.',
    funfact: 'Normally an ocean creature — it has adapted over millennia to life in freshwater, losing the ability to osmoregulate in salt water. Found hundreds of kilometres inland in Palawan river systems.',
    category: 'freshwater'
  },

  'philippine-freshwater-needlefish': {
    name: 'Philippine Freshwater Needlefish',
    latin: 'Xenentodon cancila',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A slender, surface-dwelling predator found in Philippine rivers and lakes — its elongated beak lined with tiny, sharp teeth for seizing small fish at the water surface. Capable of explosive, full-body leaps out of the water when alarmed — a behaviour that has caused injuries to fishermen.',
    funfact: 'Can leap entirely out of the water when alarmed — reaching heights of up to 60 cm above the surface. Its needle-shaped beak has caused fatal injuries to fishermen in Southeast Asia.',
    category: 'freshwater'
  },

  'philippine-mountain-goby': {
    name: 'Philippine Mountain Goby',
    latin: 'Sicyopus discordipinnis',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A small goby found in the fast-flowing mountain streams and waterfalls of the Philippines. Its suction-disc (formed from fused pelvic fins) allows it to cling to wet vertical rock faces and ascend waterfalls that no other fish could scale — reaching pristine stream habitats upstream that remain free of introduced species.',
    funfact: 'Can climb waterfalls using a specialised suction disc formed by its fused pelvic fins — allowing it to ascend near-vertical wet rock faces against powerful falls.',
    category: 'freshwater'
  },

  'philippine-forest-stream-crab': {
    name: 'Philippine Forest Stream Crab',
    latin: 'Sundathelphusa spp.',
    tag: 'Freshwater · Crustacean',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippine Mountains',
    description: 'A diverse group of freshwater crabs endemic to Philippine mountain forest streams. Each river system — sometimes each valley — harbours its own genetically distinct species. The Philippine freshwater crab fauna is one of the most species-rich and geographically fragmented in the world.',
    funfact: 'Different river systems on the same mountain harbour genetically distinct populations — isolated for tens of thousands of years. The Philippines has more endemic freshwater crab species per land area than almost anywhere on Earth.',
    category: 'freshwater'
  },

  'philippine-glassperch': {
    name: 'Philippine Glassperch',
    latin: 'Ambassis miops',
    tag: 'Freshwater · Fish',
    status: 'Least Concern',
    statusCode: 'LC',
    image: 'image/Photo coming soon.jpg',
    island: 'Widespread Philippines',
    description: 'A small, semi-transparent perch found in Philippine rivers, lakes, and estuaries. A key prey species for larger fish and waterbirds across the entire archipelago. Its schools move as a single organism, each fish responding to its neighbours in milliseconds to create a fluid, evasive mass that confuses predators.',
    funfact: 'Each fish in a school responds to its neighbours in less than a tenth of a second, creating a rippling, silvery confusion that makes it nearly impossible for a predator to target a single individual.',
    category: 'freshwater'
  },

  'lizard-goby': {
    name: 'Lizard Goby',
    latin: 'Rhinogobius philippinus',
    tag: 'Freshwater · Fish',
    status: 'Data Deficient',
    statusCode: 'DD',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon',
    description: 'A small, bottom-dwelling goby endemic to Philippine freshwater streams. Named for its lizard-like resting posture — it perches motionless on rocks and submerged wood, propped on its pectoral fins like a basking lizard, waiting for invertebrates to pass.',
    funfact: 'Earns its name from the way it perches motionless on rocks and submerged logs — propped up on its pectoral fins exactly like a basking lizard — before darting after passing invertebrates with explosive speed.',
    category: 'freshwater'
  },

  'philippine-pond-turtle': {
    name: 'Philippine Pond Turtle',
    latin: 'Siebenrockiella crassicollis',
    tag: 'Freshwater · Turtle',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Luzon · Palawan',
    description: 'A small, dark freshwater turtle found in the lowland rivers, lakes, and swamps of Luzon and Mindanao. Once extremely common in Laguna de Bay, its populations have collapsed due to overharvesting for food and the live animal trade, and severe degradation of lowland wetland habitats.',
    funfact: 'Once so abundant in Laguna de Bay that fishing communities harvested it for food alongside fish. Today it is one of the most threatened freshwater turtles in Southeast Asia.',
    category: 'freshwater'
  },

  // ── ADDITIONAL (province wildlife, not on main category pages) ───────────

  'giant-clam': {
    name: 'Giant Clam',
    latin: 'Tridacna gigas',
    tag: 'Marine · Mollusc',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Tubbataha · Palawan · Widespread',
    description: 'The world\'s largest bivalve mollusc — reaching over 1.2 metres across and weighing up to 250 kg. Found on Philippine coral reefs, with an active mariculture conservation colony in Bolinao, Pangasinan, managed by the UP Marine Science Institute. Severely depleted by collection for food and the ornamental shell trade.',
    funfact: 'Harbours symbiotic algae (zooxanthellae) in their mantle tissue — the vivid colours visible in living clams are produced by these algae, which photosynthesize and supply up to 70% of the clam\'s nutritional needs.',
    category: 'marine'
  },

  'lake-taal-sea-snake': {
    name: 'Lake Taal Sea Snake',
    latin: 'Hydrophis semperi',
    tag: 'Reptile · Snake',
    status: 'Vulnerable',
    statusCode: 'VU',
    image: 'image/Photo coming soon.jpg',
    island: 'Taal Lake · Batangas',
    description: 'Fully freshwater-adapted sea snake endemic to Taal Lake — one of only two truly landlocked sea snake populations on Earth. Isolated within Taal\'s volcanic caldera after its marine connection closed thousands of years ago, it adapted completely to fresh water over geological time.',
    funfact: 'One of the world\'s only sea snakes to have permanently colonised a freshwater lake — isolated within Taal\'s caldera after its marine connection closed, it adapted into a fully freshwater reptile over thousands of years.',
    category: 'reptiles'
  }

};
