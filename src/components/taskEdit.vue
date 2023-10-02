<template>
    <div class="wrap basic-shadow flex column">
        <p class="edit" @click="ngedit">edit</p>
        <div class="line extreme-round"></div>
        <p class="delete" @click="ngapus">delete</p>
    </div>
</template>

<script>
export default {
    methods: {
        ngedit() {
            this.$emit('ngedit')
        },
        ngapus(){
            this.$emit('ngapus')
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap{
    position: absolute;
    background-color: var(--putih);
    padding: 10px;
    opacity: 1;
    top: 42px;
    right: 0;
    margin-right: -20px;
    gap: 10px;

    .line {
        width: 100%;
        height: 1px;
        background-color: rgb(223, 223, 223);
    }
}
</style>