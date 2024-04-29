function createCard(title, channelName, views, monthsOld, duration, thumbnail){
    let html = `<div class="card">
    <div class="image">
        <img src=${thumbnail} alt="">
        <div class="duration">${duration}</div>
    </div>
    <div class="text">
        <h2 class="title">${title}</h2>
        <p>${channelName} . ${views}k views . ${monthsOld} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("intro to dynamic website builder", "CodeWithShiva", 860000, 4, "24:00", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")


