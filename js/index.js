import { category ,collections, exploreProducts, featuredProducts} from "./data.js";

document.getElementById("categorys_container").innerHTML=category.map((item)=>{
    return`
    <div class="col-xl-2 col-md-4 col-6 mb-3 p-3 p-xl-0 text-center cursor-pointer">
              <img class="w-100 rounded-circle mb-4 ratio-square" src="${item.image}" alt="category">
              <h4 class="fw-bold position-relative d-inline-block fs-5">${item.name} <span class="fs-6 fw-semibold position-absolute bottom-100 start-100">${item.number}</span></h4>
            </div>
    
    `
}).join("");

document.getElementById("collections_container").innerHTML=collections.map((item)=>{
    return `
    <div class="p-2 col-md-6 col-lg-4 col-12">

              <div class=" ratio-square rounded-3 d-flex justify-content-center align-items-end bg-center bg-cover" style="background-image: url(${item.image});">
                <button class=" mb-3 bg-white px-3 py-2 border-0 rounded-3 fw-bold">${item.name}</button>
              </div>
            </div>
    `
}).join("");

document.getElementById("featured_products_container").innerHTML=displayProducts(featuredProducts);

document.getElementById("explore_products_container").innerHTML=displayProducts(exploreProducts);


function displayProducts(arr){
  return arr.map((item)=>{
    return `
    <div class="col-12 col-md-6 col-lg-3 p-3">
              <div class="position-relative cursor-pointer" onclick="window.location.href='productDetails.html'; localStorage.setItem('productId',${item.id}) ">
                <img src="${item.image}" alt=${item.name} class="w-100 ratio-4-3 rounded-4">
                <div class="product-content text-center">
                  <h4 class="fw-bold fs-5 mt-3">${item.name}</h4>
                  <p class="mb-0 mt-2 fw-bold d-flex align-items-center justify-content-center">${item.price.map((item)=>`$${item.toFixed(2)}`).join(" - ")} ${item.oldPrice?`<span class="text-decoration-line-through text-offer d-inline-block ms-2">$${item.oldPrice.toFixed(2)}"</span>`:""}</p>
                  ${
                    item.colors?
                    `
                    <div class="colors d-flex align-items-center justify-content-center gap-2 mt-2">
                    ${item.colors.map((color,i)=>{
                      if(i==2) return `+${item.colors.length-2}`
                      if(i>2) return ""
                      return `<div class="color rounded-circle" style="background-color: ${color};"></div>`
                    }).join("")}
                    
                    
                  </div>
                    `:""
                  }
                  
                </div>

                ${item.offers?
                  `
                  <div class="position-absolute top-0 start-0 p-3 p-lg-2 d-flex flex-column justify-content-start">
                  ${item.offers.map((offer)=>{

                    return`
                    
                    <div class=" mb-1 rounded-2 text-white px-2 py-1 text-center" style="background-color: ${offer.color};">${offer.content}</div>
                    `
                    
                    }).join("")}
                </div>

              </div>
                  `:""
                }
                
            </div>
            </div>
    `
}).join("");
}