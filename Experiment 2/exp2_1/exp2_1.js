const textarea = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    
    charCount.textContent = currentLength;

    if (currentLength >= 150) {
        charCount.classList.add('limit-reached');
    } else {
        charCount.classList.remove('limit-reached');
    }

});
