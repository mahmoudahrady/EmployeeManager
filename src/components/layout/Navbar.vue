<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/"
                class="navbar-brand mr-auto">
                Employee Manager
            </router-link>  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <router-link to="/" class="nav-item nav-link" exact active-class="active">Home</router-link>
                    <router-link to="/New" tag="button" class="ml-2 btn btn-success btn-sm" exact active-class="active">Add New Employee <i class="fa fa-plus"></i></router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
