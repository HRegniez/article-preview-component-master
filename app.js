const share = document.querySelector('.arrow_contain');
const pop = document.querySelector('#pop');

share.addEventListener('click', () => {
    pop.classList.toggle('pop_down');
    pop.classList.toggle('pop_up');
})
document.addEventListener('click', (e) => {
    console.log(e);
    if(e.target != share) {
        pop.classList.remove('pop_up');
        pop.classList.add('pop_down');  
    }
    
})