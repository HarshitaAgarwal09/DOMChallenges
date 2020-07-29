function Star(el, count, callback) {
    this.el = document.querySelector(el);
    this.count = count;
    this.callback = callback;
    this.active = -1;

    this.init();
    this.bindEvents();
}

Star.prototype.init = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= this.count; i++) {
        var iele = document.createElement("i");
        iele.classList.add("fa");
        iele.classList.add("fa-star-o");
        iele.dataset["ratingValue"] = i;
        fragment.appendChild(iele);
    }
    this.el.appendChild(fragment);
}

Star.prototype.fill = function (activeVal) {
    for (var i = 1; i <= this.count; i++) {
        if (i <= activeVal) {
            document.querySelector("i[data-rating-value='" + i + "']").classList.add("fa-star");
            document.querySelector("i[data-rating-value='" + i + "']").classList.remove("fa-star-o");

        } else {
            document.querySelector("i[data-rating-value='" + i + "']").classList.remove("fa-star");
            document.querySelector("i[data-rating-value='" + i + "']").classList.add("fa-star-o");
        }
    }
}

Star.prototype.bindEvents = function () {
    this.el.addEventListener('mouseover', (e) => {
        this.fill(e.target.dataset["ratingValue"]);
    })
    this.el.addEventListener('click', (e) => {
        this.active = e.target.dataset["ratingValue"];
        document.querySelector('#starValue').innerHTML = this.active;
    })
    this.el.addEventListener('mouseout', (e) => {
        this.fill(this.active);
    })

}

new Star("#star", 5, function () { });