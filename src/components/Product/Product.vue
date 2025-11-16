<template>
  <div class="product">
    <img/>

    <span class="p-name">Product</span>

    <div class="p-details">
      <span>R$ 00,00</span>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.5);
  padding: 4px;

  border-radius: 5px;

  background: #F2f0EF;

  width: fit-content;

  img {
    width: 250px;
    height: 250px;
  }
}

.p-name {
  padding: 0 4px;
  font-size: 24px;
}

.p-details {
  padding: 0 4px;
}
</style>
