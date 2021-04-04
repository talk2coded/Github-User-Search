
const form = document.getElementById('form');
var result = document.getElementById('results');
const totalCount = document.getElementById('total-count');
var githubUsers = []

form.addEventListener("submit",function(event){
    const users = document.getElementById("username").value;

    // prevents default submission
    event.preventDefault()

    // clear the input field when we make a new request
    result.innerHTML = "";

    searchUser(users);

  
});




 //function that fetches users from the github API 
function searchUser(user){
   
  
   fetch("https://api.github.com/search/users?q="  + user +  "+in:email&per_page=100"   )
   .then(response => response.json())
   .then(data => data.items.forEach(item => { 
    //console.log(data)
    
    // create a div
    const component = document.createElement('div'); 
    component.classList.add('component');
     //create <a></a> to link images
    const imageLink = document .createElement('a');
    imageLink.setAttribute('href', item.html_url);
    imageLink.setAttribute('target', '_blank')

      //create <img/> for the images
    const image = document.createElement('img');
    image.setAttribute('src', item.avatar_url);
    image.classList.add('img-thumbnail', 'ms-4', 'mb-4', 'w-25', 'h-25');

        // create followers url
        const followersUrl = document.createElement('a');
        followersUrl.innerText = `followers ${item.followers_url.length}`;
        followersUrl.classList.add('followers');
        followersUrl.setAttribute('href', item.followers_url);
        followersUrl.setAttribute('target', '_blank');

        // create following url
        const followingUrl = document.createElement('a');
        followingUrl.innerText = `following ${item.following_url.length}`;
        followingUrl.classList.add('following');
        followingUrl.setAttribute('href', item.following_url);
        followingUrl.setAttribute('target', '_blank')

        // create a div to hold both links
        const linkUrl = document.createElement('div');
        linkUrl.classList.add('follow-links');

    imageLink.appendChild(image);
    linkUrl.appendChild(followingUrl);
    linkUrl.appendChild(followersUrl);
    component.appendChild(imageLink);
    component.appendChild(linkUrl);
    
     githubUsers = component;

    result.append(githubUsers);

    //githubUsers = result;
    
      //console.log(githubUser.length)
   },
    totalCount.innerHTML = `<h3>Total count: ${data.items.length}</h3>`));
   
};
//console.log(githubUsers)

// Pagination 



