(() => {

    let mainHeadline = document.querySelector('#main-headline');
        theAudio = document.querySelectorAll('audio'),
        theThumbs = document.querySelectorAll('img'),
        playBut = document.getElementById('playAudio'),
        rewindBut = document.getElementById('rewindAudio'),
        pauseBut = document.getElementById('pauseAudio'),
        playBoard = document.querySelector(".player-board"), 
        instruments = document.querySelectorAll('.music-icons img'),
        playArea = document.querySelectorAll('.play-area');

    let playFlag = false;
    
    let volume = document.querySelector("#volume-control");
    volume.addEventListener("change", function(e) {
        theAudio.volume = e.currentTarget.value / 100;
    })

    function loadAudioTrack() {
        if (playFlag) {
            theAudio = new Audio(`audio/${this.dataset.trackref}.mp3`);
            theAudio.load();
            theAudio.currentTime = 0;
            theAudio.play();
            theAudio.loop = true;
        } else {
            console.log("do not play");
        }
    }

    function loadAudioTrack() {
        theAudio = new Audio(`audio/${this.dataset.trackref}.mp3`);

        theAudio.load();
        //theAudio.play();

        theAudio.currentTime=0;

        playAudio();

        theAudio.loop = true

    }

    function animateStart() {
        document.getElementById('sound').style.display='block',
        document.getElementById('sound-1').style.display='block',
        document.getElementById('sound-2').style.display='block',
        document.getElementById('sound-3').style.display='block';
    }

    function allowDrag(event) {
        event.dataTransfer.setData('draggedEl', this.id);
    }
    
    function allowDragOver(event) {
        event.preventDefault();
    }
    
   
    function allowDrop (event) {
        event.preventDefault();
        playFlag = false;
        if (this.childNodes.length < 1) {
            let droppedElId = event.dataTransfer.getData('draggedEl');
            this.appendChild(document.querySelector(`#${droppedElId}`));
            playFlag = true;
        } else {
            console.log("Space Occupied")
        }
    }

    function playAudio() {
         theAudio.play(); 
    }

    function rewindAudio() {
         theAudio.currentTime = 0; 
    }

    theThumbs.forEach(thumb => thumb.addEventListener('dragend', loadAudioTrack));

    theThumbs.forEach(thumb => thumb.addEventListener('dragend', animateStart));

    instruments.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    playArea.forEach(area => {
        area.addEventListener('dragover', allowDragOver);
        area.addEventListener('drop', allowDrop);
    });

})()
