

const foodFactory = (foodData) => {

    return `<div> 
        <h1>${foodData.name} </h1>
        <p>${foodData.category}</p>
        <p>${foodData.ethnicity}</p>
    </div>
    `

}

const addFoodToDom = (foodData) => {
    document.querySelector(".foodList").innerHTML += foodData

}




fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })




