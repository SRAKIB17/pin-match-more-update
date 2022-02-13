function generatePin(){
    const pin = createPin();
    document.getElementById('display-pin').value = pin;
}
function createPin(){
    const pin = Math.round(Math.random()*10000);
    let string = (pin + '').length
    // console.log(pin)
    if( string == 4){
        return pin;
    }
    else{
       return createPin()
    }
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const showInput = document.getElementById('typed-numbers')
    const type = event.target.innerText;
    if(Number.isInteger(Number(type))){
       
        showInput.value += type;
    }
    else  if (type == 'C'){
        showInput.value = ''
    }
    else if (type == '<'){
        showInput.value = showInput.value.slice(0,-1);
    }
})




function verifyPin(btn){

    // function time 
    document.getElementById('time').style.display = 'block'
    
    // generatePin disable
    document.getElementById('pinMakeBtn').setAttribute('disabled', true)
    // generatePin color chang 
    document.getElementById('pinMakeBtn').classList.add('bg-secondary')
    const getPin =  document.getElementById('display-pin');
    const tryLeft = document.getElementById('try');
    const typePin = document.getElementById('typed-numbers');

    if(tryLeft.innerText == 3){
        count()
        tryLeft.innerText =parseInt(tryLeft.innerText) - 1;
    }
    else if(tryLeft.innerText >= 1){
        tryLeft.innerText =parseInt(tryLeft.innerText) - 1;
    }
    else {
        document.getElementById('fail').style.display = 'block'
        btn.classList.add('bg-secondary')
        btn.setAttribute('disabled', true)
        typePin.setAttribute('disabled',true)
    }
    
    // conditon apply 
    if((getPin.value == typePin.value) && (getPin.value != '' || typePin.value != '')){
        generatePinRemove();
        document.getElementById('notify-success').style.display = 'block'
        document.getElementById('notify-fail').style.display = 'none'
    }
    else{
        document.getElementById('notify-fail').style.display = 'block'
        document.getElementById('notify-success').style.display = 'none'
    }

}



let countSecond = 0;
// Time count
let countTime = ''
function count(){
    countTime = setInterval(countStart,1000)
    function countStart(){
        if (countSecond < 60){
            countSecond +=1 ;
            document.getElementById('timeCount').innerText = countSecond;
        }
        else{
            generatePinRemove()   
        }
            

    
    }

    console.log(56356)
}
function generatePinRemove(){
    document.getElementById('display-pin').value = ''
    document.getElementById('pinMakeBtn').classList.remove('bg-secondary')
    document.getElementById('typed-numbers').value = '';
    document.getElementById('pinMakeBtn').removeAttribute('disabled')
    document.getElementById('time').style.display = 'none'
    countSecond = 0;
    clearInterval(countTime);
}
// try anothr way 
document.getElementById('another').addEventListener('click',function(){
    document.getElementById('try').innerText = 3;
    const btn = document.getElementById('btnSubmit');
    generatePinRemove()

    document.getElementById('fail').style.display = 'none'
    btn.classList.remove('bg-secondary')

    btn.removeAttribute('disabled')

    document.getElementById('typed-numbers').removeAttribute('disabled')

    document.getElementById('notify-fail').style.display = 'none'
})