<script setup lang="ts">
import eat from '@/assets/icon-eating.svg'
import exercise from '@/assets/icon-exercise.svg'
import sleep from '@/assets/icon-sleep.svg'

type Benefit = {
  icon: string
  heading: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: eat,
    heading: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
  },
  {
    icon: exercise,
    heading: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
  },
  {
    icon: sleep,
    heading: 'Adequate sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
  }
]
</script>

<template>
  <section>
    <div v-for="({ icon, heading, description }, index) in benefits" :key="index">
      <img :src="icon" alt="" />
      <h4>{{ heading }}</h4>
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 7.161rem;
  padding: 5.6rem 2.896rem 5.6rem 1.904rem;
  display: grid;
  row-gap: 4rem;
  position: relative;
}

section::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(290.1deg, #d6e6fe 0%, rgba(214, 252, 254, 0) 100%);
  opacity: 0.25;
  z-index: -1;
}

div {
  display: grid;
  row-gap: 2.4rem;
}

h4 {
  margin-top: 0.8rem;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.905rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
}

p {
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--dark-electric-blue);
}
</style>
