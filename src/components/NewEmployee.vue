<template>
   <div>
       <form @submit.prevent="saveEmployee">
            <div class="form-group">
                <label>Employee Id</label>
                <input required type="text" class="form-control" v-model="employee_id">
            </div>
            <div class="form-group">
                <label>Name</label>
                <input required type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <label>Dept</label>
                <input required type="text" class="form-control" v-model="dept">
            </div>
            <div class="form-group">
                <label>Position</label>
                <input required type="text" class="form-control" v-model="position">
            </div>
            <button type="submit" class="btn btn-primary m-2">Submit</button>
            <button type="button" class="btn btn-dark m-2">Back</button>
        </form>
   </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        data(){
            return {
                employee_id: null,
                name: null,
                dept: null,
                position: null
            }
        },
        methods: {
            saveEmployee(){
                db.collection('employees').add({
                    employee_id: this.employee_id,
                    name: this.name,
                    dept: this.dept,
                    position: this.position
                })
                .then(docref => this.$router.push('/'))
                .catch(error => console.log(err))
            }
        }
    }
</script>

<style>
    form {
        max-width: 500px;
        margin: 20px auto;
    }
</style>

