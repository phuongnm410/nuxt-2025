<template>
    <div>
        profile
        <button class="border border-black bg-red-400" @click="showOpenModal"> Open abc component</button>
    </div>
</template>

<script setup>
import ABC from '~/components/ABC.vue';

    const {open} = useModal();

    function showOpenModal() {
        open({
            component: ABC,
            props: {
                x: 10, 
                title: "ababsbsbs",
                age: 3444
            },
            title: "Test open từ Profile"
        })
    }
</script>

<style lang="scss" scoped>
   
</style>