const translations = {
    en: {
        school: [
            "What do you want to study in university?",
            "Who was your most memorable teacher?",
            "What's your best school memory?",
            "What's the most valuable lesson you learned in school?",
            "What school tradition do you miss the most?"
        ],
        hobbies: [
            "What hobby would you like to master?",
            "What's a hobby you've always wanted to try?",
            "Which of your hobbies makes you lose track of time?",
            "What hobby has taught you the most?",
            "What's the most unique hobby you've heard of?"
        ],
        memories: [
            "What's your earliest memory?",
            "What's your happiest childhood memory?",
            "What's a memory that always makes you laugh?",
            "What's your most treasured family memory?",
            "What's a small moment you'll never forget?"
        ],
        obstacles: [
            "What's the biggest challenge you've overcome?",
            "What's a skill you struggled to learn?",
            "What's an obstacle you're proud of conquering?",
            "What's a fear you've faced?",
            "What's a challenge that made you stronger?"
        ]
    },
    nl: {
        school: [
            "Wat wil je studeren aan de universiteit?",
            "Wie was je meest memorabele leraar?",
            "Wat is je beste schoolherinnering?",
            "Wat is de waardevolste les die je op school hebt geleerd?",
            "Welke schooltraditie mis je het meest?"
        ],
        hobbies: [
            "Welke hobby zou je graag willen beheersen?",
            "Wat is een hobby die je altijd al hebt willen proberen?",
            "Welke van je hobby's laat je de tijd vergeten?",
            "Welke hobby heeft je het meeste geleerd?",
            "Wat is de meest unieke hobby die je ooit hebt gehoord?"
        ],
        memories: [
            "Wat is je vroegste herinnering?",
            "Wat is je gelukkigste jeugdherinnering?",
            "Wat is een herinnering die je altijd aan het lachen maakt?",
            "Wat is je meest gekoesterde familieherinnering?",
            "Wat is een klein moment dat je nooit zult vergeten?"
        ],
        obstacles: [
            "Wat is de grootste uitdaging die je hebt overwonnen?",
            "Welke vaardigheid vond je moeilijk om te leren?",
            "Wat is een obstakel dat je trots hebt overwonnen?",
            "Welke angst heb je overwonnen?",
            "Wat is een uitdaging die je sterker heeft gemaakt?"
        ]
    }
};

let currentLanguage = "nl"; // Default language
let currentCategory = "hobbies";

function setLanguage(language) {
    currentLanguage = language;
    updatePrompts();
}

function getTranslation(category) {
    return translations[currentLanguage][category];
}

function updatePrompts() {
    const categoryPrompts = getTranslation(currentCategory);
    document.getElementById("center-box").textContent = categoryPrompts[0];
}

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.id.split("-")[0];
        updatePrompts();
    });
});

// Initialize with default language
updatePrompts();
