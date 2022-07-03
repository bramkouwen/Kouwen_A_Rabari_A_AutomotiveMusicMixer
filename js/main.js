(() => {

    let mainHeadline = document.querySelector('#main-headline');
        theAudio = document.querySelectorAll('audio'),
        theThumbs = document.querySelectorAll('img'),
        playBut = document.getElementById('play-button'),
        rewindBut = document.getElementById('rewind-button');
        playBoard = document.querySelector(".player-board"), 
	    instruments = document.querySelectorAll('.music-icons img'),
	    playArea = document.querySelectorAll('.play-area');
    
    let volume = document.querySelector("#volume-control");
    volume.addEventListener("change", function(e) {
    theAudio.volume = e.currentTarget.value / 100;
    })

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
    
    function allowDrop(event) {
        event.preventDefault();
    
        let droppedElId = event.dataTransfer.getData('draggedEl');
    
        this.appendChild(document.querySelector(`#${droppedElId}`));
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