import "./rest.css";

const init_page = function () {
    nav_init();
    main_content_init();
};

const nav_init = function () {
    const nav = document.createElement("nav");
    document.body.prepend(nav);

    const ul = document.createElement("ul");
    nav.append(ul);

    let lis = ["Home", "About", "Contacts"];

    lis.forEach((li) => {
        const list_item = document.createElement("li");

        const anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.textContent = li;

        list_item.append(anchor);

        ul.append(list_item);
    });
};

const main_content_init = function () {
    const content = document.querySelector("#content");

    const img = document.createElement("img");
    img.classList.add("header_img");
    img.setAttribute("src", "https://source.unsplash.com/random/");
    img.setAttribute("alt", "");
    content.append(img);

    const main = document.createElement("section");
    main.classList.add("main");
    content.append(main);

    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Main Section header";
    main.append(header);

    const intro = document.createElement("article");
    intro.classList.add("intro");
    main.append(intro);

    for (let i = 0; i < 4; i++) {
        const paragraph = document.createElement("p");

        paragraph.textContent =
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga possimus ex eveniet eum officiis fugiat aliquid amet, ad ut veritatis animi quod! Fuga repellendus, veritatis deserunt nobis tenetur deleniti cupiditate maiores dolor quasi a ab. Dolorem cupiditate, recusandae excepturi explicabo accusamus repudiandae reprehenderit nostrum laborum nulla quo ratione fugit veritatis dolor, optio ex repellendus, quod autem? Harum accusantium adipisci aliquid quibusdam earum voluptatibus eaque asperiores. Consequuntur iure facilis animi aspernatur quisquam fugit dolorum, sunt necessitatibus natus, nihil fugiat eum ipsa perspiciatis saepe tempore officiis non nemo quasi eos sequi doloremque quaerat tenetur corrupti. Esse itaque, minima porro consequuntur tenetur eaque?";

        intro.append(paragraph);
    }
};

export { init_page };
