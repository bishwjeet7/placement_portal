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
});


document.getElementById("todo").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "block";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("listFilterBlockUnblockStudent").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "block";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("createDrive").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "block";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("registerStudent").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "block";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "none";
})

document.getElementById("teacherAnnouncement").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "block";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "none";
})
document.getElementById("viewDrives").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "block";
    document.getElementById("summary").style.display = "none";
})
document.getElementById("teacherSummary").addEventListener("click", function(){
    document.getElementById("toDoBox").style.display = "none";
    document.getElementById("listFilterStudent").style.display = "none";
    document.getElementById("driveCreate").style.display = "none";
    document.getElementById("regStudent").style.display = "none";
    document.getElementById("announcement").style.display = "none";
    document.getElementById("driveView").style.display = "none";
    document.getElementById("summary").style.display = "block";
})
// State select


document.getElementById("publishDrive").addEventListener("click", function(){
    document.getElementById("successShow").style.display = "block";
})



// logout
document.getElementById("logoutuserFromSesson").addEventListener("click", function(){
    window.location.href = "index.html";
})