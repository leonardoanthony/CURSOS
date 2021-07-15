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

function initAccordionList(){

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

}

initAccordionList();



// Javascript 03 - 11
// Scroll Suave Link Interno

function initSmoothScroll(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSuave(event){
        event.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSuave);
    });

}

initSmoothScroll();

// Javascript 03 - 12
// Animação ao scroll


const sectionScroll = document.querySelectorAll('.js-scroll');
sectionScroll[0].classList.add('ativo');

function animaScroll(){

    const windowTop = window.innerHeight * 0.6;

    sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowTop;
        if(sectionTop < 0){
            section.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animaScroll);