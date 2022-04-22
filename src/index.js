import { init_home_page } from "./init";

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
                purge_all_children(content);

                switch (index) {
                    case 0:
                        break;

                    case 1:
                        break;

                    case 2:
                        break;

                    default:
                        return "Error when switching tabs";
                }
            });
        });
    })();

    return { nav_init };
})();

init_home_page();

function purge_all_children(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}
