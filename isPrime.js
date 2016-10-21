function isPrime(num) {
    var bnoden = true, sqnum = Math.sqrt(num);
    if (num%1 || num<2)
    	bnoden = false;
    for (var i = 2; i <= sqnum; i++)
        if (!(num%i))
        	bnoden = false;
    return bnoden;
}

// -_- コードの戦争 -_- bnoden