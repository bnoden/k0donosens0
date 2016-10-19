using System;

public class Kata {

    public static long FindNextSquare(long num) {
        const long notSq = -1;
        double sqnum = 0.0;

        for (long i = 1; ; i++)
            if (i * i >= num) {
                sqnum = i;
                break;
            }

        long nextSq = (long)sqnum * (long)sqnum;

        if (num != nextSq) nextSq = notSq;
        else nextSq = ((long)sqnum + 1) * ((long)sqnum + 1);

        return nextSq;
    }

    public static void Main() { // Test
        long[] test = { 121, 625, 114, 319225, 15241383936 };
        foreach (long bnoden in test) {
            Console.WriteLine(FindNextSquare(bnoden));
            // 144, 676, -1, 320356, 15241630849
        }

    }
}
