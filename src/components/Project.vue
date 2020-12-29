<template> 
    <a :href="href" target="_blank" rel="noopener noreferrer">
        <div class="card-container">
            <div class="float-layout">
                <div class="card-image">
                    <img :src="require('@/assets/' + img + '')">
                    <div class="card">
                        <div class="card-title subtext">{{ title }}</div>
                        <div class="card-desc subtext">
                            {{ description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<!-- JS Scripts -->
<script>    
    export default {
        name: "Project",
        props: {
            title: String,
            href: String,
            img: String,
            description: String
        }
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    .float-layout {
        float: left;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        margin: 0;
    }

    .card-container {
        overflow: hidden;
        margin-bottom: 25px;
        
        -webkit-box-shadow: 0.1em 0.25em 0.55em -0.1em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
        box-shadow: 0.1em 0.25em 0.55em -0.1em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
        
        &:hover {
            -webkit-box-shadow: 0.1em 0.25em 1.25em -0.1em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
            box-shadow: 0.1em 0.25em 1.25em -0.1em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
        }
    }

    .card {
        color: black;
        min-height: 100%;
        width: 70%;
        float: right;
        min-height: 240px;
        padding: 25px;
        border-radius: 0;
    }

    .card-title {
        font-size: 30px;
        padding-top: 5px;
    }

    .card-desc {
        padding: 10px;
        text-align: left;
        font-size: 18px;
    }

    .card-image {
        display: flex;
        background: white;
        margin-right: -10px;
    }

    div.card-image img {
        width: 30%;
        height: 240px;
        object-fit: cover;
    }

    @media only screen and (max-width: 37.5em) {
        div.card-image img {
            width: 100%;
            height: auto;
        }
        .card-image {
            flex-direction: column;
        }
        .card {
            width: 100%;
            margin-top: -4px;
        }
    }
</style>