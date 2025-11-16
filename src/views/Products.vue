<script setup>
import { ref, watch } from 'vue';
import Product from '@/components/Product/Product.vue';
import { useRoute } from 'vue-router';

const catId = ref(0);
const catName = ref('');

const route = useRoute();

watch(route, () => {
  catId.value = route.query.cat_id;
  catName.value = route.query.cat_name;
}, { immediate: true });
</script>

<template>
  <div class="container">
    <main>
      <h2>{{catName}}</h2>

      <div class="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </main>
  </div>
</template>

<style scoped>

.container {
  padding: 16px 96px;
  gap: 8px;
  background: #F2f0EF;
}

main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  height: 100%;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
  row-gap: 8px;
}
</style>
