async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/video-70-Spotify%20Clone/songs/")

    // here a.text() is used to display the code in html format
    // we are using this because we want the links of the songs so that we can play
    let response = await a.text()   // now the  songs are under the anchor tags 
    // console.log(response)

    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    // console.log(as)        // o/p: HTMLCollection(7) [a, a, a, a, a, a, a]


    // now we use the for loop to get all the href that has mp3 links
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // songs.push(element.href)

            //now lets split the song names with their links 
            // means the path looks like http:/songs/songname.mp3 
            // so we want only the song name menas after the /songs/ we want
            // we used [1] because it is splitted into two parts
            // so first part is entire path of song and 
            // second part is song name and .mp3
            // let song_with_mp3 = element.href.split("/songs/")[1]
            // songs.push(song_with_mp3.split(".mp3")[0])
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}


// this is used because when we click on multiple songs then 
// multiple songs will play to avoid this we created a global variable 
let currentSong = new Audio();

// now lets use the currentSong variable
const playMusic = (track)=>{
    // let audio = new Audio("/video-70-Spotify Clone/songs/" + track);
    currentSong.src = "/video-70-Spotify Clone/songs/" + track
    currentSong.play()


    // this is for displaying the song info of current playing song
    document.querySelector(".song-title").innerHTML = track
    document.querySelector(".song-time").innerHTML = "00:00/00:00"

    currentSong.addEventListener("loadedmetadata", () => {
        if (!isNaN(currentSong.duration)) {
            document.querySelector(".song-time").innerHTML = `00:00/${formatTime(currentSong.duration)}`;
        }
   });
    
}


function formatTime(timeInSeconds) {
    // Convert the floating-point seconds to an integer number of seconds
    const totalSeconds = Math.floor(timeInSeconds);
    
    // Calculate the minutes and the remaining seconds
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    
    // Pad the minutes and seconds with leading zeros if necessary
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');
    
    // Return the formatted string
    return `${paddedMinutes}:${paddedSeconds}`;
}


// now lets create another function to display the getsongs function 
// we are creating another function because in getsongs() function we used return 
// to display the async function we create another async function and we 
// use await for getsongs() function 
async function playSongs() {
    // get the list of songs 
    let songs = await getSongs()
    // console.log(songs)


    // here we used [0] because we are accessing the first li element so 
    // we use [0] if we want 2nd or 3rd then we use [1] or [2]
    // but since we have only one h5 tag so if we try to access [1] or [2], [3]....
    // then it gives "undefined" 
    // but if we have one or more li tags then we can access that element 
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]  // o/p: <h5>Song Name</h5>
    // console.log(songUL)

    //lets get all the song names, since it is a array we use forof loop
    for (const song of songs) {
        // here we are replacing the songname with actual song name
        // in songs folder and we use replace so that we 
        // dont get any unwanted numbers in between %20
        // songh5.innerHTML = songh5.innerHTML + song

        // now we are using html of songlist 
        songUL.innerHTML = songUL.innerHTML +
                `<li>
                    <div class="your-songs-card">
                        <div><img src="music.svg" alt=""></div>
                        <div class="songlist-info">
                            <h5>${song.replace("%20", " ")}</h5>
                            <p>Song Artist 1</p>
                            <!-- <p>Song Artist 2</p> -->
                        </div>
                    </div>
                    <div><img src="play-button-your-songs.svg" alt=""></div>
                </li> `
    }
    
    
    // Attach an event listener to each song in songlist 
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", ()=>{
            console.log(e.querySelector(".songlist-info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".songlist-info").firstElementChild.innerHTML.trim())
        })
    });



    // Attach an event listener to play buttons like previous, next in playbar
    let playClicked = document.querySelector(".playSongButton");
     playClicked.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            playClicked.src = "pause-song-button.svg"
        }
        else{
            currentSong.pause()
            playClicked.src = "play-song-button.svg"
            
        }
    });




    // Listen for time update 
    currentSong.addEventListener("timeupdate", ()=>{
        // document.querySelector(".songtime").innerHTML = innerHTML +
        console.log(formatTime(currentSong.currentTime), formatTime(currentSong.duration))
        if (!isNaN(currentSong.duration) && !isNaN(currentSong.currentTime)) {
            document.querySelector(".song-time").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`;
        }


        // lets change the seekbar according to the song
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%" 
    })



    // lets add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", (e)=>{
        console.log(e)
    })
}  

playSongs()