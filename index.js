let container=document.createElement("div")
container.className = 'container';
function fetchData()
{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>displayData(data)) //[{},{},{},......]
    .catch(err=>console.error(err))
}
function displayData(Products)
{
    for(let obj of Products)
    {
        let item=document.createElement("div")
        item.className="item"
        item.innerHTML=`
        <img src="${obj.image}" class="image">
        <p class="Text">${obj.title}<span class="price">       ${obj.price}</span></p>
        <p class="description">${obj.description}</p>
        <p class="rating">${obj.rating.rate}</p>
    
        `
        container.appendChild(item)

        
    }
    document.body.appendChild(container)
    displayData(container)
}
fetchData()