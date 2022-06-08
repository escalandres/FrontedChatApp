function darkMode(){
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', '#192229');
    }
    else{
        
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'rgb(64,78,237)');
    }
    
}