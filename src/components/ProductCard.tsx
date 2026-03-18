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

            {/* PRODUCT DETAILS */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
                {/* PRODUCT TYPES */}
                <div className="flex items-center gap-4 text-xs">
                    {/* SIZES */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select name="size" id="size">
                            {product.sizes.map(size => (
                                <option value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className=""></div>
                </div>
            </div>
        </div>
    </div>
}