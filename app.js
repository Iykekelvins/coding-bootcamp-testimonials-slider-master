const testimonials = [
    {
        name:'Tanya Sinclair',
        quote:` “I’ve been interested in coding for a while but never taken the jump, until now. 
                        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                        excited about the future.” `,
        job:'UX Engineer',
        img:'./images/image-tanya.jpg',
    },
    {
        name:'John Tarkpor',
        quote: `“If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.” `,
        job:'Junior Front-end Developer',
        img:'./images/image-john.jpg',
    },
]

const name = document.querySelector(".name");
const job = document.querySelector(".job");
const quote = document.querySelector(".quote");
const image = document.querySelector(".image");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentPerson = 0;

window.addEventListener('DOMContentLoaded', function(){
    showTestimonial();
})

function showTestimonial(){
    const person = testimonials[currentPerson];
    name.textContent = person.name;
    job.textContent = person.job;
    quote.textContent = person.quote;
    image.src = person.img;
}

nextBtn.addEventListener('click', function(){
    currentPerson++;
    if(currentPerson > testimonials.length - 1){
        currentPerson = 0;
    }
    showTestimonial();
})

prevBtn.addEventListener('click', function(){
    currentPerson--;
    if(currentPerson < 0){
        currentPerson = testimonials.length - 1;
    }
    showTestimonial();
})