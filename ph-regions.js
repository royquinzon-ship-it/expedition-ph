/* ph-regions.js — Philippine Administrative Regions GeoJSON
   Simplified polygon boundaries for Expedition PH interactive map.
   Coordinates: [longitude, latitude] (GeoJSON standard)
*/

var PH_REGIONS_DATA = {
  type: "FeatureCollection",
  features: [

    /* ══════════════════ LUZON ══════════════════ */

    {
      type: "Feature",
      properties: {
        key: "region1", name: "Ilocos Region", roman: "Region I",
        island_group: "luzon",
        provinces: "Ilocos Norte · Ilocos Sur · La Union · Pangasinan",
        keywords: ["luzon","widespread"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [120.25,18.50],[120.85,18.45],[120.90,17.50],
        [120.82,16.52],[120.18,15.90],[119.85,16.18],
        [119.90,17.00],[120.25,18.50]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region2", name: "Cagayan Valley", roman: "Region II",
        island_group: "luzon",
        provinces: "Batanes · Cagayan · Isabela · Nueva Vizcaya · Quirino",
        keywords: ["luzon","widespread","cagayan","batanes"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        [[[121.05,18.65],[122.38,18.18],[122.62,17.00],
          [122.28,16.52],[121.48,16.52],[121.05,17.00],[121.05,18.65]]],
        // Batanes islands
        [[[121.82,20.42],[121.98,20.42],[121.98,20.28],[121.82,20.28],[121.82,20.42]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "car", name: "Cordillera Administrative Region", roman: "CAR",
        island_group: "luzon",
        provinces: "Abra · Apayao · Benguet · Ifugao · Kalinga · Mountain Province",
        keywords: ["luzon","widespread","cordillera"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [120.55,18.18],[121.42,18.18],[121.42,16.52],
        [120.88,16.52],[120.55,17.00],[120.55,18.18]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region3", name: "Central Luzon", roman: "Region III",
        island_group: "luzon",
        provinces: "Aurora · Bataan · Bulacan · Nueva Ecija · Pampanga · Tarlac · Zambales",
        keywords: ["luzon","widespread"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [119.95,16.48],[121.95,16.48],[122.18,15.50],
        [121.52,14.90],[120.92,14.82],[120.62,15.00],
        [119.98,15.22],[119.95,16.48]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "ncr", name: "National Capital Region", roman: "NCR",
        island_group: "luzon",
        provinces: "Metro Manila",
        keywords: ["luzon","widespread"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [120.88,14.78],[121.22,14.78],[121.22,14.40],
        [120.88,14.40],[120.88,14.78]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region4a", name: "CALABARZON", roman: "Region IV-A",
        island_group: "luzon",
        provinces: "Cavite · Laguna · Batangas · Rizal · Quezon",
        keywords: ["luzon","widespread"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [120.62,15.00],[122.52,15.00],[122.60,13.80],
        [121.00,13.52],[120.62,14.00],[120.62,15.00]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region4b", name: "MIMAROPA", roman: "Region IV-B",
        island_group: "luzon",
        provinces: "Mindoro · Marinduque · Romblon · Palawan",
        keywords: ["luzon","palawan","widespread","mindoro","marinduque","calamian"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Mindoro
        [[[119.85,13.55],[121.32,13.52],[121.30,12.25],
          [120.28,12.05],[119.88,12.88],[119.85,13.55]]],
        // Marinduque
        [[[121.82,13.48],[122.08,13.55],[122.05,13.25],[121.82,13.22],[121.82,13.48]]],
        // Palawan (long diagonal island)
        [[[119.98,12.04],[119.52,11.58],[119.05,10.80],[118.55,10.00],
          [117.98,9.18],[117.68,8.48],[117.52,8.38],[117.82,8.58],
          [118.32,9.32],[118.88,10.12],[119.45,10.92],
          [119.88,11.60],[120.15,12.12],[119.98,12.04]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "region5", name: "Bicol Region", roman: "Region V",
        island_group: "luzon",
        provinces: "Albay · Camarines Norte · Camarines Sur · Catanduanes · Masbate · Sorsogon",
        keywords: ["luzon","widespread","masbate"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Bicol peninsula
        [[[122.82,14.28],[124.02,13.92],[124.52,13.10],
          [123.82,12.70],[122.85,12.82],[122.52,13.52],[122.82,14.28]]],
        // Masbate
        [[[123.28,12.38],[123.72,12.48],[123.78,11.98],[123.35,11.85],[123.28,12.38]]],
        // Catanduanes
        [[[124.12,13.78],[124.42,13.82],[124.45,13.35],[124.12,13.38],[124.12,13.78]]]
      ]}
    },

    /* ══════════════════ VISAYAS ══════════════════ */

    {
      type: "Feature",
      properties: {
        key: "region6", name: "Western Visayas", roman: "Region VI",
        island_group: "visayas",
        provinces: "Aklan · Antique · Capiz · Guimaras · Iloilo · Negros Occidental",
        keywords: ["panay","negros","widespread","visayas"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Panay
        [[[121.90,11.70],[123.08,11.88],[123.12,11.28],
          [122.42,10.62],[121.98,10.95],[121.88,11.42],[121.90,11.70]]],
        // Negros Occidental
        [[[122.42,10.62],[123.12,11.28],[123.15,10.80],
          [122.88,9.92],[122.28,9.18],[122.12,9.78],[122.42,10.62]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "region7", name: "Central Visayas", roman: "Region VII",
        island_group: "visayas",
        provinces: "Bohol · Cebu · Negros Oriental · Siquijor",
        keywords: ["cebu","bohol","negros","visayas","widespread","siquijor"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Cebu
        [[[123.80,11.22],[124.02,11.15],[123.98,9.85],
          [123.18,10.18],[123.52,10.80],[123.80,11.22]]],
        // Bohol
        [[[123.88,10.18],[124.82,10.18],[124.82,9.55],[123.88,9.55],[123.88,10.18]]],
        // Negros Oriental
        [[[123.12,11.28],[123.48,11.18],[123.22,9.85],
          [122.88,9.92],[123.15,10.80],[123.12,11.28]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "region8", name: "Eastern Visayas", roman: "Region VIII",
        island_group: "visayas",
        provinces: "Biliran · Eastern Samar · Leyte · Northern Samar · Southern Leyte · Western Samar",
        keywords: ["leyte","samar","visayas","widespread"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Leyte
        [[[124.42,11.22],[124.85,11.12],[125.15,10.35],
          [125.08,9.90],[124.78,9.75],[124.38,10.22],[124.25,10.82],[124.42,11.22]]],
        // Samar
        [[[124.18,12.55],[124.58,12.65],[125.52,12.02],
          [125.28,11.28],[124.65,11.08],[124.08,11.58],[123.95,12.12],[124.18,12.55]]]
      ]}
    },

    /* ══════════════════ MINDANAO ══════════════════ */

    {
      type: "Feature",
      properties: {
        key: "region9", name: "Zamboanga Peninsula", roman: "Region IX",
        island_group: "mindanao",
        provinces: "Zamboanga del Norte · Zamboanga del Sur · Zamboanga Sibugay",
        keywords: ["mindanao","widespread","zamboanga","basilan","sulu"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        [[[122.00,7.28],[121.98,6.82],[121.72,7.12],
          [122.30,8.55],[123.28,9.70],[123.52,9.50],
          [123.32,8.45],[122.00,7.28]]],
        // Basilan
        [[[121.92,6.72],[122.18,6.82],[122.12,6.48],[121.92,6.42],[121.92,6.72]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "region10", name: "Northern Mindanao", roman: "Region X",
        island_group: "mindanao",
        provinces: "Bukidnon · Camiguin · Lanao del Norte · Misamis Occidental · Misamis Oriental",
        keywords: ["mindanao","widespread","camiguin"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        [[[123.52,9.50],[123.52,10.05],[125.52,9.80],
          [125.12,8.80],[124.50,8.42],[123.80,8.02],
          [123.30,8.02],[123.52,9.50]]],
        // Camiguin
        [[[124.65,9.08],[124.88,9.08],[124.88,9.28],[124.65,9.28],[124.65,9.08]]]
      ]}
    },

    {
      type: "Feature",
      properties: {
        key: "region11", name: "Davao Region", roman: "Region XI",
        island_group: "mindanao",
        provinces: "Davao de Oro · Davao del Norte · Davao del Sur · Davao Occidental · Davao Oriental",
        keywords: ["mindanao","widespread","davao"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [124.50,8.42],[125.12,8.80],[125.52,9.80],
        [126.72,9.80],[126.72,6.22],[126.22,6.22],
        [124.80,5.90],[124.80,6.95],[124.50,8.42]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region12", name: "SOCCSKSARGEN", roman: "Region XII",
        island_group: "mindanao",
        provinces: "Cotabato · Sarangani · South Cotabato · Sultan Kudarat",
        keywords: ["mindanao","widespread","cotabato","sarangani"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [122.98,7.28],[123.80,7.32],[124.80,6.95],
        [124.80,5.90],[123.78,5.90],[122.98,7.28]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "region13", name: "CARAGA", roman: "Region XIII",
        island_group: "mindanao",
        provinces: "Agusan del Norte · Agusan del Sur · Dinagat Islands · Surigao del Norte · Surigao del Sur",
        keywords: ["mindanao","widespread","surigao","agusan"]
      },
      geometry: { type: "Polygon", coordinates: [[
        [125.52,9.80],[125.32,10.52],[126.12,10.35],
        [126.72,9.80],[126.72,6.22],[124.80,6.95],
        [124.80,8.00],[125.12,8.80],[125.52,9.80]
      ]]}
    },

    {
      type: "Feature",
      properties: {
        key: "barmm", name: "Bangsamoro", roman: "BARMM",
        island_group: "mindanao",
        provinces: "Lanao del Sur · Maguindanao del Norte · Maguindanao del Sur · Sulu · Tawi-Tawi",
        keywords: ["mindanao","widespread","sulu","maguindanao","lanao"]
      },
      geometry: { type: "MultiPolygon", coordinates: [
        // Central Mindanao (Lanao del Sur + Maguindanao)
        [[[122.30,8.55],[123.30,8.02],[123.80,7.32],
          [122.98,7.28],[122.00,7.28],[122.30,8.55]]],
        // Sulu archipelago (simplified)
        [[[121.80,6.02],[122.22,6.12],[122.10,5.72],[121.68,5.62],[121.80,6.02]]],
        [[[121.12,5.88],[121.35,5.95],[121.25,5.65],[121.05,5.60],[121.12,5.88]]],
        // Tawi-Tawi
        [[[119.65,5.22],[120.08,5.22],[120.08,4.85],[119.65,4.85],[119.65,5.22]]]
      ]}
    }

  ]
};
