const products = [
    {
        id: 1,
        name: "Adidas CoreFit T-shirt",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi possimus eum delectus voluptatibus.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, libero dolorem cumque dicta sunt eaque culpa. Dignissimos ratione inventore officiis impedit expedita explicabo? Neque consectetur libero doloribus quidem magnam suscipit.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png"
        },
    },
    
]

export const ProductList = () => {
    return <div>
        Products Lists
    </div>
}