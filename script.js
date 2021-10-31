function createElement(tagName = 'div', content = '') {
  const element = document.createElement(tagName)
  element.innerHTML = content

  return element
}

//task 2  Решение со счетчиком

const arrayCountries = [
  'Беларусь',
  'Бразилия',
  'Индия',
  'Италия',
  'Литва',
  'Япония',
  'Сомали',
  'Франция',
]

function generateListElement(array) {
  const listElement = document.createElement('ul')

  let i = 0
  setInterval(() => {
    if (i < array.length) {
      const listItemElement = createElement('li', array[i])
      listElement.append(listItemElement)
    }

    i++
  }, 1000)
  document.body.append(listElement)
}

generateListElement(arrayCountries)
