// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {    
    let table = document.getElementsByClassName("products-table");
    for(let i = 0; i < shirts.length; i++) {

        //это для внешнего блока с картинкой
        let divShirts = document.createElement('div');
        divShirts.className = "products-table-block";
        divShirts.innerHTML = '<img src = ' + shirts[i].colors.white.front + '>'
        + '<h3>' + shirts[i].name + '</h3>'
        + '<p>Available in ' + Object.keys(shirts[i].colors).length + '</p>'; //так не работает, потом поменять
        //divShirts.insertAdjacentHTML("beforeend", '<p>Привет</p>');
        document
        .body
        .children[0]
        .children[1]
        .children[1]
        .insertAdjacentElement("beforeend", divShirts);
    
        //добавить еще блок с кнопками
        let divButton = document.createElement('div');
        divButton.className = "products-table-buttons";
        divButton.innerHTML = 
        '<button id = ' + i + '>Quick View</button>'
        + '<button id = ' + i + ' onClick = \'changePage(this.id)\'>See Page</button>';
        
        document
        .body
        .children[0]
        .children[1]
        .children[1]
        .children[i]
        .insertAdjacentElement("beforeend", divButton);
    }
};

let initDetails = () => {

    let id = new URL(document.URL).searchParams.get('id');
    let shirt = shirts[id];

    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentHTML("beforeend", '<h2>' + shirt.name + '</h2>');     

    let divImg = document.createElement('div');
    divImg.className = "product-details-img";
    divImg.innerHTML = '<img src = ' + shirt.colors.white.front + '>';
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divImg);

    let divContent = document.createElement('div');
    divContent.className = "product-details-content"
    divContent.innerHTML = '<h2>' + shirt.price + '</h2>'
    + '<p>' + shirt.description + '</p>';
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divContent);

    let divSides = document.createElement('div');
    divSides.className = "products-details-sides";
    divSides.innerHTML = 'Side: <button>Front</button>'+
    '<button>Back</button>';
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divSides);

    let divColors = document.createElement('div');
    divColors.className = "products-details-colors";
    divColors.innerText = 'Colors:';
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divColors);
    let colors = Object.keys(shirt.colors);
    for(let i = 0; i < colors.length; i++){
        let cBut = document.createElement('button');
        cBut.innerText = colors[i];
        cBut.style.backgroundColor = colors[i];
        document
    .body
    .children[0]
    .children[1]
    .children[4]    
    .insertAdjacentElement("beforeend", cBut);        
    }
    
    //при нажатии кнопки менять ссылку картинку по нужному индексу

};