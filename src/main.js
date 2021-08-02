const categories = document.getElementById("categories");
const time = document.getElementById("time");

bookmarks.forEach(c => {
    let category = document.createElement("div");
    category.classList.add("category");
    let title = document.createElement("h3");
    title.textContent = c.categoryName;
    category.appendChild(title);

    c.links.forEach(l => {
        let link = document.createElement("a");
        link.text = l.name;
        link.href = l.url;
        category.appendChild(link);
    });

    categories.appendChild(category);
});

updateTime();

setInterval(() => {
    updateTime();
}, 1000);

function updateTime() {
    time.innerText = getTimeString(new Date());

    function getTimeString(date) {

        function format(num) {
            return num.toString().padStart(2, 0);
        }
        
        return `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
    }
}