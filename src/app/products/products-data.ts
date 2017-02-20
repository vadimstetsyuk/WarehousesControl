import { Product } from './Product';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        parentId: 4,
        name: "Докторська ковбаса",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 45.50,
        numberPlace: 10
    },
    {
        id: 2,
        parentId: 1,
        name: "Martini",
        date: "02.02.17",
        endDate: "01.12.17",
        price: 415.50,
        numberPlace: 11
    },
    {
        id: 3,
        parentId: 1,
        name: "Beermix",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 15.00,
        numberPlace: 12
    },
    {
        id: 4,
        parentId: 1,
        name: "Чернігівське",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 18.00,
        numberPlace: 16
    },
    {
        id: 5,
        parentId: 6,
        name: "Лосось",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 104.50,
        numberPlace: 1
    },
    {
        id: 7,
        parentId: 6,
        name: "Карась",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 25.50,
        numberPlace: 4
    },
    {
        id: 8,
        parentId: 5,
        name: "Корівка",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 20.50,
        numberPlace: 7
    },
    {
        id: 9,
        parentId: 3,
        name: "Йогурт Галичина",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 25.50,
        numberPlace: 9
    },
    {
        id: 10,
        parentId: 3,
        name: "Молоко",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 35.50,
        numberPlace: 3
    },
    {
        id: 11,
        parentId: 2,
        name: "Булочка",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 5.50,
        numberPlace: 6
    },
    {
        id: 12,
        parentId: 2,
        name: "Рогалик",
        date: "01.02.17",
        endDate: "01.12.17",
        price: 11.50,
        numberPlace: 8
    }
]