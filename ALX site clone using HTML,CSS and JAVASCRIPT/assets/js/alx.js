const woman = document.querySelector('#woman');
const woman2 = document.querySelector('#woman2')
const man = document.querySelector('#man');
const man2 = document.querySelector('#man2')
setInterval(()=>{
    woman.classList.toggle('active')
    woman2.classList.toggle('active')
    man.classList.toggle('active')
    man2.classList.toggle('active')
},4000)