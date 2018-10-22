<template>
    <div>
        <h3 class="mb-3">{{ name }}</h3>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dept: {{ dept}}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Position: {{ position}}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Employee Id: {{ employee_id}}
            </li>
        </ul>
        <router-link class="btn btn-dark m-2" to="/">Back</router-link>
        <router-link class="btn btn-primary m-2" :to="'/edit/' + employee_id">Edit</router-link>
        <button class="btn btn-danger m-2" @click="deleteEmployee">Delete</button>
    </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        data(){
            return {
                name: null,
                employee_id: null,
                position: null,
                dept: null
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
            deleteEmployee(){
                if(confirm('Are you sure?')){
                    db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                    .then(querySnapShot => {
                        querySnapShot.forEach(doc => {
                           doc.ref.delete()
                           this.$router.push('/')
                        })
                    })
                }
            }
        }
    }
</script>
