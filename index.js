const form = document.getElementById("new-post")
const bodyInput = document.getElementById("post-title")
const titleInput = document.getElementById("post-body")
const postDiv = document.getElementById('blog-list')
const newPostArrays = []
// https - is the part of the protocol 
function render(){
    let html = ""
    for (let newPost of newPostArrays){
       html += `<h1> ${newPost.title}</h1>
                <p>${newPost.body}</p>
                <hr />
       `
    }
    postDiv.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(request => request.json())
.then((data)=> data)


fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: 'GET'})
.then((request)=> request.json())
.then((data)=> {
    const postArr = data.slice(0,5)
    let html = ""
    for (let post of postArr){
        html += `<h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr />`

    }
 postDiv.innerHTML = html
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
    render()
})
})




















// let postsArray = []
// const titleInput = document.getElementById("post-title")
// const bodyInput = document.getElementById("post-body")
// const form = document.getElementById("new-post")

// function renderPosts() {
//     let html = ""
//     for (let post of postsArray) {
//         html += `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             <hr />
//         `
//     }
//     document.getElementById("blog-list").innerHTML = html
// }

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         postsArray = data.slice(0, 5)
//         renderPosts()
//     })

// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     const postTitle = titleInput.value
//     const postBody = bodyInput.value
//     const data = {
//         title: postTitle,
//         body: postBody
//     }
    
//     const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }
    
//     fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
//         .then(res => res.json())
//         .then(post => {
//             postsArray.unshift(post)
//             renderPosts()
//             titleInput.value = ""
//             bodyInput.value = ""
//             // form.reset()
//         })
// })