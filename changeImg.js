let changeToFront = (id) => {
    let img = (document.getElementsByTagName('img'))[1];
    innerHeight.id = 'front';
    img.src = shirts[id].colors[img.className].front;
}

let changeToBack = (id) => {
    let img = (document.getElementsByTagName('img'))[1];
    img.id = 'back';
    img.src = shirts[id].colors[img.className].back;
}

let changeColor = (id, color) => {
    let img = (document.getElementsByTagName('img'))[1];
    img.className = color.id;      
    if(img.id == 'front')
        img.src = shirts[id].colors[color.id].front;
        else img.src = shirts[id].colors[color.id].back;
}