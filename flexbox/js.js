const arrow=document.querySelector('.arrow')
const item1=document.querySelector('.item1')
const item2=document.querySelector('.item2')


const firstClick=()=>
{
    item1.classList.toggle('show')
}


const hide=()=>
{

    item1.style.height='0px'
}
const arrowStyle=()=>

{
    arrow.style.rotate="180deg"
}

arrow.addEventListener('click',firstClick)

arrow.addEventListener('click',arrowStyle)
