<template>
    <div class="wrap basic-shadow">
        <div class="input flex ycenter column">
            <h2>Write your task</h2>
            <div class="flex taskName column">
                <h4>Task Name</h4>
                <input type="text" v-model="task.title">
            </div>
            <div class="flex taskDesc column">
                <h4>Task Desc</h4>
                <textarea v-model="task.desc"></textarea>
            </div>
            <div class="flex priority column">
                <h4>Priority</h4>
                <div class="buton flex xcenter ycenter">
                    <div class="extreme-round high basic-shadow button" @click="this.task.priority='high'" :class="{'bg-red':this.task.priority==='high', 'border-red':this.task.priority!=='high'}">High</div>
                    <div class="extreme-round medium basic-shadow button" @click="this.task.priority='med'" :class="{'bg-yellow':this.task.priority==='med', 'border-yellow':this.task.priority!=='med'}">Medium</div>
                    <div class="extreme-round low basic-shadow button" @click="this.task.priority='low'" :class="{'bg-green':this.task.priority==='low', 'border-green':this.task.priority!=='low'}">Low</div>
                </div>
            </div>
            <button class="extreme-round create basic-shadow button bg-blue text-putih" @click="saveData()">Create</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task:{
                    id: null,
                    title: null,
                    desc: null,
                    priority: null,
                    status: false
                },
            }
        },
        methods: {
            saveData() {
                let taskId = 0;

                if (localStorage.length > 0) {
                    taskId = localStorage.length + 1;
                }

                this.task.id = taskId;
                localStorage.setItem(`task_${taskId}`, JSON.stringify(this.task));
                console.log(localStorage);

                // Reset the form fields
                this.task.title = null;
                this.task.desc = null;
                this.task.priority = null;
                this.task.status = false;

                this.$emit('done')
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    position: fixed;
    max-width: 250px;
    height: 100vh;
    padding: 20px 20px;
    background-color: var(--putih);
    z-index: 99;
    top: 0;
    margin-left: 45px;
}
.input{
    align-items: flex-start;
    gap: 20px;

    * {
        align-items: flex-start;
    }

    > div{
        width: 100%
    }

    input{
        width: 100%;
    }

    textarea{
        max-width: 100%;
        width: 100%;
        font-size: 12px;
        height: 150px;
    }

    h4{
        margin-bottom: 3px;
    }

    .buton{
        gap: 8px;
        font-weight: 800;
    }

    .high:hover{
        background-color: var(--red);
        color: var(--putih)
    }

    .medium:hover{
        background-color: var(--yellow);
        color: var(--putih)
    }

    .low:hover{
        background-color: var(--green);
        color: var(--putih)
    }

    .create{
        margin-top: 40px;
        border: none;
        font-size: 14px;
        padding: 8px 16px;
    }

    .priority{
        width: 100%;

        .buton{
            justify-content: space-between;
            width: 100%;
        }
    }
}

.create{
    align-self: flex-end;
}
</style>