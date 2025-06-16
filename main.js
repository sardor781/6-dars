const darkmode = document.getElementById('darkMode');
const body = document.querySelector('body');
const icon = document.getElementById('icon');
const searchInput = document.getElementById('searchInput');
const sendBtn = document.getElementById('sendBtn');
const list = document.getElementById('list');

darkmode.addEventListener('click' , ()=>{

   body.classList.toggle('darkMode');
   searchInput.style.color = 'white';
   icon.classList.toggle('fa-moon')
})


function addData(){
   let li = document.createElement('li');

   li.innerHTML = `<div>
                    <input type="checkbox" name="" id="" class="check">
                    <label for="">${searchInput.value}</label>
                </div>
                <div>
                    <i class="fa-solid fa-pen"></i>
                    <i class=" fa-solid fa-trash"></i>
                </div>`

      list.append(li);
      searchInput.value = '';
}

sendBtn.addEventListener('click' , ()=>{

   if(searchInput.value === ''){
      return;
   }
   addData();
})


searchInput.addEventListener('keypress' ,(e)=>{
   console.log(e.key);
   
   if(e.key === 'Enter' && searchInput.value !== ''){
      addData();
   }
})
list.addEventListener('click' , (e)=>{
   if(e.target.classList.contains('fa-trash')){
      e.target.parentElement.parentElement.remove();
      
   }
   let li = e.target.closest('li');
   let label = li.querySelector('label');
   if(e.target.classList.contains('check')){
      label.classList.toggle('line');
   }

   if(e.target.classList.contains('fa-pen')){
      let input = document.createElement('input');
      input.type = 'text';
      input.value = label.innerText;

      label.replaceWith(input);
      input.addEventListener('change' ,()=>saveEdit(input , label));
   }
})


const saveEdit = (input , label)=>{
   if(input.value !== ''){
      label.innerText = input.value;
   }
   input.replaceWith(label);
}
