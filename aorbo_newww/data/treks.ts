import { ReactNode } from "react";
import { treks as TREKS } from "../data/treks";



// Define Trek type
export interface Trek {
    [x: string]: ReactNode;
    id: string;
    name: string;
    state: string;
    imageUrl: string;
    hero_image: string;
    duration_days: string;
    price_start: number;
    currency: string;
    operating_days: string;
    tags: string[];
    operators?: string[];
    short_desc: string;
    Trek_Points?: string[];
  Activites?: string[];
  Related_Treks?: string[];
}

// TREK LIST WITH SHORT DESCRIPTION
export const treks: Trek[] = [
 {
   id: "coorg-chikkamagaluru",
   name: "Coorg & Chikkamagaluru",
   state: "Karnataka",
   imageUrl: "/assets/_/assets/Coorg + Chikkamagaluru.jpg.png",
   hero_image: "/assets/_/assets/Coorg + Chikkamagaluru.jpg.png",
   duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
   price_start: 6399,
   currency: "INR",
   operating_days: "Wed, Thu, Fri & Sat",
   tags: ["weekend", "nature", "hills"],
   operators: [
     "CUTE Voyages",
     "Sparrow Adventures",
     "AT Adventure and Travels",
     "Beyond Dream Destination"
   ],
   short_desc: "Wake up to mist-covered valleys, endless coffee plantations, and the scent of rain-soaked earth — that’s Coorg and Chikkamagaluru, the twin jewels of Karnataka’s Western Ghats. This journey takes you through rolling hills, forest trails, and hidden waterfalls where every turn feels like a postcard. Whether you’re trekking through lush estates, chasing sunrise from Mullayanagiri Peak, or sipping freshly brewed coffee under drifting clouds, this experience captures the soul of South India’s hill country.",
   Trek_Points: [
     "Mullayanagiri Peak",
     "Hebbe Falls",
     "Baba Budangiri",
     "Raja’s Seat",
     "Abbey Falls",
     "Dubare Elephant Camp"],
   Activites: [ "Trekking & camping",
  "Coffee estate walks",
  "Waterfall visits",
  "Off-road jeep rides",
  "River rafting",
  "Local food & culture"],
   Related_Treks: [
     "wayanad-coorg",
     "coorg+chikkamagaluru+mysuru",
     "chikkamagaluru",
     "coorg+chikkamagaluru+wayanad"]
 },
  {
    id: "Chikkamagaluru-karnataka",
    name: "Chikkamagaluru",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/chikkamangaluru.png",
    hero_image: "/assets/_/assets/chikkamangaluru.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 4199,
    currency: "INR",
    operating_days: "Thu, Fri & Sat",
    schedule_notes: "Weekend batches are common, especially for the Mullayanagiri trek.",
    highlights: ["Peak Climbing", "Forest Trails", "Viewpoints", "Camping"],
    tags: ["mountain", "adventure", "weekend"],
    operators: ['CUTE voyages'],
    short_desc: "Lose yourself in the rolling hills of Coorg and the misty forests of Chikkamagaluru — where every sunrise smells of coffee and every sunset paints gold over emerald valleys. Trek through lush trails, chase hidden waterfalls, sip freshly brewed plantation coffee, and feel the gentle mountain breeze whisper peace to your soul. This journey isn’t just travel — it’s therapy in nature’s lap, a soulful blend of serenity and adventure waiting for you..",
    Trek_Points:[
    "Mullayanagiri",
     "Baba Budangiri",
     "Hebbe Falls",
      "Hirekolale Lake"],
    Activites: [
      "Trekking",
      "Jeep safari",
      "Coffee plantation walk",
      "Camping"],
      Related_Treks: [
      "coorg+chikkamagaluru+mysuru",
      "coorg+chikkamagaluru+wayanad"]
  },
  {
    id: "gokarna-karnataka",
    name: "Gokarna",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Gokarna.png",
    hero_image: "/assets/_/assets/Gokarna.png",
    duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
    price_start: 3499,
    currency: "INR",
    operating_days: "Wed, Thu, Fri & Sat",
    schedule_notes: "Weekend trips are extremely popular, book in advance.",
    highlights: ["Beach Hopping", "Cliffside Trails", "Coastal Views", "Temple Visits"],
    tags: ["beach", "coast", "weekend", "adventure"],
    operators:[], 
    short_desc: "Where golden sands meet the sound of waves and rugged trails hug the cliffs — Gokarna is more than a destination, it’s an emotion. Trek along hidden beaches, camp by the sea under a blanket of stars, and wake up to the music of the ocean. From soul-soothing sunsets at Om Beach to thrilling cliffside treks, Gokarna offers the perfect mix of calm and thrill, where adventure kisses serenity.",
    Trek_Points: [
      "Om Beach",
      "Kudle Beach",
      "Paradise Beach",
      "Vibuthi Falls"],
    Activites: ["Beach trek",
                 "Camping",
                  "Yoga",
                  "Sunset kayaking"],
    Related_Treks: [
       "Gokarna + Murudeshwar",
       "Gokarna + Dandeli",
       "Gokarna + Udupi",
       "Gokarna+ Honnovar",
       "Gokarna+ Murudeshwar+Vibhuthi Falls",
       "Gokarna+Dandeli+Murudeshwar",

      ]               
  },
  {
    id: "dandeli-karnataka",
    name: "Dandeli",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Dandeli.png",
    hero_image: "/assets/_/assets/Dandeli.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 4199,
    currency: "INR",
    operating_days: "Thu,Fri & Sat",
    schedule_notes: "Adventure camps are most active on weekends.",
    highlights: ["White-water Rafting", "Jungle Safari", "Kayaking", "Birdwatching"],
    tags: ["adventure", "river", "wildlife", "weekend"],
    operators: ['CUTE voyages'],
    short_desc: "Where the Kali River roars and emerald forests echo with the calls of wild birds — Dandeli is Karnataka’s untamed paradise. Feel your heart race while white-water rafting, zip-lining over rivers, and kayaking through jungle streams. By night, camp under starlit skies surrounded by the soothing hum of nature — a perfect blend of thrill and tranquility.",
    Trek_Points: ["Kali River",
                "Syntheri Rocks",
                "Supa Dam",
                "Kavala Caves"],
    Activites: ["River rafting",
                "Kayaking",
                 "Jungle camping",   
                "Zipline"],
    Related_Treks: [ 
      "Gokarna + Dandeli",
      "Dandeli + Dudhsagar",
       "Gokarna+Dandeli+Murudeshwar", ]
  },
  {
    id: "araku-valley-andhra-pradesh",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    imageUrl: "/assets/_/assets/araku valley (2).png",
    hero_image: "/assets/_/assets/araku valley (2).png",
    duration_days: "3D-2N",
    price_start: 6999,
    currency: "INR",
    operating_days:  "Thur,Fri & Sat",
    schedule_notes: "Weekend packages are common from Visakhapatnam.",
    highlights: ["Tribal Villages", "Coffee Plantations", "Cave Exploration", "Waterfalls"],
    tags: ["culture", "hills", "weekend", "nature"],
    operators: ['CUTE voyages'],
    short_desc:"Nestled in the emerald folds of the Eastern Ghats, Araku Valley is a dream painted in green and mist. Glide through tunnels and waterfalls on a scenic train ride, trek through coffee plantations, and discover tribal art and caves that whisper ancient stories. Every sunrise here feels like nature’s way of saying — slow down, breathe, and just be.",
    Trek_Points: ["Borra Caves",
                 "Katiki Waterfalls",
                 "Coffee Museum",
                 "Chaparai Falls"],
    Activites: ["Borra Caves",
                "Katiki Waterfalls",
                "Coffee Museum",
                "Chaparai Falls"],
    Related_Treks: ["Araku Valley + Vizag"]
  
  },
  {
    id: "kerala",
    name: "Kerala",
    state: "Kerala",
    imageUrl: "/assets/_/assets/Kerala.png",
    hero_image: "/assets/_/assets/Kerala.png",
    duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
    price_start: 7999,
    currency: "INR",
    operating_days: "Wed, Thu, Fri & Sat",
    schedule_notes: "Special packages available on request.",
    highlights: ["Houseboat Stay", "Local Cuisine", "Village Life", "Canoeing"],
    tags: ["relaxing", "family", "water", "culture"],
    operators: ['CUTE voyages', 'sparrow adventures', 'AT adventure and travels'],
    short_desc: "From misty Munnar hills to Alleppey’s serene backwaters, Kerala is where nature unfolds its most divine palette. Trek through lush forests, cruise past palm-lined canals, and chase waterfalls hidden in the Western Ghats. Every moment feels sacred — the air smells of cardamom, the breeze hums with monsoon magic, and your soul finds peace in “God’s Own Country.”",
    Trek_Points: [
           "Munnar",
           "Alleppey & Kumarakom backwaters",
           "Kochi",
           "Wayanad",
          "Kovalam"],
    Activites: [
      "Houseboat stays",
      "Tea plantation tours",
      "Wildlife safaris",
      "Ayurveda therapy",
      "Beach walks & cultural shows"],
    Related_Treks: [
      "Kerala + Kanyakumari"]
  },
  {
    id: "pondicherry-puducherry",
    name: "Pondicherry",
    state: "Puducherry",
    imageUrl: "/assets/_/assets/pondichery.png",
    hero_image: "/assets/_/assets/pondichery.png",
    duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
    price_start: 4999,
    currency: "INR",
    operating_days: "Wed, Thu, Fri & Sat",
    schedule_notes: "Best explored on a bicycle or a scooter.",
    highlights: ["French Architecture", "Seaside Promenade", "Auroville", "Cafes"],
    tags: ["relaxing", "weekend", "beach"],
    operators: ['CUTE voyages'],
    short_desc: "A stroll through Pondicherry feels like walking inside a postcard — golden beaches, pastel colonial streets, and cafés that smell of croissants and sea breeze. Wake up to sunrise yoga by the shore, cycle through French boulevards, and let time slow down with every wave. It’s not just a destination — it’s where calm meets charm.",
    Trek_Points: [
         "French Colony",
         "Auroville & Matrimandir",
          "Aurobindo Ashram",
        "Paradise Beach",
        "Promenade Road"],
    Activites: [
      "Surfing",
      "Beach walks",
"Café hopping",
"Meditation"],
Related_Treks: ["Pondicherry + Pichavaram Mangrove Falls",
"Pondicherry + Mahabalipuram"]
  },
  {
    id: "ooty-tamil-nadu",
    name: "Ooty",
    state: "Tamil Nadu",
    imageUrl: "/assets/_/assets/Ooty.png",
    hero_image: "/assets/_/assets/Ooty.png",
    duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
    price_start: 8400,
    currency: "INR",
    operating_days: "Wed, Thu, Fri & Sat",
    schedule_notes: "Toy train tickets should be booked well in advance.",
    highlights: ["Tea Gardens", "Ooty Lake", "Toy Train", "Botanical Gardens"],
    tags: ["hills", "nature", "family", "weekend"],
    operators: ['CUTE voyages', 'sparrow adventures'],
    short_desc: "Ooty is where the mountains wear a crown of clouds and the air smells of eucalyptus and tea. Ride the toy train through rolling hills, walk amid endless flower gardens, and sip hot chai overlooking emerald lakes. Every bend in Ooty’s winding paths feels like a soft whisper — calling you to stay a little longer.",
    Trek_Points: [
      "Doddabetta Peak",
       "Ooty Lake",
       "Botanical Garden",
      "Pykara Waterfalls",
"Tea Factory & Museum"],
    Activites: [
     "Boat rides",
"Tea estate tours",
"Toy train rides",
"Trekking & horse riding"],
Related_Treks:[" Ooty + Coonoor",
" Ooty + Coonoor+ Isha Foundation",
"Ooty+Coonoor+Mysuru",
"Ooty +Isha Foundation"]
  },
//   {
//     id: "coonoor-tamil-nadu",
//     name: "Coonoor",
//     state: "Tamil Nadu",
//     imageUrl: "/assets/_/assets/coonoor.png",
//     hero_image: "/assets/_/assets/coonoor.png",
//     duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
//     price_start: 7499,
//     currency: "INR",
//     operating_days: "Wed, Thu, Fri & Sat",
//     schedule_notes: "Enjoy a cup of locally grown Nilgiri tea.",
//     highlights: ["Tea Plantations", "Sim's Park", "Dolphin's Nose", "Toy Train"],
//     tags: ["hills", "nature", "relaxing", "weekend"],
//     operators: ['CUTE voyages', 'sparrow adventures'],
//     short_desc: "Coonoor is a quiet melody in the heart of the Nilgiris — where tea gardens stretch endlessly and mist dances over emerald valleys. Trek through pine forests, visit waterfalls tucked in silence, and sip freshly brewed tea as clouds drift by your window. It’s a place where peace feels personal and nature feels like home..",
//     Trek_Points: ["Nilgiri Mountain Railway & Toy Train rides",
// "Sim’s Park botanical gardens",
// "Dolphin’s Nose, Lamb’s Rock viewpoints"],
//     Activites: ["Scenic toy-train rides and tea-estate walks",
// "Short treks and viewpoint photography",
// "Visiting local markets and garden promenades"],
// Related_Treks:[" Coonoor + Ooty",
// " Coonoor + Kotagiri",
// "Coonoor + Wellington + Sim’s Park",
// "Coonoor + Mudumalai"],
//   },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    imageUrl: "/assets/_/assets/Goa.png",
    hero_image: "/assets/_/assets/Goa.png",
    duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
    price_start: 6999,
    currency: "INR",
    operating_days: "Wed, Thu, Fri & Sat",
    schedule_notes: "North Goa is for parties, South Goa for peace.",
    highlights: ["Beach Hopping", "Coastal Treks", "Water Sports", "Nightlife"],
    tags: ["beach", "coast", "adventure", "weekend"],
    operators: ['CUTE voyages'],
    short_desc: "Goa is where freedom meets the sea — golden sands, palm-fringed shores, and nights that never sleep. From beachside adventures and vibrant markets to quiet sunrise walks, every moment here feels like a celebration. It’s not just a destination; it’s a feeling of pure escape, where the waves wash your worries away",
    Trek_Points: ["Calangute, Baga, Palolem",
"Basilica of Bom Jesus",
"Fort Aguada",
"Chapora Fort",
"Dona Paula"],
    Activites: ["Water sports (jet ski, parasailing, scuba)",
"Beach nightlife",
"Dolphin cruises",
"Spice plantation tours",
"Sunset boat rides"],
Related_Treks:["Pondicherry"]
  },
  {
    id: "manali-himachal-pradesh",
    name: "Manali",
    state: "Himachal Pradesh",
    imageUrl: "/assets/_/assets/manali-himachal-pradesh.png",
    hero_image: "/assets/_/assets/manali-himachal-pradesh.png",
    duration_days: " 3D-2N, 4D-3N & 5D-4N",
    price_start: 6499,
    currency: "INR",
    operating_days: "",
    schedule_notes: "Fixed departure dates are common for longer treks.",
    highlights: ["High Altitude", "Snowy Peaks", "River Crossings", "Alpine Meadows"],
    tags: ["himalayas", "adventure", "challenging"],
    operators: ["Beyond Dream Destination"],
    short_desc: "Manali calls to the wanderer’s heart — snow-draped peaks, whispering pine forests, and rivers that sing to your soul. A perfect blend of Himalayan thrill and serenity, every sunrise here feels like a promise of adventure and peace.",
    Trek_Points: [
      "Solang Valley",
      "Rohtang Pass",
      "Hidimba Temple",
      "Old Manali",
      "Jogini Falls"
    ],
    Activites: [
      "Paragliding & skiing",
      "River rafting",
      "Village walks",
      "Café hopping"
    ],
    Related_Treks: [
      "Manali + Kasol+ kheeraganga",
      "Manali + Kasol"
    ],
  },
{
  id: "gokarna-dandeli",
  name: "Gokarna-Dandeli",
  state: "Karnataka",
  imageUrl: "/assets/_/assets/Gokarna + Dandeli.jpg.png",
  hero_image: "/assets/_/assets/Gokarna + Dandeli.jpg.png",
  duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
  price_start: 4899,
  currency: "INR",
  operating_days: "Wed, Thu, Fri, Sat",
  schedule_notes: "Extremely popular during the monsoon season (June-September).",
  Trek_Points: [
  "Om Beach",
  "Kudle Beach",
  "Paradise Beach",
  "Vibuthi Falls",
  "Kali River",
  "Syntheri Rocks",
  "Supa Dam",
  "Kavala Caves"
],
  Activites: [
    "Beach Trail (Kudle, Om, Half Moon, Paradise)",
    "Dandeli Water Sports – rafting, kayaking, coracle ride, jungle stays"
  ],
  tags: ["monsoon", "waterfall", "nature", "day-trek"],
  operators: [
    "CUTE Voyages",
    "Sparrow Adventures",
    "AT Adventure and Travels",
    "Beyond Dream Destination"
  ],
  short_desc:
    "From the golden beaches of Gokarna to the wild forests of Dandeli — experience a journey where calm meets chaos. Watch sunsets over Om Beach, drift through the waves, then chase adrenaline on the Kali River. This trek is pure Karnataka magic — sea, forest, and soul intertwined.",
  Related_Treks: [
    "Gokarna + Dandeli + Murudeshwar",
    "Gokarna + Honnavar",
    "Dandeli + Dudhsagar",
    "Gokarna + Udupi",
    "Gokarna + Murudeshwar + Vibhuthi Falls"
  ]
},
{
  id: "ooty-coonoor",
  name: "Ooty-Coonoor",
  state: "Tamil Nadu",
  imageUrl: "/assets/_/assets/Ooty + Coonoor.jpg.png",
  hero_image: "/assets/_/assets/Ooty + Coonoor.jpg.png",
  duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
  price_start: 7499,
  currency: "INR",
  operating_days: "Wed, Thu, Fri, Sat",
  schedule_notes: "A must-do trek for monsoon lovers in the Nilgiris.",
  highlights: ["Rolling Hills", "Tea Gardens", "Valley Views", "Colonial Trails"],
  tags: ["monsoon", "forest", "day-trek", "nature"],
  operators: ["CUTE Voyages", "Sparrow Adventures"],
  short_desc:
    "Whispers of mist float through tea gardens as Ooty and Coonoor invite you to breathe in their timeless beauty. A symphony of hills, heritage, and heart — where every bend opens to emerald slopes and skies that heal the soul.",
  Trek_Points: [
    "Doddabetta Peak",
    "Ooty Lake",
    "Sim’s Park",
    "Dolphin’s Nose",
    "Wenlock Downs"
  ],
  Activites: [
    "Tea estate walks",
    "Toy train ride",
    "Trekking & sightseeing",
    "Café hopping & shopping"
  ],
  Related_Treks: [
    "Ooty + Isha Foundation",
    "Ooty + Coonoor + Mysuru",
    "Ooty + Coonoor+Isha Foundation"
  ]
},
{
  id: "Araku_Vizag",
  name: "Araku_Vizag",
  state: "Andhra Pradesh",
  imageUrl: "/assets/_/assets/Araku Valley + Vizag.jpg.png",
  hero_image: "/assets/_/assets/Araku Valley + Vizag.jpg.png",
  duration_days: "2D-1N, 3D-2N, 4D-3N & 5D-4N",
  price_start: 6499,
  currency: "INR",
  operating_days: "Wed, Thu, Fri, Sat",
  schedule_notes: "Best experienced between October to February for misty valleys.",
  highlights: ["Valley Train Ride", "Waterfalls", "Coffee Estates", "Tribal Caves"],
  tags: ["relaxing", "family", "culture", "nature"],
  operators: ["CUTE Voyages", "Sparrow Adventures"],
  short_desc:
    "Where the sea meets the hills — Vizag’s coastal charm melts into Araku’s misty valleys. Ride the train through tunnels and waterfalls, sip hot tribal coffee, and watch clouds dance over emerald hills. This is nature’s own poetry written in green and gold.",
  Trek_Points: [
    "RK Beach",
    "Borra Caves",
    "Katiki Waterfalls",
    "Araku Coffee Plantations",
    "Tribal Museum"
  ],
  Activites: [
    "Scenic train ride through tunnels",
    "Waterfall trekking",
    "Coffee estate walk",
    "Cultural & cave exploration"
  ],
  Related_Treks: ["Araku Valley + Vizag"
  ]
},
// {
//   id: "kedernath",
//   name: "Kedarnath",
//   state: "Uttarakhand",
//   imageUrl: "/assets/_/assets/kedarnath.png",
//   hero_image: "/assets/_/assets/kedarnath.png",
//   duration_days: "5D-4N",
//   price_start: 15499,
//   currency: "INR",
//   operating_days: "Operates Daily (Apr-Nov)",
//   schedule_notes: "The temple is open from late April to early November.",
//   highlights: ["Spiritual Journey", "Himalayan Views", "Sacred Temple", "High Altitude"],
//   tags: ["pilgrimage", "himalayas", "culture", "spiritual"],
//   operators: ["CUTE Voyages"],
//   short_desc:
//     "A path where devotion meets the Himalayas — Kedarnath calls with snow peaks, sacred chants, and divine stillness. Each step is a prayer, each breath a story — a pilgrimage not just through mountains, but through the soul.",
//   Trek_Points: [
//     "Kedarnath Temple",
//     "Gaurikund",
//     "Rudraprayag",
//     "Sonprayag",
//     "Chorabari Tal (Gandhi Sarovar)"
//   ],
//   Activites: [
//     "Trekking & temple darshan",
//     "Meditation",
//     "Photography",
//     "Pilgrimage walks"
//   ],
//   Related_Treks: [
//     "Kedarnath + Badrinath + Tungnath",
//     "Do Dham Yatra",
//     "Char Dham Yatra"
//   ]
// },
{
  id: "coorg + wayanad",
  name: "Coorg + wayanad",
  state: "Kerala",
  imageUrl: "/assets/_/assets/coorg-wayanad.png",
  hero_image: "/assets/_/assets/coorg-wayanad.png",
  duration_days: "3D-2N,4D-3N",
  price_start: 7999,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  schedule_notes: "Weekend packages are widely available from major cities.",
  highlights: ["Tea Gardens", "Caves", "Spice Plantations", "Heart-shaped Lake"],
  tags: ["nature", "hills", "weekend", "family"],
  operators: ["AT Adventurea and travels"],
  short_desc:
    "From the coffee-scented hills of Coorg to the misty valleys of Wayanad — this journey feels like stepping into a living painting. Trek past waterfalls, spice trails, and echoing caves where the forest hums ancient lullabies. Nature here doesn’t just surround you; it embraces you.",
  Trek_Points: [
    "Chembra Peak",
    "Abbey Falls",
    "Edakkal Caves",
    "Pookode Lake",
    "Banasura Sagar Dam"
  ],
  Activites: [
    "Trekking & camping",
    "Coffee & spice plantation walks",
    "Boating & sightseeing",
    "Cultural village visits"
  ],
  Related_Treks: [
    "Coorg + Chikkamagaluru",
    "Wayanad + Ooty",
    "coorg+chikkamagaluru+mysuru",
    "coorg+chikkama"
  ]
},
{
  id: "wayanad",
  name: "Wayanad",
  state: "Kerala",
  imageUrl: "/assets/_/assets/Wayanad.png",
  hero_image: "/assets/_/assets/Wayanad.png",
  duration_days: "3D-2N",
  price_start: 7499,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  schedule_notes: "Weekend packages are widely available from major cities.",
  highlights: ["Tea Gardens", "Cave Exploration", "Spice Plantations", "Heart-shaped Lake"],
  tags: ["nature", "hills", "weekend", "family"],
  operators: ["CUTE Voyages"],
  short_desc:
    "Wayanad welcomes you with emerald hills, tribal whispers, and cool forest winds. Wander through tea estates, ancient caves, and hidden waterfalls — a destination where time slows down, and peace quietly finds you.",
  Trek_Points: [
    "Chembra Peak (Heart-shaped Lake)",
    "Edakkal Caves",
    "Soochipara Waterfalls",
    "Pookode Lake",
    "Meenmutty Falls"
  ],
  Activites: [
    "Trekking & hiking",
    "Cave exploration",
    "Tea plantation visit",
    "Boating at Pookode Lake",
    "Wildlife spotting at Muthanga Sanctuary"
  ],
  Related_Treks: [
    "Coorg + Wayanad",
    "Wayanad + Ooty"
  ]
},
{
  id: "gokarna-udupi",
  name: "Gokarna-Udupi",
  state: "Karnataka",
  imageUrl: "/assets/_/assets/Gokarna + Udupi.jpg.png",
  hero_image: "/assets/_/assets/Gokarna + Udupi.jpg.png",
  duration_days: "3D-2N & 4D-3N",
  price_start: 6999,
  currency: "INR",
  operating_days: "Fri, Sat",
  schedule_notes: "Perfect for beach & temple lovers seeking coastal calm.",
  highlights: ["Golden Beaches", "Temples", "Coastal Trails", "Seafood"],
  tags: ["beach", "spiritual", "weekend", "family"],
  operators: ["CUTE Voyages"],
  short_desc:
    "From the sacred sands of Gokarna to Udupi’s serene shores, this is Karnataka’s coast at its finest. Walk barefoot along golden beaches, hear temple bells blend with ocean waves — a soulful mix of devotion, sunsets, and sea breeze.",
  Trek_Points: [
    "Om Beach",
    "Murudeshwar Temple",
    "St. Mary’s Island",
    "Udupi Sri Krishna Temple",
    "Kaup Lighthouse"
  ],
  Activites: [
    "Beach trek (Kudle, Om, Paradise)",
    "Temple visits",
    "Boating at Malpe",
    "Seafood dining",
    "Photography & camping"
  ],
  Related_Treks: [
    "Gokarna + Dandeli + Murudeshwar",
    "Udupi + Murudeshwar",
    "Gokarna + Dandeli",
    "Gokarna + Honnavar",
    "Gokarna + Murudeshwar + Vibhuthi Falls" 
  ]
},
{
  id: "ananthagiri-hills",
  name: "Ananthagiri Hills",
  state: "Telangana",
  imageUrl: "/assets/_/assets/anathagiri.png",
  hero_image: "/assets/_/assets/anathagiri.png",
  duration_days: "2D-1N",
  price_start: 1199,
  currency: "INR",
  operating_days: "fri, Sat",
  tags: ["nature", "forest", "trekking", "weekend"],
  operators: ["Sparrow Adventures", "CUTE Voyages"],
  short_desc:
    "Lose yourself in the emerald folds of Ananthagiri Hills, where mist rolls over pine trails and silence hums with nature’s music. Follow forest paths to hidden waterfalls, breathe mountain air scented with wild earth, and rediscover serenity just hours from the city.",
  Trek_Points: [
    "Ananthagiri Viewpoint",
    "Kotipally Reservoir",
    "Nagasamudram Lake",
    "Anantha Padmanabha Swamy Temple",
    "Musunuru Hills"
  ],
  Activites: [
    "Nature trek",
    "Camping & bonfire",
    "Photography",
    "Birdwatching",
    "Cave exploration"
  ],
},
// {
//   id: "andharban",
//   name: "Andharban Trek",
//   state: "Maharashtra",
//   imageUrl: "/assets/_/assets/Andharban.png",
//   hero_image: "/assets/_/assets/Andharban.png",
//   duration_days: "1D",
//   price_start: 1499,
//   currency: "INR",
//   operating_days: "Sat, Sun",
//   tags: ["forest", "monsoon", "adventure", "nature"],
//   operators: ["AT Adventure and Travels", "Beyond Dream Destination"],
//   short_desc:
//     "Walk through the mist-drenched heart of the Sahyadris — where sunlight barely touches the forest floor. The Andharban Trek is a journey through whispering trees, cascading falls, and emerald valleys that feel like nature’s secret cathedral of peace and rain.",
//   Trek_Points: [
//     "Pimpri Dam",
//     "Tamhini Ghat",
//     "Hirdi Village",
//     "Bhira Dam"
//   ],
//   Activites: [
//     "Monsoon trek",
//     "Waterfall crossings",
//     "Forest exploration",
//     "Photography & nature walk"
//   ],
//   Related_Treks: [
//     "Andharban + Devkund Waterfalls",
//     "Lonavala + Andharban + Devkund",
//     "Aadrai Forest + Kalu Falls"
//   ]
// },
// {
//   id: "badrinath",
//   name: "Badrinath",
//   state: "Uttarakhand",
//   imageUrl: "/assets/_/assets/badrinadh.png",
//   hero_image: "/assets/_/assets/badrinadh.png",
//   duration_days: "5D-4N",
//   price_start: 9999,
//   currency: "INR",
//   operating_days: "Thu, Fri, Sat",
//   tags: ["spiritual", "mountain", "pilgrimage"],
//   operators: ["CUTE Voyages", "Sparrow Adventures"],
//   short_desc:
//     "In the embrace of the mighty Himalayas, Badrinath glows like a jewel of faith and peace. The journey unfolds through snow-clad peaks and sacred rivers, leading to a temple where devotion and the divine sky meet in eternal silence.",
//   Trek_Points: [
//     "Badrinath Temple",
//     "Mana Village",
//     "Vasudhara Falls",
//     "Tapt Kund",
//     "Charan Paduka"
//   ],
//   Activites: [
//     "Pilgrimage walk",
//     "Temple darshan",
//     "Trekking",
//     "Local culture & photography"
//   ],
//   Related_Treks: [
//     "Char Dham Yatra",
//     "Kedarnath + Badrinath + Tungnath",
//     "Do Dham Yatra"
//   ]
// },
// {
//   id: "char-dham-yatra",
//   name: "Char Dham Yatra",
//   state: "Uttarakhand",
//   imageUrl: "/assets/_/assets/Char Dham Yatra.png",
//   hero_image: "/assets/_/assets/Char Dham Yatra.png",
//   duration_days: "10D-9N",
//   price_start: 32500,
//   currency: "INR",
//   operating_days: "Wed,Thur, Fri,sat",
//   tags: ["spiritual", "mountain", "yatra"],
//   operators: ["CUTE Voyages", "Beyond Dream Destination"],
//   short_desc:
//     "Embark on a soul-awakening journey across the four sacred shrines of the Himalayas — Yamunotri, Gangotri, Kedarnath, and Badrinath. Each step through the Char Dham Yatra brings you closer to the divine, as mountains echo ancient prayers and rivers carry blessings of purity.",
//   Trek_Points: [
//     "Yamunotri Temple",
//     "Gangotri Temple",
//     "Kedarnath Temple",
//     "Badrinath Temple"
//   ],
//   Activites: [
//     "Temple visits",
//     "Pilgrimage trek",
//     "Meditation",
//     "River darshan"
//   ],
//   Related_Treks: [
//     "Do Dham Yatra",
//     "Kedarnath + Badrinath + Tungnath",
//     "Ek Dham Yatra"
//   ]
// },
// {
//   id: "dharamshala",
//   name: "Dharamshala",
//   state: "Himachal Pradesh",
//   imageUrl: "/assets/_/assets/Dharamshala.png",
//   hero_image: "/assets/_/assets/Dharamshala.png",
//   duration_days: "4D-3N",
//   price_start: 8499,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["mountain", "spiritual", "nature"],
//   operators: ["CUTE Voyages", "Beyond Dream Destination"],
//   short_desc:
//     "Perched in the serene Kangra Valley, Dharamshala is where the mountains whisper peace and the soul finds calm. Meditate in monasteries, trek through cedar forests, and watch the sunset melt into the Himalayas — a journey of stillness and beauty.",
//   Trek_Points: [
//     "McLeod Ganj",
//     "Triund Trek",
//     "Bhagsu Falls",
//     "Namgyal Monastery",
//     "Dal Lake"
//   ],
//   Activites: [
//     "Trekking to Triund",
//     "Meditation at monasteries",
//     "Camping & sightseeing",
//     "Local food & shopping"
//   ],
//   Related_Treks: [
//     "Dharamshala + Triund",
//     "Dharamshala + Manali",
//     "Magical Himachal Tour"
//   ]
// },
// {
//     id: "do-dham-yatra",
//     name: "Do Dham Yatra",
//     state: "Uttarakhand",
//     imageUrl: "/assets/_/assets/Do dham yatra.jpeg",
//     hero_image: "/assets/_/assets/Do dham yatra.jpeg",
//     duration_days: "6D-5N",
//     price_start: 14999,
//     currency: "INR",
//     operating_days: "Thu, Fri, Sat",
//     tags: ["spiritual", "pilgrimage", "mountain"],
//     operators: ["CUTE Voyages", "AT Adventure and Travels"],
//     short_desc:
//       "A sacred path linking Kedarnath and Badrinath — the Do Dham Yatra leads you through mountain air heavy with devotion. Walk ancient pilgrim trails, feel the divine calm of the Himalayas, and rediscover faith in nature’s embrace.",
//     Trek_Points: ["Kedarnath", 
//       "Badrinath", 
//       "Tapt Kund", 
//       "Mana Village"],
//     Activites: ["Temple visits",
//        "Spiritual treks", 
//        "Meditation", 
//        "Photography"],
//     Related_Treks: [
//       "Char Dham Yatra",
//       "Ek Dham Yatra",
//       "Kedarnath + Badrinath + Tungnath",
//     ],
//   },
  // {
  //   id: "dudhsagar",
  //   name: "Dudhsagar Falls",
  //   state: "Goa",
  //   imageUrl: "/assets/_/assets/Dudhsagar.png",
  //   hero_image: "/assets/_/assets/Dudhsagar.png",
  //   duration_days: "2D-1N, 3D-2N",
  //   price_start: 4999,
  //   currency: "INR",
  //   operating_days: "Sat, Sun",
  //   tags: ["waterfall", "adventure", "monsoon"],
  //   operators: ["Beyond Dream Destination", "CUTE Voyages"],
  //   short_desc:
  //     "Thundering down from the Western Ghats, Dudhsagar Falls is nature’s white symphony in motion. The trek winds through lush jungle and railway trails, ending in a spectacular shower of mist and magic that leaves you awestruck.",
  //   Trek_Points: ["Dudhsagar Falls",
  //      "Castle Rock", 
  //      "Mollem National Park"],
  //   Activites: [
  //     "Waterfall trek",
  //     "Jeep safari",
  //     "Nature exploration",
  //     "Photography",
  //   ],
  //   Related_Treks: ["Dandeli + Dudhsagar",
  //      "Dudhsagar + Tambdi Surla"],
  // },
  // {
  //   id: "ek-dham-yatra",
  //   name: "Ek Dham Yatra",
  //   state: "Uttarakhand",
  //   imageUrl: "/assets/_/assets/Ek dham yatra.jpeg",
  //   hero_image: "/assets/_/assets/Ek dham yatra.jpeg",
  //   duration_days: "4D-3N, 5D-4N",
  //   price_start: 9999,
  //   currency: "INR",
  //   operating_days: "Thu, Fri, Sat",
  //   tags: ["spiritual", "mountain", "pilgrimage"],
  //   operators: ["CUTE Voyages", "Beyond Dream Destination"],
  //   short_desc:
  //     "A single holy destination — a thousand divine moments. The Ek Dham Yatra lets you embrace the essence of Himalayan devotion as you walk through sacred valleys, snow peaks, and temples where faith meets eternity.",
  //   Trek_Points: [
  //     "Kedarnath Temple",
  //     "Badrinath Temple",
  //     "Rudraprayag",
  //     "Mana Village",
  //   ],
  //   Activites: [
  //     "Temple darshan",
  //     "Pilgrimage trek",
  //     "Meditation",
  //     "Mountain photography",
  //   ],
  //   Related_Treks: [
  //     "Do Dham Yatra",
  //     "Char Dham Yatra",
  //     "Kedarnath + Badrinath + Tungnath",
  //   ],
  // },
  // {
  //   id: "gangtok",
  //   name: "Gangtok",
  //   state: "Sikkim",
  //   imageUrl: "/assets/_/assets/Gangtok.png",
  //   hero_image: "/assets/_/assets/Gangtok.png",
  //   duration_days: "4D-3N, 5D-4N",
  //   price_start: 8999,
  //   currency: "INR",
  //   operating_days: "Thu, Fri, Sat, Sun",
  //   tags: ["mountain", "culture", "nature", "family"],
  //   operators: ["CUTE Voyages", "Sparrow Adventures"],
  //   short_desc:
  //     "Perched high in the clouds, Gangtok weaves spirituality and charm into every mountain breeze. Vibrant monasteries, fluttering prayer flags, and majestic Kanchenjunga views turn this Himalayan gem into a soulful escape that awakens both heart and spirit.",
  //   Trek_Points: [
  //     "MG Marg",
  //     "Tsomgo Lake",
  //     "Nathula Pass",
  //     "Rumtek Monastery",
  //     "Hanuman Tok",
  //   ],
  //   Activites: [
  //     "Sightseeing",
  //     "Cable car ride",
  //     "Monastery visits",
  //     "Mountain photography",
  //   ],
  //   Related_Treks: [
  //     "Sikkim + Gangtok",
  //     "Magical Himalayas Tour",
  //     "Gangtok + North Sikkim",
  //   ],
  // },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Hamp.png",
    hero_image: "/assets/_/assets/Hamp.png",
    duration_days: "3D-2N, 4D-3N",
    price_start: 4499,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["heritage", "culture", "history", "adventure"],
    operators: [],
    short_desc:
      "Walk through a living museum where time still whispers — Hampi’s ancient stones tell tales of kings, temples, and glory. Golden boulders glow under the sun, riverbanks hum with history, and sunsets paint the ruins in shades of magic and memory.",
    Trek_Points: [
      "Vittala Temple",
      "Virupaksha Temple",
      "Hampi Bazaar",
      "Matanga Hill",
    ],
    Activites: ["Heritage walk", 
      "Sunset trek",
       "Rock climbing", 
       "Photography"],
  },
  // {
  //   id: "haridwar",
  //   name: "Haridwar",
  //   state: "Uttarakhand",
  //   imageUrl: "/assets/_/assets/haridwar.png",
  //   hero_image: "/assets/_/assets/haridwar.png",
  //   duration_days: "3D-2N",
  //   price_start: 5999,
  //   currency: "INR",
  //   operating_days: "Fri, Sat, Sun",
  //   tags: ["spiritual", "river", "culture"],
  //   operators: ["CUTE Voyages", "AT Adventure and Travels"],
  //   short_desc:
  //     "Where faith meets the flowing Ganges, Haridwar glows like an eternal flame. Watch diyas drift on the holy river, hear temple bells echo through twilight, and feel the deep calm of a city where devotion flows as freely as the waters.",
  //   Trek_Points: [
  //     "Har Ki Pauri",
  //     "Mansa Devi Temple",
  //     "Chandi Devi Temple",
  //     "Shantikunj Ashram",
  //   ],
  //   Activites: ["Temple visits", 
  //     "Ganga Aarti", 
  //     "River walk", 
  //     "Spiritual meditation"],
  //   Related_Treks: ["Rishikesh + Haridwar", 
  //     "Char Dham Yatra", 
  //     "Do Dham Yatra"],
  // },
  // {
  //   id: "himalayas",
  //   name: "The Himalayas",
  //   state: "Multiple States",
  //   imageUrl: "/assets/_/assets/Himalayas.png",
  //   hero_image: "/assets/_/assets/Himalayas.png",
  //   duration_days: "6D-5N, 8D-7N",
  //   price_start: 12999,
  //   currency: "INR",
  //   operating_days: "Wed, Fri, Sat",
  //   tags: ["mountain", "adventure", "snow", "trekking"],
  //   operators: [""],
  //   short_desc:
  //     "Majestic and eternal, the Himalayas awaken the adventurer within. Each trail reveals untouched beauty — shimmering glaciers, silent monasteries, and skies that stretch beyond imagination. Here, every breath is a hymn to wonder and wilderness.",
  //   Trek_Points: ["Himachal Trails",
  //      "Kedarnath Trek",
  //       "Spiti Route", 
  //       "Ladakh Passes"],
  //   Activites: [
  //     "High-altitude trekking",
  //     "Camping",
  //     "Snow adventure",
  //     "Photography",
  //   ],
  // },
  {
    id: "isha-foundation",
    name: "Isha Foundation",
    state: "Tamil Nadu",
    imageUrl: "/assets/_/assets/isha foundation.png",
    hero_image: "/assets/_/assets/isha foundation.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 4999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["spiritual", "culture", "meditation"],
    operators: ["CUTE Voyages"],
    short_desc:
      "At the foothills of Velliangiri, Isha Foundation radiates stillness and purpose. The mighty Adiyogi stands tall against the sky, as chants, yoga, and the fragrance of incense weave together a divine atmosphere of reflection and renewal.",
    Trek_Points: [
      "Adiyogi Statue",
      "Dhyanalinga Temple",
      "Velliangiri Hills",
    ],
    Activites: ["Meditation",
       "Temple visit",
        "Yoga", 
        "Nature walk"],
    Related_Treks: [
      "Isha Foundation + Ooty + Coonoor",
      "Ooty + Isha Foundation",
      " Ooty + Coonoor + Isha Foundation",
    ],
  },
// {
//   id: "jammu-kashmir",
//   name: "Jammu & Kashmir",
//   state: "Jammu & Kashmir (UT)",
//   imageUrl: "/assets/_/assets/jammu&kashmir.png",
//   hero_image: "/assets/_/assets/jammu&kashmir.png",
//   duration_days: "6D-5N, 8D-7N",
//   price_start: 13999,
//   currency: "INR",
//   operating_days: "Wed, Fri, Sat",
//   tags: ["mountain", "snow", "romantic", "nature"],
//   operators: ["Sparrow Adventures", "CUTE Voyages"],
//   short_desc:
//     "Heaven isn’t a myth — it’s Kashmir. Snow-glazed mountains, blooming valleys, and lakes that mirror the sky create a world too beautiful to believe. From Gulmarg’s slopes to Dal Lake’s stillness, Kashmir feels like poetry made real.",
//   Trek_Points: ["Srinagar", 
//     "Gulmarg", 
//     "Pahalgam", 
//     "Sonamarg", 
//     "Vaishno Devi"],
//   Activites: ["Shikara rides", 
//     "Trekking", 
//     "Skiing", 
//     "Sightseeing"],
//   Related_Treks: [
//     "Kashmir + Jammu + Amritsar",
//     "Leh Ladakh Expedition",
//     "Magical Himalayas Tour"
//   ]
// },
// {
//   id: "kasol",
//   name: "Kasol",
//   state: "Himachal Pradesh",
//   imageUrl: "/assets/_/assets/Kasol.png",
//   hero_image: "/assets/_/assets/Kasol.png",
//   duration_days: "3D-2N, 4D-3N",
//   price_start: 7499,
//   currency: "INR",
//   operating_days: "Thu, Fri, Sat",
//   tags: ["mountain", "river", "adventure", "nature"],
//   operators: ["Sparrow Adventures", "CUTE Voyages"],
//   short_desc:
//     "In the misty heart of Parvati Valley, Kasol whispers to wanderers and dreamers alike. The scent of pine, the sound of the river, and starry skies create a haven where adventure and peace walk hand in hand.",
//   Trek_Points: ["Parvati River", 
//     "Chalal Village",
//      "Manikaran Sahib", 
//      "Tosh Village"],
//   Activites: ["Trekking"
//     , "Camping", 
//     "River walks",
//      "Bonfire nights"],
//   Related_Treks: ["Kasol + Kheerganga",
//      "Manali + Kasol", 
//      "Himachal Backpacking Circuit"]
// },
{
  id: "kashmir",
  name: "Kashmir",
  state: "Jammu & Kashmir (UT)",
  imageUrl: "/assets/_/assets/kashmir.png",
  hero_image: "/assets/_/assets/kashmir.png",
  duration_days: "4D-3N,5D-4N,6D-5N, 8D-7N",
  price_start: 9999,
  currency: "INR",
  operating_days: "Wed, Fri, Sat",
  tags: ["mountain", "snow", "romantic", "nature"],
  operators: [],
  short_desc:
    "Kashmir — where heaven touches the earth. From Dal Lake’s mirrored calm to snow-kissed peaks of Gulmarg, every sight feels like a dream. Wander through saffron meadows, float on shikaras, and let the valley’s poetry steal your heart.",
  Trek_Points: ["Srinagar",
     "Gulmarg", 
     "Pahalgam", 
     "Sonamarg",
      "Dal Lake"],
  Activites: ["Shikara ride",
     "Trekking", 
     "Skiing",
      "Photography"],
  Related_Treks: [
    "Kashmir + Jammu + Amritsar"
  ]
},

// {
//   id: "kullu",
//   name: "Kullu",
//   state: "Himachal Pradesh",
//   imageUrl: "/assets/_/assets/kullu.jpeg",
//   hero_image: "/assets/_/assets/kullu.jpeg",
//   duration_days: "4D-3N, 5D-4N",
//   price_start: 8499,
//   currency: "INR",
//   operating_days: "Thu, Fri, Sat",
//   tags: ["mountain", "river", "adventure", "culture"],
//   operators: ["Sparrow Adventures", "Beyond Dream Destination"],
//   short_desc:
//     "The Valley of Gods — Kullu mesmerizes with apple orchards, emerald rivers, and the songs of the Himalayas. Raft the roaring Beas, trek ancient trails, and lose yourself in nature’s divinity and adventure.",
//   Trek_Points: [
//     "Beas River",
//     "Bijli Mahadev Temple",
//     "Naggar Castle",
//     "Great Himalayan National Park"
//   ],
//   Activites: ["River rafting", 
//     "Camping",
//      "Trekking",
//       "Paragliding"],
//   Related_Treks: ["Kullu + Manali", 
//     "Kasol + Kheerganga", 
//     "Magical Himachal Tour"]
// },
// {
//   id: "lambasingi",
//   name: "Lambasingi",
//   state: "Andhra Pradesh",
//   imageUrl: "/assets/_/assets/Lambasingi.png",
//   hero_image: "/assets/_/assets/Lambasingi.png",
//   duration_days: "2D-1N, 3D-2N",
//   price_start: 5499,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["hills", "nature", "winter", "camping"],
//   operators: ["CUTE Voyages", "AT Adventure and Travels"],
//   short_desc:
//     "The ‘Kashmir of Andhra’ awakens with golden fog and emerald hills. Lambasingi’s crisp dawns, coffee-scented air, and rolling valleys create a dreamlike escape wrapped in mist and magic.",
//   Trek_Points: [
//     "Lambasingi Viewpoint",
//     "Kothapalli Waterfalls",
//     "Susan Garden",
//     "Thajangi Reservoir"
//   ],
//   Activites: ["Trekking",
//      "Camping", 
//      "Bonfire", 
//      "Photography"],
//   Related_Treks: ["Araku Valley + Lambasingi",
//      "Visakhapatnam + Lambasingi"]
// },
{
  id: "leh-ladakh",
  name: "Leh Ladakh",
  state: "Jammu & Kashmir (UT)",
  imageUrl: "/assets/_/assets/Leh Ladakh.png",
  hero_image: "/assets/_/assets/Leh Ladakh.png",
  duration_days: "7D-6N, 8D-7N, 9D-8N",
  price_start: 18999,
  currency: "INR",
  operating_days: "Wed, Fri, Sat",
  tags: ["mountain", "adventure", "bike", "roadtrip"],
  operators: [],
  short_desc:
    "Raw, rugged, and breathtaking — Leh Ladakh is not a trip; it’s a transformation. Ride across high passes, touch the sky at Khardung La, and watch reflections dance on the sapphire waters of Pangong Lake.",
  Trek_Points: [
    "Pangong Lake",
    "Nubra Valley",
    "Khardung La",
    "Shanti Stupa",
    "Magnetic Hill"
  ],
  Activites: ["Bike expedition", 
    "Camping", 
    "Photography",
     "Monastery visits"]
},
// {
//   id: "lonavala",
//   name: "Lonavala",
//   state: "Maharashtra",
//   imageUrl:"/assets/_/assets/Lonavala.png",
//   hero_image: "/assets/_/assets/Lonavala.png",
//   duration_days: "2D-1N, 3D-2N",
//   price_start: 6499,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["nature", "hills", "monsoon", "weekend"],
//   operators: ["AT Adventure and Travels", "CUTE Voyages"],
//   short_desc:
//     "When the monsoon paints the hills green, Lonavala turns into a living fairytale. Mist drifts through valleys, waterfalls roar with joy, and every trail invites you to escape into the heart of the Sahyadris.",
//   Trek_Points: ["Tiger’s Leap",
//      "Bhushi Dam", 
//      "Karla Caves",
//       "Lohagad Fort"],
//   Activites: ["Trekking",
//      "Camping", 
//      "Waterfall exploration",
//       "Photography"],
//   Related_Treks: [
//     "Lonavala + Visapur Fort",
//     "Lonavala + Andharban + Devkund Waterfalls"
//   ]
// },
{
  id: "meghalaya",
  name: "Meghalaya",
  state: "Meghalaya",
  imageUrl: "/assets/_/assets/meghalaya.jpeg",
  hero_image: "/assets/_/assets/meghalaya.jpeg",
  duration_days: "5D-4N, 6D-5N",
  price_start: 14000,
  currency: "INR",
  operating_days: "Thu, Fri, Sat",
  tags: ["waterfall", "nature", "adventure", "northeast"],
  operators: [],
  short_desc:
    "The Abode of Clouds — Meghalaya wraps you in silver rain, emerald canyons, and the echo of waterfalls. Walk across living root bridges, float on crystal rivers, and discover nature’s most poetic masterpiece.",
  Trek_Points: [
    "Cherrapunji",
    "Nongriat Root Bridge",
    "Dawki River",
    "Mawlynnong Village"
  ],
  Activites: ["Trekking", 
    "Caving",
     "River boating",
      "Waterfall exploration"]
},
{
  id: "munnar",
  name: "Munnar",
  state: "Kerala",
  imageUrl: "/assets/_/assets/Munnar.png",
  hero_image: "/assets/_/assets/Munnar.png",
  duration_days: "3D-2N, 4D-3N",
  price_start: 5499,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["tea", "hills", "romantic", "nature"],
  operators: ["CUTE Voyages"],
  short_desc:
    "Wake up to rolling tea gardens and drifting clouds — Munnar is Kerala’s green paradise of calm. Walk through dew-kissed trails, sip warm tea amidst misty peaks, and feel your soul breathe again.",
  Trek_Points: [
    "Eravikulam National Park",
    "Anamudi Peak",
    "Mattupetty Dam",
    "Top Station"
  ],
  Activites: ["Trekking", 
    "Tea estate walks", 
    "Boating", 
    "Sightseeing"],
  Related_Treks: ["Munnar + Kolukkumalai"]
},
// {
//   id: "mysuru",
//   name: "Mysuru",
//   state: "Karnataka",
//   imageUrl: "/assets/_/assets/mysuru.png",
//   hero_image: "/assets/_/assets/mysuru.png",
//   duration_days: "2D-1N, 3D-2N",
//   price_start: 4999,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["heritage", "culture", "royal"],
//   operators: ["CUTE Voyages", "Beyond Dream Destination"],
//   short_desc:
//     "Mysuru, the royal heart of Karnataka, glitters with palaces, silk, and sandalwood. Watch Mysore Palace light up the night, stroll through gardens, and breathe in the regal rhythm of this cultural gem.",
//   Trek_Points: [
//     "Mysore Palace",
//     "Chamundi Hills",
//     "Brindavan Gardens",
//     "St. Philomena’s Church"
//   ],
//   Activites: ["Sightseeing",
//      "Heritage walk", 
//      "Cultural tour", 
//      "Shopping"],
//   Related_Treks: [
//     "Coorg + Mysuru",
//     "Ooty + Mysuru",
//     "Coorg + Chikkamagaluru + Mysuru"
//   ]
// },
// {
//   id: "shimla",
//   name: "Shimla",
//   state: "Himachal Pradesh",
//   imageUrl: "/assets/_/assets/simla.png",
//   hero_image: "/assets/_/assets/simla.png",
//   duration_days: "3D-2N, 4D-3N",
//   price_start: 6999,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["hills", "heritage", "romantic", "snow"],
//   operators: ["CUTE Voyages", "Beyond Dream Destination"],
//   short_desc:
//     "Shimla — the Queen of Hills — where pine-scented air and colonial charm wrap you in nostalgia. Wander through winding lanes, sip cocoa by the Ridge, and watch sunsets that feel like memories.",
//   Trek_Points: ["The Ridge",
//      "Jakhoo Temple", 
//      "Kufri", 
//      "Mall Road"],
//   Activites: ["Sightseeing", 
//     "Toy train ride",
//     "Photography", 
//     "Shopping"],
//   Related_Treks: ["Shimla + Manali", 
//     "Magical Himachal Tour"]
// },
// {
//   id: "spiti-valley",
//   name: "Spiti Valley",
//   state: "Himachal Pradesh",
//   imageUrl: "/assets/_/assets/spitivalley.png",
//   hero_image: "/assets/_/assets/spitivalley.png",
//   duration_days: "7D-6N, 9D-8N",
//   price_start: 18999,
//   currency: "INR",
//   operating_days: "Wed, Fri, Sat",
//   tags: ["mountain", "roadtrip", "snow", "adventure"],
//   operators: ["Sparrow Adventures", "CUTE Voyages"],
//   short_desc:
//     "High, raw, and humbling — Spiti Valley is where the mountains teach silence. Ride along barren ridges, visit ancient monasteries, and sleep beneath a billion stars in this desert of dreams.",
//   Trek_Points: [
//     "Kaza",
//     "Kibber",
//     "Key Monastery",
//     "Chicham Bridge",
//     "Langza Village"
//   ],
//   Activites: ["Bike expedition",
//      "Camping",
//       "Photography", 
//       "Village exploration"],
//   Related_Treks: ["Spiti Valley + Manali", 
//     "Leh Ladakh Expedition"]
// },
// {
//   id: "udupi",
//   name: "Udupi",
//   state: "Karnataka",
//   imageUrl: "/assets/_/assets/Udupi.png",
//   hero_image: "/assets/_/assets/Udupi.png",
//   duration_days: "3D-2N, 4D-3N",
//   price_start: 5999,
//   currency: "INR",
//   operating_days: "Fri, Sat, Sun",
//   tags: ["coastal", "spiritual", "culture"],
//   operators: ["CUTE Voyages", "Sparrow Adventures"],
//   short_desc:
//     "Udupi — where temple bells blend with ocean waves. Feel the divinity at Sri Krishna Temple, sail to St. Mary’s Island, and let the sea breeze carry the flavors and stories of coastal Karnataka’s soulful charm.",
//   Trek_Points: [
//     "Udupi Sri Krishna Temple",
//     "Malpe Beach",
//     "St. Mary’s Island",
//     "Kaup Lighthouse"
//   ],
//   Activites: ["Temple visit", 
//     "Beach walk", 
//     "Boat rides", 
//     "Local cuisine"],
//   Related_Treks: [
//     "Gokarna + Udupi",
//     "Murudeshwar + Udupi",
//     "Coastal Karnataka Trail"
//   ]
// },
  // {
  //   id: "visapur-fort",
  //   name: "Visapur Fort",
  //   state: "Maharashtra",
  //   imageUrl: "/assets/_/assets/Visapur Fort.png",
  //   hero_image: "/assets/_/assets/Visapur Fort.png",
  //   duration_days: "1D",
  //   price_start: 1299,
  //   currency: "INR",
  //   operating_days: "Sat, Sun",
  //   tags: ["fort", "trekking", "monsoon", "adventure"],
  //   operators: ["AT Adventure and Travels", "CUTE Voyages"],
  //   short_desc:
  //     "Cloaked in monsoon mist, Visapur Fort stands tall beside Lohagad like a guardian of history. Climb its ancient steps, cross flowing streams, and witness panoramic views that make the journey unforgettable.",

  //   Trek_Points: [
  //     "Visapur Fort Summit",
  //     "Lohagad Base",
  //     "Bhaja Caves",
  //     "Pawna Lake Viewpoint"
  //   ],

  //   Activites: [
  //     "Trekking",
  //     "Photography",
  //     "Fort exploration",
  //     "Nature walk"
  //   ],

  //   Related_Treks: [
  //     "Lonavala + Visapur Fort",
  //     "Rajmachi + Visapur",
  //     "Andharban + Devkund"
  //   ]
  // },
  {
    id: "aadrai-forest-kalu-harishchandragad",
    name: "Aadrai Forest Trek + Kalu Falls + Harishchandragad",
    state: "Maharashtra",
    imageUrl: "/assets/_/assets/Aadrai Forest Trek + Kalu Falls + Harishchandragad.jpg.png",
    hero_image: "/assets/_/assets/Aadrai Forest Trek + Kalu Falls + Harishchandragad.jpg.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 4999,
    currency: "INR",
    operating_days: "Sat, Sun",
    tags: ["forest", "waterfall", "adventure", "monsoon"],
    operators: [],
    short_desc:
      "Hidden deep in the Sahyadris, Aadrai Forest is a monsoon fairytale — a world of emerald canopies, roaring Kalu Falls, and the ancient grace of Harishchandragad. Every step feels like walking through nature’s secret.",

    Trek_Points: [
      "Aadrai Forest",
      "Kalu Waterfall",
      "Harishchandragad Fort"
    ],

    Activites: [
      "Trekking",
      "Camping",
      "Waterfall photography",
      "Cave exploration"
    ],

    Related_Treks: [
      "Andharban + Devkund"
    ]
  },
  {
    id: "alleppey-varkala",
    name: "Alleppey + Varkala",
    state: "Kerala",
    imageUrl: "/assets/_/assets/Alleppey + Varkala.jpg.png",
    hero_image: "/assets/_/assets/Alleppey + Varkala.jpg.png",
    duration_days: "4D-3N",
    price_start: 7999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["beach", "backwaters", "romantic", "nature"],
    operators: [],
    short_desc:
      "Sail through the dreamy backwaters of Alleppey and unwind on Varkala’s golden cliffs — a journey that captures Kerala’s coastal calm and sunset beauty in one perfect frame.",

    Trek_Points: [
      "Vembanad Lake",
      "Marari Beach",
      "Varkala Cliff",
      "Janardanaswamy Temple"
    ],

    Activites: [
      "Houseboat cruise",
      "Beach walk",
      "Kayaking",
      "Photography"
    ],

    Related_Treks: [
      "Kerala + Kanyakumari"
    ]
  },
  {
    id: "andharban-devkund",
    name: "Andharban + Devkund Waterfalls",
    state: "Maharashtra",
    imageUrl: "/assets/_/assets/Andharban + Devkund Waterfalls.jpg.png",
    hero_image: "/assets/_/assets/Andharban + Devkund Waterfalls.jpg.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 5999,
    currency: "INR",
    operating_days: "Sat, Sun",
    tags: ["forest", "waterfall", "monsoon"],
    operators: [],
    short_desc:
      "A breathtaking blend of misty forests and turquoise waterfalls — trek through the magical Andharban trail and dive into the serenity of Devkund’s crystal waters. Nature at its most enchanting.",

    Trek_Points: [
      "Andharban Trail",
      "Devkund Waterfall",
      "Tamhini Ghat"
    ],

    Activites: [
      "Trekking",
      "Swimming",
      "Camping",
      "Photography"
    ],

    Related_Treks: [
      "Lonavala + Andharban + Devkund",
      "Rajmachi + Visapur"
    ]
  },
  {
    id: "ayodhya-varanasi-mathura",
    name: "Ayodhya + Varanasi + Mathura",
    state: "Uttar Pradesh",
    imageUrl: "/assets/_/assets/Ayodhya + Varanasi + Mathura.jpg.png",
    hero_image: "/assets/_/assets/Ayodhya + Varanasi + Mathura.jpg.png",
    duration_days: "5D-4N, 6D-5N,7D-6N",
    price_start: 11500,
    currency: "INR",
    tags: ["spiritual", "heritage", "culture"],
    // operators: [],
    short_desc: "Walk the timeless path of devotion — from Ayodhya’s sacred temples to Varanasi’s glowing ghats and Mathura’s divine melody. Every sunrise here feels like a prayer come alive.",

    Trek_Points: [
      "Ayodhya Ram Mandir",
      "Kashi Vishwanath Temple",
      "Dashashwamedh Ghat",
      "Krishna Janmabhoomi Temple"
    ],

    Activites: [
      "Temple visits",
      "Boat rides",
      "Ganga Aarti",
      "Cultural exploration"
    ],

    Related_Treks: [
      "Mathura + Agra + Ayodhya",
    ],
    operating_days: ""
  },
  // {
  //   id: "bhimashankar-jivdhan-reverse-waterfalls",
  //   name: "Bhimashankar + Jivdhan + Reverse Waterfalls",
  //   state: "Maharashtra",
  //   imageUrl: "/assets/_/assets/Bhimashankar + Jivdhan + Reverse Waterfalls.jpg.png",
  //   hero_image: "/assets/_/assets/Bhimashankar + Jivdhan + Reverse Waterfalls.jpg.png",
  //   duration_days: "3D-2N, 4D-3N",
  //   price_start: 5999,
  //   currency: "INR",
  //   operating_days: "Fri, Sat, Sun",
  //   tags: ["mountain", "waterfall", "temple", "adventure"],
  //   operators: ["AT Adventure and Travels", "CUTE Voyages"],
  //   short_desc:
  //     "From sacred shrines to monsoon wonders — trek through Bhimashankar’s forests, conquer Jivdhan’s cliffs, and witness the magic of reverse waterfalls. It’s an adventure steeped in faith and thrill.",

  //   Trek_Points: [
  //     "Bhimashankar Temple",
  //     "Jivdhan Fort",
  //     "Naneghat",
  //     "Reverse Waterfall Point"
  //   ],

  //   Activites: [
  //     "Trekking",
  //     "Temple visit",
  //     "Photography",
  //     "Camping"
  //   ],

  //   Related_Treks: [
  //     "Aadrai Forest + Kalu Falls",
  //     "Lonavala + Visapur",
  //     "Andharban + Devkund"
  //   ]
  // },
  {
    id: "coorg-chikkamagaluru-mysuru",
    name: "Coorg + Chikkamagaluru + Mysuru",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Coorg + Chikkamagaluru + Mysuru.jpg.png",
    hero_image: "/assets/_/assets/Coorg + Chikkamagaluru + Mysuru.jpg.png",
    duration_days: "3D-42N, 4D-3N",
    price_start: 7500,
    currency: "INR",
    operating_days: "Thu, Fri, Sat",
    tags: ["hills", "nature", "heritage"],
    operators: [],
    short_desc:
      "A journey brewed in beauty — from Coorg’s coffee trails to Chikkamagaluru’s misty peaks and Mysuru’s royal grandeur. It’s nature, nostalgia, and nobility blended into one perfect escape.",

    Trek_Points: [
      "Mullayanagiri Peak",
      "Abbey Falls",
      "Raja’s Seat",
      "Mysore Palace"
    ],

    Activites: [
      "Trekking",
      "Coffee estate walks",
      "Sightseeing",
      "Cultural exploration"
    ],

    Related_Treks: [
      "Coorg + Wayanad",
      "coorg+chikkamagaluru",
    ]
  },
  {
    id: "dandeli-dudhsagar",
    name: "Dandeli + Dudhsagar",
    state: "Karnataka & Goa",
    imageUrl: "/assets/_/assets/Dandeli + Dudhsagar.jpg.png",
    hero_image: "/assets/_/assets/Dandeli + Dudhsagar.jpg.png",
    duration_days: "2D-1N",
    price_start: 5999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["forest", "waterfall", "adventure"],
    operators: [],
    short_desc:
      "Adventure meets awe — raft through Dandeli’s wild rivers and marvel at Dudhsagar’s thundering curtain of white. This forest-to-waterfall trail is the ultimate thrill wrapped in nature’s calm.",

    Trek_Points: [
      "Kali River",
      "Syntheri Rocks",
      "Dudhsagar Falls",
      "Mollem National Park"
    ],

    Activites: [
      "River rafting",
      "Jungle trek",
      "Waterfall exploration",
      "Camping"
    ],
  },
// {
//     id: "dudhsagar-tambdi-surla",
//     name: "Dudhsagar Falls + Tambdi Surla Waterfalls",
//     state: "Goa",
//     imageUrl: "/assets/_/assets/Dudhsagar Falls + Tambdi Surla Waterfalls.jpg.png",
//     hero_image: "/assets/_/assets/Dudhsagar Falls + Tambdi Surla Waterfalls.jpg.png",
//     duration_days: "3D-2N, 4D-3N",
//     price_start: 7499,
//     currency: "INR",
//     operating_days: "Fri, Sat, Sun",
//     tags: ["waterfall", "adventure", "forest"],
//     operators: ["CUTE Voyages", "Sparrow Adventures"],
//     short_desc:
//       "Double the magic, double the mist — trek to the mighty Dudhsagar and the tranquil Tambdi Surla hidden in Goa’s wild heart. Waterfalls, temples, and wanderlust await at every turn.",

//     Trek_Points: [
//       "Dudhsagar Falls",
//       "Tambdi Surla Temple",
//       "Mollem National Park"
//     ],

//     Activites: [
//       "Waterfall trekking",
//       "Temple visit",
//       "Camping",
//       "Photography"
//     ],

//     Related_Treks: [
//       "Dandeli + Dudhsagar",
//       "Goa Nature Trails"
//     ]
//   },
  {
    id: "gokarna-dandeli-murudeshwar",
    name: "Gokarna + Dandeli + Murudeshwar",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Gokarna + Dandeli + Murudeshwa.jpg.png",
    hero_image: "/assets/_/assets/Gokarna + Dandeli + Murudeshwa.jpg.png",
    duration_days: "3D-2N",
    price_start: 5999,
    currency: "INR",
    operating_days: "Thu, Fri, Sat",
    tags: ["beach", "forest", "spiritual", "adventure"],
    operators: [],
    short_desc:
      "Three shades of paradise — Gokarna’s golden shores, Dandeli’s wild forests, and Murudeshwar’s divine coast. A trip that blends spirituality, thrill, and the rhythm of the waves.",

    Trek_Points: [
      "Gokarna Beach Trail",
      "Kali River",
      "Murudeshwar Temple",
      "Vibuthi Falls"
    ],

    Activites: [
      "Trekking",
      "Rafting",
      "Beach camping",
      "Temple visit"
    ],

    Related_Treks: [
      "Gokarna + Dandeli",
      "Gokarna + Honnavar",
      "Gokarna + Murudeshwar",
      "Gokarna + Murudeshwar + Vibhuthi Falls",
      "Gokarna + Udupi"
    ]
  },
  {
    id: "gokarna-honnavar",
    name: "Gokarna + Honnavar",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/gokarna-honnavar.jpeg",
    hero_image: "/assets/_/assets/gokarna-honnavar.jpeg",
    duration_days: "3D-2N, 4D-3N",
    price_start: 4199,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["beach", "coastal", "nature"],
    operators: [],
    short_desc:
      "Where the beaches meet backwaters — Gokarna and Honnavar together offer the perfect coastal duet. Trek sandy shores, boat through calm waters, and watch sunsets melt into serenity.",

    Trek_Points: [
      "Gokarna Beach Trail",
      "Sharavathi Backwaters",
      "Vibuthi Falls"
    ],

    Activites: [
      "Beach trek",
      "Boating",
      "Camping",
      "Photography"
    ],

    Related_Treks: [
      "Gokarna + Murudeshwar",
      "Gokarna + Dandeli",
      "Gokarna + Murudeshwar",
      "Gokarna + Murudeshwar + Vibhuthi Falls",
      "Gokarna + Udupi"
    ]
  },
  {
    id: "gokarna-murudeshwar",
    name: "Gokarna + Murudeshwar",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/Gokarna + Murudeshwar.jpg (2).png",
    hero_image: "/assets/_/assets/Gokarna + Murudeshwar.jpg (2).png",
    duration_days: "2D-1N,3D-2N, 4D-3N",
    price_start: 5500,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["beach", "spiritual", "adventure"],
    operators: [],
    short_desc:
      "From Gokarna’s soulful beaches to Murudeshwar’s divine shores — this coastal trail is a journey of spirit, surf, and sunshine. Every wave whispers peace, every temple glows with calm.",

    Trek_Points: [
      "Gokarna Beach Trail",
      "Murudeshwar Temple",
      "Vibuthi Falls"
    ],

    Activites: [
      "Beach trek",
      "Temple visit",
      "Snorkeling",
      "Camping"
    ],

    Related_Treks: [
      "Gokarna + Dandeli + Murudeshwar",
       "Gokarna + Dandeli",
      "Gokarna + Murudeshwar",
      "Gokarna + Murudeshwar + Vibhuthi Falls",
      "Gokarna + Udupi"
     
    ]
  },
  {
    id: "gokarna-murudeshwar-vibhuthi",
    name: "Gokarna + Murudeshwar + Vibhuthi Falls",
    state: "Karnataka",
    imageUrl: "/assets/_/assets/gokarna+murudeshwar+vibhuthifalls.jpeg",
    hero_image: "/assets/_/assets/gokarna+murudeshwar+vibhuthifalls.jpeg",
    duration_days: "3D-2N,4D-3N, 5D-4N",
    price_start: 3999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["beach", "waterfall", "spiritual"],
    operators: [],
    short_desc:
      "From beach trails to waterfall wonders — explore Gokarna’s coastline, feel the mist of Vibuthi Falls, and find divine peace at Murudeshwar Temple. Adventure and serenity flow together here.",

    Trek_Points: [
      "Kudle Beach",
      "Om Beach",
      "Vibuthi Falls",
      "Murudeshwar Temple"
    ],

    Activites: [
      "Trekking",
      "Waterfall visit",
      "Temple exploration",
      "Camping"
    ],

    Related_Treks: [
      "Gokarna + Dandeli",
      "Gokarna + Honnavar",
       "Gokarna + Murudeshwar",
        "Gokarna + Udupi"
    ]
  },
  {
    id: "isha-ooty-coonoor",
    name: "Isha Foundation + Ooty + Coonoor",
    state: "Tamil Nadu",
    imageUrl: "/assets/_/assets/Isha Foundation + Ooty + Coonoor.jpg.png",
    hero_image: "/assets/_/assets/Isha Foundation + Ooty + Coonoor.jpg.png",
    duration_days: "3D-2N,4D-3N, 5D-4N",
    price_start: 7999,
    currency: "INR",
    operating_days: "Thu, Fri, Sat",
    tags: ["spiritual", "nature", "hills"],
    operators: [],
    short_desc:
      "A soulful retreat through Tamil Nadu’s hills — meditate at Isha, sip tea in Ooty’s green slopes, and breathe the mist of Coonoor. It’s a journey where the spirit and nature meet in harmony.",

    Trek_Points: [
      "Adiyogi Statue",
      "Dhyanalinga",
      "Ooty Lake",
      "Dolphin’s Nose"
    ],

    Activites: [
      "Yoga & meditation",
      "Sightseeing",
      "Trekking",
      "Photography"
    ],

    Related_Treks: [
      "Ooty + Isha Foundation",
      "Ooty + Coonoor + Mysuru",
      "Ooty + Coonoor",
    ]
  },
  {
    id: "kashmir-jammu-amritsar",
    name: "Kashmir + Jammu + Amritsar",
    state: "Jammu & Kashmir (UT)",
    imageUrl: "/assets/_/assets/Kashmir + Jammu + Amritsar.jpeg",
    hero_image: "/assets/_/assets/Kashmir + Jammu + Amritsar.jpeg",
    duration_days: "7D-6N, 8D-7N",
    price_start: 14999,
    currency: "INR",
    operating_days: "Wed, Fri, Sat",
    tags: ["mountain", "heritage", "spiritual", "culture"],
    operators: ["CUTE Voyages", "Sparrow Adventures"],
    short_desc:
      "From the snow-kissed valleys of Kashmir to the sacred glow of Amritsar’s Golden Temple, this journey weaves faith, culture, and mountain magic into one unforgettable story.",

    Trek_Points: [
      "Dal Lake",
      "Vaishno Devi",
      "Amritsar Golden Temple",
      "Gulmarg"
    ],

    Activites: [
      "Sightseeing",
      "Temple visits",
      "Photography",
      "Cultural exploration"
    ],

    Related_Treks: [
      "Kashmir + Leh Ladakh"
    ]
  },
  // {
  //   id: "kedarnath-badrinath-tungnath",
  //   name: "Kedarnath + Badrinath + Tungnath Temple",
  //   state: "Uttarakhand",
  //   imageUrl: "/assets/_/assets/Kedarnath + Badrinath + Tungnath Temple.jpg.png",
  //   hero_image: "/assets/_/assets/Kedarnath + Badrinath + Tungnath Temple.jpg.png",
  //   duration_days: "6D-5N, 7D-6N",
  //   price_start: 11999,
  //   currency: "INR",
  //   operating_days: "Wed, Fri, Sat",
  //   tags: ["spiritual", "mountain", "pilgrimage"],
  //   operators: ["CUTE Voyages", "Beyond Dream Destination"],
  //   short_desc:
  //     "Walk the divine Himalayan paths where legends breathe — from Kedarnath’s sacred silence to Badrinath’s grandeur and Tungnath’s heavenly peace. This yatra is not just a trek — it’s a soul’s awakening.",

  //   Trek_Points: [
  //     "Kedarnath Temple",
  //     "Badrinath Temple",
  //     "Tungnath Temple",
  //     "Chandrashila Peak"
  //   ],

  //   Activites: [
  //     "Trekking",
  //     "Temple visit",
  //     "Meditation",
  //     "Photography"
  //   ],

  //   Related_Treks: [
  //     "Char Dham Yatra",
  //     "Do Dham Yatra",
  //     "Ek Dham Yatra"
  //   ]
  // },
  {
    id: "kerala-kanyakumari",
    name: "Kerala + Kanyakumari",
    state: "Kerala & Tamil Nadu",
    imageUrl: "/assets/_/assets/Kerala + Kanyakumari.jpg.png",
    hero_image: "/assets/_/assets/Kerala + Kanyakumari.jpg.png",
    duration_days: "5D-4N, 6D-5N",
    price_start: 16300,
    currency: "INR",
    operating_days: "Thu, Fri, Sat",
    tags: ["beach", "nature", "romantic", "culture"],
    operators: [],
    short_desc:
      "Sail through Kerala’s serene backwaters and stand where three oceans meet at Kanyakumari. Watch sunsets melt into waves, breathe the scent of coconut air, and feel South India’s soul unfold in color and calm.",

    Trek_Points: [
      "Alleppey Backwaters",
      "Varkala Beach",
      "Kanyakumari Beach",
      "Vivekananda Rock Memorial"
    ],

    Activites: [
      "Houseboat cruise",
      "Beach walk",
      "Temple visit",
      "Cultural exploration"
    ],
  },
  // {
  //   id: "kumbhe-nanemachi-lingyaghat",
  //   name: "Kumbhe + Nanemachi + Lingyaghat Waterfalls",
  //   state: "Maharashtra",
  //   imageUrl: "/assets/_/assets/Kumbhe + Nanemachi + Lingyaghat Waterfalls.jpeg",
  //   hero_image: "/assets/_/assets/Kumbhe + Nanemachi + Lingyaghat Waterfalls.jpeg",
  //   duration_days: "2D-1N, 3D-2N",
  //   price_start: 4499,
  //   currency: "INR",
  //   operating_days: "Sat, Sun",
  //   tags: ["waterfall", "monsoon", "forest"],
  //   operators: ["AT Adventure and Travels", "CUTE Voyages"],
  //   short_desc:
  //     "Hidden deep within the Sahyadris, Kumbhe, Nanemachi, and Lingyaghat shimmer like emerald jewels in the rain. Trek through dripping canopies, chase waterfalls, and feel nature’s heartbeat with every drop.",

  //   Trek_Points: [
  //     "Kumbhe Waterfall",
  //     "Nanemachi Waterfall",
  //     "Lingyaghat Trail"
  //   ],

  //   Activites: [
  //     "Waterfall trekking",
  //     "Camping",
  //     "Photography",
  //     "Nature walk"
  //   ],

  //   Related_Treks: [
  //     "Andharban + Devkund",
  //     "Aadrai Forest + Kalu Falls"
  //   ]
  // },
  {
    id: "lonavala-andharban-devkund",
    name: "Lonavala + Andharban + Devkund Waterfalls",
    state: "Maharashtra",
    imageUrl: "/assets/_/assets/Lonavala + Andharban + Devkund Waterfalls.jpg.png",
    hero_image: "/assets/_/assets/Lonavala + Andharban + Devkund Waterfalls.jpg.png",
    duration_days: "3D-2N, 4D-3N",
    price_start: 4999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["monsoon", "adventure", "forest"],
    operators: [],
    short_desc:
      "Misty hills, whispering trees, and the roar of Devkund — this monsoon trilogy captures Maharashtra’s wild beauty. From Lonavala’s charm to Andharban’s darkness, every trail tells a story of rain and wonder.",

    Trek_Points: [
      "Tiger’s Leap",
      "Andharban Trail",
      "Devkund Waterfall"
    ],

    Activites: [
      "Trekking",
      "Camping",
      "Waterfall visit",
      "Photography"
    ],

    Related_Treks: [
      "Lonavala + Visapur Fort",
      "Rajmachi + Visapur"
    ]
  },
  {
    id: "lonavala-visapur",
    name: "Lonavala + Visapur Fort",
    state: "Maharashtra",
    imageUrl: "/assets/_/assets/Lonavala + Visapur Fort.jpg.png",
    hero_image: "/assets/_/assets/Lonavala + Visapur Fort.jpg.png",
    duration_days: "2D-1N, 3D-2N",
    price_start: 4499,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["fort", "trekking", "monsoon"],
    operators: [],
    short_desc:
      "Climb through clouds and ancient ruins as the hills of Lonavala and Visapur wrap you in mist. The perfect weekend escape for those who chase rain, history, and adventure all in one trail.",

    Trek_Points: [
      "Visapur Fort",
      "Bhushi Dam",
      "Karla Caves"
    ],

    Activites: [
      "Trekking",
      "Camping",
      "Photography",
      "Nature exploration"
    ],

    Related_Treks: [
      "Lonavala + Andharban + Devkund",
      "Rajmachi + Visapur Fort"
    ]
  },
  // {
  //   id: "magical-himachal",
  //   name: "Magical Himachal Tour",
  //   state: "Himachal Pradesh",
  //   imageUrl: "/assets/_/assets/Magical Himachal Tour.jpg.png",
  //   hero_image: "/assets/_/assets/Magical Himachal Tour.jpg.png",
  //   duration_days: "6D-5N, 7D-6N",
  //   price_start: 11999,
  //   currency: "INR",
  //   operating_days: "Thu, Fri, Sat",
  //   tags: ["mountain", "romantic", "nature", "roadtrip"],
  //   operators: ["CUTE Voyages", "Beyond Dream Destination"],
  //   short_desc:
  //     "Snow-draped peaks, pine forests, and laughter echoing through mountain valleys — Himachal truly feels magical. Wander from Shimla’s old charm to Manali’s snowy rush and Kasol’s peaceful hum.",

  //   Trek_Points: [
  //     "Shimla",
  //     "Manali",
  //     "Kasol",
  //     "Solang Valley"
  //   ],

  //   Activites: [
  //     "Trekking",
  //     "Camping",
  //     "River rafting",
  //     "Sightseeing"
  //   ],

  //   Related_Treks: [
  //     "Shimla + Manali",
  //     "Kasol + Kheerganga"
  //   ]
  // },
  {
    id: "mahabaleshwar-panchgani-pratapgad",
    name: "Mahabaleshwar + Panchgani + Pratapgad Fort",
    state: "Maharashtra",
    imageUrl:"/assets/_/assets/Mahabaleshwar + Panchgani + Pratapgad Fort.jpg.png",
    hero_image: "/assets/_/assets/Mahabaleshwar + Panchgani + Pratapgad Fort.jpg.png",
    duration_days: "3D-2N, 4D-3N",
    price_start: 5999,
    currency: "INR",
    operating_days: "Fri, Sat, Sun",
    tags: ["hills", "nature", "heritage", "family"],
    operators: [],
    short_desc:
      "Breathe in the sweet scent of strawberries and rain-drenched earth as you explore Mahabaleshwar’s lush valleys, Panchgani’s plateaus, and the proud walls of Pratapgad Fort — nature and history in perfect harmony.",

    Trek_Points: [
      "Pratapgad Fort",
      "Table Land",
      "Venna Lake",
      "Elephant Point"
    ],

    Activites: [
      "Trekking",
      "Boating",
      "Sightseeing",
      "Photography"
    ],

    Related_Treks: [
      "Lonavala + Matheran"
    ]
  },
{
  id: "manali-kasol-kheerganga",
  name: "Manali + Kasol + Kheerganga",
  state: "Himachal Pradesh",
  imageUrl: "/assets/_/assets/Manali + Kasol + Kheerganga.jpg.png",
  hero_image: "/assets/_/assets/Manali + Kasol + Kheerganga.jpg.png",
  duration_days: "6D-5N, 7D-6N",
  price_start: 9100,
  currency: "INR",
  operating_days: "Thu, Fri, Sat",
  tags: ["mountain", "adventure", "nature", "camping"],
  operators: [],
  short_desc:
    "From Manali’s snow trails to Kasol’s cozy cafés and Kheerganga’s steaming springs under the stars — this Himachal escape is made of mountains, laughter, and timeless tranquility.",
  Trek_Points: [
    "Manali",
    "Kasol",
    "Tosh",
    "Kheerganga"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "River walks",
    "Photography"
  ],
  Related_Treks: [
    "Manali + Kasol"
  ]
},
{
  id: "manali-kasol",
  name: "Manali + Kasol",
  state: "Himachal Pradesh",
  imageUrl: "/assets/_/assets/Manali + Kasol.jpg.png",
  hero_image: "/assets/_/assets/Manali + Kasol.jpg.png",
  duration_days: "4D-3N,5D-4N, 6D-5N",
  price_start: 5499,
  currency: "INR",
  operating_days: "Thu, Fri, Sat",
  tags: ["mountain", "nature", "adventure", "backpack"],
  operators: ["CUTE Voyages"],
  short_desc:
    "Manali’s peaks and Kasol’s riverside charm create the perfect Himalayan story — trek misty trails, share stories around bonfires, and let every sunset whisper calm into your heart.",
  Trek_Points: [
    "Manali",
    "Kasol",
    "Chalal Village",
    "Solang Valley"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "Local café hopping",
    "Photography"
  ],
  Related_Treks: [
    "Manali + Kasol + Kheerganga"  ]
},
{
  id: "matheran-lonavala",
  name: "Matheran + Lonavala",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/Matheran + Lonavala.jpg.png",
  hero_image: "/assets/_/assets/Matheran + Lonavala.jpg.png",
  duration_days: "3D-2N, 4D-3N",
  price_start: 5999,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["hills", "nature", "monsoon", "heritage"],
  operators: [],
  short_desc:
    "Ride the vintage toy train through Matheran’s forested ridges and feel the mist of Lonavala’s cliffs. This nostalgic monsoon getaway is pure mountain poetry for your senses.",
  Trek_Points: [
    "Echo Point",
    "Louisa Point",
    "Bhushi Dam",
    "Tiger’s Leap"
  ],
  Activites: [
    "Trekking",
    "Sightseeing",
    "Photography",
    "Toy train ride"
  ],
  Related_Treks: [
    "Lonavala + Visapur",
    "Andharban + Devkund"
  ]
},
{
  id: "mathura-agra-ayodhya-nepal",
  name: "Mathura + Agra + Ayodhya + Nepal",
  state: "Uttar Pradesh & Nepal",
  imageUrl: "/assets/_/assets/Mathura + Agra + Ayodhya + Nepal.jpg.png",
  hero_image: "/assets/_/assets/Mathura + Agra + Ayodhya + Nepal.jpg.png",
  duration_days: "7D-6N, 8D-7N,9D-8N,10-9N",
  price_start: 16999,
  currency: "INR",
  operating_days: "Thu, Fri, Sat",
  tags: ["spiritual", "heritage", "culture", "international"],
  operators: [],
  short_desc:
    "From the holy ghats of Mathura to the marble grace of Agra and the peaceful temples of Nepal — journey across borders where devotion meets art and faith transcends frontiers.",
  Trek_Points: [
    "Taj Mahal",
    "Krishna Janmabhoomi Temple",
    "Ayodhya Ram Mandir",
    "Lumbini Temple (Nepal)"
  ],
  Activites: [
    "Temple visit",
    "Sightseeing",
    "Cultural exploration",
    "Photography"
  ],
  Related_Treks: [
    "Ayodhya + Varanasi + Mathura",
  ]
},
{
  id: "munnar-kolukkumalai",
  name: "Munnar + Kolukkumalai",
  state: "Kerala",
  imageUrl: "/assets/_/assets/Munnar + Kolukkumalai.jpg.png",
  hero_image: "/assets/_/assets/Munnar + Kolukkumalai.jpg.png",
  duration_days: "3D-2N, 4D-3N",
  price_start: 7999,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["hills", "tea", "adventure", "sunrise"],
  operators: ["CUTE Voyages", "Sparrow Adventures"],
  short_desc:
    "Rise above the clouds at Kolukkumalai, the world’s highest tea estate. Trek through Munnar’s emerald slopes, breathe misty air, and greet the sun as it paints the mountains gold.",
  Trek_Points: [
    "Kolukkumalai Peak",
    "Top Station",
    "Eravikulam National Park",
    "Tea Plantations"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "Tea walks",
    "Photography"
  ],
  Related_Treks: [
    "Munnar + Alleppey",
    "Wayanad + Ooty"
  ]
},
{
  id: "ooty-coonoor-isha",
  name: "Ooty + Coonoor + Isha Foundation",
  state: "Tamil Nadu",
  imageUrl: "/assets/_/assets/Ooty + Coonoor + Isha Foundation.jpg.png",
  hero_image: "/assets/_/assets/Ooty + Coonoor + Isha Foundation.jpg.png",
  duration_days: "4D-3N, 5D-4N",
  price_start: 7999,
  currency: "INR",
  operating_days: "Thu, Fri, Sat",
  tags: ["nature", "spiritual", "hills", "relaxation"],
  operators: ["Beyond Dream Destination"],
  short_desc:
    "Soak in the serenity of Ooty’s blue hills, Coonoor’s breezy trails, and Isha’s divine stillness. A journey that rejuvenates body, mind, and spirit in the lap of the Nilgiris.",
  Trek_Points: [
    "Ooty Lake",
    "Doddabetta Peak",
    "Dolphin’s Nose",
    "Adiyogi Statue"
  ],
  Activites: [
    "Trekking",
    "Meditation",
    "Sightseeing",
    "Yoga"
  ],
  Related_Treks: [
    "Isha Foundation + Ooty + Coonoor",
    "Ooty + Mysuru"
  ]
},
{
  id: "trimbakeshwar-grishneshwar-shirdi",
  name: "Trimbakeshwar + Grishneshwar + Shirdi",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/Trimbakeshwar + Grishneshwar + Shirdi.jpg.png",
  hero_image: "/assets/_/assets/Trimbakeshwar + Grishneshwar + Shirdi.jpg.png",
  duration_days: "3D-2N,4D-3N, 5D-4N",
  price_start: 5999,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["spiritual", "temple", "heritage"],
  operators: [],
  short_desc:
    "Embark on a sacred odyssey across Maharashtra’s most divine landmarks — from Trimbakeshwar’s sacred Jyotirlinga to the blessings of Shirdi Sai Baba. A pilgrimage that fills your heart with peace and devotion.",
  Trek_Points: [
    "Trimbakeshwar Temple",
    "Grishneshwar Temple",
    "Shirdi Sai Baba Temple"
  ],
  Activites: [
    "Temple visits",
    "Pilgrimage walk",
    "Meditation",
    "Cultural exploration"
  ],
  
},
{
  id: "visapur-lohagad",
  name: "Visapur Fort + Lohagad Fort",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/Visapur Fort + Lohagad Fort.jpg.png",
  hero_image: "/assets/_/assets/Visapur Fort + Lohagad Fort.jpg.png",
  duration_days: "2D-1N, 3D-2N,4D-3N",
  price_start: 5500,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["fort", "monsoon", "adventure", "trekking"],
  operators: [],
  short_desc:
    "Twin fort trails wrapped in mist and history — climb Visapur and Lohagad through lush monsoon forests, where clouds kiss ancient walls and adventure meets timeless beauty.",
  Trek_Points: [
    "Visapur Fort",
    "Lohagad Fort",
    "Pawna Lake View"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "Photography",
    "Fort exploration"
  ],
  Related_Treks: [
    "Lonavala + Visapur Fort",
    "Rajmachi + Visapur"
  ]
},
{
  id: "wayanad-ooty",
  name: "Wayanad + Ooty",
  state: "Kerala & Tamil Nadu",
  imageUrl: "/assets/_/assets/wayanad-ooty.png",
  hero_image: "/assets/_/assets/wayanad-ooty.png",
  duration_days: "4D-3N, 5D-4N",
  price_start: 12999,
  currency: "INR",
  operating_days: "Fri, Sat, Sun",
  tags: ["hills", "forest", "nature", "family"],
  operators: [],
  short_desc:
    "From Wayanad’s spice-laden forests to Ooty’s dreamy tea valleys — this is a story of mist, mountains, and tranquility. Perfect for families, wanderers, and lovers of nature’s quiet charm.",
  Trek_Points: [
    "Edakkal Caves",
    "Chembra Peak",
    "Ooty Lake",
    "Botanical Gardens"
  ],
  Activites: [
    "Trekking",
    "Sightseeing",
    "Tea estate walks",
    "Photography"
  ],
  Related_Treks: [
    "Coorg + Wayanad",
    "Ooty + Coonoor",
    "Ooty + Coonoor + Mysuru",
    "Ooty + Isha foundation",
    "Ooty + Coonoor + Isha foundation"

  ]
},
// {
//   id: "alleppey",
//   name: "Alleppey",
//   state: "Kerala",
//   imageUrl: "/assets/_/assets/alleppey.png",
//   hero_image: "/assets/_/assets/alleppey.png",
//   duration_days: "2D/1N",
//   price_start: 6999,
//   currency: "INR",
//   operating_days: "All Seasons (Best: Sep–Mar)",
//   tags: ["Backwaters", "Houseboat", "Kerala", "Romantic Getaway"],
//   operators: ["Kerala Tourism Partners", "Backwater Voyage Operators"],
//   short_desc:
//     "Alleppey, often called the ‘Venice of the East’, is Kerala’s most enchanting backwater destination. Cruise through serene canals in a traditional houseboat, surrounded by coconut palms, lush paddy fields, and village life. Perfect for those seeking calm, beauty, and a touch of romance in the lap of nature.",
//   Trek_Points: [
//     "Houseboat cruise through scenic backwaters",
//     "Alappuzha Beach and Lighthouse",
//     "Vembanad Lake sunset view",
//     "Pathiramanal Island bird sanctuary",
//     "Kuttanad paddy fields (below sea level farmlands)"
//   ],
//   Activites: [
//     "Houseboat Stay",
//     "Village Walks",
//     "Fishing and Canoe Rides",
//     "Ayurvedic Spa",
//     "Photography"
//   ],
//   Related_Treks: [
//     "Alleppey + Varkala",
//     "Kerala + Kanyakumari",
//     "Munnar + Kolukkumalai",
//     "Wayanad + Ooty"
//   ]
// },
{
  id: "coorg",
  name: "Coorg",
  state: "Karnataka",
  imageUrl: "/assets/_/assets/Coorg.png",
  hero_image: "/assets/_/assets/Coorg.png",
  duration_days: "2D-1N,3D/2N",
  price_start: 4199,
  currency: "INR",
  operating_days: "Thu.Fri,Sat",
  tags: ["Coffee", "Hill Station", "Adventure", "Nature"],
  operators: ["Cute Voyages"],
  short_desc:
    "Coorg, fondly known as the ‘Scotland of India’, is a paradise of coffee plantations, mist-covered hills, and gushing waterfalls. This hill station offers a perfect mix of nature, culture, and adventure — from scenic treks to elephant camps and delicious Kodava cuisine. Ideal for families, couples, and adventure lovers alike.",
  Trek_Points: [
    "Abbey Falls",
    "Raja’s Seat",
    "Mandalpatti Jeep Safari",
    "Dubare Elephant Camp",
    "Nisargadhama bamboo forest and hanging bridge"
  ],
  Activites: [
    "Trekking",
    "Coffee Plantation Walks",
    "Camping",
    "Sightseeing",
    "Wildlife and Birdwatching"
  ],
  Related_Treks: [
    "Coorg + Chikkamagaluru",
    "Coorg + Chikkamagaluru + Mysuru",
    "Wayanad + Coorg"
  ]
},
{
  id: "devkund",
  name: "Devkund Waterfall Trek",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/Devkund.png",
  hero_image: "/assets/_/assets/Devkund.png",
  duration_days: "3D-2N",
  price_start: 4899,
  currency: "INR",
  operating_days: "Thu,Fri,Sat",
  tags: ["Waterfall", "Adventure", "Trekking", "Weekend Getaway"],
  operators: [],
  short_desc:
    "The Devkund Waterfall Trek is one of Maharashtra’s most stunning monsoon adventures. Nestled deep in Bhira village near Tamhini Ghat, the trail winds through lush forests, river crossings, and scenic valleys, ending at a majestic plunge waterfall forming a turquoise pool. It’s the perfect one-day escape for nature and adventure seekers.",
  Trek_Points: [
    "Bhira village base point near Tamhini Ghat",
    "Scenic forest and river-crossing trail",
    "Devkund Waterfall",
    "Andharban valley",
    "Local villages and farmlands en route"
  ],
  Activites: [
    "Trekking",
    "Swimming (seasonal, safe zones only)",
    "Photography",
    "Nature Walks",
    "Waterfall Exploration"
  ],
  Related_Treks: [
    "Andharban + Devkund Waterfalls",
    "Lonavala + Andharban + Devkund Waterfalls",
    "Rajmachi + Visapur Trek",
    "Visapur Fort + Lohagad Fort"
  ]
},
{
  id: "ooty-coonoor-mysuru",
  name: "Ooty + Coonoor + Mysuru",
  state: "Tamil Nadu & Karnataka",
  imageUrl: "/assets/_/assets/Ooty + Coonoor + Mysuru.jpg.png",
  hero_image: "/assets/_/assets/Ooty + Coonoor + Mysuru.jpg.png",
  duration_days: "3D-2N,4D/3N",
  price_start: 7499,
  currency: "INR",
  operating_days: "Thu,Fri,Sat)",
  tags: ["Hill Station", "Heritage", "Nature", "Cultural Circuit"],
  operators: [],
  short_desc:
    "Explore South India’s most-loved hill and heritage circuit — Ooty, Coonoor, and Mysuru. Experience misty hills, colonial charm, and royal architecture all in one trip. Ride the Nilgiri toy train, walk through tea estates, and end your journey exploring the majestic Mysore Palace. A perfect getaway for couples, families, and culture lovers.",
  Trek_Points: [
    "Ooty Lake & Botanical Gardens",
    "Doddabetta Peaks",
    "Coonoor Tea Estate and Dolphin’s Nose viewpoint",
    "Nilgiri Mountain Railway (Toy Train ride)",
    "Mysore Palace & Brindavan Gardens",
    "Chamundi Hills viewpoint"
  ],
  Activites: [
    "Sightseeing",
    "Tea Estate Walks",
    "Toy Train Ride",
    "Cultural Exploration",
    "Photography"
  ],
  Related_Treks: [
    "Ooty + Coonoor + Isha Foundation",
    "Ooty + Coonoor",
    "Wayanad + Ooty",
  ]
},
{
  id: "pondicherry-mahabalipuram",
  name: "Pondicherry + Mahabalipuram",
  state: "Tamil Nadu & Puducherry (UT)",
  imageUrl: "/assets/_/assets/Pondicherry + Mahabalipuram.jpg.png",
  hero_image: "/assets/_/assets/Pondicherry + Mahabalipuram.jpg.png",
  duration_days: "2D-1N,3D/2N",
  price_start: 4999,
  currency: "INR",
  operating_days: "Thu,Fri,Sat",
  tags: ["Beach", "Heritage", "Culture", "French Town", "Weekend Getaway"],
  operators: [],
  short_desc:
    "This coastal circuit blends French colonial charm with ancient Dravidian architecture. Explore the colorful streets and cafés of Pondicherry, unwind by the beach, then head north to witness Mahabalipuram’s stunning rock-cut temples and seashore monuments. A perfect mix of culture, history, and seaside relaxation for families and couples.",
  Trek_Points: [
    "French Quarter & Promenade Beach",
    "Auroville & Matrimandir meditation dome",
    "Paradise Beach ferry ride",
    "Mahabalipuram Shore Temple",
    "Arjuna’s Penance & Five Rathas rock carvings",
    "Local café culture and coastal drive on ECR"
  ],
  Activites: [
    "Beach Walks",
    "Sightseeing & Heritage Tours",
    "Cycling",
    "Meditation & Yoga",
    "Café Hopping & Photography"
  ],
  Related_Treks: [
    "Pondicherry + Pichavaram Mangrove Forest",
  ]
},
{
  id: "pondicherry-pichavaram",
  name: "Pondicherry + Pichavaram Mangrove Forest",
  state: "Tamil Nadu & Puducherry (UT)",
  imageUrl: "/assets/_/assets/Pondicherry + Pichavaram Mangrove Forest.jpg.png",
  hero_image: "/assets/_/assets/Pondicherry + Pichavaram Mangrove Forest.jpg.png",
  duration_days: "2D-1N , 3D-2N",
  price_start: 7499,
  currency: "INR",
  operating_days: "Thu,Fri",
  tags: ["Nature", "Backwaters", "Boating", "Eco Tourism", "Weekend Getaway"],
  operators: [],
  short_desc:
    "This serene coastal circuit combines Pondicherry’s French elegance with the natural wonder of the Pichavaram Mangrove Forest — the world’s second-largest mangrove ecosystem. Enjoy café-hopping and sea breezes in Pondicherry before gliding through emerald waterways surrounded by lush mangrove tunnels. A perfect quick escape for couples and nature enthusiasts.",
  Trek_Points: [
    "Promenade Beach & French Quarter",
    "Auroville & Matrimandir meditation center",
    "Paradise Beach ferry ride and relaxation",
    "Pichavaram Mangrove Forest scenic boat safari",
    "Chidambaram Nataraja Temple (optional nearby visit)"
  ],
  Activites: [
    "Boating through Mangroves",
    "Cycling & Beach Walks",
    "Café Hopping",
    "Photography",
    "Bird Watching"
  ],
  Related_Treks: [
    "Pondicherry + Mahabalipuram",
  ]
},
{
  id: "rajmachi-visapur",
  name: "Rajmachi + Visapur",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/Rajmachi + Visapur.jpg.png",
  hero_image: "/assets/_/assets/Rajmachi + Visapur.jpg.png",
  duration_days: "3D-2N",
  price_start: 6499,
  currency: "INR",
  operating_days: "Fri",
  tags: ["Fort Trek", "Adventure", "Monsoon Trek", "Nature"],
  operators: [""],
  short_desc:
    "The Rajmachi + Visapur Trek is a classic Sahyadri adventure that combines two iconic forts of Maharashtra. Trek through misty valleys, dense forests, and waterfalls as you explore the ancient hill forts of Rajmachi and Visapur near Lonavala. A perfect weekend escape for monsoon and fort lovers seeking both thrill and history.",
  Trek_Points: [
    "Rajmachi Fort",
    "Visapur Fort",
    "Lonavala",
    "Waterfall-laden monsoon trails",
    "Sunset viewpoints and camping areas"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "Fort Exploration",
    "Photography",
    "Waterfall Trail Hike"
  ],
  Related_Treks: [
    "Visapur Fort + Lohagad Fort",
    "Lonavala + Andharban + Devkund Waterfalls",
  ]
},
{
  id: "shimla-manali",
  name: "Shimla + Manali",
  state: "Himachal Pradesh",
  imageUrl: "/assets/_/assets/Shimla + Manali.jpg.png",
  hero_image: "/assets/_/assets/Shimla + Manali.jpg.png",
  duration_days: "5D-4N , 6D-5N , 7D-6N",
  price_start: 12700,
  currency: "INR",
  operating_days: "Wed,Thu,Fri",
  tags: ["Hill Station", "Snow", "Adventure", "Himachal Tour"],
  operators: ["Beyound dream destination"],
  short_desc:
    "The Shimla + Manali tour combines Himachal’s two most iconic hill stations into one unforgettable Himalayan escape. Explore the colonial charm of Shimla’s Ridge, enjoy toy-train rides, then head to snow-laden Manali for adventure, cafes, and Solang Valley thrills. A perfect trip for families, honeymooners, and mountain lovers alike.",
  Trek_Points: [
    "Shimla",
    "Kufri",
    "Manali",
    "Solang Valley",
    "Rohtang Pass"
  ],
  Activites: [
    "Sightseeing",
    "Trekking & Hiking",
    "Paragliding",
    "Snow Activities",
    "Café Hopping & Shopping"
  ],
  Related_Treks: [
    "Manali + Kasol",
    "Manali + Kasol + Kheerganga"
  ]
},
{
  id: "sikkim-gangtok",
  name: "Sikkim + Gangtok",
  state: "Sikkim",
  imageUrl: "/assets/_/assets/Sikkim + Gangtok.jpg.png",
  hero_image: "/assets/_/assets/Sikkim + Gangtok.jpg.png",
  duration_days: "5D-4N , 6D-5N",
  price_start: 16999,
  currency: "INR",
  operating_days: "Wed,Thu",
  tags: ["Himalayas", "Northeast", "Culture", "Snow", "Monasteries"],
  operators: [],
  short_desc:
    "Explore the beauty of the Eastern Himalayas with the Sikkim + Gangtok circuit — a journey filled with monasteries, lakes, and snow-clad peaks. Visit the vibrant capital Gangtok, soak in the calm of Tsomgo Lake, and enjoy the serenity of monasteries nestled amidst mountains. Ideal for families, couples, and culture seekers looking for a peaceful yet adventure-filled escape.",
  Trek_Points: [
    "Gangtok city",
    "Tsomgo Lake",
    "Nathula Pass",
    "Rumtek",
    "Banjhakri Waterfalls"
  ],
  Activites: [
    "Sightseeing",
    "Cable Car Ride",
    "Monastery Visits",
    "Shopping",
    "Photography"
  ],
},
{
  id: "rajmachi-visapur Trek",
  name: "Rajmachi + Visapur Trek",
  state: "Maharashtra",
  imageUrl: "/assets/_/assets/rajmachi-visapur trek.jpeg",
  hero_image: "/assets/_/assets/rajmachi-visapur trek.jpeg",
  duration_days: "2D-1N , 3D-2N",
  price_start: 5999,
  currency: "INR",
  operating_days: "Wed,Thu,Fri",
  tags: ["Fort Trek", "Adventure", "Monsoon Trek", "Nature"],
  operators: [],
  short_desc:
    "The Rajmachi + Visapur Trek is a thrilling Sahyadri adventure combining two of Maharashtra’s most iconic forts. Walk through waterfalls, misty forests, and ancient trade routes while witnessing panoramic valley views and centuries-old architecture — a perfect monsoon weekend escape for trekkers and explorers.",
  Trek_Points: [
    "Rajmachi Fort",
    "Visapur Fort",
    "Lonavala",
    "Khandala",
    "Waterfall-laden"
  ],
  Activites: [
    "Trekking",
    "Camping",
    "Fort Exploration",
    "Photography",
    "Waterfall Trails"
  ],
  Related_Treks: [
    "Rajmachi + Visapur",
  ]
},
{
  id: "ooty-isha-foundation",
  name: "Ooty + Isha Foundation",
  state: "Tamil Nadu",
  imageUrl: "/assets/_/assets/ooty-isha foundation.jpeg",
  hero_image: "/assets/_/assets/ooty-isha foundation.jpeg",
  duration_days: "3D/2N",
  price_start: 7999,
  currency: "INR",
  operating_days: "Thu,Fri,Sat",
  tags: ["Hill Station", "Spiritual", "Nature", "Relaxation"],
  operators: [""],
  short_desc:
    "Discover the spiritual and natural charm of Tamil Nadu through Ooty’s rolling hills and the serene Isha Foundation in Coimbatore. This combo blends nature walks through tea estates with meditative calm at the Adiyogi Shiva statue — a rejuvenating retreat for both mind and soul.",
  Trek_Points: [
    "Ooty Lake & Botanical Gardens",
    "Doddabetta Peak ",
    "Tea Factory & Museum",
    "Isha Foundation",
    "Nilgiri Mountain"
  ],
  Activites: [
    "Sightseeing",
    "Meditation & Yoga",
    "Tea Estate Walks",
    "Nature Photography",
    "Cultural Exploration"
  ],
  Related_Treks: [
    "Ooty + Coonoor",
    "Ooty + Coonoor + Isha foundation",
    "Ooty + Coonoor + Mysuru"
  ]
}
];

export const allTreks = treks.map(t => ({ name: t.name, state: t.state }));
