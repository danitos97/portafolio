(function(){
   
 
    // const skillsGif = document.querySelector('.skills-gif img')
    
    // skillsGif.onload = function(){
    //     document.querySelector('.cuadricula-v2').classList.add('animation')
    // }
    
    // skillsGif.src = 'images/skills.gif?rand='+Math.random()
    const imgAnimation = document.querySelector(".animation img");
    // let imgChanged = false;
    // imgAnimation.onload = () => {
    //     if(imgChanged) return;
    //     imgChanged = true;
    //     console.log('load')
        
    // }
    const imgAux = document.createElement('img');
    imgAux.onload = () => setTimeout(() => imgAnimation.src = 'images/landing-static.jpg', 3600);
    imgAux.src = 'images/landing-static.jpg';
    
    // imgAnimation.src = 'images/landing-large.gif';

    // const orangeGrid = document.querySelector('#orange-grid')
    // // let i,j,row,tile;

    // for(let i = 1; i <=7; ++i){
    //     const row = document.createElement('div')
    //     for(let j = 1; j <= 5; ++j){
    //         const tile = document.createElement('div')
    //         row.appendChild(tile)
    //         setTimeout(()=>tile.classList.add('animated'),(j * 350) + ((i * 250) % 777) )
    //     }
    //     orangeGrid.appendChild(row)

    // }


    //build sort elements
    let i = 0
    let text = '' 
    const n = 20
    const heights = Array.from({length: n},() => (10 * ++i))
    //mixing heights
    for(i = 0; i < n - 1; ++i){
        const aux = heights[i]
        const rand = getRand(i, n - 1)
        heights[i] = heights[rand]
        heights[rand] = aux
    }
    for(i = 0; i < n; ++i)
        text += `<div style="height:${heights[i] + 10}px"></div>`;
    document.querySelector('.elementos').innerHTML = text
    
    const elements = document.querySelectorAll('.elementos > div')
    let auxI, auxJ;
    setInterval(function(){
        if(auxI !== undefined){
            elements[auxI].style.backgroundColor = "#fff"
            elements[auxJ].style.backgroundColor = "#fff"
        }
        const i = getRand()
        const j = getRand(i)
        elements[i].style.backgroundColor = "hsl(180, 50%, 25%)"
        elements[j].style.backgroundColor = "hsl(180, 50%, 25%)"
        auxI = i
        auxJ = j
        setTimeout(function(){
            const aux = elements[i].offsetHeight
            elements[i].style.height = elements[j].offsetHeight + 'px'
            elements[j].style.height = aux + 'px'
        },500)
    },1000)

    function getRand(not) {
        const rand = Math.floor(Math.random() * n)    
        return rand != not? rand : getRand(not)
    }



    //Calendar

    
    const calendarSelect = document.querySelector('#calendar-lang')
    const calendarEvents = document.querySelector('#calendar-events')
    const calendars = document.querySelectorAll('.calendar')
    let lastCal = 0
    calendarSelect.addEventListener('change',function(){
        calendars[lastCal].classList.remove('visible')
        calendars[this.value].classList.add('visible')
        lastCal = this.value
    })
    calendars.forEach(cal=>cal.addEventListener('click',function(e){
        let text = false
        if(dayChange(e))   text = getValue(this)
        if(monthChange(e)) text = "Month change"
        if(yearChange(e))  text = "Year change"
        if(text){
            const div = document.createElement('div')
            div.innerHTML = text
            calendarEvents.appendChild(div)
            setTimeout(()=>div.remove(),1500)
        }
    }))
    
    
    const coin = document.querySelector('.coin')
    const depth = coin.getAttribute('depth')

    for(let i = depth; i > 0; --i){
        const layer = document.createElement('div')
        layer.style.transform = `translateZ(${i}px)`
        if(i == 1 || i == depth){
            const img = document.createElement('img')
            img.src = coin.getAttribute(i == depth? 'front':'back')
            img.setAttribute('alt','')
            layer.appendChild(img)
        }  
        coin.appendChild(layer)
    }

})()