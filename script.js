//1.SOLVING PROBLEMS USING ARRAY FUNCTIONS ON THE REST COUNTRIES DATA.
//D.PRINT THE TOTAL POPULATION OF COUNTRIES USING REDUCE FUNCTION:
  var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send()
  request.onload=function(){
       var data = request.response
       var result = JSON.parse(data)
       var res = result.reduce((acc,cv)=>acc+cv.population,0)
       console.log(res)
       }
 //output:
 //7777721563
 //b.GET ALL THE COUNTRIES WITH A POPULATION OF LESS THAN 2LAKHS USING FILTER FUNCTION:
    var request = new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all",true)
    request.send()
    request.onload=function(){
        var data = request.response
        var result = JSON.parse(data)
        var res1 = result.filter((ele)=>(ele.population<200000))
        var res2 = res1.map((ele)=>ele.name.common)
        console.log(res2)
     }
 //output
 //(62)
 //C.PRINT THE FOLLOWING DETAILS NAME,CAPITAL.FLAG USING FOREACH FUNCTION:
  var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send()
  request.onload=function(){
        var data = request.response
        var result = JSON.parse(data)
        var res3 = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`)})
      }
 //output:
//Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send()
request.onload=function(){
   var data = request.response
   var result = JSON.parse(data)
   var res4 = result.filter((ele)=>{
    for(let key in ele.currencies)
    {
      if(ele.currencies[key].code==="USD")
      {
        console.log(ele.name)
      }
    }
   })
}
//output:
//19 countries:
//A.Get all the countries from the Asia continent /region using the Filter function
 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res5 = result.filter((ele)=>ele.continents == "Asia")
    var res6 = res5.map((ele)=>ele.name.common)
    console.log(res6)
 }
//output:
//Array(52)