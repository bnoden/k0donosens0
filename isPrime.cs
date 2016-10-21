using System;

class Program {
    // START Test
    static void Main() {
        for (int i = 0; i < 130; i++)
            if (isPrime(i)) Console.WriteLine(i);
    }
    // END Test

    static bool isPrime(int num) {
        bool bnoden = true;
        int sqnum = (int)Math.Sqrt(num);

        if (num % 1 != 0 || num < 2) bnoden = false;
        for (int i = 2; i <= sqnum; i++)
            if (num % i == 0) bnoden = false;
        return bnoden;
    }
}

// -_- コードの戦争 -_- bnoden