function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const dynamicText = document.querySelector("h1 span");
const words = ["Alaa", "Web Developer", "Ux/Ui Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();




var tabButtons = document.querySelectorAll(".tablinks");

    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".tabcontent");
        var allTabButtons = document.querySelectorAll(".tablinks");

        for (var j = 0; j < allTabContent.length; j++) {
          allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
          allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "block";
        this.classList.add("active");
      });
    }

    document.querySelector(".tablinks").click();


    function scrollToTop() {
      window.scrollTo(0, 0);
  }



//*-- contact-js --//



const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('success-message');

const sendEmail = () => {
  console.log('Sending email');

  // Get user inputs
  const userEmailInput = document.getElementById('fname');
  const userMessageInput = document.getElementById('message');
  const userSubjectInput = document.getElementById('subject');

  // Validate email input
  if (!userEmailInput.checkValidity()) {
    alert('Invalid email address');
    return;
  }

  // Get validated values
  const userEmail = userEmailInput.value;
  const userMessage = userMessageInput.value;
  const userSubject = userSubjectInput.value;

  emailjs.sendForm('service_k7vlfmc', 'template_n5f75nh', contactForm, 'hcZ7Wyuv-Wk7bJ6g8', {
    user_email: userEmail,
    user_message: userMessage,
    user_subject: userSubject
  })
    .then(
      (response) => {
        console.log('Success:', response);
        
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
      },
      (error) => {
        console.error('Error:', error);
        // Show an alert for the error
        alert('Error sending email. Please try again later.');
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
