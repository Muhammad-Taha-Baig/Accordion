const accData = [
  {
    id: 1,
    question: "How do I create an account on your website?",
    answer:
      " Creating an account is easy! Just click on the 'Sign Up' button on the top right corner of the homepage and follow the prompts to enter your information.",
  },

  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      " We accept major credit cards, such as Visa, Mastercard, and American Express, as well as PayPal for online purchases.",
  },

  {
    id: 3,
    question: "Can I return an item if I'm not satisfied?",
    answer:
      "Yes, we offer a hassle-free return policy. If you're not satisfied with your purchase, simply contact our customer support within 30 days for a full refund or exchange.",
  },
];

const accordionWrapper = document.querySelector(".accordion-wrapper");

const accordion = () => {
  accordionWrapper.innerHTML = accData
    .map(
      (accDataItem) => `
    <div class="accordion-item">
          <div class="title">
            ${accDataItem.question}
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div class="content">
           <p>${accDataItem.answer}</p>
          </div>
        </div>
    `
    )
    .join(" ");

  const accordionItem = document.querySelectorAll(".accordion-item");

  accordionItem.forEach((accItem, index) => {
    let accTitle = accItem.querySelector(".title");

    accTitle.addEventListener("click", () => {
      accItem.classList.toggle("open");
      let accContent = accItem.querySelector(".content");

      if (accItem.classList.contains("open")) {
        accContent.style.height = `${accContent.scrollHeight}px`;

        accItem
          .querySelector("i")
          .classList.replace("fa-arrow-down", "fa-arrow-up");
      } else {
        accContent.style.height = "0px";

        accItem
          .querySelector("i")
          .classList.replace("fa-arrow-up", "fa-arrow-down");
      }
      removeOpen(index);
    });

    const removeOpen = (index) => {
      accordionItem.forEach((accItem2, index2) => {
        if (index2 != index) {
          accItem2.classList.remove("open");

          let accContent2 = accItem2.querySelector(".content");
          accContent2.style.height = "0px";

          accItem2
            .querySelector("i")
            .classList.replace("fa-arrow-up", "fa-arrow-down");
        }
      });
    };
  });
};

accordion();
