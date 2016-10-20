#include <iostream>
#include <random>
using namespace std;

static void bnoden();
static int rng();
static int multiply(int, int);

static int multiply(int a, int b) {
    return a * b;
}

// Test
static int rng() {
    const int MIN = -15, MAX = 15;
    std::random_device rd;
    int rr = MAX-MIN + 1;
    return rd()%rr + MIN;
}

static void bnoden() {
    const int TESTS = 4;
    int A, B, C;
    int count = 0;

    while (count < TESTS) {
        A = rng(), B = rng(), C = multiply(A, B);

        cout << A << " times " << B << " equals " << C << endl;
        count++;
    }
}

void main() {
    bnoden();
    return;
}