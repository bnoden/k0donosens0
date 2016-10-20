using System;

class CustomMath {
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    // Test
    public static void test() {
        int a, b, c;
        Console.WriteLine("enter first integer: ");
            a = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("enter second integer: ");
            b = Convert.ToInt32(Console.ReadLine());
        c = multiply(a, b);
        Console.WriteLine("{0} times {1} equals {2}", a, b, c);
    }
        
    public static void Main() {
        test();
    }
}

// -_- コードの戦争 -_- bnoden