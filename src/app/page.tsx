import { ProductList } from "@/components/ProductList";
import Image from "next/image";

export default async function Home( {searchParams}: {searchParams: Promise<{ category: string }>} ) {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-2/1 mb-11">
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
      <ProductList category= {category}/>
    </div>
  );
}
