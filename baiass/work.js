import { WorkList } from "./data";
import { render } from "./common";

function showWorks(works) {
    if(!Array.isArray(WorkList) || WorkList.length == 0) return [];

    let result = "";

    for(let i = 0; i < works.length; i++) {
        const work = works[i];
        result += `
        <div>
            <img class="w-full py-[20px]" src="${work.img}" alt="">
        </div>
        <div class="pt-[10px]">
            <div class="">
                <h2 class="text-[25px] font-bold"><a href="./deitail.html?id=${work.id}">${work.name}</a></h2>
                <div class="flex py-[15px]">
                    <button class="bg-[#142850] text-[#fff] py-[1px] px-[20px] rounded-full">${work.date}</button>
                    <p class="opacity-50 px-[25px]">${work.tag}</p>
                </div>
                <p>${work.description}</p>
            </div>
        </div> 
        `
    }
    return result;
}
render("work", showWorks(WorkList));