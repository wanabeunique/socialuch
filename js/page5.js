const checkbox1 = document.getElementById("survey__checkbox-1")
const checkbox2 = document.getElementById("survey__checkbox-2")
const checkbox3 = document.getElementById("survey__checkbox-3")
const checkbox4 = document.getElementById("survey__checkbox-4")

window.onload = setState()

function setState(){
  checkbox2.checked = false
  checkbox1.checked = false
  checkbox3.checked = false
  checkbox4.checked = false
  checkbox1.style.color = "#242424"
  checkbox2.style.color = "#242424"
  checkbox3.style.color = "#242424"
  checkbox4.style.color = "#242424"
}


function getState(el){
  let label = el.parentNode
  if (el.checked)
  {
    label.style.color = "#5DACDF"
    el.style.color = "#5DACDF"
  }
  else
  {
    label.style.color = "#242424"
    el.style.color = "#242424"
  }
  if (el == checkbox1 && el.checked && checkbox2.checked){
    checkbox2.checked = false
    checkbox2.parentNode.style.color = "#242424"
    checkbox2.style.color = "#242424"
  }
  if (el == checkbox2 && el.checked && checkbox1.checked){
    checkbox1.checked = false
    checkbox1.parentNode.style.color = "#242424"
    checkbox1.style.color = "#242424"
  }
  if (el == checkbox3 && el.checked && checkbox4.checked){
    checkbox4.checked = false
    checkbox4.parentNode.style.color = "#242424"
    checkbox4.style.color = "#242424"
  }
  if (el == checkbox4 && el.checked && checkbox3.checked){
    checkbox3.checked = false
    checkbox3.parentNode.style.color = "#242424"
    checkbox3.style.color = "#242424"
  }
} 


let optionsList = document.querySelector('.survey__options')
let optionItem = "<div class=\"survey__options--item\"><input class=\"survey__options--area\" type=\"text\"><button class=\"survey__options--change\"><img src=\"./../img/page5/change.svg\"></button><button onclick=\"deleteOption(this)\" class=\"survey__options--delete\"><img src='./../img/page5/delete.svg'></button></div>"
optionsList.innerHTML += optionItem

function addOption(){
  let currentList = document.querySelector('.survey__options')
  optionsList.insertAdjacentHTML('beforeEnd',optionItem)
}

function deleteOption(el){
  console.log(el.parentNode.parentNode);
  el.parentNode.remove()
}

//Первое поле

const inputField1 = document.querySelector('.chosen-value--first');
const dropdown1 = document.querySelector('.value-list--first');
const dropdownArray1 = [... document.querySelectorAll('.survey__select--first')];
let valueArray1 = [];
dropdownArray1.forEach(item => {
  valueArray1.push(item.textContent);
});

const closeDropdown = () => {
  dropdown1.classList.remove('open');
}

inputField1.addEventListener('input', () => {
  dropdown1.classList.add('open');
  let inputValue = inputField1.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray1.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray1[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray1[j].classList.add('closed');
      } else {
        dropdownArray1[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray1.length; i++) {
      dropdownArray1[i].classList.remove('closed');
    }
  }
});

dropdownArray1.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField1.value = item.textContent;
    dropdownArray1.forEach(dropdown => {
      dropdown.classList.add('closed');
    });
  });
})

inputField1.addEventListener('focus', () => {
  inputField1.placeholder = 'Добавить категорию';
  dropdown1.classList.add('open');
  dropdownArray1.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField1.addEventListener('blur', () => {
  inputField1.placeholder = 'Добавить категорию';
  dropdown1.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown1.contains(evt.target);
  const isInput = inputField1.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown1.classList.remove('open');
  }
});

// Второе поле

const inputField2 = document.querySelector('.chosen-value--second');
const dropdown2 = document.querySelector('.value-list--second');
const dropdownArray2 = [... document.querySelectorAll('.survey__select--second')];
let valueArray2 = [];
dropdownArray2.forEach(item => {
  valueArray2.push(item.textContent);
});

const closeDropdown2 = () => {
  dropdown2.classList.remove('open');
}

inputField2.addEventListener('input', () => {
  dropdown2.classList.add('open');
  let inputValue = inputField2.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray2.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray2[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray2[j].classList.add('closed');
      } else {
        dropdownArray2[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray2.length; i++) {
      dropdownArray2[i].classList.remove('closed');
    }
  }
});

dropdownArray2.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField2.value = item.textContent;
    dropdownArray2.forEach(dropdown => {
      dropdown2.classList.add('closed');
    });
  });
})

inputField2.addEventListener('focus', () => {
  inputField2.placeholder = 'Добавить';
  dropdown2.classList.add('open');
  dropdownArray2.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField2.addEventListener('blur', () => {
  inputField2.placeholder = 'Добавить';
  dropdown2.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown2.contains(evt.target);
  const isInput = inputField2.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown2.classList.remove('open');
  }
});


// Третье поле

const inputField3 = document.querySelector('.chosen-value--third');
const dropdown3 = document.querySelector('.value-list--third');
const dropdownArray3 = [... document.querySelectorAll('.survey__select--third')];
let valueArray3 = [];
dropdownArray3.forEach(item => {
  valueArray3.push(item.textContent);
});

const closeDropdown3 = () => {
  dropdown3.classList.remove('open');
}

inputField3.addEventListener('input', () => {
  dropdown3.classList.add('open');
  let inputValue = inputField3.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray3.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray3[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray3[j].classList.add('closed');
      } else {
        dropdownArray3[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray3.length; i++) {
      dropdownArray3[i].classList.remove('closed');
    }
  }
});

dropdownArray3.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField3.value = item.textContent;
    dropdownArray3.forEach(dropdown => {
      dropdown3.classList.add('closed');
    });
  });
})

inputField3.addEventListener('focus', () => {
  inputField3.placeholder = 'Добавить';
  dropdown3.classList.add('open');
  dropdownArray3.forEach(dropdown => {
    dropdown3.classList.remove('closed');
  });
});

inputField3.addEventListener('blur', () => {
  inputField3.placeholder = 'Добавить';
  dropdown3.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown3.contains(evt.target);
  const isInput = inputField3.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown3.classList.remove('open');
  }
});


$(function(){
  $('#survey__upload').MultiFile({
    max:10,
    STRING: {
      remove:'',
    },
    accept: 'pdf|jpg|doc|docx',
    list: ".survey__files"
  });
});

var cnt = 2;

let questionList = document.querySelector('.survey__input--questions')
let questionWrapper = document.querySelector('.survey__input--areaWrapper')
console.log(questionList);
function addQuestion(){
  let qArea = document.createElement("div")
  let qStrong = document.createElement("strong")
  let qWrapper = document.createElement("div")
  let qInput = document.createElement("input")
  let qAdd = "<button class=\"survey__quetsion--btn\"><img src=\"./../img/page5/change.svg\"></button> <button class=\"survey__quetsion--btn\" onclick=\"deleteQuestion(this)\"><img src=\"./../img/page5/delete.svg\"></button>"
  qWrapper.className = "survey__input--areaWrapper"
  qArea.className = "survey__input--question"
  qInput.className = "survey__input--area"
  qStrong.className = "survey__input--title"
  qStrong.innerText = 'Вопрос ' + cnt;
  cnt++;
  qWrapper.appendChild(qInput)
  qWrapper.innerHTML += qAdd
  qArea.appendChild(qStrong)
  qArea.appendChild(qWrapper)
  console.log(qArea);
  questionList.appendChild(qArea)
}

function deleteQuestion(el)
{
  el.parentNode.parentNode.remove()
  cnt--;
}