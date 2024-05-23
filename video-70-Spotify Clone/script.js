async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/video-70-Spotify%20Clone/songs")

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
        if ( element.href.endsWith(".mp3")){
            // songs.push(element.href)

            //now lets split the song names with their links 
            // means the path looks like http:/songs/songname.mp3 
            // so we want only the song name menas after the /songs/ we want
            // we used [1] because it is splitted into two parts
            // so first part is entire path of song and 
            // second part is song name and .mp3
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}


// now lets create another function to display the getsongs function 
// we are creating another function because in getsongs() function we used return 
// to display the async function we create another async function and we 
// use await for getsongs() function 
async function playSongs(){
    // get the list of songs 
    let songs = await getSongs()
    console.log(songs)


    // here we used [0] because we are accessing the first h5 element so 
    // we use [0] if we want 2nd or 3rd then we use [1] or [2]
    // but since we have only one h5 tag so if we try to access [1] or [2], [3]....
    // then it gives "undefined" 
    // but if we have one or more h5 tags then we can access that element 
    let songh5 = document.querySelector(".songlist-info").getElementsByTagName("h5")[0]  // o/p: <h5>Song Name</h5>
    console.log(songh5)

    //lets get all the song names, since it is a array we use forof loop
    for (const song of songs) {
        // here we are replacing the songname with actual song name
        // in songs folder and we use replace so that we 
        // dont get any unwanted numbers in between %20
        // songh5.innerHTML = songh5.innerHTML + song
        songh5.innerHTML = songh5.innerHTML + `<li> 
        
        <div class="bg-grey songlist">    
            <div class="your-songs-card">
                <div><img src="music.svg" alt=""></div>
                    <div class="songlist-info">
                        <h5>${song.replace("%20", " ")}</h5>
                        <p>Song Artist 1</p>
                        <!-- <p>Song Artist 2</p> -->
                    </div>
            </div>
            <div><img src="play-button-your-songs.svg" alt=""></div>
        </div>
         </li>`
    }
    // play the first song 
    var audio = new Audio(songs[0]);
    // audio.play();    
}
playSongs()