import { blogList } from "./data";
import { render } from "./common";

function showBlog(blogs) {
    if (!Array.isArray(blogList) || blogList.length == 0) return -1;

    // xử lý
    let result = "";
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        result += `
        <h3 class="font-bold text-[24px]">${blog.name}</h3>
        <div class="flex py-[10px]">
            <p class="pr-[20px]">${blog.date}</p> |
            <p class="pl-[20px] opacity-50">${blog.tag}</p>
        </div>
        <p class="pb-[15px]">${blog.description}</p>
        `;
    }
    // return
    return result;
}

render("blogs", showBlog(blogList));


