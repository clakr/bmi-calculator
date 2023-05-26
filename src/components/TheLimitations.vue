<script setup lang="ts">
import gender from '@/assets/icon-gender.svg'
import age from '@/assets/icon-age.svg'
import muscle from '@/assets/icon-muscle.svg'
import pregnancy from '@/assets/icon-pregnancy.svg'
import race from '@/assets/icon-race.svg'

type Limitation = {
  icon: string
  heading: string
  description: string
}

const limitations: Limitation[] = [
  {
    icon: gender,
    heading: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
  },
  {
    icon: age,
    heading: 'Age',
    description:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
  },
  {
    icon: muscle,
    heading: 'Muscle',
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
  },
  {
    icon: pregnancy,
    heading: 'Pregnancy',
    description:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.'
  },
  {
    icon: race,
    heading: 'Race',
    description:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
  }
]
</script>

<template>
  <section>
    <div class="copywrite">
      <h3>Limitations of BMI</h3>
      <p>
        Although BMI is often a practical indicator of healthy weight, it is not suited for every
        person. Specific groups should carefully consider their BMI outcomes, and in certain cases,
        the measurement may not be beneficial to use.
      </p>
    </div>
    <div class="card" v-for="({ icon, heading, description }, index) in limitations" :key="index">
      <img :src="icon" alt="" />
      <h4>{{ heading }}</h4>
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 7.2rem 2.9rem 9.6rem 1.9rem;
  display: grid;
  row-gap: 1.6rem;
}

.copywrite {
  text-align: center;
}

h3 {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 3.52rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
}

.copywrite > p {
  margin-top: 3.2rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--dark-electric-blue);
}

.card {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2.4rem;
  background-color: var(--white);
  box-shadow: 1.6rem 3.2rem 5.6rem rgba(143, 174, 207, 0.25);
  border-radius: 1.6rem;
}

.card > img {
  width: 2.4rem;
  height: 2.4rem;
}

.card > h4 {
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  color: var(--gunmetal);
}

.card > p {
  grid-column: span 2 / span 2;
  font-size: 1.6rem;
  line-height: 150%;
  color: var(--dark-electric-blue);
}

@media screen and (min-width: 768px) {
  section {
    padding: 9.6rem 4.3rem 9.6rem 3.9rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.4rem 1.5rem;
  }

  .copywrite {
    text-align: center;
    grid-column: span 2 / span 2;
    margin-bottom: 3.2rem;
  }
  .card {
    align-items: center;
    padding: 3.2rem;
    max-width: 36.5rem;
  }

  .card:last-child {
    grid-column: span 2 / span 2;
    justify-self: center;
  }
}

@media screen and (min-width: 1440px) {
  section {
    padding: 12rem 14rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3.2rem;
    background-image: url(/pattern-curved-line-right.svg);
    background-repeat: no-repeat;
    background-position: top calc(50% - 4.5rem) left 30.5rem;
  }

  .copywrite {
    text-align: start;
    max-width: 56.4rem;
  }

  .card:nth-of-type(2) {
    transform: translateX(-10rem);
  }

  .card:is(:nth-of-type(3), :nth-of-type(5)) {
    grid-column: span 2 / span 2;
    justify-self: end;
  }

  .card:is(:nth-of-type(3), :nth-of-type(4)) {
    transform: translateX(0);
  }

  .card:is(:nth-of-type(5), :nth-of-type(6)) {
    transform: translateX(-20rem);
  }

  .card:last-child {
    grid-column: unset;
    justify-self: unset;
  }
}
</style>
