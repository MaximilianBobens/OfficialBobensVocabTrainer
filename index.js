document.addEventListener("DOMContentLoaded", () => {
    const vocabulary = {
        1: [
            { german: "Selbsteinschätzung", english: "self-assessment" },
            { german: "einschätzen, beurteilen", english: "to assess" },
            { german: "Werte", english: "values" },
            { german: "Begabungen", english: "aptitudes" },
            { german: "Berater", english: "advisor" },
            { german: "Erforschung, Erkundung", english: "exploration" },
            { german: "Erforschen, erkunden", english: "to explore" },
            { german: "(Auswahl-) Möglichkeit", english: "option" },
            { german: "Berufs-", english: "occupational" },
            { german: "recherchieren, erforschen", english: "to research" },
            { german: "was verschiedene Berufe mit sich bringen", english: "what is involved in different professions" },
            { german: "aufgeschlossen bleiben", english: "to keep an open mind" },
            { german: "Das Ziel ist es zu", english: "The objective is to ..." },
            { german: "beurteilen, einschätzen", english: "to weigh up" },
            { german: "bewerten, prüfen", english: "to review" },
            { german: "handeln, etw. unternehmen", english: "to take action" },
            { german: "kurzfristige Ziele", english: "short-term goals" },
            { german: "langfristige Ziele", english: "long-term goals" },
            { german: "Erfahrung sammeln", english: "to gain experience" },
            { german: "erwerben", english: "to acquire" },
            { german: "Lebenslauf (AE)", english: "résumé" },
            { german: "ein Praktikum machen", english: "to do an internship" },
            { german: "billige Arbeitskraft", english: "cheap labour" },
            { german: "Ausbreitung, Ausuferung", english: "proliferation" },
            { german: "etwas behindern", english: "to hamper sth" },
            { german: "stärken, verfestigen", english: "to reinforce" },
            { german: "Stahlbeton", english: "reinforced concrete" },
            { german: "jemanden konkurrenzunfähig machen", english: "to price sb out of sth" },
            { german: "zunehmend beliebt", english: "increasingly popular" },
            { german: "oberflächlich betrachtet", english: "superficially" },
            { german: "eine Verpflichtung eingehen", english: "to make a commitment" },
            { german: "mögliche Neueinsteiger", english: "potential recruits" },
            { german: "anwerben", english: "to recruit" },
            { german: "eine realistische Alternative/Möglichkeit", english: "a viable option" },
            { german: "ohne die Notwendigkeit, etwas zu tun", english: "without the imperative to do sth" },
            { german: "unhaltbar, unvertretbar", english: "untenable" },
            { german: "unerreichbar", english: "out of reach" },
            { german: "erstrebenswert", english: "desirable" },
            { german: "eine Voraussetzung", english: "a requirement" },
            { german: "verbunden mit, in Verbindung mit", english: "associated with" },
            { german: "jemanden davon abhalten, etwas zu tun", english: "to prevent sb from doing sth" },
            { german: "werben für", english: "to advertise for" },
            { german: "Praktikant", english: "an intern" },
            { german: "feste Arbeitszeiten haben", english: "to have set working hours" },
            { german: "für jemanden wertvoll sein", english: "to be of value to sb" },
            { german: "das Recht auf etwas haben", english: "to be entitled to sth" },
            { german: "der Mindestlohn", english: "the minimum wage" },
            { german: "Hindernis", english: "obstacle" },
            { german: "Strafverfolgung", english: "prosecution" },
            { german: "Staatsanwalt", english: "public prosecutor" },
            { german: "Kläger", english: "prosecutor" },
            { german: "in Zusammenhang mit", english: "related to" },
            { german: "vollstrecken, durchführen", english: "to enforce sth" },
            { german: "hinter etwas stehen", english: "to back sth" },
            { german: "verbieten", english: "to ban" },
            { german: "etwas verlangen", english: "to call for sth" },
            { german: "durch Mundpropaganda", english: "through word of mouth" },
            { german: "durchführen", english: "to conduct" },
            { german: "eine feste Stelle", english: "a permanent position" },
            { german: "ein Gründer", english: "a founder" },
            { german: "ein Vorsitzender", english: "a chairman" },
            { german: "von der Leistung abhängig", english: "based on merit" },
            { german: "auf etwas zugreifen", english: "to access sth" },
            { german: "jemanden von etwas ausschließen", english: "to lock sb out of sth" },
            { german: "jemanden von etwas ausschließen", english: "to shut sb out of sth" },
            { german: "Menschen ohne Beziehungen/Verbindungen", english: "people without connections" },
            { german: "Akronym, Abkürzung", english: "acronym" },
            { german: "beherrschen, dominieren", english: "to dominate" },
            { german: "Befragte/r (im Interview)", english: "interviewee" },
            { german: "Medizintechnikerin", english: "medical engineer" },
            { german: "anpassen", english: "to adjust" },
            { german: "Rollstuhl", english: "wheelchair" },
            { german: "Missverständnis", english: "misunderstanding" },
            { german: "vorführen, beweisen", english: "to demonstrate" },
            { german: "Beobachtung, Überwachung", english: "observation" },
            { german: "Analyse", english: "analysis, pl. analyses" },
            { german: "unterrepräsentiert", english: "under-represented" },
            { german: "hart, schwer", english: "tough" },
            { german: "Bestandteil, Inhaltsstoff, Zutat", english: "ingredient" },
            { german: "Vielfalt", english: "diversity" },
            { german: "Führung, Führungsqualitäten", english: "leadership" },
            { german: "bewerten, beurteilen", english: "to evaluate" },
            { german: "zu jds. Verfügung", english: "at sb.'s disposal" },
            { german: "sich etw. ausdenken, sich etw. einfallen lassen", english: "to come up with sth." },
            { german: "fest, sicher", english: "firm" },
            { german: "verfolgen", english: "to pursue formal" },
            { german: "Befürchtung, Bedenken, Sorge", english: "concern" },
            { german: "Medikament(e), Medikation", english: "medication" },
            { german: "Puls, Herzschlagfrequenz", english: "heart rate" },
            { german: "bestehen aus", english: "to consist of" },
            { german: "Berufsaussichten, Aufstiegschancen", english: "career prospects pl." },
            { german: "Behinderung", english: "disability" },
            { german: "Maschinenbaufirma", english: "engineering company" },
            { german: "Kampagne", english: "campaign" },
            { german: "schließlich, schlussendlich", english: "eventually" },
            { german: "Zugänglichkeit", english: "accessibility" },
            { german: "Absolvent, Hochschulabsolvent", english: "a graduate" },
            { german: "übertragbar", english: "transferable" },
            { german: "sein Ziel verfolgen", english: "to pursue one's goal" },
            { german: "körperlich gesund", english: "able-bodied" },
            { german: "gründlich", english: "thoroughly" }
            // ... restliche Vokabeln
        ],
        2: [
            { german: "Guten Morgen", english: "Good Morning" },
            // Weitere Vokabeln für Unit 2
        ],
        3: [
            { german: "Ich möchte ein Zimmer buchen", english: "I would like to book a room" },
            // Weitere Vokabeln für Unit 3
        ]
    };

   
    let currentUnit = 1;
    let currentWordIndex = 0;
    let shuffledWords = [];

    const germanWordElement = document.getElementById("german-word");
    const englishWordElement = document.getElementById("english-word");
    const flipButton = document.getElementById("flip-button");
    const nextWordButton = document.getElementById("next-word");
    const shuffleButton = document.getElementById("shuffle-button");
    const unitSelect = document.getElementById("unit-select");
    const flashcard = document.getElementById("flashcard");
    const unitTitle = document.getElementById("unit-title");
    const progressElement = document.getElementById("progress");

    const navStudyModeLink = document.getElementById("study-mode-link");
    const navTestModeLink = document.getElementById("test-mode-link");
    const navDashboardLink = document.getElementById("dashboard-link");
    const studyModeDiv = document.getElementById("study-mode");
    const testModeDiv = document.getElementById("test-mode");
    const dashboardDiv = document.getElementById("dashboard");

    const testUnitSelect = document.getElementById("test-unit-select");
    const testForm = document.getElementById("test-form");
    const submitTestButton = document.getElementById("submit-test");
    const testResultDiv = document.getElementById("test-result");

    const testHistoryDiv = document.getElementById("test-history");

    // Anwendung initialisieren
    function init() {
        loadUnit(currentUnit);
        updateFlashcard();
        setupNavigation();
        showMode('study'); // Diese Zeile fügt den Standardmodus hinzu
        if (testUnitSelect) {
            loadTestUnit(parseInt(testUnitSelect.value, 10));
        }
    }

    // Laden der Vokabeln für die ausgewählte Einheit
    function loadUnit(unit) {
        currentUnit = unit;
        currentWordIndex = 0;
        shuffledWords = [...(vocabulary[currentUnit] || [])];
        shuffleArray(shuffledWords);
        const unitOption = unitSelect ? unitSelect.querySelector(`option[value="${unit}"]`) : null;
        const unitText = unitOption ? unitOption.textContent : `Unit ${unit}`;
        if (unitTitle) {
            unitTitle.textContent = unitText;
        }
        updateProgress();
    }

    // Mischen des Wörter-Arrays
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Aktualisieren des Flashcard-Inhalts
    function updateFlashcard() {
        if (!germanWordElement || !englishWordElement || !flashcard) return;

        const currentWord = shuffledWords[currentWordIndex];
        if (currentWord) {
            germanWordElement.textContent = currentWord.german;
            englishWordElement.textContent = currentWord.english;
            flashcard.classList.remove('flip');
        } else {
            germanWordElement.textContent = "Keine Wörter verfügbar.";
            englishWordElement.textContent = "";
        }
        updateProgress();
    }

    // Aktualisieren der Fortschrittsanzeige
    function updateProgress() {
        if (!progressElement) return;
        const totalWords = shuffledWords.length;
        const currentNumber = currentWordIndex + 1;
        progressElement.textContent = `Wort ${currentNumber} von ${totalWords}`;
    }

    // Event Listener für Lernmodus
    if (flipButton) {
        flipButton.addEventListener("click", () => {
            if (flashcard) {
                flashcard.classList.toggle("flip");
            }
        });
    }

    if (nextWordButton) {
        nextWordButton.addEventListener("click", () => {
            currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
            updateFlashcard();
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
            shuffleArray(shuffledWords);
            currentWordIndex = 0;
            updateFlashcard();
        });
    }

    if (unitSelect) {
        unitSelect.addEventListener("change", (event) => {
            loadUnit(parseInt(event.target.value, 10));
        });
    }

    // Navigation einrichten
    function setupNavigation() {
        if (navStudyModeLink) {
            navStudyModeLink.addEventListener("click", (e) => {
                e.preventDefault();
                showMode('study');
            });
        }

        if (navTestModeLink) {
            navTestModeLink.addEventListener("click", (e) => {
                e.preventDefault();
                showMode('test');
            });
        }

        if (navDashboardLink) {
            navDashboardLink.addEventListener("click", (e) => {
                e.preventDefault();
                showMode('dashboard');
                loadTestHistory();
            });
        }
    }

    function showMode(mode) {
        if (studyModeDiv) studyModeDiv.style.display = "none";
        if (testModeDiv) testModeDiv.style.display = "none";
        if (dashboardDiv) dashboardDiv.style.display = "none";

        if (navStudyModeLink) navStudyModeLink.classList.remove("active");
        if (navTestModeLink) navTestModeLink.classList.remove("active");
        if (navDashboardLink) navDashboardLink.classList.remove("active");

        if (mode === 'study') {
            if (studyModeDiv) studyModeDiv.style.display = "block";
            if (navStudyModeLink) navStudyModeLink.classList.add("active");
        } else if (mode === 'test') {
            if (testModeDiv) testModeDiv.style.display = "block";
            if (navTestModeLink) navTestModeLink.classList.add("active");
            if (testUnitSelect) {
                loadTestUnit(parseInt(testUnitSelect.value, 10));
            }
        } else if (mode === 'dashboard') {
            if (dashboardDiv) dashboardDiv.style.display = "block";
            if (navDashboardLink) navDashboardLink.classList.add("active");
            loadTestHistory();
        }
    }

    // Testmodus-Funktionen
    if (testUnitSelect) {
        testUnitSelect.addEventListener("change", (event) => {
            loadTestUnit(parseInt(event.target.value, 10));
        });
    }

    function loadTestUnit(unit) {
        const unitWords = [...(vocabulary[unit] || [])];
        shuffleArray(unitWords);
        const testWords = unitWords.slice(0, 10); // Erste 10 Wörter
        generateTestForm(testWords);
    }

    function generateTestForm(words) {
        if (!testForm) return;
        testForm.innerHTML = '';
        words.forEach((word, index) => {
            const div = document.createElement('div');
            div.classList.add('test-question');

            const label = document.createElement('label');
            label.textContent = `${index + 1}. ${word.german}`;

            const input = document.createElement('input');
            input.type = 'text';
            input.name = `question-${index}`;
            input.dataset.correctAnswer = word.english.toLowerCase();

            div.appendChild(label);
            div.appendChild(input);
            testForm.appendChild(div);
        });
        if (testResultDiv) testResultDiv.textContent = '';
    }

    if (submitTestButton) {
        submitTestButton.addEventListener('click', () => {
            if (!testForm || !testResultDiv) return;

            const inputs = testForm.querySelectorAll('input');
            let correctCount = 0;
            const testDetails = [];

            inputs.forEach(input => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = input.dataset.correctAnswer.trim().toLowerCase();
                const questionText = input.previousSibling.textContent;

                if (userAnswer === correctAnswer) {
                    correctCount++;
                    input.style.borderColor = 'green';
                } else {
                    input.style.borderColor = 'red';
                }

                testDetails.push({
                    question: questionText,
                    userAnswer: input.value.trim(),
                    correctAnswer: input.dataset.correctAnswer,
                    isCorrect: userAnswer === correctAnswer
                });
            });

            const testResult = {
                date: new Date().toLocaleString(),
                score: correctCount,
                total: inputs.length,
                details: testDetails
            };

            saveTestResult(testResult);
            testResultDiv.textContent = `Du hast ${correctCount} von ${inputs.length} korrekt beantwortet.`;
        });
    }

    // Testergebnisse speichern
    function saveTestResult(result) {
        const testHistory = JSON.parse(localStorage.getItem('testHistory')) || [];
        testHistory.push(result);
        localStorage.setItem('testHistory', JSON.stringify(testHistory));
    }

    // Dashboard-Funktionen
    function loadTestHistory() {
        if (!testHistoryDiv) return;
        testHistoryDiv.innerHTML = '';
        const testHistory = JSON.parse(localStorage.getItem('testHistory')) || [];

        if (testHistory.length === 0) {
            testHistoryDiv.textContent = "Keine Testergebnisse verfügbar.";
            return;
        }

        testHistory.forEach((test, index) => {
            const testEntry = document.createElement('div');
            testEntry.classList.add('test-entry');

            const testHeader = document.createElement('h3');
            testHeader.textContent = `Test ${index + 1} - ${test.date}`;
            testEntry.appendChild(testHeader);

            const testInfo = document.createElement('p');
            testInfo.textContent = `Ergebnis: ${test.score} von ${test.total}`;
            testEntry.appendChild(testInfo);

            const viewDetailsButton = document.createElement('button');
            viewDetailsButton.textContent = 'Details anzeigen';
            viewDetailsButton.addEventListener('click', () => {
                showTestDetails(test);
            });
            testEntry.appendChild(viewDetailsButton);

            testHistoryDiv.appendChild(testEntry);
        });
    }

    function showTestDetails(test) {
        const testDetailsDiv = document.createElement('div');
        testDetailsDiv.classList.add('test-details');

        test.details.forEach(item => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionText = document.createElement('p');
            questionText.textContent = item.question;
            questionDiv.appendChild(questionText);

            const userAnswer = document.createElement('p');
            userAnswer.textContent = `Deine Antwort: ${item.userAnswer || 'Keine Antwort'}`;
            userAnswer.classList.add(item.isCorrect ? 'correct' : 'incorrect');
            questionDiv.appendChild(userAnswer);

            if (!item.isCorrect) {
                const correctAnswer = document.createElement('p');
                correctAnswer.textContent = `Korrekte Antwort: ${item.correctAnswer}`;
                correctAnswer.classList.add('correct');
                questionDiv.appendChild(correctAnswer);
            }

            testDetailsDiv.appendChild(questionDiv);
        });

        // Modal anzeigen
        showModal(testDetailsDiv);
    }

    function showModal(content) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const closeModal = document.createElement('span');
        closeModal.classList.add('close-button');
        closeModal.textContent = '×';
        closeModal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modalContent.appendChild(closeModal);
        modalContent.appendChild(content);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    // Anwendung initialisieren beim Laden der Seite
    init();
});