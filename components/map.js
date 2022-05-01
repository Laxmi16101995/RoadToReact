function GoTo(url) {
  //console.log("hi");
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      //console.log(res.meals);
      append(res.meals);
    })
    .catch(function (err) {
      console.log(err);
    });

  function append(data) {
    document.querySelector("#map").innerHTML = null;
    console.log(data);
    data.map(function (e) {
      let box = document.createElement("div");

      let image = document.createElement("img");
      image.src = e.strMealThumb;
      image.setAttribute("id", "picture");

      box.append(image);

      let box1 = document.createElement("div");
      box1.setAttribute("id", "center");
      let para = document.createElement("h2");
      para.innerText = e.strMeal;

      let p = document.createElement("p");
      p.innerText ="Area: " +e.strArea;

      let p1= document.createElement("p");
      p1.innerText ="Category: "+ e.strCategory;
      
      let button=document.createElement("button");
      button.innerText="Order"
      button.setAttribute("id","button")

      box1.append(para, p,p1,button);
      document.querySelector("#map").append(box, box1);
    });
  }
}


export default GoTo