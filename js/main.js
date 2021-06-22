// for navbar
var list= document.querySelectorAll('nav ul li a');
list.forEach(el=> {
    el.addEventListener("click",(e)=>{
        list.forEach(el=>{
            el.classList.remove('active');
        });
        e.target.className="active";
        document.getElementById('navbarSupportedContent').style.display='none';
    })
});
// for button in navbar
var navbttn=document.getElementsByTagName('span')[0];
navbttn.onclick=(e)=>{
    e.stopPropagation();
    document.getElementsByTagName('button')[0].style.backgroundColor="rgba(0, 0, 0, 0.1)";
    document.getElementsByTagName('button')[0].style.border="none";
    document.getElementById('navbarSupportedContent').style.display='';
    document.getElementById('navbarSupportedContent').classList.toggle('put');
}
document.addEventListener('click',(f)=>{
    document.getElementsByTagName('button')[0].style.backgroundColor="white";
    document.getElementsByTagName('button')[0].style.border="rgba(0, 0, 0, 0.2)  solid .25px";
})
//for change color of element in nav
var about =document.getElementById('about'),
    home =document.getElementById('home'),
    portfolio =document.getElementById('portfolio'),
    service =document.getElementById('service'),
    team =document.getElementById('team'),
    contact =document.getElementById('contact');
window.onscroll = (r)=>
{
    if(window.scrollY >= home.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[0].className='active';
    }
    if (window.scrollY >= about.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[1].className='active';
    }
    if (window.scrollY >= portfolio.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[2].className='active';
    }
    if(window.scrollY >= service.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[3].className='active';
    }
    if(window.scrollY >= team.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[4].className='active';
    }
    if(window.scrollY >= contact.offsetTop-140){
        list.forEach(el=>{
            el.classList.remove('active');
        })
        list[5].className='active';
    }
}