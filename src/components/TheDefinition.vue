<script setup lang="ts">
import man from '@/assets/image-man-eating.webp'
</script>

<template>
  <section>
    <img :src="man" alt="Man eating food" />
    <div>
      <h3>What your BMI result means</h3>
      <p>
        A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight
        may lower your chances of experiencing health issues later on, such as obesity and type 2
        diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample
        fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30
        minutes daily for five days a week.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 7.2rem;
  display: grid;
  row-gap: 4.8rem;
}

div {
  padding-inline: 2.4rem 2.3rem;
}

h3 {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 3.52rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
}

p {
  margin-top: 3.2rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--dark-electric-blue);
}

@media screen and (min-width: 728px) {
  section {
    margin-top: 9.6rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 7.5rem;
    margin-right: 4.3rem;
  }

  img {
    width: 43.5rem;
    height: 41.109rem;
    object-fit: cover;
    object-position: right;
  }

  div {
    padding: 3.5rem 0 3.409rem 0;
  }
}
</style>
