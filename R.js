(function(global) {
	// store for release the varible when confliction
	var _R = global.R,
		R = {};

	// referer https://gist.github.com/caseyjustus/1166258
	function median(values) { 
	    values.sort(function(a,b) {
	    	return a - b;
	    });
	 
	    var half = Math.floor(values.length/2);
	 
	    if(values.length % 2) {
	        return values[half];
	    } else {
	        return (values[half-1] + values[half]) / 2.0;
	    }
	}
	R.median = median;


	// referer http://javascript.about.com/library/blaravg.htm
	function mean(values) {
		var avg = 0,
			count = 0,
			length = values.length;

		for (var i = 0; i < length; i++) {
			var e = +values[i];
			if(!e && values[i] !== 0 && values[i] !== '0') {
				e--;
			}

			if (values[i] == e) {
				avg += e; 
				count++;
			}
		}
		
		return avg/count;
	}
	R.mean = mean;
	//	use case
	//	var ary = [5,8,2,4,11,7,3];
	//	var average = ary.avg();


	function min(values) {
		return Math.min.apply(null, values);
	}
	R.min = min;

	function max(values) {
		return Math.max.apply(null, values);
	}
	R.max = average;

	// expose to global namespace
	global.R = R;

})(window);




