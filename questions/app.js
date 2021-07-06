// one way
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })


// second way
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {
        // check
        questions.forEach(function(q) {
            if (q !== question) {
                q.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
})