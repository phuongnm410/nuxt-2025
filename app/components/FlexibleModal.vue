<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50" @click="onBackdrop"></div>

        <div :class="['bg-white rounded-lg shadow-lg z-10 p-4', sizeClass, variantClass]">
          <header class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <button @click="close">✕</button>
          </header>

          <div class="mb-4">
            <slot name="body">
              <!-- default -->
              <p>No content provided.</p>
            </slot>
          </div>

          <footer class="flex justify-end gap-2">
            <slot name="footer">
              <button @click="close" class="px-3 py-1 bg-gray-200 rounded">Close</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Modal' },
  size: { type: String, default: 'md' },     // sm | md | lg
  variant: { type: String, default: 'default' }, // default | danger | info
  closeOnBackdrop: { type: Boolean, default: true }
})
const emit = defineEmits(['update:modelValue'])

const sizeClass = computed(() => {
  return props.size === 'sm' ? 'max-w-sm' : props.size === 'lg' ? 'max-w-3xl' : 'max-w-lg'
})
const variantClass = computed(() => {
  if (props.variant === 'danger') return 'border border-red-300'
  if (props.variant === 'info') return 'border border-blue-200'
  return ''
})

function close() { emit('update:modelValue', false) }
function onBackdrop() { if (props.closeOnBackdrop) close() }
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
