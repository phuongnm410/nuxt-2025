
export const useModal = () => {
    
  const state = useState('global_modal_state', () => ({
    open: false,
    component: null,
    props: {},
    title: ""
  }))

  function open(payload: { component: any, props?: any, title?: string }) {
    state.value.open = true
    state.value.component = payload.component
    state.value.props = payload.props || {}
    state.value.title = payload.title || ""
  }

  function close() {
    state.value.open = false
  }

  return { state, open, close }
}
