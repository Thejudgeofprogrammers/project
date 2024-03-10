// import drill from "../img/drill.jpeg";
// import saw from "../img/saw.jpeg";
// import tools from "../img/tools.jpeg";

// let VArray = [
//   [drill, "0", "", "Дрель", "5500" ], // Первый элемент переменная картинки
//   [saw,   "0", "", "Дрель", "5500" ], // Второй элемент alt.
//   [tools, "0", "", "Дрель", "5500" ], // Третий ссылка
//   [tools, "0", "", "Дрель", "5500" ], // Четвертый текст под картинкой
//   [drill, "0", "", "Дрель", "5500" ], // Пятый сумма
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [drill, "0", "", "Дрель", "5500" ],
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [drill, "0", "", "Дрель", "5500" ],
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [drill, "0", "", "Дрель", "5500" ],
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [drill, "0", "", "Дрель", "5500" ],
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [drill, "0", "", "Дрель", "5500" ],
//   [saw,   "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
//   [tools, "0", "", "Дрель", "5500" ],
// ]

// export function getVision() {
//   let visionMain = document.querySelector(".vision")

//   let VArrayTegs = []
//   for (let i = 0; i < VArray.length; i++) {
    
//     VArrayTegs.push(`<div class="card">
//                     <a href="${VArray[i][2]}"><img src="${VArray[i][0]}" alt="${VArray[i][1]}"></a>
//                     <p>${VArray[i][3]}</p>
//                     <p>Цена:${VArray[i][4]}руб.</p></div>`) //Добавить стилей к тегу a!!!!!!!!
//   }
//   visionMain.innerHTML = VArrayTegs.join("")
// }

// document.addEventListener("DOMContentLoaded", function() {
//   getVision();
// })