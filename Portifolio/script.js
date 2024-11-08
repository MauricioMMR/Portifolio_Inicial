const documento = document.body;
const checkBox = document.querySelector('.inputMode');

function darkmode() {
    console.log(checkBox.checked)
    if (checkBox.checked) {
        documento.classList.add('dark')
        localStorage.setItem("dark-mode", "true")
    }
    else {
        documento.classList.remove('dark')
        localStorage.setItem("dark-mode", "false")
    }

}

addEventListener("DOMContentLoaded", () => {
    const status = localStorage.getItem("dark-mode")
    if (status === "true") {
        checkBox.checked = true
    }
    else {
        checkBox.checked = false
    }
    darkmode()
})

checkBox.addEventListener("change", darkmode)



function mostrar(){
    document.getElementById('teste2').style.display = 'block';
}
function esconder(){
    document.getElementById('teste2').style.display = 'none';
}



const toggleModal = (modalClass) =>{
    const modal = document.querySelector(modalClass);

    const actualStyle = modal.style.display;

    modal.style.display = actualStyle === "block" ? 'none' : 'block';
}

document.querySelector('.btnModal1').addEventListener('click',()=> toggleModal('.modal1'));
document.querySelector('.btnModal2').addEventListener('click',()=> toggleModal('.modal2'));
document.querySelector('.btnModal3').addEventListener('click',()=> toggleModal('.modal3'));
document.querySelector('.btnModal4').addEventListener('click',()=> toggleModal('.modal4'));
document.querySelector('.btnModal5').addEventListener('click',()=> toggleModal('.modal5'));

window.onclick=function(event){
    const modals = [
        document.querySelector('.modal1'),
        document.querySelector('.modal2'),
        document.querySelector('.modal3'),
        document.querySelector('.modal4'),
        document.querySelector('.modal5')
    ]

    modals.forEach(modal=>{
        if(event.target===modal){
            modal.style.display = 'none';
        }
    })
}
