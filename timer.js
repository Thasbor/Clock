class Timer{
    constructor(duration, startButton, pauseButton, callbacks){
        this.duration = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
            
        }
        

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);


    }
    start =() =>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tic();
        this.interval = setInterval(this.tic, 20)
        }
    pause = () =>{
        clearInterval(this.interval);

    }
    onDurationChange = () =>{

    }
    tic = () =>{
        if(this.timeRemaining <= 0){
            this.pause;
            if(this.onComplete){
                this.onComplete();
            }
            
        }
        else{
            this.timeRemaining = this.timeRemaining -0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
        


    }

    get timeRemaining(){
        return parseFloat(this.duration.value);
    }
    set timeRemaining(time){
        this.duration.value = time.toFixed(2);
    }

    
}