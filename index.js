const form = document.getElementById("new-post")
const bodyInput = document.getElementById("post-title")
const titleInput = document.getElementById("post-body")
const postDiv = document.getElementById('blog-list')
let newPostArrays = []
// https - is the part of the protocol 


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(request => request.json())
.then((data)=> data)

function renderPost(){
    let html = ""
    for (let newPost of newPostArrays){
       html += `<h1> ${newPost.title}</h1>
                <p>${newPost.body}</p>
                <hr />
       `
    }
    postDiv.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: 'GET'})
.then((request)=> request.json())
.then((data)=> {
    newPostArrays = data.slice(0,5)
    renderPost()
})

form.addEventListener("submit", function(e){
    e.preventDefault()
   const postTitle = titleInput.value
   const postBody = bodyInput.value
   const data = {
    title: postTitle, 
    body: postBody
}
  const options ={
    method: "POST", 
    body: JSON.stringify(data), 
    headers: {
        "Content-Type": "application/json"
  }
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts", options )
.then(res => res.json()) // parsing the data from json to js
.then(post =>{
   newPostArrays.unshift(post)
    renderPost()
    titleInput.value = ""
    bodyInput.value = ""
})
})












