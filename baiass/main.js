
import { title } from "./data";
import { render } from "./common";
import { information } from "./data";
import { WorkList } from "./data";
// selector đến element product
// khai báo hàm show product

function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(title) || title.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
          <div class="bg-white px-5 py-8 mb-5">
            <h2 class="font-bold text-[25px]">${product.name}</h2>
            <div class="flex py-[10px]">
                <p class="pr-[40px]">${product.date}</p> |
                <p class="pl-[40px]">${product.tags}</p>
            </div>
            <p>${product.description}</p>
         </div>
        `;
    }
    return result;
}

render("product", showProducts(title));


function showInformation(products) {
      if (!Array.isArray(information) || information.length == 0) return [];
      let result = "";
      for (let i = 0; i < products.length; i++) {
          const information = products[i];
          result += `
          <div class="md:col-span-2 order-2 md:order-1 md:text-left text-center">
              <h2 class="text-3xl md:text-5xl font-bold pb-4">${information.name}</h2>
              <p class="pb-4">${information.description}</p>
              <button class="bg-red-400 text-white py-1 px-1">Download Resume</button>
          </div>
          <div class="md:col-spam-1 order-1 md:order-2">
               <img class="mx-auto md:ml-auto md:mr-0" src="${information.img}" alt="">
          </div>
          `;
      }
      // return
      return result;
  }
  
  render("information", showInformation(information));



function showWorks(products) {
  if (!Array.isArray(WorkList) || WorkList.length == 0) return [];
  let result = "";
  for (let i = 0; i < products.length; i++) {
      const works = products[i];
      result += `
          <div>
            <img class="w-full py-[20px]" src="${works.img}" alt="">
          </div>
          <div class="pt-[10px]">
              <div class="">
                  <h2 class="text-[25px] font-bold"><a href="./deitail.html?id=${works.id}">${works.name}</a></h2>
                  <div class="flex py-[15px]">
                      <button class="bg-[#142850] text-[#fff] py-[1px] px-[20px] rounded-full">${works.date}</button>
                      <p class="opacity-50 px-[25px]">${works.tag}</p>
                  </div>
                  <p>${works.description}</p>
              </div>
          </div>
      `;
  }

  return result;
}

render("works", showWorks(WorkList));

