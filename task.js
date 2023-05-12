window.addEventListener('scroll',function(){
    this.document.querySelector('.navbar').classList.toggle('scroll',this.window.scrollY>100)
})