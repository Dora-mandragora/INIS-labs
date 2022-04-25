

const dragEl = document.querySelectorAll('.target'); 
    
let elSize = dragEl.length;

let isDoubleClick = false;
let isMouseMove = false;


for (let i=0; i<elSize; i++){ 

    let activeEl = dragEl[i];
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
    else onClickDragExit();
    
        function onMouseMove(event) {
            if(event.targetTouches.length === 1)
                {
                    var touch = event.targetTouches[0];
                    moveAt(touch.pageX, touch.pageY);
                }            
                else onClickDragExit(); //прервать движение
        }    

        function onClickDragExit(){
            activeEl.removeEventListener('touchend',onClickDragExit, false);
            document.removeEventListener('touchmove',onMouseMove, false);            
            
        }

        document.addEventListener('touchmove', onMouseMove, false);        
        activeEl.addEventListener('touchend', onClickDragExit, false);
    };  
    
    let height = parseFloat(activeEl.style.height);
    let width = parseFloat(activeEl.style.width);
    let scale = 1;
    activeEl.addEventListener('touchstart', onTouchZoom)
    function onTouchZoom(e){
        let delta = 0;
        if(e.targetTouches.length === 2){
            var touch1 = e.targetTouches[0];
            var touch2 = e.targetTouches[1];
            delta = Math.sqrt((touch1.clientX-touch2.clientX)*(touch1.clientX-touch2.clientX)
            + (touch1.clientY-touch2.clientY)*(touch1.clientY-touch2.clientY));
            console.log(delta);
        }
       
        function onTouchMove(e){
            if(e.targetTouches.length === 2){
                var touch1 = e.targetTouches[0];
                var touch2 = e.targetTouches[1];
                let deltaN = Math.sqrt((touch1.clientX-touch2.clientX)*(touch1.clientX-touch2.clientX)
                + (touch1.clientY-touch2.clientY)*(touch1.clientY-touch2.clientY));

                if((delta-deltaN) > 0) scale += scale* -0.005;
                else scale += scale* 0.001;
                console.log(scale);
                activeEl.style.width = width * scale + 'px';
                activeEl.style.height = height * scale + 'px';
            }
            else onTouchExit();
        }

        function onTouchExit(){
            activeEl.removeEventListener('touchend', onTouchExit, false);
            document.removeEventListener('touchmove', onTouchMove, false); 
        }

        document.addEventListener('touchmove', onTouchMove, false);
        activeEl.addEventListener('touchend', onTouchExit, false);
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
        let fpaxeX = e.pageX;
        let fpaxeY = e.pageY;

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
            document.removeEventListener('keyup', EscCancel); 
        }
        function EscCancel(e){   
            if(e.key == "Escape"){
                activeEl.style.top = fpaxeY - shiftY + 'px'; 
                activeEl.style.left = fpaxeX - shiftX + 'px';
            onClickDragExit();
            }            
        }
        document.addEventListener('keyup', EscCancel); 
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
        let fpaxeX = e.pageX;
        let fpaxeY = e.pageY;

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
            document.removeEventListener('keyup', EscCancel); 


            activeEl.style.background = 'red'; 
            isDoubleClick = false;
        }
        function EscCancel(e){   
            if(e.key == "Escape"){
                activeEl.style.top = fpaxeY - shiftY + 'px'; 
                activeEl.style.left = fpaxeX - shiftX + 'px';
            onClickDragExit();
            }            
        }

        document.addEventListener('keyup', EscCancel); 
        document.addEventListener('mousemove', onMouseMove, false);        
        activeEl.addEventListener('click', onClickDragExit);
    };

    let height = parseFloat(activeEl.style.height);
    let width = parseFloat(activeEl.style.width);
    let scale = 1;
    activeEl.addEventListener('wheel', onWheelZoom)
    function onWheelZoom(event){
        scale += event.deltaY * -0.001;         
        scale = Math.min(Math.max(.125, scale), 4);        
        activeEl.style.width = width * scale + 'px';
        activeEl.style.height = height * scale + 'px';
    }
} 

 
const workspace = document.querySelector('#workspace'); 
workspace.addEventListener('click', (e) => { 
    if(e.target == workspace){ 
        for(let i = 0; i < elSize; i++) {
            dragEl[i].style.background = 'red';
        } 
    } 
});

