<template>
    <div class="page">
        
        <div class="top-right" >
            <Toggle @toggle="handleToggle" />   
        </div>
             
        <Introduction :isDark="isDark" />
        
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
        
        <Projects />
        <Footer />
    </div>
</template>

<!-- JS Scripts -->
<script>
    import Introduction from '@/components/Introduction';
    import Footer from '@/components/Footer';
    import Timeline from '@/components/Timeline';
    import Audible from '@/components/Audible';
    import Projects from '@/components/Projects';
    import Toggle from '@/components/Toggle';

    export default {
        name: "HomePage",
        components: {
            Introduction,
            Timeline, 
            Audible,
            Projects,
            Toggle, 
            Footer,
        },
        data: () => {
            return {
                isDark: false  
            }
        },
        
        methods: {
            handleToggle(event) {
                if (event == 'dark') {
                    this.isDark = true;
                } else {
                    this.isDark = false;
                }
            }
        }
    };
</script>

<!-- SCSS Styles -->
<style lang="scss">
    @import "@/styles/_main.scss";
    .page {
        
        @media screen and (min-width: 1250px) {
            padding-top: 0px;
        }
        
        min-height: 100vh;
        padding-top: 40px; 
    }
    
    .top-right {
        position: absolute;
        top: 15px;
        right: 20px;
    }
    
    .toggle-parent {
        padding: 20px 20px 0 20px;
    }
    
    .dark-navbar {
        padding-top: 5px;
    }
    
    .toggle input[type=checkbox]:checked + .check {
        background: lightgray;
        
        &:hover {
            background: lightgray;
        }
    }
    
    .is
    
    .title {        
        font-size: 30px;
        font-weight: 400;
        line-height: 40px;
        
        @media screen and (max-width: 550px) {
            font-size: 25px;
        }
    }
</style>
