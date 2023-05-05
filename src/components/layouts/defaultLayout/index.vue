<template>
  <section
    class="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden"
  >
    <default-sidebar />
    <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0">
      <default-navbar />
      <default-content />
    </main>
  </section>
</template>
