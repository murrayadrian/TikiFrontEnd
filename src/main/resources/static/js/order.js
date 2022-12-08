
document.addEventListener("DOMContentLoaded", function() {
    let itemList = document.getElementsByClassName("package-item-list")[0];
    let submit_Btn = document.getElementsByClassName("Button-sc-1p6a6mz-0")[0];
    submit_Btn.addEventListener("click", order);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:9999/cart/getAllCheckedItem",
        contentType: "application/json; charset=utf-8",
        data: {
            cartId: 1
        },
        success: function (response) {
            console.log(response);
            for(let i = 0; i < response.length; i++) {
                let divNull = document.createElement("div");
                divNull.innerHTML = `
            <div class="PackageItemListstyles__StyledPackageItem-sc-b42uex-0 HEIyE">
                <div class="item-icon">
                    <picture class="webpimg-container"><img
                        src="${response[i].productImage}"
                        alt="icon"
                        width="48"
                        height="48"
            
                        class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"></picture>
                </div>
                <div class="item-info">
                    <div class="item-info__first-line">
                        <span class="item-info__product-name" title="${response[i].productName}">
                            ${response[i].productName}
                        </span></div>
                    <div class="item-info__second-line">
                        <div class="item-info__qty">SL: x${response[i].quantity}</div>
                        <div class="item-info__price">${response[i].productPrice} đ</div>
                    </div>
                </div>
            </div>`;
            itemList.append(divNull);
            }
            showInfo(response);
        },
        error: function () {
            console.log("not working");
        }
    });
})

function showInfo(response) {
    let show = document.getElementsByClassName("styles__StyledOrderSummary-sc-1kbdasz-0")[0];
    let subtitle = show.getElementsByClassName("sub-title-link")[0];
    let list = document.getElementsByClassName("ItemListstyles__StyledItemList-sc-1syn9cx-0")[0];
    let list_container = document.getElementsByClassName("list-container")[0];
    let order_total = document.getElementsByClassName("order-total__total")[0];
    let summary_value = document.getElementsByClassName("summary-value")[0];
    let temp = 0;
    for(let i = 0;i<response.length;i++){
        temp += parseInt(response[i].totalPrice);
    }
    summary_value.innerHTML = temp + " ₫";
    order_total.innerHTML = temp + " ₫";
  
    subtitle.addEventListener("click",function() {
       if(show.classList.contains("cKJPhS")){
            show.classList.remove("cKJPhS");
            show.classList.add("jUvIZj");
            list.classList.remove("cIdCpS");
            list.classList.add("HeMLl");
            list.removeAttribute("hidden");
       }else if(show.classList.contains("jUvIZj")) {
            show.classList.remove("jUvIZj");
            show.classList.add("cKJPhS");
            list.classList.add("cIdCpS");
            list.classList.remove("HeMLl");
            list.setAttribute("hidden","");
       }
       for(let i = 0;i < response.length;i++){
        let content = `
        <div class="styles__FlexRow-sc-1kbdasz-1 bSkntM">
            <div class="item-info">
                <div class="item-info__qty">${response[i].quantity} x</div>
                <div class="item-info__name">${response[i].productName}</div>
            </div>
            <div class="item-price">${response[i].productPrice} ₫</div>
         </div>`
        list_container.insertAdjacentHTML("afterbegin",content);
       }
    });   
}

function order() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:9999/cart/order",
        contentType: "application/json; charset=utf-8",
        data: {
            cartId: 1
        },
        success : function(response) {
            console.log(response);
            alert("order successfully");
            window.location = "/cart/checkout";
        },
        error: function () {
            console.log("not working");
        }
    })
}
