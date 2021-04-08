<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <p class="text-md text-charcoal-main">
        Welcome back
      </p>
      <h2 class="font-bold text-3xl text-charcoal-dark">
        Login to your account
      </h2>
    </div>
    <ul v-if="form.errors.any()">
      <li v-for="(error, index) in form.errors.all()" :key="index">
        {{ error }}
      </li>
    </ul>
    <form @submit.prevent="login">
      <text-input v-model="form.email" label="Email" type="email" />
      <text-input v-model="form.password" label="Password" type="password" placeholder="*******" />
      <div class="flex flex-row justify-between my-5">
        <div>
          <input id="remember_me" type="checkbox" name="remember_me">
          <label class="text-charcoal-light-text text-sm" for="remember_me">Remember me</label>
        </div>
        <nuxt-link to="/auth/forgot-password" class="text-charcoal-light-text text-sm">
          Forgot password?
        </nuxt-link>
      </div>
      <form-button type="primary" label="Login" class="mb-2" />
      <form-button icon="google" type="secondary" label="Or sign-in with google" />
    </form>
    <nuxt-link to="/auth/register" class="block text-center mt-10 mb-5">
      Don't have an account? <span class="text-pale-red">Join free today</span>
    </nuxt-link>
    <Logo class="w-full" />
  </div>
</template>

<script>
import TextInput from '~/components/TextInput.vue'
import FormButton from '~/components/FormButton.vue'
export default {
  components: { TextInput, FormButton },
  layout: 'onboarding',
  data () {
    return {
      form: this.$form({
        email: '',
        password: ''
      })
    }
  },
  methods: {
    login () {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })
    }
  }
}
</script>
