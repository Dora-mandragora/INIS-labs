// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {    
    let table = document.getElementsByClassName("products-table");
    for(let i = 0; i < shirts.length; i++) {

        //это для внешнего блока с картинкой
        let divShirts = document.createElement('div');
        divShirts.className = "products-table-block";
        divShirts.innerHTML = '<img src = ' + shirts[i].colors.white.front + '>'
        + '<h3>' + shirts[i].name + '</h3>';        
        if(Object.keys(shirts[i].colors).length > 1) divShirts.innerHTML += '<p>Available in ' + Object.keys(shirts[i].colors).length+ ' colors</p>';
        else divShirts.innerHTML +=  '<p>Available in ' + Object.keys(shirts[i].colors).length + ' color </p>';
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

    let divImg = document.createElement('div');
    divImg.className = "product-details-img";
    divImg.innerHTML = '<h2>' + shirt.name + '</h2>' +
    '<img id = \'front\' class = \'white\'  src = ' + shirt.colors.white.front + '>';
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divImg);

    let divInfo = document.createElement('div');
    divInfo.className = "product-details-info";
    document
    .body
    .children[0]
    .children[1]
    .insertAdjacentElement("beforeend", divInfo);

    let divContent = document.createElement('div');
    divContent.className = "product-details-content"
    divContent.innerHTML = '<h2>' + shirt.price + '</h2>'
    + '<p>' + shirt.description + '</p>';
    document
    .body
    .children[0]
    .children[1]
    .children[1]
    .insertAdjacentElement("beforeend", divContent);

    let divSides = document.createElement('div');
    divSides.className = "product-details-sides";
    divSides.innerHTML = 'Sides:';
    document
    .body
    .children[0]
    .children[1]
    .children[1]
    .insertAdjacentElement("beforeend", divSides);

    let buttonF = document.createElement('button');
    buttonF.innerText = "front";
    buttonF.setAttribute('onclick', 'changeToFront('+ id + ');');
    let buttonB = document.createElement('button');
    buttonB.innerText = "back";
    buttonB.setAttribute('onclick', 'changeToBack('+ id + ');');
    document
    .body
    .children[0]
    .children[1]
    .children[1]
    .children[1]
    .insertAdjacentElement("beforeend", buttonF);
    document
    .body
    .children[0]
    .children[1]
    .children[1]
    .children[1]
    .insertAdjacentElement("beforeend", buttonB);

    let divColors = document.createElement('div');
    divColors.className = "product-details-colors";
    divColors.innerText = 'Colors:';
    document
    .body
    .children[0]
    .children[1]
    .children[1]
    .insertAdjacentElement("beforeend", divColors);
    let colors = Object.keys(shirt.colors);
    for(let i = 0; i < colors.length; i++){
        let cBut = document.createElement('button');
        cBut.id = colors[i];
        cBut.innerText = colors[i];
        cBut.style.backgroundColor = colors[i];
        cBut.setAttribute('onclick', 'changeColor('+ id +',' + colors[i] + ');');
        document
    .body
    .children[0]
    .children[1]
    .children[1]
    .children[2]    
    .insertAdjacentElement("beforeend", cBut);        
    }
    
    //при нажатии кнопки менять ссылку картинку по нужному индексу

};