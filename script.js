'use strict'

const qAndA = {
    questions: [
        // Greek Mythology
        'What is the name of the home of the Greek Gods?',
        'Who was the messenger of the Greek Gods?',
        'Which warrior’s weakness was their heel?',
        // Roman Mythology
        'Romulus and Remus were raised by what animal?',
        'The Roman God of War inspired the name of which planet?',
        // Egiptian Mythology
        'What was the name of the Egyptian God of the Sun?',
        'Anubis, the God of Death, had the head of what animal?',
        'Set throws Osiris into which river, after tricking him into a coffin?',
        // Norse Mythology
        'Thor was the son of which God?',
        'What’s the name of the paradise warriors go to after death in the Norse Mythology?'
    ],
    answers: [
        'olympus',
        'hermes',
        'achilles',
        'wolf',
        'mars',
        'ra',
        'jackal',
        'nile',
        'odin',
        'valhalla'
    ]
}

let count = 1
let progress = 0

const checkTyping = () => {
    document.querySelector('input:not(.hidden)').focus()

    const answerValue = document.querySelector('input:not(.hidden)').value
    
    if(answerValue.length == 0){
        document.querySelector('#next').disabled = true
        document.querySelector('#next').style.cursor = 'initial'
        document.querySelector('#next').style.opacity = 0.5
    }else{
        document.querySelector('#next').disabled = false
        document.querySelector('#next').style.cursor = 'pointer'
        document.querySelector('#next').style.opacity = 1
    }

    if(document.querySelector('.answer5').value.length == 0){
        document.querySelector('.finish').disabled = true
        document.querySelector('.finish').style.cursor = 'initial'
        document.querySelector('.finish').style.opacity = 0.5
    }else{
        document.querySelector('.finish').disabled = false
        document.querySelector('.finish').style.cursor = 'pointer'
        document.querySelector('.finish').style.opacity = 1
    }
}

document.querySelector('input:not(.hidden)').addEventListener('focus', e => {
    e.target.classList.remove('border')
    e.target.classList.add('borderBottom')
})

document.querySelector('input:not(.hidden)').addEventListener('blur', e => {
    e.target.classList.add('border')
    e.target.classList.remove('borderBottom')
})

document.querySelector('#wrapper button').addEventListener('click', () => {
    document.querySelector('h1').textContent = qAndA.questions[0]
    document.querySelector('#prev').style.opacity = 0
    document.querySelector('#prev').disabled = true
    document.querySelector('#prev').style.cursor = 'initial'
    document.querySelector('#wrapper').classList.add('hidden')
    document.querySelector('.quiz-container').classList.remove('hidden')

    checkTyping()

    document.querySelector('input:not(.hidden)').addEventListener('input', () => {
        checkTyping()
    })
})

document.querySelector('#next').addEventListener('click', () => {
    count++
    progress += 10

    document.querySelector('h1').textContent = qAndA.questions[count - 1]
    document.querySelector(`.answer${count - 1}`).classList.add('hidden')
    document.querySelector(`.answer${count}`).classList.remove('hidden')
    document.querySelector('#progress').style.width = `${(count - 1) * 10}%`

    if(count == 10){
        document.querySelector('#next').classList.add('hidden')
        document.querySelector('.finish').classList.remove('hidden')
    }

    if(count > 1){
        document.querySelector('#prev').style.opacity = 1
        document.querySelector('#prev').disabled = false
        document.querySelector('#prev').style.cursor = 'pointer'
    }

    checkTyping()

    document.querySelector('input:not(.hidden)').addEventListener('input', () => {
        checkTyping()
    })

    document.querySelector('input:not(.hidden)').addEventListener('focus', e => {
        e.target.classList.remove('border')
        e.target.classList.add('borderBottom')
    })

    document.querySelector('input:not(.hidden)').addEventListener('blur', e => {
        e.target.classList.add('border')
        e.target.classList.remove('borderBottom')
    })

    if(document.querySelector('input:not(.hidden)') === document.activeElement){
        document.querySelector('input:not(.hidden)').classList.remove('border')
        document.querySelector('input:not(.hidden)').classList.add('borderBottom')
    }
})

document.querySelector('#prev').addEventListener('click', () => {
    count--
    progress -= 10
    
    document.querySelector('h1').textContent = qAndA.questions[count - 1]
    document.querySelector(`.answer${count + 1}`).classList.add('hidden')
    document.querySelector(`.answer${count}`).classList.remove('hidden')
    document.querySelector('#progress').style.width = `${(count - 1) * 10}%`

    if(count == 1){
        document.querySelector('#prev').style.opacity = 0
        document.querySelector('#prev').disabled = true
        document.querySelector('#prev').style.cursor = 'initial'
    }

    if(count < 10){
        document.querySelector('.finish').classList.add('hidden')
        document.querySelector('#next').classList.remove('hidden')
    }

    checkTyping()

    document.querySelector('input:not(.hidden)').addEventListener('input', () => {
        checkTyping()
    })

    document.querySelector('input:not(.hidden)').addEventListener('focus', e => {
        e.target.classList.remove('border')
        e.target.classList.add('borderBottom')
    })

    document.querySelector('input:not(.hidden)').addEventListener('blur', e => {
        e.target.classList.add('border')
        e.target.classList.remove('borderBottom')
    })
})

document.querySelector('#progress-bar').addEventListener('mouseenter', () => {
    document.querySelector('.popup').classList.remove('hidden')
    document.querySelector('.popup').textContent = `The quiz is at ${progress}%`
})

document.querySelector('#progress-bar').addEventListener('mouseleave', () => {
    document.querySelector('.popup').classList.add('hidden')
})

document.querySelector('#quiz-form').addEventListener('submit', e => {
    e.preventDefault()
    calcPointsAndCA(finishQuiz)
})

const calcPointsAndCA = cb => {
    let points = 0
    let correctAnswers = 0

    const answer1 = document.querySelector('.answer1').value.trim().toLowerCase()
    const answer2 = document.querySelector('.answer2').value.trim().toLowerCase()
    const answer3 = document.querySelector('.answer3').value.trim().toLowerCase()
    const answer4 = document.querySelector('.answer4').value.trim().toLowerCase()
    const answer5 = document.querySelector('.answer5').value.trim().toLowerCase()
    const answer6 = document.querySelector('.answer6').value.trim().toLowerCase()
    const answer7 = document.querySelector('.answer7').value.trim().toLowerCase()
    const answer8 = document.querySelector('.answer8').value.trim().toLowerCase()
    const answer9 = document.querySelector('.answer9').value.trim().toLowerCase()
    const answer10 = document.querySelector('.answer10').value.trim().toLowerCase()

    if(answer1 == qAndA.answers[0]){
        points += 10
        correctAnswers++
    }
    if(answer2 == qAndA.answers[1]){
        points += 10
        correctAnswers++
    }
    if(answer3 == qAndA.answers[2]){
        points += 10
        correctAnswers++
    }
    if(answer4 == qAndA.answers[3]){
        points += 10
        correctAnswers++
    }
    if(answer5 == qAndA.answers[4]){
        points += 10
        correctAnswers++
    }
    if(answer6 == qAndA.answers[5]){
        points += 10
        correctAnswers++
    }
    if(answer7 == qAndA.answers[6]){
        points += 10
        correctAnswers++
    }
    if(answer8 == qAndA.answers[7]){
        points += 10
        correctAnswers++
    }
    if(answer9 == qAndA.answers[8]){
        points += 10
        correctAnswers++
    }
    if(answer10 == qAndA.answers[9]){
        points += 10
        correctAnswers++
    }

    cb(points, correctAnswers)
}

const finishQuiz = (pts, ca) => {
    document.querySelector('#points').textContent = pts
    document.querySelector('#correct-answers').textContent = `${ca}/10`
    document.querySelector('.quiz-container').classList.add('hidden')
    document.querySelector('.finished').classList.remove('hidden')

}

document.querySelector('#restart').addEventListener('click', () => {
    location.reload()
})