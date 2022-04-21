

const dragEl = document.querySelectorAll('.target'); 
    
let elSize = dragEl.length;
let scale = 1;

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
                            
                if(!isMouseMove) 
                {
                    activeEl.style.background = 'blue'; 
                for (let j = 0; j< elSize; j++){ 
                    if (j!==i)                                  
                        dragEl[j].style.background = 'red'; 
                }
                  
            }
           
        }
    };  
    
//MOBILE##############################################################################################
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        //Mobile

        //проверить, почему не работает
        //а не работает потому, что надо обязательно проверять, 
        //один ли палец нажат
    activeEl.addEventListener('touchstart', onMouseDownDrag, false);
    function onMouseDownDrag(e)
    {        
        if(e.targetTouches.length === 1){
                var touch = e.targetTouches[0];
        
        let shiftX = touch.clientX - activeEl.getBoundingClientRect().left;
        let shiftY = touch.clientY - activeEl.getBoundingClientRect().top;

        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - shiftY + 'px'; 
            activeEl.style.left = pageX - shiftX + 'px';
        }
    }
    
        function onMouseMove(event) {
            if(event.targetTouches.length === 1)
                {
                    var touch = event.targetTouches[0];
                    moveAt(touch.pageX, touch.pageY);
                }            
                else onClickDragExit(event); //прервать движение
        }    

        function onClickDragExit(){
            activeEl.removeEventListener('touchend',onClickDragExit, false);
            document.removeEventListener('touchmove',onMouseMove, false);            
            
        }

        document.addEventListener('touchmove', onMouseMove, false);        
        activeEl.addEventListener('touchend', onClickDragExit, false);
    };  
    
    activeEl.addEventListener('gesturechange', PinchZoom, false);    
    function PinchZoom(event)
    {
        scale += event.scale;
        
        console.log(scale);


        // if(event.scale < 1.0){
        //     activeEl.style.transform = activeEl.style.WebkitTransform = activeEl.style.MsTransform = 'scale(0.5)';
        // }
        // else if(event.scale > 1.0){
        //     activeEl.style.transform = activeEl.style.WebkitTransform = activeEl.style.MsTransform = 'scale(1.5)';
        // }
    }

}
    //MOBILE##############################################################################################


    //PC####################################################################
    else {
    activeEl.addEventListener('mousedown', onMouseDownDrag);
    function onMouseDownDrag(e)
    {                      
        isMouseMove = false;  
        let shiftX = e.clientX - activeEl.getBoundingClientRect().left;
        let shiftY = e.clientY - activeEl.getBoundingClientRect().top;

        function moveAt(pageX, pageY){
            activeEl.style.top = pageY - shiftY + 'px'; 
            activeEl.style.left = pageX - shiftX + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
            isMouseMove = true;
        }        
        function onClickDragExit(){
            activeEl.removeEventListener('mouseup',onClickDragExit);
            document.removeEventListener('mousemove',onMouseMove, false);
         }

        document.addEventListener('mousemove', onMouseMove, false);        
        activeEl.addEventListener('mouseup', onClickDragExit);
    };

    
    };
     //PC####################################################################

    

    

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

