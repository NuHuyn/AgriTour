// src/data/tour_sample_full.js
import { assets } from "./assets";
export const tour_full_sample_list = [
  {
    id: 1,
        tour_name: "Northern Vietnam Scenic Tour",
        tour_image: assets.north,
        location: "Hue",
        region: "North",
        price: "50$ per person",
        start_date: "2026-01-10",
        period: "6 days 5 nights",
        available: true,
        available_slots: 20,
        partner_id: 101,
        partner_name: "Nguyễn Văn A",
        category_id: 1,
        status: "pending",

    /* HIGHLIGHT INFO */
    route: "Ha Giang – Quan Ba – Dong Van – Lung Cu – Meo Vac – Nho Que River",
    departure_dates:
      "06, 13, 20, 27/09 • 05, 12, 19, 26/10 • 02, 09, 16, 23, 30/11 • 07, 14, 21/12/2025",
    transport: "Modern Tourist Bus & Round-trip Flight",

    /* DESCRIPTION */
    long_description: `
      Autumn in Northeast Vietnam is a dream journey for travelers who love majestic landscapes
      and poetic mountain scenery. This tour takes you across the stunning highlands of Ha Giang,
      golden rice terraces, and blooming buckwheat flower fields. Each moment promises unforgettable
      memories for nature lovers and adventure seekers alike.
    `,

    tags: [
      "Northeast Vietnam",
      "Ha Giang",
      "Autumn Tour",
      "Dong Van Plateau",
      "Nho Que River",
      "Vietnam Highlands",
      "Mountain Adventure"
    ],

    /* ITINERARY */
    itinerary: [
      {
        day: "DAY 1 | Ho Chi Minh City – Hanoi – Ha Giang (Lunch, Dinner)",
        content: [
          "Meet at Tan Son Nhat Airport at least 2 hours before departure.",
          "Fly to Hanoi and transfer to Ha Giang by tourist bus.",
          "Stop for lunch along the way.",
          "Continue through scenic mountain roads.",
          "Dinner and overnight stay in Ha Giang."
        ],
        images: [
          "https://www.asiatica-travel.it/ckfinder/userfiles/images/Sapa-valle-Muong-Hoa-4.jpg",
          "https://www.marcovasco.fr/blog/wp-content/uploads/2011/10/Il-etait-une-fois-La-ferme-du-Colvert-1014x487.jpg"
        ]
      },
      {
        day: "DAY 2 | Ha Giang – Yen Minh – Dong Van (Breakfast, Lunch, Dinner)",
        content: [
          "Breakfast, then travel through Bac Sum Slope.",
          "Visit Quan Ba Heaven Gate and Twin Mountains.",
          "Explore Lung Tam Weaving Village.",
          "Visit Pho Cao Ancient Village and Pao's House.",
          "Explore Vuong Family Palace.",
          "Visit Lung Cu Flagpole.",
          "Dinner and overnight stay in Dong Van."
        ],
        images: ["https://ik.imagekit.io/tvlk/blog/2023/08/go-and-share-mua-lua-chin-sapa-2.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"]
      },
      {
      day: "DAY 3 | Dong Van – Meo Vac – Ha Giang (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at the hotel.",
        "Conquer the legendary Ma Pi Leng Pass—one of Vietnam’s Four Great Passes.",
        "Enjoy a boat trip along the magnificent Tu San Canyon on the Nho Que River.",
        "Lunch in Meo Vac town.",
        "Visit the weekly local market (if traveling on Sunday).",
        "Return to Ha Giang for dinner and overnight stay."
      ],
      images: [
        "https://static-images.vnncdn.net/files/publish/2022/10/12/ha-giang-38.jpg",
        "https://voyageviet-nam.com/wp-content/uploads/2020/04/trek-sapa.jpg"
      ]
    },

    {
      day: "DAY 4 | Hung Kings Temple – Hanoi – Ho Chi Minh City (Breakfast, Lunch)",
      content: [
        "Breakfast and check out.",
        "Depart for Phu Tho Province to visit the Hung Kings Temple Historical Complex.",
        "Climb the stone steps to visit the Lower, Middle, Upper Temples, and Giếng Temple.",
        "Lunch and transfer to Noi Bai Airport for the return flight to Ho Chi Minh City.",
        "End of the tour. Flight schedules may vary depending on the airline."
      ],
      images: [
        "https://th.bing.com/th/id/R.7dd1d72d6fac4fcacfa291fd6c713c75?rik=UMoSnZhz8Rdelw&riu=http%3a%2f%2fpystravel.vn%2fwp-content%2fuploads%2f2018%2f04%2fmu-cang-chai-pys-travel01-2.jpg&ehk=u2qGfXDIcgbR%2fyv8qYW3S0nlBDWSMQuruzQQYPRW4us%3d&risl=&pid=ImgRaw&r=0"
      ]
    }

    ]
  },
  {
  id: 13,
  tour_name: "Hue Heritage Discovery Tour",
  tour_image: assets.river3,
  location: "Hue City",
  region: "Central",
  price: "90$ per person",
  start_date: "2026-04-10",
  period: "4 days 3 nights",
  available: true,
  available_slots: 25,
  partner_id: 105,
  partner_name: "Trần Thị B",
  category_id: 2,
  status: "pending",

  /* HIGHLIGHT INFO */
  route: "Hue City – Imperial Citadel – Thien Mu Pagoda – Perfume River – Royal Tombs",
  departure_dates:
    "10, 17, 24/04 • 08, 15, 22/05 • 05, 12, 19/06 • 03, 10, 17/07/2026",
  transport: "Tourist Bus & Domestic Flight",

  /* DESCRIPTION */
  long_description: `
    This tour offers an immersive journey into the heart of Vietnam’s ancient capital—Hue.
    Explore the majestic Imperial Citadel, cruise along the Perfume River, visit sacred pagodas,
    and discover the royal tombs of the Nguyen Dynasty. Perfect for travelers who love culture,
    architecture, and peaceful landscapes.
  `,

  tags: [
    "Hue",
    "Imperial City",
    "Perfume River",
    "Nguyen Dynasty",
    "Heritage Tour",
    "Central Vietnam",
    "Cultural Journey"
  ],

  /* ITINERARY */
  itinerary: [
    {
      day: "DAY 1 | Ho Chi Minh City – Hue – Imperial Citadel (Lunch, Dinner)",
      content: [
        "Meet at Tan Son Nhat Airport for a direct flight to Hue.",
        "Arrival in Hue and enjoy lunch with local specialties.",
        "Visit the Imperial Citadel—UNESCO World Heritage Site.",
        "Explore the Noon Gate, Thai Hoa Palace, Forbidden Purple City.",
        "Dinner and check-in at the hotel in Hue City."
      ],
      images: [
        "https://th.bing.com/th/id/R.dbf244e6296c1c50c1c417159b1446a6?rik=OQTlLFS4ICmNgA&pid=ImgRaw&r=0",
        "https://tse1.mm.bing.net/th/id/OIP.FeCyWpr4vI2YGxMIhfYEdQHaEx?w=620&h=400&rs=1&pid=ImgDetMain&o=7&rm=3"
      ]
    },

    {
      day: "DAY 2 | Thien Mu Pagoda – Perfume River Cruise (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at the hotel.",
        "Visit the iconic Thien Mu Pagoda overlooking the Perfume River.",
        "Take a relaxing boat cruise on the Perfume River.",
        "Enjoy lunch at a local restaurant.",
        "Visit Dong Ba Market to shop for local products.",
        "Dinner and free time to explore Hue by night."
      ],
      images: [
        "https://cdn.britannica.com/23/185223-050-71EBC6C2/Thien-Mu-pagoda-Huong-River-Vietnam-Hue.jpg",
        "https://bazantravel.com/cdn/medias/uploads/72/72355-chua-thien-mu-hue-700x474.jpg"
      ]
    },

    {
      day: "DAY 3 | Royal Tombs Tour – Minh Mang – Khai Dinh (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at hotel.",
        "Visit Minh Mang Tomb, known for its majestic architecture and poetic scenery.",
        "Explore Khai Dinh Tomb—the most unique and artistic among the Nguyen Tombs.",
        "Lunch with authentic Hue royal cuisine.",
        "Afternoon: Visit Hue Museum of Royal Antiquities.",
        "Dinner and return to hotel."
      ],
      images: [
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9240eafa-3945-4bc2-a3be-7dc90b260ff5.jpeg",
        "https://tse3.mm.bing.net/th/id/OIP.8y9j6E8Or3eicJ5Z2k7Q-gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      ]
    },

    {
      day: "DAY 4 | Free time – Flight to Ho Chi Minh City (Breakfast)",
      content: [
        "Breakfast at hotel.",
        "Free time for shopping or relaxing.",
        "Check-out and transfer to Phu Bai Airport.",
        "Flight back to Ho Chi Minh City.",
        "End of tour."
      ],
      images: [
        "https://mia.vn/media/uploads/blog-du-lich/check-in-ninh-binh-voi-net-dep-ngot-ngao-nhu-tranh-ve-6-1666722930.jpg"
      ]
    }
  ]
},
{
  id: 10,
  tour_name: "Vinh Long Discovery Tour",
  tour_image: assets.trip1,
  location: "Vinh Long Province",
  region: "South",
  price: "80$ per person",
  start_date: "2026-05-10",
  period: "4 days 3 nights",
  available: true,
  available_slots: 20,
  partner_id: 205,
  partner_name: "Nguyễn Văn C",
  category_id: 1,
  status: "approved",

  /* HIGHLIGHT INFO */
  route: "Ho Chi Minh City – Cai Be Floating Market – An Binh Island – Local Orchard – Vinh Long Countryside",
  departure_dates:
    "10, 17, 24/05 • 07, 14, 21/06 • 05, 12, 19/07 • 02, 09, 16/08/2026",
  transport: "Tourist Bus & Boat",

  /* DESCRIPTION */
  long_description: `
    This tour takes travelers deep into the heart of the Mekong Delta — Vinh Long.
    Experience the vibrant Cai Be floating market, cruise along lush waterways, visit
    traditional handcraft villages, and enjoy seasonal tropical fruits right at local orchards.
    Perfect for those who love nature, culture, and peaceful countryside life.
  `,

  tags: [
    "Vinh Long",
    "Mekong Delta",
    "Floating Market",
    "An Binh Island",
    "Local Cuisine",
    "Southern Vietnam",
    "Eco Tour"
  ],

  /* ITINERARY */
  itinerary: [
    {
      day: "DAY 1 | Ho Chi Minh City – Vinh Long – Cai Be (Lunch, Dinner)",
      content: [
        "Depart from Ho Chi Minh City to Vinh Long by tourist bus.",
        "Arrival and enjoy lunch with Mekong Delta specialties.",
        "Visit Cai Be Floating Market by boat.",
        "Explore traditional handicraft villages: rice paper, coconut candy, and fruit drying.",
        "Dinner with local cuisine and overnight at homestay on An Binh Island."
      ],
      images: [
        "https://adminnhh.vietnamphotographer.net/images/article/Xp6EWRsbXB.jpg",
        "https://mia.vn/media/uploads/blog-du-lich/tu-tin-vi-vu-pho-phuong-voi-ban-do-du-lich-ninh-binh-trong-tay-9-1640495439.jpeg"
      ]
    },

    {
      day: "DAY 2 | An Binh Island – Orchard Visit – Local Experiences (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at the homestay.",
        "Visit local fruit orchards and enjoy seasonal tropical fruits.",
        "Experience traditional Southern folk music (Đờn ca tài tử).",
        "Lunch at a riverside local restaurant.",
        "Explore the canals of An Binh Island by bicycle or rowing boat.",
        "Dinner and free evening at the homestay."
      ],
      images: [
        "https://th.bing.com/th/id/R.cd78b423467add37c7733a2fe4e51c00?rik=inXg7F21ecZ4qQ&riu=http%3a%2f%2famia.vn%2fwp-content%2fuploads%2f2017%2f07%2ftranh-phong-que-vinh-ha-long-989.jpg&ehk=AK9cAPnsfBwI7aBa%2bafZ83%2baSXPaqWi110Kes0KuorU%3d&risl=&pid=ImgRaw&r=0",
        "https://vissaihotel.vn/photo/sinh-thai-thung-nham.png"
      ]
    },

    {
      day: "DAY 3 | Local Village – Brick Kilns – Countryside Tour (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at homestay.",
        "Visit the famous Vinh Long brick kilns by boat.",
        "Learn about local pottery craftsmanship.",
        "Lunch with Mekong Delta dishes.",
        "Afternoon cycling through countryside villages.",
        "Dinner and overnight at hotel in Vinh Long City."
      ],
      images: [
        "https://vietsensetravel.com/view/at_kham-pha-dong-bang-song-cuu-long--mien-tay-song-nuoc_6ff651b0a850d73d2dfed2679e1a71d9.jpg",
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/08/ghe-hoa-tra-on.png"
      ]
    },

    {
      day: "DAY 4 | Vinh Long – Ho Chi Minh City (Breakfast)",
      content: [
        "Breakfast at hotel.",
        "Free time to visit Vinh Long market or take a short riverside walk.",
        "Check-out and depart back to Ho Chi Minh City.",
        "End of tour."
      ],
      images: [
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/08/vinh-long_41b55553.jpg"
      ]
    }
  ]
},
{
  id: 11,
  tour_name: "Cai Be Floating Market Explorer",
  tour_image: assets.river,
  location: "Tien Giang Province",
  region: "South",
  price: "70$ per person",
  start_date: "2026-02-10",
  period: "4 days 3 nights",
  available: true,
  available_slots: 30,
  partner_id: 204,
  partner_name: "Lê Thị D",
  category_id: 1,
  status: "approved",

  /* HIGHLIGHT INFO */
  route: "Ho Chi Minh City – Cai Be Floating Market – Tan Phong Island – Handicraft Villages – Mekong Delta Countryside",
  departure_dates:
    "10, 17, 24/02 • 03, 10, 17/03 • 07, 14, 21/04 • 05, 12, 19/05/2026",
  transport: "Tourist Bus & Boat",

  /* DESCRIPTION */
  long_description: `
    This tour offers an authentic journey through the heart of the Mekong Delta, focusing on the
    vibrant Cai Be Floating Market. Guests will explore traditional craft villages, local orchards,
    and peaceful waterways. The experience is perfect for travelers who enjoy cultural immersion,
    local cuisine, and scenic countryside landscapes.
  `,

  tags: [
    "Cai Be",
    "Floating Market",
    "Mekong Delta",
    "Tan Phong Island",
    "Local Food",
    "Southern Vietnam",
    "Eco Tour"
  ],

  /* ITINERARY */
  itinerary: [
    {
      day: "DAY 1 | Ho Chi Minh City – Cai Be – Tan Phong Island (Lunch, Dinner)",
      content: [
        "Depart from Ho Chi Minh City to Cai Be.",
        "Enjoy lunch with Mekong Delta specialties.",
        "Take a boat trip to visit Cai Be’s canal system.",
        "Visit Tan Phong Island and explore lush fruit orchards.",
        "Check in homestay on the island and enjoy a traditional dinner."
      ],
      images: [
        "https://img.freepik.com/foto-gratis/paisaje-barco-rio-frente-al-rio-calle-ciudad-vieja-hoi-an-sudeste-asiatico-vietnam-patrimonio-cultura-vietnamita-hoian-viajes-punto-referencia-unesco_250132-15197.jpg",
        "https://img95.699pic.com/photo/50075/1949.jpg_wh300.jpg"
      ]
    },

    {
      day: "DAY 2 | Cai Be Floating Market – Craft Villages (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at homestay.",
        "Visit Cai Be Floating Market early in the morning.",
        "Learn about local traders selling fruits and produce from boats.",
        "Visit craft villages: coconut candy, rice pop, and honey bee farming.",
        "Enjoy lunch at a garden restaurant and relax with folk music.",
        "Dinner and overnight at homestay."
      ],
      images: [
        "https://i1.wp.com/farm4.static.flickr.com/3616/3605864394_3846a7be2f.jpg",
        "https://tse1.mm.bing.net/th/id/OIP.duWCtBVTjNnkvgK2w-oM6gHaFB?w=800&h=542&rs=1&pid=ImgDetMain&o=7&rm=3"
      ]
    },

    {
      day: "DAY 3 | Cycling Tour – Local Life Experience (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at homestay.",
        "Join a cycling tour through villages and rice fields.",
        "Visit a local family to learn about traditional Mekong farming life.",
        "Lunch at a countryside house.",
        "Boat ride through small canals surrounded by nipa palm.",
        "Dinner and transfer to hotel in My Tho City."
      ],
      images: [
        "https://vietnameasygotravel.com/wp-content/uploads/2024/04/OIP-7.jpg",
        "https://impresstravel.com/wp-content/uploads/2021/03/Ninh-Binh-Biking-via-rice-terrace.jpg"
      ]
    },

    {
      day: "DAY 4 | My Tho – Vinh Trang Pagoda – Ho Chi Minh City (Breakfast)",
      content: [
        "Breakfast at hotel.",
        "Visit the famous Vinh Trang Pagoda.",
        "Free time to explore My Tho market.",
        "Depart back to Ho Chi Minh City.",
        "End of tour."
      ],
      images: [
        "https://dulich3mien.vn/wp-content/uploads/2022/01/hinh-anh-chua-Viet-Nam-Quoc-Tu-@tho_ngam_ca_rot.jpg"
      ]
    }
  ]
},
{
  id: 2,
  tour_name: "Central Vietnam Cultural Tour",
  tour_image: assets.central_vietnam,
  location: "Da Nang – Hoi An – Hue",
  region: "Central",
  price: "100$ per person",
  start_date: "2026-01-19",
  period: "4 days 3 nights",
  available: true,
  available_slots: 15,
  partner_id: 102,
  partner_name: "Trần Thị B",
  category_id: 2,
  status: "approved",

  /* HIGHLIGHT INFO */
  route: "Da Nang – Marble Mountains – Hoi An Ancient Town – My Son Sanctuary – Hue Imperial City",
  departure_dates:
    "19, 26/01 • 09, 16, 23/02 • 09, 16, 23/03 • 06, 13, 20/04/2026",
  transport: "Tourist Bus & Domestic Flight",

  /* DESCRIPTION */
  long_description: `
    This cultural tour brings travelers across the most iconic destinations in Central Vietnam.
    From Da Nang's coastal beauty to the lantern-lit streets of Hoi An and the ancient royal
    heritage of Hue, visitors will explore centuries of architecture, cuisine, and history.
    Ideal for culture lovers, families, and travelers seeking a balanced experience between
    discovery and relaxation.
  `,

  tags: [
    "Da Nang",
    "Hoi An",
    "Hue",
    "My Son Sanctuary",
    "Cultural Tour",
    "Central Vietnam",
    "Heritage Sites",
    "Imperial City"
  ],

  /* ITINERARY */
  itinerary: [
    {
      day: "DAY 1 | Arrival in Da Nang – Marble Mountains – Hoi An (Lunch, Dinner)",
      content: [
        "Arrive in Da Nang International Airport.",
        "Visit the Marble Mountains: caves, temples, and panoramic viewpoints.",
        "Enjoy lunch at a local restaurant in Da Nang.",
        "Transfer to Hoi An Ancient Town and check in hotel.",
        "Evening walking tour of Hoi An: Japanese Bridge, lantern streets, riverside night market.",
        "Dinner and free time to explore."
      ],
      images: [
        "https://tse4.mm.bing.net/th/id/OIP.1zq4a7G007iHUBybiLxrTwHaEn?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://mia.vn/media/uploads/blog-du-lich/chua-phat-ngoc-xa-loi-vinh-long-chon-thanh-tinh-ban-nen-ghe-tham-2-1662989919.jpeg"
      ]
    },

    {
      day: "DAY 2 | Hoi An – My Son Sanctuary – Lantern Making (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at hotel.",
        "Morning visit to My Son Sanctuary—UNESCO World Heritage site of the ancient Champa Kingdom.",
        "Enjoy traditional Cham performances.",
        "Lunch at a garden restaurant in Hoi An.",
        "Join a lantern-making workshop with local artisans.",
        "Dinner in Hoi An and free time."
      ],
      images: [
        "https://cdn.getyourguide.com/img/tour/8f245ea2d9be9298ffd04a668c83fc34bebd58f0bc6021d20a0965be6c136103.jpg/98.jpg",
        "https://res.cloudinary.com/www-allertravel-no/image/upload/w_1200,q_auto,f_auto,dpr_auto/v1733747683/standard/reiser/asia/vietnam/sommerferie-vietnam/01-banner-sommerferie-vietnam-_7.jpg"
      ]
    },

    {
      day: "DAY 3 | Hoi An – Hue – Imperial Citadel (Breakfast, Lunch, Dinner)",
      content: [
        "Breakfast at hotel and check out.",
        "Transfer to Hue via Hai Van Pass with photo stops.",
        "Visit the Imperial Citadel: Noon Gate, Thai Hoa Palace, Royal Theater.",
        "Lunch with Hue specialty dishes.",
        "Explore Dong Ba Market or take a riverside walk.",
        "Dinner and overnight in Hue."
      ],
      images: [
        "https://static.vinwonders.com/production/dong-ba-market-1.jpg",
        "https://media.vov.vn/sites/default/files/styles/large/public/2020-08/Hue%20(13).jpg"
      ]
    },

    {
      day: "DAY 4 | Thien Mu Pagoda – Departure from Da Nang (Breakfast)",
      content: [
        "Breakfast at hotel.",
        "Visit Thien Mu Pagoda by the Perfume River.",
        "Transfer back to Da Nang Airport.",
        "End of tour."
      ],
      images: [
        "https://d29hy7eod5iau.cloudfront.net/images/2019/06/Hue-8-750x400.jpg"
      ]
    }
  ]
}




];
