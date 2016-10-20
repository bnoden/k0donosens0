// https://play.golang.org/p/DNaq1nd88F

package main

import (
	"fmt"
	"math/rand"
)

func multiply(a, b int) int {
	return a * b
}

// Test
func rng() int {
	min := -15
	max := 15
	return rand.Intn(max-min) + min
}
func bnoden() {
	const TESTS int = 8
	var count int = 0

	for count < TESTS {
		rand.Seed(int64(count + 1))
		rng()
		A := (1+count*2)*2 - 15
		fmt.Print(A, " times ")
		B := (-1*TESTS%(count+1))*3 + count
		fmt.Print(B, " equals ")
		C := multiply(A, B)
		fmt.Print(C, "\n")
		count++
	}
}
func main() {
	bnoden()
}

// -_- コードの戦争 -_- bnoden
