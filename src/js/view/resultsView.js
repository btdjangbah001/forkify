import View from "./View.js";
import previewView from "./previewView.js";
import { data } from "browserslist";


class ResultsView extends View {
    _parentElement = document.querySelector(".results");
    _errorMessage = "Sorry, there are no recipes found for your query. Try again :)"
    _successMessage;

    _generateMarkup() {
        return this._data.map(result => previewView.render(result, false)).join("");
    }
}

export default new ResultsView;