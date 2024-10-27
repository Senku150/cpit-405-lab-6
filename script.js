const btns = document.getElementsByTagName("button")
const likeBtn = btns[0];
const likeBtnInnerText = likeBtn.innerText;

const dislikeBtn = btns[1];
const dislikeBtnInnerText = dislikeBtn.innerText;

const submit= document.getElementById("submit")
const reset= document.getElementById("reset")

const commentsShow = document.getElementById("commentsShow")
const comment= document.getElementById("comments")

const likeCount = 10;
likeBtn.innerText = likeBtnInnerText + likeCount
const dislikeCount = 1;
dislikeBtn.innerText = dislikeBtnInnerText + dislikeCount;

let likeCountTemp = likeCount;
let dislikeCountTemp = dislikeCount;



if (document.cookie.includes("btn=true")) {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
}



likeBtn.addEventListener("click", function () {
    document.cookie = "btn=true; max-age=10"
    likeCountTemp++;
    this.innerText = likeBtnInnerText + likeCountTemp
    likeBtn.disabled = true
    dislikeBtn.disabled = true
})
dislikeBtn.addEventListener("click", function () {
    document.cookie = "btn=true; max-age=10"
    dislikeCountTemp++;
    this.innerText = dislikeBtnInnerText + dislikeCountTemp
    likeBtn.disabled = true
    dislikeBtn.disabled = true
})

reset.addEventListener("click",()=>{
    document.cookie="btn=false; max-age=0";
    likeBtn.disabled = false
    dislikeBtn.disabled = false
    commentsShow.innerHTML="<h2>Comments:</h2>"
    
})

submit.addEventListener("click",()=>{
let text = comment.value;
let valueP= document.createElement("p")
valueP.innerText=text

commentsShow.appendChild(valueP)

})