import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-stone-500 rounded-lg p-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
            <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="Ecomm"
                width={36}
                height={36}
            />
            <p className="hidden md:block text-md font-semibold tracking-wide text-white">ECOMM</p>
            </Link>
            <p className="text-sm text-gray-300">© 2025 SOMENAME.</p>
            <p className="text-sm text-gray-300">© All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-300 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-300 items-center md:items-start">
            <p className="text-sm text-amber-50">Products</p>
            <Link href="/">All Products</Link>
            <Link href="/">New Products</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Sale</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-300 items-center md:items-start">
            <p className="text-sm text-amber-50">Comapany</p>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Affiliate Program</Link>
        </div>

    </div>
}
