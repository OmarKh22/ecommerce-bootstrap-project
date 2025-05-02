import { allProducts } from "./data.js";

noUiSlider.create(slider, {
  start: [0, 500],
  connect: true,
  range: {
    min: 0,
    max: 500,
  },
});

var minValue = document.getElementById("minValue");
var maxValue = document.getElementById("maxValue");

slider.noUiSlider.on("update", function (values, handle) {
  var value = Math.round(values[handle]);
  if (handle === 0) {
    minValue.textContent = value;
  } else {
    maxValue.textContent = value;
  }
});

let products = structuredClone(allProducts);
let pageIndex = 0;

let poroductsDom = document.getElementById("poroductsDom");

poroductsDom.innerHTML = displayProducts(allProducts);

function displayProducts(arr) {
  return arr
    .map((item) => {
      return `
      <div class="col-12 col-md-6 col-lg-4 p-3">
        <div class="position-relative cursor-pointer" onclick="window.location.href='productDetails.html'; localStorage.setItem('productId',${item.id}) ">
          <img src="${item.image}" alt="${item.name}" class="w-100 ratio-4-3 rounded-4">
          <div class="product-content text-center">
            <h4 class="fw-bold fs-5 mt-3">${item.name}</h4>
            <p class="mb-0 mt-2 fw-bold d-flex align-items-center justify-content-center">
              ${item.price.map((p) => `$${p.toFixed(2)}`).join(" - ")} 
              ${item.oldPrice
                ? `<span class="text-decoration-line-through text-offer d-inline-block ms-2">$${item.oldPrice.toFixed(2)}</span>`
                : ""}
            </p>
            ${
              item.colors
                ? `
              <div class="colors d-flex align-items-center justify-content-center gap-2 mt-2">
                ${item.colors
                  .map((color, i) => {
                    if (i == 2) return `+${item.colors.length - 2}`;
                    if (i > 2) return "";
                    return `<div class="color rounded-circle" style="background-color: ${color};"></div>`;
                  })
                  .join("")}
              </div>`
                : ""
            }
          </div>

          ${
            item.offers
              ? `
              <div class="position-absolute top-0 start-0 p-3 p-lg-2 d-flex flex-column justify-content-start">
                ${item.offers
                  .map((offer) => {
                    return `
                    <div class="mb-1 rounded-2 text-white px-2 py-1 text-center" style="background-color: ${offer.color};">${offer.content}</div>
                    `;
                  })
                  .join("")}
              </div>`
              : ""
          }
        </div>
      </div>`;
    })
    .join("");
}

let paginationDom = document.getElementById("paginationDom");
handelProductsToShow(pageIndex);

function handelpagination(arr) {
  let number = Math.ceil(arr.length / 12);
  const numberArray = [];
  for (let i = 1; i <= number; i++) {
    numberArray.push(i);
  }

  paginationDom.innerHTML = `
    <li class="page-item ${pageIndex == 0 ? "disabled d-none" : ""}">
      <a class="page-link p-3 rounded-circle position-relative border-0" href="#" aria-label="Previous" onclick="handelProductsToShow(${pageIndex - 1}); paginationstyle(${pageIndex - 1});">
        <span class="position-absolute top-50 start-50 translate-middle" aria-hidden="true">&laquo;</span>
      </a>
    </li>

    ${numberArray
      .map((item) => {
        return `
        <li class="page-item">
          <a class="page-link p-3 rounded-circle position-relative border-0 ${item - 1 == pageIndex ? "active" : ""}" 
            href="#" 
            onclick="handelProductsToShow(${item - 1}); paginationstyle(${item - 1});">
            <span class="position-absolute top-50 start-50 translate-middle">${item}</span>
          </a>
        </li>`;
      })
      .join("")}

    <li class="page-item ${pageIndex == number - 1 ? "disabled d-none" : ""}">
      <a class="page-link p-3 rounded-circle position-relative border-0" href="#" aria-label="Next" onclick="handelProductsToShow(${pageIndex + 1}); paginationstyle(${pageIndex + 1});">
        <span class="position-absolute top-50 start-50 translate-middle">&raquo;</span>
      </a>
    </li>`;
}

function handelProductsToShow(index) {
  pageIndex = index;
  handelpagination(products);

  let poroductsDom = document.getElementById("poroductsDom");
  poroductsDom.innerHTML = displayProducts(
    products.slice(pageIndex * 12, pageIndex * 12 + 12)
  );
}

function paginationstyle(currentPage) {
  let paginationItems = document.querySelectorAll("a.page-link");
  paginationItems.forEach((item) => item.classList.remove("active"));
  if (paginationItems[currentPage + 1]) {
    paginationItems[currentPage + 1].classList.add("active");
  }
}

document.getElementById("searchProduct").addEventListener("input",(e)=>{
  console.log(e.target.value);
  
  pageIndex=0;
  if(e.target.value=="")products=structuredClone(allProducts);
  else{
    products=products.filter((product)=>product.name.includes(e.target.value))
  }
  handelProductsToShow(pageIndex);
  paginationstyle(pageIndex);


})

window.handelProductsToShow = handelProductsToShow;
window.paginationstyle = paginationstyle;

/*
import { allProducts } from "./data.js";
noUiSlider.create(slider, {
  start: [0, 500],
  connect: true,
  range: {
    min: 0,
    max: 500,
  },
});

var minValue = document.getElementById("minValue");
var maxValue = document.getElementById("maxValue");

slider.noUiSlider.on("update", function (values, handle) {
  var value = Math.round(values[handle]);
  if (handle === 0) {
    minValue.textContent = value;
  } else {
    maxValue.textContent = value;
  }
});

let products = allProducts;
let pageIndex = 0;

let productsDom = document.getElementById("poroductsDom");

productsDom.innerHTML = displayProducts(allProducts);

function displayProducts(arr) {
  return arr
    .map((item) => {
      return `
      <div class="col-12 col-md-6 col-lg-4 p-3">
                <div class="position-relative cursor-pointer">
                  <img src="${item.image}" alt=${
        item.name
      } class="w-100 ratio-4-3 rounded-4">
                  <div class="product-content text-center">
                    <h4 class="fw-bold fs-5 mt-3">${item.name}</h4>
                    <p class="mb-0 mt-2 fw-bold d-flex align-items-center justify-content-center">${item.price
                      .map((item) => `$${item.toFixed(2)}`)
                      .join(" - ")} ${
        item.oldPrice
          ? `<span class="text-decoration-line-through text-offer d-inline-block ms-2">$${item.oldPrice.toFixed(
              2
            )}"</span>`
          : ""
      }</p>
                    ${
                      item.colors
                        ? `
                      <div class="colors d-flex align-items-center justify-content-center gap-2 mt-2">
                      ${item.colors
                        .map((color, i) => {
                          if (i == 2) return `+${item.colors.length - 2}`;
                          if (i > 2) return "";
                          return `<div class="color rounded-circle" style="background-color: ${color};"></div>`;
                        })
                        .join("")}
                      
                      
                    </div>
                      `
                        : ""
                    }
                    
                  </div>
  
                  ${
                    item.offers
                      ? `
                    <div class="position-absolute top-0 start-0 p-3 p-lg-2 d-flex flex-column justify-content-start">
                    ${item.offers
                      .map((offer) => {
                        return `
                      
                      <div class=" mb-1 rounded-2 text-white px-2 py-1 text-center" style="background-color: ${offer.color};">${offer.content}</div>
                      `;
                      })
                      .join("")}
                  </div>
  
                </div>
                    `
                      : ""
                  }
                  
              </div>
              </div>
              `;
    })
    .join("");
}

let paginationDom = document.getElementById("paginationDom");
handelProductsToShow(products, pageIndex);

function handelpagination(arr) {
  let number = Math.ceil(arr.length / 12);
  const numberArray = [];
  for (let i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  paginationDom.innerHTML = `

    <li class="page-item ${pageIndex == 0 ? "disabled d-none" : ""}">
                      <a class="page-link p-3 rounded-circle position-relative border-0" href="#" aria-label="Previous">
                        <span class="position-absolute top-50 start-50 translate-middle" aria-hidden="true">&laquo;</span>
                      </a>
                    </li>

    ${numberArray
      .map((item) => {
        return `
        <li class="page-item"><a class="page-link p-3 rounded-circle position-relative border-0 ${
          item == 1 ? "active" : ""
        }" onclick="()=>{handelProductsToShow(${
          item - 1
        });paginationstyle();}"><span class="position-absolute top-50 start-50 translate-middle">${item}</span></a></li>
        `;
      })
      .join("")}
  <li class="page-item ${pageIndex == number - 1 ? "disabled d-none" : ""}">
                      <a class="page-link p-3 rounded-circle position-relative border-0" href="#" aria-label="Next">
                        <span class="position-absolute top-50 start-50 translate-middle" aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
    
    `;
}

function handelProductsToShow(pageIndex) {
  console.log(pageIndex, products);
  handelpagination(products);

  let productsDom = document.getElementById("poroductsDom");
  productsDom.innerHTML = displayProducts(
    products.slice(pageIndex * 12, pageIndex * 12 + 12)
  );
}

function paginationstyle() {
  console.log("paginationstyle");
  
  let paginationItems = document.querySelectorAll("a.page-link");
  paginationItems.forEach((item) => {
    item.classList.remove("active");
  });
  paginationItems[pageIndex + 1].classList.add("active");
}


*/