//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
    const btn = document.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            } else {
                
            }
        });
        question.classList.toggle('show-text');     
    });
});




// traversing the dom
// const buttons = document.querySelectorAll('.question-btn');
// buttons.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });