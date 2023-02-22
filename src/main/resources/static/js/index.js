let page = 1;
let limit = 6;

document.addEventListener("DOMContentLoaded",function(){
    let next = document.getElementsByClassName("icon-next")[0];
    let prev = document.getElementsByClassName("icon-prev")[0];
    let slider = document.getElementsByClassName("slider")[0];
    let x = document.getElementsByClassName("style__StyledInfiniteScroll-sc-r7dr5o-0")[0];
    let main = x.getElementsByClassName("content")[0];

    next.addEventListener("click",function(){
       prev.classList.remove("disabled");
       next.classList.add("disabled");
       slider.setAttribute("style","transform: translateX(-943px);")
    });

    prev.addEventListener("click",function(){
        next.classList.remove("disabled");
        prev.classList.add("disabled");
        slider.setAttribute("style","transform: translateX(0px);")
    });
    fetchProduct(main);
    let view_more = document.getElementsByClassName("view-more")[0];
    view_more.addEventListener("click", function() {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: `http://localhost:9999/getAllProduct?page=${page}&limit=${limit}`,
            contentType: "application/json; charset=utf-8",
            success : function(response) {
                // console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let product = `<div>
                    <a
                        class="product-item"
                        data-view-id="home_infinity_products_item"
                        href="/bo-lau-nha-tikilabel-innovative-mop-set-p203230333.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_tiki-label-boosting_UNK_RB_batched_PID.203230334&amp;itm_medium=CPC&amp;itm_source=tiki-reco&amp;spid=203230334">
                        <span class="style__StyledItem-sc-1dymjr4-0 jreItg">
                            <div>
                                <div class="thumbnail"><img
                                    src=${response[i].image}
                                    width="68"
                                    height="14"
                                    class="styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK"
                                    style="top: 0px; left: 0px;">
                                    <div class="style__ThumbnailWrapper-sc-1dymjr4-6 hkYMRb">
                                        <picture class="webpimg-container"><source
                                            type="image/webp"
                                            srcset="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png.webp 2x"><img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png"
                                            alt="Bộ lau nhà TIKILabel Innovative Mop Set"
                                            srcset="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png 2x"
                                            class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"></picture>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <h3>${response[i].name}</h3>
                                    </div>
                                    <div style="display: flex; align-items: center; min-height: 16px;">
                                        <div style="display: flex;">
                                            <div class="full-rating">
                                                <div class="total" style="display: flex; align-items: center;">
                                                    <span
                                                        style="font-weight: 400; font-size: 12px; line-height: 16px; color: rgb(128, 128, 137);">4.2</span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        stroke-width="0"
                                                        viewbox="0 0 24 24"
                                                        size="14"
                                                        color="#fdd836"
                                                        height="14"
                                                        width="14"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style="color: rgb(253, 216, 54);">
                                                        <path
                                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style="display: flex; align-items: center; color: rgb(128, 128, 137); line-height: normal; font-size: 11px; padding-left: 4px;">
                                            <div style="width: 1px; height: 9px; background-color: rgb(199, 199, 199);"></div>
                                            <div data-view-id="pdp_quantity_sold" style="padding-left: 6px;">Đã bán ${response[i].qtySold}</div>
                                        </div>
                                    </div>
                                    <div class="price-discount has-discount">
                                        <div class="price-discount__price">${response[i].price} ₫</div>
                                        <div class="price-discount__discount">-${response[i].discountRate}%</div>
                                    </div>
                                </div>
                            </div></span></a>
                </div>`
                main.insertAdjacentHTML("afterbegin",product);
                }
                page = page + 1;
            },
            err: function() {
                console.log("not working");
            }
        })
    });
   
})

async function fetchCategoryJSON() {
    const response = await $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:9999/getLevel1Category",
        contentType: "application/json; charset=utf-8",
        success : function(response) {
            // console.log(response);
            return response;
        },
        err: function() {
            console.log("not working");
        }
    })
    return response;
}

fetchCategoryJSON().then(function(datas){
    datas.forEach((data)=>{
        let a = document.createElement("a");
        a.setAttribute("href","phone.html");
        let div = document.createElement("div");
        div.classList.add("category");
        let content = document.createTextNode(data.name);
        div.appendChild(content);
        let slider = document.getElementsByClassName("slider")[0];
        a.appendChild(div);
        slider.appendChild(a);
    })
})
function fetchProduct(main) {
    console.log("fetch");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `http://localhost:9999/getAllProduct?page=${page}&limit=${limit}`,
        contentType: "application/json; charset=utf-8",
        success : function(response) {
            // console.log(response);
            for(let i = 0; i < response.length; i++) {
                let product = `<div>
                <a
                    class="product-item"
                    data-view-id="home_infinity_products_item"
                    href="/bo-lau-nha-tikilabel-innovative-mop-set-p203230333.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_infinite-scroll_infinite-scroll_tiki-label-boosting_UNK_RB_batched_PID.203230334&amp;itm_medium=CPC&amp;itm_source=tiki-reco&amp;spid=203230334">
                    <span class="style__StyledItem-sc-1dymjr4-0 jreItg">
                        <div>
                            <div class="thumbnail"><img
                                src=${response[i].image}
                                width="68"
                                height="14"
                                class="styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK"
                                style="top: 0px; left: 0px;">
                                <div class="style__ThumbnailWrapper-sc-1dymjr4-6 hkYMRb">
                                    <picture class="webpimg-container"><source
                                        type="image/webp"
                                        srcset="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png.webp 2x"><img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png"
                                        alt="Bộ lau nhà TIKILabel Innovative Mop Set"
                                        srcset="https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png 2x"
                                        class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"></picture>
                                </div>
                            </div>
                            <div class="info">
                                <div class="name">
                                    <h3>${response[i].name}</h3>
                                </div>
                                <div style="display: flex; align-items: center; min-height: 16px;">
                                    <div style="display: flex;">
                                        <div class="full-rating">
                                            <div class="total" style="display: flex; align-items: center;">
                                                <span
                                                    style="font-weight: 400; font-size: 12px; line-height: 16px; color: rgb(128, 128, 137);">4.2</span>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewbox="0 0 24 24"
                                                    size="14"
                                                    color="#fdd836"
                                                    height="14"
                                                    width="14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style="color: rgb(253, 216, 54);">
                                                    <path
                                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="display: flex; align-items: center; color: rgb(128, 128, 137); line-height: normal; font-size: 11px; padding-left: 4px;">
                                        <div style="width: 1px; height: 9px; background-color: rgb(199, 199, 199);"></div>
                                        <div data-view-id="pdp_quantity_sold" style="padding-left: 6px;">Đã bán ${response[i].qtySold}</div>
                                    </div>
                                </div>
                                <div class="price-discount has-discount">
                                    <div class="price-discount__price">${response[i].price} ₫</div>
                                    <div class="price-discount__discount">-${response[i].discountRate}%</div>
                                </div>
                            </div>
                        </div></span></a>
            </div>`
            main.insertAdjacentHTML("afterbegin",product);
            }
            page = page + 1;
        },
        err: function() {
            console.log("not working");
        }
    })
}

