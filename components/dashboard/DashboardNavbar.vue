<template>
  <div>
    <Navbar />
    <div class="bg-charcoal-main text-charcoal-light-text flex flex-row justify-between items-center px-15 py-4">
      <ul class="flex flex-row justify-evenly space-x-10">
        <li>Earnings</li>
        <li>Portfolio</li>
        <li>Insights</li>
        <li>Upload new content</li>
      </ul>
      <ul class="flex flex-row justify-evenly space-x-10">
        <li>Unpaid Earnings $0.00</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardNavbar'
}
</script>
