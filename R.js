(function(global) {
    // store for release the varible when confliction
    var _R = global.R,
    R = {};

    // referer http://javascript.about.com/library/blaravg.htm
    // 均值
    function mean(values) {
        var avg = 0,
        count = 0,
        length = values.length;

        for (var i = 0; i < length; i++) {
            var e = +values[i];
            if (!e && values[i] !== 0 && values[i] !== '0') {
                e--;
            }

            if (values[i] == e) {
                avg += e;
                count++;
            }
        }

        return avg / count;
    }
    R.mean = mean;

    // referer https://gist.github.com/caseyjustus/1166258
    // 中位数
    function median(values) {
        values.sort(function(a, b) {
            return a - b;
        });

        var half = Math.floor(values.length / 2);

        if (values.length % 2) {
            return values[half];
        } else {
            return (values[half - 1] + values[half]) / 2.0;
        }
    }
    R.median = median;

    // mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]);  
    // [6]
    // mode([1, 2, 4, 4, 1]);  
    // [1,4]
    // 众数
    function mode(values) {
        var counter = {},
        mode = [],
        max = 0;

        for (var i in values) {
            if (! (values[i] in counter)) counter[values[i]] = 0;
            counter[values[i]]++;

            if (counter[values[i]] == max) mode.push(values[i]);
            else if (counter[values[i]] > max) {
                max = counter[values[i]];
                mode = [values[i]];
            }
        }

        if (mode.length == values.length) {
            mode = [];
        }

        return mode;
    }
    R.mode = mode;

    function min(values) {
        return Math.min.apply(null, values);
    }
    // R.min = min;
    function max(values) {
        return Math.max.apply(null, values);
    }
    // R.max = max;
    // 极差
    function range(values) {
        return max(values) - min(values);
    }
    R.range = range;

    //http://bateru.com/news/2011/03/javascript-standard-deviation-variance-average-functions/
    // 标准差
    function variance(values) {
        var avg = mean(values),
        i = values.length,
        v = 0;

        while (i--) {
            v += Math.pow((values[i] - avg), 2);
        }

        v /= values.length;

        return v;
    }
    R.variance = variance;

    // 方差
    function standardDeviation(values) {
        return Math.sqrt(variance(values));
    };

    R.standardDeviation = standardDeviation;

    // expose to global namespace
    global.R = R;

})(window);