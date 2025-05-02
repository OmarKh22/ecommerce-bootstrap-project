import { allProducts, likedProducts ,relatedProducts} from "./data.js";
document.getElementById("like_products_container").innerHTML=displayProducts(likedProducts);
document.getElementById("related_products_container").innerHTML=displayProducts(relatedProducts);

let id = localStorage.getItem("productId");
let product = allProducts.find((item)=>item.id==id);

document.getElementById("productDom").innerHTML=`
<div class="container">
    <div class="row">
        <div class="col-lg-6 px-5">
            <div class="image-container ">
                <img class="w-100" src=${product.image} alt=""/>
            </div>
            <div class="row mt-2 px-2">
                <img class="col-3 px-1" src=${product.image} alt=""/>
                <img class="col-3 px-1" src=${product.image} alt=""/>
                <img class="col-3 px-1" src=${product.image} alt=""/>
                <img class="col-3 px-1" src=${product.image} alt=""/>
            </div>
        </div>
        <div class="col-lg-6 pt-3 px-0">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fs-4 fw-bold">${product.price.map((item)=>`$${item.toFixed(2)}`).join(" - ")}</span>
                <div class="d-flex align-items-center gap-3">
                    <span class="text-secondery2 fw-bold text-uppercase"><i class="fas fa-angle-left"></i> prev</span>
                    <span class="text-secondery2 fw-bold text-uppercase">next <i class="fas fa-angle-right"></i></span>
                </div>
            </div>
            <h2 class="fw-bold fs-2 mt-5">${product.name}</h2>
            <p class="text-secondery2 mt-3 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada
                elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque
                nec tristique sapien etiam non augue lacus.</p>

                <span class="text-decoration-underline fw-semibold">Product Guide</span>
                ${product.colors?`
                    <div class=" mt-3">
                    <p class="fw-semibold d-flex align-items-center gap-2">Color :<span class="fw-bold text-secondery2">White</span></p>

                    <div class="mt-3 d-flex align-items-center gap-3">
                        <div class="p-3 border border rounded-circle" style="background-color: #000;"></div>
                        ${product.colors.map((color)=>{
                            return `<div class="p-3 border border rounded-circle" style="background-color: ${color};"></div>`
                            }).join("")}
                        
                    </div>
                </div>
                    
                    `:""}
                
                <div class=" mt-4">
                    <p class="fw-semibold d-flex align-items-center gap-2">Metal :<span class="fw-bold text-secondery2">Material</span></p>
                    <div class="mt-3 d-flex align-items-center gap-3">
                        <div class="p-4 bg-center bg-cover border rounded-3" style="background-image: url('./assets/material/m1.png');"></div>
                        <div class="p-4 bg-center bg-cover border rounded-3" style="background-image: url('./assets/material/m1.png');"></div>
                        <div class="p-4 bg-center bg-cover border rounded-3" style="background-image: url('./assets/material/m1.png');"></div>
                        <div class="p-4 bg-center bg-cover border rounded-3" style="background-image: url('./assets/material/m1.png');"></div>
                    </div>
                </div>
                <div class=" mt-4">
                    <p class="fw-semibold d-flex align-items-center gap-2">Delivery :<span class="fw-bold text-secondery2">1 to 3 business days</span></p>

                    <select class="w-100  p-3 rounded-2 border-0 mb-lg-4">
                        <option>1 to 3 business days</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                    <span class="text-secondery2 d-flex align-items-center gap-2"><i class="fas fa-sync text-black"></i>Clear selection</span>
                    <p class="fw-semibold d-flex align-items-center gap-2 fs-4 text-light-green mt-3">$${product.price[0]} ${product.oldPrice?`<span class="fs-5 text-secondery2 text-decoration-line-through">$${product.oldPrice}</span>`:""} </p>

                    <div class="p-5 rounded-3 border-dotted d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-cloud-arrow-up text-secondery2 fs-4"></i>                            Drag & Drop Files Here
                            <span class="text-secondery2">or</span>
                            <button class="bg-black text-white px-3 py-2 border-0 rounded-3">Browse Files</button>
                        </div>

                    </div>
                    
                </div>
                <div class="d-flex mt-3 gap-3">
                    <div class="d-flex gap-3 bg-light p-3 rounded-3 bg-opacity-1">
                        <i class="text-secondery2 fas fa-plus"></i> 1 <i class="text-secondery2 fas fa-minus"></i>
                    </div>
                    <button class="bg-light-green text-white flex-grow-1 border-0 rounded-3">Add to cart</button>
                </div>
                <div class="d-flex  align-items-center gap-4 mt-5 pb-5 border-bottom">
                  <span class="d-flex align-items-center gap-2"><i class="fas fa-star"></i>Add to wishlist</span>
                  <span class="d-flex align-items-center gap-2"><i class="fas fa-arrow-right-arrow-left"></i>Compare</span>
                </div>
                <ul class="list-unstyled">
                  <li class="d-flex align-items-center gap-2 mt-2">SKU:<span class="text-secondery2">N/A</span></li>
                  <li class="d-flex align-items-center gap-2 mt-2">Category:<span class="text-secondery2">Hoodie</span></li>
                  <li class="d-flex align-items-center gap-2 mt-2">Tags:<span class="text-secondery2">designer, t-shirt</span></li>
                  <li class="d-flex align-items-center gap-2 mt-2">Share: <ul class="d-flex gap-2 list-unstyled">
                    <li><i class="text-secondery2 fab fa-facebook-f"></i></li>
                    <li><i class="text-secondery2 fab fa-twitter"></i></li>
                    <li><i class="text-secondery2 fab fa-linkedin"></i></li>
                    <li><i class="text-secondery2 fab fa-pinterest"></i></li>
                    <li><i class="text-secondery2 fab fa-telegram"></i></li>
                </ul>
        </div>
    </div>
  </div>

`


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