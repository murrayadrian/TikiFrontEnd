let bucket = [];
let productItemBucket = [];
let stage1Bucket = [];
let stage2Bucket = [];
let stage3Bucket = [];
document.addEventListener("DOMContentLoaded", function() {
    let createProduct = document.getElementsByClassName("ant-menu-submenu")[3];
    let accountTrigger = document.getElementsByClassName("ant-dropdown-trigger")[0];
    createProduct.addEventListener("click", create);
    accountTrigger.addEventListener("click",trigger);
})

function create() {
    let content = document.getElementsByClassName("ant-layout-content")[0];
    let x = `
<div id="sc-frontend-products-root">
    <div class="sc-gsnTZi kAyjgi">
        <div class="sc-dkzDqf iMUsZV">
            <div class="sc-hKMtZM dZdnvS">
                <nav class="ant-breadcrumb">
                    <ol>
                        <li>
                            <span class="ant-breadcrumb-link">
                                <a href="/new">Trang chủ</a>
                            </span>
                            <span class="ant-breadcrumb-separator">/</span>
                        </li>
                        <li>
                            <span class="ant-breadcrumb-link">
                                <a href="/new#/products/listing/create">Tạo sản phẩm</a>
                            </span>
                            <span class="ant-breadcrumb-separator">/</span>
                        </li>
                        <li>
                            <span class="ant-breadcrumb-link">Tạo Sản phẩm mới</span>
                            <span class="ant-breadcrumb-separator">/</span>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="sc-eCYdqJ bcPStr">
                <a class="link-text" href="/new#/products/listing/create">
                    <span
                        role="img"
                        aria-label="arrow-left"
                        class="anticon anticon-arrow-left margin-right">
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="arrow-left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </span>
                </a>Tạo Sản phẩm mới</div>
            <div class="margin-top-half hidden">
                <input type="hidden" class="ant-input" value=""></div>
            </div>
            <div class="sc-jSMfEi kwDdmZ">
                <form class="ant-form ant-form-horizontal form-with-bold-label">
                    <div
                        type="flex"
                        class="ant-row flex-nowrap"
                        style="margin-left: -8px; margin-right: -8px;">
                        <div
                            class="ant-col flex-grow-1 ant-col-xs-21 ant-col-sm-21 ant-col-md-21 ant-col-lg-17 ant-col-xl-18"
                            style="padding-left: 8px; padding-right: 8px;">
                            <div class="sc-evZas fEjjGM">
                                <div class="ant-collapse ant-collapse-icon-position-end">
                                    <div class="ant-collapse-item" id="basicInformation">
                                        <div
                                            class="ant-collapse-header"
                                            aria-expanded="true"
                                            aria-disabled="false"
                                            role="button"
                                            tabindex="0">
                                            <div class="ant-collapse-expand-icon">
                                                <span
                                                    role="img"
                                                    aria-label="right"
                                                    class="anticon anticon-right ant-collapse-arrow">
                                                    <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="right"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                        style="transform: rotate(90deg);">
                                                        <path
                                                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <span class="ant-collapse-header-text">
                                                <b>1. Thông Tin Chung</b>
                                            </span>
                                        </div>
                                        <div class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden">
                                            <div class="ant-collapse-content-box">
                                                <div class="sc-ciZhAO QCyEd">
                                                    <div class="sc-bZnhIo dBHXRj">Thông tin quan trọng</div>
                                                    <div class="ant-form-item ant-form-item-has-success">
                                                        <div class="ant-row ant-form-item-row">
                                                            <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                <label class="ant-form-item-required ant-form-item-no-colon" title="">
                                                                    <span id="name">Tên sản phẩm</span>
                                                                </label>
                                                            </div>
                                                            <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                <div class="ant-form-item-control-input">
                                                                    <div class="ant-form-item-control-input-content">
                                                                        <div>
                                                                            <span class="ant-input-group-wrapper ant-input-group-wrapper-status-success">
                                                                                <span class="ant-input-wrapper ant-input-group">
                                                                                    <input
                                                                                        placeholder="Nhập tên Sản phẩm"
                                                                                        class="ant-input ant-input-status-success"
                                                                                        type="text"
                                                                                        value="">
                                                                                        <span class="ant-input-group-addon">0 | 255</span>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="">
                                                            <div class="ant-form-item ant-form-item-has-success">
                                                                <div class="ant-row ant-form-item-row">
                                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                        <label class="ant-form-item-required ant-form-item-no-colon" title="">
                                                                            <span id="categories">Danh mục</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                        <div class="ant-form-item-control-input">
                                                                            <div class="ant-form-item-control-input-content">
                                                                                <div class="ant-spin-nested-loading">
                                                                                    <div class="ant-spin-container">
                                                                                        <div class="sc-hiMGwR fFYBwB">
                                                                                            <div
                                                                                                class="ant-select ant-cascader ant-select-in-form-item ant-select-status-success query-product-select-categories ant-select-single ant-select-show-arrow ant-select-open">
                                                                                                <div class="ant-select-selector">
                                                                                                    <span class="ant-select-selection-search">
                                                                                                        <input
                                                                                                            type="search"
                                                                                                            autocomplete="off"
                                                                                                            class="ant-select-selection-search-input"
                                                                                                            role="combobox"
                                                                                                            aria-expanded="false"
                                                                                                            aria-haspopup="listbox"
                                                                                                            aria-owns="rc_select_0_list"
                                                                                                            aria-autocomplete="list"
                                                                                                            aria-controls="rc_select_0_list"
                                                                                                            readonly=""
                                                                                                            unselectable="on"
                                                                                                            value=""
                                                                                                            id="rc_select_0"
                                                                                                            style="opacity: 0;"></span>
                                                                                                        <span class="ant-select-selection-placeholder">Chọn Danh mục</span>
                                                                                                    </div>
                                                                                                    <span
                                                                                                        class="ant-select-arrow"
                                                                                                        unselectable="on"
                                                                                                        aria-hidden="true"
                                                                                                        style="user-select: none;">
                                                                                                        <span
                                                                                                            role="img"
                                                                                                            aria-label="down"
                                                                                                            class="anticon anticon-down ant-select-suffix">
                                                                                                            <svg
                                                                                                                viewBox="64 64 896 896"
                                                                                                                focusable="false"
                                                                                                                data-icon="down"
                                                                                                                width="1em"
                                                                                                                height="1em"
                                                                                                                fill="currentColor"
                                                                                                                aria-hidden="true">
                                                                                                                <path
                                                                                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                            </svg>
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="hidden"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ant-collapse-item" id="productDescription">
                                                <div
                                                    class="ant-collapse-header"
                                                    aria-expanded="true"
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabindex="0">
                                                    <div class="ant-collapse-expand-icon">
                                                        <span
                                                            role="img"
                                                            aria-label="right"
                                                            class="anticon anticon-right ant-collapse-arrow">
                                                            <svg
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="right"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                                style="">
                                                                <path
                                                                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span class="ant-collapse-header-text">
                                                        <b>2. Mô Tả Sản Phẩm</b>
                                                    </span>
                                                </div>
                                                <div
                                                    class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden"
                                                    style="">
                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <div>
                                                                <span class="ant-input-group-wrapper ant-input-group-wrapper-status-success">
                                                                    <span class="ant-input-wrapper ant-input-group">
                                                                        <input placeholder="Mô tả sản phẩm" class="ant-input ant-input-status-success" type="text" value="">
                                                                            <span class="ant-input-group-addon">0 | 255</span>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ant-collapse-item" id="operationAndOptions">
                                                <div
                                                    class="ant-collapse-header"
                                                    aria-expanded="true"
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabindex="0">
                                                    <div class="ant-collapse-expand-icon">
                                                        <span
                                                            role="img"
                                                            aria-label="right"
                                                            class="anticon anticon-right ant-collapse-arrow">
                                                            <svg
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="right"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                                style="">
                                                                <path
                                                                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span class="ant-collapse-header-text">
                                                        <b>3. Các Lựa Chọn &amp; Vận Hành</b>
                                                    </span>
                                                </div>
                                                <div class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden" style="">
                                                <div class="ant-collapse-content-box">
                                                    <div class="hidden"></div>
                                                    <div class="sc-ciZhAO sc-jdAMXn QCyEd hzDrQH margin-bottom-triple">
                                                        <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
                                                            <div
                                                                class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12"
                                                                style="padding-left: 8px; padding-right: 8px;">
                                                                <div class="ant-form-item ant-form-item-has-success">
                                                                    <div class="ant-row ant-form-item-row">
                                                                        <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                            <label class="ant-form-item-required ant-form-item-no-colon" title="">
                                                                                <span id="price">Giá bán</span>
                                                                            </label>
                                                                        </div>
                                                                        <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                            <div class="ant-form-item-control-input">
                                                                                <div class="ant-form-item-control-input-content">
                                                                                    <div
                                                                                        class="ant-input-number-group-wrapper ant-input-number-group-wrapper-status-success"
                                                                                        style="width: 100%;">
                                                                                        <div class="ant-input-number-wrapper ant-input-number-group">
                                                                                            <div class="ant-input-number-group-addon">₫</div>
                                                                                            <div
                                                                                                class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success">
                                                                                                <div class="ant-input-number-handler-wrap">
                                                                                                    <span
                                                                                                        unselectable="on"
                                                                                                        role="button"
                                                                                                        aria-label="Increase Value"
                                                                                                        aria-disabled="false"
                                                                                                        class="ant-input-number-handler ant-input-number-handler-up">
                                                                                                        <span
                                                                                                            role="img"
                                                                                                            aria-label="up"
                                                                                                            class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                            <svg
                                                                                                                viewbox="64 64 896 896"
                                                                                                                focusable="false"
                                                                                                                data-icon="up"
                                                                                                                width="1em"
                                                                                                                height="1em"
                                                                                                                fill="currentColor"
                                                                                                                aria-hidden="true">
                                                                                                                <path
                                                                                                                    d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                            </svg>
                                                                                                        </span>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        unselectable="on"
                                                                                                        role="button"
                                                                                                        aria-label="Decrease Value"
                                                                                                        aria-disabled="false"
                                                                                                        class="ant-input-number-handler ant-input-number-handler-down">
                                                                                                        <span
                                                                                                            role="img"
                                                                                                            aria-label="down"
                                                                                                            class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                            <svg
                                                                                                                viewbox="64 64 896 896"
                                                                                                                focusable="false"
                                                                                                                data-icon="down"
                                                                                                                width="1em"
                                                                                                                height="1em"
                                                                                                                fill="currentColor"
                                                                                                                aria-hidden="true">
                                                                                                                <path
                                                                                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                            </svg>
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </div>
                                                                                                <div class="ant-input-number-input-wrap">
                                                                                                    <input
                                                                                                        autocomplete="off"
                                                                                                        role="spinbutton"
                                                                                                        aria-valuemin="1"
                                                                                                        step="1"
                                                                                                        class="ant-input-number-input"
                                                                                                        value=""></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12"
                                                                style="padding-left: 8px; padding-right: 8px;">
                                                                <div class="ant-form-item ant-form-item-has-success">
                                                                    <div class="ant-row ant-form-item-row">
                                                                        <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                            <label class="ant-form-item-no-colon" title="Mã sản phẩm">Mã sản phẩm</label>
                                                                        </div>
                                                                        <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                            <div class="ant-form-item-control-input">
                                                                                <div class="ant-form-item-control-input-content">
                                                                                    <input class="ant-input ant-input-status-success" type="text" value=""></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="ant-col ant-col-xs-24"
                                                                style="padding-left: 8px; padding-right: 8px;">
                                                                <button
                                                                    type="button"
                                                                    class="ant-btn ant-btn-dashed ant-btn-lg ant-btn-block blue border-blue btn-responsive">
                                                                    <div class="sc-gFGZVQ fIrNPD">
                                                                        <div class="sc-dwLEzm eCtGUi"></div>
                                                                        <div>
                                                                            <span role="img" aria-label="plus" class="anticon anticon-plus">
                                                                                <svg
                                                                                    viewbox="64 64 896 896"
                                                                                    focusable="false"
                                                                                    data-icon="plus"
                                                                                    width="1em"
                                                                                    height="1em"
                                                                                    fill="currentColor"
                                                                                    aria-hidden="true">
                                                                                    <defs>
                                                                                        <style></style>
                                                                                    </defs>
                                                                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                                                                                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                                                                                </svg>
                                                                            </span>
                                                                            Thêm lựa chọn hàng để giúp khách hàng tìm kiếm sản phẩm và dễ dàng thêm mới lựa
                                                                            chọn</div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sc-ciZhAO QCyEd">
                                                        <div class="sc-bZnhIo dBHXRj">Vận hành</div>
                                                        <input name="offer.seller_id" type="hidden" value="324364">
                                                        <div id="dimension" class="margin-top-half">
                                                            <div class="margin-bottom-half">
                                                                <span
                                                                    role="img"
                                                                    aria-label="info-circle"
                                                                    class="anticon anticon-info-circle blue">
                                                                    <svg
                                                                        viewbox="64 64 896 896"
                                                                        focusable="false"
                                                                        data-icon="info-circle"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        aria-hidden="true">
                                                                        <path
                                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                                                                    </svg>
                                                                </span>
                                                                <b class="text-decoration">Lưu ý</b>: Shipper có thể từ chối nhận hàng nếu bạn
                                                                nhập Trọng lượng / Kích thước khác với thực tế.</div>
                                                            <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
                                                                <div
                                                                    class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-10"
                                                                    style="padding-left: 8px; padding-right: 8px;">
                                                                    <div class="ant-form-item ant-form-item-has-success">
                                                                        <div class="ant-row ant-form-item-row">
                                                                            <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                                <label class="ant-form-item-required ant-form-item-no-colon" title="">
                                                                                    <span id="product_weight_kg">Trọng lượng sau đóng gói (kg)
                                                                                        <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="info-circle"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                                                                <path
                                                                                                    d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                                <div class="ant-form-item-control-input">
                                                                                    <div class="ant-form-item-control-input-content">
                                                                                        <div
                                                                                            class="ant-input-number-group-wrapper ant-input-number-group-wrapper-status-success full-width">
                                                                                            <div class="ant-input-number-wrapper ant-input-number-group">
                                                                                                <div class="ant-input-number-group-addon">kg</div>
                                                                                                <div
                                                                                                    class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success full-width">
                                                                                                    <div class="ant-input-number-handler-wrap">
                                                                                                        <span
                                                                                                            unselectable="on"
                                                                                                            role="button"
                                                                                                            aria-label="Increase Value"
                                                                                                            aria-disabled="false"
                                                                                                            class="ant-input-number-handler ant-input-number-handler-up">
                                                                                                            <span
                                                                                                                role="img"
                                                                                                                aria-label="up"
                                                                                                                class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                                <svg
                                                                                                                    viewbox="64 64 896 896"
                                                                                                                    focusable="false"
                                                                                                                    data-icon="up"
                                                                                                                    width="1em"
                                                                                                                    height="1em"
                                                                                                                    fill="currentColor"
                                                                                                                    aria-hidden="true">
                                                                                                                    <path
                                                                                                                        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                        <span
                                                                                                            unselectable="on"
                                                                                                            role="button"
                                                                                                            aria-label="Decrease Value"
                                                                                                            aria-disabled="false"
                                                                                                            class="ant-input-number-handler ant-input-number-handler-down">
                                                                                                            <span
                                                                                                                role="img"
                                                                                                                aria-label="down"
                                                                                                                class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                                <svg
                                                                                                                    viewbox="64 64 896 896"
                                                                                                                    focusable="false"
                                                                                                                    data-icon="down"
                                                                                                                    width="1em"
                                                                                                                    height="1em"
                                                                                                                    fill="currentColor"
                                                                                                                    aria-hidden="true">
                                                                                                                    <path
                                                                                                                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                    <div class="ant-input-number-input-wrap">
                                                                                                        <input
                                                                                                            autocomplete="off"
                                                                                                            role="spinbutton"
                                                                                                            aria-valuemin="0"
                                                                                                            step="0.001"
                                                                                                            class="ant-input-number-input"
                                                                                                            value=""></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-14"
                                                                    style="padding-left: 8px; padding-right: 8px;">
                                                                    <div class="ant-form-item ant-form-item-has-success">
                                                                        <div class="ant-row ant-form-item-row">
                                                                            <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                                <label class="ant-form-item-required ant-form-item-no-colon" title="">
                                                                                    <span id="product_length">Chiều dài (cm)
                                                                                        <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="info-circle"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                                                                <path
                                                                                                    d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="black-light">
                                                                                        x
                                                                                    </span>
                                                                                    <span id="product_width">Chiều rộng (cm)
                                                                                        <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="info-circle"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                                                                <path
                                                                                                    d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="black-light">
                                                                                        x
                                                                                    </span>
                                                                                    <span id="product_height">Chiều cao (cm)
                                                                                        <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="info-circle"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                                                                <path
                                                                                                    d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                                <div class="ant-form-item-control-input">
                                                                                    <div class="ant-form-item-control-input-content">
                                                                                        <div
                                                                                            type="flex"
                                                                                            class="ant-row ant-row-middle"
                                                                                            style="margin-left: -4px; margin-right: -4px;">
                                                                                            <div class="ant-col" style="padding-left: 4px; padding-right: 4px;">
                                                                                                <div
                                                                                                    class="ant-input-number-group-wrapper ant-input-number-group-wrapper-status-success"
                                                                                                    style="width: 130px;">
                                                                                                    <div class="ant-input-number-wrapper ant-input-number-group">
                                                                                                        <div class="ant-input-number-group-addon">cm</div>
                                                                                                        <div
                                                                                                            class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success">
                                                                                                            <div class="ant-input-number-handler-wrap">
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Increase Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-up">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="up"
                                                                                                                        class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Decrease Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-down">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="down"
                                                                                                                        class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div class="ant-input-number-input-wrap">
                                                                                                                <input
                                                                                                                    autocomplete="off"
                                                                                                                    role="spinbutton"
                                                                                                                    aria-valuemin="0"
                                                                                                                    step="0.1"
                                                                                                                    placeholder="Dài"
                                                                                                                    class="ant-input-number-input"
                                                                                                                    value=""></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="ant-col" style="padding-left: 4px; padding-right: 4px;">x</div>
                                                                                            <div class="sc-gzzPqb fBmBvv margin-bottom-half hidden-md"></div>
                                                                                            <div class="ant-col" style="padding-left: 4px; padding-right: 4px;">
                                                                                                <div
                                                                                                    class="ant-input-number-group-wrapper ant-input-number-group-wrapper-status-success"
                                                                                                    style="width: 130px;">
                                                                                                    <div class="ant-input-number-wrapper ant-input-number-group">
                                                                                                        <div class="ant-input-number-group-addon">cm</div>
                                                                                                        <div
                                                                                                            class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success">
                                                                                                            <div class="ant-input-number-handler-wrap">
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Increase Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-up">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="up"
                                                                                                                        class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Decrease Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-down">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="down"
                                                                                                                        class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div class="ant-input-number-input-wrap">
                                                                                                                <input
                                                                                                                    autocomplete="off"
                                                                                                                    role="spinbutton"
                                                                                                                    aria-valuemin="0"
                                                                                                                    step="0.1"
                                                                                                                    placeholder="Rộng"
                                                                                                                    class="ant-input-number-input"
                                                                                                                    value=""></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="ant-col" style="padding-left: 4px; padding-right: 4px;">x</div>
                                                                                            <div class="sc-gzzPqb fBmBvv margin-bottom-half hidden-md"></div>
                                                                                            <div class="ant-col" style="padding-left: 4px; padding-right: 4px;">
                                                                                                <div
                                                                                                    class="ant-input-number-group-wrapper ant-input-number-group-wrapper-status-success"
                                                                                                    style="width: 130px;">
                                                                                                    <div class="ant-input-number-wrapper ant-input-number-group">
                                                                                                        <div class="ant-input-number-group-addon">cm</div>
                                                                                                        <div
                                                                                                            class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success">
                                                                                                            <div class="ant-input-number-handler-wrap">
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Increase Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-up">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="up"
                                                                                                                        class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="up"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                                <span
                                                                                                                    unselectable="on"
                                                                                                                    role="button"
                                                                                                                    aria-label="Decrease Value"
                                                                                                                    aria-disabled="false"
                                                                                                                    class="ant-input-number-handler ant-input-number-handler-down">
                                                                                                                    <span
                                                                                                                        role="img"
                                                                                                                        aria-label="down"
                                                                                                                        class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                                        <svg
                                                                                                                            viewbox="64 64 896 896"
                                                                                                                            focusable="false"
                                                                                                                            data-icon="down"
                                                                                                                            width="1em"
                                                                                                                            height="1em"
                                                                                                                            fill="currentColor"
                                                                                                                            aria-hidden="true">
                                                                                                                            <path
                                                                                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div class="ant-input-number-input-wrap">
                                                                                                                <input
                                                                                                                    autocomplete="off"
                                                                                                                    role="spinbutton"
                                                                                                                    aria-valuemin="0"
                                                                                                                    step="0.1"
                                                                                                                    placeholder="Cao"
                                                                                                                    class="ant-input-number-input"
                                                                                                                    value=""></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div class="sc-ciZhAO QCyEd">
                                                        <div class="sc-bZnhIo dBHXRj">Hình ảnh</div>
                                                        <div id="images">
                                                            <span class="required-mark"></span>
                                                            <b>Hình ảnh sản phẩm</b>
                                                        </div>
                                                        <div class="">
                                                            <div class="black-light margin-bottom-half">Kích thước tối thiểu: 500px x 500px | .jpg, .png | Tối đa 10 MB</div>
                                                            <div class="sc-hjriPb kdjcpA">
                                                                <div class="ant-spin-nested-loading">
                                                                    <div class="ant-spin-container">
                                                                        <span>
                                                                            <div class="ant-upload ant-upload-drag">
                                                                                <span tabindex="0" class="ant-upload ant-upload-btn" role="button">
                                                                                    <input
                                                                                        type="file"
                                                                                        accept="image/jpeg,image/png"
                                                                                        multiple=""
                                                                                        style="display: none;">
                                                                                    <div class="ant-upload-drag-container">
                                                                                        <span
                                                                                            role="img"
                                                                                            aria-label="upload"
                                                                                            type="upload"
                                                                                            class="anticon anticon-upload sc-dUWWNf kHvCue">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="upload"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                        <p class="ant-upload-text">Nhấn hoặc kéo thả hình ảnh vào đây để tải lên</p>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div type="flex" class="ant-row" style="margin-left: -8px; margin-right: -8px;">
                                                        <div
                                                            class="ant-col ant-col-12 hidden"
                                                            style="padding-left: 8px; padding-right: 8px;">
                                                            <div class="ant-form-item ant-form-item-has-success">
                                                                <div class="ant-row ant-form-item-row">
                                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                        <label class="ant-form-item-no-colon" title="">
                                                                            <span id="warranty_form">Hình thức bảo hành
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                        <div class="ant-form-item-control-input">
                                                                            <div class="ant-form-item-control-input-content">
                                                                                <div
                                                                                    class="ant-select ant-select-in-form-item ant-select-status-success ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-disabled ant-select-show-search">
                                                                                    <div class="ant-select-selector">
                                                                                        <span class="ant-select-selection-search">
                                                                                            <input
                                                                                                type="search"
                                                                                                disabled=""
                                                                                                autocomplete="off"
                                                                                                class="ant-select-selection-search-input"
                                                                                                role="combobox"
                                                                                                aria-expanded="false"
                                                                                                aria-haspopup="listbox"
                                                                                                aria-owns="rc_select_2_list"
                                                                                                aria-autocomplete="list"
                                                                                                aria-controls="rc_select_2_list"
                                                                                                aria-activedescendant="rc_select_2_list_0"
                                                                                                value=""
                                                                                                id="rc_select_2"></span>
                                                                                        <span class="ant-select-selection-placeholder">Nhập tên để tìm kiếm</span>
                                                                                    </div>
                                                                                    <span
                                                                                        class="ant-select-arrow"
                                                                                        unselectable="on"
                                                                                        aria-hidden="true"
                                                                                        style="user-select: none;">
                                                                                        <span
                                                                                            role="img"
                                                                                            aria-label="down"
                                                                                            class="anticon anticon-down ant-select-suffix">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="down"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="ant-col ant-col-12 hidden"
                                                            style="padding-left: 8px; padding-right: 8px;">
                                                            <div class="ant-form-item ant-form-item-has-success">
                                                                <div class="ant-row ant-form-item-row">
                                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                        <label class="ant-form-item-no-colon" title="">
                                                                            <span id="warranty_service_type">Loại dịch vụ bảo hành
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                        <div class="ant-form-item-control-input">
                                                                            <div class="ant-form-item-control-input-content">
                                                                                <div
                                                                                    class="ant-select ant-select-in-form-item ant-select-status-success ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-disabled ant-select-show-search">
                                                                                    <div class="ant-select-selector">
                                                                                        <span class="ant-select-selection-search">
                                                                                            <input
                                                                                                type="search"
                                                                                                disabled=""
                                                                                                autocomplete="off"
                                                                                                class="ant-select-selection-search-input"
                                                                                                role="combobox"
                                                                                                aria-expanded="false"
                                                                                                aria-haspopup="listbox"
                                                                                                aria-owns="rc_select_3_list"
                                                                                                aria-autocomplete="list"
                                                                                                aria-controls="rc_select_3_list"
                                                                                                aria-activedescendant="rc_select_3_list_0"
                                                                                                value=""
                                                                                                id="rc_select_3"></span>
                                                                                        <span class="ant-select-selection-placeholder">Nhập tên để tìm kiếm</span>
                                                                                    </div>
                                                                                    <span
                                                                                        class="ant-select-arrow"
                                                                                        unselectable="on"
                                                                                        aria-hidden="true"
                                                                                        style="user-select: none;">
                                                                                        <span
                                                                                            role="img"
                                                                                            aria-label="down"
                                                                                            class="anticon anticon-down ant-select-suffix">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="down"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="ant-col ant-col-12 hidden"
                                                            style="padding-left: 8px; padding-right: 8px;">
                                                            <div class="ant-form-item ant-form-item-has-success">
                                                                <div class="ant-row ant-form-item-row">
                                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                        <label class="ant-form-item-no-colon" title="">
                                                                            <span id="warranty_time_period">Thời gian bảo hành
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                        <div class="ant-form-item-control-input">
                                                                            <div class="ant-form-item-control-input-content">
                                                                                <div
                                                                                    class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success ant-input-number-disabled"
                                                                                    style="width: 100%;">
                                                                                    <div class="ant-input-number-handler-wrap">
                                                                                        <span
                                                                                            unselectable="on"
                                                                                            role="button"
                                                                                            aria-label="Increase Value"
                                                                                            aria-disabled="false"
                                                                                            class="ant-input-number-handler ant-input-number-handler-up">
                                                                                            <span
                                                                                                role="img"
                                                                                                aria-label="up"
                                                                                                class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                                                <svg
                                                                                                    viewbox="64 64 896 896"
                                                                                                    focusable="false"
                                                                                                    data-icon="up"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true">
                                                                                                    <path
                                                                                                        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                                                </svg>
                                                                                            </span>
                                                                                        </span>
                                                                                        <span
                                                                                            unselectable="on"
                                                                                            role="button"
                                                                                            aria-label="Decrease Value"
                                                                                            aria-disabled="false"
                                                                                            class="ant-input-number-handler ant-input-number-handler-down">
                                                                                            <span
                                                                                                role="img"
                                                                                                aria-label="down"
                                                                                                class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                                                <svg
                                                                                                    viewbox="64 64 896 896"
                                                                                                    focusable="false"
                                                                                                    data-icon="down"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true">
                                                                                                    <path
                                                                                                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                                </svg>
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="ant-input-number-input-wrap">
                                                                                        <input
                                                                                            autocomplete="off"
                                                                                            role="spinbutton"
                                                                                            aria-valuemin="1"
                                                                                            step="1"
                                                                                            class="ant-input-number-input"
                                                                                            disabled=""
                                                                                            value=""></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="ant-col ant-col-12 hidden"
                                                            style="padding-left: 8px; padding-right: 8px;">
                                                            <div class="ant-form-item ant-form-item-has-success">
                                                                <div class="ant-row ant-form-item-row">
                                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                                        <label class="ant-form-item-no-colon" title="">
                                                                            <span id="warranty_time_unit">Đơn vị thời gian bảo hành
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                                        <div class="ant-form-item-control-input">
                                                                            <div class="ant-form-item-control-input-content">
                                                                                <div
                                                                                    class="ant-select ant-select-in-form-item ant-select-status-success ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-disabled ant-select-show-search">
                                                                                    <div class="ant-select-selector">
                                                                                        <span class="ant-select-selection-search">
                                                                                            <input
                                                                                                type="search"
                                                                                                disabled=""
                                                                                                autocomplete="off"
                                                                                                class="ant-select-selection-search-input"
                                                                                                role="combobox"
                                                                                                aria-expanded="false"
                                                                                                aria-haspopup="listbox"
                                                                                                aria-owns="rc_select_4_list"
                                                                                                aria-autocomplete="list"
                                                                                                aria-controls="rc_select_4_list"
                                                                                                aria-activedescendant="rc_select_4_list_0"
                                                                                                value=""
                                                                                                id="rc_select_4"></span>
                                                                                        <span class="ant-select-selection-placeholder">Nhập tên để tìm kiếm</span>
                                                                                    </div>
                                                                                    <span
                                                                                        class="ant-select-arrow"
                                                                                        unselectable="on"
                                                                                        aria-hidden="true"
                                                                                        style="user-select: none;">
                                                                                        <span
                                                                                            role="img"
                                                                                            aria-label="down"
                                                                                            class="anticon anticon-down ant-select-suffix">
                                                                                            <svg
                                                                                                viewbox="64 64 896 896"
                                                                                                focusable="false"
                                                                                                data-icon="down"
                                                                                                width="1em"
                                                                                                height="1em"
                                                                                                fill="currentColor"
                                                                                                aria-hidden="true">
                                                                                                <path
                                                                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sc-jIZahH daZeIT">
                                        <div class="sc-himrzO bfsPrI">
                                            <a href="/new#/products/listing/create?source_screen=create_single_product">
                                                <button type="button" class="ant-btn ant-btn-dash sc-iAvgwm jnAHhs">
                                                    <span>Hủy</span>
                                                </button>
                                            </a>
                                            <button
                                                type="button"
                                                class="ant-btn ant-btn-primary ant-btn-background-ghost sc-iAvgwm jnAHhs">
                                                <span>Lưu nháp</span>
                                            </button>
                                            <button type="button" class="ant-btn ant-btn-primary sc-iAvgwm jnAHhs">
                                                <span>Gửi duyệt và tắt
                                                    <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                        <svg
                                                            viewBox="64 64 896 896"
                                                            focusable="false"
                                                            data-icon="info-circle"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                            <path
                                                                d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </button>
                                            <button type="button" class="ant-btn ant-btn-primary sc-iAvgwm jnAHhs">
                                                <span>Gửi duyệt và bật bán</span>
                                                <span role="img" aria-label="info-circle" class="anticon anticon-info-circle">
                                                    <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="info-circle"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                        <path
                                                            d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="ant-col ant-col-xs-3 ant-col-sm-3 ant-col-md-3 ant-col-lg-7 ant-col-xl-6"
                                    style="padding-left: 8px; padding-right: 8px;">
                                    <div>
                                        <div class="" style="">
                                            <div>
                                                <div>
                                                    <div class="ant-card ant-card-bordered sc-hAZoDl jnwQCj">
                                                        <div class="ant-card-body">
                                                            <div class="margin-bottom-half">
                                                                <a>Mở rộng thông tin</a>
                                                            </div>
                                                            <div class="ant-steps ant-steps-vertical ant-steps-small">
                                                                <div class="ant-steps-item ant-steps-item-process ant-steps-item-active">
                                                                    <div role="button" tabindex="0" class="ant-steps-item-container">
                                                                        <div class="ant-steps-item-tail"></div>
                                                                        <div class="ant-steps-item-icon">
                                                                            <span class="ant-steps-icon">1</span>
                                                                        </div>
                                                                        <div class="ant-steps-item-content">
                                                                            <div class="ant-steps-item-title">
                                                                                <div class="ant-row ant-row-no-wrap ant-row-space-between ant-row-middle">
                                                                                    <div class="ant-col">
                                                                                        <a href="basicInformation" class="anchor">Thông Tin Chung</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="ant-steps-item ant-steps-item-wait">
                                                                    <div role="button" tabindex="0" class="ant-steps-item-container">
                                                                        <div class="ant-steps-item-tail"></div>
                                                                        <div class="ant-steps-item-icon">
                                                                            <span class="ant-steps-icon">2</span>
                                                                        </div>
                                                                        <div class="ant-steps-item-content">
                                                                            <div class="ant-steps-item-title">
                                                                                <div class="ant-row ant-row-no-wrap ant-row-space-between ant-row-middle">
                                                                                    <div class="ant-col">
                                                                                        <a href="productDescription" class="anchor">Mô Tả Sản Phẩm</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="ant-steps-item ant-steps-item-wait">
                                                                    <div role="button" tabindex="0" class="ant-steps-item-container">
                                                                        <div class="ant-steps-item-tail"></div>
                                                                        <div class="ant-steps-item-icon">
                                                                            <span class="ant-steps-icon">3</span>
                                                                        </div>
                                                                        <div class="ant-steps-item-content">
                                                                            <div class="ant-steps-item-title">
                                                                                <div class="ant-row ant-row-no-wrap ant-row-space-between ant-row-middle">
                                                                                    <div class="ant-col">
                                                                                        <a href="operationAndOptions" class="anchor">Các Lựa Chọn &amp; Vận Hành</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="ant-steps-item ant-steps-item-wait">
                                                                    <div role="button" tabindex="0" class="ant-steps-item-container">
                                                                        <div class="ant-steps-item-tail"></div>
                                                                        <div class="ant-steps-item-icon">
                                                                            <span class="ant-steps-icon">4</span>
                                                                        </div>
                                                                        <div class="ant-steps-item-content">
                                                                            <div class="ant-steps-item-title">
                                                                                <div class="ant-row ant-row-no-wrap ant-row-space-between ant-row-middle">
                                                                                    <div class="ant-col">
                                                                                        <a href="authenticDocument" class="anchor">Tài liệu yêu cầu</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
                    <div>
                        <div
                            class="ant-tooltip ant-tooltip-placement-topLeft  ant-tooltip-hidden"
                            style="left: -695px; top: -1103.1px; transform-origin: 0px 74.3125px; pointer-events: none;">
                            <div class="ant-tooltip-content">
                                <div class="ant-tooltip-arrow">
                                    <span
                                        class="ant-tooltip-arrow-content"
                                        style="--antd-arrow-background-color:#2f54eb;"></span>
                                </div>
                                <div
                                    class="ant-tooltip-inner"
                                    role="tooltip"
                                    style="background: rgb(47, 84, 235);">Tên sản phẩm: chứa ít nhất 3 ký tự và không quá 255 ký tự</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
    <div>
        <div class="ant-select-dropdown CatalogProductSelectCategories CatalogProductSelectCategories1 ant-cascader-dropdown ant-select-dropdown-placement-bottomLeft ant-select-dropdown-hidden"
            style="min-width: auto; left: 304px; top: 481.8px;">
            <div>
                <div>
                    <div
                        data-show="true"
                        class="ant-alert ant-alert-info sc-hTtwUo iHILMa"
                        role="alert">
                        <span
                            role="img"
                            aria-label="info-circle"
                            class="anticon anticon-info-circle ant-alert-icon">
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="info-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                            </svg>
                        </span>
                        <div class="ant-alert-content">
                            <div class="ant-alert-message">Vui lòng chọn danh mục cấp cuối được in đậm.</div>
                        </div>
                    </div>
                    <div class="sc-gSAPjG NrgLb">
                        <span class="ant-input-affix-wrapper ant-input-affix-wrapper-status-success">
                            <span class="ant-input-prefix">
                                <span role="img" aria-label="search" class="anticon anticon-search">
                                    <svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="search"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                    </svg>
                                </span>
                            </span>
                            <input
                                placeholder="Nhập ID hoặc tên Danh mục để tìm kiếm"
                                class="ant-input"
                                type="text"
                                value="">
                                <span class="ant-input-suffix">
                                    <span
                                        class="ant-input-clear-icon ant-input-clear-icon-hidden"
                                        role="button"
                                        tabindex="-1">
                                        <span role="img" aria-label="close-circle" class="anticon anticon-close-circle">
                                            <svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="close-circle"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>

                        <div class="ant-cascader-menus">
                        </div>

                        <div class="sc-lbxAil eUVqbl">
                            <div class="margin-bottom-half">
                                <b>Đang chọn:</b>
                                <span class="blue query-product-selecting-categories">---</span>
                            </div>
                            <button type="button" class="ant-btn ant-btn-primary" disabled="">
                                <span>Xác nhận</span>
                            </button>
                            <button type="button" class="ant-btn ant-btn-default margin-left-half">
                                <span>Bỏ chọn</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
    content.innerHTML = x;
    let categoryDropdown = document.getElementsByClassName("ant-spin-container")[0];
    categoryDropdown.addEventListener("click",showCategory);
    let option = document.getElementsByClassName("ant-btn-dashed")[0];
    option.addEventListener("click", variation);
    let items = document.getElementsByClassName("ant-collapse-header");
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", activate);
    }
    let productName = document.getElementById("basicInformation").querySelector("input");
    productName.addEventListener("change", insertProductName);
    let description = document.getElementById("productDescription").querySelector("input");
    description.addEventListener("change", insertDescription);
    let submit = document.getElementsByClassName("bfsPrI")[0];
    submit.addEventListener("click", collectData);
    stage1Bucket.shopId = 1;
}
function activate(event) {
    let item = event.currentTarget.parentElement;
    let content = item.getElementsByClassName("ant-collapse-content")[0];
    if(!item.classList.contains("ant-collapse-item-active")) {
        item.classList.add("ant-collapse-item-active");
        content.classList.remove("ant-collapse-content-inactive", "ant-collapse-content-hidden");
        content.classList.add("ant-collapse-content-active");
    }else{
        item.classList.remove("ant-collapse-item-active");
        content.classList.add("ant-collapse-content-inactive", "ant-collapse-content-hidden");
        content.classList.remove("ant-collapse-content-active");
    }
    
}

function trigger() {
    let dropdown = document.getElementsByClassName("ant-dropdown")[0];
    if(dropdown.style.display=="none") {
        dropdown.style.display="block"
    }else{
        dropdown.style.display="none";
    }   
}

function insertProductName(event) {
    this.setAttribute("value", event.target.value);
    stage1Bucket.productName = event.target.value  
}

function insertDescription(event) {
    this.setAttribute("value", event.target.value);
    stage2Bucket.description =  event.target.value;
}

function showCategory() {
    let root = document.getElementById("sc-frontend-products-root");
    let categoryTable = root.getElementsByClassName("ant-select-dropdown")[0];

    let menus  = document.getElementsByClassName("ant-cascader-menus")[0];
    let uls = menus.getElementsByTagName("ul");

    if(categoryTable.classList.contains("ant-select-dropdown-hidden")) {
        categoryTable.classList.remove("ant-select-dropdown-hidden");
        if(uls.length === 0) {
            getSubCategory(0);
        }
    }
    else {
        categoryTable.classList.add("ant-select-dropdown-hidden");
    }
}

function choosen(name) {
    let selectedCategory = document.getElementsByClassName("sc-lbxAil")[0];
    let selectingCategories = selectedCategory.getElementsByClassName("margin-bottom-half")[0].querySelector("span");
    selectingCategories.innerHTML = name;
    let acceptBtn = selectedCategory.getElementsByTagName("button")[0];
    acceptBtn.removeAttribute("disabled");
    acceptBtn.addEventListener("click", handleClick);
    acceptBtn.param = name;
}

function handleClick(e) {
    let placeholder = document.getElementsByClassName("ant-select-selection-placeholder")[0];
    placeholder.innerText = e.currentTarget.param;
    placeholder.style.color = "rgba(0, 0, 0, 0.85)";
    let root = document.getElementById("sc-frontend-products-root");
    let categoryTable = root.getElementsByClassName("ant-select-dropdown")[0];

    if(categoryTable.classList.contains("ant-select-dropdown-hidden")) {
        categoryTable.classList.remove("ant-select-dropdown-hidden");
    }
    else {
        categoryTable.classList.add("ant-select-dropdown-hidden");
    }
    stage1Bucket.categoryName = e.currentTarget.param;
}

function getSubCategory(parentId) {
    let menus  = document.getElementsByClassName("ant-cascader-menus")[0];
    //clear all active
    let ul;
    let li;
    if(this.event.target.parentElement.parentElement.tagName === "UL") {
        ul = this.event.target.parentElement.parentElement;
    }else{
        ul = this.event.target.parentElement.parentElement.parentElement;
    }
    
    if(this.event.target.parentElement.tagName === "LI") {
        li = this.event.target.parentElement;
    }else {
        li = this.event.target.parentElement.parentElement;
    }
    //hightlight
    if(li.tagName ==="LI") {
        let lis = ul.getElementsByTagName("li");
        for(let i = 0; i < lis.length; i++) {
            if(lis[i].classList.contains("ant-cascader-menu-item-active")) {
                lis[i].classList.remove("ant-cascader-menu-item-active");
            }
        }
        li.classList.add("ant-cascader-menu-item-active");
        let name = li.getElementsByClassName("ant-cascader-menu-item-content")[0].innerText;
        choosen(name);
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:9999/admin/getSubCategory",
        contentType: "application/json; charset=utf-8",
        data: {
            parentId
        },
        success: function (response) {
            if(response.length > 0) {
                let level = response[0].level - 1;
                for(let i = menus.children.length-1; i >= level ; i--) {
                    menus.removeChild(menus.children[i]);
                }
                const ul = document.createElement("ul");
                ul.classList.add("ant-cascader-menu");
                for(let i = 0 ; i < response.length; i++) {
                    if(response[i].leaf === true) {
                        let boldCategory = 
                        `<li class="ant-cascader-menu-item ant-cascader-menu-item-expand">
                        <div class="ant-cascader-menu-item-content" onclick="getSubCategory(${response[i].id})"><b>${response[i].name}</b></div>
                        <div class="ant-cascader-menu-item-expand-icon">
                            <span role="img" aria-label="right" class="anticon anticon-right">
                                <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="right"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                                </svg>
                            </span>
                        </div>
                        </li>`;
                        ul.insertAdjacentHTML("beforeend", boldCategory);
                    }
                    else {
                        let normalCategory = 
                        `<li class="ant-cascader-menu-item ant-cascader-menu-item-expand">
                            <div class="ant-cascader-menu-item-content" onclick="getSubCategory(${response[i].id})">${response[i].name}</div>
                            <div class="ant-cascader-menu-item-expand-icon">
                                <span role="img" aria-label="right" class="anticon anticon-right">
                                    <svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="right"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                                    </svg>
                                </span>
                            </div>
                        </li>`;
                        ul.insertAdjacentHTML("beforeend", normalCategory);
                    } 
                }
                menus.appendChild(ul);
            }
            else{
                return;
            }  
        },
        error: function() {
            console.log("not working");
        }
    })
}

function variation(event) {
  let divTriple = event.currentTarget.parentElement.parentElement.parentElement;
  let isTriple = event.currentTarget.parentElement.parentElement.parentElement.classList.contains("margin-bottom-triple");
  let contentBox = document.getElementsByClassName("ant-collapse-content-box")[1];
  let divChild = `
    <div
    align = "right"
    class = "ant-col"
    style = "padding-left: 8px; padding-right: 8px;" > <a class="red">
    <span role="img" aria-label="delete" class="anticon anticon-delete">
        <svg
            viewbox="64 64 896 896"
            focusable="false"
            data-icon="delete"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true">
            <path
                d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
        </svg>
    </span>
    Xóa tất cả lựa chọn</a>
</div>
<div
type="flex"
class="ant-row ant-row-space-between ant-row-middle"
style="margin-left: -8px; margin-right: -8px;">
<div
    class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-11"
    style="padding-left: 8px; padding-right: 8px;">
    <div class="ant-form-item ant-form-item-has-success">
        <div class="ant-row ant-form-item-row">
            <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                <label class="ant-form-item-required ant-form-item-no-colon" title="">
                    <span id="option1Label">Tên lựa chọn 1</span>
                </label>
            </div>
            <div class="ant-col ant-form-item-control ant-col-xs-24">
                <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                        <div class="ant-spin-nested-loading">
                            <div class="ant-spin-container">
                                <div
                                    class="ant-select ant-select-in-form-item ant-select-status-success ant-select-single ant-select-show-search"
                                    name="attributes.option1_label"
                                    style="width: 100%;">
                                    <div class="ant-select-selector">
                                        <span class="ant-select-selection-search">
                                            <input
                                                type="search"
                                                autocomplete="off"
                                                class="ant-select-selection-search-input"
                                                role="combobox"
                                                aria-expanded="false"
                                                aria-haspopup="listbox"
                                                aria-owns="rc_select_242_list"
                                                aria-autocomplete="list"
                                                aria-controls="rc_select_242_list"
                                                aria-activedescendant="rc_select_242_list_0"
                                                value=""
                                                id="rc_select_242"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-11"
        style="padding-left: 8px; padding-right: 8px;">
        <div class="ant-form-item hidden ant-form-item-has-success">
            <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                    <label class="ant-form-item-required ant-form-item-no-colon" title="">
                        <span id="optionValues1">Các lựa chọn cho
                        </span>
                    </label>
                </div>
                <div class="ant-col ant-form-item-control ant-col-xs-24">
                    <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                            <div class="ant-spin-nested-loading">
                                <div class="ant-spin-container">
                                    <div
                                        class="ant-select ant-select-in-form-item ant-select-status-success ant-select-multiple ant-select-show-search"
                                        name="variation.option1_values"
                                        refresh="1676866081671"
                                        style="width: 100%;">
                                        <div class="ant-select-selector">
                                            <div class="ant-select-selection-overflow">
                                                <div
                                                    class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix"
                                                    style="opacity: 1;">
                                                    <div class="ant-select-selection-search">
                                                        <input
                                                            type="search"
                                                            autocomplete="off"
                                                            class="ant-select-selection-search-input"
                                                            role="combobox"
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            aria-owns="rc_select_150_list"
                                                            aria-autocomplete="list"
                                                            aria-controls="rc_select_150_list"
                                                            aria-activedescendant="rc_select_150_list_4"
                                                            value=""
                                                            id="rc_select_150"
                                                            >
                                                            <span class="ant-select-selection-search-mirror" aria-hidden="true">&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="ant-select-selection-placeholder"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            align="left"
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-1"
            style="padding-left: 8px; padding-right: 8px;">
            <span
                role="img"
                aria-label="delete"
                tabindex="-1"
                class="anticon anticon-delete sc-cZwWEu bLFjza red">
                <svg
                    viewbox="64 64 896 896"
                    focusable="false"
                    data-icon="delete"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                </svg>
            </span>
        </div>
    </div>
    <div
        class="ant-col ant-col-xs-24"
        style="padding-left: 8px; padding-right: 8px;">
        <button
            type="button"
            class="ant-btn ant-btn-dashed ant-btn-lg ant-btn-block blue border-blue btn-responsive">
            <span role="img" aria-label="plus" class="anticon anticon-plus">
                <svg
                    viewbox="64 64 896 896"
                    focusable="false"
                    data-icon="plus"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <defs>
                        <style></style>
                    </defs>
                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                </svg>
            </span>
            <span>
                Thêm lựa chọn hàng để giúp khách hàng tìm kiếm sản phẩm và dễ dàng thêm mới lựa
                chọn</span>
        </button>
    </div>
    `
  let divFlex = `
  <div
    type="flex"
    class="ant-row ant-row-space-between ant-row-middle"
    style="margin-left: -8px; margin-right: -8px;">
    <div
        class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-11"
        style="padding-left: 8px; padding-right: 8px;">
        <div class="ant-form-item ant-form-item-has-success">
            <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                    <label class="ant-form-item-required ant-form-item-no-colon" title="">
                        <span id="option1Label">Tên lựa chọn 2</span>
                    </label>
                </div>
                <div class="ant-col ant-form-item-control ant-col-xs-24">
                    <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                            <div class="ant-spin-nested-loading">
                                <div class="ant-spin-container">
                                    <div
                                        class="ant-select ant-select-in-form-item ant-select-status-success ant-select-single ant-select-show-search"
                                        name="attributes.option1_label"
                                        style="width: 100%;">
                                        <div class="ant-select-selector">
                                            <span class="ant-select-selection-search">
                                                <input
                                                    type="search"
                                                    autocomplete="off"
                                                    class="ant-select-selection-search-input"
                                                    role="combobox"
                                                    aria-expanded="false"
                                                    aria-haspopup="listbox"
                                                    aria-owns="rc_select_242_list"
                                                    aria-autocomplete="list"
                                                    aria-controls="rc_select_242_list"
                                                    aria-activedescendant="rc_select_242_list_0"
                                                    value=""
                                                    id="rc_select_242"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-11"
            style="padding-left: 8px; padding-right: 8px;">
            <div class="ant-form-item hidden ant-form-item-has-success">
                <div class="ant-row ant-form-item-row">
                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                        <label class="ant-form-item-required ant-form-item-no-colon" title="">
                            <span id="optionValues2">Các lựa chọn cho
                            </span>
                        </label>
                    </div>
                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                        <div class="ant-form-item-control-input">
                            <div class="ant-form-item-control-input-content">
                                <div class="ant-spin-nested-loading">
                                    <div class="ant-spin-container">
                                        <div
                                            class="ant-select ant-select-in-form-item ant-select-status-success ant-select-multiple ant-select-show-search"
                                            name="variation.option1_values"
                                            refresh="1676866081671"
                                            style="width: 100%;">
                                            <div class="ant-select-selector">
                                                <div class="ant-select-selection-overflow">
                                                    <div
                                                        class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix"
                                                        style="opacity: 1;">
                                                        <div class="ant-select-selection-search">
                                                            <input
                                                                type="search"
                                                                autocomplete="off"
                                                                class="ant-select-selection-search-input"
                                                                role="combobox"
                                                                aria-expanded="false"
                                                                aria-haspopup="listbox"
                                                                aria-owns="rc_select_150_list"
                                                                aria-autocomplete="list"
                                                                aria-controls="rc_select_150_list"
                                                                aria-activedescendant="rc_select_150_list_4"
                                                                value=""
                                                                id="rc_select_150">
                                                                <span class="ant-select-selection-search-mirror" aria-hidden="true">&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="ant-select-selection-placeholder"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                align="left"
                class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-1"
                style="padding-left: 8px; padding-right: 8px;">
                <span
                    role="img"
                    aria-label="delete"
                    tabindex="-1"
                    class="anticon anticon-delete sc-cZwWEu bLFjza red">
                    <svg
                        viewbox="64 64 896 896"
                        focusable="false"
                        data-icon="delete"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                    </svg>
                </span>
            </div>
        </div>
  `
  if(isTriple){
    divTriple.classList.remove("margin-bottom-triple");
    divTriple.classList.add("margin-bottom-double");
    divTriple.innerHTML = divChild;
    let option = document.getElementsByClassName("ant-btn-dashed")[0];
    option.addEventListener("click", variation);
    showTable();
    contentBox.children[4].remove();
  }else{
    let divDouble = event.currentTarget.parentElement.parentElement;
    event.currentTarget.parentElement.remove();
    divDouble.insertAdjacentHTML("beforeend",divFlex);
  }
  let operations = document.getElementById("operationAndOptions").getElementsByClassName("sc-ciZhAO")[0].getElementsByClassName("ant-row-middle");
  for(let i = 0; i < operations.length; i++) {
      let input = operations[i].querySelector("input");
      input.addEventListener("keypress",function(event) {
          if(event.key === "Enter") {
              event.preventDefault();
              inputVariationName(event);
          }
      });
  }
}

function inputVariationName(event) {
    let variationName = event.target.value;
    bucket.push({
        variationName
    })
    let divHidden = event.currentTarget.closest(".ant-row-middle").children[1].children[0];
    divHidden.classList.remove("hidden");
    let divSpan = divHidden.querySelector("span");
    divSpan.innerText = divSpan.innerText + " " + event.target.value;
    let value = divHidden.querySelector("input");
    value.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            inputValues(event, variationName);
        }
    });
}

function inputValues(event, variationName) {
    let find = bucket.find(item=>item.variationName === variationName);
    let values =[];
    for(let i = 0; i < event.target.value.split(",").length;i++) {
        values.push({
            valueName : event.target.value.split(",")[i].trim()
        });
    }
    find.values = values;
    addItemToBucket();
}

function showTable() {
    let prevElement = document.getElementById("dimension");
    let separatorNode = document.createElement("div");
    separatorNode.classList.add("ant-divider", "ant-divider-horizontal", "margin-top-half");
    let tableNode = document.createElement("div");
    tableNode.classList.add("ant-table-wrapper");
    let content = `
    <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
                <div
                    class=" ant-table ant-table-small ant-table-bordered ant-table-ping-left ant-table-ping-right ant-table-layout-fixed ant-table-fixed-header ant-table-fixed-column ant-table-scroll-horizontal ant-table-has-fix-left ant-table-has-fix-right ">
                    <div class="ant-table-title">
                        <div class="variation-list-hint black-light margin-bottom">*** Bạn có thể nhập
                            giá trị tại hàng tiêu đề, sau đó bấm dấu tích (✓) hoặc nhấn Enter để cập nhật
                            hàng loạt</div>
                    </div>
                    <div class="ant-table-container">
                        <div class="ant-table-header" style="overflow: hidden;">
                            <table class="sc-hlnMnd hLORXC">
                                <colgroup>
                                    <col style="width: 30px;">
                                    <col style="width: 50px;">
                                    <col style="width: 50px;">
                                    <col style="width: 50px;">
                                    <col style="width: 20px;"></colgroup>
                                <thead class="ant-table-thead">
                                    <tr>
                                        <th
                                            class="sc-HzFiz gaBYvM  ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last ">
                                            <span class="ant-table-cell-content" title="Lựa chọn">Lựa chọn</span>
                                        </th>
                                        <th class="ant-table-cell">
                                            <span class="ant-table-cell-content">
                                                <div class="ant-row ant-form-item no-margin">
                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                        <label class="false ant-form-item-no-colon" title="Số lượng tồn kho">Số lượng tồn kho</label>
                                                    </div>
                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                        <div class="ant-input-number full-width">
                                                            <div class="ant-input-number-handler-wrap">
                                                                <span
                                                                    unselectable="on"
                                                                    role="button"
                                                                    aria-label="Increase Value"
                                                                    aria-disabled="false"
                                                                    class="ant-input-number-handler ant-input-number-handler-up">
                                                                    <span
                                                                        role="img"
                                                                        aria-label="up"
                                                                        class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                        <svg
                                                                            viewbox="64 64 896 896"
                                                                            focusable="false"
                                                                            data-icon="up"
                                                                            width="1em"
                                                                            height="1em"
                                                                            fill="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    unselectable="on"
                                                                    role="button"
                                                                    aria-label="Decrease Value"
                                                                    aria-disabled="false"
                                                                    class="ant-input-number-handler ant-input-number-handler-down">
                                                                    <span
                                                                        role="img"
                                                                        aria-label="down"
                                                                        class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                        <svg
                                                                            viewbox="64 64 896 896"
                                                                            focusable="false"
                                                                            data-icon="down"
                                                                            width="1em"
                                                                            height="1em"
                                                                            fill="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div class="ant-input-number-input-wrap">
                                                                <input
                                                                    autocomplete="off"
                                                                    role="spinbutton"
                                                                    aria-valuemin="0"
                                                                    step="1"
                                                                    placeholder="Nhập cho tất cả"
                                                                    class="ant-input-number-input"
                                                                    value=""></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </th>
                                        <th class="ant-table-cell">
                                            <span class="ant-table-cell-content">
                                                <div class="ant-row ant-form-item no-margin">
                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                        <label
                                                            class="ant-form-item-required ant-form-item-no-colon"
                                                            title="Giá bán (₫)">Giá bán (₫)</label>
                                                    </div>
                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                        <div class="ant-input-number full-width">
                                                            <div class="ant-input-number-handler-wrap">
                                                                <span
                                                                    unselectable="on"
                                                                    role="button"
                                                                    aria-label="Increase Value"
                                                                    aria-disabled="false"
                                                                    class="ant-input-number-handler ant-input-number-handler-up">
                                                                    <span
                                                                        role="img"
                                                                        aria-label="up"
                                                                        class="anticon anticon-up ant-input-number-handler-up-inner">
                                                                        <svg
                                                                            viewbox="64 64 896 896"
                                                                            focusable="false"
                                                                            data-icon="up"
                                                                            width="1em"
                                                                            height="1em"
                                                                            fill="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    unselectable="on"
                                                                    role="button"
                                                                    aria-label="Decrease Value"
                                                                    aria-disabled="false"
                                                                    class="ant-input-number-handler ant-input-number-handler-down">
                                                                    <span
                                                                        role="img"
                                                                        aria-label="down"
                                                                        class="anticon anticon-down ant-input-number-handler-down-inner">
                                                                        <svg
                                                                            viewbox="64 64 896 896"
                                                                            focusable="false"
                                                                            data-icon="down"
                                                                            width="1em"
                                                                            height="1em"
                                                                            fill="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div class="ant-input-number-input-wrap">
                                                                <input
                                                                    autocomplete="off"
                                                                    role="spinbutton"
                                                                    aria-valuemin="0"
                                                                    step="1"
                                                                    placeholder="Nhập cho tất cả"
                                                                    class="ant-input-number-input"
                                                                    value=""></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </th>
                                        <th class="ant-table-cell">
                                            <span class="ant-table-cell-content">
                                                <div class="ant-row ant-form-item no-margin">
                                                    <div class="ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24">
                                                        <label class="false ant-form-item-no-colon" title="Mã sản phẩm">Mã sản phẩm</label>
                                                    </div>
                                                    <div class="ant-col ant-form-item-control ant-col-xs-24">
                                                        <input
                                                            placeholder="Nhập cho tất cả"
                                                            class="ant-input full-width"
                                                            type="text"
                                                            value=""></div>
                                                </div>
                                            </span>
                                        </th>
                                        <th
                                            class="sc-grREDI dAUIlM  ant-table-cell ant-table-cell-fix-right ant-table-cell-fix-right-first ">
                                            <span class="ant-table-cell-content" title="Thao tác">Thao tác</span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="ant-table-body" style="overflow: auto scroll; max-height: 300px;">
                            <table class="sc-hlnMnd hLORXC">
                                <colgroup>
                                    <col style="width: 30px;">
                                    <col style="width: 50px;">
                                    <col style="width: 50px;">
                                    <col style="width: 50px;">
                                    <col style="width: 20px;"></colgroup>
                                <tbody class="ant-table-tbody">
                                    <tr class="sc-fIavCj fDnXQK ant-table-measure-row">
                                        <td class="sc-duzrYq cCoFDO">
                                            <div class="sc-dkdnUF kQZfRp">&nbsp;</div>
                                        </td>
                                        <td class="sc-duzrYq cCoFDO">
                                            <div class="sc-dkdnUF kQZfRp">&nbsp;</div>
                                        </td>
                                        <td class="sc-duzrYq cCoFDO">
                                            <div class="sc-dkdnUF kQZfRp">&nbsp;</div>
                                        </td>
                                        <td class="sc-duzrYq cCoFDO">
                                            <div class="sc-dkdnUF kQZfRp">&nbsp;</div>
                                        </td>
                                        <td class="sc-duzrYq cCoFDO">
                                            <div class="sc-dkdnUF kQZfRp">&nbsp;</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sc-gUAEMC jVsHgT margin-top-double">
    <div class="sc-papXJ fcrVDk">Hình ảnh</div>
    <div class="ant-table-wrapper" style="width: 100%;">
        <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
                <div
                    class="ant-table ant-table-small ant-table-bordered ant-table-fixed-header ant-table-scroll-horizontal">
                    <div class="ant-table-container">
                        <div class="ant-table-header" style="overflow: hidden;">
                            <table style="table-layout: fixed;">
                                <colgroup><col style="width: 120px;"><col style="width: 486.25px;"><col style="width: 100px;"><col style="width: 17px;"></colgroup>
                                <thead class="ant-table-thead">
                                    <tr>
                                        <th class="ant-table-cell">Lựa chọn</th>
                                        <th class="ant-table-cell">
                                            <span class="required-mark"></span>
                                            Hình ảnh<div class="black-light">Kích thước tối thiểu: 500px x 500px | .jpg, .png | Tối đa 10 MB</div>
                                        </th>
                                        <th class="ant-table-cell">Thao tác</th>
                                        <th class="ant-table-cell ant-table-cell-scrollbar"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="ant-table-body" style="overflow: auto scroll; max-height: 502px;">
                            <table style="min-width: 100%; table-layout: fixed;">
                                <colgroup><col style="width: 120px;"><col><col style="width: 100px;"></colgroup>
                                <tbody class="ant-table-tbody">
                                    <tr
                                        aria-hidden="true"
                                        class="ant-table-measure-row"
                                        style="height: 0px; font-size: 0px;">
                                        <td style="padding: 0px; border: 0px; height: 0px;">
                                            <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                        </td>
                                        <td style="padding: 0px; border: 0px; height: 0px;">
                                            <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                        </td>
                                        <td style="padding: 0px; border: 0px; height: 0px;">
                                            <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    tableNode.innerHTML = content;

    insertAfter(prevElement, separatorNode);
    insertAfter(separatorNode, tableNode);
}

function insertAfter(existingNode, newNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function addItemToBucket() {
    productItemBucket = [];
    let arr1 = bucket[0].values;
    let arr2 = [];
    if(bucket[1] != undefined) {
        arr2 = bucket[1].values;
        for(let i = 0;i < arr1.length;i++){
            for(let j = 0;j < arr2.length;j++){
                productItemBucket.push({
                    variationValue : arr1[i].valueName + "-" + arr2[j].valueName
                })
            }
        }
    }else{
        for(let i = 0;i < arr1.length;i++){
            productItemBucket.push({
                variationValue : arr1[i].valueName
            })
        }
    }
   addRow();
}

function addRow() {
    let tableBody = document.getElementsByClassName("ant-table-container")[0].getElementsByClassName("ant-table-tbody")[0];
    let firstRow = tableBody.children[0];
    let imageTable = document.getElementsByClassName("jVsHgT")[0].getElementsByClassName("ant-table-tbody")[0];
    let firstImageRow = imageTable.children[0];
    while(firstRow.nextElementSibling != null){
        firstRow.nextElementSibling.remove();
    };
    while(firstImageRow.nextElementSibling != null){
        firstImageRow.nextElementSibling.remove();
    };
    for(let i = 0; i < productItemBucket.length; i++) {
        let row = `
        <tr class="ant-table-row ant-table-row-level-0" id = "${productItemBucket[i].variationValue}">
            <td class="sc-cZwWEu bLFjza ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last">
                <span class="ant-table-cell-content">${productItemBucket[i].variationValue}</span>
            </td>
            <td code="quantity" class="ant-table-cell ">
                <div class="sc-HzFiz gaBYvM  ant-input  full-width ">
                    <span>&nbsp;</span>
                </div>
            </td>
            <td code="selling_price" class="ant-table-cell ">
                <div class="sc-HzFiz gaBYvM  ant-input  full-width ">
                    <span>&nbsp;</span>
                </div>
            </td>
            <td code="product_code" class="ant-table-cell ">
                <div class="sc-HzFiz gaBYvM  ant-input  full-width ">
                    <span>&nbsp;</span>
                </div>
            </td>
            <td class="sc-jTYCaT gaaPWS ant-table-cell ant-table-cell-fix-right ant-table-cell-fix-right-first">
                <span class="ant-table-cell-content">
                    <button
                        type="button"
                        class="ant-btn ant-btn-danger ant-btn-icon-only ant-btn-background-ghost sc-evrZIY juBxAo">
                        <span role="img" aria-label="delete" class="anticon anticon-delete">
                            <svg
                                viewbox="64 64 896 896"
                                focusable="false"
                                data-icon="delete"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                            </svg>
                        </span>
                    </button>
                </span>
            </td>
        </tr>
        `
        let imageRow = `<tr
        class="ant-table-row ant-table-row-level-0">
        <td class="ant-table-cell">${productItemBucket[i].variationValue}</td>
        <td class="ant-table-cell">
            <div class="">
                <div class="sc-hjriPb kdjcpA">
                    <div class="ant-spin-nested-loading">
                        <div class="ant-spin-container">
                            <span>
                                <div class="ant-upload ant-upload-drag">
                                    <span tabindex="0" class="ant-upload ant-upload-btn" role="button"><input
                                        type="file"
                                        accept="image/jpeg,image/png"
                                        multiple=""
                                        style="display: none;">
                                        <div class="ant-upload-drag-container">
                                            <span
                                                role="img"
                                                aria-label="upload"
                                                type="upload"
                                                class="anticon anticon-upload sc-dUWWNf kHvCue">
                                                <svg
                                                    viewbox="64 64 896 896"
                                                    focusable="false"
                                                    data-icon="upload"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true">
                                                    <path
                                                        d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                                </svg>
                                            </span>
                                            <p class="ant-upload-text">Nhấn hoặc kéo thả hình ảnh vào đây để tải lên</p>
                                        </div></span></div></span></div>
                    </div>
                </div>
            </div>
        </td>
        <td class="ant-table-cell">
            <div class="text-center">
                <button
                    type="button"
                    class="ant-btn ant-btn-danger ant-btn-icon-only ant-btn-background-ghost sc-evrZIY juBxAo">
                    <span role="img" aria-label="delete" class="anticon anticon-delete">
                        <svg
                            viewbox="64 64 896 896"
                            focusable="false"
                            data-icon="delete"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                        </svg></span></button>
            </div>
        </td>
        </tr>`
        tableBody.insertAdjacentHTML("beforeend", row);
        imageTable.insertAdjacentHTML("beforeend", imageRow);
    }
    handleInput();
}

function handleInput() {
    let table = document.getElementsByClassName("hLORXC")[1];
    let cell = table.getElementsByClassName("ant-table-cell");
    for(let i = 1; i < cell.length - 1; i++) {
        if(cell[i].children[0].tagName === "DIV") {
            cell[i].addEventListener("click", showPointer);
        }  
    }
}

function showPointer(event) {
    let input = document.createElement("input");
    input.classList.add("ant-input", "full-width");
    input.setAttribute("type", "number");
    input.setAttribute("value", "");
    input.setAttribute("title", "");
    input.setAttribute("placeholder", "");
    input.addEventListener("change", readValue);

    let inputText = document.createElement("input");
    inputText.classList.add("ant-input", "full-width");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("value", "");
    inputText.setAttribute("title", "");
    inputText.setAttribute("placeholder", "");
    inputText.addEventListener("change", readValue);
    
    if(this.getAttribute("code") === "quantity" || this.getAttribute("code") === "selling_price"){
        event.currentTarget.children[0].remove();
        event.currentTarget.appendChild(input);
        input.select();
    }else if(this.getAttribute("code") === "product_code"){
        event.currentTarget.children[0].remove();
        event.currentTarget.appendChild(inputText);
        inputText.select();
    }
}

function readValue(event) {
    this.setAttribute("value",event.target.value);
}

function collectData() {
    let quantityValue = 0;
    let originalPriceValue = 0;
    let skuValue = "";
    for(let i = 0; i < productItemBucket.length; i++) {
        let productItem = document.getElementById(productItemBucket[i].variationValue);
        let quantity = productItem.querySelector('td[code = "quantity"]').querySelector("input");
        let originalPrice = productItem.querySelector('td[code = "selling_price"]').querySelector("input");
        let sku = productItem.querySelector('td[code = "product_code"]').querySelector("input");
        if(quantity != null) {
            quantityValue = quantity.value * 1;
        }else{
            quantityValue = 0;
        }

        if(originalPrice != null) {
            originalPriceValue = originalPrice.value * 1;
        }else{
            originalPriceValue = 0;
        }

        if(sku != null) {
            skuValue = sku.value;
        }else{
            skuValue = "";
        }
        let find = stage3Bucket.find((item)=>item.variationValue === productItemBucket[i].variationValue);
        if(find){
            find.originalPrice = originalPriceValue;
            find.qty = quantityValue;
            find.sku = skuValue;
        }else{
            stage3Bucket.push({
                variationValue : productItemBucket[i].variationValue,
                originalPrice : originalPriceValue,
                qty : quantityValue,
                sku : skuValue
            })
        }   
    }
    let data = {};
    data.shopId = stage1Bucket.shopId;
    data.productName = stage1Bucket.productName;
    data.categoryName = stage1Bucket.categoryName;
    data.description = stage2Bucket.description;
    data.items = stage3Bucket;
    data.variations = productItemBucket;

    console.log(data);
}

