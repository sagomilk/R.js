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



	// expose to global namespace
	global.R = R;

})(window);




