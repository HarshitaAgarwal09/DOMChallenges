//https://jsfiddle.net/devkode/xvg58sb9/

function Board(element_tag, rows = 8, cols = 8, color = 'red') {

    this.element = document.querySelector(element_tag);

    this.rows = rows;
    this.cols = cols;
    this.color = color;

    this.activeCell = '';

    this.generateBoard();

}

Board.prototype.generateBoard = function () {
    const fragment = document.createDocumentFragment("div");

    for (var i = 0; i < this.rows; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (var j = 0; j < this.cols; j++) {
            const col = document.createElement("div");
            col.setAttribute("class", "col");

            ((i + j) % 2 == 1) ? col.classList.add("blackbg") : col.classList.add("whitebg");

            row.appendChild(col);
        }
        fragment.appendChild(row);
    }
    this.element.appendChild(fragment);
}

Board.prototype.bindEvents = function () {

}

new Board(".grid", 8, 8);


// const grid = document.querySelector(".grid");
// const redraw = function (cell) {
//     const cols = document.querySelectorAll(".col");

//     var r = 0;
//     var c = 0;

//     for (var i = 0; i < 8; i++) {
//         for (var j = 0; j < 8; j++) {
//             const col = cols[i * 8 + j];
//             if (col == cell) {
//                 r = i;
//                 c = j;
//             }

//         }
//     }


//     for (var i = 0; i < 8; i++) {
//         for (var j = 0; j < 8; j++) {
//             const col = cols[i * 8 + j];

//             col.classList.remove("blackbg");
//             col.classList.remove("whitebg");
//             col.classList.remove("redbg");

//             if ((i - j) === (r - c) || (i + j) === (r + c)) {
//                 col.classList.add("redbg");

//             } else if ((i % 2 == 0 && j % 2 == 1) || ((i % 2 == 1 && j % 2 == 0))) {
//                 col.classList.add("blackbg");

//             } else {
//                 col.classList.add("whitebg");

//             }
//         }
//     }

// }

// const clickHandler = function (e) {
//     redraw(this);
//     console.log("clicked!");
// }


// for (var i = 0; i < 8; i++) {
//     const row = document.createElement("div");
//     row.setAttribute("class", "row");

//     for (var j = 0; j < 8; j++) {
//         const col = document.createElement("div");
//         col.setAttribute("class", "col");
//         if ((i % 2 == 0 && j % 2 == 1) || ((i % 2 == 1 && j % 2 == 0))) {
//             col.classList.add("blackbg");
//         } else {
//             col.classList.add("whitebg");
//         }
//         col.addEventListener("click", clickHandler);
//         row.appendChild(col);
//     }
//     grid.appendChild(row);
// }
