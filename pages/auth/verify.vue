<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <img src="~assets/icons/envelope-open.svg" alt="">
      <h2 class="font-bold text-3xl text-charcoal-dark">
        Please check your email
      </h2>
      <p class="leading-4 text-center text-charcoal-light-4 text-sm">
        Your account has been succesfully created. Please check <a :href="'mailto:' + email" class="text-pale-red underline">
          {{ email }}</a> for a verification link.
      </p>
      <nuxt-link to="/" class="py-4 rounded-md text-white w-full text-center my-4 bg-red-main">
        Back to home
      </nuxt-link>
    </div>
    <Logo class="w-full" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'onboarding',
  auth: false,
  computed: {
    ...mapGetters('user/register', [
      'email',
      'password'
    ])
  },
  mounted () {
    this.login()
  },
  methods: {
    login () {
      // We need to authenticate the user in order to access protected routes like /verify-email
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password
        }
      })
    }
  }
}
</script>
