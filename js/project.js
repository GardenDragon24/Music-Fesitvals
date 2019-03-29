const myHome = document.getElementById('myHome');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput')

myButton.addEventListener('click', () => {
    myHome.style.color = myTextInput.value;
});