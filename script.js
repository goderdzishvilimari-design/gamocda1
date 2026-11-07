const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {

    if (slides.length <= 1) {
        return;
    }

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

if (slides.length > 1) {
    setInterval(nextSlide, 3000);
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-open");

    });

}


/* =========================================================
   NAVIGATION LINKS
========================================================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
         * მობილურზე მენიუს ვხურავთ
         */

        if (navigation) {
            navigation.classList.remove("mobile-open");
        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements = document.querySelectorAll(
    ".age-card, .activity-card, .stats-grid, .booking-content"
);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    /*
     * ძველ ბრაუზერში ანიმაციის ალტერნატივა
     */

    animatedElements.forEach(function (element) {

        element.style.opacity = "1";

        element.style.transform = "translateY(0)";

    });

}


/* =========================================================
   BUTTON HOVER EFFECT
========================================================= */

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-button"
);


buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-3px)";

    });


    button.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


/* =========================================================
   TOP MENU MODAL
========================================================= */

const infoModal =
    document.getElementById("infoModal");

const closeModal =
    document.getElementById("closeModal");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalItems =
    document.getElementById("modalItems");

const modalPrice =
    document.getElementById("modalPrice");


/* =========================================================
   TOP MENU INFORMATION
========================================================= */

const menuInformation = {

    birthdays: {

        icon: "🎂",

        title: "დაბადების დღის აქტივობები",

        description:
            "შექმენი დაუვიწყარი დაბადების დღე მეგობრებთან ერთად JOY Fun Center-ში.",

        items: [

            "🎮 გასართობი თამაშები",

            "🎈 ბუშტების შოუ",

            "🔥 სპეციალური შოუები",

            "🎉 სადღესასწაულო პროგრამა",

            "🍕 საკვები და სასმელი",

            "📸 ფოტოებისთვის მოწყობილი სივრცე"

        ],

        price: "ფასი: 50 ₾-დან"

    },


    activities: {

        icon: "🎮",

        title: "გასართობი აქტივობები",

        description:
            "აირჩიე შენთვის სასურველი გასართობი და გაატარე დაუვიწყარი დრო JOY Fun Center-ში.",

        items: [

            "🎮 სხვადასხვა თამაშები",

            "🥽 ვირტუალური რეალობა",

            "🔥 ცეცხლის შოუ",

            "🎈 ბუშტების შოუ",

            "🎭 სპეციალური შოუები",

            "🏎️ ატრაქციონები"

        ],

        price: "ფასი: 10 ₾-დან"

    },


    gallery: {

        icon: "📸",

        title: "გალერეა",

        description:
            "ნახე JOY Fun Center-ის მხიარული და დაუვიწყარი მომენტები.",

        items: [

            "🎂 დაბადების დღეები",

            "🎮 თამაშები",

            "🎉 ღონისძიებები",

            "📸 სტუმრების ფოტოები"

        ],

        price: "ახალი ფოტოები მალე დაემატება"

    },


    about: {

        icon: "💛",

        title: "ჩვენ შესახებ",

        description:
            "JOY Fun Center არის სივრცე, სადაც ბავშვებს, მოზარდებსა და ოჯახებს შეუძლიათ ერთად გაერთონ.",

        items: [

            "🎮 თანამედროვე გასართობი სივრცე",

            "🎂 დაბადების დღეები",

            "🎉 სპეციალური ღონისძიებები",

            "👨‍👩‍👧‍👦 გართობა ყველა ასაკისთვის"

        ],

        price: "გელოდებით JOY-ში 💛"

    },


    contact: {

        icon: "📞",

        title: "კონტაქტი",

        description:
            "დაგვიკავშირდი დამატებითი ინფორმაციისთვის ან დაჯავშნისთვის.",

        items: [

            "📞 +995 571 81 11 88",

            "📍 თბილისი: ცოტნე დადიანის ქუჩა N195",

            "📧 info@joyful.ge"

        ],

        price: "გელოდებით JOY Fun Center-ში!"

    }

};


/* =========================================================
   OPEN TOP MENU MODAL
========================================================= */

document
    .querySelectorAll(".navigation a[data-menu]")
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const menuName =
                this.dataset.menu;


            /*
             * მთავარი
             */

            if (menuName === "home") {

                if (infoModal) {
                    infoModal.classList.remove("show");
                }

                if (ageModal) {
                    ageModal.classList.remove("show");
                }

                if (activityModal) {
                    activityModal.classList.remove("show");
                }

                document.body.style.overflow = "";

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

                return;

            }


            const information =
                menuInformation[menuName];


            if (!information || !infoModal) {
                return;
            }


            if (modalIcon) {

                modalIcon.textContent =
                    information.icon;

            }


            if (modalTitle) {

                modalTitle.textContent =
                    information.title;

            }


            if (modalDescription) {

                modalDescription.textContent =
                    information.description;

            }


            if (modalPrice) {

                modalPrice.textContent =
                    "💰 " + information.price;

            }


            if (modalItems) {

                modalItems.innerHTML = "";


                information.items.forEach(function (item) {

                    const itemElement =
                        document.createElement("div");


                    itemElement.className =
                        "modal-item";


                    itemElement.textContent =
                        item;


                    modalItems.appendChild(
                        itemElement
                    );

                });

            }


            infoModal.classList.add("show");

            document.body.style.overflow = "hidden";


            if (navigation) {

                navigation.classList.remove(
                    "mobile-open"
                );

            }

        });

    });


/* =========================================================
   CLOSE TOP MENU MODAL
========================================================= */

function closeInfoModal() {

    if (!infoModal) {
        return;
    }

    infoModal.classList.remove("show");

    document.body.style.overflow = "";

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeInfoModal
    );

}


if (infoModal) {

    infoModal.addEventListener(
        "click",
        function (event) {

            if (event.target === infoModal) {

                closeInfoModal();

            }

        }
    );

}


/* =========================================================
   AGE CATEGORY INFORMATION
========================================================= */

const ageInformation = {

    kids: {

        icon: "☺",

        title: "გართობა 3–8 წლისთვის",

        description:
            "პატარებისთვის შექმნილი უსაფრთხო, მხიარული და საინტერესო გარემო.",

        items: [

            "🎈 ბუშტების შოუ",

            "🎭 საბავშვო პროგრამა",

            "🎮 ასაკისთვის შესაფერისი თამაშები",

            "🎨 შემოქმედებითი აქტივობები",

            "🎉 მხიარული ღონისძიებები",

            "📸 ფოტოებისთვის მოწყობილი სივრცე"

        ],

        price: "ფასი: 20 ₾-დან"

    },


    teens: {

        icon: "🎮",

        title: "გართობა 9–14 წლისთვის",

        description:
            "აქტიური თამაშები, თავგადასავლები და თანამედროვე გასართობი გამოცდილებები.",

        items: [

            "🎮 თანამედროვე თამაშები",

            "🥽 ვირტუალური რეალობა",

            "🔥 სპეციალური შოუები",

            "🎈 ბუშტების შოუ",

            "🏎️ ატრაქციონები",

            "🎯 გასართობი აქტივობები"

        ],

        price: "ფასი: 30 ₾-დან"

    },


    young: {

        icon: "👥",

        title: "გართობა 15–20 წლისთვის",

        description:
            "მეტი ემოცია, თავგადასავალი და აქტიური გართობა მეგობრებთან ერთად.",

        items: [

            "🥽 ვირტუალური რეალობა",

            "🔥 ცეცხლის შოუ",

            "🎮 თანამედროვე თამაშები",

            "🏎️ ატრაქციონები",

            "🎵 მუსიკა და გართობა",

            "🎉 სპეციალური ღონისძიებები"

        ],

        price: "ფასი: 40 ₾-დან"

    }

};


/* =========================================================
   AGE MODAL
========================================================= */

const ageModal =
    document.getElementById("ageModal");

const closeAgeModal =
    document.getElementById("closeAgeModal");

const ageModalIcon =
    document.getElementById("ageModalIcon");

const ageModalTitle =
    document.getElementById("ageModalTitle");

const ageModalDescription =
    document.getElementById("ageModalDescription");

const ageModalItems =
    document.getElementById("ageModalItems");

const ageModalPrice =
    document.getElementById("ageModalPrice");


/* =========================================================
   OPEN AGE MODAL
========================================================= */

document
    .querySelectorAll(".age-button")
    .forEach(function (card) {

        card.addEventListener("click", function () {

            const ageName =
                this.dataset.age;


            const information =
                ageInformation[ageName];


            if (!information || !ageModal) {
                return;
            }


            if (ageModalIcon) {

                ageModalIcon.textContent =
                    information.icon;

            }


            if (ageModalTitle) {

                ageModalTitle.textContent =
                    information.title;

            }


            if (ageModalDescription) {

                ageModalDescription.textContent =
                    information.description;

            }


            if (ageModalPrice) {

                ageModalPrice.textContent =
                    "💰 " + information.price;

            }


            if (ageModalItems) {

                ageModalItems.innerHTML = "";


                information.items.forEach(function (item) {

                    const element =
                        document.createElement("div");


                    element.className =
                        "modal-item";


                    element.textContent =
                        item;


                    ageModalItems.appendChild(
                        element
                    );

                });

            }


            ageModal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });


/* =========================================================
   CLOSE AGE MODAL
========================================================= */

function closeAgeInformation() {

    if (!ageModal) {
        return;
    }

    ageModal.classList.remove("show");

    document.body.style.overflow = "";

}


if (closeAgeModal) {

    closeAgeModal.addEventListener(
        "click",
        closeAgeInformation
    );

}


if (ageModal) {

    ageModal.addEventListener(
        "click",
        function (event) {

            if (event.target === ageModal) {

                closeAgeInformation();

            }

        }
    );

}


/* =========================================================
   ACTIVITY INFORMATION
========================================================= */

const activityInformation = {

    games: {

        icon: "🎮",

        title: "გასართობი თამაშები",

        description:
            "თანამედროვე თამაშები და გასართობი სივრცეები, სადაც მეგობრებთან ერთად დაუვიწყარ დროს გაატარებ.",

        items: [

            "🎮 სხვადასხვა გასართობი თამაშები",

            "🥽 ვირტუალური რეალობა",

            "🔥 ცეცხლის შოუ",

            "🎈 ბუშტების შოუ",

            "🎭 სპეციალური შოუები",

            "🎉 გასართობი აქტივობები"

        ],

        price: "ფასი: 10 ₾-დან"

    },


    birthday: {

        icon: "🎂",

        title: "დაბადების დღის პროგრამა",

        description:
            "შექმენი განსაკუთრებული და დაუვიწყარი დაბადების დღე მეგობრებთან ერთად JOY Fun Center-ში.",

        items: [

            "🎂 დაბადების დღის პაკეტები",

            "🎈 ბუშტების დეკორაცია",

            "🎭 ანიმატორი",

            "🎵 მუსიკა და გართობა",

            "🍕 საკვები და სასმელი",

            "📸 ფოტო და ვიდეო"

        ],

        price: "ფასი: 50 ₾-დან"

    },


    attractions: {

        icon: "🏎️",

        title: "ატრაქციონები",

        description:
            "ემოციებით სავსე ატრაქციონები და აქტივობები ბავშვებისთვის, მოზარდებისთვის და მეგობრებისთვის.",

        items: [

            "🏎️ სხვადასხვა ატრაქციონები",

            "🎮 თანამედროვე თამაშები",

            "🥽 ვირტუალური რეალობა",

            "🔥 სპეციალური შოუები",

            "🎯 გასართობი აქტივობები"

        ],

        price: "ფასი: 10 ₾-დან"

    }

};


/* =========================================================
   CREATE ACTIVITY MODAL
   -----------------------------------------
   თუ HTML-ში Activity Modal არ არსებობს,
   JavaScript თვითონ შექმნის.
========================================================= */

let activityModal =
    document.getElementById("activityModal");


if (!activityModal) {

    activityModal =
        document.createElement("div");


    activityModal.id =
        "activityModal";


    activityModal.className =
        "info-modal";


    activityModal.innerHTML = `

        <div class="info-modal-content">

            <button
                id="closeActivityModal"
                class="modal-close"
                aria-label="ფანჯრის დახურვა"
            >
                ×
            </button>

            <div
                id="activityModalIcon"
                class="modal-icon"
            >
                🎮
            </div>

            <h2 id="activityModalTitle"></h2>

            <p
                id="activityModalDescription"
                class="modal-description"
            ></p>

            <div
                id="activityModalItems"
                class="modal-items"
            ></div>

            <div
                id="activityModalPrice"
                class="modal-price"
            ></div>

        </div>

    `;


    document.body.appendChild(
        activityModal
    );

}


/* =========================================================
   ACTIVITY MODAL ELEMENTS
========================================================= */

const closeActivityModal =
    document.getElementById(
        "closeActivityModal"
    );

const activityModalIcon =
    document.getElementById(
        "activityModalIcon"
    );

const activityModalTitle =
    document.getElementById(
        "activityModalTitle"
    );

const activityModalDescription =
    document.getElementById(
        "activityModalDescription"
    );

const activityModalItems =
    document.getElementById(
        "activityModalItems"
    );

const activityModalPrice =
    document.getElementById(
        "activityModalPrice"
    );


/* =========================================================
   OPEN ACTIVITY MODAL
   -----------------------------------------
   მთელი ბარათი clickable ხდება
========================================================= */

const activityCards =
    document.querySelectorAll(
        ".activity-card"
    );


activityCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function (event) {

            /*
             * ღილაკზე დაჭერაც ბარათის გახსნას გამოიწვევს.
             * ამიტომ event-ის შეჩერება საჭირო არ არის.
             */

            const button =
                this.querySelector(
                    ".activity-more"
                );


            const activityName =
                button
                    ? button.dataset.activity
                    : this.dataset.activity;


            const information =
                activityInformation[
                    activityName
                ];


            if (!information || !activityModal) {
                return;
            }


            /* ICON */

            if (activityModalIcon) {

                activityModalIcon.textContent =
                    information.icon;

            }


            /* TITLE */

            if (activityModalTitle) {

                activityModalTitle.textContent =
                    information.title;

            }


            /* DESCRIPTION */

            if (activityModalDescription) {

                activityModalDescription.textContent =
                    information.description;

            }


            /* PRICE */

            if (activityModalPrice) {

                activityModalPrice.textContent =
                    "💰 " + information.price;

            }


            /* ITEMS */

            if (activityModalItems) {

                activityModalItems.innerHTML = "";


                information.items.forEach(
                    function (item) {

                        const itemElement =
                            document.createElement(
                                "div"
                            );


                        itemElement.className =
                            "modal-item";


                        itemElement.textContent =
                            item;


                        activityModalItems.appendChild(
                            itemElement
                        );

                    }
                );

            }


            /* OPEN */

            activityModal.classList.add(
                "show"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================================================
   CLOSE ACTIVITY MODAL
========================================================= */

function closeActivityInformation() {

    if (!activityModal) {
        return;
    }

    activityModal.classList.remove(
        "show"
    );

    document.body.style.overflow = "";

}


if (closeActivityModal) {

    closeActivityModal.addEventListener(
        "click",
        closeActivityInformation
    );

}


/* =========================================================
   CLICK OUTSIDE ACTIVITY MODAL
========================================================= */

if (activityModal) {

    activityModal.addEventListener(
        "click",
        function (event) {

            if (event.target === activityModal) {

                closeActivityInformation();

            }

        }
    );

}


/* =========================================================
   ESC — CLOSE ALL MODALS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        if (
            infoModal &&
            infoModal.classList.contains("show")
        ) {

            closeInfoModal();

        }


        if (
            ageModal &&
            ageModal.classList.contains("show")
        ) {

            closeAgeInformation();

        }


        if (
            activityModal &&
            activityModal.classList.contains("show")
        ) {

            closeActivityInformation();

        }

    }
);


/* =========================================================
   FOOTER HOME
========================================================= */

const footerHome =
    document.querySelector(
        '[data-footer-menu="home"]'
    );


if (footerHome) {

    footerHome.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   PAGE LOADED
========================================================= */

console.log(
    "JOY Fun Center website loaded successfully! 🎉"
);