// // question 6

// var index = 'coin'

// var obj = {
//     a: {
//         'animal': 'rooster',
//         'coin': 'penny'
//     },
//     b: {
//         'animal': 'hen',
//         'coin': 'dime'
//     }
// }

// console.log(obj.a.animal + " " + obj.b[index])

//question 7

var x = {
    value: 0,
    
    plus: function () {
        this.value = this.value + 1
    },

    minus: function () {
        this.value = this.value - 1
    },

    display: function () {
        console.log('value: ', this.value)
    }
}

x.plus()
x.plus()
x.minus()
x.plus()
x.display()
