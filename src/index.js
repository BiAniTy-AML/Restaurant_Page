import { about_init } from "./about";
import { init_home_page } from "./init";
import { contacts_init } from "./contacts";

const Navbar = (function () {
    const nav_init = (function () {
        const nav = document.createElement("nav");
        document.body.prepend(nav);

        const ul = document.createElement("ul");
        nav.append(ul);

        let lis = ["Home", "About", "Contacts"];

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

    const tab_switching = (function () {
        const tabs = document.querySelectorAll("[data-tab_btn]");

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

const Helpers = (function () {
    const purge_all_children = function (parent) {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    return { purge_all_children };
})();

const Main = (function () {
    init_home_page();
})();
