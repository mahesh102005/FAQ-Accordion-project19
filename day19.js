const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the active class
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Close other open answers
        questions.forEach(q => {
            if (q !== question && q.nextElementSibling.style.display === 'block') {
                q.nextElementSibling.style.display = 'none';
            }
        });
    });
});
