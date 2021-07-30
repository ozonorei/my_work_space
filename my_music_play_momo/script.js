const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

audio.volume  = 0.7;
// Song titles
const songs = ['赤い糸', '変わらないもの','ふわふわ時間', 'ねがお', 'アンサー', '酸っぱい自己嫌悪','やさしさとは','ノーチラス', '酸っぱい自己嫌悪'];

// Keep track of song titles
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details 
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    
    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next song
function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Update progress bar
function updateProgress(event) {
    const{ duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration ) * 100;
    const ppercent = 100 - progressPercent
    // console.log(ppercent);
    // progress.style.width = `${ppercent}%`;
    progress.style.width = `${progressPercent}%`;    
}

// Set progress bar 
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
//      當前音樂的位置   ＝（點擊位置的長度/ 總長度）x 音樂的總區間
//           125          =         94/216    x 289.xxxx
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);