//..........................Toggle..........................
let toggle1 = document.getElementById("toggle1");
let navtop = document.getElementById("navHeader");

toggle1.addEventListener("click", function () {
  if (navtop.style.display == "grid") {
    navtop.style.display = "none";
  } else {
    navtop.style.display = "grid";
  }
});

//..........................On/Off/Menu1..........................!
// variable qui permet de recupérer l'id qui situe dans le lien dans menu1
let Menu1 = document.getElementById("one");
// variable qui permet de recupérer la div qui contient la div (le block) menu
let blockMenu1 = document.getElementById("menu1");

let Menu2 = document.getElementById("two");
let blockMenu2 = document.getElementById("menu2");

let Menu3 = document.getElementById("three");
let blockMenu3 = document.getElementById("menu3");

let Menu4 = document.getElementById("four");
let blockMenu4 = document.getElementById("menu4");

let Menu5 = document.getElementById("five");
let blockMenu5 = document.getElementById("menu5");

Menu1.addEventListener("click", function () {
  if (blockMenu1.style.display == "block") {
    blockMenu1.style.display = "none";
  } else {
    blockMenu1.style.display = "block";
  }
});

//..........................On/Off/Menu2..........................
Menu2.addEventListener("click", function () {
  if (blockMenu2.style.display == "block") {
    blockMenu2.style.display = "none";
  } else {
    blockMenu2.style.display = "block";
  }
});


//..........................On/Off/Menu3..........................
Menu3.addEventListener("click", function () {
  if (blockMenu3.style.display == "block") {
    blockMenu3.style.display = "none";
  } else {
    blockMenu3.style.display = "block";
  }
});

//..........................On/Off/Menu4..........................

Menu4.addEventListener("click", function () {
  if (blockMenu4.style.display == "block") {
    blockMenu4.style.display = "none";
  } else {
    blockMenu4.style.display = "block";
  }
});

//..........................On/Off/Menu5..........................

Menu5.addEventListener("click", function () {
  if (blockMenu5.style.display == "block") {
    blockMenu5.style.display = "none";
  } else {
    blockMenu5.style.display = "block";
  }
});

//..........................ContainerMenu1..........................   
let images = document.getElementById("l1");
//initialisation tableau vide    
    let links = [];
//boucle pour envoyer les liens dans le tableau    
    for (let i = 1; i <= 9; i++){
      links.push(document.getElementById("l" + i));
    }
//boucle pour appliquer la fonction d'écoute à tous les liens    
    for (let i = 0; i < 9; i++){
        links[i].addEventListener("mouseover", mouseOver);
        links[i].addEventListener("mouseout", mouseOut);
    }
//fonction d'apparition et de changement d'image au survol    
    function mouseOver() {
//apparition de l'image        
      images.style.visibility = "visible";
//vérification du link survolé et changement de src de l'image        
      switch(this.id) {
            case "l1":
                images.src = "./img/bx-wifi-off.svg"
                 break;
            case "l2":
                images.src= "./img/bxl-gitlab.svg"
                break;
            case "l3":
                images.src = "./img/bxl-meta.svg"
                break;
            case "l4":
                images.src = "./img/bx-moon.svg"
                break;
            case "l5":
                images.src = "./img/bxs-baguette.svg"                
                break;
            case "l6":
                images.src = "./img/bxs-ghost.svg"                
                break;
            case "l7":
                images.src = "./img/bxs-hand-up.svg"                
                break;
            case "l8":
                images.src = "./img/bxs-hand-up.svg"
                break;
            default:
                images.src = "./img/bxs-up-arrow.svg"        
          }
};
//fonction de disparition après survol     
function mouseOut() {images.style.visibility = "hidden";};
// faire une function  qui permet de faire l'évenement mouseover
 // links.addEventListener('mouseover');

//..........................ContainerMenu2..........................
// function mafonction(){
//   let input1Value = document.querySelector("#entrer1").value;
//   let input2Value = document.getElementById("#entrer2").value;
//  console.log(input1Value);
// }

// // document.querySelector("#addtable").addEventListener("click",mafonction)
// // Créer une nouvelle ligne de tableau avec les valeurs des champs d'entrée
// let newRow = "<tr><td>" + entrer1 + "</td><td>" + entrer2 + "</td></tr>";

// // Ajouter la nouvelle ligne au tableau
// document.getElementById("#tableMenu2");
// res.send(newRow);

function mafonction() {
  let input1Value = document.querySelector("#entrer1").value;
  let input2Value = document.querySelector("#entrer2").value;
  console.log(input1Value);
  console.log(input2Value);

  // Créer une nouvelle ligne de tableau avec les valeurs des champs d'entrée
  let newRow = "<tr><td>" + input1Value + "</td><td>" + input2Value + "</td></tr>";

  // Ajouter la nouvelle ligne au tableau
  let tableMenu2 = document.querySelector("#tableMenu2");
  tableMenu2.innerHTML += newRow;
}

// Attacher l'événement click sur le bouton pour appeler la fonction mafonction
document.querySelector("#addtable").addEventListener("click", mafonction);


//..........................ContainerMenu3..........................
function colortext(){
  let paragrap = document.getElementById("parag1");
  let styleSelect = document.getElementById("styleSelect").value
  
  if(styleSelect == "text2" ) {
    paragrap.style.color = 'yellow';
  } else if(styleSelect == "text3"){
    paragrap.style.color = 'white';

  }else{
    paragrap.style.color = 'black';
  }
};
colortext();

//..........................ContainerMenu4..........................
function moveValues(direction) {
  // Récupérer tous les éléments ayant la classe "Menu4List"
  let lists = document.querySelectorAll(".Menu4List");

  // Pour chaque élément "Menu4List"
  lists.forEach((list) => {
    // Récupérer tous les éléments "li"
    let items = list.querySelectorAll("li");

    // Récupérer le nombre d'éléments "li"
    let itemCount = items.length;

    // Pour chaque élément "li"
    items.forEach((item, index) => {
      // Récupérer la valeur de l'élément courant
      let currentValue = item.textContent.trim();

      // Récupérer la valeur de l'élément précédent ou suivant en fonction de la direction
      let targetValue;
      if (direction === "up" && index > 0) {
        targetValue = items[index - 1].textContent.trim();
      } else if (direction === "down" && index < itemCount - 1) {
        targetValue = items[index + 1].textContent.trim();
      } else {
        return; // Ne rien faire si on est au début ou à la fin de la liste
      }

      // Échanger les valeurs
      item.textContent = targetValue;
      if (targetValue) {
        items[index + (direction === "up" ? -1 : 1)].textContent = currentValue;
      }
    });
  });
}

// Attacher l'événement click sur les boutons "up" et "down"
document.querySelector("#btnInputup").addEventListener("click", function(){
  moveValues("up");
});
document.querySelector("#btnInputdown").addEventListener("click", function(){
  moveValues("down");
});



//..........................ContainerMenu5.........................

const divRadio = document.getElementById("huey");
    const optRadio = document.getElementById("opt");
    const resultDiv = document.getElementById("result");

    divRadio.addEventListener("click", generateDiv);
    optRadio.addEventListener("click", generateDropdown);

    function generateDiv() {
      const items = document.querySelectorAll('input[type="checkbox"]:checked');
      let divHtml = "<div>";
      items.forEach(item => {
        divHtml += `<p>${item.value}</p>`;
      });
      divHtml += "</div>";
      resultDiv.innerHTML = divHtml;
    }

    function generateDropdown() {
      const items = document.querySelectorAll('input[type="checkbox"]:checked');
      let dropdownHtml = "<select>";
      items.forEach(item => {
        dropdownHtml += `<option value="${item.value}">${item.value}</option>`;
      });
      dropdownHtml += "</select>";
      resultDiv.innerHTML = dropdownHtml;
    }