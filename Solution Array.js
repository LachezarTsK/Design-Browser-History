
class BrowserHistory {

    /**
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history = new Array();
        this.history.push(homepage);
        this.currentIndex = 0;
        this.maxForwardIndex = 0;
    }

    /** 
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.maxForwardIndex = ++this.currentIndex;
        this.history.length = this.currentIndex + 1;
        this.history[this.currentIndex] = url;
    }

    /** 
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.currentIndex = Math.max(this.currentIndex - steps, 0);
        return  this.history[ this.currentIndex];
    }

    /** 
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.currentIndex = Math.min(this.currentIndex + steps, this.maxForwardIndex);
        return  this.history[ this.currentIndex];
    }
}
