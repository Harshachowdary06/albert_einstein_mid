
fetch("https://upadhayay.github.io/db.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (db) {
        let placeholder = document.querySelector(".blogs_box");
        let out = "";
        for (let i = 0; i < db.books.length; i++) {
            out += `
             <div class="rpap_box">
                <h2>Title:${db.books[i].title}</h2>
                <p>published: ${db.books[i].published}</p>
                <p>year: ${db.books[i].year}</p>
                <a href="#" class="read_more">Read More</a>
            </div>
                    `;
        }

        placeholder.innerHTML = out;
    });
