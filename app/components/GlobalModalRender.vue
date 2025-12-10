<template>
  <div>
    <FlexibleModal v-if="modalState.open" v-model="modalState.open" :title="modalState.payload?.title ?? ''">
      <template #body>
        <component v-if="payloadComponent" :is="payloadComponent" v-bind="modalState.payload.props" />
        <div v-else v-html="modalState.payload?.props?.html || ''"></div>
      </template>
    </FlexibleModal>
  </div>
</template>

<script setup>
import FlexibleModal from '~/components/FlexibleModal.vue'
import { useModal } from '~/composables/useModal'
const { state: modalState, close } = useModal()
const payloadComponent = computed(() => modalState.value.payload?.component ?? null)
</script>
