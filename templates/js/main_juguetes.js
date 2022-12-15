
if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                juguetes: [],
                errored: false,
                loading: true,
                url: "https://39077966.pythonanywhere.com/juguetes",
                     
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.juguetes = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(juguete) {
                const url = 'https://39077966.pythonanywhere.com/juguetes/' + juguete;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}