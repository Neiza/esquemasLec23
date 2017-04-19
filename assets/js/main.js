var nDivs = 1;
var nChildDivs = 1;
var nChild2divs = 1
var container = document.getElementById("container")

function createDivs(nDivs,nChildDivs,nChild2divs,padres,hijos,nietos){
  for(var i=0; i<nDivs; i++){
      var  div = document.createElement("div");
      div.classList.add(padres);
      body.appendChild(div);
      for(j=0; j<nChildDivs; j++){
        var childDiv = document.createElement("div");
        childDiv.classList.add(hijos);
        div.appendChild(childDiv);
          for (var k=0; k<nChild2divs; k++){
            Child2div = document.createElement("div");
            Child2div.classList.add(nietos)
            childDiv.appendChild(Child2div)
          }
      }
  }

}



createDivs(1,1,1,"padre1", "hijo1", "nieto1");
createDivs(1,1,1,"padre2", "hijo2", "nieto2");
