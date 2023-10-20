//console.log('hello script')

const backBtn = document.getElementById('backBtn')

backBtn.addEventListener('click', function(){
    //console.log ('ehy, mi hai cliccato')
    window.scrollTo(0,0)
})

window.addEventListener('scroll', function(){
    let posY = window.scrollY
    if(posY > 0) {
        backBtn.style.display = 'block'
    } else {
        backBtn.style.display = 'none'
    }
})