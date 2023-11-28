import {createSlice} from "@reduxjs/toolkit";
import {srPoster, pfrPoster, rsrPoster, psrPoster, prPoster, drPoster, rsrBackdrop, drBackdrop, prBackdrop, srBackdrop, pfrBackdrop, psrBackdrop} from "@/assets/index.js";

const rooms = [
    {
        type : {
            id : 1,
            name : "superior room",
            pricePerNight : 199,
            size : 50,
            totalRoom : 12,
            maximumCapacity : 1,
            poster : srPoster,
            backdrop : srBackdrop,
            description : "The Superior Room on the Club Floor are pleasant and spacious rooms with stylish, minimalist aesthetics. Enjoy a wide range of privileges offered on the Club Floor, as well as the comfort and convenience of quality amenities upgraded through renovation.You can choose two type of  bed,double or twin.And then you can even request your needs in the guest message box.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available: 11
    },
    {
        type : {
            id : 2,
            name : "deluxe room",
            pricePerNight : 230,
            size : 50,
            totalRoom : 10,
            maximumCapacity : 2,
            poster : drPoster,
            backdrop:  drBackdrop,
            description: "The stylish Club Floor Deluxe Rooms at Nextel Mandalay are set apart with unconventional design concepts. Guests will be pleased to find rooms that are 1.5 times more spacious than competing hotels. Mix business with pleasure with a wide range of exclusive services offered on the Club Floor. We know every guest has different tastes and preferences, which is why Nextel Mandalay has partnered with global design firms SOM, WILSON & ASSOCIATES, and HBA to offer rooms in three different unique styles.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available: 7
    },
    {
        type : {
            id : 3,
            name : "premier room",
            pricePerNight : 299,
            size : 50,
            totalRoom : 8,
            maximumCapacity : 3,
            poster : prPoster,
            backdrop:  prBackdrop,
            description: "Indulge in the epitome of elegance and sophistication with our Premier Room, where opulence and comfort converge to offer you an exceptional stay. Whether you're traveling for business or leisure, our Premier Room is thoughtfully designed to provide you with a luxurious escape, setting the stage for a memorable experience.And then you can even request your needs in the guest message box.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available: 5
    },
    {
        type : {
            id : 4,
            name : "premier family room",
            pricePerNight : 420,
            size : 50,
            totalRoom : 5,
            maximumCapacity : 4,
            poster : pfrPoster,
            backdrop: pfrBackdrop,
            description: "Reserve your Premier Family Room today and make the most of your family getaway. Whether you're exploring the local attractions, enjoying quality time in the room, or simply unwinding, our Premier Family Room is the ideal choice for an unforgettable family adventure. Book now to create cherished memories together!  You can even request your needs in the guest message box.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available:  3
    },
    {
        type :   {
            id : 5,
            name : "presidential suite room",
            pricePerNight : 990,
            size : 50,
            totalRoom : 6,
            maximumCapacity : 2,
            poster : psrPoster,
            backdrop: psrBackdrop,
            description: "The Presidential Suites come with the highest level of elegance, delicacy, and luxury and include furnishings and world-class services that are exclusive to Nextel Mandalay.The expansive glass window offers a mesmerizing bird’s-eye view of downtown Seoul for a truly memorable hotel experience.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available : 4
    },
    {
        type : {
            id : 6,
            name : "royal suite room",
            pricePerNight : 1199,
            size : 50,
            totalRoom : 10,
            maximumCapacity : 2,
            poster : rsrPoster,
            backdrop: rsrBackdrop,
            description: "The Royal Suite is one of the most prestigious suites in Korea and regularly hosts top local VVIPS and others from abroad.The suite's dedicated services have been certified by various domestic and international organizations in pursuit of offering more than just a hotel room.The Royal Suite is the only room befitting someone as special as you.",
            amenities : [
                {
                    id : 1,
                    name : "comfortable bed",
                    icon : "bed",

                },
                {
                    id : 2,
                    name : "Towels and Toilets",
                    icon : "dry_cleaning",

                },
                {
                    id : 3,
                    name : "Housekeeping",
                    icon : "cleaning_services",

                },
                {
                    id : 4,
                    name : "Elevator",
                    icon : "elevator",

                },
                {
                    id : 5,
                    name : "Wake-up service",
                    icon : "alarm_smart_wake",

                },
                {
                    id : 6,
                    name : "kitchenette",
                    icon : "countertops",

                },
                {
                    id : 7,
                    name : "concierge service",
                    icon : "concierge",

                },
                {
                    id : 8,
                    name : "Private meeting room",
                    icon : "meeting_room",

                },
                {
                    id : 9,
                    name : "Private Bathroom",
                    icon : "bathroom",

                },
                {
                    id : 10,
                    name : "Television",
                    icon : "tv",

                },
                {
                    id : 11,
                    name : "Breakfast",
                    icon : "brunch_dining",

                },
                {
                    id : 12,
                    name : "Mini-firdge",
                    icon : "kitchen",
                },
                {
                    id : 13,
                    name : "In-room jacuzzi",
                    icon : "hot_tub",

                },
                {
                    id : 14,
                    name : "shuttle service",
                    icon : "airport_shuttle",

                },
                {
                    id : 15,
                    name : "Free pool",
                    icon : "pool",
                },
                {
                    id: 16, icon: "wifi", name: "wifi"
                },
                {
                    id: 17, icon: "living", name: "Living room"
                },
                {
                    id : 18, icon: "heat_pump", name: "Air conditioner"
                },
                {
                    id : 19, icon: "dining", name: "dinner"
                },
                {
                    id : 20, icon: "coffee_maker", name: "coffee/tea maker"
                }
            ]
        }, available : 8
    },
]
export const roomsSlice = createSlice({
    name : "rooms",
    initialState: {
        rooms
    },
    reducers : {}
})

export default  roomsSlice.reducer