let speech = new SpeechSynthesisUtterance()
console.log(speech)

let voices = []

let voiceSelect = document.querySelector('select')

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    if (voices.length === 0) {
        alert('Голоса не загружены');
        return;
    }
    
    speech.voice = voices[0]

    voices.forEach((voice, i) => 
    (voiceSelect.options[i] = new Option(voice.name, i)))

}

document.querySelector('button').addEventListener('click', () =>{
    const textToSpeak = document.querySelector('textarea').value;

    if(!textToSpeak){
        alert('Введите текст для воспроизведения')
    }

    speech.text = textToSpeak
    console.log(speech.text)

    if(window.speechSynthesis.speaking){
        alert('Синтезатор уже воспроизводит речь')
        return
    }

    window.speechSynthesis.speak(speech)
    console.log(window.speechSynthesis)

})

voiceSelect.addEventListener('change', () => {
    if(window.speechSynthesis.speaking){
        window.speechSynthesis.cancel()
    }
    const selectedIndex = parseInt(voiceSelect.value, 10)
    speech.voice = voices[selectedIndex]
    console.log(selectedIndex)
})
