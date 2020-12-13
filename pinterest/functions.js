
  export const filterText = function textFunc(data, inputText){
    let category = Object.entries(data)
    return category.filter(search => search.includes(inputText))
  }
