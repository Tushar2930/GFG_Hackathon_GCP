// ----------------------------------------------- All Items -----------------------------------------------
// 1) Vegetables
const potatoVeg = [
    {id:"1", value: "P1", label: "P1"},
    {id:"2", value: "P2", label: "P2"},

]
const tomatoVeg = [
    {id:"1", value: "t1", label: "t1"},
    {id:"2", value: "t2", label: "t2"},
    {id:"3", value: "t3", label: "t3"},
]
const brinjalVeg = [
    {id:"1", value: "b1", label: "b2"},
]


const vegetables = [
    {id:"1", value: "Potato", label: "Potato", species: potatoVeg},
    {id:"2", value: "Tomato", label: "tomato", species: tomatoVeg},
    {id:"3", value: "Brinjal", label: "brinjal", species: brinjalVeg},
]



// 2) Fruits
const appleFruit = [
    {id:"1", value: "a1", label: "a1"},
]
const orangeFruit = [
    {id:"1", value: "o1", label: "o1"},
    {id:"2", value: "o2", label: "o2"},
]


const fruits = [
    {id:"1", value: "Apple", label: "apple", species: appleFruit},
    {id:"2", value: "Orange", label: "orange", species: orangeFruit},
]



// 3) Pulses
const moongPulses = [
    {id:"1", value: "m1", label: "m1"},
]
const chanePulses = [
    {id:"1", value: "c1", label: "c1"},
    {id:"1", value: "c2", label: "c2"},
]


const pulses = [
    {id:"1", value: "Moong", label: "moong", species: moongPulses},
    {id:"2", value: "Chane", label: "chane", species: chanePulses},
]



// 4) Pulses
const wheatGrains = [
    {id:"1", value: "w1", label: "w1"},
    {id:"2", value: "w2", label: "w2"},
    {id:"3", value: "w3", label: "w3"},
]


const grains = [
    {id:"1", value: "Wheat", label: "wheat", species: wheatGrains},
]




// 5) Dry fruits
const kishmishDf = [
    {id:"1", value: "kis1", label: "kis1"},
]
const kaajuDf = [
    {id:"1", value: "kj1", label: "kj1"},
]
const almondsDf = [
    {id:"1", value: "am1", label: "am1"},
]


const dry_fruits = [
    {id:"1", value: "Kishmish", label: "kishmish", species: kishmishDf},
    {id:"2", value: "Kaaju", label: "kaaju", species: kaajuDf},
    {id:"3", value: "Almonds", label: "almonds", species: almondsDf},
]



// Main Options
const sellOptions = [
    { id:"1", value: "Vegetables", label: "Vegetables" , product: vegetables},
    { id:"2", value: "Fruits", label: "Fruits", product: fruits},
    { id:"3", value: "Pulses", label: "Pulses", product: pulses},
    { id:"4", value: "Grains", label: "grains", product: grains},
    { id:"5", value: "Dry Fruits", label: "Dry Fruits", product: dry_fruits},
  ]

export default sellOptions;