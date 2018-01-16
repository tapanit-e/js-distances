var distances = (() => {

	var euclidean = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var sum = 0;	
			
		for (var i = 0; i < vector.length; i++)
			sum += Math.pow(vector[i] - comparison[i], 2);
			
		return Math.sqrt(sum);
	
	};
	
	var sqEuclidean = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var sum = 0;
		
		for (var i = 0; i < vector.length; i++)
			sum += Math.pow(vector[i] - comparison[i], 2);
			
		return sum;
	
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
	
		var a = new Set(input[i]);
		var b = new Set(output[i]);
		
		var intersection = new Set([...a].filter(i => b.has(i)));
		
		return 1 - (intersection.size / (a.size + b.size - intersection.size));
	
	};
	
	var chebyshev = (vector, comparison) => {
	
		if (vector.length !== comparison.length)
			throw new Error('Vector lengths are not equal');
			
		var largest = 0;
		
		for (var i = 0; i < vector.length; i++)
			if (Math.abs(vector[i] - comparison[i]) > largest)
				largest = Math.abs(vector[i] - comparison[i]);
				
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
	
	return {
	
		jaccard: jaccard,
		minkowski: minkowski,
		manhattan: manhattan,
		cosine: cosine,
		euclidean: euclidean,
		sqEuclidean: sqEuclidean,
		chebyshev: chebyshev,
		hamming: hamming
	
	};	


})();
