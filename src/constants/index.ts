// navitem  define and banner text define for loop

import { Herobanner } from "@/assets"

export const navigation = [
    {title:"Home", href:'/'},
    {title:"Products", href:'/products'},
    {title:"Categories", href:'/categories'},
    {title:"Offers", href:'/offers'},
    {title:"Blog", href:'/blog'},
    {title:"Contact", href:'/contact'},
]

export const banner = {
    priceText: "Starting at $999.90",
    title:"The best tablet collection 2025",
    textOne: "Exclusive offer",
    offerPrice:"-30%",
    textTwo:"off this week",
    buttonLink: "/products",
    image: Herobanner,
}