const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = value => {
    const text = value;

    if(value === ''){
        alert("Please input a value");
    }

    resultDiv.replaceChildren();

    const lowerCaseInput = value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let answer = `<strong>${text}</strong>
    ${lowerCaseInput === [...lowerCaseInput].reverse().join("")? 'is': 'is not'}
    a palindrome.`;
    
    const paragraph = document.createElement("p");
    paragraph.className = 'user-input';
    paragraph.innerHTML = answer;
    resultDiv.appendChild(paragraph);

    resultDiv.classList.remove('hidden');
};

checkButton.addEventListener("click", ()=>{
    checkPalindrome(inputText.value);
    inputText.value = '';
});

inputText.addEventListener("keydown", e=>{
    if(e.key === "Enter"){
        checkPalindrome(inputText.value);
        inputText.value = '';
    }
})