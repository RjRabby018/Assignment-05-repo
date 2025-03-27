// first i will do the click opertaion on complete btn and will add or substract and disable the complete btn
   
    // for clicking btn 01
document.getElementById('Completed-btn-1').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-01').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})
// for clicking btn 02
document.getElementById('Completed-btn-2').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-02').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})
// for clicking btn 03
document.getElementById('Completed-btn-3').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-03').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})
// for clicking btn 04
document.getElementById('Completed-btn-4').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-04').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})
// for clicking btn 05
document.getElementById('Completed-btn-5').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-05').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})
// for clicking btn 06
document.getElementById('Completed-btn-6').addEventListener('click',function(){
    const num1= document.getElementById('substract-num').innerText;
    const convertedNum1=parseInt(num1);
    const num2 = document.getElementById('add-num').innerText;
    const convertedNum2=parseInt(num2);
    const substract=convertedNum1-1;
    const addition=convertedNum2+1;

    document.getElementById('substract-num').innerText=substract;
    document.getElementById('add-num').innerText=addition;
    this.disabled=true;
    this.style.opacity = "0.2";
    // giving history
    const task=document.getElementById('task-06').innerText;
    const container=document.getElementById('history-container');

    const p=document.createElement('p');
    p.innerText=`
    You have Complete The Task ${task} at 12:48:15 PM
    `
    p.style.backgroundColor='lightgray';
    p.style.margin='16px';
    p.style.borderRadius='12px';
    p.style.textAlign='center';
    p.style.paddingTop='0px';
    container.appendChild(p);
})

// clear history btn 
document.getElementById('history-cleaning').addEventListener('click',function(){
    const clear=document.getElementById('history-container');
    clear.innerHTML='';
})

// swicting html
document.getElementById('discover-switch').addEventListener('click',function(){
    window.location.href='main.html';
})
// bg-color-change
document.getElementById('theme-btn').addEventListener('click', function () {
    const bgColor = document.getElementById('bg-color-change');
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    bgColor.style.backgroundColor = color;
});
// dynamic time
function showDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerText = today.toLocaleDateString("en-US", options);
}
showDate();