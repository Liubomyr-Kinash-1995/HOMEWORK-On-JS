window.addEventListener('resize', function(){
    if(this.innerHeight < 768){

        document.getElementById("test").classList.add('text');
     }else{
         console.log("ALL GOOD");
     }
 });
