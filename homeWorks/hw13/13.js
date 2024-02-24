let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

// Example :
ladder.up().up().down().showStep(); // Output: 1
