// Javascript 03 - 09
// Navegação por tabs

function initTabNav(){

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
}

initTabNav();

// Javascript 03 - 10
// Accordion List

const accordionList = document.querySelectorAll('.js-accordionList dt');
const activeClass = 'ativo';

accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordionList(){
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordionList);
});