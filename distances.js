var distances = (() => {

	var sqEuclidean = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var sum = 0;
		
		for (var i = 0; i < vector.length; i++)
			sum += Math.pow(vector[i] - comparison[i], 2);
			
		return sum;
	
	};
	
	var euclidean = (vector, comparison) => {
			
		return Math.sqrt(sqEuclidean(vector, comparison));
	
	};
	
	var cosine = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
	
		var a = 0,
        	    b = 0,
        	    c = 0;

        	for (var i = 0; i < vector.length; i++) {

        		a += Math.pow(vector[i], 2);
            		b += Math.pow(comparison[i], 2);
            		c += vector[i] * comparison[i];

        	}

        	return 1 - (c / (Math.sqrt(a) * Math.sqrt(b)));
	
	};
	
	var manhattan = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
	
		var sum = 0;
		
		for (var i = 0; i < vector.length; i++)
			sum += Math.abs(vector[i] - comparison[i]);
			
		return sum;
	
	};
	
	var minkowski = (vector, comparison, pow) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var sum = 0;
		
		for (var i = 0; i < vector.length; i++)
			sum += Math.pow(Math.abs(vector[i] - comparison[i]), pow);
			
		return Math.pow(sum, 1.0 / pow);
	
	};
	
	var jaccard = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
	
		var a = new Set(vector);
		var b = new Set(comparison);
		
		var intersection = new Set([...a].filter(i => b.has(i)));
		
		return 1 - (intersection.size / (a.size + b.size - intersection.size));
	
	};
	
	var chebyshev = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var largest = 0;
		
		for (var i = 0; i < vector.length; i++) {
		
			var distAbs = Math.abs(vector[i] - comparison[i]);
			
			if (distAbs > largest)
				largest = distAbs;
			
		}
			
		return largest;
	
	};
	
	var hamming = (string, comparison) => {
	
		if (string.length !== comparison.length)
			throw new Error('String lengths are not equal');
			
		var dist = 0;
		
		for (var i = 0; i < string.length; i++)
			if (string.charAt(i) !== comparison.charAt(i))
				dist++;
				
		return dist;
	
	};
	
	var levenshtein = (string, comparison) => {
		
		if (! string.length)
			return comparison.length;
		else if (! comparison.length)
			return string.length;
			
		var cost = string.charAt(string.length - 1) === comparison.charAt(comparison.length - 1) ?
			0 : 1;
			
		return Math.min(
		
			levenshtein(string.substring(0, string.length - 1), comparison) + 1,
			levenshtein(string, comparison.substring(0, comparison.length - 1)) + 1,
			levenshtein(string.substring(0, string.length - 1), comparison.substring(0, comparison.length - 1)) + cost
		
		);

	};
	
	return {
	
		jaccard: 	jaccard,
		minkowski: 	minkowski,
		manhattan: 	manhattan,
		cosine: 	cosine,
		euclidean: 	euclidean,
		sqEuclidean: 	sqEuclidean,
		chebyshev: 	chebyshev,
		hamming: 	hamming,
		levenshtein: 	levenshtein
		
	};	


})();
