<template>
  <button :class=" (type == 'primary' ? 'bg-approval' : 'bg-charcoal-main') + (' py-4 rounded-md text-white w-full ') + iconClasses" @click="action">
    {{ label }}
    <img v-if="icon != ''" :src="iconUrl" :alt="icon + ' icon'" class="mr-3">
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    action: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  computed: {
    iconUrl () {
      return require(`~/assets/icons/${this.icon}.png`)
    },

    iconClasses () {
      return this.icon !== '' ? 'flex flex-row-reverse items-center justify-center' : ''
    }
  }
}
</script>
