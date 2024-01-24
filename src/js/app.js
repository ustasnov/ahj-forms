/* eslint-disable no-unused-vars */

import { Tooltip } from "./tooltip";

const tooltipFactory = new Tooltip();
const buttonEl = document.querySelector(".btn");
const tooltips = [];

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  const tooltip = tooltips.find((el) => {
    return el.element === e.currentTarget;
  });

  if (tooltip) {
    tooltipFactory.removeTooltip(tooltip.id);
    tooltips.splice(tooltips.indexOf(tooltip), 1);
    e.currentTarget.textContent = "Показать подсказку";
  } else {
    const tooltipId = tooltipFactory.showTooltip(
      "Подсказка",
      "Нажатие кнопки показывает или скрывает подсказку",
      e.currentTarget
    );
    tooltips.push({ id: tooltipId, element: e.currentTarget });
    e.currentTarget.textContent = "Скрыть подсказку";
  }
});

window.addEventListener("resize", (e) => {
  tooltips.forEach((el) => {
    tooltipFactory.refreshTooltip(el.id, el.element);
  });
});
