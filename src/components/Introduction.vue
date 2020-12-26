<template>
    <section class="section">
        
        <!-- DESKTOP VERSION  -->
        <div class="container" >
            <div id="image-tile" class="tile is-ancestor">
                <div class="tile is-4">
                    <figure class="image">
                        <img src="@/assets/profile.jpg" alt="Soham's Profile Picture">
                    </figure>
                </div>
                <div id="about-tile" class="tile is-vertical is-parent">
                    <div id="name-tile" class="tile is-12 is-child">
                        <p id="name">Soham Pardeshi <span id="pronouns">(he/him)</span></p>
                    </div>
                    <div class="tile is-child">
                        <p class="subtitle">I am currently an undergraduate at the University of Washington studying Philosophy and Computer Science. I am most interested in thinking about classical artificial intelligence techniques and understanding their epistemological underpinnings. Recently, I have been trying to learn more about theory. I have particularly enjoyed learning about game theory incentives in computer science.</p>

                        <p class="subtitle">Some part of my week is usually dedicated to teaching. I really like giving students a great "second experience" with computer science. While in California, I helped out at <a href="https://techlab.education/">Techlab Education</a> for about three years. At the UW, I am a veteran teaching assistant for the <a href="http://courses.cs.washington.edu/courses/cse14x/ta/">CSE 14x series</a> and have also helped mentor students from high schools in the Bay Area. </p>
                        
                        <p>Contact me at <span class="blue">spard [at] cs [dot] washington [dot] edu</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- JS Scripts -->
<script>
    export default {
        name: "Introduction",
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    .section {
        @media screen and (max-width: 550px) {
            padding-top: 24px;
        }
    }
    
    #name {
        font-size: 30px;
        line-height: 40px;
        
        @media screen and (max-width: 550px) {
            font-size: 25px;
        }
    }
    #pronouns {
        margin: 5px;
        font-size: 20px;
    }
    
    #image-tile #about-tile {
        margin: 0px 25px 25px 25px;
    }
    
    .blue {
        color: rgb(52, 152, 219);
    }
</style>