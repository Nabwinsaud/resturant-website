const navbar=document.getElementById('navbar');
console.log(navbar);

// navbar.forEach(element => {
//     element.addEventListener('click',()=>{
//            navbar.classList.toggle('navbar');
//     })
    
// });
navbar.addEventListener('click',()=>{
    navbar.classList.toggle('navbar active');

})

// const btns=document.getElementById('checks');
// console.log(btns);

// btns.addEventListener('click',()=>{
//     console.log('bb');
// })

// const hamburger=document.getElementById('hamburger');
// // console.log(hamburger);

// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('fa-times');
  
// })

// const navLink=document.querySelectorAll('.navLink');
// console.log(navLink);

