const itemHead = document.querySelectorAll('.item__head');
// const popUpParent = document.querySelector('.pop-up__menu');

// console.log(popUpItem);

// popUpItem.addEventListener("click", function(e) {
//     popUpItem.classList.toggle("_open");
//     console.log(popUpItem);
// });

// popUpParent.addEventListener("click", function(event) {
// 	// Проверяем, что кликнули по кнопке или ее потомку
// 	if (event.target.closest('_open')) {
// 		console.log("rkbr");
// 	}
// });
// TODO Сделать норм скирипт
// popUpItem.forEach(popUp => {
//     popUp.addEventListener("click", console.log("asd"));
// });completion

itemHead.forEach(headBtn => {
    headBtn.addEventListener("click", () => {
        headBtn.parentElement.classList.toggle("_open");
    });
});