// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {
    // To see the shirts object, run:
    // console.log(shirts);

    // Your Code Here
    // shirts.length
    let table = document.getElementsByClassName("products-table");
    for(let i = 0; i < shirts.length; i++) {

        //это для внешнего блока с картинкой
        let divShirts = document.createElement('div');
        divShirts.className = "products-table-block";
        divShirts.innerHTML = '<img src = ' + shirts[i].colors.white.front + '>'
        + '<h3>' + shirts[i].name + '</h3>'
        + '<p>Available in ' + shirts[i].colors.length + '</p>'; //так не работает, потом поменять
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
        divButton.innerHTML = '<button>Quick View</button>'
        + '<button>Quick View</button>';
        
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
    // To see the shirts object, run:
    // console.log(shirts);

    // Your Code Here
};