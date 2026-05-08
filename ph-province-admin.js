// Philippine Province Administrative Divisions
// Sources: DILG, PSA 2020 Census, NSCB
// municipalities = towns (does NOT include cities)
// cities = component cities only (NOT independent/highly urbanized cities)
// barangays = total barangay count including those in component cities
// Independent/Highly Urbanized Cities are excluded from province counts entirely.

var PH_PROVINCE_ADMIN = {

  // ── REGION I – Ilocos Region ─────────────────────────────────────────────
  // Ilocos Norte: HUC = Laoag City (excluded). Component cities: Batac City.
  "Ilocos Norte":     { municipalities: 21, cities: 1, barangays: 558 },
  // Ilocos Sur: HUC = Vigan City (excluded). Component cities: Candon City.
  "Ilocos Sur":       { municipalities: 32, cities: 1, barangays: 768 },
  // La Union: HUC = San Fernando City (excluded). Component cities: none.
  "La Union":         { municipalities: 19, cities: 0, barangays: 576 },
  // Pangasinan: HUC = Dagupan City, Urdaneta City (excluded).
  // Component cities: Alaminos, San Carlos, Urdaneta excluded (Urdaneta is ICC),
  // Alaminos = component, San Carlos = component.
  // Dagupan = ICC (excluded); Urdaneta = ICC (excluded).
  // Component cities: Alaminos City, San Carlos City.
  "Pangasinan":       { municipalities: 44, cities: 2, barangays: 1362 },

  // ── REGION II – Cagayan Valley ───────────────────────────────────────────
  // Batanes: no cities.
  "Batanes":          { municipalities: 6,  cities: 0, barangays: 29 },
  // Cagayan: HUC = Tuguegarao City (excluded).
  "Cagayan":          { municipalities: 28, cities: 0, barangays: 820 },
  // Isabela: HUC = Santiago City (excluded). Component cities: Cauayan City, Ilagan City.
  "Isabela":          { municipalities: 34, cities: 2, barangays: 1055 },
  // Nueva Vizcaya: no cities.
  "Nueva Vizcaya":    { municipalities: 15, cities: 0, barangays: 253 },
  // Quirino: no cities.
  "Quirino":          { municipalities: 6,  cities: 0, barangays: 132 },

  // ── CAR – Cordillera Administrative Region ───────────────────────────────
  // Abra: no cities. Bangued is a municipality (capital).
  "Abra":             { municipalities: 27, cities: 0, barangays: 303 },
  // Apayao: no cities.
  "Apayao":           { municipalities: 7,  cities: 0, barangays: 144 },
  // Benguet: HUC = Baguio City (excluded). Component cities: none (La Trinidad, Itogon, etc. are municipalities).
  "Benguet":          { municipalities: 13, cities: 0, barangays: 145 },
  // Ifugao: no cities.
  "Ifugao":           { municipalities: 11, cities: 0, barangays: 175 },
  // Kalinga: no cities.
  "Kalinga":          { municipalities: 7,  cities: 0, barangays: 201 },
  // Mountain Province: no cities.
  "Mountain Province":{ municipalities: 10, cities: 0, barangays: 149 },

  // ── REGION III – Central Luzon ───────────────────────────────────────────
  // Aurora: no cities.
  "Aurora":           { municipalities: 8,  cities: 0, barangays: 144 },
  // Bataan: no cities (Balanga is a city but component city).
  "Bataan":           { municipalities: 11, cities: 1, barangays: 237 },
  // Bulacan: HUC = Malolos City (provincial cap but ICC/HUC excluded? Malolos = component).
  // HUCs in Bulacan: none. Component cities: Malolos, Meycauayan, San Jose del Monte,
  // Baliwag, Calumpit — Meycauayan = ICC (excluded), San Jose del Monte = ICC (excluded).
  // Malolos = component, Baliwag = component.
  "Bulacan":          { municipalities: 21, cities: 2, barangays: 1019 },
  // Nueva Ecija: HUC = Cabanatuan, Palayan, San Jose (all ICC, excluded).
  // Component cities: Gapan City, Munoz City.
  "Nueva Ecija":      { municipalities: 27, cities: 2, barangays: 849 },
  // Pampanga: HUC = Angeles City, San Fernando City (both excluded).
  // Component cities: none remaining (Mabalacat = ICC excluded).
  "Pampanga":         { municipalities: 19, cities: 0, barangays: 538 },
  // Tarlac: HUC = Tarlac City (excluded). No component cities.
  "Tarlac":           { municipalities: 17, cities: 0, barangays: 511 },
  // Zambales: HUC = Olongapo City (excluded). Component cities: none.
  "Zambales":         { municipalities: 13, cities: 0, barangays: 237 },

  // ── REGION IV-A – CALABARZON ─────────────────────────────────────────────
  // Batangas: HUC = Batangas City, Lipa City (both excluded).
  // Component cities: Tanauan City, Sto. Tomas City.
  "Batangas":         { municipalities: 31, cities: 2, barangays: 1078 },
  // Cavite: HUC = Cavite City, Tagaytay City, Trece Martires City, Dasmarinas,
  //   Bacoor, Imus (all excluded).
  // Component cities: Gen. Trias City, Carmona City.
  "Cavite":           { municipalities: 17, cities: 2, barangays: 829 },
  // Laguna: HUC = San Pablo City (excluded). Component cities: Binan, Cabuyao, Calamba,
  //   San Pedro, Santa Rosa — Binan, Cabuyao, Calamba, San Pedro, Santa Rosa = ICC/HUC excluded?
  // Calamba = HUC (excluded); Binan = ICC (excluded); Santa Rosa = ICC (excluded);
  // San Pedro = ICC (excluded); Cabuyao = ICC (excluded).
  // No component cities remaining.
  "Laguna":           { municipalities: 24, cities: 0, barangays: 674 },
  // Quezon: HUC = Lucena City (excluded). Component cities: Tayabas City.
  "Quezon":           { municipalities: 39, cities: 1, barangays: 1243 },
  // Rizal: HUC = Antipolo City (excluded). No component cities.
  "Rizal":            { municipalities: 13, cities: 0, barangays: 186 },

  // ── REGION IV-B – MIMAROPA ───────────────────────────────────────────────
  // Marinduque: no cities.
  "Marinduque":       { municipalities: 6,  cities: 0, barangays: 218 },
  // Occidental Mindoro: no cities.
  "Occidental Mindoro":{ municipalities: 11, cities: 0, barangays: 213 },
  // Oriental Mindoro: HUC = Calapan City (excluded). No component cities.
  "Oriental Mindoro": { municipalities: 14, cities: 0, barangays: 426 },
  // Palawan: HUC = Puerto Princesa City (excluded). No component cities.
  "Palawan":          { municipalities: 23, cities: 0, barangays: 432 },
  // Romblon: no cities.
  "Romblon":          { municipalities: 17, cities: 0, barangays: 219 },

  // ── REGION V – Bicol Region ──────────────────────────────────────────────
  // Albay: HUC = Legazpi City, Ligao City (Ligao = component), Tabaco City (component).
  // Legazpi = HUC (excluded). Component cities: Ligao City, Tabaco City.
  "Albay":            { municipalities: 15, cities: 2, barangays: 720 },
  // Camarines Norte: Component cities: Daet (municipality — capital). No cities.
  "Camarines Norte":  { municipalities: 12, cities: 0, barangays: 282 },
  // Camarines Sur: HUC = Naga City (excluded). Component cities: Iriga City.
  "Camarines Sur":    { municipalities: 35, cities: 1, barangays: 1063 },
  // Catanduanes: no cities.
  "Catanduanes":      { municipalities: 11, cities: 0, barangays: 315 },
  // Masbate: Component cities: Masbate City.
  "Masbate":          { municipalities: 20, cities: 1, barangays: 549 },
  // Sorsogon: Component cities: Sorsogon City.
  "Sorsogon":         { municipalities: 14, cities: 1, barangays: 541 },

  // ── REGION VI – Western Visayas ──────────────────────────────────────────
  // Aklan: Component cities: none (Kalibo is a municipality).
  "Aklan":            { municipalities: 17, cities: 0, barangays: 327 },
  // Antique: Component cities: none (San Jose de Buenavista is a municipality).
  "Antique":          { municipalities: 18, cities: 0, barangays: 590 },
  // Capiz: Component cities: Roxas City.
  "Capiz":            { municipalities: 16, cities: 1, barangays: 473 },
  // Guimaras: no cities.
  "Guimaras":         { municipalities: 5,  cities: 0, barangays: 98 },
  // Iloilo: HUC = Iloilo City (excluded). Component cities: none.
  "Iloilo":           { municipalities: 42, cities: 0, barangays: 1901 },
  // Negros Occidental: HUC = Bacolod City (excluded). Component cities: Bago, Cadiz,
  //   Himamaylan, Kabankalan, La Carlota, Sagay, San Carlos, Silay, Sipalay, Talisay, Victorias.
  "Negros Occidental":{ municipalities: 19, cities: 11, barangays: 1213 },

  // ── REGION VII – Central Visayas ─────────────────────────────────────────
  // Bohol: Component cities: Tagbilaran City (ICC? — Tagbilaran is ICC, excluded).
  // No component cities.
  "Bohol":            { municipalities: 47, cities: 0, barangays: 1109 },
  // Cebu: HUC = Cebu City, Lapu-Lapu City, Mandaue City (all excluded).
  // Component cities: Bogo, Carcar, Danao, Naga, Talisay, Toledo.
  "Cebu":             { municipalities: 44, cities: 6, barangays: 1170 },
  // Negros Oriental: HUC = Dumaguete City (excluded). Component cities: Bais, Bayawan,
  //   Canlaon, Guihulngan, Tanjay.
  "Negros Oriental":  { municipalities: 19, cities: 5, barangays: 557 },
  // Siquijor: no cities.
  "Siquijor":         { municipalities: 6,  cities: 0, barangays: 134 },

  // ── REGION VIII – Eastern Visayas ───────────────────────────────────────
  // Biliran: no cities.
  "Biliran":          { municipalities: 8,  cities: 0, barangays: 132 },
  // Eastern Samar: no cities.
  "Eastern Samar":    { municipalities: 22, cities: 0, barangays: 597 },
  // Leyte: HUC = Tacloban City (excluded). Component cities: Baybay City, Ormoc City.
  // Ormoc = ICC (excluded); Baybay = component.
  "Leyte":            { municipalities: 40, cities: 1, barangays: 1641 },
  // Northern Samar: Component cities: none.
  "Northern Samar":   { municipalities: 24, cities: 0, barangays: 595 },
  // Samar (Western Samar): Component cities: Calbayog City, Catbalogan City.
  // Catbalogan = ICC (excluded); Calbayog = ICC (excluded).
  "Samar":            { municipalities: 26, cities: 0, barangays: 1038 },
  // Southern Leyte: Component cities: none (Maasin is a component city).
  "Southern Leyte":   { municipalities: 18, cities: 1, barangays: 530 },

  // ── REGION IX – Zamboanga Peninsula ─────────────────────────────────────
  // Zamboanga del Norte: HUC = Dipolog City (excluded). Component cities: Dapitan City.
  "Zamboanga del Norte":{ municipalities: 25, cities: 1, barangays: 690 },
  // Zamboanga del Sur: HUC = Zamboanga City (excluded). Component cities: Pagadian City.
  "Zamboanga del Sur":  { municipalities: 26, cities: 1, barangays: 972 },
  // Zamboanga Sibugay: Component cities: Ipil (municipality — capital). No cities.
  "Zamboanga Sibugay":  { municipalities: 16, cities: 0, barangays: 389 },

  // ── REGION X – Northern Mindanao ────────────────────────────────────────
  // Bukidnon: Component cities: Malaybalay City, Valencia City.
  "Bukidnon":         { municipalities: 20, cities: 2, barangays: 464 },
  // Camiguin: no cities.
  "Camiguin":         { municipalities: 5,  cities: 0, barangays: 60 },
  // Lanao del Norte: HUC = Iligan City (excluded). Component cities: none.
  "Lanao del Norte":  { municipalities: 21, cities: 0, barangays: 503 },
  // Misamis Occidental: Component cities: Oroquieta City, Ozamiz City, Tangub City.
  "Misamis Occidental":{ municipalities: 14, cities: 3, barangays: 476 },
  // Misamis Oriental: HUC = Cagayan de Oro (excluded). Component cities: El Salvador, Gingoog.
  "Misamis Oriental": { municipalities: 24, cities: 2, barangays: 487 },

  // ── REGION XI – Davao Region ────────────────────────────────────────────
  // Davao de Oro (formerly Compostela Valley): no cities.
  "Davao de Oro":     { municipalities: 11, cities: 0, barangays: 256 },
  // Davao del Norte: HUC = Davao City (excluded — Davao City is in Davao del Sur geographically
  //   but is an independent HUC). Component cities: Panabo City, Samal (Island Garden City of).
  //   Tagum City = ICC (excluded). Panabo = component. Island Garden City of Samal = component.
  "Davao del Norte":  { municipalities: 8,  cities: 2, barangays: 310 },
  // Davao del Sur: HUC = Davao City (excluded). Component cities: Digos City.
  "Davao del Sur":    { municipalities: 10, cities: 1, barangays: 240 },
  // Davao Occidental: no cities.
  "Davao Occidental": { municipalities: 5,  cities: 0, barangays: 105 },
  // Davao Oriental: Component cities: Mati City.
  "Davao Oriental":   { municipalities: 10, cities: 1, barangays: 183 },

  // ── REGION XII – SOCCSKSARGEN ───────────────────────────────────────────
  // Cotabato (North Cotabato): HUC = Kidapawan City (excluded). Component cities: none.
  "Cotabato":         { municipalities: 17, cities: 0, barangays: 509 },
  // Sarangani: Component cities: none (General Santos is a separate HUC in South Cotabato).
  "Sarangani":        { municipalities: 7,  cities: 0, barangays: 199 },
  // South Cotabato: HUC = General Santos City (excluded). Component cities: Koronadal City.
  "South Cotabato":   { municipalities: 10, cities: 1, barangays: 333 },
  // Sultan Kudarat: Component cities: Tacurong City.
  "Sultan Kudarat":   { municipalities: 11, cities: 1, barangays: 249 },

  // ── REGION XIII – Caraga ─────────────────────────────────────────────────
  // Agusan del Norte: HUC = Butuan City (excluded). Component cities: Cabadbaran City.
  "Agusan del Norte": { municipalities: 10, cities: 1, barangays: 253 },
  // Agusan del Sur: Component cities: Bayugan City.
  "Agusan del Sur":   { municipalities: 13, cities: 1, barangays: 325 },
  // Dinagat Islands: no cities.
  "Dinagat Islands":  { municipalities: 7,  cities: 0, barangays: 100 },
  // Surigao del Norte: HUC = Surigao City (excluded). Component cities: none.
  "Surigao del Norte":{ municipalities: 22, cities: 0, barangays: 577 },
  // Surigao del Sur: Component cities: Bislig City, Tandag City.
  "Surigao del Sur":  { municipalities: 17, cities: 2, barangays: 444 },

  // ── BARMM – Bangsamoro Autonomous Region in Muslim Mindanao ─────────────
  // Basilan: HUC = Isabela City (excluded). No component cities.
  "Basilan":          { municipalities: 11, cities: 0, barangays: 235 },
  // Lanao del Sur: HUC = Marawi City (excluded). No component cities.
  "Lanao del Sur":    { municipalities: 39, cities: 0, barangays: 1159 },
  // Maguindanao del Norte: (created 2022 from Maguindanao split). Component cities: Cotabato City
  //   is an ICC (excluded, it is geographically in Maguindanao but independent).
  //   No component cities.
  "Maguindanao del Norte":{ municipalities: 17, cities: 0, barangays: 505 },
  // Maguindanao del Sur: (created 2022 from Maguindanao split).
  "Maguindanao del Sur":  { municipalities: 19, cities: 0, barangays: 504 },
  // Sulu: no cities.
  "Sulu":             { municipalities: 19, cities: 0, barangays: 410 },
  // Tawi-Tawi: no cities.
  "Tawi-Tawi":        { municipalities: 11, cities: 0, barangays: 204 }

};
