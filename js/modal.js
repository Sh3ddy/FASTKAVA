const openModalButtons = document.querySelectorAll("#open-modal-btn");
const openModalButtons3 = document.querySelectorAll("#open-modal-btn3");
const closeModalButtons = document.querySelector(".close-button");
// const closeChooseModalButtons = document.querySelector('.close-button1');
const closeChooseModalButtons = document.getElementById("close-choose");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalChoose = document.getElementById("modal-choose");
const standardButton = document.getElementById("standard-button");
const premiumButton = document.getElementById("premium-button");
const smallButton = document.getElementById("small-button");
const mediumButton = document.getElementById("medium-button");
const largeButton = document.getElementById("large-button");
const priceTag = document.getElementById("price-tag");
const image = document.getElementById("image");
const info = document.getElementById("info");
const standardButton2 = document.getElementById("standard-button2");
const premiumButton2 = document.getElementById("premium-button2");
const smallButton2 = document.getElementById("small-button2");
const mediumButton2 = document.getElementById("medium-button2");
const largeButton2 = document.getElementById("large-button2");
const priceTag2 = document.getElementById("price-tag2");
const image2 = document.getElementById("image2");
const info2 = document.getElementById("info-text");
const permButton = document.getElementById("perm_button");
const overlay2 = document.getElementById("overlay2");
overlay2.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
let small = false
let medium = false
let large = false
let small2 = false
let medium2 = false
let large2 = false
let IsPremium = false;
let IsPremium2 = false;
let priceSmall = 5000;
let priceMedium = 6000;
let priceLarge = 7000;
let priceSmall2 = 7000;
let priceMedium2 = 8000;
let priceLarge2 = 9000;
let smallInfo =
`⁃ Допомога у пошуку локації 
⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
⁃ Доступ до бази знань 
⁃ Маркетингові інструменти 
⁃ Повноцінна стійка самообслуговування 
⁃ Veiding система 
⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
⁃ Фірмовий дизайн з підсвічуванням 
⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
⁃ Підтримка 24/7 
⁃ Індивідуальний органайзер для сиропів та розхідників 
⁃ Металопластикова стійка з підігрівом води 
⁃ Охоронна система Ajax 
⁃ Електронні замки 
⁃ Допомога у розкрутці вашої точки 
⁃ Встановлення кавярні і повне налаштування`;
let mediumInfo =
`⁃ Допомога у пошуку локації 
⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
⁃ Доступ до бази знань 
⁃ Маркетингові інструменти 
⁃ Повноцінна стійка самообслуговування 
⁃ Veiding система 
⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
⁃ Фірмовий дизайн з підсвічуванням 
⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
⁃ Підтримка 24/7 
⁃ Індивідуальний органайзер для сиропів та розхідників 
⁃ Металопластикова стійка з підігрівом води 
⁃ Охоронна система Ajax 
⁃ Електронні замки 
⁃ Допомога у розкрутці вашої точки 
⁃ Встановлення кавярні і повне налаштування`;
let largeInfo =
`⁃ Допомога у пошуку локації 
⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
⁃ Доступ до бази знань 
⁃ Маркетингові інструменти 
⁃ Повноцінна стійка самообслуговування 
⁃ Veiding система 
⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
⁃ Фірмовий дизайн з підсвічуванням 
⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
⁃ Підтримка 24/7 
⁃ Індивідуальний органайзер для сиропів та розхідників 
⁃ Металопластикова стійка з підігрівом води 
⁃ Охоронна система Ajax 
⁃ Електронні замки 
⁃ Допомога у розкрутці вашої точки 
⁃ Встановлення кавярні і повне налаштування`;

// Обработчики событий для кнопок
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("modal-active");
    priceTag.textContent = "5000$";
    image.src = "img/1size.png";
    small = true
    info.innerHTML =
    `\n⁃ Допомога у пошуку локації 
    \n⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
    \n⁃ Доступ до бази знань 
    \n⁃ Маркетингові інструменти 
    \n⁃ Повноцінна стійка самообслуговування 
    \n⁃ Veiding система 
    \n⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
    \n⁃ Фірмовий дизайн з підсвічуванням 
    \n⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
    \n⁃ Підтримка 24/7 
    \n⁃ Індивідуальний органайзер для сиропів та розхідників 
    \n⁃ Металопластикова стійка з підігрівом води 
    \n⁃ Охоронна система Ajax 
    \n⁃ Електронні замки 
    \n⁃ Допомога у розкрутці вашої точки 
    \n⁃ Встановлення кавярні і повне налаштування`;
    info.innerHTML = largeInfo.replace(/\n/g, "<br>");
    standardButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    smallButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  });
});

openModalButtons3.forEach((button) => {
  button.addEventListener("click", () => {
    small2 = true
    standardButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    smallButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    modalChoose.classList.add("modal-active");
    priceTag2.textContent = "7000$";
    image2.src = "img/1size.png";
    let testText =
      `⁃ Допомога у пошуку локації 
      ⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
      ⁃ Доступ до бази знань 
      ⁃ Маркетингові інструменти 
      ⁃ Повноцінна стійка самообслуговування 
      ⁃ Veiding система 
      ⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
      ⁃ Фірмовий дизайн з підсвічуванням 
      ⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
      ⁃ Підтримка 24/7 
      ⁃ Індивідуальний органайзер для сиропів та розхідників 
      ⁃ Металопластикова стійка з підігрівом води 
      ⁃ Охоронна система Ajax 
      ⁃ Електронні замки 
      ⁃ Допомога у розкрутці вашої точки 
      ⁃ Встановлення кавярні і повне налаштування;`;
      info2.innerHTML = testText.replace(/\n/g, "<br>");
    // console.log(closeChooseModalButtons);
    // console.log(modalChoose);
    // console.log(closeModalButtons);
  });
});

closeModalButtons.addEventListener("click", () => {
  // const modal = button.closest('.modal');
  
  closeModal(modal);
  closeModal(modalChoose);
});
// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal');
//     closeModal(modal);
//   });
// });
closeChooseModalButtons.addEventListener("click", () => {
  // const modal = button.closest('.modal');
  // closeModal(modal);
  closeModal(modalChoose);
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

standardButton.addEventListener("click", () => {
  IsPremium = false;
  
  if(small == true) {
    priceTag.textContent = `${priceSmall}$`;
  }
  if(medium == true){ 
    priceTag.textContent = `${priceMedium}$`;
  }
  if(large == true){
    priceTag.textContent = `${priceLarge}$`;
  }
  standardButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  premiumButton.style.background = "";
  let testText =
      `⁃ Допомога у пошуку локації 
      ⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
      ⁃ Доступ до бази знань 
      ⁃ Маркетингові інструменти 
      ⁃ Повноцінна стійка самообслуговування 
      ⁃ Veiding система 
      ⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
      ⁃ Фірмовий дизайн з підсвічуванням 
      ⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
      ⁃ Підтримка 24/7 
      ⁃ Індивідуальний органайзер для сиропів та розхідників 
      ⁃ Металопластикова стійка з підігрівом води 
      ⁃ Охоронна система Ajax 
      ⁃ Електронні замки 
      ⁃ Допомога у розкрутці вашої точки 
      ⁃ Встановлення кавярні і повне налаштування;`;
  info.innerHTML = testText.replace(/\n/g, "<br>")
});
standardButton2.addEventListener("click", () => {
  IsPremium2 = false;
  if(small2 == true) {
    priceTag2.textContent = `${priceSmall2}$`;
  }
  if(medium2 == true){ 
    priceTag2.textContent = `${priceMedium2}$`;
  }
  if(large2 == true){
    priceTag2.textContent = `${priceLarge2}$`;
  }
  standardButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  premiumButton2.style.background = "";
  // smallButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  let testText =
      `⁃ Допомога у пошуку локації 
      ⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
      ⁃ Доступ до бази знань 
      ⁃ Маркетингові інструменти 
      ⁃ Повноцінна стійка самообслуговування 
      ⁃ Veiding система 
      ⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
      ⁃ Фірмовий дизайн з підсвічуванням 
      ⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
      ⁃ Підтримка 24/7 
      ⁃ Індивідуальний органайзер для сиропів та розхідників 
      ⁃ Металопластикова стійка з підігрівом води 
      ⁃ Охоронна система Ajax 
      ⁃ Електронні замки 
      ⁃ Допомога у розкрутці вашої точки 
      ⁃ Встановлення кавярні і повне налаштування;`;
  info2.innerHTML = testText.replace(/\n/g, "<br>")
});
premiumButton.addEventListener("click", () => {
  IsPremium = true;
  if(medium == true){ 
    priceTag.textContent = `6500$`;
  }else if(small == true) {
    priceTag.textContent = `${priceSmall + 500}$`;
  }else if(large == true){
    priceTag.textContent = `${priceLarge + 500}$`;
  }
  let testText =
      `⁃ Допомога у пошуку локації 
      ⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
      ⁃ Доступ до бази знань 
      ⁃ Маркетингові інструменти 
      ⁃ Повноцінна стійка самообслуговування 
      ⁃ Veiding система 
      ⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
      ⁃ Фірмовий дизайн з підсвічуванням 
      ⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
      ⁃ Підтримка 24/7 
      ⁃ Індивідуальний органайзер для сиропів та розхідників 
      ⁃ Металопластикова стійка з підігрівом води 
      ⁃ Охоронна система Ajax 
      ⁃ Електронні замки 
      ⁃ Допомога у розкрутці вашої точки 
      ⁃ Встановлення кавярні і повне налаштування;`;
  let PremiumInfo =
  `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Локації під ключ </span>
  <span class="my-class"> ⁃ Безкоштовна логістика </span>
  <span class="my-class"> ⁃ Промоутер </span>`;
  // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  standardButton.style.background = "";
  premiumButton.style.background ="linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  info.innerHTML = testText.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
});
premiumButton2.addEventListener("click", () => {
  IsPremium2 = true;
  // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  console.log("medium2", medium2);
  console.log("s", small2);
  console.log("l", large2);
  if(medium2 == true){ 
    priceTag2.textContent = `${priceMedium2 + 500}$`;
  }else if(small2 == true) {
    priceTag2.textContent = `${priceSmall2 + 500}$`;
  }else if(large2 == true){
    priceTag2.textContent = `${priceLarge2 + 500}$`;
  }
  standardButton2.style.background = "";
  premiumButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    let testText =
      `⁃ Допомога у пошуку локації 
      ⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
      ⁃ Доступ до бази знань 
      ⁃ Маркетингові інструменти 
      ⁃ Повноцінна стійка самообслуговування 
      ⁃ Veiding система 
      ⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
      ⁃ Фірмовий дизайн з підсвічуванням 
      ⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
      ⁃ Підтримка 24/7 
      ⁃ Індивідуальний органайзер для сиропів та розхідників 
      ⁃ Металопластикова стійка з підігрівом води 
      ⁃ Охоронна система Ajax 
      ⁃ Електронні замки 
      ⁃ Допомога у розкрутці вашої точки 
      ⁃ Встановлення кавярні і повне налаштування;`;
  let PremiumInfo =
  `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Локації під ключ </span>
  <span class="my-class"> ⁃ Безкоштовна логістика </span>
  <span class="my-class"> ⁃ Промоутер </span>`;
  info2.innerHTML = testText.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
});

largeButton2.addEventListener("click", LargeClick2);
smallButton.addEventListener("click", () => {
  smallButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  mediumButton.style.background = "";
  largeButton.style.background = "";
  medium = false
  small = true
  large = false
  image.src = "img/1size.png";
  if (IsPremium) {
    priceTag.textContent = `${priceSmall + 500}$`;
    info.innerHTML = smallInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceSmall}$`;
    info.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
});
mediumButton.addEventListener("click", () => {
  image.src = "img/2size.png";
  medium = true
  small = false
  large = false
  smallButton.style.background = "";
  mediumButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  largeButton.style.background = "";
  smallButton.style.background = "";
  if (IsPremium) {
    priceTag.textContent = `${priceMedium + 500}$`;
    info.innerHTML = mediumInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceMedium}$`;

    info.innerHTML = mediumInfo.replace(/\n/g, "<br>");
  }
});
largeButton.addEventListener("click", () => {
  image.src = "img/size3.png";
  large = true
  small = false 
  medium = false
  smallButton.style.background = "";
  mediumButton.style.background = "";
  largeButton.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  if (IsPremium) {
    priceTag.textContent = `${priceLarge + 500}$`;
    info.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceLarge}$`;

    info.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }
});
smallButton2.addEventListener("click", () => {
  image2.src = "img/1size.png";
  smallButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  mediumButton2.style.background = "";
  largeButton2.style.background = "";
  medium2 = false
  small2 = true
  large2 = false
  if (IsPremium2) {
    priceTag2.textContent = `${priceSmall2 + 500}$`;
    // info2.innerHTML = smallInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceSmall2}$`;

    // info2.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
  // standardButton2.addEventListener("click", () => {
  //   IsPremium2 = false;
  //   SmallClick2();
  // });
  // premiumButton2.addEventListener("click", () => {
  //   IsPremium2 = true;
  //   // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  //   SmallClick2();
  // });
});
mediumButton2.addEventListener("click", () => {
  image2.src = "img/2size.png";
  smallButton2.style.background = "";
  mediumButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  largeButton2.style.background = "";
  medium2 = true
  small2 = false
  large2 = false
  if (IsPremium2) {
    priceTag2.textContent = `${priceMedium2 + 500}$`;
    // info2.innerHTML = mediumInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceMedium2}$`;

    // info2.innerHTML = mediumInfo.replace(/\n/g, "<br>");
  }
  // standardButton2.addEventListener("click", () => {
  //   IsPremium2 = false;
  //   MediumClick2();
  // });
  // premiumButton2.addEventListener("click", () => {
  //   IsPremium2 = true;
  //   // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  //   MediumClick2();
  // });
});
largeButton2.addEventListener("click", () => {
  smallButton2.style.background = "";
  smallButton2.style.background = "";
  mediumButton2.style.background = "";
  largeButton2.style.background = "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  image2.src = "img/size3.png";
  medium2 = false
  small2 = false
  large2 = true
  if (IsPremium2) {
    priceTag2.textContent = `${priceLarge2 + 500}$`;
    // info2.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceLarge2}$`;

    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }
  standardButton2.addEventListener("click", () => {
    IsPremium2 = false;
    LargeClick();
  });
  premiumButton2.addEventListener("click", () => {
    IsPremium2 = true;
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    LargeClick();
  });
});
permButton.addEventListener("click", () => {
  closeModal(modal);
  closeModal(modalChoose);
});


// Функции открытия и закрытия модального окна
function openModal(modalTarget) {
  const modal = document.querySelector(modalTarget);
  console.log(modalTarget);
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("modal-active");
  premiumButton.style.background = "";
  premiumButton2.style.background = "";
  mediumButton2.style.background = "";
  largeButton2.style.background = "";
  mediumButton.style.background = "";
  largeButton.style.background = "";

}

overlay2.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// Функции открытия и закрытия модального окна
function openModal(modalTarget) {
  const modal = document.querySelector(modalTarget);
  console.log(modalTarget);
  modal.classList.add("active");
  overlay2.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("modal-active");
  modal.classList.remove("active");
  overlay2.classList.remove("active");
  premiumButton.style.background ="";
  premiumButton2.style.background ="";
  mediumButton2.style.background = "";
  largeButton2.style.background = "";
  mediumButton.style.background = "";
  largeButton.style.background = "";
}

  // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  function SmallClick() {
    image.src = "img/1size.png";
    if (IsPremium) {
      priceTag.textContent = `${priceSmall + 500}$`;
      info.innerHTML = smallInfo + PremiumInfo.replace(/\n/g, "<br>");
    } else {
      priceTag.textContent = `${priceSmall}$`;
  
      info.innerHTML = smallInfo.replace(/\n/g, "<br>");
    }
  }
  function MediumClick() {
    image.src = "img/2size.png";
    consolr.log("sdsdsd");
    if (IsPremium) {
      priceTag.textContent = `${priceMedium + 500}$`;
      info.innerHTML = mediumInfo + PremiumInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      console.log(info.innerHTML);
    } else {
      priceTag.textContent = `${priceMedium}$`;
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      info.innerHTML = mediumInfo.replace(/\n/g, "<br>");
    }
  }
  function LargeClick() {
    image.src = "img/size3.png";
    if (IsPremium) {
      priceTag.textContent = `${priceLarge + 500}$`;
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      info.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
    } else {
      priceTag.textContent = `${priceLarge}$`;
  
      info.innerHTML = largeInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    }
  }
  function SmallClick2() {
    image2.src = "img/1size.png";
    if (IsPremium2) {
      priceTag2.textContent = `${priceSmall2 + 500}$`;
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = smallInfo + PremiumInfo.replace(/\n/g, "<br>");
    } else {
      priceTag2.textContent = `${priceSmall2}$`;
  
      // info2.innerHTML = smallInfo.replace(/\n/g, "<br>");
    }
  }
  function MediumClick2() {
    image2.src = "img/2size.png";
    if (IsPremium2) {
      priceTag2.textContent = `${priceMedium2 + 500}$`;
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = mediumInfo + PremiumInfo.replace(/\n/g, "<br>");
    } else {
      priceTag2.textContent = `${priceMedium2}$`;
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = mediumInfo.replace(/\n/g, "<br>");
    }
  }
  function LargeClick2() {
    image2.src = "img/size3.png";
    if (IsPremium2) {
      priceTag2.textContent = `${priceLarge2 + 500}$`;
      // info2.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    } else {
      priceTag2.textContent = `${priceLarge2}$`;
  
      // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    }
  }