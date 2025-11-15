
import search_icon from './search-icon.png';
import basket_icon from './basket.png';
import cross_icon from './cross-icon.png';
import central_vietnam from './central-vietnam.jpg';
import daklak from './daklak.webp';
import education from './education.jpg';
import education2 from './education2.webp';
import education3 from './education3.jpg';
import education4 from './education4.jpg';
import education5 from './education5.webp';
import education_beaty from './education-beaty.jpg';
import hanoi from './hanoi.webp';
import logo_agritour from './logo-agritour.png';
import north from './north.webp';
import ogranization from './ogranization.png';
import river from './river.jpeg';
import river2 from './river2.jpg';
import river3 from './river3.jpg';
import river4 from './river4.jpg';
import sapa from './sapa.jpg';
import sapa_webp from './sapa.webp';
import southwestern_vietnam from './southwestern-vietnam.jpg';
import trip1 from './trip1.jpg';
import trip2 from './trip2.webp';
import trip3 from './trip3.jpg';
import trip4 from './trip4.jpg';
import trip5 from './trip5.jpg';
import trip6 from './trip6.jpg';
import trip7 from './trip7.jpg';
import trip8 from './trip8.jpg';
import user_icon from './user-icon.webp';
import add_icon from './add_icon.png'
import bus_icon from './bus_icon.png'
import logo from './logo.png'
import ticket_icon from './ticket_icon.png'
import upload_icon from './upload_icon.png'
import admin_icon from './admin_icon.png'

export const assets = {
  user_icon,
  search_icon,
  basket_icon,
  cross_icon,
  central_vietnam,
  daklak,
  education,
  education2,
  education3,
  education4,
  education5,
  education_beaty,
  hanoi,
  logo_agritour,
  north,
  ogranization,
  river,
  river2,
  river3,
  river4,
  sapa,
  sapa_webp,
  southwestern_vietnam,
  trip1,
  trip2,
  trip3,
  trip4,
  trip5,
  trip6,
  trip7,
  trip8,
  add_icon,
  bus_icon,
  logo,
  ticket_icon,
  upload_icon,
  admin_icon
};


export const list_tour_1 = [
  {
    id: 1,
    tour_name: "Northern Vietnam Scenic Tour",
    tour_image: north,
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
    status: "pending"
  },
  {
    id: 2,
    tour_name: "Central Vietnam Cultural Tour",
    tour_image: central_vietnam,
    location: "Da Nang",
    region: "Central",
    price: "100$ per person",
    start_date: "2026-01-19",
    period: "4 days 3 nights",
    available: true,
    available_slots: 15,
    partner_id: 102,
    partner_name: "Trần Thị B",
    category_id: 2,
    status: "approved"
  },
  {
    id: 3,
    tour_name: "South Vietnam Highlights",
    tour_image: southwestern_vietnam,
    location: "Ho Chi Minh City",
    region: "South",
    price: "80$ per person",
    start_date: "2026-01-10",
    period: "4 days 3 nights",
    available: true,
    available_slots: 18,
    partner_id: 103,
    partner_name: "Lê Văn C",
    category_id: 3,
    status: "cancelled"
  },
  {
    id: 4,
    tour_name: "Highland Adventure",
    tour_image: daklak,
    location: "Dak Lak",
    region: "Central",
    price: "80$ per person",
    start_date: "2026-02-10",
    period: "4 days 3 nights",
    available: true,
    available_slots: 12,
    partner_id: 101,
    partner_name: "Nguyễn Văn A",
    category_id: 1,
    status: "pending"
  },
  {
    id: 23,
    tour_name: "Hanoi City Exploration",
    tour_image: hanoi,
    location: "Hanoi",
    region: "North",
    price: "90$ per person",
    start_date: "2026-05-10",
    period: "4 days 3 nights",
    available: true,
    available_slots: 25,
    partner_id: 102,
    partner_name: "Trần Thị B",
    category_id: 2,
    status: "approved"
  },
  {
    id: 24,
    tour_name: "Sapa Mountain Trek",
    tour_image: sapa_webp,
    location: "Sapa",
    region: "North",
    price: "40$ per person",
    start_date: "2026-03-10",
    period: "4 days 3 nights",
    available: true,
    available_slots: 10,
    partner_id: 103,
    partner_name: "Lê Văn C",
    category_id: 3,
    status: "pending"
  },
  {
    id: 25,
    tour_name: "Vi Da Village Visit",
    tour_image: trip4,
    location: "Hue",
    region: "Central",
    price: "70$ per person",
    start_date: "2026-03-20",
    period: "4 days 3 nights",
    available: true,
    available_slots: 14,
    partner_id: 101,
    partner_name: "Nguyễn Văn A",
    category_id: 1,
    status: "approved"
  },
  {
    id: 26,
    tour_name: "Dak Lak Organization Tour",
    tour_image: ogranization,
    location: "Dak Lak",
    region: "Central",
    price: "60$ per person",
    start_date: "2026-07-20",
    period: "4 days 3 nights",
    available: true,
    available_slots: 16,
    partner_id: 102,
    partner_name: "Trần Thị B",
    category_id: 2,
    status: "cancelled"
  },
  {
    id: 28,
    tour_name: "Gia Lai Discovery",
    tour_image: trip5,
    location: "Gia Lai",
    region: "Central",
    price: "80$ per person",
    start_date: "2026-01-10",
    period: "4 days 3 nights",
    available: true,
    available_slots: 20,
    partner_id: 103,
    partner_name: "Lê Văn C",
    category_id: 3,
    status: "approved"
  }
];


export const list_tour_2 = [
  {
  id:5,
  tour_name: "Ben Tre Tour",
  tour_image: education2,
  region: "South",
  price: "40$ per person",
  start_date: "2026-1-24",
  period: "4 days 3 nights",
  available: true
  },
  {
  id:6,
  tour_name: "Mekong Delta Tour",
  tour_image: education3,
  region: "South",
  price: "50$ per person",
  start_date: "2026-1-15",
  period: "4 days 3 nights",
  available: true
  },
  {
  id:7,
  tour_name: "Can Tho City Tour",
  tour_image: education4,
  region: "South",
  price: "30$ per person",
  start_date: "2026-1-20",
  period: "3 days 2 nights",
  available: true
  },
  {
  id:8,
  tour_name: "Tra Su Cajuput Forest",
  tour_image: education5,
  region: "South",
  price: "80$ per person",
  start_date: "2026-5-10",
  period: "4 days 3 nights",
  available: true
  },
  {
  id:9,
  tour_name: "Education and Beauty Tour",
  tour_image: education_beaty,
  region: "Central",
  price: "30$ per person",
  start_date: "2026-8-10",
  period: "4 days 3 nights",
  available: true
  },
  {
  id: 20,
  tour_name:"Bac Ninh",
  tour_image: trip4,
  region: "North",
  price: "80$ per person",
  start_date: "2026-1-10",
  period: "4 days 3 nights",
  available: true
  },
  {
  id: 21,
  tour_name:"Ninh Binh",
  tour_image: river2,
  region: "North",
  price: "60$ per person",
  start_date: "2026-3-10",
  period: "4 days 3 nights",
  available: true
  },
  {
  id: 22,
  tour_name:"Ha Giang",
  tour_image: river3,
  region: "North",
  price: "70$ per person",
  start_date: "2026-4-10",
  period: "4 days 3 nights",
  available: true
  },
  {
    id: 27,
    tour_name: "Agritour Experience",
    tour_image: education3,
    region: "South",
    price: "90$ per person",
    start_date: "2026-6-15",
    period: "4 days 3 nights",
    available: true
  }
];

export const tour =[
  {
    id: 10,
    tour_name:"Vinh Long",
    tour_image: trip1,
    region: "South",
    price: "80$ per person",
    start_date: "2026-5-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 11,
    tour_name:"Cai Be Floating Market",
    tour_image: river,
    region: "South",
    price: "70$ per person",
    start_date: "2026-2-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 12,
    tour_name:"Ha Tien",
    tour_image: river2,
    region: "South",
    price: "60$ per person",
    start_date: "2026-3-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 13,
    tour_name:"Hue City",
    tour_image: river3,
    region: "Central",
    price: "90$ per person",
    start_date: "2026-4-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 14,
    tour_name:"Ninh Binh Riverside",
    tour_image: river4,
    region: "Central",
    price: "100$ per person",
    start_date: "2026-6-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 15,
    tour_name:"Sapa Trekking",
    tour_image: sapa,
    region: "North",
    price: "120$ per person",
    start_date: "2026-7-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 16,
    tour_name:"Bac Lieu",
    tour_image: trip2,
    region: "South",
    price: "80$ per person",
    start_date: "2026-5-10",
    period: "4 days 3 nights",
    available: true
  },
  {
    id: 17,
    tour_name:"Tra Vinh",
    tour_image: trip3,
    region: "South",
    price: "70$ per person",
    start_date: "2026-8-10",
    period: "4 days 3 nights",
    available: true
  }
];