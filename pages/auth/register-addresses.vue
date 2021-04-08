<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <h2 class="font-bold text-3xl text-charcoal-dark">
        Complete Account Setup
      </h2>
      <p class="text-md text-charcoal-main">
        Step {{ step }} of 2 - {{ address_type[step] }} Address
      </p>
    </div>
    <ul v-if="form.errors.any()">
      <li v-for="(error, index) in form.errors.all()" :key="index">
        {{ error.toString() }}
      </li>
    </ul>
    <form v-if="step == 1" @submit.prevent="action" @keyup="form.errors.clear()">
      <text-input v-model="form.residential_country" label="Country" type="text" placeholder="Enter your country here" />
      <text-input v-model="form.residential_address" label="Residential Address" type="text" placeholder="" />
      <text-input v-model="form.residential_state" label="State/Province" type="text" placeholder="" />
      <div class="sm:flex flex-row sm:space-x-3 justify-between">
        <text-input v-model="form.residential_postal_code" label="Postal Code" type="text" placeholder="" class="w-full sm:w-2/4" />
        <text-input v-model="form.residential_city" label="City" type="text" placeholder="" class="w-full sm:w-5/12" />
      </div>
      <div class="mb-4">
        <input id="use_one_address" v-model="form.use_one_address" type="checkbox">
        <label class="text-charcoal-light-text text-sm mb-2" for="use_one_address">
          My residential and mailing address are the same
        </label>
      </div>
      <form-button type="primary" :label="form.use_one_address === false ? 'Next' : 'Finish'" class="mb-2" />
    </form>
    <form v-if="step == 2" @submit.prevent="complete" @keyup="form.errors.clear()">
      <text-input v-model="form.billing_country" label="Country" type="text" placeholder="Enter your country here" />
      <text-input v-model="form.billing_address" label="Residential Address" type="text" placeholder="" />
      <text-input v-model="form.billing_state" label="State/Province" type="text" placeholder="" />
      <div class="sm:flex flex-row sm:space-x-3 justify-between">
        <text-input v-model="form.billing_postal_code" label="Postal Code" type="text" placeholder="" class="w-full sm:w-2/4" />
        <text-input v-model="form.billing_city" label="City" type="text" placeholder="" class="w-full sm:w-5/12" />
      </div>
      <form-button type="primary" label="Finish" class="mb-2" />
    </form>
  </div>
</template>

<router>
  {
    path: '/auth/register/complete'
  }
</router>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'onboarding',
  data () {
    return {
      form: this.$form({
        residential_country: '',
        residential_address: '',
        residential_state: '',
        residential_postal_code: '',
        residential_city: '',
        use_one_address: false,
        billing_country: '',
        billing_address: '',
        billing_state: '',
        billing_postal_code: '',
        billing_city: '',
        u: ''
      }),
      step: '1',
      address_type: {
        1: 'Residential',
        2: 'Mailing'
      }
    }
  },
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    action () {
      return this.form.use_one_address === false ? this.next : this.complete
    }
  },
  mounted () {
    this.form.u = this.user.unique_key
  },
  methods: {
    complete () {
      const response = this.form.post('register', { step: 2 })
      response.then((result) => {
        this.$router.push({
          path: '/welcome'
        })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    },
    prev () {
      this.step = 1
    },
    next () {
      this.step = 2
    }
  }
}
</script>
