const divGridElement = [...document.querySelectorAll('div')];
const divInnerText = divGridElement.map(x => x.innerText)

divGridElement[0].addEventListener('click', () => {
    console.log('here')
    
    divGridElement[0].innerText = '0';
    console.log(divInnerText)
}) 

