fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
{
    console.log(response) //get container
        response.json().then((data)=>{
            console.log(data)

            var a = document.getElementById("bottomTopDiv"); //reference araha bs
            data.map((item)=>{
                a.innerHTML += `<p>${item.name}</p>` //`${}` jas ka koi bhi variable esy access krty hy tag k sth
             })
            
    })
})
.catch((err)=>{
    console.log(err)
})


function checkEmail(){
    var b = document.getElementById("emailProvider").value
    console.log(b)
}
