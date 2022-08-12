let x, countDownDate, now, distance, days, hours, minutes, seconds;




let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let countDown = document.querySelector('.countDownDate');
let input = document.querySelector('.dateTime');
let form = document.querySelector('.form');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

form.addEventListener('submit', function (e) { 
      e.preventDefault();
      form.style.display = 'none';
      let d = new Date(input.value)
      let dt = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

      Toastify({
            text: "Añadido la fecha y la hora para la cuenta atras",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            
            onClick: function(){} // Callback after click
          }).showToast();

      init(dt);
})

function init(date) { 
      countDownDate = new Date(date).getTime();
      countDown.style.display = 'flex';

      days = 00
      hours = 00
      minutes = 00
      seconds = 00;



      x = setInterval(function () {


            now = new Date().getTime();
      
      
            distance = countDownDate - now;
      
      
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
            day.innerHTML = days;
            hour.innerHTML = hours;
            minute.innerHTML = minutes;
            second.innerHTML = seconds;
      
      
      
      
            if (distance < 0) {
                  clearInterval(x);
      
            }
      }, 1000);
}