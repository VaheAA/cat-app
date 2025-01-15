<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Meow Gallery</h1>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Cat Gallery. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
