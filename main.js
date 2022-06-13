const productList = [
    {name: "Hi, I am John,Creative Technologist",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "./img/Ellipse 1.jpg" },
];

const productElement = document.querySelector("#information");

function showInformation(products) {
    if (!Array.isArray(productList) || productList.length == 0) return -1;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `
        <div class="md:col-span-2 order-2 md:order-1 md:text-left text-center">
            <h2 class="text-3xl md:text-5xl font-bold pb-4">${products[i].name}</h2>
            <p class="pb-4">${products[i].description}</p>
            <button class="bg-red-400 text-white py-1 px-1">Download Resume</button>
        </div>
        <div class="md:col-spam-1 order-1 md:order-2">
            <img class="mx-auto md:ml-auto md:mr-0" src="${products[i].img}" alt="">
        </div> `
    }
    return result;
}

export function render(element, content) {
    if(element) {
        element.innerHTML = content;
    }
}
render(productElement, showInformation(productList));