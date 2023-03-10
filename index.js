const lewy = document.querySelector("#lewy");
const prawy = document.querySelector("#prawy");
const prawydol = document.querySelector("#prawydol");
const dialogelse = document.querySelectorAll(".dialogelse");
const opcjeDialogowe = {
    "<Wsiądź>": "intro()",
    "Gdzie ja jestem": "gdzieJestem()",
}
console.log(lewy);

const plecak = document.querySelector(".plecak,item");
console.log(plecak)
plecak.addEventListener("click", function() {
prawydol.innerHTML = "";
    for(let i=0;i<4;i++){
        const div = document.createElement('div');
        div.className = "plecakitem";
        prawydol.appendChild(div);
    }
});

function oknaDialogowe(){
    console.log("oknaDialogowe");
    dialogelse.forEach(dialog => {
        dialog.addEventListener("click", function(){
            console.log("oknaDialogowe addEventListener")
            const options = this.getAttribute("data-options");
            prawydol.innerHTML = "";
            if(options){
                const optionList = options.split(",");
                
                optionList.forEach(option => {
                    console.log("Option dziala")
                    const div = document.createElement('div')
                    div.className = "dialog"
                    div.setAttribute("data-options", option);
                    div.setAttribute("onclick" ,optionList[option])
                    div. innerHTML = option
                    prawydol.appendChild(div);
                    

                    //Zrob Diva
                    //Nadac klase dla diva
                    //ustawic setAttribute("data-options", option)
                    //ustawic setAttribute("onclick" ,opcjeDialogowe[option])
                })
            }
        })
    });
}
