const translations = {
    en: {
        school: ["What do you want to study in university?", "Who was your most memorable teacher?"],
        hobbies: ["What hobby would you like to master?", "What hobby have you always wanted to try?"],
        memories: ["What's your earliest memory?", "What's your happiest memory?"],
        obstacles: ["What's the biggest challenge you've overcome?", "What skill was hardest to learn?"]
    },
    nl: {
        school: ["Wat wil je studeren aan de universiteit?", "Wie was je meest memorabele leraar?"],
        hobbies: ["Welke hobby wil je beheersen?", "Welke hobby wil je altijd proberen?"],
        memories: ["Wat is je vroegste herinnering?", "Wat is je gelukkigste herinnering?"],
        obstacles: ["Wat is de grootste uitdaging die je hebt overwonnen?", "Welke vaardigheid was het moeilijkst te leren?"]
    }
};

let currentLanguage = "en";
let currentCategory = "hobbies";
let currentPromptIndex = 0;

function setLanguage(language) {
    currentLanguage = language;
    updatePrompts();
}

function getRandomPrompt(category, exclude) {
    const categoryPrompts = translations[currentLanguage][category];
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * categoryPrompts.length);
    } while (newIndex === exclude);
    return { text: categoryPrompts[newIndex], index: newIndex };
}

function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 }
    });
}

function updatePrompts() {
    const { text: centerText, index: newIndex } = getRandomPrompt(currentCategory, currentPromptIndex);
    const { text: leftText } = getRandomPrompt(currentCategory, newIndex);
    const { text: rightText } = getRandomPrompt(currentCategory, newIndex);

    document.getElementById("center-box").textContent = centerText;
    document.getElementById("left-box").textContent = leftText;
    document.getElementById("right-box").textContent = rightText;

    currentPromptIndex = newIndex;

    fireConfetti();
}

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.id.split("-")[0];
        updatePrompts();
    });
});

document.getElementById("spin-button").addEventListener("click", updatePrompts);
updatePrompts();