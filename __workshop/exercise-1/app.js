// Preset values
const FROGS = 3;
let myTrack = document.getElementById("track");
for (let count = 1; count <= FROGS; count++) {
    let lane = document.createElement("LI");
    lane.setAttribute("id", `lane-${count}`);
    let lane_span = document.createElement("SPAN");
    lane_span.innerText = count;
    lane.appendChild(lane_span);
    myTrack.appendChild(lane);
  }

  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  let racers = randomArrayShuffle(frogstable).slice(0,3);
  

  let myLanes = document.querySelectorAll('*[id^="lane-"]')
  
  for(let l = 0; l <= racers.length - 1; l++){
      let {name, color, number} = racers[l];
      let frog = document.createElement("SPAN");
      let name_span = document.createElement("SPAN");
      racers[l].progress = 0;
      racers[l].lane = myLanes[l].id;
      name_span.innerText = `${name} (${number})`;
      name_span.setAttribute('class', 'frog-name')
      frog.setAttribute('id', `frog-${l}`)
      frog.setAttribute('class', `frog`)
      
      frog.style.backgroundColor = color;
      myLanes[l].append(frog, name_span);

  }

  let frogs = document.getElementsByClassName('frog');
  let rankings = [] 
  let main = document.getElementsByTagName("MAIN");
  let podiumDiv = document.createElement("DIV");
  podiumDiv.setAttribute('class', 'podium')
  main[0].appendChild(podiumDiv);
  
  function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
     
        let hopTime = Math.round(Math.random() * (1500)) + 500;
        let hop = setTimeout(function move(){
          let nexthop = racer.progress + hopLength;
          if(nexthop < 100){
            racer.progress += hopLength
            frogs[racer.idx].style.left = `${racer.progress}% `
                      //console.log(`${racer.name} past hop time: ${hopTime}`)
            hopTime = Math.round(Math.random() * (3000)) + 1000;
                      //console.log(`${racer.name} next hop time: ${hopTime}`)
            setTimeout(move, hopTime);
          } else {
            clearTimeout(hop);
                     // console.log(`${racer.name} has finished!`);
            rankings.push(racer.name)
            if(rankings.length === 3){
              [first, second, third] = rankings;
              let thePodium = podium([first, second, third])
              console.log(thePodium);
              
              podiumDiv.innerHTML = `
              <p >Winner is <span style="color:red">${first}</span>, </p>
              <p>Second place <span style="color:red">${second}</span> and you know... </p>
              <p>Third place <span style="color:red">${third}</span></p>
              
              Also please take a look to the console :)`
              
              ;
              podiumDiv.style.fontSize = '40px'
              
            }
          }
        }, hopTime)
      
    
  }

  function podium(a) {return `141
101
521
031
236
330
332`.replace(/./g,n=>[...`@-@   |@||||`.substr(n*3,3)].join(' -'[+!+n].repeat(m/2))||a[n-=4].padStart(m+l[n]+3>>1).padEnd(m+3),m=Math.max(2,...l=a.map(s=>s.length))&~1)
  }

  for(let i = 0; i <= frogs.length - 1; i++){
    racers[i].idx = i;
    racingFrog(racers[i])
  }
  
  
  //console.log(racers)