import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return <div>
        {/*LEFT*/}
        <Link href="/" className="flex items-center">
        <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
        />
        <p>SomeName</p>
        </Link>
    </div>
}