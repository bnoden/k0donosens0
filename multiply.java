package multiply;

class Multiply {

    public static Double multiply(Double a, Double b) {
        return a * b;
    }
    
    // Test
    public static void bnoden() {
        Double A, B, C;
        int count = 0;
        
        while (count < 4) {
            A = rng(); B = rng(); C = multiply(A, B);
            
            System.out.println(A + " times " + B + " equals " + C);
            count++;
        }
    }
    
    public static Double rng()
    {
        Double min = -15.0, max = 15.0;
        return (min + Math.random() * (max - min + 1));
    }
        
    public static void main(String[] args) {
        bnoden();
    }
}

// -_- コードの戦争 -_- bnoden