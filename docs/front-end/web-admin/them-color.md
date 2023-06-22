---
sidebar_position: 2
output: html_document
---

# Them Color

## Main colors

Các màu được dùng nhiều trong project sẽ được lưu bằng cái variables bên trong **:root** của css

### Color Primary

Tất cả màu primary ban đầu đều là màu trắng **#FFFFFF**

Màu Primary sẽ được lưu ở DB và get về qua api **shop/get-brand-color?shop_username=**

Sau khi get được 1 màu Primary (**colorPrimary**), dùng hàm **setOpacityOnWhiteBackground** để sinh ra các màu khác như **colorPrimary20**, **colorPrimary40**, **colorPrimary80**,...

```jsx title="app/containers/App/index.js"
import { setOpacityOnWhiteBackground } from "utils/common";

const primary = setOpacityOnWhiteBackground(themeColor, 1);
const primary20 = setOpacityOnWhiteBackground(themeColor, 0.2);
const primary40 = setOpacityOnWhiteBackground(themeColor, 0.4);
const primary60 = setOpacityOnWhiteBackground(themeColor, 0.6);
const primary80 = setOpacityOnWhiteBackground(themeColor, 0.8);
const hover = setOpacityOnWhiteBackground(themeColor, 0.85);
const primaryLight = setOpacityOnWhiteBackground(themeColor, 0.15);
```

Với 2 tham số truyển vào là **màu chủ đạo (colorPrimary)** và phần trăm **độ mờ (opacity)** trên nền màu trắng.

Sau đó gán lại các giá trị màu vào **:root**:

```js
const style = document.createElement("style");
var styles = document.getElementById("theme-style");

appendStyle = `:root{ --theme-color: ${primary};
--color-primary: ${primary};
--color-primary-hover: ${hover};
--color-primary-20: ${primary20};
--color-primary-40: ${primary40};
--color-primary-60: ${primary60};
--color-primary-80: ${primary80};
--color-primary-light: ${primaryLight}}`;

if (styles) styles.parentNode.removeChild(styles);

style.textContent = appendStyle;
style.setAttribute("id", "theme-style");
document.head.append(style);
```

### Color Background

```js
  --color-bg-1: #ffffff;
  --color-bg-2: #f3fbf9;
  --color-bg-3: #f2f7ff;
```

### Color Secondary

```js
  --color-secondary: #303e65;
  --color-secondary-80: #596584;
  --color-secondary-60: #838ba3;
  --color-secondary-40: #acb2c1;
  --color-secondary-20: #d6d8e0;
  --color-secondary-light: #b3c0e0;
  --color-secondary-10: #eaecf0;
  --color-secondary-5: #f5f5f7;
  --color-secondary-3: #fbfbfc;
```

### Color Neutral

```js
  --color-neutral-02: #f5f9ff;
  --color-neutral-04: #e4ecff;
  --color-neutral-10: #dce7f9;
  --color-neutral-20: #b3c0e0;
  --color-neutral-40: #a3b0d6;
  --color-neutral-60: #8793b4;
  --color-neutral-80: #7a8cb4;
```

### Color Gray

```js
  --color-gray-1: #ffffff;
  --color-gray-2: #fafafa;
  --color-gray-3: #f5f5f5;
  --color-gray-4: #f0f0f0;
  --color-gray-5: #d9d9d9;
  --color-gray-6: #bfbfbf;
  --color-gray-7: #8c8c8c;
  --color-gray-8: #595959;
  --color-gray-9: #434343;
  --color-gray-10: #262626;
  --color-gray-11: #1f1f1f;
  --color-gray-12: #141414;
  --color-gray-13: #000000;
```

### Color Error

```js
  --color-error: #ff0e39;
  --color-error-80: #ff3e61;
  --color-error-60: #ff6e88;
  --color-error-40: #ff9fb0;
  --color-error-20: #ffcfd7;
  --color-error-10: #ffe7eb;
  --color-error-5: #fff3f5;
```

### Color Active

```js
  --color-active: #1975ff;
  --color-active-80: #4791ff;
  --color-active-60: #75acff;
  --color-active-40: #a3c8ff;
  --color-active-20: #d1e3ff;
  --color-active-10: #e8f1ff;
  --color-active-5: #f4f8ff;
```

### Color Pending

```js
  --color-pending: #ff7940;
  --color-pending-80: #ff9466;
  --color-pending-60: #ffaf8c;
  --color-pending-40: #ffc9b3;
  --color-pending-20: #ffe4d9;
  --color-pending-10: #fff2ec;
  --color-pending-5: #fff8f6;
```

## Typography

### Font Size

```js
  --fs-56: 56px;
  --fs-48: 48px;
  --fs-40: 40px;
  --fs-32: 32px;
  --fs-24: 24px;
  --fs-22: 22px;
  --fs-20: 20px;
  --fs-18: 18px;
  --fs-16: 16px;
  --fs-14: 14px;
  --fs-12: 12px;
  --fs-10: 10px;
```

### Font Wieght

```js
  --fw-extra-bold: 800;
  --fw-bold: 700;
  --fw-semi-bold: 900;
  --fw-medium: 500;
  --fw-regular: 400;
  --fw-light: 300;
```

### Line Height

```css
--lh-62: 62px;
--lh-56: 56px;
--lh-48: 48px;
--lh-40: 40px;
--lh-30: 30px;
--lh-28: 28px;
--lh-24: 24px;
--lh-20: 20px;
--lh-18: 18px;
--lh-16: 16px;
--lh-14: 14px;
```

## Generate ClassName SCSS

Tạo ra hàng loạt các class để sử dụng nhanh ở mọi nơi, ta sinh ra các class trong file **\_custom.scss**

Font size:

```css title="app/resources/_custom.scss"
$font-list: 56, 48, 40, 32, 24, 20, 18, 16, 14, 12, 10;
@each $size in $font-list {
  .fs-#{$size} {
    font-size: var((--fs-#{$size})) !important;
  }
}
/*  output */
.fs-56 {
  font-size: var(--fs-56) !important;
  /* --fs-56: 56px; Đã định nghĩ trong :root, xem phàn Font size ở trên*/
}
...
```

Width:

```css title="app/resources/_custom.scss"
$width-list: 5, 10, 15, 20, 30, 40, 25, 50, 60, 70, 75, 80, 90;

@each $width in $width-list {
  .w-#{$width} {
    width: #{$width + '%'};
  }
}

/*  output */
.w-5 {
  width: 5%;
}
...
```

## Common ClassName

Dưới đây à những class thường được dùng và sử dụng:

- **heading--underscore**: thêm một gạch phía trước 1 title, thường được trong trong header của 1 tab trong settings
- **Sau có thêm vô dần dần**

```js

```
