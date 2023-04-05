$(function(){
  $('#editing__upload').MultiFile({
    max:10,
    STRING: {
      remove:'',
    },
    accept: 'pdf|jpg|doc|docx',
    list: ".editing__files"
  });
});






//Первое поле

const inputField1 = document.querySelector('.chosen-value--first');
const dropdown1 = document.querySelector('.value-list--first');
const dropdownArray1 = [... document.querySelectorAll('.editing__select--first')];
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
const dropdownArray2 = [... document.querySelectorAll('.editing__select--second')];
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
  inputField2.placeholder = 'Добавить статус';
  dropdown2.classList.add('open');
  dropdownArray2.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField2.addEventListener('blur', () => {
  inputField2.placeholder = 'Добавить статус';
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
const dropdownArray3 = [... document.querySelectorAll('.editing__select--third')];
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
  inputField3.placeholder = 'Добавить статус';
  dropdown3.classList.add('open');
  dropdownArray3.forEach(dropdown => {
    dropdown3.classList.remove('closed');
  });
});

inputField3.addEventListener('blur', () => {
  inputField3.placeholder = 'Добавить статус';
  dropdown3.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown3.contains(evt.target);
  const isInput = inputField3.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown3.classList.remove('open');
  }
});

// четвертое поле
const inputField4 = document.querySelector('.chosen-value--fourth');
const dropdown4 = document.querySelector('.value-list--fourth');
const dropdownArray4 = [... document.querySelectorAll('.editing__select--fourth')];
let valueArray4 = [];
dropdownArray4.forEach(item => {
  valueArray4.push(item.textContent);
});

const closeDropdown4 = () => {
  dropdown4.classList.remove('open');
}

inputField4.addEventListener('input', () => {
  dropdown4.classList.add('open');
  let inputValue = inputField4.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray4.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray4[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray4[j].classList.add('closed');
      } else {
        dropdownArray4[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray4.length; i++) {
      dropdownArray4[i].classList.remove('closed');
    }
  }
});

dropdownArray4.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField4.value = item.textContent;
    dropdownArray4.forEach(dropdown => {
      dropdown4.classList.add('closed');
    });
  });
})

inputField4.addEventListener('focus', () => {
  inputField4.placeholder = 'Добавить статус';
  dropdown4.classList.add('open');
  dropdownArray4.forEach(dropdown => {
    dropdown4.classList.remove('closed');
  });
});

inputField4.addEventListener('blur', () => {
  inputField4.placeholder = 'Добавить статус';
  dropdown4.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown4.contains(evt.target);
  const isInput = inputField4.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown4.classList.remove('open');
  }
});


// пятое поле
const inputField5 = document.querySelector('.chosen-value--five');
const dropdown5 = document.querySelector('.value-list--five');
const dropdownArray5 = [... document.querySelectorAll('.editing__select--five')];
let valueArray5 = [];
dropdownArray5.forEach(item => {
  valueArray5.push(item.textContent);
});

const closeDropdown5 = () => {
  dropdown5.classList.remove('open');
}

inputField5.addEventListener('input', () => {
  dropdown5.classList.add('open');
  let inputValue = inputField5.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray5.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray5[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray5[j].classList.add('closed');
      } else {
        dropdownArray5[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray5.length; i++) {
      dropdownArray5[i].classList.remove('closed');
    }
  }
});

dropdownArray5.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField5.value = item.textContent;
    dropdownArray5.forEach(dropdown => {
      dropdown5.classList.add('closed');
    });
  });
})

inputField5.addEventListener('focus', () => {
  inputField5.placeholder = 'Добавить';
  dropdown5.classList.add('open');
  dropdownArray5.forEach(dropdown => {
    dropdown5.classList.remove('closed');
  });
});

inputField5.addEventListener('blur', () => {
  inputField5.placeholder = 'Добавить';
  dropdown5.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown5.contains(evt.target);
  const isInput = inputField5.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown5.classList.remove('open');
  }
});


// шестое поле 
const inputField6 = document.querySelector('.chosen-value--six');
const dropdown6 = document.querySelector('.value-list--six');
const dropdownArray6 = [... document.querySelectorAll('.editing__select--six')];
let valueArray6 = [];
dropdownArray6.forEach(item => {
  valueArray6.push(item.textContent);
});

const closeDropdown6 = () => {
  dropdown6.classList.remove('open');
}

inputField6.addEventListener('input', () => {
  dropdown6.classList.add('open');
  let inputValue = inputField6.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray6.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray6[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray6[j].classList.add('closed');
      } else {
        dropdownArray6[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray6.length; i++) {
      dropdownArray6[i].classList.remove('closed');
    }
  }
});

dropdownArray6.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField6.value = item.textContent;
    dropdownArray6.forEach(dropdown => {
      dropdown6.classList.add('closed');
    });
  });
})

inputField6.addEventListener('focus', () => {
  inputField6.placeholder = 'Добавить';
  dropdown6.classList.add('open');
  dropdownArray6.forEach(dropdown => {
    dropdown6.classList.remove('closed');
  });
});

inputField6.addEventListener('blur', () => {
  inputField6.placeholder = 'Добавить';
  dropdown6.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown6.contains(evt.target);
  const isInput = inputField6.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown6.classList.remove('open');
  }
});


// седьмое поле
const inputField7 = document.querySelector('.chosen-value--seven');
const dropdown7 = document.querySelector('.value-list--seven');
const dropdownArray7 = [... document.querySelectorAll('.editing__select--seven')];
let valueArray7 = [];
dropdownArray7.forEach(item => {
  valueArray7.push(item.textContent);
});

const closeDropdown7 = () => {
  dropdown7.classList.remove('open');
}

inputField7.addEventListener('input', () => {
  dropdown7.classList.add('open');
  let inputValue = inputField7.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray7.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray7[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray7[j].classList.add('closed');
      } else {
        dropdownArray7[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray7.length; i++) {
      dropdownArray7[i].classList.remove('closed');
    }
  }
});

dropdownArray7.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField7.value = item.textContent;
    dropdownArray7.forEach(dropdown => {
      dropdown7.classList.add('closed');
    });
  });
})

inputField7.addEventListener('focus', () => {
  inputField7.placeholder = 'Добавить';
  dropdown7.classList.add('open');
  dropdownArray7.forEach(dropdown => {
    dropdown7.classList.remove('closed');
  });
});

inputField7.addEventListener('blur', () => {
  inputField7.placeholder = 'Добавить';
  dropdown7.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown7.contains(evt.target);
  const isInput = inputField7.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown7.classList.remove('open');
  }
});