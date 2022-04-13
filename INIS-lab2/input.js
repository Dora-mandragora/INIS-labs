

const dragEl = document.querySelectorAll('.target'); 
let coordX; 
let coordY;
let elSize = dragEl.length;

let isDoubleClick = false;
let isMouseMove = false;


for (let i=0; i<elSize; i++){ 

    let activeEl = dragEl[i];

    //activeEl.draggable= true;
    ////может сделать не через draggable    
    // activeEl.addEventListener('dragstart',(e) => { 
    //     coordX = e.offsetX; 
    //     coordY = e.offsetY; 
    // }); 
    // activeEl.addEventListener('dragend', (e) => { 
    //     activeEl.style.top = (e.pageY - coordY) + 'px'; 
    //     activeEl.style.left = (e.pageX - coordX) + 'px'; 
    // }); 

        
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
    

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        //Mobile
        activeEl.addEventListener('touchstart', onMouseDownDrag);
    function onMouseDownDrag(e)
    {                      
        
        let shiftX = e.clientX - activeEl.getBoundingClientRect().left;
        let shiftY = e.clientY - activeEl.getBoundingClientRect().top;

        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - shiftY + 'px'; 
            activeEl.style.left = pageX - shiftX + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }        
        function onClickDragExit(){
            activeEl.removeEventListener('touchend',onClickDragExit);
            document.removeEventListener('touchmove',onMouseMove, false);            
            
        }

        document.addEventListener('touchmove', onMouseMove, false);        
        activeEl.addEventListener('touchend', onClickDragExit);
    };

    } 
    else {
        //PC
        activeEl.addEventListener('mousedown', onMouseDownDrag);
    function onMouseDownDrag(e)
    {                      
        
        let shiftX = e.clientX - activeEl.getBoundingClientRect().left;
        let shiftY = e.clientY - activeEl.getBoundingClientRect().top;

        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - shiftY + 'px'; 
            activeEl.style.left = pageX - shiftX + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }        
        function onClickDragExit(){
            activeEl.removeEventListener('mouseup',onClickDragExit);
            document.removeEventListener('mousemove',onMouseMove, false);            
            
        }

        document.addEventListener('mousemove', onMouseMove, false);        
        activeEl.addEventListener('mouseup', onClickDragExit);
    };
    };
    
    

    

    activeEl.addEventListener('dblclick', onDblClickDrag);    
    function onDblClickDrag(e)
    {
        isDoubleClick = true;
        activeEl.style.background = 'yellow';
        
        let shiftX = e.clientX - activeEl.getBoundingClientRect().left;
        let shiftY = e.clientY - activeEl.getBoundingClientRect().top;

        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - shiftY + 'px'; 
            activeEl.style.left = pageX - shiftX + 'px';
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

