<!-- @format -->

<template>
  <nav
    class="lg:px-16 px-6 bg-gray-300 shadow-md flex flex-wrap items-center lg:py-0 py-2"
  >
    <div class="flex-1 flex justify-between items-center">
      <Header />
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
      <svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />
    <div
      class="hidden lg:flex lg:items-center lg:w-auto w-full bg-gray-300"
      id="menu"
    >
      <nav>
        <ul
          class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0 min-h-14"
        >
          <li class="py-2 lg:py-0">
            <NuxtLink
              to="/"
              class="text-slate-900 hover:pb-1 hover:border-b-4 hover:border-red-700"
              >Home</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0">
            <NuxtLink
              to="/about"
              class="text-slate-900 hover:pb-1 hover:border-b-4 hover:border-red-700"
              >About Page</NuxtLink
            >
          </li>
          <li class="py-2 lg:py-0">
            <NuxtLink
              to="/users/2"
              class="text-slate-900 hover:pb-1 hover:border-b-4 hover:border-red-700"
              >User details</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
