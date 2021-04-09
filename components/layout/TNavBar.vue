<template>
  <nav
    class="flex items-center text-white justify-between flex-wrap bg-gray-900 p-6"
  >
    <div class="flex space-x-2">
      <a href="#news">Pictures</a>
      <a href="#contact">Audios</a>
      <a href="#about">Videos</a>
    </div>
    <div class="flex space-x-2">
      <div class="flex space-x-2 mt-1">
        <a href="#contact">Explore</a>
        <a href="#about">Pricing</a>
        <hr />
      </div>
      <span class="border-l"></span>
      <div v-if="!user">
        <button class="px-2 py-1 bg-black-900">Log in</button>
        <button class="px-2 py-1 bg-red-500">Register</button>
      </div>
        <div v-else class="w-10 h-10 relative">
          <div
            class="group w-full  rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
          >
            <span
              class="hidden group-hover:table-cell text-white font-bold align-middle"
              >KR</span
            >
            <img
              src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
              alt="lovely avatar"
              class="object-cover object-center w-full visible group-hover:hidden"
            />
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['user'] // A user object
}
</script>
