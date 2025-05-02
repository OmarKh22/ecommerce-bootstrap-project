export const category = [
  {
    id: 1,
    number: 15,
    name: "T-shirt",
    image: "../assets/categorys/T-shirt.png",
  },
  {
    id: 2,
    number: 8,
    name: "Long-sleeves",
    image: "../assets/categorys/Long-sleeves.png",
  },
  {
    id: 3,
    number: 18,
    name: "Sweater",
    image: "../assets/categorys/Sweater.png",
  },
  {
    id: 4,
    number: 9,
    name: "Hoodies",
    image: "../assets/categorys/Hoodies.png",
  },
  {
    id: 5,
    number: 6,
    name: "Tanktop",
    image: "../assets/categorys/Tanktop.png",
  },
];

export const collections = [
  {
    id: 1,
    name: "Men's Collection",
    image: "../assets/collections/mens.png",
  },
  {
    id: 1,
    name: "Kid's Collection",
    image: "../assets/collections/kids.png",
  },
  {
    id: 1,
    name: "Women's Collection",
    image: "../assets/collections/womens.png",
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: "Zone Sweatshirt",
    image: "../assets/products/33.png",
    price: [19.95, 159.95],
  },
  {
    id: 2,
    name: "Zoo Men’s t-shirt",
    image: "../assets/products/32.png",
    price: [14.95, 119.95],
  },
  {
    id: 3,
    name: "Toddler T-shirt",
    image: "../assets/products/31.png",
    price: [26.0],

    offers: [
      {
        content: "Hot",
        color: "#F09155",
      },
    ],
  },
  {
    id: 4,
    name: "Fine Jersey Tee",
    image: "../assets/products/17.png",
    price: [28.0],
    oldPrice: 31.0,
    offers: [
      {
        content: "-10%",
        color: "#2EBB77",
      },
      {
        content: "Hot",
        color: "#F09155",
      },
    ],
  },
  {
    id: 5,
    name: "Kids Hoodie",
    image: "../assets/products/20.png",
    price: [26.0, 29.0],

    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 6,
    name: "Youth Short Sleeve Tee",
    image: "../assets/products/30.png",
    price: [26.0, 29.0],

    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 7,
    name: "Midweight Cotton Tee",
    image: "../assets/products/22.png",
    price: [26.0, 29.0],

    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 8,
    name: "Hooded Sweatshirt",
    image: "../assets/products/19.png",
    price: [28.0],

    offers: [
      {
        content: "Hot",
        color: "#F09155",
      },
    ],
  },
];

export const exploreProducts = [...featuredProducts.slice(0, 4)];

export const likedProducts = [
  {
    id: 12,
    name: "Fit Round-neck T-shirt",
    image: "../assets/products/18.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 9,
    name: "Adult Quantity Tee",
    image: "../assets/products/14.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 11,
    name: "AOP Cut & Sew Tee",
    image: "../assets/products/16.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 8,
    name: "Hooded Sweatshirt",
    image: "../assets/products/19.png",
    price: [28.0],

    offers: [
      {
        content: "Hot",
        color: "#F09155",
      },
    ],
  },
];
export const relatedProducts = [
  {
    id: 16,
    name: "Product Price by Options",
    image: "../assets/products/25.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 12,
    name: "Fit Round-neck T-shirt",
    image: "../assets/products/18.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 2,
    name: "Zoo Men’s t-shirt",
    image: "../assets/products/32.png",
    price: [14.95, 119.95],
  },
  {
    id: 3,
    name: "Toddler T-shirt",
    image: "../assets/products/31.png",
    price: [26.0],

    offers: [
      {
        content: "Hot",
        color: "#F09155",
      },
    ],
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: 9,
    name: "Adult Quantity Tee",
    image: "../assets/products/14.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 10,
    name: "All-Over-Print Hoodie",
    image: "../assets/products/15.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 11,
    name: "AOP Cut & Sew Tee",
    image: "../assets/products/16.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 12,
    name: "Fit Round-neck T-shirt",
    image: "../assets/products/18.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 13,
    name: "Lightweight Fashion Tee",
    image: "../assets/products/21.png",
    price: [32],
    oldPrice: 36,
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000"],
  },
  {
    id: 14,
    name: "Premium Crewneck Sweatshirt",
    image: "../assets/products/23.png",
    price: [29],
    oldPrice: 39,
    offers: [
      {
        content: "-26%",
        color: "#2EBB77",
      },
    ],
  },
  {
    id: 15,
    name: "Premium Pullover Hoodie",
    image: "../assets/products/24.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 16,
    name: "Product Price by Options",
    image: "../assets/products/25.png",
    price: [26, 29],
    offers: [
      {
        content: "Sale",
        color: "#2EBB77",
      },
      {
        content: "New",
        color: "#B479D9",
      },
    ],
    colors: ["#000", "#D7A983", "fff", "#D33", "#EE2"],
  },
  {
    id: 17,
    name: "Basic Cotton T-shirt",
    image: "../assets/products/1.jpg",
    price: [12.95, 24.95],
    offers: [{ content: "Sale", color: "#2EBB77" }],
    colors: ["#000", "#D7A983"],
  },
  {
    id: 18,
    name: "Printed Hoodie",
    image: "../assets/products/2.jpg",
    price: [35.0],
    oldPrice: 45.0,
    offers: [
      { content: "New", color: "#B479D9" },
      { content: "Hot", color: "#F09155" },
    ],
    colors: ["#fff", "#D33"],
  },
  {
    id: 19,
    name: "Summer Polo Shirt",
    image: "../assets/products/3.jpg",
    price: [19.99, 29.99],
    offers: [{ content: "Hot", color: "#F09155" }],
    colors: ["#D33", "#EE2"],
  },
  {
    id: 20,
    name: "Oversized Sweatshirt",
    image: "../assets/products/4.jpg",
    price: [28.5, 38.5],
    offers: [{ content: "-10%", color: "#2EBB77" }],
    colors: ["#000", "#fff"],
  },
  {
    id: 21,
    name: "Graphic Print Tee",
    image: "../assets/products/5.jpg",
    price: [22.5, 34.0],
    offers: [
      { content: "Sale", color: "#2EBB77" },
      { content: "New", color: "#B479D9" },
    ],
    colors: ["#D7A983", "#D33"],
  },
  {
    id: 21,
    name: "Men's Long Sleeve",
    image: "../assets/products/6.jpg",
    price: [29.5],
    oldPrice: 39.5,
    offers: [{ content: "Hot", color: "#F09155" }],
    colors: ["#000", "#EE2"],
  },
  {
    id: 22,
    name: "Vintage Washed Tee",
    image: "../assets/products/7.jpg",
    price: [18.0, 25.0],
    offers: [{ content: "-10%", color: "#2EBB77" }],
    colors: ["#D7A983", "#fff"],
  },
  {
    id: 23,
    name: "Casual Hoodie",
    image: "../assets/products/8.jpg",
    price: [39.95],
    oldPrice: 49.95,
    offers: [{ content: "New", color: "#B479D9" }],
    colors: ["#D33", "#000"],
  },
  {
    id: 24,
    name: "Youth Cotton Tee",
    image: "../assets/products/9.jpg",
    price: [16.95, 26.95],
    offers: [
      { content: "Hot", color: "#F09155" },
      { content: "-10%", color: "#2EBB77" },
    ],
    colors: ["#fff", "#EE2"],
  },
  {
    id: 25,
    name: "Classic Fit T-shirt",
    image: "../assets/products/10.jpg",
    price: [20.0],
    oldPrice: 25.0,
    offers: [{ content: "Sale", color: "#2EBB77" }],
    colors: ["#D7A983", "#000"],
  },
  {
    id: 26,
    name: "Unisex Pullover",
    image: "../assets/products/11.jpg",
    price: [45.0],
    oldPrice: 55.0,
    offers: [
      { content: "New", color: "#B479D9" },
      { content: "Hot", color: "#F09155" },
    ],
    colors: ["#D33", "#fff"],
  },
  {
    id: 27,
    name: "Slim Fit Polo",
    image: "../assets/products/12.jpg",
    price: [27.95, 39.95],
    offers: [{ content: "Sale", color: "#2EBB77" }],
    colors: ["#000", "#EE2"],
  },
  {
    id: 28,
    name: "Basic Kids Tee",
    image: "../assets/products/13.jpg",
    price: [14.0],
    oldPrice: 20.0,
    offers: [{ content: "-10%", color: "#2EBB77" }],
    colors: ["#fff", "#D7A983"],
  },
  {
    id: 29,
    name: "Streetwear Hoodie",
    image: "../assets/products/26.jpg",
    price: [42.0],
    oldPrice: 50.0,
    offers: [
      { content: "Hot", color: "#F09155" },
      { content: "New", color: "#B479D9" },
    ],
    colors: ["#D33", "#000"],
  },
  {
    id: 30,
    name: "Cropped T-shirt",
    image: "../assets/products/27.jpg",
    price: [18.5, 24.5],
    offers: [{ content: "Sale", color: "#2EBB77" }],
    colors: ["#D7A983", "#EE2"],
  },
  {
    id: 31,
    name: "Printed Men's Tee",
    image: "../assets/products/28.jpg",
    price: [23.0],
    oldPrice: 30.0,
    offers: [{ content: "New", color: "#B479D9" }],
    colors: ["#fff", "#D33"],
  },
  {
    id: 32,
    name: "Women's Slim Tee",
    image: "../assets/products/29.jpg",
    price: [26.5],
    oldPrice: 30.0,

    offers: [{ content: "Hot", color: "#F09155" }],
    colors: ["#000", "#D7A983"],
  },
];
