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
}

];
