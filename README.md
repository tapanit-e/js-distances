Plain JavaScript implementation of distance metrics includes:

+ Euclidean distance and squared euclidean distace
+ Cosine distance
+ Manhattan distance
+ Hamming distance
+ Minkowski distance
+ Chebyshev distance
+ Jaccard distance
+ Levenshtein distance

### usage
```javascript
var vector = [1, 2, 3];
var comparison = [1, 3, 5];

var pow = 2;

var string = 'Hello';
var comparisonString = 'Jello';

// distances for vectors
var euclidean = distances.euclidean(vector, comparison);
var sqEuclidean = distances.sqEuclidean(vector, comparison);
var cosine = distances.cosine(vector, comparison);
var manhattan = distances.manhattan(vector, comparison);
var jaccard = distances.jaccard(vector, comparison);
var minkowski = distances.minkowski(vector, comparison, pow);
var chebyshev = distances.chebyshev(vector, comparison);

// distances for strings
var hamming = distances.hamming(string, comparisonString);
var lev = distances.levenshtein(string, comparisonString);

```
