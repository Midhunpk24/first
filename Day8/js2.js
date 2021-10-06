
product_list=[]
function addproduct(){
product={ 
  id : document.getElementById("pid").value,
  name :document.getElementById("name").value,
  price :document.getElementById("price").value,
}
console.log(product)
product_list.push(product)

console.log(product_list)
}
function productview(){
  let content=""
  product_list.forEach(product=>{
    content+=`<h4>${product.name},${product.price}</h4>`
  }
  )
  document.getElementById("plist").innerHTML=content
}
