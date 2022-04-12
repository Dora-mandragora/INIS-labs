

const dragEl = document.querySelectorAll('.target'); 
let coordX; 
let coordY;
let elSize = dragEl.length;

let isDoubleClick = false;


for (let i=0; i<elSize; i++){ 

    let activeEl = dragEl[i];

    activeEl.draggable= true;
    //может сделать не через draggable    
    activeEl.addEventListener('dragstart',(e) => { 
        coordX = e.offsetX; 
        coordY = e.offsetY; 
    }); 
    activeEl.addEventListener('dragend', (e) => { 
        activeEl.style.top = (e.pageY - coordY) + 'px'; 
        activeEl.style.left = (e.pageX - coordX) + 'px'; 
    }); 

    
    activeEl.addEventListener('click',onClick);    
    function onClick()
    { 
        if(!isDoubleClick){                
            activeEl.style.background = 'blue'; 
            for (let j = 0; j< elSize; j++){ 
                if (j!==i)                                  
                    dragEl[j].style.background = 'red'; 
            } 
        }
    };  
    

    activeEl.addEventListener('dblclick', onDblClickDrag);    
    function onDblClickDrag()
    {
        isDoubleClick = true;
        activeEl.style.background = 'yellow';
        
        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - activeEl.offsetHeight/2 + 'px'; 
            activeEl.style.left = pageX - activeEl.offsetWidth/2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }        
        function onClickDragExit(){
            activeEl.removeEventListener('click',onClickDragExit);
            document.removeEventListener('mousemove',onMouseMove, false);
            activeEl.style.background = 'red'; 
            isDoubleClick = false;
        }

        document.addEventListener('mousemove', onMouseMove, false);        
        activeEl.addEventListener('click', onClickDragExit);
    };
} 

 
const workspace = document.querySelector('#workspace'); 
workspace.addEventListener('click', (e) => { 
    if(e.target == workspace){ 
        for(let i = 0; i < elSize; i++) {
            dragEl[i].style.background = 'red';
        } 
    } 
});

