// Question no 1:
// alert("Welcome To my Website");

// Question no 2:
// alert("Error! Please enter a valid Password");

// Question no 3:
// alert("Welcome To Js Land \n Happy Coding");

// Question no 4:

// alert("Welcome To JS Land");

let showBtn = document.querySelector('#showBtn');
let closeBtn = document.querySelector('#closeBtn');
let backgroundDim = document.querySelector('.backgroundDim');
let showModal = document.querySelector('.showModal');

showBtn.addEventListener('click', function () {
    backgroundDim.style.display = "block";
    showModal.style.display = "block";
})

closeBtn.addEventListener('click', function () {
    backgroundDim.style.display = "none";
    showModal.style.display = "none";
})

// Question no 5:
// alert("Hello.. I can run JS through my developer Console");