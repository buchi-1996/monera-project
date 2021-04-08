<template>
  <div class="flex flex-col mb-3">
    <label :for="labelLowercase" class="text-charcoal-light-text text-sm">{{ label }}</label>
    <input :id="labelLowercase" v-model="parentValue" :type="type" :placeholder="placeholder" class="text-dark-800 focus:ring-2 border-input border h-12 outline-none px-4 rounded text-sm">
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: true,
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Enter your text here'
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelLowercase () {
      return this.label.toString().toLowerCase()
    },
    parentValue: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      }
    }
  },
  mounted () {
  }
}
</script>
