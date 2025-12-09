<template>
    <div>
        <div class="header">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/todo">Todo</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/profile">Profile</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@use "~/assets/scss/header.scss";
</style>