let setAttrs = (whattoset,attrs) => {
    Object.entries(attrs).forEach(([key,value]) => {
        whattoset.attr(key,attrs[key]);
    });
}
// ----------- Add more lists ---------------
let filters = d3.select("#filters");

let labels = ["Company","Ticker Symbol","Sector","Industry"];

let attrbs = labels.map( label => {
    return {"class":"form-control","id":label,"type":"text","placeholder":""};
});

for(let i = 0;i<labels.length;i++){
    let li = filters.append("li");
    li.attr("class", "filter list-group-item");
    
    let label = li.append('label');
    label.attr("for",labels[i]);
    label.text(labels[i]);
    
    let inpt = li.append('input');
    setAttrs(inpt,attrbs[i]);
}
//----------------------------------------

let tbody = d3.select("tbody");

let getMatchingRecords = (dt,flts) => {
    let mdy1 = new Date(dt);
    let records = []
    data.forEach((datum) => {
        let mdy2 = new Date(datum.date);
        if (((mdy2.getTime() === mdy1.getTime()) || (dt === ""))
        && ((flts[0] === datum.Ticker_Symbol.toLowerCase()) || (flts[0] === ""))
        && ((flts[1] === datum.Company.toLowerCase()) || (flts[1] === ""))
        && ((flts[2] === datum.Sector.toLowerCase()) || (flts[2] === ""))
        && ((flts[3] === datum.Industry.toLowerCase()) || (flts[3] === ""))){
            records.push(datum);
        }
    });
    return records;
}

let updateTable = records => {
    tbody.html("");
    if (records.length < 1) return;
    records.forEach((record) => {
        let row = tbody.append("tr");
        Object.values(record).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

let button = d3.select("#filter-btn");

let handleInput = () => {
    let flts = labels.map(label =>{
        return d3.select(`#${label}`).property("value").toLowerCase();
    });
    dt = d3.select("#date").property("value");
    updateTable(getMatchingRecords(dt,flts));
}

button.on("click", handleInput);


// Text Animation

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000 ,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2000,
    delay: (el, i) => 100 + 30 * i
  });



  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });