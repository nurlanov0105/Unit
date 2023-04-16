//  ---- Мобильная навигация ----
const icon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");

icon.addEventListener("click", function () {
   this.classList.toggle("nav-icon--active");
   nav.classList.toggle("nav--active");
});

// ---- Мобильная иконка ----
// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll(".nav a");

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
   // Для каждой ссылки добавляем прослушку по событию КЛИК
   item.addEventListener("click", function () {
      icon.classList.remove("nav-icon--active"); //Убираем активный класс у иконки моб.навигации
      nav.classList.remove("nav--active"); // Убираем активный класс у блока моб.навигации
   });
});

// Search
// // ---- Скрипт для формы поиска ----
// const searchForm = document.querySelector(".search");
// const searchBtn = document.querySelector(".search__button");

// searchBtn.addEventListener("click", function (e) {
//    if (searchForm.classList.contains("search--visible")) {
//    } else {
//       e.preventDefault();
//       searchForm.classList.toggle("search--visible");
//    }
// });

// // window.addEventListener("click", function (e) {
// //    if (searchBtn.contains(e.target)) {
// //       searchForm.classList.add("search--visible");
// //    } else {
// //       searchForm.classList.remove("search--visible");
// //    }
// // });

// ---- Скрипт для формы поиска ----
const searchForm = document.querySelector(".search");
const searchBtn = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");

searchBtn.addEventListener("click", function (e) {
   if (searchForm.classList.contains("search--visible")) {
      e.preventDefault();
      console.log(searchInput.value);

      // Если в input пусто или пробелы
      if (searchInput.value.trim() === "") {
         // Закрываем форму, сбрасываем ввод
         searchForm.classList.toggle("search--visible");
         searchInput.value = "";
      } else {
         // Иначе, отправляем форму
         searchForm.submit();
      }
   } else {
      e.preventDefault();
      searchForm.classList.toggle("search--visible");
   }
});

// Click outside the form
window.addEventListener("click", function (e) {
   if (!searchForm.contains(e.target)) {
      // Clicked outside the box
      searchForm.classList.remove("search--visible");
   }
});
