const passwords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    0,1,2,3,4,5,6,7,8,9,
                 '!', '@', ',', '.', '/', '*', '-', "'", '"', ':', '?', "|", "#", '$', '%', '&', '(', ')', '_', '+', '~', '=', '§'];




    
    
let spanNumber = document.getElementById('box');

for(i = 3; i < 36; i++) {
      let span = document.createElement('span');
      span.textContent = i;
      spanNumber.appendChild(span);
}

let num = numbers.getElementsByTagName('span');

let index = 0;

function prevNum() {
   num[index].style.display = 'none';
   index = (index - 1 +  num.length) % num.length;
   num[index].style.display = 'initial';
}

function nextNum() {
   num[index].style.display = 'none';
   index = (index + 1) % num.length;
   num[index].style.display = 'initial';
}





