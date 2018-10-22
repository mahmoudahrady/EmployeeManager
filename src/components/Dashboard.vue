<template>
    <div>
        <h3 class="mb-3">Employees</h3>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" 
            v-for="employee in employees" :key="employee.id">
                <div>
                    <span class="badge badge-warning badge-pill mr-2">{{ employee.dept}}</span>
                    {{ employee.name}}
                </div>
                <router-link :to="'/' + employee.employee_id">
                    <i class="fa fa-eye"></i>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
    import db from './firebaseInit'
    export default{
        data(){
            return{
                employees:[]
            }
        },
        created() {
            db.collection('employees').get().then
            (querySnapShots => {
                querySnapShots.forEach(doc => {
                    const data = {
                        id: doc.id,
                        employee_id: doc.data().employee_id,
                        name: doc.data().name,
                        dept: doc.data().dept,
                        position: doc.data().position,
                    }
                    this.employees.push(data)
                })
            })
        },
    }
</script>