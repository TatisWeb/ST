"use strict"

document.addEventListener('DOMContentLoaded',function () {
 const form = document.getElementById('form');
 form.addEventListener('submit', formSend);
 
 async function formSend(e) {
  e.preventDefault();
 
 let error = 0

 let formData = new FormData(form);
 formData.append('image',formImage.files[0]);
 

 if (error === 0){
   form.classList.add('_sending');
    let response = await fetch ('sendmail.php', {
     method: 'POST', 
     body: formData
    });
   if (response .ok) {
    let result = await response.json();
    alert(result.message);
    formPreview.innerHTML = '';
    form.reset();
    form.classList.remove('_sending');
   }else {
   alert("ошибка");
   form.classList.remove('_sending');
   }
   
 }
 else {
  alert('заполните обязательные поля');
 }
 
 }

function formValidate(form) {
 let error = 0;

}

function formAddError (input)
{
input.parentElement.classList.add('_error');
input.classList.add('_error');
}

function formRemoveError(input)
{
 input.parentElement.classList.remove('_error');
 input.classList.remove('_error');
}

function emailTest(input){
 return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change',()=> {
 uploadFile(form.files[0]);
});

function uploadFile (file) {
 if (!['image/jpeg','image/png','image/gif','image/psd'].includes(file.type))
 {
  alert('неверный формат изображения');
  formImage.value ='';
  return;
 }
 if (file.size > 10*1024*1024) {
  alert('фаил должен быть меньше 10мб');
  return;
 }
 
 var reader = new FileReader();
 reader.onload = function (e) {
  formPreview.innerHTML = `<img src="${e.target.result}"alt="фото">`;
 };
 reader.onerror = function(e){
  alert('ошибка');
 };
 
 reader.readAsDataURL(file);
 
}

});