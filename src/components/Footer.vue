<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p> I build this personal website with <a href="https://vuejs.org/">Vue</a> and <a href="https://buefy.org/">Buefy</a>. </p>

            <a class="icon" href="https://github.com/SohamPardeshi" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-2x fa-github"></i>
            </a>
            <a class="icon" href="https://www.linkedin.com/in/sohampardeshi/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-2x fa-linkedin-in"></i>
            </a>
            <a class="icon" href="https://www.facebook.com/soham.c.pardeshi/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-2x fa-facebook"></i>
            </a>            
            
            <p>© 2021</p>
        </div>
    </footer>
</template>

<!-- JS Scripts -->
<script>
    export default {
        name: "Footer",
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>    
    footer {
        padding-bottom: 48px;
    }
    
    .icon {
        margin-left: 15px;
        margin-right: 15px;
    }
</style>