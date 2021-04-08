<template>
  <div :class="backdrop + ' has-backdrop pb-20 relative'">
    <Navbar />
    <div class="bg-white h-auto m-auto mt-12 p-10 sm:w-4/12 w-full">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Onboarding',
  computed: {
    backdrop () {
      return this.$route.path.includes('register') || this.$route.path.includes('login') ? 'has-female-model-backdrop' : 'has-male-model-backdrop'
    }
  }
}
</script>
<style>
  body
  {
    @apply font-default
  }

  .has-backdrop
  {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .has-female-model-backdrop
  {
    background-image: url('~assets/onboarding-backdrop-model.png');
  }

  .has-male-model-backdrop
  {
    background-image: url('~assets/onboarding-backdrop-model-male.png');
  }
</style>
