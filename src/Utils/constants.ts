import {BsKey,BsTrophy} from 'react-icons/bs'; 
import {TfiWorld} from 'react-icons/tfi'; 
import {GoLocation} from 'react-icons/go'; 
import {AiOutlineLineChart, AiFillLock} from 'react-icons/ai'; 
import React from 'react';

export interface FeatureProp {
  id: number; 
  title: string; 
  text: string; 
  icon: any
}

export const features: FeatureProp[] = [
  {
    id: 1, 
    title: 'worlds best luxury home', 
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.', 
    icon: TfiWorld
  }, 
  {
    id: 2, 
    title: 'only the best properties', 
    text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.', 
    icon: BsTrophy
  }, 
  {
    id: 3, 
    title: 'all homes in top locations', 
    text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.', 
    icon: GoLocation
  }, 
  {
    id: 4, 
    title: 'new home in one week', 
    text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 
    icon: AiOutlineLineChart
  }, 
  {
    id: 5, 
    title: 'Top 1% realtors', 
    text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.', 
    icon: TfiWorld
  }, 
  {
    id: 6, 
    title: 'Secure payments on nexter', 
    text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.', 
    icon: AiFillLock
  }, 
]


// -----------------------------------------------------------------

import home_1 from '../assets/images/house-1.jpeg'; 
import home_2 from '../assets/images/house-2.jpeg'; 
import home_3 from '../assets/images/house-3.jpeg';
import home_4 from '../assets/images/house-4.jpeg';
import home_5 from '../assets/images/house-5.jpeg';
import home_6 from '../assets/images/house-6.jpeg';

export interface HomeCard {
  id: number; 
  title: string; 
  location: string; 
  rooms: number; 
  area: string; 
  price: string; 
  img: string 
}

export const homeCards: HomeCard[] = [
  {
    id: 1, 
    title: 'beautiful family house',
    location: 'usa',
    rooms: 5,
    area: '325m', 
    price: '1200,000', 
    img: home_1
  }, 
  {
    id: 2, 
    title: 'modern glass villa',
    location: 'canada',
    rooms: 6,
    area: '450m', 
    price: '2,750,00', 
    img: home_2
  }, 
  {
    id: 3, 
    title: 'cozy country house',
    location: 'uk',
    rooms: 4,
    area: '250m', 
    price: '850,000', 
    img: home_3
  }, 
  {
    id: 4, 
    title: 'beautiful family house',
    location: 'usa',
    rooms: 5,
    area: '325m', 
    price: '1200,000', 
    img: home_4
  }, 
  {
    id: 5, 
    title: 'beautiful family house',
    location: 'usa',
    rooms: 5,
    area: '325m', 
    price: '1200,000', 
    img: home_5
  }, 
  {
    id: 6, 
    title: 'beautiful family house',
    location: 'usa',
    rooms: 5,
    area: '325m', 
    price: '1200,000', 
    img: home_6
  }, 
]

// -----------------------------------------------------------------

import g_1 from '../assets/images/gal-1.jpeg'
import g_2 from '../assets/images/gal-2.jpeg'
import g_3 from '../assets/images/gal-3.jpeg'
import g_4 from '../assets/images/gal-4.jpeg'
import g_5 from '../assets/images/gal-5.jpeg'
import g_6 from '../assets/images/gal-6.jpeg'
import g_7 from '../assets/images/gal-7.jpeg'
import g_8 from '../assets/images/gal-8.jpeg'
import g_9 from '../assets/images/gal-9.jpeg'
import g_10 from '../assets/images/gal-10.jpeg'
import g_11 from '../assets/images/gal-11.jpeg'
import g_12 from '../assets/images/gal-12.jpeg'
import g_13 from '../assets/images/gal-13.jpeg'
import g_14 from '../assets/images/gal-14.jpeg'

export interface GalleryImage {
  id: number; 
  img: string
}

export const galleryIMGs: GalleryImage[] = [
  {
    id: 1, 
    img: g_1, 
  }, 
  {
    id: 2, 
    img: g_2, 
  }, 
  {
    id: 3, 
    img: g_3, 
  }, 
  {
    id: 4, 
    img: g_4, 
  }, 
  {
    id: 5, 
    img: g_5, 
  }, 
  {
    id: 6, 
    img: g_6, 
  }, 
  {
    id: 7, 
    img: g_7, 
  }, 
  {
    id: 8, 
    img: g_8, 
  }, 
  {
    id: 9, 
    img: g_9, 
  }, 
  {
    id: 10, 
    img: g_10, 
  }, 
  {
    id: 11, 
    img: g_11, 
  }, 
  {
    id: 12, 
    img: g_12, 
  }, 
  {
    id: 13, 
    img: g_13, 
  }, 
  {
    id: 14, 
    img: g_14, 
  }, 
]

// -----------------------------------------------------------------

export interface FooterLink {
  id: number; 
  text: string
}

export const footerLinks: FooterLink[] = [
  {
    id: 1, 
    text: 'find your dream home'
  }, 
  {
    id: 2, 
    text: 'request proposal'
  }, 
  {
    id: 3,
    text: 'download home planner'
  }, 
  {
    id: 4, 
    text: 'contact us'
  }, 
  {
    id: 5, 
    text: 'submit your property'
  }, 
  {
    id: 6, 
    text: 'come work with us'
  }
]

// -----------------------------------------------------------------
import realtor_1 from '../assets/images/realtor-1.jpeg'
import realtor_2 from '../assets/images/realtor-2.jpeg'
import realtor_3 from '../assets/images/realtor-3.jpeg'



export interface Realtor {
  id: number; 
  name: string; 
  sales: string; 
  img: string
}


export const realtorsData: Realtor[] = [
  {
    id: 1, 
    name: 'erik feinman', 
    sales: '245', 
    img: realtor_1
  }, 
  {
    id: 2, 
    name: 'kim brown', 
    sales: '212', 
    img: realtor_2
  }, 
  {
    id: 3, 
    name: 'toby ramsey', 
    sales: '198', 
    img: realtor_3
  }, 
  
]
