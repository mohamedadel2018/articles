<template>
    <div class="alert alert-success spacing" role="alert" v-show="show">
        {{ body }}
        <a  class="btn btn-delete" @click="hiden()">
        <i  class="fa fa-times-circle" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['message'],
        data() {
            return {
                show : false,
                body : ''
            }
        },
        created() {
            if(this.message) {
                this.flash(this.message);
            }
            window.events.$on('flash',(message) => this.flash(message))
        },
        methods: {
            flash(message) {
                this.show = true
                this.body = message

                setTimeout(() => {
                    this.hide()
                },3000)
            },
            hide() {
                this.show = false
            },
            hiden(){
                 this.hide();
            }
        }
    }
</script>

<style>
    .spacing {
        position: fixed;
        right: 100px;
        top: 50px;
        min-width: 50px;
        z-index: 9999999;
    }

</style>
