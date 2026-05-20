<template>
  <main class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-9xl font-black text-slate-100 absolute -z-10 select-none">404</h1>
    <h2 class="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
    <p class="text-slate-500 mb-8 max-w-sm">
      The post or page you are looking for doesn't exist or has been moved.
    </p>
    <RouterLink
      to="/"
      class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
    >
      Return Home
    </RouterLink>
  </main>
</template>
