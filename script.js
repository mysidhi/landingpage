let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(i){
  index = i;
  slides.style.transform = `translateX(-${i*100}%)`;
  dots.forEach(d=>d.classList.remove("active"));
  dots[i].classList.add("active");
}
function nextSlide(){showSlide((index+1)%dots.length)}
function prevSlide(){showSlide((index-1+dots.length)%dots.length)}
function goSlide(i){showSlide(i)}
setInterval(nextSlide,4000);

function openBooking(place){
  document.getElementById("bookingModal").style.display="flex";
  document.getElementById("placeName").innerText="Book Trip to "+place;
}
function closeBooking(){
  document.getElementById("bookingModal").style.display="none";
}
