export class Tooltip {
  constructor() {
    this._tooltips = [];
  }

  showTooltip(title, message, element) {
    const tooltip = document.createElement("div");

    tooltip.classList.add("tooltip");

    tooltip.innerHTML = `
    <div class="tooltip-title">${title}</div>
    <div class="tooltip-message">${message}</div>`;

    const id = performance.now();

    this._tooltips.push({
      id,
      owner: element,
      element: tooltip,
    });

    document.body.appendChild(tooltip);
    this.refreshTooltip(id, element);

    return id;
  }

  removeTooltip(id) {
    const tooltip = this._tooltips.find((t) => t.id === id);
    tooltip.element.remove();
    this._tooltips = this._tooltips.filter((t) => t.id !== id);
  }

  refreshTooltip(id, element) {
    const tooltip = this._tooltips.find((t) => t.id === id);
    const { width: elwidth, left, top } = element.getBoundingClientRect();
    const { width, height } = tooltip.element.getBoundingClientRect();

    tooltip.element.style.left = left + (elwidth - width) / 2 + "px";
    tooltip.element.style.top = top - height - 14 + "px";
  }

  /*
  refresh() {
    this._tooltips.forEach(el => {
      this.refreshTooltip(el.element, el.owner);  
    });  
  }
  */
}
