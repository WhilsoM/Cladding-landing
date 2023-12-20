const lineElem = document.querySelectorAll('.elem__line-elem')
let clickCounts = [0, 0, 0, 0]

lineElem.forEach(function (elem, index) {
	elem.addEventListener('click', function () {
		clickCounts[index]++

		if (clickCounts[index] % 2 === 1) {
			// Нечетное количество кликов, добавляем класс 'active'
			elem.classList.add('active')
		} else {
			// Четное количество кликов, удаляем класс 'active'
			elem.classList.remove('active')
		}
	})
})

// модальное окно

function submitForm() {
	document.getElementById('overlay').style.display = 'block'

	document.getElementById('modal').style.display = 'block'
}

function closeModal() {
	document.getElementById('overlay').style.display = 'none'
	document.getElementById('modal').style.display = 'none'
}
