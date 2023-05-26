<script setup lang="ts">
import logo from '@/assets/logo.svg'
import BMICalculator from '@/components/BMICalculator.vue'
</script>

<template>
  <section>
    <img :src="logo" alt="Logo" />
    <div>
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
  row-gap: 2.4rem;
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

img {
  margin-inline: auto;
  width: 3.672rem;
  height: 3.672rem;
}

div {
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
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
  color: var(--dark-electric-blue);
  text-align: center;
}

@media screen and (min-width: 768px) {
  section {
    padding: 3.4rem 4.3rem 0 3.9rem;
    row-gap: 4rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  h2 {
    max-width: 12ch;
    align-self: center;
  }
}

@media screen and (min-width: 1440px) {
  section {
    padding: 7.4rem 14rem 0 14rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.8rem 3.2rem;
  }

  section::before {
    inset: 0 auto auto 2.4rem;
    width: 97.8rem;
    height: 73.7rem;
  }

  img {
    grid-column: span 2 / span 2;
    margin-inline: unset;
    width: 6.4rem;
    height: 6.4rem;
  }

  div {
    row-gap: 3.5rem;
    text-align: start;
    align-self: center;
  }

  h2 {
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 7.04rem;
    align-self: unset;
    text-align: start;
  }

  p {
    max-width: 46.5rem;
    text-align: start;
  }
}
</style>
