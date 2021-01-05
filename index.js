
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause'); 
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let dur;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration){
        dur = totalDuration;
  },  
  onTick(timeRemaining){
      circle.setAttribute('stroke-dashoffset', 
      perimeter * timeRemaining / dur - perimeter);
      
      
  },
  onComplete(){
      console.log('Timer complete')

  }
});
