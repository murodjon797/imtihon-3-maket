const qalinliklar = [
    {
        id:0,
        size:'yupqa'
    },
    {
        id:1,
        size:'o`rtacha'
    },
    {
        id:2,
        size:'qalin'
    }
]


const razmeri = [
    {
        id:0,
        size:'30 cm'
    },
    {
        id:1,
        size:'45 cm'
    },
    {
        id:2,
        size:'60 cm'
    }
]


const turlari = [
    {
        id:0,
        name:'Pomidor'
    },
    {
        id:1,
        name:'Kurka Go`ti '
    },
    {
        id:2,
        name:'Zaytun'
    },
    {
        id:3,
        name:'Tuzlangan Bodring'
    },
    {
        id:4,
        name:'Qo`ziqorn'
    },
    {
        id:5,
        name:'Qazi'
    }
]



let addedTurlari = []




const select1 = document.getElementById('qalinlik')
const select2 = document.getElementById('olchami')
const turlariBox = document.getElementById('turlari-box')
const QalinligiNonni = document.getElementById('QalinligiNonni')
const pitsaRazmeri = document.getElementById('pitsaRazmeri')
const ListGroup = document.getElementById('listGroup')


qalinliklar.map(function(e){
    const select = document.createElement('option')
    select.value = e.size
    select.textContent = e.size
    select1.appendChild(select)
})

razmeri.map(function(e){
    const select = document.createElement('option')
    select.value = e.size
    select.textContent = e.size

    select2.appendChild(select)
})


const fragment = new DocumentFragment()


turlari.map(function(e) {
    
    const wrappCheckbox = document.createElement('div')
    wrappCheckbox.classList.add('form-check','me-3')

    const inputCheck = document.createElement('input')
    inputCheck.setAttribute('type','checkbox')
    inputCheck.setAttribute('value',e.id)
    inputCheck.setAttribute('id','flexCheckChecked')
    inputCheck.classList.add('form-check-input')

    wrappCheckbox.appendChild(inputCheck)

    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('id','flexCheckChecked')
    label.textContent = e.name

    wrappCheckbox.appendChild(label)

    turlariBox.appendChild(wrappCheckbox)
})



select1.addEventListener('change',function(e){
    QalinligiNonni.textContent = e.target.value
})



select2.addEventListener('change',function(e){
    pitsaRazmeri.textContent = e.target.value
})



const checkBoxes = turlariBox.querySelectorAll('input')

for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", e => {
        if(e.target.checked ==true) {
            addedTurlari.push(e.target.value)

            ListGroup.innerHTML = ''

            const newList = []
            addedTurlari.map(function(i) {
               let obj =  turlari.find(o => o.id == i)
               newList.push(obj)
            })

            newList.map(function(g) {
                const li = document.createElement('li')
                li.classList.add('list-group-item')
                li.textContent = g.name
                ListGroup.appendChild(li)   
            })
            


        }else {
            const index = addedTurlari.indexOf(e.target.value)

            addedTurlari.splice(index,1)
            console.log(addedTurlari)
            const newList = []
            addedTurlari.map(function(i) {
               let obj =  turlari.find(o => o.id == i)
               newList.push(obj)

               
            })

            ListGroup.innerHTML = ''

            newList.map(function(m) {
                const li = document.createElement('li')
                li.classList.add('list-group-item')
                li.textContent = m.name
                ListGroup.appendChild(li)
            })

        }
    });
  }






