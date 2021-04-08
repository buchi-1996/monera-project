<template>
  <div class="relative">
    <Navbar />
    <div class="bg-landing-body h-auto p-10 w-full">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Landing'
}
</script>
<style>
  body
  {
    @apply font-default
  }
</style>
