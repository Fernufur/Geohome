const root = document.documentElement;
root.style.setProperty('--header-height');
root.style.setProperty('--scroll-header-height');

/*const figlet = require('figlet');
function showCardTitles(){
    figlet.text(
        "GEOSINIA",
        {
            font: "Slant",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            document.getElementById("geosinia-title").textContent = data;
        }
    );
    const geosiniaTitle = 
    "\
       ________________  _____ _____   _________ 
      / ____/ ____/ __ \/ ___//  _/ | / /  _/   |
     / / __/ __/ / / / /\__ \ / //  |/ // // /| |
    / /_/ / /___/ /_/ /___/ // // /|  // // ___ |
    \____/_____/\____//____/___/_/ |_/___/_/  |_|";
    document.getElementById("geosinia-title").textContent = geosiniaTitle;

    const githubTitle =
    "\
    _______ __  __  __      __   \
    / ____(_) /_/ / / /_  __/ /_  \
    / / __/ / __/ /_/ / / / / __ \\ \
    / /_/ / / /_/ __  / /_/ / /_/ / \
    \\____/_/\\__/_/ /_/\\__,_/_.___/ ";
    document.getElementById("github-title").textContent = githubTitle;

    const modsTitle =
    "\
        __  ___          __     \
    /  |/  /___  ____/ /____ \
    / /|_/ / __ \\/ __  / ___/ \
    / /  / / /_/ / /_/ (__  )  \
    /_/  /_/\\____/\\__,_/____/  ";
    document.getElementById("mods-title").textContent = modsTitle;
}*/