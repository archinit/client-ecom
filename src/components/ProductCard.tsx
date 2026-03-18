"use client"

import { ProductType } from "@/types"
import Image from "next/image"
import Link from "next/link"

export const ProductCard = ({product} : {product: ProductType}) => {
    return <div>
        <div className="shadow-lg rounded-lg overflow-hidden">
            <Link href={`/products/${product.id}`}>
            <div className="relative w-full aspect-[2/3]">
                <Image 
                src={product.images[product.colors[0]]} 
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw" 
                className="object-cover hover:scale-105 transition-all duration-300"/>
            </div>
            </Link>
        </div>
    </div>
}