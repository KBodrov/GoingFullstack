//----------------------------------------------------------------------------------|
//                                                                                  |
//         Load content from different html-pages to Article section                |
//                                                                                  |
//----------------------------------------------------------------------------------|
const menuSidebar = document.getElementById("navbar");
menuSidebar.addEventListener("click", clickHandler);

function clickHandler(event) 
{
    if (event.target.hasAttribute("role")) 
    { 
        returnHTML(event.target.getAttribute("role"));
    }
}

const mainContent = document.getElementById("main-content");

function returnHTML(file_id) 
{
    axios.get(file_id)
    .then(function (response) 
    {
        mainContent.innerHTML = response.data;
    })
    .catch(function (error) 
    {
        console.log(error);
    });
}