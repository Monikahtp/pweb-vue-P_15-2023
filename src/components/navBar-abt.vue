<template>
    <div class="wrap bg-blue flex column">
        <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house"/></RouterLink>
        <RouterLink to="/about"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
    </div>
</template>

<script>
    export default {
        methods: {
            emitInput(){
                this.$emit('nginput')
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    position:fixed;
    gap: 40px;
    height: 100vh;
    padding: 40px 8px;
    z-index: 100;
    align-items: center;

    *{
        width: 24px;
        height: 24px;
        color: var(--putih);
        transition: 0.5s;
    }

    *:hover{
        scale: 1.1
    }
}
</style>