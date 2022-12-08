let bucket = [];

document.addEventListener("DOMContentLoaded", function () {
    let userName = document.getElementsByClassName("customer_info__name")[0];
    let userPhone = document.getElementsByClassName("customer_info__phone")[0];
    let cart_main_quantity = document.getElementsByClassName("Userstyle__ItemCartQty-sc-6e6am-5 ohfHv")[0];
    let label = document.getElementsByClassName("label")[0];
    button_label = document.getElementsByClassName("styles__StyledButton-sc-hokrdw-0")[0];

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:9999/cart/getdata",
        contentType: "application/json; charset=utf-8",
        data: {
            cartId: 1
        },
        success: function (response) {
            const component = document.getElementsByClassName("infinite-scroll-component")[0];
            userName.innerHTML = response.userInfo.name;
            userPhone.innerHTML = response.userInfo.phone;

            cart_main_quantity.innerHTML = response.items;
            label.innerHTML = `Tất cả (${response.items} sản phẩm)`;

            let data = response.cartItemInfoList;
            let finalPrice = response.cartInfo.totalPrice;
            
            for (let i = 0; i < data.length; i++) {
                let parentDiv = document.createElement("div");
                parentDiv.setAttribute("class", "styles__StyledSeller-sc-1x870ln-0 kJwXxa");
                component.append(parentDiv);
                let shopName = data[i].shopName;
                //
                let shopDiv = 
                        `<div class="sellers__group">
                           <div class="sellers__sub-title">
                               <div class="row">
                                   <div class="col-1">
                                       <label class="styles__StyledCheckbox-sc-kvz5pc-0 hNjxWW">
                                            <input type="checkbox">
                                            <span id="${shopName}"
                                                class="checkbox-fake"
                                                onclick ="checkAllItemInShop('${shopName}',1)">
                                            </span>
                                        </label>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png"
                                            alt="seller-link"
                                            class="sellers__icon-home">
                                       <a
                                           href="https://tiki.vn/cua-hang/phukienleduy"
                                           class="sellers__name"
                                           target="_blank"
                                           data-view-id="cart_view_seller"
                                           data-view-index="27195">${shopName}<img
                                           src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg"
                                           alt="seller-link"
                                           class="sellers__icon-arrow">
                                        </a>
                                   </div>
                               </div>
                           </div>
                       </div>`;
                parentDiv.insertAdjacentHTML("afterbegin", shopDiv);
                //
                let cartContainer = document.createElement("div");
                cartContainer.setAttribute(
                    "class",
                    "styles__StyledIntended-sc-1x870ln-1 ihAmbT"
                );
                parentDiv.append(cartContainer);
                //
                let items = data[i].cartItemList;
                
                items.map((item) => {
                    let {
                        cartId,
                        totalPrice,
                        productId,
                        productName,
                        productImage,
                        productPrice,
                        quantity,
                        check
                    } = item;

                    bucket.push({
                        productId,
                        check,
                        shopName
                    });
                    
                    let divNull = document.createElement("div");
                    divNull.setAttribute("id", `${cartId}-${productId}`);
                    divNull.innerHTML = `<div class="styles__StyledNormalProduct-sc-1ulujnv-0 eZNlgw">
                    <div class="row">
                        <div class="col-1">
                            <div class="product__images false">
                                <div class="product__checkbox">
                                    <label class="styles__StyledCheckbox-sc-kvz5pc-0 hNjxWW">
                                        <input type="checkbox">
                                        <span id=checkbox-${productId}
                                            class= "checkbox-fake"
                                            onclick="checkItem(${cartId},${productId}, '${shopName}')">
                                        </span>
                                     </label>
                                </div>
                                <a>
                                    <picture class="webpimg-container">
                                        <img
                                            src=${productImage} alt=""
                                            class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo">
                                    </picture>
                                </a>
                                <div class="product__content">
                                    <a
                                        class="product__name"
                                        target="_blank"
                                        data-view-id="cart_main_product"
                                        data-view-index="43095f67-617c-11ed-a271-8ad26e6d46c0"
                                        href="/product-p6734149.html?spid=14532454">${productName}</a>
        
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <span class="product__real-prices">${productPrice}</span>
                        </div>
                        <div class="col-3">
                            <div class="product-qty">
                                <div class="styles__StyledQuantity-sc-18gisz0-0 gEpOC">
                                    <span
                                        onclick="changeQuantity(${cartId}, ${productId}, -1)"
                                        data-view-id="cart_main_quantity.decrease"
                                        data-view-index="43095f67-617c-11ed-a271-8ad26e6d46c0"
                                        class="qty-decrease "><img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                        alt="decrease">
                                    </span>
                                     
                                    <input id =${productId} type="tel" class="qty-input" value=${quantity} name="quantity">  
                                  
                                    <span
                                        onclick="changeQuantity(${cartId}, ${productId}, 1)"
                                        data-view-id="cart_main_quantity.increase"
                                        data-view-index="43095f67-617c-11ed-a271-8ad26e6d46c0"
                                        class="qty-increase "><img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                                        alt="increase">
                                    </span>
                                </div>
                            </div>
                            <span class="product-qty__limit">Chỉ còn 4 sản phẩm</span>
                        </div>
                        <div class="col-4">
                            <span id=total-${productId} class="product__final-prices">${totalPrice}</span>
                        </div>
                        <div class="col-5">
                            <span
                                onclick="removeItem(${cartId},${productId}, '${shopName}')" 
                                class="product__delete"
                                data-view-id="cart_main_remove.product"
                                data-view-index="43095f67-617c-11ed-a271-8ad26e6d46c0"><img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                alt="deleted"></span>
                        </div>
                    </div>`
                    //
                    cartContainer.append(divNull);
                });
            }
            highLightCheckedItem();
            checkingAfterRender();
            payCheck(finalPrice);

            let orderBtn = document.getElementsByClassName("styles__StyledButton-sc-hokrdw-0")[0];
            orderBtn.addEventListener("click", order);
        },
        error: function () {
            console.log("not working");
        }
    });
});

function highLightCheckedItem() {
    let checkedItemBucket = bucket.filter(item => item.check === true);
    let unCheckedItemBucket = bucket.filter(item => item.check === false);

    checkedItemBucket.map((item) => {
        let checkSpan = document.getElementById(`checkbox-${item.productId}`);
        fillCheckBox(checkSpan)
    })
    unCheckedItemBucket.map((item) => {
        let checkSpan = document.getElementById(`checkbox-${item.productId}`);
        emptyCheckBox(checkSpan);
    })
}

function checkingAfterRender() {
    //find all shop
    let shopArray = [...new Map(bucket.map((item) => [item["shopName"], item.shopName])).values()];
    
    //if all item in shop is check, check that shop
    for(let i = 0; i < shopArray.length; i++) {
        let shop = bucket.filter((item) => item.shopName === shopArray[i]);
        if(shop.every((item) => item.check === true)) {
            let checkSpan = document.getElementById(shopArray[i]);
            fillCheckBox(checkSpan);
        }
    }

    //check all
    let all_checkSpan = document.getElementsByClassName("checkbox-fake")[0];
    let rule = bucket.every((item) => item.check === true);
    if(rule) {
        fillCheckBox(all_checkSpan);
    }
}

function checkItem(cartId, productId, shopName) {
    let shop_checkSpan = document.getElementById(shopName);
    let all_checkSpan = document.getElementsByClassName("checkbox-fake")[0];

    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:9999/cart/checkItem",
        contentType: "application/json; charset=utf-8",
        data: {
            cartId,
            productId,
            shopName
        },
        success: function (response) {
            console.log(response);
            let item = bucket.find((item) => item.productId === productId);
            let shop = bucket.filter((item) => item.shopName === shopName);
            //check item
            if(item.check === false) {
                item.check = true;
                checkCartItem(productId);
            //check shop
            let allTrue = shop.every((item) => item.check === true);
                if(allTrue) {
                    fillCheckBox(shop_checkSpan);
                }
            }
            //uncheck item
            else if(item.check === true) {
                item.check = false;
                unCheckCartItem(productId);
            //uncheck shop
            let allTrue = shop.every((item) => item.check === true);
                if(!allTrue) {
                    emptyCheckBox(shop_checkSpan);
                }
            }      
            //check all
            let rule = bucket.every((item) => item.check === true);
            if(rule) {
                fillCheckBox(all_checkSpan);
            }else{
                emptyCheckBox(all_checkSpan);
            }

            //paycheck
            payCheck(response.finalPrice);
        },
        error: function () {
            console.log("not working");
        }
    });
}

function checkAllItemInShop(shopName, cartId) {
    let shop_checkSpan = document.getElementById(shopName);
    let all_checkSpan = document.getElementsByClassName("checkbox-fake")[0];
    let requestObj = {};
    requestObj.cartId = cartId;
    requestObj.shopName = shopName;
    
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:9999/cart/checkAllItemInShop",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(requestObj),
        success: function (response) {
            console.log(response);
            let shop = bucket.filter((item) => item.shopName === shopName);
            let allFalse = shop.every((item) => item.check === false);
            let allTrue = shop.every((item) => item.check === true);
            //check shop
            if(allFalse) {
                console.log("allFalse");
                for(let i = 0; i < shop.length; i++) {
                    shop[i].check = true;
                    checkCartItem(shop[i].productId);
                }
                fillCheckBox(shop_checkSpan);
            }
            //uncheck shop
            else if(allTrue) {
                console.log("allTrue");
                for(let i = 0; i < shop.length; i++) {
                    shop[i].check = false;
                    unCheckCartItem(shop[i].productId);
                }
                emptyCheckBox(shop_checkSpan);
            } 
            else {
                console.log("exception");
                let updateItems = shop.filter((item) => item.check === false);
                for(let i = 0; i < updateItems.length; i++) {
                    updateItems[i].check = true;
                    checkCartItem(updateItems[i].productId);
                }
                fillCheckBox(shop_checkSpan);
            }
            //check all
            let rule = bucket.every((item) => item.check === true);
            if(rule) {
                fillCheckBox(all_checkSpan);
            }else {
                emptyCheckBox(all_checkSpan);
            }
            //paycheck
            payCheck(response.finalPrice);
        },
        error: function () {
            console.log("not working");
        }
    });
}

function checkCartItem(productId) {
    let checkSpan = document.getElementById(`checkbox-${productId}`);
    fillCheckBox(checkSpan);
}

function unCheckCartItem(productId) {
    let checkSpan = document.getElementById(`checkbox-${productId}`);
    emptyCheckBox(checkSpan);
}

function checkShopItem(shopName) {
    let checkSpan = document.getElementById(shopName);
    fillCheckBox(checkSpan);
}

function checkAllItem(cartId) {
    let checkSpanList = document.getElementsByClassName("checkbox-fake");
    let cartItemId = {};
    cartItemId.cartId = cartId;
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:9999/cart/checkAllItem",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cartItemId),
        success: function (response) {
            console.log(response);
            let allFalse = bucket.every((item) => item.check === false);
            let allTrue = bucket.every((item) => item.check === true);

            //check every box
            if(allFalse) {
                for(let i = 0; i < checkSpanList.length; i++) {
                    bucket.map((item) => item.check = true);
                    fillCheckBox(checkSpanList[i]);
                }
            }
            //uncheck every box
            else if(allTrue) {
                for(let i = 0; i < checkSpanList.length; i++) {
                    bucket.map((item) => item.check = false);
                    emptyCheckBox(checkSpanList[i]);
                }
            }
            //check only unchecked item
            else {
                let updateItems = bucket.filter((item) => item.check === false);
                console.log(updateItems);
               //find all shop that include update items
                let shopArray = [...new Map(updateItems.map((item) => [item["shopName"], item.shopName])).values()];
                console.log(shopArray);
                //check shop
                for(let i = 0; i < shopArray.length; i++) {
                    checkShopItem(shopArray[i]);
                }
                //check item
                for(let i = 0; i < updateItems.length; i++) {
                    updateItems[i].check = true;
                    checkCartItem(updateItems[i].productId);
                }
                //check all
                fillCheckBox(checkSpanList[0]);
            }
            //paycheck
            payCheck(response.finalPrice);
        },
        error: function () {
            console.log("not working");
        }
    });
}

function fillCheckBox(checkSpan) {
    let checkInput = checkSpan.previousElementSibling;
    checkSpan.style.borderColor = "rgb(11, 116, 229)";
    checkSpan.style.backgroundColor = "rgb(11, 116, 229)";
    checkSpan.classList.add("special");   
    checkInput.setAttribute("checked", "checked");
}

function emptyCheckBox(checkSpan) {
    let checkInput = checkSpan.previousElementSibling;
    checkSpan.classList.remove("special");
    checkSpan.removeAttribute("style");
    checkInput.removeAttribute("checked");
}

function changeQuantity(cartId, productId, quantity) {
    itemAmount = document.getElementById(productId);
    totalPrice_element = document.getElementById(`total-${productId}`)
    let search = bucket.find((item) => item.productId === productId);

    if(parseInt(itemAmount.value) === 1 && quantity === -1) {
        removeItem(cartId, productId, search.shopName);
    } 
    else {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://localhost:9999/cart/changeQuantity",
            contentType: "application/json; charset=utf-8",
            data: {
                cartId,
                productId,
                quantity
            },
            success: function (response) {
                console.log(response);

                let quantity = response.quantity;
                let totalPrice = response.totalPrice;
    
                 //update price and quantity
                let finalPrice = response.finalPrice;
                itemAmount.value = quantity;
                totalPrice_element.innerHTML = totalPrice;
               
                //paycheck
                payCheck(finalPrice);
            },
            error: function () {
                alert("not working");
            }
        });
    }
}

function removeItem(cartId, productId, shopName) {
    let itemToDelete = document.getElementById(`${cartId}-${productId}`);
    let shop_checkSpan = document.getElementById(shopName);
    let all_checkSpan = document.getElementsByClassName("checkbox-fake")[0];
    let main = document.getElementsByClassName("ReactModalPortal")[0];

    const confirmForRemove = async () => {
        const comfirm = await confirmation(main);
        if(comfirm) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://localhost:9999/cart/remove",
                contentType: "application/json; charset=utf-8",
                data: {
                    cartId,
                    productId
                },
                success: function (response) {
                    console.log(response);
        
                    //remove HTML
                    if (itemToDelete.parentElement.children.length > 1) {
                        itemToDelete.remove();
                    } else if (itemToDelete.parentElement.children.length == 1) {
                        itemToDelete.parentElement.parentElement.remove();
                    }
                    //remove item out of bucket
                    let search = bucket.find((item) => item.productId === productId);
                    if (search !== undefined) {
                        let indexOfItem = bucket.findIndex(search => {
                            return search.productId === productId;
                        });
                        bucket.splice(indexOfItem, 1);
                    }
                    //checkshop
                    let shop = bucket.filter((item) => item.shopName === shopName);
                    let allTrue = shop.every((item) => item.check === true);
                    if(allTrue) {
                        fillCheckBox(shop_checkSpan);
                    }else {
                        emptyCheckBox(shop_checkSpan);
                    }
        
                    //check all
                    let rule = bucket.every((item) => item.check === true);
                    if(rule) {
                        fillCheckBox(all_checkSpan);
                    }else{
                        emptyCheckBox(all_checkSpan);
                    }
        
                    //paycheck
                    payCheck(response.finalPrice);
                },
                error: function () {
                    console.log("not working");
                }
            });
        }
    }
    confirmForRemove();
}

const renderingHTML = function(main) {
    return new Promise((resolve, reject) => {
        console.log("wait for rendering");
        let confirmForm =
        `<div class="ReactModal__Overlay ReactModal__Overlay--after-open" style="position: fixed; inset: 0px; background-color: rgba(39, 39, 42, 0.7); z-index: 999;">
         <div
            class="ReactModal__Content ReactModal__Content--after-open"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
            style="position: absolute; inset: 50% 40px auto 50%; border: 1px solid rgb(204, 204, 204); background: rgb(255, 255, 255); overflow: auto; border-radius: 8px; outline: none; padding: 16px; width: 311px; transform: translate(-50%, -50%);">
            <div class="styles__StyledDialog-sc-10typcj-0 Pvpwm">
                <div class="dialog-content">
                    <svg
                        width="24"
                        height="24"
                        class="dialog-content__icon"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                            fill="#FC820A"></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.0052 4.45201C10.8464 2.83971 13.1536 2.83971 13.9948 4.45201L20.5203 16.9592C21.3019 18.4572 20.2151 20.25 18.5255 20.25H5.47447C3.78487 20.25 2.69811 18.4572 3.47966 16.9592L10.0052 4.45201ZM12.6649 5.14586C12.3845 4.60842 11.6154 4.60842 11.335 5.14586L4.80953 17.6531C4.54902 18.1524 4.91127 18.75 5.47447 18.75H18.5255C19.0887 18.75 19.4509 18.1524 19.1904 17.6531L12.6649 5.14586Z"
                            fill="#FC820A"></path>
                        <path
                            d="M12 17.25C12.6213 17.25 13.125 16.7463 13.125 16.125C13.125 15.5037 12.6213 15 12 15C11.3787 15 10.875 15.5037 10.875 16.125C10.875 16.7463 11.3787 17.25 12 17.25Z"
                            fill="#FC820A"></path>
                    </svg>
                    <div class="dialog-content__text">
                        <div class="dialog-content__title">Xoá sản phẩm</div>
                        <div class="dialog-content__message">Bạn có muốn xóa sản phẩm đang chọn?</div>
                    </div>
                </div>
                <div class="dialog-control">
                    <div class="dialog-control__button dialog-control__button--secondary">Xác Nhận</div>
                    <div class="dialog-control__button dialog-control__button--main">Huỷ</div>
                </div>
            </div>
         </div>
         </div>`
        main.innerHTML = confirmForm;
        console.log("render successfully");
        resolve();
    });
}

const confirmation =  async function(main) {
    await renderingHTML(main);
    const click =  new Promise((resolve) => {
        console.log("wait for click");
        let confirm = document.getElementsByClassName("dialog-control__button dialog-control__button--secondary")[0];
        confirm.addEventListener("click", function () {
            console.log("confirmed");
            main.innerHTML = "";
            resolve(true);
        });
        let cancel = document.getElementsByClassName("dialog-control__button dialog-control__button--main")[0];
        cancel.addEventListener("click", function () {
            console.log("cancel");
            main.innerHTML = "";
            resolve(false);
        });
    }); 
    return await click;
}

function payCheck(finalPrice) {
    // let checkedItems = bucket.filter((item) => item.check === true);
    let price = document.getElementsByClassName("prices__value")[0];
    let finalPrice_element = document.getElementsByClassName("prices__value prices__value--final")[0];
    // let sum = checkedItems.map((item) => item.totalPrice).reduce((x,y) => x + y, 0);

    if(finalPrice !== 0) {
        price.innerHTML = `${finalPrice} đ`;
        finalPrice_element.style.fontSize = "22px";
        finalPrice_element.innerHTML = `${finalPrice} đ`;
    }
    else {
        price.innerHTML = "0đ";
        finalPrice_element.style.fontSize = "15px";
        finalPrice_element.innerHTML = "Vui lòng chọn sản phẩm";
    }
}

function order() {
    window.location = "/cart/payment";
}

