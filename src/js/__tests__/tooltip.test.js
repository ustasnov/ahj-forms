import { Tooltip } from "../tooltip";

test("tooltip should be show with title = Заголовок", () => {
  document.body.innerHTML = `
  <div class="main-container">
    <form class="form" novalidate>     
      <div>
          <button type="submit" class="btn">Показать подсказку</button>
      </div>
    </form>
  </div>`;

  const tooltipFactory = new Tooltip();
  const buttonEl = document.querySelector(".btn");

  tooltipFactory.showTooltip("Заголовок", "Сообщение", buttonEl);
  const tooltipTitle = document.querySelector(".tooltip-title");

  expect(tooltipTitle.textContent).toEqual("Заголовок");
});

test("tooltip should be show with message = Сообщение", () => {
  document.body.innerHTML = `
  <div class="main-container">
    <form class="form" novalidate>     
      <div>
          <button type="submit" class="btn">Показать подсказку</button>
      </div>
    </form>
  </div>`;

  const tooltipFactory = new Tooltip();
  const buttonEl = document.querySelector(".btn");

  tooltipFactory.showTooltip("Заголовок", "Сообщение", buttonEl);
  const tooltipMessage = document.querySelector(".tooltip-message");

  expect(tooltipMessage.textContent).toEqual("Сообщение");
});

test("tooltip should be remove", () => {
  document.body.innerHTML = `
  <div class="main-container">
    <form class="form" novalidate>     
      <div>
          <button type="submit" class="btn">Показать подсказку</button>
      </div>
    </form>
  </div>`;

  const tooltipFactory = new Tooltip();
  const buttonEl = document.querySelector(".btn");

  const id = tooltipFactory.showTooltip("Заголовок", "Сообщение", buttonEl);
  tooltipFactory.removeTooltip(id);
  const tooltip = document.querySelector(".tooltip");

  expect(tooltip).toBeNull();
});
