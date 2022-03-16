let initProducts = () => { 

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
        '<button id = ' + i + ' onclick = \'quickView(this.id)\'>Quick View</button>'
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