<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <div class="bg-white rounded-lg shadow-lg z-10 w-full max-w-lg p-4">

        <header class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium">{{ title }}</h3>
          <button @click="close" aria-label="Close">✕</button>
        </header>

        <div class="mb-4">
          <slot>
            <!-- default content -->
            <p>This is a simple modal</p>
          </slot>
        </div>

        <footer class="text-right">
          <button @click="close" class="px-3 py-1 bg-gray-200 rounded">Close</button>
        </footer>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Modal' }
})
const emit = defineEmits(['update:modelValue'])




function close() {
  emit('update:modelValue', false)
}
</script>
