var num = 0;
let width = screen.width;
console.log(width);
document.getElementById("bar").addEventListener("click", function name(params) {
    if(width > 400){
        if(num == 0){
            var changeSize = document.getElementById("menu");
            changeSize.style.width = "50px";
            var hidename = document.getElementsByClassName("menuName");
            hidename[0].style.display = "none";
            hidename[1].style.display = "none";
            hidename[2].style.display = "none";
            hidename[3].style.display = "none";
            hidename[4].style.display = "none";
            hidename[5].style.display = "none";
            num = 1;
        }
        else{
            var changeSize = document.getElementById("menu");
            changeSize.style.width = "15%";
            var hidename = document.getElementsByClassName("menuName");
            hidename[0].style.display = "block";
            hidename[1].style.display = "block";
            hidename[2].style.display = "block";
            hidename[3].style.display = "block";
            hidename[4].style.display = "block";
            hidename[5].style.display = "block";
            num = 0;
        }
    }
    else{
        var changeSize = document.getElementById("menu");
            changeSize.style.width = "50px";
            var hidename = document.getElementsByClassName("menuName");
            hidename[0].style.display = "none";
            hidename[1].style.display = "none";
            hidename[2].style.display = "none";
            hidename[3].style.display = "none";
            hidename[4].style.display = "none";
            hidename[5].style.display = "none";
            // num = 1;
    }
    // hidename[5].style.display = "none";
});

// document.getElementsByClassName("menuName")[0].style.display = "none";

document.getElementById("reg").addEventListener("click", function(){
    document.getElementById("content").style.display = "block";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("upcomingDrives").style.display = "none";
    document.getElementById("driveRegestaion").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("profile").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
    document.getElementById("profileView").style.display = "block";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("upcomingDrives").style.display = "none";
    document.getElementById("driveRegestaion").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("annou").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("announcement").style.display = "block";
    document.getElementById("upcomingDrives").style.display = "none";
    document.getElementById("driveRegestaion").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("drives").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("upcomingDrives").style.display = "block";
    document.getElementById("driveRegestaion").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("driveReg").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("upcomingDrives").style.display = "none";
    document.getElementById("driveRegestaion").style.display = "block";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("usersummary").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
    document.getElementById("profileView").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("upcomingDrives").style.display = "none";
    document.getElementById("driveRegestaion").style.display = "none";
    document.getElementById("summary").style.display = "block";
})

// logout
document.getElementById("logoutuserFromSesson").addEventListener("click", function(){
    window.location.href = "index.html";
})




// const buttons = document.getElementsByTagName("button");

//         const buttonPressed = e => {
//         console.log(e.target.id);  // Get ID of Clicked Element
//         let btnid = e.target.id;
//         // alert("Are you sure you want to register. All the details regarding this drive will be shared shortly by a seperate message. Thank You.");
//         document.getElementById(e.target.id).innerHTML = "Registered";
//         }

//         for (let button of buttons) {
//             button.addEventListener("click", buttonPressed);
//         }

