import product1 from '../public/products/product1.png'
import product2 from '../public/products/product2.png'
import product3 from '../public/products/product3.png'
import product4 from '../public/products/product4.png'
import product5 from '../public/products/product5.png'
import product6 from '../public/products/product6.png'
import { StaticImageData } from 'next/image'


interface StoreContent {
    id: number;
    svg: StaticImageData;
    title: string;
    message: string
}

//

import chemical from '../public/about/chemical.svg'
import medic from '../public/about/medical.svg'
import lab from '../public/about/lab.svg'

export const fields = ['Physical Science', 'Technology', 'Engineering', 'Medical Science']

export const productImages = [
    {
        id: 1,
        img: product1
    },

    {
        id: 2,
        img: product2
    },

    {
        id: 3,
        img: product3
    },

    {
        id: 4,
        img: product4
    },

    {
        id: 5,
        img: product5
    },

    {
        id: 6,
        img: product6
    },
]


export const storeContents: StoreContent[] = [
    {
        id: 1,
        svg: lab,
        title: 'Laboratory Equipment',
        message: 'Equip your lab with the latest instruments and apparatus. From microscopes to centrifuges, we have everything to enhance your research capabilities'
    },
    {
        id: 1,
        svg: medic,
        title: 'Medical Supplies',
        message: 'Our collection of medical products ensures the well-being of patients and the efficiency of healthcare facilities. Find surgical instruments, diagnostic tools, and more'
    },
    {
        id: 1,
        svg: chemical,
        title: 'Chemical Solutions',
        message: 'We offer a wide array of laboratory chemicals, reagents, and solutions for research, analysis, or industrial applications, trust us for quality and reliability'
    }
]

