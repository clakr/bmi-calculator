<script setup lang="ts">
const props = defineProps<{ id?: string; units: string }>()
</script>

<template>
  <div>
    <input type="number" :id="props.id" />
    <span>{{ props.units }}</span>
  </div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.905rem;
  letter-spacing: -0.05rem;
  color: var(--gunmetal);
  padding: 2rem 8.3rem 2rem 2.4rem;
  border: 0.1rem solid var(--pattens-blue);
  border-radius: 1.2rem;
  width: 100%;
  z-index: 0;
}

span {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  letter-spacing: -0.05rem;
  color: var(--blue);
}
</style>
