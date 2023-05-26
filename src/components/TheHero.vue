<script setup lang="ts">
import logo from '@/assets/logo.svg'
import BMICalculator from '@/components/BMICalculator.vue'
</script>

<template>
  <section>
    <div>
      <img :src="logo" alt="Logo" />
      <h2>Body Mass Index Calculator</h2>
      <p>
        Better understand your weight in relation to your height using our body mass index (BM)
        calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable
        starting point to evaluate your overall health and well-being.
      </p>
    </div>
    <BMICalculator />
  </section>
</template>

<style scoped>
section {
  padding: 3.2rem 2.3rem 0 2.4rem;
  display: grid;
  row-gap: 4.8rem;
  position: relative;
}

section::before {
  content: '';
  background-image: linear-gradient(290.1deg, #d6e6fe 0%, rgba(214, 252, 254, 0) 100%);
  border-radius: 0 0 3.5rem 3.5rem;
  position: absolute;
  inset: 0;
  height: 64rem;
  z-index: -1;
}

div {
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
}

img {
  margin-inline: auto;
  width: 3.672rem;
  height: 3.672rem;
}

h2 {
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.28rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
  text-align: center;
}

p {
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  color: var(--dark-electric-blue);
}

@media screen and (min-width: 768px) {
  section {
    padding: 3.4rem 4.3rem 0 3.9rem;
    row-gap: 4rem;
  }

  h2 {
    max-width: 12ch;
    align-self: center;
  }
}
</style>
