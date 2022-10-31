var content = document.createElement('div');
content.setAttribute('class','container-fluid');

var box = document.createElement('div');
box.setAttribute('class','box');

var nav = document.createElement('nav');
nav.setAttribute('class','navbar');
nav.innerHTML = `
<div class="toggle-btn">
    <i class="fas fa-thin fa-bars"></i>
</div>
<div class="icon">
    <h3><i class="fab fa-youtube nav-icon" id="youtube-logo"></i>YouTube</h3>
</div>
<div class="search-box">
    <input type="text" class="form-control" placeholder="search" id="search-bar"/>
    <i class="fa fa-search" aria-hidden="true" id="search-btn"><span class="tooltiptext">Search</span></i>
    <i class="fa fa-microphone" aria-hidden="true"><span class="tooltiptext">Search With Your Voice</span></i>
    <div class="dropdown ">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        <div class="dropdown-content">
            <a href="#">Upload Video</a>
            <a href="#">Go Live</a>
        </div>
    </div>
        <i class="fa fa-bell-o" aria-hidden="true"><span class="tooltiptext">Notifications</span></i>
</div>
`

var ban = document.createElement('div');
ban.setAttribute('class','banner row-md-4');
ban.innerHTML =`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Hello there!</strong> All the written functions are working while clicking the icon in the navbars  
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
    <img src="./twt.png"/>
    <img src="./ig.png"/>
    <img src="./fb.png"/>
`
var ytd = document.createElement('div');
ytd.setAttribute('id','ytd');
ytd.setAttribute('class','row-md-4')
ytd.innerHTML =`
    <img src="./icon-1.jpg"/>
    <p>OneDirectionVEVO<i class="fa fa-check-circle" aria-hidden="true"></i></p>
`

let con_nav = document.createElement('div');
con_nav.setAttribute('id','con-nav');
con_nav.setAttribute('class','row-md-4');
con_nav.setAttribute('ul','nav');
con_nav.innerHTML =`
<nav class="nav">
<a class="nav-link" id="hov" href="index.html">HOME</a>
<a class="nav-link" id="hov" href="#">VIDEOS</a>
<a class="nav-link" id="hov" href="#">PLAYLISTS</a>
<a class="nav-link" id="hov" href="#">ABOUT</a>
<a class="nav-link" id="hov" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
</nav><hr/>
`
var vdo = document.createElement('div');
vdo.setAttribute('class','video');

var row = document.createElement('div');
row.setAttribute('class','row');
row.setAttribute('id','row');

var col = document.createElement('div');
col.setAttribute('class','col-md-6');
col.setAttribute('id','col');
col.innerHTML = `
    <div class="img">
        <img src="./cover.jpg"/>
        <i class="fab fa-youtube nav-icon" id="youtube-logo"></i>
    </div>
`

var col1 = document.createElement('div');
col1.setAttribute('class','col-md-6');
col1.setAttribute('id','col1');
col1.innerHTML = `
    <div class="text">
        <text>One direction-History(Official Video)</text><br/>
        <span>436,680,239 views
        . 6 years ago</span><br/>
        <text class="t1">One direction-History(Official Video)</text><br/>
        <a>Follow on Spotify - <span style="color:blue;">https://1D.lnk.to/Spotify</span></a><br/>
        <a>Listen on Apple Music -<span style="color:blue;"> https://1D.lnk.to/AppleMusic</span></a><br/>
        <a>Listen on Amazon Music - <span style="color:blue;">https://1D.lnk.to/AmazonMusic</span></a><br/>
        <a>Listen on Deezer - <span style="color:blue;">https://1D.lnk.to/Deezer </span></a><br/>
        <a>Listen on YouTube Music - <span style="color:blue;">https://smarturl.it/OneDirection_YTMusic...</span></a><br/>
        <a>READ MORE..</a>
    </div><hr/>
`

row.append(col,col1);
vdo.append(row);

var cont = document.createElement('div');
cont.setAttribute('class','cont');

var row1 = document.createElement('div');
row1.setAttribute('class','row');
row1.setAttribute('id','row1');

var col2 = document.createElement('div');
col2.setAttribute('class','col-md-3');
col2.setAttribute('id','col2');
col2.innerHTML =`
    <p>Uploads</p>
    <img src="./cont.jpg"/><br/>
    <text style="font-size: 13px;">One direction-End Of The Day(Audio)</text><br/>
    <span> 755K views . 
    2 years ago</span>
`

var col3 = document.createElement('div');
col3.setAttribute('class','col-md-3');
col3.setAttribute('id','col3');
col3.innerHTML =`
    <img src="./cont.jpg"/><br/>
    <text style="font-size: 13px;">One Direction - History (Audio)
    </text><br/>
    <span> 755K views . 
    2 years ago</span>
`

var col4 = document.createElement('div');
col4.setAttribute('class','col-md-3');
col4.setAttribute('id','col4');
col4.innerHTML =`
    <img src="./cont.jpg"/><br/>
    <text style="font-size: 13px;">One direction-Infinity(Audio)</text><br/>
    <span> 755K views . 
    2 years ago</span>
`

var col5 = document.createElement('div');
col5.setAttribute('class','col-md-3');
col5.setAttribute('id','col5');
col5.innerHTML =`
<img src="./cont.jpg"/><br/>
<text style="font-size: 13px;">One direction-A.M(Audio)</text><br/>
<span> 755K views . 
2 years ago</span>
`

row1.append(col2,col3,col4,col5);
cont.append(row1)

box.append(nav,ban,ytd,con_nav,vdo,cont);
content.append(box);
document.body.append(content);

const searchInput = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');

let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () =>{
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})