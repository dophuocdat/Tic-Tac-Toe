let playerSymbol = "O";
let gameEnded = false;

let winPos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Tên các hàm này có thể đổi lại cho nó hợp lý hơn tý
const eventClick = () => {
    return 1;
}

const handelShowOnDisplay = () => {
    return 2;
}

const showAnimation = () => {
    return 3;
}

const checkResult = () => {
    return 4;
}

const findWinner = () => {
    return 5;
}

function checkWin() {
    let counter = 0;
    for (const element of winPos) {
        if (
            document.getElementById(element[0]).innerHTML.trim().length > 0 &&
            document.getElementById(element[0]).innerHTML === document.getElementById(element[1]).innerHTML &&
            document.getElementById(element[1]).innerHTML === document.getElementById(element[2]).innerHTML
        ) {
            document.getElementById(element[0]).classList.add("win");
            document.getElementById(element[1]).classList.add("win");
            document.getElementById(element[2]).classList.add("win");

            setTimeout(function () {
                Swal.fire({

                    title: `${playerSymbol} chiến thắng`,
                    iconHtml: '<img src="giphy.gif" style="width:150px; height:150px">',
                    showConfirmButton: false,
                    timer: 3000
                })
            }, 500);
            gameEnded = true;
            return;
        }
    }

    // Check là đã đánh hay chưa :v
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(i.toString()).innerHTML !== "") {
            counter++;
        }
    }

    if (counter === 9) {
        setTimeout(function () {
            Swal.fire({
                iconHtml: '<img src= "draw.gif" style="width:150px; height:150px">',
                title: 'Hai bạn hòa nhau!',
                showConfirmButton: false,
                timer: 5000
            })
        }, 500);
        gameEnded = true;
    }
}

//xử lý sự kiện cho các ô đánh
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function () {

            if (!loadingTheGame()) {
                console.log("Sai rồi");
                Swal.fire({
                    iconHtml: '<img src= "draw.gif" style="width:150px; height:150px">',
                    title: 'Rất tiếc, bạn sắp xếp câu lệnh sai!',
                    showConfirmButton: false,
                    timer: 4000
                })
                // Hiện thông báo chi đó thể thể hiện nó đã sai nhá
                return;
            }

            if (this.innerHTML === "" && !gameEnded) {
                console.log(`Trước khi click ${playerSymbol}`);
                // Đổi biển tượng này thành biểu tượng khác cho lượt tiếp theo
                if (playerSymbol === "X") {
                    playerSymbol = "O"
                    this.classList.add("check-o")
                } else {
                    playerSymbol = "X"
                    this.classList.add("check-x")
                };
                console.log(`sau khi click ${playerSymbol}`);
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
                checkWin();
            }
        }
    );
}

// nút reset
document.getElementById("reset").addEventListener("click", function () {
    
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("check-o");
        document.getElementById(i.toString()).classList.remove("check-x");
        document.getElementById(i.toString()).classList.remove("win");
    }
    playerSymbol = "O";
    gameEnded = false;
});


function loadingTheGame() {

    const firstComponent = ...; 
    const secondComponent = handelShowOnDisplay(); 
    const thirdComponent = ...; // 
    const fourthComponent = checkResult();
    const fifthComponent = ...;



    return (
        (fifthComponent === fourthComponent + firstComponent) 
        || (fifthComponent === secondComponent + thirdComponent)
    )

}