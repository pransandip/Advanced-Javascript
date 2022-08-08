/** converting a javascripts object into json ***/
console.log(JSON.stringify({ x: 5, y: 6 }))
console.log(JSON.stringify({ 0: 'S', 1: 'A', 2: 'N', 3: 'D', 4: 'Y' }))


/** parse a JSON string into javascript object ***/
const json = '{"result":true, "count":42}'
const obj = JSON.parse(json)
console.log(obj.result)

// <input type="file" onChange={(e)=> setCompany_logo(URL.createObjectURL(e.target.files[0]))}/>

// onChange={(e) => {setContNum(e.target.value); setContNumError(false)}}

 /*converting javascript obj to json format*/
// const jsonData = JSON.stringify(data)   
