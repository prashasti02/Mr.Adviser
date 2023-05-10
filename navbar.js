function navbar() {
    return `<div id="navbar">
    <div id="text">                                <!--website name andlogo which connects to home page-->
        <div><span><i class="fa-solid fa-bars"></i></span></div>
        <p><a href=index.html>Mr. Adviser</a></p>
    </div>
    <div id="search">
        <input type="text" id="search_term" placeholder="Search">
        <button id="searchVideos"> <span><i class="fa-solid fa-magnifying-glass"></i></span> </button>
        <span> <i class="fa-solid fa-microphone"></i> </span>
    </div>
    <div id="end">
        <div>
            <span> <i class="fa-solid fa-video"></i> </span>
        </div>
        <div><span> <i class="fa-regular fa-bell"></i> </span></div>
        <button id=loginn>Login</button>
    </div>
</div>`
}

export default navbar;