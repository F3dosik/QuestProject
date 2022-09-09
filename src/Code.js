document.querySelector('.form__button').onclick = myClick;
let count = 0;
function myClick(){
  const password = "correctpassword";
  const inputCode = document.querySelector('.inputText').value;
  const outText = document.querySelector('.out');
  const loadingLine = document.querySelector('.nendoveb-kubscupon');
  document.querySelector('.inputText').value = '';

  outText.innerHTML = "";

  if (inputCode === password){
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
