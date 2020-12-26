<template>
    <div>
        <p class="title">Education</p>
        <section class="timeline">
            <ul>
                <li v-for="(info, index) in timeline_data" v-bind:key="index">
                    <span></span>
                    <div>{{ info.school }}</div>
                    <div>{{ info.address }}</div>
                    <div>{{ info.course }}</div>
                    <div>{{ info.minor }}</div>
                    <div class="year">
                        <span>{{ info.yearEnd }}</span>
                        <span>{{ info.yearStart }}</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<!-- JS Scripts -->
<script>
    export default {
        name: "Timeline",
        data: () => {
            return {
                timeline_data: [
                    {
                        "school":"University of Washington",
                        "address":"Seattle, Washington",
                        "course":"M.S. in Computer Science",
                        "yearStart":"2021",
                        "yearEnd":"2022"
                    },
                    {
                        "school":"University of Washington",
                        "address":"Seattle, Washington",
                        "course":"B.S. in Computer Science",
                        "minor": "Minor: Philosophy, Math",
                        "yearStart":"2017",
                        "yearEnd":"2021"
                    },
                    {
                        "school":"Homestead High School",
                        "address":"Sunnyvale, California",
                        "yearStart":"2013",
                        "yearEnd":"2017"
                    }
                ]
            }
        }
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>    
$font-stack: 'Source Sans Pro', sans-serif;
$font-color: #000;
$bg-color: #fff;
$dark-blue: #fff;
$light-blue: #7957d5;
    
.title {        
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;

    @media screen and (max-width: 550px) {
        font-size: 25px;
    }
}

@mixin clearfix {
    content: '';
    position: absolute;
    top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
    border: $thickness solid $color;
    border-radius: $radius;
}


.timeline {
    padding: 0 75px;
    ul {
        position: relative;
        &::before {
            @include clearfix();
            height: 100%;
        }
    }
    li {
        position: relative;
        margin: 60px 35px;
        width: 100%;
        list-style: none;
        line-height: 25px;
        &>span {
            @include clearfix();
            left: -25px;
            height: 110%;
            @include set-border(1px, gray, none);
        }
        &>span::before, &>span::after {
            @include clearfix();
            width: 14px; height: 14px;
            @include set-border(1px, lightgray, 50%);
            left: -7px;
            background: $light-blue;
        }
        &>span::before {
            top: -15px;
        }
        &>span::after {
            top: 100%;
        }
        div {
            &:nth-child(2) {
                font-size: 1.2em;
            }
            &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                font-size: 1em;
                font-style: italic;
                color: darken($font-color, 25%);
            }
        }
        .year span {
            position: absolute;
            font-size: 1em;
            left: -85px;
            width: 40px;
            text-align: right;
            color: black;
            &:first-child {
                top: -20px;
            }
            &:last-child {
                top: 100%;
            }
        }
    }
}
</style>