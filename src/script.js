const passwords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    0,1,2,3,4,5,6,7,8,9,
                 '!', '@', ',', '.', '/', '*', '-', "'", '"', ':', '?', "|", "#", '$', '%', '&', '(', ')', '_', '+', '~', '=', '§'];



    
    
let changeMode = document.addEventListener('click', function() {
        this.getElementById('night-mode-on').setAttribute('id','night-mode-off');
        this.getElementById('night-mode-container').setAttribute('id', 'night-mode-container-off');
        this.getElementById('container').setAttribute('id','container-off');
        this.getElementsById('night-mode-off').setAttribute('input', 'off');



        this.getElementById('night-mode-off').setAttribute('id','night-mode-on');
        this.getElementById('night-mode-container-off').setAttribute('id', 'night-mode-container');
        this.getElementById('container-off').setAttribute('id','container');
    
        
    console.log(changeMode)
});









// const PasswordViewer = document.getEelementById('password-viewer');
// const codeGenerator = document.getEelementById('code-generator');

// const nightModeOn = document.getEelementById('night-mode-on').setAttribute(id,'night-mode-off');
// const nightModeOnContainer = document.getEelementById('night-mode-container').setAttribute(id, 'night-mode-container-off');
// const container = document.getEelementById('container').setAttribute('id','container-off');
