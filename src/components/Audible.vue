<template>
        <div >
            <p class="title">Audible</p>
            <p>In addition to reading, I listen to audiobooks (often fantasy novels) to relax. Here are my most recent listens:</p>
            <div id="box">
                <div v-if="books != null">
                    <div v-for="index in 4" :key="'book-row' + index" class="columns">
                        
                        <Book 
                            v-for="book in books.slice((index - 1) * 5, (index - 1) * 5 + 5)" 
                            :key="book.asin"
                              
                            :name="book.title"
                            :author="book.authors[0].name"
                            :description="book.merchandising_summary"
                            :image="book.product_images['500']"
                        />
                    </div>
                    
                    <b-loading v-model="isLoading"></b-loading>
                </div>
            </div>
            <p class="gray">I automatically scrape this data from Audible.com since they don't have a public API. Please don't sue me. </p>
            <p class="gray">Updated at {{this.updated}}</p>
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
        padding: 20px;
        border: 1px solid lightgray;
        width: 720px;
    }
    
    .gray {
        color: #7f8c8d;
        font-size: 12px;
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