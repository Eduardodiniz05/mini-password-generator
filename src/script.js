const passwords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    0,1,2,3,4,5,6,7,8,9,
                 '!', '@', ',', '.', '/', '*', '-', "'", '"', ':', '?', "|", "#", '$', '%', '&', '(', ')', '_', '+', '~', '=', '§'];

const randomNumber = documeent.getElementById



const  generateRandomString = (num) => {
   const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let result1= ' ';
   const charactersLength = characters.length;
   for ( let i = 0; i < num; i++ ) {
       result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result1;
}

const displayRandomString = () =>{
  let randomStringContainer = document.getElementById('random_string'); 
   randomStringContainer.innerHTML =  generateRandomString(8);    
}

console.log(generateRandomString(5));
         
         
// let changeMode = document.addEventListener('click', function(){
//    this.getElementById('night-mode-on').setAttribute('id','night-mode-off');
//    this.getElementById('night-mode-container').setAttribute('id', 'night-mode-container-off');
//    this.getElementById('container').setAttribute('id','container-off');
//    this.getElementsById('night-mode-on').setAttribute('input', 'off');
// });


      

      


// 'night-mode-container' = document.addEventListener('click', changeMode)


    
    






