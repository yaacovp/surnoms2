const nicknameForm = document.getElementById("nickname-form");
const resultDiv = document.getElementById("result");

const funnyWordsMale = [
    "est nul",
    "est fort💪",
    "est méchant🫥",
    "est débile👎",
    "est con😒",
    "est intelligent🧠",
    "est beau😍",
    "est incroyable🤩",
    "est soulant😮‍💨",
    "est stupide🧐",
    "n'est pas futé😅"
];

const funnyWordsFemale = [
    "est nulle",
    "est forte💪",
    "est mechante🫥",
    "est debile👎",
    "est conne😒",
    "est inteligente🧠",
    "est belle😍",
    "est incroyable🤩",
    "est soulante😮‍💨",
    "est stupide🧐",
    "n'est pas fute fute😅"
   
];

function generateNickname(name, gender) {
    let randomWord;
    if (gender === "male") {
        randomWord = funnyWordsMale[Math.floor(Math.random() * funnyWordsMale.length)];
    } else if (gender === "female") {
        randomWord = funnyWordsFemale[Math.floor(Math.random() * funnyWordsFemale.length)];
    } else {
        // If gender is not specified or invalid, use a general funny word list
        const allFunnyWords = [...funnyWordsMale, ...funnyWordsFemale];
        randomWord = allFunnyWords[Math.floor(Math.random() * allFunnyWords.length)];
    }
    return `${name} ${randomWord}`;
}

nicknameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (name === "") {
        return;
    }

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null;

    const nickname = generateNickname(name, gender);
    resultDiv.textContent = `Votre surnom absurde est : ${nickname}`;
});
