;(function(root, $) {

    root.utility = {
        toMonth : function(monthNo) {
            if ((monthNo>=0) &&  (monthNo <= 11))
            {
                var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                return monthNames[monthNo];
            }
            return null;
        }
    };

    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }

    if (typeof String.prototype.commafy !== 'function') {
        String.prototype.commafy = function() {
            var str = this.toString().split('.');
            if (str[0].length >= 5) {
                str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            }
            if (str[1] && str[1].length >= 5) {
                str[1] = str[1].replace(/(\d{3})/g, '$1 ');
            }
            return str.join('.');
        };
    }

    if (typeof String.prototype.uncommafy !== 'function') {
        String.prototype.uncommafy = function() {
            return this.replace(new RegExp(',| ', 'g'), '');
        };
    }

    if (typeof Date.prototype.addMonths !== 'function') {
        Date.prototype.addMonths = function(months) {
            return new Date(new Date(this).setMonth(this.getMonth()+months));
        };
    }

    if (typeof Date.prototype.getMonthName !== 'function') {
        Date.prototype.getMonthName = function() {
            return root.utility.toMonth(this.getMonth());
        };
    }
    
}(window, $))