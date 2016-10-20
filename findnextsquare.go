// https://play.golang.org/p/s69YwjEzRn

package main

import (
	"fmt"
	"math"
)

func FindNextSquare(num int64) int64 {
	var notSq int64 = -1
	var sqnum int64 = 0

	for i := 0.0; ; i++ {
		if math.Pow(i, 2) >= float64(num) {
			sqnum = int64(i)
			break
		}
	}

	nextSq := sqnum * sqnum

	if num != nextSq {
		nextSq = notSq
	} else {
		nextSq = (sqnum + 1) * (sqnum + 1)
	}

	return nextSq
}

// Test
func main() {
	test := []int64{121, 625, 114, 319225, 15241383936}
	//result := []int64{144, 676, -1, 320356, 15241630849}
	for i := 0; i < len(test); i++ {
		fmt.Println(FindNextSquare(test[i]))
	}
	// 144
	// 676
	// -1
	// 320356
	// 15241630849
}
// -_- コードの戦争 -_- bnoden