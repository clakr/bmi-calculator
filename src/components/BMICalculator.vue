<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue'
import FormGroup from './FormGroup.vue'
import FormInput from './FormInput.vue'

const selected = ref('metric')

const metric = reactive({ height: '', weight: '' })
const imperial = reactive({ ft: '', in: '', st: '', lbs: '' })

const imperialHeight = computed(() => +imperial.ft * 12 + +imperial.in)
const imperialWeight = computed(() => +imperial.st * 14 + +imperial.lbs)

const bmi = computed(() =>
  selected.value === 'metric'
    ? (+metric.weight / (+metric.height * 0.01) ** 2).toFixed(1)
    : ((703 * imperialWeight.value) / imperialHeight.value ** 2).toFixed(1)
)

const MINIMUM_BMI = 18.5
const MAXIMUM_BMI = 25

function handleClick(event: Event) {
  const { id } = event.currentTarget as HTMLInputElement
  selected.value = id
}

function setInitialValues() {
  metric.height = ''
  metric.weight = ''

  imperial.ft = ''
  imperial.in = ''
  imperial.st = ''
  imperial.lbs = ''
}

function computeMetricWeight(bmi: number) {
  return `${(bmi * (+metric.height * 0.01) ** 2).toFixed(1)}kgs`
}

function computeImperialWeight(bmi: number) {
  const computedWeight = (bmi * imperialHeight.value ** 2) / 703
  return `${(computedWeight / 14).toFixed(0)}st ${(computedWeight % 14).toFixed(0)}lbs`
}

function categorizeBMI() {
  const value = +bmi.value
  if (value < 15) return 'Very Severely Underweight'
  if (value < 16 && value > 15) return 'Severely Underweight'
  if (value < 18.5 && value > 16) return 'Underweight'
  if (value < 25 && value > 18.5) return 'Normal'
  if (value < 30 && value > 25) return 'Overweight'
  if (value < 35 && value > 30) return 'Moderately Obese'
  if (value < 40 && value > 35) return 'Severely Obese'
  return 'Very Severely Obese'
}

watchEffect(() => {
  if (!selected.value) return

  setInitialValues()
})
</script>

<template>
  <div class="container--calculator">
    <h3>Enter your details below</h3>
    <div class="container--radio">
      <div class="form__group--radio">
        <input type="radio" id="metric" :checked="selected === 'metric'" @click="handleClick" />
        <label for="metric">Metric</label>
      </div>
      <div class="form__group--radio">
        <input type="radio" id="imperial" :checked="selected === 'imperial'" @click="handleClick" />
        <label for="imperial">Imperial</label>
      </div>
    </div>

    <!-- If Metric -->
    <div class="container--form" v-if="selected === 'metric'">
      <FormGroup label="Height">
        <FormInput id="height" unit="cm" v-model="metric.height" />
      </FormGroup>
      <FormGroup label="Weight">
        <FormInput id="weight" unit="kg" v-model="metric.weight" />
      </FormGroup>
    </div>

    <!-- If Imperial -->
    <div class="container--form imperial" v-if="selected === 'imperial'">
      <FormGroup label="Height" imperial>
        <FormInput id="height" unit="ft" v-model="imperial.ft" imperial />
        <FormInput unit="in" v-model="imperial.in" imperial />
      </FormGroup>
      <FormGroup label="Weight" imperial>
        <FormInput id="weight" unit="st" v-model="imperial.st" imperial />
        <FormInput unit="lbs" v-model="imperial.lbs" imperial />
      </FormGroup>
    </div>

    <!-- Result -->
    <div class="container--result" v-if="bmi !== 'NaN' && +bmi >= 10 && +bmi <= 50">
      <span>Your BMI is...</span>
      <strong>{{ bmi }}</strong>
      <p>
        Your BMI suggests you&apos;re {{ categorizeBMI() }}. Your ideal weight is between
        <strong v-if="selected === 'metric'">
          {{ computeMetricWeight(MINIMUM_BMI) }} - {{ computeMetricWeight(MAXIMUM_BMI) }}.
        </strong>
        <strong v-if="selected === 'imperial'">
          {{ computeImperialWeight(MINIMUM_BMI) }} - {{ computeImperialWeight(MAXIMUM_BMI) }}.
        </strong>
      </p>
    </div>
    <div class="container--result welcome" v-else>
      <strong>Welcome!</strong>
      <p>Enter your height and weight and you&apos;ll see your BMI result here</p>
    </div>
  </div>
</template>

<style scoped>
div[class^='container--'] {
  display: flex;
}
.container--calculator {
  margin-top: 2.4rem;
  background-color: var(--white);
  padding: 2.4rem;
  flex-direction: column;
  row-gap: 2.4rem;
  box-shadow: 1.6rem 3.2rem 5.6rem rgba(143, 174, 207, 0.25);
  border-radius: 1.6rem;
  max-width: 32.8rem;
}

h3 {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.905rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
}

div.container--radio {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form__group--radio {
  display: flex;
  align-items: center;
  column-gap: 1.8rem;
}

.form__group--radio > input {
  appearance: none;
  background-color: var(--white);
  width: 3.1rem;
  height: 3.1rem;
  border: 0.1rem solid var(--pattens-blue);
  border-radius: 100%;
  display: grid;
  place-content: center;
}

.form__group--radio > input:active {
  border-color: var(--blue);
}

.form__group--radio > input::before {
  content: '';
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  transform: scale(0);
  box-shadow: inset 1.5em 1.5em var(--blue);
}

.form__group--radio > input:checked {
  background-color: var(--input-checked);
}

.form__group--radio > input:checked::before {
  transform: scale(1);
}

.form__group--radio > label {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--gunmetal);
}

.container--form {
  flex-direction: column;
  row-gap: 1.6rem;
}

.container--result {
  background-image: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  color: var(--white);
  border-radius: 1.6rem;
  padding: 3.2rem;
  flex-direction: column;
  row-gap: 0.8rem;
}

.container--result > span {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
}

.container--result > strong {
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.28rem;
  letter-spacing: -0.05rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.container--result > p {
  margin-top: 1.6rem;
  font-size: 1.4rem;
  line-height: 2.1rem;
}

.container--result.welcome {
  display: flex;
  flex-direction: column;
  gap: 1.6rem 0;
}

.container--result.welcome > strong {
  font-size: 2.4rem;
  line-height: 2.905rem;
  letter-spacing: -0.05rem;
  order: unset;
}

.container--result.welcome > p {
  align-self: unset;
}

@media screen and (min-width: 768px) {
  .container--calculator {
    margin-top: unset;
    padding: 3.2rem;
    row-gap: 3.2rem;
    max-width: 68.6rem;
  }

  .container--form {
    flex-direction: row;
    gap: 0 2.4rem;
  }

  div.container--result {
    border-top-right-radius: 9.9rem;
    border-bottom-right-radius: 9.9rem;
    padding: 3.2rem;
    flex-direction: unset;
    gap: 0.8rem 2.4rem;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 2.4rem 1fr;
  }

  .container--result > strong {
    order: 2;
  }

  .container--result > p {
    margin-top: unset;
    grid-row: span 2 / span 2;
    align-self: center;
  }
}

@media screen and (min-width: 1440px) {
  .container--calculator {
    margin-top: unset;
    padding: 3.2rem;
    row-gap: 3.2rem;
    max-width: 56.4rem;
  }

  .imperial {
    flex-direction: column;
    gap: 2.4rem;
  }

  .container--result > strong {
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 7.04rem;
  }
}
</style>
