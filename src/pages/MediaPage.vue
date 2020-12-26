<template>
    <div class="page">
        <section class="section">
            <div class="container">
                <Message person="soham" />
            </div>
        </section>
    </div>
</template>

<!-- JS Scripts -->
<script>
    import Message from '@/components/Message';
    export default {
        name: "HomePage",

        components: {
            Message
        },

        data() {
            return {

            };
        }
    };
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    @import "@/styles/_main.scss";
    .page {
        padding-top: 80px;
        min-height: 100%;
        background-color: rgb(240, 245, 250);
    }
</style>
