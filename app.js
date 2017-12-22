var about = document.getElementById("about-link");
var port = document.getElementById("portfolio-link");
var skills = document.getElementById("skills-link");

var clickfn = function(){
    if ( document.URL.includes("#about")) {
        if(!about.className.includes("current")){
            about.className += " current";
        }
        if(port.className.includes("current")){
            port.className = "nav-right";
        }
        if(skills.className.includes("current")){
            skills.className = "nav-right";
        }
    }else if( document.URL.includes("#portfolio")) { 
        if(about.className.includes("current")){
            about.className = "nav-right";
        }
        if(!port.className.includes("current")){
            port.className += " current";
        }
        if(skills.className.includes("current")){
            skills.className = "nav-right";
        }
    }
    else if ( document.URL.includes("#skills")) {
        if(about.className.includes("current")){
            about.className = "nav-right";
        }
        if(port.className.includes("current")){
            port.className = "nav-right";
        }
        if(!skills.className.includes("current")){
            skills.className += " current";
        }
    }
};

window.onscroll = function()
{
    if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
        if(about.className.includes("current")){
            about.className = "nav-right";
        }
        if(port.className.includes("current")){
            port.className = "nav-right";
        }
        if(!skills.className.includes("current")){
            skills.className += " current";
        }
   }
    else if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        if(about.className.includes("current")){
            about.className = "nav-right";
        }
        if(!port.className.includes("current")){
            port.className += " current";
        }
        if(skills.className.includes("current")){
            skills.className = "nav-right";
        }
    }
    else if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
        if(!about.className.includes("current")){
            about.className += " current";
        }
        if(port.className.includes("current")){
            port.className = "nav-right";
        }
        if(skills.className.includes("current")){
            skills.className = "nav-right";
        }
    }

}

function dropdownmenu(){
    var navId = document.getElementById("dropdownClick");
    if ( navId.className === "top-nav" )
        {
            navId.className += " responsive";
        }
    else
        {
            navId.className = "top-nav";
        }
            
}