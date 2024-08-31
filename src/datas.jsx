let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'Ayda Hosseini',
        title: 'Java Developer',
        img:'img/1.jpg'
    },
    {
        id: 2,
        username: 'Ahmad Ahmadi',
        title: 'Data Eng',
        img:'img/user.jpg'
    },
    {
        id: 23,
        username: 'Ahmad Ahmadi',
        title: 'Data Eng',
        img:'img/user.jpg'
    },
    {
        id: 245,
        username: 'Ahmad Ahmadi',
        title: 'Data Eng',
        img:'img/user.jpg'
    },
    {
        id: 3,
        username: 'Nickolas Manderson',
        title: 'Ai Developer',
        img:'img/user1.jpg'
    },
    {
        id: 4,
        username: 'Bob keig',
        title: 'Hacker',
        img:'img/user4.jpg'
    },
]


const transactions = [
    {
        id: 1,
        customer: 'Ayda Hosseini',
        date: '12 Jun 2022',
        amount: 4690,
        status: 'Approved',
        img: 'img/3.jpg'
    },
    {
        id: 2,
        customer: 'Arezoo Hamidi',
        date: '23 Jul 2024',
        amount: 3489,
        status: 'Declined',
        img: 'img/4.jpg'
    },
    {
        id: 3,
        customer: 'Fatemeh Abassi',
        date: '28 May 2023',
        amount: 23980,
        status: 'Pending',
        img: 'img/1.jpg'
    },
    {
        id: 93,
        customer: 'Fatemeh Abassi',
        date: '28 May 2023',
        amount: 23980,
        status: 'Pending',
        img: 'img/1.jpg'
    },
    {
        id: 13,
        customer: 'Fatemeh Abassi',
        date: '28 May 2023',
        amount: 23980,
        status: 'Pending',
        img: 'img/1.jpg'
    },
    {
        id: 23,
        customer: 'Fatemeh Abassi',
        date: '28 May 2023',
        amount: 23980,
        status: 'Pending',
        img: 'img/1.jpg'
    },
    {
        id: 4,
        customer: 'Somayeh Karimi',
        date: '2 Jan 2025',
        amount: 3709,
        status: 'Approved',
        img: 'img/2.jpg'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Farzaneh Smit',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 2,
        username: 'Atefeh jalili',
        avatar: 'img/1.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 100,
        username: 'Farzaneh Smit',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 3,
        username: 'Maryam Efandyari',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$98',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 24,
        username: 'Bita Bahmani',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$0',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 4,
        username: 'Bita Bahmani',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$0',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 14,
        username: 'Bita Bahmani',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$0',
        email: 'raximanGroup@gmail.com'
    },
    {
        id: 5,
        username: 'Saghar Erfani',
        avatar: 'img/1.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'raximanGroup@gmail.com'
    }
]
let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'img/asus.jpeg',
        price: 30
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'img/acer.jpg',
        price: 90
    },
    {
        id: 10,
        title: 'Acer',
        avatar: 'img/acer.jpg',
        price: 90
    },
    {
        id: 11,
        title: 'Acer',
        avatar: 'img/acer.jpg',
        price: 90
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'img/acer.jpg',
        price: 80
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'img/dell.jpg',
        price: 100
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3900,
    },
    {
        name: 'Mar',
        sales: 51000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }