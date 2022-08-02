import View from "./View.js"
import icons from "url:../../img/icons.svg"


class PaginationView extends View {
    _parentElement = document.querySelector(".pagination");

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);;

        // page 1 and others
        if (curPage === 1 && numPages > 1)
            return this._generateMarkupButton((curPage + 1), "next");

        // last page
        if (curPage === numPages && numPages > 1)
            return this._generateMarkupButton((curPage - 1), "prev");

        // other page
        if (curPage < numPages)
            return this._generateMarkupButton((curPage + 1), "next") + this._generateMarkupButton((curPage - 1), "prev");

        // only 1 page
        if (curPage === 1)
            return "";
    }

    _generateMarkupButton(pageNum, direction) {
        if (direction === "next")
            return `
            <button data-goto=${pageNum} class="btn--inline pagination__btn--${direction}">
                <span>Page ${pageNum}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `

        if (direction === "prev")
            return `
            <button data-goto=${pageNum} class="btn--inline pagination__btn--${direction}">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${pageNum}</span>
            </button>
        `
    }

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function (e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--inline");

            if (!btn) return;

            const goToPage = +btn.dataset.goto;

            handler(goToPage);
        });
    }
}

export default new PaginationView();