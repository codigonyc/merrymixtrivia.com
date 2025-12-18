// Quiz Data - Placeholder content
const quizData = [
    {
        question: "According to a popular internet theory, what are the people in Paul McCartney's \"Wonderful Christmastime,\" doing?",
        answers: [
            "Baking cookies",
            "Drinking at the pub",
            "Practicing witchcraft",
            "Carolling"
        ],
        correctAnswer: 2, // Index of correct answer (0-based)
        icon: 'sq_icon_q1_witchcraft.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Practicing witchcraft. The fan theory suggests that the song is about a group of friends performing a pagan ritual in the back room of a party. The opening lines, \"The mood is right, the spirit's up, we're here tonight, and that's enough,\" evoke setting up a spell. When they're interrupted by an outside reveler, they insist they're \"simply having a wonderful Christmastime.\"",
            incorrect: "Practicing witchcraft. The fan theory suggests that the song is about a group of friends performing a pagan ritual in the back room of a party. The opening lines, \"The mood is right, the spirit's up, we're here tonight, and that's enough,\" evoke setting up a spell. When they're interrupted by an outside reveler, they insist they're \"simply having a wonderful Christmastime.\""
        }
    },
    {
        question: "In Adam Sandler's original version of \"The Chanukah Song,\" what celebrity is NOT referenced?",
        answers: [
            "James Caan",
            "Arthur Fonzarelli",
            "Lenny Bruce",
            "Ann Landers"
        ],
        correctAnswer: 2,
        icon: 'sq_icon_q2_menorah.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Lenny Bruce. Sandler has said that he created \"The Chanukah Song\" for *Saturday Night Live* in 1994 because there were plenty of Christmas songs but almost no mainstream Chanukah songs; He wanted something silly and joyful that Jewish kids could relate to. Over the years, Sandler has updated the lyrics with new pop culture references to stay relevant.",
            incorrect: "Lenny Bruce. Sandler has said that he created \"The Chanukah Song\" for *Saturday Night Live* in 1994 because there were plenty of Christmas songs but almost no mainstream Chanukah songs; He wanted something silly and joyful that Jewish kids could relate to. Over the years, Sandler has updated the lyrics with new pop culture references to stay relevant."
        }
    },
    {
        question: "What holiday song is (mostly) anti-Christmas?",
        answers: [
            { text: "Christmas Rappin'", subtitle: "by Kurtis Blow" },
            { text: "Christmas Wrapping", subtitle: "by The Waitresses" },
            { text: "Christmas in Hollis", subtitle: "by Run-DMC" },
            { text: "Christmas Day", subtitle: "by Squeeze" }
        ],
        correctAnswer: 1, // Index of correct answer (0-based) - "Christmas Wrapping"
        icon: 'sq_icon_q3_gift.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "\"Christmas Wrapping\" by the Waitresses. Songwriter Chris Butler disliked Christmas and was reluctant when his label asked for a holiday track: \"Everyone I knew in New York was running around like a bunch of fiends. It wasn't about joy. It was something to cope with.\" During a hot New York summer, he made the song something of an anti-Christmas assignment that ironically turned into an enduring smash hit.",
            incorrect: "\"Christmas Wrapping\" by the Waitresses. Songwriter Chris Butler disliked Christmas and was reluctant when his label asked for a holiday track: \"Everyone I knew in New York was running around like a bunch of fiends. It wasn't about joy. It was something to cope with.\" During a hot New York summer, he made the song something of an anti-Christmas assignment that ironically turned into an enduring smash hit."
        }
    },
    {
        question: "What song captures the morning-after fog of a wild New Year's Eve party?",
        answers: [
            { text: "Same Old Lang Syne", subtitle: "by Dan Fogelberg" },
            { text: "Funky New Year", subtitle: "by The Eagles" },
            { text: "New Year's Eve", subtitle: "by Snoop Dog" },
            { text: "New Year's Day", subtitle: "by U2" }
        ],
        correctAnswer: 1, // Index of correct answer (0-based) - "Funky New Year"
        icon: 'sq_icon_q4_eagle.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "\"Funky New Year\" by The Eagles. The song humorously captures the hazy aftermath of New Year's Eve revelry, full of regret and hangovers: \"Can't remember when I ever felt worse / Nothing matters and everything hurts / They were passin' round the bottle, made me feel brand new / Trouble with the new man he wants a hit too.\"",
            incorrect: "\"Funky New Year\" by The Eagles. The song humorously captures the hazy aftermath of New Year's Eve revelry, full of regret and hangovers: \"Can't remember when I ever felt worse / Nothing matters and everything hurts / They were passin' round the bottle, made me feel brand new / Trouble with the new man he wants a hit too.\""
        }
    },
    {
        question: "How many Christmas songs are featured on the *Love Actually* soundtrack?",
        answers: [
            "3",
            "5",
            "8",
            "10"
        ],
        correctAnswer: 0, // Index of correct answer (0-based) - "3"
        icon: 'sq_icon_q5_three.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "It's three. Despite hailing as one of the most famous Christmas movies of all time, *Love Actually* features only a handful of explicitly Christmas-themed songs: \"Christmas is All Around,\" the spoof single sung by Bill Nighy; the indomitable, \"All I Want for Christmas is You,\" by Mariah Carey; and Otis Redding's version of \"White Christmas.\"",
            incorrect: "It's three. Despite hailing as one of the most famous Christmas movies of all time, *Love Actually* features only a handful of explicitly Christmas-themed songs: \"Christmas is All Around,\" the spoof single sung by Bill Nighy; the indomitable, \"All I Want for Christmas is You,\" by Mariah Carey; and Otis Redding's version of \"White Christmas.\""
        }
    },
    {
        question: "What Queen Latifah song is associated with Kwanzaa?",
        answers: [
            "Dance for Me",
            "You Can't Stop the Beat",
            "I Know Where I've Been",
            "U.N.I.T.Y."
        ],
        correctAnswer: 3, // Index of correct answer (0-based) - "U.N.I.T.Y."
        icon: 'sq_icon_q6_queen.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "\"U.N.I.T.Y.\" Queen Latifah's iconic song is strongly associated with Umoja, the first principle of Kwanzaa. The Swahili word means, \"unity,\" emphasizing efforts to strive for and maintain togetherness in the family and community. On December 26, the first day of Kwanzaa, families light the central black candle on the kinara and reflect on strengthening bonds of love and support.",
            incorrect: "\"U.N.I.T.Y.\" Queen Latifah's iconic song is strongly associated with Umoja, the first principle of Kwanzaa. The Swahili word means, \"unity,\" emphasizing efforts to strive for and maintain togetherness in the family and community. On December 26, the first day of Kwanzaa, families light the central black candle on the kinara and reflect on strengthening bonds of love and support."
        }
    },
    {
        question: "In 1970, José Feliciano wrote \"Feliz Navidad\" in what city?",
        answers: [
            "San Juan",
            "New York",
            "Los Angeles",
            "Tijuana"
        ],
        correctAnswer: 2, // Index of correct answer (0-based) - "Los Angeles"
        icon: 'sq_icon_q7_LA.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Los Angeles. While the Puerto Rican singer was recording covers of \"Silent Night\" and \"The Little Drummer Boy\" for a self-titled Christmas album, he felt homesick for his family's Christmas traditions. While on a short break at the studio, he penned \"Feliz Navidad\" in just 10 minutes. The song contains only 19 words across both English and Spanish, making it easy for listeners around the world to sing along.",
            incorrect: "Los Angeles. While the Puerto Rican singer was recording covers of \"Silent Night\" and \"The Little Drummer Boy\" for a self-titled Christmas album, he felt homesick for his family's Christmas traditions. While on a short break at the studio, he penned \"Feliz Navidad\" in just 10 minutes. The song contains only 19 words across both English and Spanish, making it easy for listeners around the world to sing along."
        }
    },
    {
        question: "In the 1965 special, *A Charlie Brown Christmas*, what instrument does Snoopy play as the Peanuts dance to \"Linus & Lucy?\"",
        answers: [
            "Piano",
            "Drums",
            "Guitar",
            "None, he just dances"
        ],
        correctAnswer: 2, // Index of correct answer (0-based) - "Guitar"
        icon: 'sq_icon_q8_guitar.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Guitar. Snoopy is featured playing the electric guitar alongside Schroder and Pig Pen, who play piano and upright bass, respectively. The *Charlie Brown Christmas* soundtrack was miraculously written and recorded in late 1965 in just six weeks. It featured a children's choir and only three musicians: Vince Guaraldi on piano, Fred Marshall on bass, and Jerry Granelli on drums.",
            incorrect: "Guitar. Snoopy is featured playing the electric guitar alongside Schroder and Pig Pen, who play piano and upright bass, respectively. The *Charlie Brown Christmas* soundtrack was miraculously written and recorded in late 1965 in just six weeks. It featured a children's choir and only three musicians: Vince Guaraldi on piano, Fred Marshall on bass, and Jerry Granelli on drums."
        }
    },
    {
        question: "\"Ma'oz Tzur\" has been sung to many melodies over the centuries, including modern interpretations by Sufjan Stevens and The Maccabeats. What is the English translation of the Hebrew expression?",
        answers: [
            "Rock of ages",
            "Peace be upon you",
            "Happy holidays",
            "Complete recovery"
        ],
        correctAnswer: 0, // Index of correct answer (0-based) - "Rock of ages"
        icon: 'sq_icon_q9_rock.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Rock of ages. \"Ma'oz Tzur\" is the opening phrase of a traditional Chanukah hymn that praises God as a metaphorical stronghold who rescued the Jewish people through various historical struggles. The song is often sung after lighting the menorah.",
            incorrect: "Rock of ages. \"Ma'oz Tzur\" is the opening phrase of a traditional Chanukah hymn that praises God as a metaphorical stronghold who rescued the Jewish people through various historical struggles. The song is often sung after lighting the menorah."
        }
    },
    {
        question: "In, \"Let it Snow! Let it Snow! Let it Snow!\" what treat does Frank Sinatra have on hand?",
        answers: [
            "Hot cocoa",
            "Popcorn",
            "Eggnog",
            "Roasted chestnuts"
        ],
        correctAnswer: 1, // Index of correct answer (0-based) - "Popcorn"
        icon: 'sq_icon_q10_popcorn.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "Popcorn. (\"It doesn't show signs of stopping / And I brought some corn for popping.\") Lyricist Sammy Cahn and composer Jule Styne wrote the song in July 1945 amid a scorching Southern California heatwave, but the song didn't become iconic until Sinatra's version was released in 1950.",
            incorrect: "Popcorn. (\"It doesn't show signs of stopping / And I brought some corn for popping.\") Lyricist Sammy Cahn and composer Jule Styne wrote the song in July 1945 amid a scorching Southern California heatwave, but the song didn't become iconic until Sinatra's version was released in 1950."
        }
    },
    {
        question: "Which of the following holiday songs were NOT released in 2025?",
        answers: [
            { text: "Shake the Snow Globe", subtitle: "by Gwen Stafani" },
            { text: "SANTA", subtitle: "by Thalia" },
            { text: "Gifts for Me", subtitle: "by Meghan Trainor" },
            { text: "A Nonsense Christmas", subtitle: "by Sabrina Carpenter" }
        ],
        correctAnswer: 3, // Index of correct answer (0-based) - "A Nonsense Christmas"
        icon: 'sq_icon_q11_treeHearts.svg', // Icon image file name for this question's feedback
        feedback: {
            correct: "\"A Nonsense Christmas\" by Sabrina Carpenter. The song was released in 2024. While Billboard highlighted dozens of fresh holiday tracks in 2025, none have displaced perennial hits on major charts as of mid-December. It's hard to break through the algorithm when the nostalgic staples prevail!",
            incorrect: "\"A Nonsense Christmas\" by Sabrina Carpenter. The song was released in 2024. While Billboard highlighted dozens of fresh holiday tracks in 2025, none have displaced perennial hits on major charts as of mid-December. It's hard to break through the algorithm when the nostalgic staples prevail!"
        }
    }
];

// User answers tracking
const userAnswers = new Array(quizData.length).fill(null);

// Preload feedback icons (and a couple of UI icons) to reduce first-reveal lag
const _preloadedImages = [];
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
        _preloadedImages.push(img);
    });
}

function preloadQuizAssets() {
    const iconUrls = new Set();
    quizData.forEach(q => {
        if (q.icon) iconUrls.add(`assets/${q.icon}`);
    });

    // These are used by answer buttons and may also benefit from preloading
    iconUrls.add('assets/icon-checkmark.svg');
    iconUrls.add('assets/icon-x.svg');

    preloadImages([...iconUrls]);
}

// Initialize quiz
function initQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    
    quizData.forEach((questionData, questionIndex) => {
        // Create question section
        const questionSection = document.createElement('div');
        questionSection.className = 'question-section';
        questionSection.id = `question-${questionIndex}`;
        
        // Question number and text
        const questionNumber = document.createElement('div');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `QUESTION ${questionIndex + 1}`;
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.innerHTML = formatFeedbackText(questionData.question);
        
        // Answers container
        const answersContainer = document.createElement('div');
        answersContainer.className = 'answers-container';
        
        // Create answer buttons
        questionData.answers.forEach((answer, answerIndex) => {
            const answerButton = document.createElement('button');
            answerButton.className = 'answer-button';
            
            // Check if answer is an object with text and subtitle, or just a string
            if (typeof answer === 'object' && answer.text) {
                const answerText = document.createElement('div');
                answerText.className = 'answer-text';
                const mainText = document.createElement('span');
                mainText.className = 'answer-main-text';
                mainText.textContent = answer.text;
                answerText.appendChild(mainText);
                
                if (answer.subtitle) {
                    const subtitle = document.createElement('span');
                    subtitle.className = 'answer-subtitle';
                    subtitle.textContent = answer.subtitle;
                    answerText.appendChild(subtitle);
                }
                
                answerButton.appendChild(answerText);
            } else {
                // Simple string answer
                answerButton.textContent = answer;
            }
            
            answerButton.dataset.questionIndex = questionIndex;
            answerButton.dataset.answerIndex = answerIndex;
            answerButton.addEventListener('click', () => handleAnswerClick(questionIndex, answerIndex));
            answersContainer.appendChild(answerButton);
        });
        
        // Feedback section
        const feedbackSection = document.createElement('div');
        feedbackSection.className = 'feedback-section';
        feedbackSection.id = `feedback-${questionIndex}`;
        
        // Feedback header (icon + title in flex row)
        const feedbackHeader = document.createElement('div');
        feedbackHeader.className = 'feedback-header';
        
        const feedbackIcon = document.createElement('div');
        feedbackIcon.className = 'feedback-icon';
        const iconFrame = document.createElement('div');
        iconFrame.className = 'icon-frame';
        iconFrame.id = `icon-frame-${questionIndex}`;
        feedbackIcon.appendChild(iconFrame);
        
        const feedbackTitle = document.createElement('div');
        feedbackTitle.className = 'feedback-title';
        feedbackTitle.id = `feedback-title-${questionIndex}`;
        
        feedbackHeader.appendChild(feedbackIcon);
        feedbackHeader.appendChild(feedbackTitle);
        
        // Feedback text (separate div below)
        const feedbackText = document.createElement('div');
        feedbackText.className = 'feedback-text';
        feedbackText.id = `feedback-text-${questionIndex}`;
        
        feedbackSection.appendChild(feedbackHeader);
        feedbackSection.appendChild(feedbackText);
        
        // Assemble question section
        questionSection.appendChild(questionNumber);
        questionSection.appendChild(questionText);
        questionSection.appendChild(answersContainer);
        questionSection.appendChild(feedbackSection);
        
        // Add divider before each question (except first)
        if (questionIndex > 0) {
            const divider = document.createElement('div');
            divider.className = 'divider';
            quizContainer.appendChild(divider);
        }
        
        quizContainer.appendChild(questionSection);
    });
}

// Handle answer click
function handleAnswerClick(questionIndex, answerIndex) {
    // Don't allow changing answers once selected
    if (userAnswers[questionIndex] !== null) {
        return;
    }
    
    const questionData = quizData[questionIndex];
    const isCorrect = answerIndex === questionData.correctAnswer;
    
    // Store user's answer
    userAnswers[questionIndex] = answerIndex;
    
    // Get all answer buttons for this question
    const questionSection = document.getElementById(`question-${questionIndex}`);
    const answerButtons = questionSection.querySelectorAll('.answer-button');
    
    // Disable all buttons for this question
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Style the selected button
    const selectedButton = answerButtons[answerIndex];
    if (isCorrect) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        // Also highlight the correct answer
        const correctButton = answerButtons[questionData.correctAnswer];
        correctButton.classList.add('correct');
    }
    
    // Show feedback
    showFeedback(questionIndex, isCorrect);
    
    // Track answer click in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'answer_clicked', {
            'event_category': 'Quiz',
            'event_label': `Question ${questionIndex + 1}`,
            'question_number': questionIndex + 1,
            'is_correct': isCorrect,
            'answer_index': answerIndex
        });
    }
    
    // Check if all questions are answered
    checkAllAnswered();
}

// Helper function to convert markdown-style italics (*text*) to HTML italics
function formatFeedbackText(text) {
    // Replace *text* with <em>text</em>
    return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

// Show feedback for a question
function showFeedback(questionIndex, isCorrect) {
    const feedbackSection = document.getElementById(`feedback-${questionIndex}`);
    const feedbackTitle = document.getElementById(`feedback-title-${questionIndex}`);
    const feedbackText = document.getElementById(`feedback-text-${questionIndex}`);
    const iconFrame = document.getElementById(`icon-frame-${questionIndex}`);
    const questionData = quizData[questionIndex];
    
    // Set icon class
    iconFrame.className = `icon-frame ${isCorrect ? 'correct-icon' : 'incorrect-icon'}`;
    
    // Set custom icon image if provided in question data
    if (questionData.icon) {
        iconFrame.style.setProperty('--custom-icon', `url('assets/${questionData.icon}')`);
    }
    
    // Set feedback title
    feedbackTitle.textContent = isCorrect ? 'Correct.' : 'Incorrect.';
    feedbackTitle.className = `feedback-title ${isCorrect ? 'correct' : 'incorrect'}`;
    
    // Set feedback text with HTML formatting for italics
    const feedbackContent = isCorrect ? questionData.feedback.correct : questionData.feedback.incorrect;
    feedbackText.innerHTML = formatFeedbackText(feedbackContent);
    
    // Show feedback section
    feedbackSection.classList.add('show');
}

// Check if all questions are answered
function checkAllAnswered() {
    const allAnswered = userAnswers.every(answer => answer !== null);
    
    if (allAnswered) {
        showFinalScore();
    }
}

// Calculate and show final score
function showFinalScore() {
    let correctCount = 0;
    
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === quizData[index].correctAnswer) {
            correctCount++;
        }
    });
    
    const scoreSection = document.getElementById('scoreSection');
    const scoreHeading = document.getElementById('scoreHeading');
    const scoreSubheading = document.getElementById('scoreSubheading');
    const scoreMessage = document.getElementById('scoreMessage');
    const scoreIllustration = document.getElementById('scoreIllustration');
    
    // Determine message, illustration, and heading based on score
    let heading = '';
    let subheading = '';
    let message = '';
    let illustration = '';
    
    if (correctCount === 11) {
        // Perfect score (11 correct)
        heading = 'YOU GOT 11 CORRECT!';
        subheading = 'Way to sleigh!';
        message = 'You are Mariah Carey\'s spirit animal. Go forth and spread cheer!';
        illustration = 'assets/score-11-sleigh.svg';
    } else if (correctCount >= 8) {
        // Great score (8-10 correct)
        heading = `YOU GOT ${correctCount} CORRECT!`;
        subheading = 'Way to light it up.';
        message = 'Keep playing those tunes and stay bright.';
        illustration = 'assets/score-8-10-candles.svg';
    } else if (correctCount >= 5) {
        // Good score (5-7 correct)
        heading = `YOU GOT ${correctCount} CORRECT!`;
        subheading = 'You\'re getting warmer.';
        message = 'There\'s still time to reach the top of the holiday pops. Now turn up those tunes and get rockin!';
        illustration = 'assets/score-5-7-fireplace.svg';
    } else {
        // Lower score (0-4 correct)
        heading = `YOU GOT ${correctCount} CORRECT!`;
        subheading = 'Holidays aren\'t your jam?';
        message = 'We get it. Have an extra hot toddy on us.';
        illustration = 'assets/score-0-4-teacup.svg';
    }
    
    scoreHeading.textContent = heading;
    scoreSubheading.textContent = subheading;
    scoreMessage.textContent = message;
    
    // Set and show illustration
    if (illustration) {
        scoreIllustration.src = illustration;
        scoreIllustration.style.display = 'block';
    }
    
    // Show score section
    scoreSection.style.display = 'block';
    
    // Track quiz completion in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_completed', {
            'event_category': 'Quiz',
            'event_label': 'All Questions Answered',
            'total_questions': quizData.length,
            'correct_answers': correctCount,
            'score_percentage': Math.round((correctCount / quizData.length) * 100)
        });
    }
    
    // Scroll to score section
    scoreSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Test function - Automatically answer questions with a target number of correct answers
// Usage: testQuiz(7) - will get 7 questions correct
// Usage: testQuiz(11) - will get all 11 questions correct
// Usage: testQuiz(0) - will get 0 questions correct
function testQuiz(targetCorrect) {
    // Validate input
    if (targetCorrect < 0 || targetCorrect > quizData.length) {
        console.error(`Target must be between 0 and ${quizData.length}`);
        return;
    }
    
    // Reset user answers
    userAnswers.fill(null);
    
    // Create array of question indices
    const questionIndices = Array.from({ length: quizData.length }, (_, i) => i);
    
    // Randomly select which questions to get correct
    const correctIndices = [];
    const incorrectIndices = [];
    
    // Shuffle array for randomness
    for (let i = questionIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionIndices[i], questionIndices[j]] = [questionIndices[j], questionIndices[i]];
    }
    
    // Assign correct and incorrect questions
    for (let i = 0; i < questionIndices.length; i++) {
        if (i < targetCorrect) {
            correctIndices.push(questionIndices[i]);
        } else {
            incorrectIndices.push(questionIndices[i]);
        }
    }
    
    // Answer all questions
    correctIndices.forEach(questionIndex => {
        const correctAnswer = quizData[questionIndex].correctAnswer;
        handleAnswerClick(questionIndex, correctAnswer);
    });
    
    incorrectIndices.forEach(questionIndex => {
        const correctAnswer = quizData[questionIndex].correctAnswer;
        // Find a wrong answer (not the correct one)
        const wrongAnswer = (correctAnswer + 1) % quizData[questionIndex].answers.length;
        handleAnswerClick(questionIndex, wrongAnswer);
    });
    
    console.log(`Test completed: ${targetCorrect} correct out of ${quizData.length} questions`);
}

// Reset quiz function - clears all answers and resets the quiz
function resetQuiz() {
    // Clear user answers
    userAnswers.fill(null);
    
    // Reload the page to reset everything
    location.reload();
}

// Make functions available globally for console access
window.testQuiz = testQuiz;
window.resetQuiz = resetQuiz;

// Initialize quiz when page loads
// Start preloading as early as possible (main.js is loaded at the end of <body>)
preloadQuizAssets();
document.addEventListener('DOMContentLoaded', initQuiz);

