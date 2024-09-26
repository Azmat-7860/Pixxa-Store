function opentab(tabIndex){
  const tabs = document.querySelectorAll(".mytab")
  const datas = document.querySelectorAll(".tabData")
 
  tabs.forEach((tab , index)=> {
    tab.classList.remove("myActive");
    datas[index].classList.remove("myActive");
  })
  tabs[tabIndex].classList.add("myActive");
  datas[tabIndex].classList.add("myActive")
  
}
document.getElementById('bookingForm').addEventListener('submit', function() {
  const inputs = this.querySelectorAll('.input-area');
  const name = inputs[0].value;
  const people = inputs[1].value;
  const dateTime = inputs[2].value;
  const message = inputs[3].value;
  const ticket = Math.floor(1000 + Math.random() * 9000);

  // Constructing the message for the modal
  const modalMessage = `
      <strong>Name:</strong> ${name} <br>
      <strong>People:</strong> ${people} <br>
      <strong>Date & Time:</strong> ${dateTime} <br>
      <strong>Message:</strong> ${message}<br>
      <strong>Your ticket :</strong> ${ticket}
  `;
  document.getElementById('modalMessage').innerHTML = modalMessage;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById('modalSheet'));
  modal.show();
});
let lastScrollTop = 0; // To track last scroll position
let rotationDegree = 0; // To keep track of the current rotation

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const barIcon = document.getElementById('barIcon');

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        rotationDegree += 5; // Increase rotation by 90 degrees
    } else {
        // Scrolling up
        rotationDegree -= 5; // Decrease rotation by 90 degrees
    }

    // Apply the rotation to the barIcon
    barIcon.style.transform = `translate(-50%, -50%) rotate(${rotationDegree}deg)`;

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
});
