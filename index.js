'use strict'

const btn = document.querySelector('#load-btn');
let app = document.querySelector('#app');
const newDataArr = document.querySelector('.newDataArr');
const newOL = document.createElement('ol');
                newOL.classList.add('wsnumber1');
                document.body.append(newOL);
                newOL.innerHTML = '';
 


btn.addEventListener('click', () => {
    app.innerHTML = 'Waiting...';

    fetch('https://gp-js-test.herokuapp.com/pizza')
    .then((response) => response.json())
        .then((data) => { 
            
            app.style.display = 'none';
            
          
            data.party.map(item => {
                
            
                if(item.eatsPizza === true) {
                   
                    const newItem = document.createElement('li');
                    const newPeople = document.createElement('li');
                    newItem.style.cssText = `
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 50%;
                    border: 3px solid black;
                    transform: rotate(${360 / [item.name].length}deg) skewY(0deg);
                    `
                    
                    document.querySelector('#f1').classList.add('circle');
                    document.querySelector('.circle').append(newItem);
                    document.querySelector('.wsnumber1').append(newPeople);
                   
                    newItem.innerHTML = ``;
                    newPeople.innerHTML = `${item.name}`;
                }
                
            })
           
})
                .catch(alert('Something broken :('))
})
