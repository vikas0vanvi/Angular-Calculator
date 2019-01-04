function CalculatorController() {
    this.clear();
}
function contains(target, pattern) {
    var value = 0;
    pattern.forEach(function (word) {
        value = value + target.includes(word);
    });
    return (value === 1)
}

CalculatorController.prototype = {
    clear: function () {
        this.value = 0;
        this.display = "0";
        this.decimalPosition = null;
    },

    updateDisplay: function () {
        this.display = this.value.toString();
        if (!this.display.match(/\./)) {
            this.display += '.';
        }
        while (this.display.match(/\.(.*)/)[1].length + 1 < this.decimalPosition) {
            this.display += '0';
        }
    },

    key: function (key) {
        debugger
        switch (key) {
            case '.':
                this.decimalPosition = this.decimalPosition || 1;
                break;
            case '=':
                try {
                    this.display = eval(this.display);
                } catch (e) {

                }                
                    
                break;
        }
    },

    number: function (number) {
        debugger
        if (this.display.toString().charAt(0) == 0 && this.display.toString().charAt(1) !='.') {
            this.display = this.display.substr(1);
        }
        var arrDelimeters = ['+', '-', '/', '*'];
        var includeNo = true;
        for (var i = 0; i < this.display.length; i++) {
            if (contains(this.display[i], arrDelimeters)) {
                if ((this.display[i] + number).includes('0')) {
                    includeNo = false;
                }
            }
            else {
                includeNo = true;
            }

        }
        if (includeNo)
            this.display = this.display + number;
    }

};
