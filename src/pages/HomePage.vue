<template>
    <div class="page">
        <Introduction />
        
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-5">
                        <Timeline />
                    </div>
                    <div class="column">
                        <Audible/>
                    </div>
                </div>
            </div>
        </section>  
        
        
        
        <section class="section">
            <div class="container">
                <p class="title">Personal Projects</p>
                <h2 class="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>
        
        
        <Footer />
    </div>
</template>

<!-- JS Scripts -->
<script>
    import Introduction from '@/components/Introduction';
    import Footer from '@/components/Footer';
    import Timeline from '@/components/Timeline';
    import Audible from '@/components/Audible';

    export default {
        name: "HomePage",
        components: {
            Introduction,
            Timeline, 
            Audible,
            Footer,
        }
    };
</script>

<!-- SCSS Styles -->
<style lang="scss">
    @import "@/styles/_main.scss";
    .page {
        
        @media screen and (min-width: 1250px) {
            padding-top: 40px;
        }
        
        min-height: 100vh;
        // background-color: rgb(245, 248, 250);
    }
    
    .title {        
        font-size: 30px;
        font-weight: 400;
        line-height: 40px;
        
        @media screen and (max-width: 550px) {
            font-size: 25px;
        }
    }
</style>
