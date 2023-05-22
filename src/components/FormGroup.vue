<script setup lang="ts">
const props = defineProps<{ label: string; imperial?: boolean }>()
</script>

<template>
  <div :class="`form__group--${imperial ? 'imperial' : 'metric'}`">
    <label :for="props.label.toLowerCase()">{{ props.label }}</label>
    <slot />
  </div>
</template>

<style scoped>
div[class^='form__group--'] {
  display: grid;
  row-gap: 0.8rem;
}

.form__group--imperial {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1.6rem;
}

label {
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: var(--dark-electric-blue);
}

.form__group--imperial > label {
  grid-column: span 2 / span 2;
}
</style>
