<template>
  <div class="relative">
    <TNavbar />
    <div class="bg-landing-body h-auto p-10 w-full">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import TNavbar from '../components/layout/TNavBar'
export default {
  name: 'Landing',
  components: { TNavbar }
}
</script>
<style>
body {
  @apply font-default;
}
</style>
