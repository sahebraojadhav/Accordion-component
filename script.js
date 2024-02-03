const data=[
    {
        id:'1',
        question:"what is accordion components?",
        answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo consequatur tempora laborum magnam ea. Dolores aliquam quia incidunt sequi."
    },

    {
        id:'2',
        question:"what are they used for",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, mollitia cupiditate veritatis voluptatum quos aspernatur? Vero repellat maiores doloribus porro excepturi quasi eius repudiandae accusantium, dolore, quisquam esse, reprehenderit quidem!"
    },
        
    {
        id:'3',
        question:"Accordion as a musical instrument",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, mollitia cupiditate veritatis voluptatum quos aspernatur? Vero repellat maiores doloribus porro excepturi quasi eius repudiandae accusantium, dolore, quisquam esse, reprehenderit quidem!"
    },

    {
        id:'4',
        question:"can i create accordion compont with a diffrent framework",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, mollitia cupiditate veritatis voluptatum quos aspernatur? Vero repellat maiores doloribus porro excepturi quasi eius repudiandae accusantium, dolore, quisquam esse, reprehenderit quidem!"
    }
]

console.log("1")
const accordionWrapper=document.querySelector('.accordion');
console.log("2")

function createAccordionData(){
    console.log("insdie for loop","3")
    accordionWrapper.innerHTML=data.map(dataItem=>`
     <div class="accordion_item">
     <div class="accordion_title">
     <h3>${dataItem.question}</h3>
     <i class="fa-solid fa-arrow-up"></i>
     </div>
     <div class="accordion_content">${dataItem.answer}</div>
     </div>
    `).join('');
}
createAccordionData();

console.log("4");
const getAccordionTitles=document.querySelectorAll(".accordion_title")

console.log("5");

getAccordionTitles.forEach(currentItem=>{
    console.log('fffff',currentItem);
    currentItem.addEventListener('click',(event)=>{
         if(currentItem.classList.contains('active'))
        { currentItem.classList.remove('active');}
        else{
            let getAlreadyAddedActiveClasses=document.querySelectorAll('.active');
             console.log("getAlreadyAddedActiveClasses",getAlreadyAddedActiveClasses)
             getAlreadyAddedActiveClasses.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove('active');
             })
        currentItem.classList.add("active");
        }

    })
})


//fontawasome cdn should be included 12:54;