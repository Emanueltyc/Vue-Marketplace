<script setup>
import { ref } from 'vue';
import axios from 'axios';

const categories = ref([]);

axios
  .get('http://localhost:3000/categories')
  .then(response => {
    categories.value = response.data;
  })
  .catch(error => {
    console.log(error);
  });
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="no-underline-link"><h1>Marketplace</h1></RouterLink>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item-dropdown">
          <span class="nav-link">Categories</span>

          <ul v-if="categories" class="dropdown-menu">
            <li v-for="categorie in categories" :key="categorie.categorie_id">
              <RouterLink :to="{ name: 'products', query: { cat_id: categorie.categorie_id, cat_name: categorie.name } }">{{categorie.name}}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: fit-content;

  padding: 16px 24px;
  background: #F2f0EF;
  border-bottom: 1px solid #e5e5e5;

  border-bottom: 1px solid #006437;
}

h1 {
  color: #006437;
}

.no-underline-link {
  text-decoration: none;
}

.nav-list {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: fit-content;
  justify-self: center;
}

.nav-link {
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
}


.nav-item-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;

  list-style: none;
  padding: 8px 4px;
  margin: 0;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-width: 180px;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity .2s ease, transform .2s ease;
}

.nav-item-dropdown:hover .dropdown-menu {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.dropdown-menu li {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: #444;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #f5f5f5;
}

</style>
