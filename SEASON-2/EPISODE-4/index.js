// ASYNC-AWAIT :

const getData = async () => {
  return "Namaste Javascript"
}

const result = getData()
console.log(result)

//❓How to extract data from above promise? One way is using promise .then
result.then((res) => console.log(res))