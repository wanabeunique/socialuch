// Первое поле

const inputField1 = document.querySelector('.chosen-value--first');
const dropdown1 = document.querySelector('.value-list--first');
const dropdownArray1 = [... document.querySelectorAll('.table__select--first')];
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
  inputField1.placeholder = 'Улица';
  dropdown1.classList.add('open');
  dropdownArray1.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField1.addEventListener('blur', () => {
  inputField1.placeholder = 'Улица';
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
const dropdownArray2 = [... document.querySelectorAll('.table__select--second')];
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
  inputField2.placeholder = 'Категория';
  dropdown2.classList.add('open');
  dropdownArray2.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField2.addEventListener('blur', () => {
  inputField2.placeholder = 'Категория';
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
const dropdownArray3 = [... document.querySelectorAll('.table__select--third')];
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
  inputField3.placeholder = 'Категория';
  dropdown3.classList.add('open');
  dropdownArray3.forEach(dropdown => {
    dropdown3.classList.remove('closed');
  });
});

inputField3.addEventListener('blur', () => {
  inputField3.placeholder = 'Категория';
  dropdown3.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown3.contains(evt.target);
  const isInput = inputField3.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown3.classList.remove('open');
  }
});