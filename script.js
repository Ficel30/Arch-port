let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

const typewriter = new Typewriter(document.getElementById('changing-text'), {
  loop: true,
  delay: 75,
  deleteSpeed: 30,
});

typewriter
  .typeString('Constructor')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Modern Designer')
  .pauseFor(1500)
  .deleteAll()
  .typeString('3D Developer')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Building Enthusiast')
  .pauseFor(1500)
  .deleteAll() 
  .start();
  

  // Testimonial Carousel
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

function cycleTestimonials() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

setInterval(cycleTestimonials, 5000); // Change every 5 seconds

// Initialize EmailJS with your user ID
emailjs.init("r4GAbuno8rC7nbZ6l"); // Your public key

// Handle form submission
document.getElementById("hireForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_x.h3ll", "template_port", this)
    .then(() => {
      this.reset();
      const successBox = document.getElementById("successMessage");
      successBox.style.display = "block";
      alert("✅ Your message has been sent successfully!");
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});

  AOS.init({
    once: true,
    duration: 1200,
    easing: 'ease-in-out'
  });
