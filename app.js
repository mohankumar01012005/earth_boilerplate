
var bodyvar = document.body

var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar: ", consumptionvar);

var resourcesvar = document.getElementById("resources")
console.log("resourcevar: ", resourcesvar);

var peoplevar = document.getElementById("people")
console.log("peoplevar :", peoplevar);

var climatevar = document.getElementById("climate")
console.log("climatevark: ", climatevar);


//save text
var savetext = document.getElementById("save")

//fram
var frame = document.getElementById("frame")

// variable declaration done -----
 
consumptionvar.onclick = () =>{

    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //save text
    savetext.innerHTML="do your bit! shop only what you need, eat only what you need and always save left overs"

    //buttons
    consumptionvar.style.background = "green"
    
    climatevar.style.background = "transparent"
    peoplevar.style.background = "transparent"
    resourcesvar.style.background = "transparent"
}

climatevar.onclick = () =>{
//background
bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
bodyvar.style.backgroundSize="100% 100%"

//frame
frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML= "Do your bit! Save trees, use renewable energy sources and prefer to travel green"

//buttons
climatevar.style.background = "blue"
consumptionvar.style.background = "transparent"
peoplevar.style.background = "transparent"
resourcesvar.style.background = "transparent"
}

peoplevar.onclick = () =>{
    //background
    bodyvar.style.background= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png"
    bodyvar.style.backgroundsize="100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //save text
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    //buttons
    peoplevar.style.background= "red"
    resourcesvar.style.background = "transparent"
    consumptionvar.style.background = "transparent"
    climatevar.style.background = "transparent" 
}
 resourcesvar.onclick = () =>{
//background
bodyvar.style.background= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)" 
bodyvar.style.backgroundSize="100% 100%"

//fram
frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML=" Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

//buttons
resourcesvar.style.background = "red"
consumptionvar.style.background = "transparent"
climatevar.style.background = "transparent"
peoplevar.style.background= "transparent" 
}