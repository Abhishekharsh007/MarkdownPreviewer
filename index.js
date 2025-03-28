const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('output-id');
const displayOutput = document.getElementById('display-content')

// We are converting input text to html element
// So that we can display output with good format
const markdownRender = (inputElement) => {
    return inputElement.replace(/^# (.*$)/gim, '<h1>$1</h1>')
                       .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                       .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                       .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                       .replace(/\*(.*)\*/gim, '<i>$1</i>')
                       .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
                       .replace(/$/gim, '<br>')
                       .replace(/^[\-] (.*)$/gim, '<li>$1</li>')
}

// We are taking written value from textarea which is at left side
// So that we can display output in markdown preview which is at right side
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    displayOutput.innerHTML = markdownRender(markdownText);
})
