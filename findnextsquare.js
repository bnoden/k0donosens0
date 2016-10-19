function FindNextSquare(sq) {
    var notSq = -1,
        sqnum = 0.0;

    for (var i = 1; i < sq; i++)
        if (i * i >= sq) {
            sqnum = i;
            break;
        }

    var nextSq = sqnum * sqnum;

    if (sq != nextSq) nextSq = notSq
    else nextSq = (sqnum + 1) * (sqnum + 1)

    return nextSq
}

// Test
var bnoden = [121, 625, 114, 319225, 15241383936];
for (let i in bnoden) console.log(FindNextSquare(bnoden[i]))

// 144
// 676
// -1
// 320356
// 15241630849

// -_- コードの戦争 -_- bnoden