import { render } from "./common";
import { WorkList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua

const product = WorkList.find((item) => item.id == id);

const result = `
        <h2 class="font-bold text-4xl w-[60%]">${product.name}</h2>
        <div>
            <div class="flex py-[15px]">
                <button class="bg-[#FF7C7C] text-[#fff] py-[1px] px-[20px] rounded-full">${product.date}</button>
                <p class="px-[25px]">${product.tag}</p>
            </div>
            <p>${product.description}</p>
        </div>
        <div class=" pt-[30px]">
            <img class="w-full" src="${product.img}" alt="">
        </div>
        `;
       
render("works", result);