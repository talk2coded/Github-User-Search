
const form = document.getElementById('form');
var result = document.getElementById('results');
const button =  document.getElementById('btn'); 
const totalCount = document.getElementById('total-count');
const image = document.getElementById('image');
const imageLink = document.getElementById('image-link');
const starIcon = document.getElementById('star');
const starLink = document.getElementById('star-link');
var githubUser = [];


form.addEventListener("submit",function(event){
    const users = document.getElementById("username").value;

    // prevents default submission
    event.preventDefault()

    // clear the input field when we make a new request
    result.innerHTML = "";

    searchUser(users);

  
});




//  function that fetches users from the github API 
function searchUser(user){
   
  
   fetch("https://api.github.com/search/users?q="  + user +  "+in:email&per_page=100"   )
   .then(response => response.json())
   .then(data => data.items.forEach(item => { 
    console.log(data.items.)
    

     //create <a></a> to link images
    const imageLink = document .createElement('a');
    imageLink.setAttribute('href', item.html_url);

      //create <img/> for the images
    const image = document.createElement('img');
    image.setAttribute('src', item.avatar_url);
    image.classList.add('img-thumbnail', 'ms-4', 'mb-4', 'w-25', 'h-25');

    imageLink.appendChild(image);
    

     
     result.append(githubUser)

     githubUser = imageLink;
      //console.log(githubUser.length)
     

   },
    totalCount.innerHTML = `<h3>Total count: ${data.items.length}</h3>`));
  
};
