// watermarkDirective.js

// 自定义指令，用于在元素背景上添加倾斜平铺水印
export default {
  // 指令钩子函数，当元素被绑定到指令时调用
  bind(el, binding) {
    const { text, single = true, show = true } = binding.value; // 从指令绑定的值中获取水印文本
    if (!show) return;
    el.style.position = "relative"; // 设置元素的定位为相对定位

    // 创建一个水印容器元素，用于容纳水印
    const watermarkContainer = document.createElement("div");
    watermarkContainer.style.position = "absolute";
    watermarkContainer.style.top = "0";
    watermarkContainer.style.left = "0";
    watermarkContainer.style.width = "100%";
    watermarkContainer.style.height = "100%";
    watermarkContainer.style.pointerEvents = "none"; // 禁用水印容器元素的鼠标事件

    if (single) {
      const watermarkElement = document.createElement("div");
      watermarkElement.style.width = "100%";
      watermarkElement.style.height = "100%";
      watermarkElement.style.flexDirection = "column"; // 使用 Flexbox 布局
      watermarkElement.style.display = "flex"; // 使用 Flexbox 布局
      watermarkElement.style.alignItems = "center"; // 垂直居中
      watermarkElement.style.justifyContent = "center"; // 水平居中
      watermarkElement.innerHTML = `<div style="font-size:12px">${text}</div><div style="font-size:12px">${process.env.VUE_APP_TITLE}</div>`;
      watermarkElement.style.fontSize = "12px";
      watermarkElement.style.color = "rgba(0, 0, 0, 0.2)"; // 设置水印颜色
      watermarkContainer.appendChild(watermarkElement);
    } else {
      // 计算水印元素的倾斜角度（这里假设倾斜角度为45度）
      const angle = 45; // 设置水印倾斜角度
      const transform = `rotate(-${angle}deg)`; // 根据角度计算变换样式
      const offsetWidth = 920;
      const offsetHeight = 690;
      // 创建水印元素并添加到容器中，实现倾斜平铺效果
      const rowCount = Math.ceil(
        Math.sqrt(Math.pow(offsetHeight, 2) + Math.pow(offsetWidth, 2)) / 100
      ); // 计算所需的水印行数，假设水印高度为 100px
      const columnCount = Math.ceil(
        Math.sqrt(Math.pow(offsetHeight, 2) + Math.pow(offsetWidth, 2)) / 200
      ); // 计算所需的水印列数，假设水印宽度为 200px
      for (let i = 0; i < rowCount * columnCount; i++) {
        const watermarkElement = document.createElement("div");
        watermarkElement.innerHTML = `<div style="font-size:24px">${text}</div><div style="font-size:12px">${process.env.VUE_APP_TITLE}</div>`;
        watermarkElement.style.fontSize = "24px";
        watermarkElement.style.color = "rgba(0, 0, 0, 0.2)"; // 设置水印颜色
        watermarkElement.style.position = "absolute";
        watermarkElement.style.transform = transform; // 应用倾斜角度
        watermarkElement.style.transformOrigin = "0 0"; // 设置变换原点为左上角
        const row = Math.floor(i / columnCount);
        const column = i % columnCount;
        watermarkElement.style.top = `${row * 100}px`; // 每行间隔100px
        watermarkElement.style.left = `${column * 200}px`; // 每列间隔200px
        watermarkContainer.appendChild(watermarkElement);
      }
    }

    // 将水印容器元素添加到元素中
    el.appendChild(watermarkContainer);
  },
};
