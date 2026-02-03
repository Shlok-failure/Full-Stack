// Get references to the elements
const textarea = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');

// Add an event listener for user input
textarea.addEventListener('input', () => {
    // 1. Get current length of text
    const currentLength = textarea.value.length;
    
    // 2. Update the number in the HTML
    charCount.textContent = currentLength;

    // 3. Add visual feedback if limit is reached
    if (currentLength >= 150) {
        charCount.classList.add('limit-reached');
    } else {
        charCount.classList.remove('limit-reached');
    }
});