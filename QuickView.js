let quickView = (id) => {
    
    if (document.getElementById('temporary') != null) deleteClass('temporary');
    let shirt = shirts[id];

    let tempDiv = document.createElement('div');
    tempDiv.id = 'temporary';
    document
    .body
    .children[0] 
    .children[2]
    .insertAdjacentElement('beforeend', tempDiv);

    let divImgs = document.createElement('div');
    divImgs.className = "pair-shirts";
    document
    .body
    .children[0] 
    .children[2]
    .children[0]
    .insertAdjacentElement('beforeend', divImgs);

    let frontShirt = document.createElement('img');
    frontShirt.src = shirt.colors.white.front;    
    let backShirt = document.createElement('img');
    backShirt.src = shirt.colors.white.back;
    divImgs.insertAdjacentElement('beforeend', frontShirt);
    divImgs.insertAdjacentElement('beforeend', backShirt);

    let divInfo = document.createElement('div');
    divInfo.className = "quick-info";
    document
    .body
    .children[0] 
    .children[2]
    .children[0]
    .insertAdjacentElement('beforeend', divInfo);
    divInfo.innerHTML = 
    '<h3>' + shirt.name + '</h3>' +
    '<h4>' + shirt.price + '</h4>' +
    '<button id ' + id + ' onclick = \'deleteClass(this.id)\'>Close</button>';
    //divInfo.insertAdjacentElement('beforeend',);

}