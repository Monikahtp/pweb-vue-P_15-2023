<template>
    <div class="wrap-out">
        <div class="wrap round basic-shadow flex column" :class="{
            'border-red': task.priority === 'high',
            'border-yellow': task.priority === 'med',
            'border-green': task.priority === 'low',
        }">
            <div class="title">
                <p>Judul Tugas</p>
                <input v-model="task.title" class="input-title">
            </div>
            <div class="desc">
                <p>Deskripsi Tugas</p>
                <textarea v-model="task.desc" class="input-desc"></textarea>
            </div>
            <div class="bnyk flex column">
                <h5>Priority</h5>
                <div class="buton flex xcenter ycenter">
                    <div class="extreme-round high basic-shadow button" @click="this.task.priority='high'" :class="{'bg-red':this.task.priority==='high', 'border-red':this.task.priority!=='high'}">High</div>
                    <div class="extreme-round medium basic-shadow button" @click="this.task.priority='med'" :class="{'bg-yellow':this.task.priority==='med', 'border-yellow':this.task.priority!=='med'}">Medium</div>
                    <div class="extreme-round low basic-shadow button" @click="this.task.priority='low'" :class="{'bg-green':this.task.priority==='low', 'border-green':this.task.priority!=='low'}">Low</div>
                </div>
            </div>
            <div class="buton flex xcenter yecenter save">
                <router-link to="/"><button class="extreme-round create basic-shadow button bg-blue text-putih" @click="saveData()">Create</button></router-link>
                <button class="extreme-round create basic-shadow button bg-red text-putih" @click="delData()">Delete</button>
                <button class="extreme-round create basic-shadow button bg-green text-putih" @click="doneData()">Done</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: Object
            }
        },
        methods: {
            saveData() {
                localStorage.setItem(`task_${this.task.id}`, JSON.stringify(this.task));
                this.$emit('tutup')
            },
            delData(){
                localStorage.removeItem(`task_${this.task.id}`)
                this.$emit('ngapus')
                this.$emit('tutup')
            },
            doneData(){
                this.task.status=true
                localStorage.setItem(`task_${this.task.id}`, JSON.stringify(this.task));
                this.$emit('tutup')
            },
            closeEditMenuOnClickOutside(event) {
                // Check if the click event target is not within the ".menu" element
                if (!event.target.closest('.wrap')) {
                    this.$emit('tutup')
                }
            },
        },
        mounted() {
            // Add a click event listener to the document to handle clicks outside of ".menu"
            document.addEventListener('click', this.closeEditMenuOnClickOutside);
        },
        beforeUnmount() {
            // Remove the click event listener when the component is about to be destroyed
            document.removeEventListener('click', this.closeEditMenuOnClickOutside);
        },
        created(){
            const param=this.$route.params.taskId
            if (JSON.parse(localStorage.getItem(`task_${param}`))){
                this.task = JSON.parse(localStorage.getItem(`task_${param}`));
                console.log(this.task)
            }else{
                this.$router.push("/error")
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap-out{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.334);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99
}
.wrap{
    position: absolute;
    background-color: var(--putih);
    width: 500px;
    height: 400px;
    padding: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: flex-start;
    gap: 20px;
    justify-content: space-between;

    > div{
        width: 100%;
        
        p{
            font-size: 12px;
        }
    }

    .input-title{
        font-size: 24px;
        font-weight: 700;
        width: 100%;
        border: none;
    }

    .input-desc{
        max-width: 100%;
        width: 100%;
        max-height: 100px;
        height: 100px; 
        border: none;
        font-weight:500;
    }

    .bnyk{
        width: fit-content;
        gap: 10px;
    }

    .buton{
        gap: 10px;
    }

    .save{
        justify-content: flex-end;
    }
}
</style>