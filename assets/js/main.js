var nDivs = 2;
var nChildDivs = 1;
var nChild2divs = 1
var body = document.getElementById("body")

function createDivs(){
  for(var i=0; i<nDivs; i++){
      var  div = document.createElement("div");
      div.classList.add("padres");
      body.appendChild(div);
      for(j=0; j<nChildDivs; j++){
        var childDiv = document.createElement("div");
        childDiv.classList.add("hijos");
        div.appendChild(childDiv);
          for (var k=0; k<nChild2divs; k++){
            Child2div = document.createElement("div");
            Child2div.classList.add("nietos")
            childDiv.appendChild(Child2div)
          }
      }
  }
}

createDivs();
