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
  }
];
