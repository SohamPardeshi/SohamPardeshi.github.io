<template>
        <div style="container">
            <p class="title">Audiobooks</p>
            <p>In addition to reading, I listen to audiobooks (often fantasy novels) to relax. Here are my most recent listens:</p>
            <div id="box">
                <div v-if="books != null">
                    
                    <div v-masonry="box" transition-duration="0.2s" item-selector=".item">
                        <div v-masonry-tile class="item" v-for="book in books" :key="book.asin">
                            <Book 
                                :name="book.title"
                                :author="book.authors[0].name"
                                :description="book.merchandising_summary"
                                :image="book.product_images['500']"
                            />
                        </div>
                    </div>

                    <b-loading v-model="isLoading"></b-loading>
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-8">
                    <span class="gray">I automatically scrape this data from Audible since they don't have a public API. Please don't sue me. </span>
                </div>
                <div class="column">
                    <span class="gray"> Updated at {{this.updated}}</span>
                </div>
            </div>
            
        </div>
</template>

<!-- JS Scripts -->
<script>
    import Book from '@/components/Book';
    
    export default {
        name: "Audible",
        components: {
            Book,
        },
        data: () => {
            return {
                isLoading: true,
                books: null,
                updated: null,
                box: null
            }
        },
        
        mounted () {
            this.$http.get('https://students.washington.edu/spard/personal/')
                .then((response) => {
                    this.books = response.data["items"]
                    this.updated = response.data["lastUpdated"]
                }).catch((error) => {
                    console.log(error)
                }).finally(() => {
                    this.isLoading = false;
                });
        }
        
        // merchandising_summary = description
        // authors[0].name = author
        // product_images.500 (need to change to 64?)
        // title
        // subtitle
        
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>

    #box {
        margin: 5px 0;
        padding: 15px;
        border: 1px solid lightgray;
        max-width: 732px;
    }
    
    .gray {
        color: #7f8c8d;
        font-size: 12px;
        line-height: 10px;
    }
    
    .column {
        line-height: 15px;
    }
    
    .rightpad {
        margin: 10px;
    }
    
    img {
        opacity: 0.7;
        transition: opacity 0.2s;
        -webkit-transition: opacity 0.2s;
        
        &:hover {
            opacity: 1;
        }
    }
</style>