let myselectFrom = document.querySelector(".select-From");
let myselectTo = document.querySelector(".select-To");
let converter = document.querySelector(".converter");
let btn_replace = document.querySelector(".btn_replace");
let myInput = document.querySelector("input");
let myH1 = document.querySelector(".myH1");
let DivImg = document.querySelector(".DivImg");
let DivImgTo = document.querySelector(".DivImgTo");

let myImg = document.querySelector("img");
// https://flagsapi.com/AE/shiny/32.png

let country = Object.keys(COUNTRY_NAMES);

country.map((obj) => {
  select_Result = `
 
    <option value=${obj}> ${obj} || ${COUNTRY_NAMES[obj]}</option>
    `;
  myselectFrom.innerHTML += select_Result;
  myselectTo.innerHTML += select_Result;
});

// img-from
let result = `https://flagsapi.com/${myselectFrom.value.slice(
  0,
  -1
)}/shiny/32.png`;
let Img = `<img class='position-absolute' src=${result}/>`;
DivImg.innerHTML = Img;

myselectFrom.addEventListener("change", () => {
  let result = `https://flagsapi.com/${myselectFrom.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  let Img = `<img class='position-absolute' src=${result}/>`;
  DivImg.innerHTML = Img;
});

/// img-from

// img-to
let resultTo = `https://flagsapi.com/${myselectTo.value.slice(
  0,
  -1
)}/shiny/32.png`;
let ImgTo = `<img class='position-absolute' src=${resultTo}/>`;
DivImgTo.innerHTML = ImgTo;
// console.log(ImgTo);
myselectTo.addEventListener("change", () => {
  let resultTo = `https://flagsapi.com/${myselectTo.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  let ImgTo = `<img class='position-absolute' src=${resultTo}/>`;
  DivImgTo.innerHTML = ImgTo;
});

///img-to
converter.addEventListener("click", () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/37aac016a4b56f57f652f95a/latest/${myselectFrom.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      let result = data.conversion_rates[`${myselectTo.value}`];
      if (myInput.value == "") {
        myH1.innerHTML = `
      1 ${myselectFrom.value} = ${result} ${myselectTo.value}
      `;
      } else {
        myH1.innerHTML = `
                ${myInput.value} ${myselectFrom.value} = ${
          result * myInput.value
        } ${myselectTo.value}
                `;
      }
    });
});
