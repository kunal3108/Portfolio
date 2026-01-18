// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');

                              tabButtons.forEach(button => {
                                        button.addEventListener('click', function() {
                                                      const tabName = this.getAttribute('data-tab');

                                                                            // Remove active class from all buttons and contents
                                                                            tabButtons.forEach(btn => btn.classList.remove('active'));
                                                      tabContents.forEach(content => content.classList.remove('active'));

                                                                            // Add active class to clicked button and corresponding content
                                                                            this.classList.add('active');
                                                      document.getElementById(tabName).classList.add('active');
                                        });
                              });

                              // Contact form handling
                              const contactForm = document.getElementById('contactForm');
      if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                              e.preventDefault();

                                                         // Get form data
                                                         const name = document.querySelector('input[name="name"]').value;
                              const email = document.querySelector('input[name="email"]').value;
                              const phone = document.querySelector('input[name="phone"]').value;
                              const message = document.querySelector('textarea[name="message"]').value;

                                                         // Create mailto link with subject and body
                                                         const subject = `New message from ${name}`;
                              const body = `Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0D%0DMessage:%0D${message}`;

                                                         // Open email client
                                                         window.location.href = `mailto:kunalgunjantalukdar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                                                         // Reset form
                                                         contactForm.reset();
                });
      }

                              // Smooth scroll for social links
                              const socialLinks = document.querySelectorAll('.social-icon');
      socialLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                              // Allow default behavior for external links
                });
      });

                              // Add keyboard navigation for tabs
                              tabButtons.forEach((button, index) => {
                                        button.addEventListener('keydown', function(e) {
                                                      let nextIndex;
                                                      if (e.key === 'ArrowRight') {
                                                                        e.preventDefault();
                                                                        nextIndex = (index + 1) % tabButtons.length;
                                                                        tabButtons[nextIndex].focus();
                                                                        tabButtons[nextIndex].click();
                                                      } else if (e.key === 'ArrowLeft') {
                                                                        e.preventDefault();
                                                                        nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                                                                        tabButtons[nextIndex].focus();
                                                                        tabButtons[nextIndex].click();
                                                      }
                                        });
                              });
});
