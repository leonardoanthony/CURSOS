// Javascript 03 - 09
// Navegação por tabs

document.documentElement.classList.add('js');

const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');

if(tabcontent.length && tabmenu.length){

tabcontent[0].classList.add('ativo');

function activeTab(index){
    tabcontent.forEach((item) => {
        item.classList.remove('ativo');
    })
    tabcontent[index].classList.add('ativo');
}



tabmenu.forEach((item, index) => {
    item.addEventListener('click', () =>{
        activeTab(index);
    });
});
}