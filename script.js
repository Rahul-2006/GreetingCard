document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const message = document.getElementById('GreetingMessage');
    const gif = document.getElementById('loadingGif');

    // Show the gif
    gif.classList.remove('hidden');

    // Setting delay for loadign greeting msg
    setTimeout(function() {
        if (name) {
            message.textContent = `Dear ${name},\n\nMay the victory of good over evil bring peace and happiness to your life. Have a wonderful Dussehra celebration!`;
            message.classList.remove('hidden');
        } else {
            message.textContent = 'Please enter your name to receive a greeting msg.';
            message.classList.remove('hidden');
        }
    }, 2000); // Adjust delay as needed
});
