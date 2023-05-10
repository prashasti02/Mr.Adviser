//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&key=[AIzaSyAaZySTEjuBkerwh_1fygicueXw9xSLJYA] 

import navbar from "./navbar.js";
let nav = navbar();
document.getElementById('navbar').innerHTML=nav;
let usern = JSON.parse(localStorage.getItem('username')) || 'Login';
document.getElementById('loginn').innerText=usern;

const searchVideos = async (ordpar) => {
    try {
        let search_term = document.getElementById('search_term').value;
        let response;
        if(ordpar) {
            response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=finance ${search_term}&key=AIzaSyAaZySTEjuBkerwh_1fygicueXw9xSLJYA&order=${ordpar}`);
        } else {
            response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=finance ${search_term}&key=AIzaSyAaZySTEjuBkerwh_1fygicueXw9xSLJYA`);
        }

        let data = await response.json();

        let realData = data.items;

        localStorage.setItem('realData', JSON.stringify(realData));

        let viewCount = data;
        //console.log(data);

        appendVideos(realData);

       
    }
    catch(err) {
        console.log(err);
    }
    
}

document.getElementById('searchVideos').addEventListener('click', function(){
    searchVideos();
});

const myfun = async () => {
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=finance&key=AIzaSyAaZySTEjuBkerwh_1fygicueXw9xSLJYA`);
        let data = await response.json();
        console.log(data);
        appendVideos(data.items);
    }
    catch(err) {
        console.log(err);
    }
}

window.addEventListener('load', () => {
    myfun();
});

const appendVideos = (data) => {
    let videos = document.getElementById('videos');
    videos.innerHTML=null;

    data.forEach((element) => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = element.snippet.thumbnails.high.url;
        img.onclick = () => {
            let data = {
                videoId: element.id.videoId,
                snippet: element.snippet,
            }
            localStorage.setItem('clicked_video', JSON.stringify(data));
            window.location.href='newpage.html';
        }

        let title = document.createElement('p');
        title.innerText = element.snippet.title;
        title.style.fontSize="18px";

        let cname = document.createElement('p');
        cname.innerText= element.snippet.channelTitle;
        cname.fontSize="14px";
        cname.style.color="rgb(105,105,105)";

        div.append(img, title, cname);
        document.getElementById('videos').append(div);
    });
}


const sortAlpha = () =>{
    let title = 'title';
    searchVideos(title);
}

let loginn = document.getElementById('loginn');
if(loginn.innerText == 'Login') {
    document.getElementById('loginn').addEventListener('click', () => {
        window.location.href='auth.html';
    })
}
