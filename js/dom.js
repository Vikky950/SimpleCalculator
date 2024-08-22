
let divresult = document.querySelector('.display');
let finialr1=document.getElementById('finalr');
let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");


function addNum(){
    let n1 = document.getElementById("num1");
   let n2 = document.getElementById("num2");

   if(n1.value === "" && n2.value === ""){
    let resultspan = document.createElement("span");
    resultspan.className = 'myspan';
    resultspan.innerHTML = 'No numbers entered.Try again.';
   finialr1.appendChild(resultspan);

   }
   else{
   let result = parseInt(n1.value) + parseInt(n2.value);

   let resultspan = document.createElement("span");
   resultspan.innerHTML = result;
   finialr1.appendChild(resultspan);

   
   
}
}

function subNum(){
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");

   if(n1.value === "" && n2.value === ""){
    let resultspan = document.createElement("span");
    resultspan.className = 'myspan';
    resultspan.innerHTML = 'No numbers entered.Try again.';
   finialr1.appendChild(resultspan)
   }
   else{
    let result=parseInt(n1.value) - parseInt(n2.value);
    let resultspan = document.createElement("span");
    resultspan.innerHTML = result;
    finialr1.appendChild(resultspan);
   }
}



function multNum(){
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");
    if(n1.value === "" && n2.value === ""){
        let resultspan = document.createElement("span");
        resultspan.className = 'myspan';
        resultspan.innerHTML = 'No numbers entered.Try again.';
       finialr1.appendChild(resultspan)
       }
    else{
    let result=parseInt(n1.value) * parseInt(n2.value);
    let resultspan = document.createElement("span");
    resultspan.innerHTML=result;
   finialr1.appendChild(resultspan);
    }
}


function divNum(){
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");
    if(n1.value === "" && n2.value === ""){
        let resultspan = document.createElement("span");
        resultspan.className = 'myspan';
        resultspan.innerHTML = 'No numbers entered.Try again.';
       finialr1.appendChild(resultspan)
       }
       else{
    let result=parseInt(n1.value) / parseInt(n2.value);
    let resultspan = document.createElement("span");
    resultspan.innerHTML=result;
    finialr1.appendChild(resultspan);
   }
}

function Clear(){
 
  
  if(finialr1 !== ''){
    finialr1.innerHTML = '';
    document.getElementById("num1").value ='';
    document.getElementById("num2").value = '';

  }
  else{
    let resultspan = document.createElement("span");
    resultspan.innerHTML = 'There is no value to clear';
    finialr1.appendChild(resultspan);
  }
}