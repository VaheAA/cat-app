<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Cat Gallery</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="/about" class="hover:underline">About</a></li>
            <li><a href="/contact" class="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Cat Gallery. All rights reserved.</p>
        <ul class="flex space-x-4 mt-2 md:mt-0">
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
