<script setup lang="ts">
import { ref } from 'vue'
import FormGroup from './FormGroup.vue'
import FormInput from './FormInput.vue'

const selected = ref('metric')

function handleClick(event: Event) {
  const { id } = event.currentTarget as HTMLInputElement
  selected.value = id
}
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
        <FormInput id="height" units="cm" />
      </FormGroup>
      <FormGroup label="Weight">
        <FormInput id="weight" units="kg" />
      </FormGroup>
    </div>

    <!-- If Imperial -->
    <div class="container--form" v-if="selected === 'imperial'">
      <FormGroup label="Height" imperial>
        <FormInput id="height" units="ft" imperial />
        <FormInput units="in" imperial />
      </FormGroup>
      <FormGroup label="Weight" imperial>
        <FormInput id="weight" units="st" imperial />
        <FormInput units="lbs" imperial />
      </FormGroup>
    </div>
    <div class="container--result">
      <span>Your BMI is...</span>
      <strong>23.4</strong>
      <p>
        Your BMI suggests you&apos;re a healthy weight. Your ideal weight is between
        <strong>63.3kgs - 85.2kgs.</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
div[class^='container--'] {
  display: flex;
}
.container--calculator {
  background-color: var(--white);
  padding: 2.4rem;
  flex-direction: column;
  row-gap: 2.4rem;
  box-shadow: 1.6rem 3.2rem 5.6rem rgba(143, 174, 207, 0.25);
  border-radius: 1.6rem;
}

h3 {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.905rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
}

.container--radio {
  justify-content: space-between;
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
}

.container--result > p {
  margin-top: 1.6rem;
  font-size: 1.4rem;
  line-height: 2.1rem;
}
</style>
