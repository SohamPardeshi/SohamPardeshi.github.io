<template> 
    <section class="section">
        <div class="container">
            <p class="title">Personal Projects</p>
            <div class="projects">
                <Project 
                    title="Classy"
                    href="https://uwclassy.com"
                    img="classy.svg"
                    description="Classy is a startup that focuses on giving students access to high-quality course information so they can make well-informed course decisions. I designed the structure of our NoSQL Firebase backend using structure duplication techniques to optimize our monthly cost. Along with this, I wrote Google Cloud Functions (i.e. &quot;serverless&quot; functions) to maintain eventual consistency and collect statistics. I also built some front-end components."
                />

                <Project 
                    title="TEDxUofW"
                    href="https://tedxuofw.com"
                    img="tedx.svg"
                    description="Worked with a small team of three web developers and one designer to create http://tedxuofw.com. I was responsible for building the backend and designing its REST API. Of note, I added support for secure authentication + endpoint authorization, analytics on users across multiple conferences, and integration with Stripe's payment system to reduce our conference overhead."
                />
            </div>
        </div>
    </section>
</template>

<!-- JS Scripts -->
<script>    
    import Project from '@/components/Project';
    export default {
        name: "Projects",
        components: {
            Project
        }
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    .projects {
        padding-top: 10px;
    }
</style>