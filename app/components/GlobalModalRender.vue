<template>
  <Teleport to="body">
    <div v-if="modal.open" class="fixed inset-0 z-50 flex justify-center items-center">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <div class="bg-white p-4 rounded shadow z-10 w-[400px]">
        <h2 class="font-bold mb-2">{{ modal.title }}</h2>

        <!-- Render component được truyền -->
        <component :is="modal.component" v-bind="modal.props" />

        <button class="mt-4 px-3 py-1 bg-gray-200 rounded" @click="close">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const { state: modal, close } = useModal()
</script>

