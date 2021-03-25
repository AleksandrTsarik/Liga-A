

const   
    loader = document.querySelector('.screen-loader'),
    logo = document.querySelector('.logo'),
    main = document.querySelector('.main'),
    mainContent = document.querySelector('.main__inner'),
    topStrip = document.querySelector('.hedear'),
    burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.main__title'),
    info = document.querySelector('.main__info');

logo.classList.add('show');

document.addEventListener('keyup', e => {
    let screenWidth = window.innerWidth;
    if(screenWidth > 768 && e.keyCode === 13 && !loader.classList.contains('hidden')) {        
        mainContent.classList.remove('hidden');
        topStrip.classList.remove('hidden');
        main.classList.remove('hidden');
        loader.classList.add('hidden');   
        console.log(1)     
    }
});


document.addEventListener('click', e => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth) 
    if(screenWidth <= 768) {
        let elem = e.target;
        
        if(!loader.classList.contains('hidden')) {        
            mainContent.classList.remove('hidden');
            topStrip.classList.remove('hidden');
            main.classList.remove('hidden');
            loader.classList.add('hidden');
        } else if(loader.classList.contains('hidden') && elem.classList.contains('main__conent') || elem.closest('.main__conent')) {        
            title.classList.add('hidden');
            info.classList.add('show');
        }             
    }   
});


burger.addEventListener('click', () => {    
    if(!burger.classList.contains('active')) {
        burger.classList.add('active')
        menu.classList.add('show')
    } else {
        burger.classList.remove('active')
        menu.classList.remove('show')
    }
})