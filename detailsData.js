

let initDetails = () => {

    let id = new URL(document.URL).searchParams.get('id');
    let shirt = shirts[id];     

    let divImg = document.createElement('div');
    divImg.className = "product-details-img";
    divImg.innerHTML = 
    '<h2>' + shirt.name + '</h2>' +
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