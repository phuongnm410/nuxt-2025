import { ref } from 'vue'

export type ModalPayload = {
  component?: any,     // component or string (component auto-import)
  props?: Record<string, any>,
  slots?: Record<string, any>,
  title?: string
}

export const useModal = () => {
  // global reactive state (persists across components / pages)
  const state = useState('global_modal_state', () => ({
    open: false,
    payload: null as ModalPayload | null
  }))

  function open(payload: ModalPayload) {
    state.value.payload = payload
    state.value.open = true
  }
  function close() {
    state.value.open = false
    // optionally clear payload on next tick
    setTimeout(()=> state.value.payload = null, 200)
  }
  return { state, open, close }
}
