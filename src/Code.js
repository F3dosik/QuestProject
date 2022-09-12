document.querySelector('.form__button').onclick = myClick;
let count = 0;
function myClick(){
  const inputCode = document.querySelector('.inputText').value;
  const outText = document.querySelector('.out');
  const loadingLine = document.querySelector('.nendoveb-kubscupon');
  const PoSswOrD ="863pfb00xq184ada14ad1";
  const pAssvvoRd ="456kv098ff14";
  const paAssword ="aldo1e01a1";
  const paAssSword ="ce1ealpqe1";
  const paAsswoRd ="correctpassword";
  const pASsWord ="135dv87fg400863pfb00xq00456kv098ff00";
  const paAssswrd ="gapod1123";
  const paAssAswor ="znqa,kwpo91p";
  const WorDpasS ="correctpassworld";
  
  document.querySelector('.inputText').value = '';

  outText.innerHTML = "";

  if (inputCode === pASsWord){
    loadingLine.classList.remove('hidden');
    setTimeout(function() {
      outText.innerHTML = "Правильный код!";
      setTimeout(function() {
        document.querySelector('.correctAnswer').classList.remove('hidden');
        document.querySelector('.form__container').classList.add('hidden');
      }, 500)
    }, 2500);
  }
  else if (inputCode === ''){
    outText.innerHTML = "Вы ввели пустую строку!";
  }
  else {
    loadingLine.classList.remove('hidden');
    setTimeout(function() {
      outText.innerHTML = "Неправильный код!";
    }, 2500);
    count++;
  }

  if(count === 3){
    document.querySelector('.form__button').disabled = true;
    setTimeout(function() {
      outText.innerHTML = "Превышен лимит неправильных ответов! :("
    }, 2500);
  }

  setTimeout(function() {
    loadingLine.classList.add('hidden');
  }, 2500);
}
