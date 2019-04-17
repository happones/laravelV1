<template>
  <div>
    <div class="box">
      <router-link :to="{ name: 'user' }">
        Hacia el crud
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
