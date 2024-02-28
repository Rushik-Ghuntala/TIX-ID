export type TheaterData = {
    id: string;
    name: string;
    city: string;
    address: string;
    badge: string;
    // studio: StudioData[];
    dimension: DimensionData[];
  };

// export type StudioData = {
//     category: string[];
// }

export type DimensionData = {
    dimensionCategory: string;
    time: string[];
    price: string;
}

export const theaterData: TheaterData[] = [
    {
        id: '1',
        name: 'INOX: VR Mall',
        city: 'surat',
        address: 'VR, Dumas Rd, nr. VR Mall, New Magdalla, Surat, Gujarat 395007',
        badge: 'CGV',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: 'Regular 2D',
                time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
                price: '265',
            },
            {
                dimensionCategory: 'Gold Class 2D',
                time: [ '12:40', '15:40', '18:35', '17:10'],
                price: '540',
            },
            {
                dimensionCategory: 'Velvet 2D',
                time: [ '12:15', '13:45', '14:50'],
                price: '540',
            },
        ]
    },
    {
        id: '2',
        name: 'City Plus Multiplex',
        city: 'surat',
        address: 'Surat - Dumas Rd, Magdalla, Surat, Gujarat 395007',
        badge: 'CINEPOLIS',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '13:45', '17:15', '20:00'],
                price: '160',
            },
        ]
    },
    {
        id: '3',
        name: 'Velentine Multiplex',
        city: 'surat',
        address: 'Surat-Dumas Road, Pipload, Opposite Iris Mall, Surat, Gujarat 395007',
        badge: 'XXI',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '12:10', '16:45', '19:45'],
                price: '270',
            },
        ]
    },
    {
        id: '4',
        name: 'PVR Cinema Pheonix',
        city: 'mumbai',
        address: 'Unit No - 04, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013',
        badge: 'CGV',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: 'Regular 2D',
                time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
                price: '265',
            },
            {
                dimensionCategory: 'Gold Class 2D',
                time: [ '12:40', '15:40', '18:35', '17:10'],
                price: '540',
            },
            {
                dimensionCategory: 'Velvet 2D',
                time: [ '12:15', '13:45', '14:50'],
                price: '540',
            },
        ]
    },
    {
        id: '5',
        name: 'INOX Nakshatra Mall',
        city: 'mumbai',
        address: '2nd Nakshatra Cine Shoppe, Ranade Rd, near Railway Station, Dadar West, Dadar, Mumbai, Maharashtra 400028',
        badge: 'CINEPOLIS',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '13:45', '17:15', '20:00'],
                price: '160',
            },
        ]
    },
    {
        id: '6',
        name: 'PVR ICON Infiniti',
        city: 'mumbai',
        address: 'VR, Dumas Rd, nr. VR Mall, New Magdalla, Surat, Gujarat 395007',
        badge: 'XXI',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '12:10', '16:45', '19:45'],
                price: '270',
            },
        ]
    },
    {
        id: '7',
        name: 'Cinepolis Nexux',
        city: 'ahmedabad',
        address: '3rd floor, Infinity Mall, New Link Rd, Phase D, Shastri Nagar, Versova, Mumbai, Maharashtra 400036',
        badge: 'CGV',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: 'Regular 2D',
                time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
                price: '265',
            },
            {
                dimensionCategory: 'Gold Class 2D',
                time: [ '12:40', '15:40', '18:35', '17:10'],
                price: '540',
            },
            {
                dimensionCategory: 'Velvet 2D',
                time: [ '12:15', '13:45', '14:50'],
                price: '540',
            },
        ]
    },
    {
        id: '8',
        name: 'Carnival Cinemas',
        city: 'ahmedabad',
        address: '3rd floor, Himalaya Mall Commercial Building Big Bazar, Drive In Rd, Nilmani Society, Memnagar, Ahmedabad, Gujarat 380054',
        badge: 'CINEPOLIS',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '13:45', '17:15', '20:00'],
                price: '160',
            },
        ]
    },
    {
        id: '9',
        name: 'PVR Devarc Mall',
        city: 'ahmedabad',
        address: 'Devarc Mall, FP 181/1,3rd floor, Sarkhej - Gandhinagar Hwy, opposite Bigbazar, Ramdev Nagar, Ahmedabad, Gujarat 380015',
        badge: 'XXI',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '12:10', '16:45', '19:45'],
                price: '270',
            },
        ]
    },
];