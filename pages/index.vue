<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <ShowNumberArea :number="showNumber.show" />
        <ButtonsArea @onClick="handleClick" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ShowNumber {
  show: string
  calc: string[]
}
// interface calcFlag {
//   ac: boolean,
//   pluMin: boolean
//   percent: boolean
//   divide: boolean
//   times: boolean
//   minus: boolean
//   plus: boolean
//   equal: boolean
// }

interface CalcStatus {
  isCalc: boolean
  calcType: string
}
enum Calc {
  plus = 'plus',
  minus = 'minus',
  times = 'times',
  divide = 'divide',
}
const showNumber = reactive<ShowNumber>({
  show: '0',
  calc: ['0'],
})
const firstNumber = ref<number>(0)
const numbersKeys = ref([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'ten',
])

// const calcFlag = reactive<calcFlag>({
//   ac: false,
//   pluMin: false,
//   percent: false,
//   divide: false,
//   times: false,
//   minus: false,
//   plus: false,
//   equal: false,
// })
// const isCalc = ref(false)
const calcStatus = reactive<CalcStatus>({ isCalc: false, calcType: '' })

const calcs = ref<string[]>([
  'ac',
  'plu-min',
  'percent',
  'divide',
  'times',
  'minus',
  'plus',
  'equal',
])

const handleClick = (e: string = '0') => {
  if (calcs.value.includes(e)) handleCalc(e)
  if (numbersKeys.value.includes(e)) {
    handleNumber(e)
    showNumber.show = showNumber.calc.join('')
  }
}

const handleCalc = (key: string): void => {
  switch (key) {
    case 'ac':
      showNumber.calc = ['0']
      calcStatus.calcType = ''
      firstNumber.value = 0
      showNumber.show = showNumber.calc.join('')
      break
    case 'plu-min':
      if (calcStatus.isCalc) {
        showNumber.calc = ['0']
        showNumber.show = '0'
        calcStatus.isCalc = false
      }
      if (showNumber.show === '0') {
        showNumber.calc[0] !== '-'
          ? showNumber.calc.unshift('-')
          : showNumber.calc.shift()
        showNumber.show = showNumber.calc.join('')
      } else {
        const ary: string[] = showNumber.show.split('')
        ary[0] !== '-' ? ary.unshift('-') : ary.shift()
        showNumber.show = ary.join('')
      }
      break
    case 'percent':
      break
    case 'divide':
      calcStatus.calcType = Calc.divide
     saveFirstNumber()
      break
    case 'times':
      calcStatus.calcType = Calc.times
     saveFirstNumber()
      break
    case 'minus':
      calcStatus.calcType = Calc.minus
      saveFirstNumber()
      break
    case 'plus':
      calcStatus.calcType = Calc.plus
      saveFirstNumber()
      break
    case 'equal': {
      const answer = calc(
        firstNumber.value,
        Number(showNumber.show),
        calcStatus.calcType
      )
      showNumber.show = String(answer)
      calcStatus.calcType = ''
      firstNumber.value = 0
      break
    }
    default:
      break
  }
}

const saveFirstNumber = () : void => {
   if (firstNumber.value === 0) {
        firstNumber.value = Number(showNumber.show)
      }
    calcStatus.isCalc = true
}

const handleNumber = (key: string): void => {
  if (calcStatus.isCalc) {
    showNumber.calc = ['0']
    calcStatus.isCalc = false
  }
  const num: string = key === 'ten' ? '.' : key
  if (
    showNumber.calc[0] === '0' &&
    showNumber.calc.length === 1 &&
    num !== '.'
  ) {
    showNumber.calc.shift()
  }
  showNumber.calc.push(num)
}

const calc = (
  firstNumber: number,
  secondNumber: number,
  calcType: string
): number => {
  switch (calcType) {
    case 'plus':
      return firstNumber + secondNumber
    case 'minus':
      return firstNumber - secondNumber
    case 'times':
      return firstNumber * secondNumber
    case 'divide':
      return firstNumber / secondNumber
    default:
      return 0
  }
}
</script>
