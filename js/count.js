window.onload=function(){
   countDown();
}

function countDown(){
 
    const newYears="1 Jan 2021";
    let newYearsDate = new Date(newYears).getTime();
    let currentTime=new Date().getTime();
    
 
   //console.log(newYearsDate);

   let dif = newYearsDate - currentTime;

   if(dif ==0){
    window.location.reload();
   }

   if(dif <= 0){
    
    document.querySelector('h1').style.color="rgba(98,59,30,1)";
    document.querySelector('h1').innerText = "새해 복 많이 받으세요! 2021 HAPPY NEW YEAR! From Saemi ♥"
    document.querySelector('h1').style.transition="all 0.4s ease-in-out";
    document.querySelector('h1').style.transform="rotate(360deg)";
    document.body.style.backgroundImage='url("../img/hi2.png")';
    document.body.style.backgroundColor="beigie";
    document.getElementById('pop').style.display="block";
    document.getElementById('pop').addEventListener('click', displayNo);
    function displayNo(){
        document.getElementById('pop').style.display="none";
    }

}

   console.log(dif);
    
    function newYearCount(){
        const newYears="1 Jan 2021";
        let newYearsDate = new Date(newYears).getTime();
        let currentTime=new Date().getTime();
     
       //console.log(newYearsDate);
    
       let dif = newYearsDate - currentTime;
    
        const s=1000;
        const m=s*60;
        const h= m*60;
        const d= h*24;
    
        let newD=Math.floor(dif/d);
        //console.log(newD);
        let newH=Math.floor((dif%d)/h);
        //뒤에 남은 걸 계산해야하므로
        //console.log(newH);
        let newM=Math.floor((dif%h)/m);
        //console.log(newM);
        let newS=Math.floor((dif%m)/s);
        //console.log(newS);

    const day = document.querySelector('.day > h2');
    const hour = document.querySelector('.hour > h2');
    const min = document.querySelector('.min > h2');
    const sec = document.querySelector('.sec > h2');

    day.innerText = newD;
    hour.innerText = newH;
    min.innerText = newM;
    sec.innerText = newS;

    
    }
    setInterval(newYearCount, 1000);

   


}
