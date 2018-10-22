<template>
   <div>
       <form @submit.prevent="updateEmployee">
            <div class="form-group">
                <label>Employee Id</label>
                <input disabled required type="text" class="form-control" v-model="employee_id">
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
            <router-link class="btn btn-dark m-2" to="/">Back</router-link>
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
        beforeRouteEnter (to, from, next) {
            db.collection('employees').where('employee_id', '==', to.params.employee_id).get()
            .then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    next(vm => {
                        vm.employee_id = doc.data().employee_id
                        vm.name = doc.data().name
                        vm.dept = doc.data().dept
                        vm.position = doc.data().position
                    })
                })
            })
        },
        watch:{
            '$route': 'fetchData'
        },
        methods: {
            fetchData(){
                db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        this.employee_id = doc.data().employee_id
                        this.name = doc.data().name
                        this.dept = doc.data().dept
                        this.position = doc.data().position
                    })
                })
            },
            updateEmployee(){
                db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapShot => {
                    querySnapShot.forEach(doc => {
                        doc.ref.update({
                           employee_id: this.employee_id,
                            name: this.name,
                            dept: this.dept,
                            position: this.position
                        })
                        this.$router.push('/' + this.employee_id)
                    })
                })
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

