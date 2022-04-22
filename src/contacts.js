import "./rest.css";

const contacts_init = function () {
    main_content();
};

const main_content = function () {
    const main = document.createElement("section");
    main.classList.add("main");
    content.append(main);

    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Contact me!";
    main.append(header);

    const intro = document.createElement("article");
    intro.classList.add("intro");
    main.append(intro);

    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement("p");

        paragraph.textContent =
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga possimus ex eveniet eum officiis fugiat aliquid amet, ad ut veritatis animi quod! Fuga repellendus, veritatis deserunt nobis tenetur deleniti cupiditate maiores dolor quasi a ab. Dolorem cupiditate, recusandae excepturi explicabo accusamus repudiandae reprehenderit nostrum laborum nulla quo ratione fugit veritatis dolor, optio ex repellendus, quod autem? Harum accusantium adipisci aliquid quibusdam earum voluptatibus eaque asperiores. Consequuntur iure facilis animi aspernatur quisquam fugit dolorum, sunt necessitatibus natus, nihil fugiat eum ipsa perspiciatis saepe tempore officiis non nemo quasi eos sequi doloremque quaerat tenetur corrupti. Esse itaque, minima porro consequuntur tenetur eaque?";

        intro.append(paragraph);
    }
};

export { contacts_init };
