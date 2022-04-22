// Functions to generate each page
import { about_init } from "./about";
import { init_home_page } from "./init";
import { contacts_init } from "./contacts";

// Manages navbar functionality
const Navbar = (function () {
    // Creates the navbar
    const nav_init = (function () {
        const nav = document.createElement("nav");
        document.body.prepend(nav);

        const ul = document.createElement("ul");
        nav.append(ul);

        // Each tab in the navbar
        let lis = ["Home", "About", "Contacts"];

        // Uses the items in the array to generate the tabs
        lis.forEach((li) => {
            const list_item = document.createElement("li");

            const anchor = document.createElement("a");
            anchor.setAttribute("href", "#");
            anchor.setAttribute("data-tab_btn", "");
            anchor.textContent = li;

            list_item.append(anchor);

            ul.append(list_item);
        });
    })();

    // Attaches event listeners to the navbar
    const tab_switching = (function () {
        // All the "buttons" in the nav
        const tabs = document.querySelectorAll("[data-tab_btn]");

        // For each tab, remove all the content in the page and generate a new based on the tab clicked
        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                Helpers.purge_all_children(content);

                switch (index) {
                    case 0:
                        init_home_page();
                        break;

                    case 1:
                        about_init();
                        break;

                    case 2:
                        contacts_init();
                        break;

                    default:
                        return "Error when switching tabs";
                }
            });
        });
    })();
})();

// Helper functions
const Helpers = (function () {
    // Removes all the children from a parent element
    const purge_all_children = function (parent) {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    return { purge_all_children };
})();

// Initiates the page
const Main = (function () {
    init_home_page();
})();
