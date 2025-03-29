// JavaScript function to change the language
        function changeLanguage(lang) {
            const translations = {
                en: {
                    greeting: "Hello!",
                    intro: "My name is Rwobweats (or Rwob for short)! I am a beginner in HTML and in coding in general. I really like playing country quizzes like <a href='https://www.geoguessr.com/quiz/seterra'>Seterra</a>. I'm also a Roblox speedrunner.",
                    note1: "By the way, this website was intended to be seen on a computer, but it also works on mobile.",
                    note2: "And also, this page is open-source! Click <a href='https://github.com/rwobweats/rwobweats.github.io'>here</a> to view the code of the site.",
                    languageName: "English",
                },
                fr: {
                    greeting: "Bonjour!",
                    intro: "Je m'appelle Rwobweats (ou Rwob) ! Je suis débutant en HTML et en programmation en général. J'aime beaucoup jouer à des quiz sur les pays comme <a href='https://www.geoguessr.com/quiz/seterra'>Seterra</a>. Je suis aussi un speedrunner Roblox.",
                    note1: "Au fait, ce site web est conçu pour être vu sur un ordinateur, mais il fonctionne aussi sur mobile.",
                    note2: "Et aussi, cette page est open-source ! Cliquez <a href='https://github.com/rwobweats/rwobweats.github.io'>ici</a> pour voir le code du site.",
                    languageName: "Français",
                },
            };

            // Update the content based on the selected language
            document.getElementById('greeting').innerHTML = translations[lang].greeting;
            document.getElementById('intro').innerHTML = translations[lang].intro;
            document.getElementById('note1').innerHTML = translations[lang].note1;
            document.getElementById('note2').innerHTML = translations[lang].note2;
            document.querySelector('.dropdown-button').innerText = translations[lang].languageName;
        }
