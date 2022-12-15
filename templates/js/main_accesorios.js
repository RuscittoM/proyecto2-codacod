// accesorios
if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                accesorios: [],
                errored: false,
                loading: true,
                url: "https://39077966.pythonanywhere.com/accesorios",
                     
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.accesorios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(accesorio) {
                const url = 'https://39077966.pythonanywhere.com/accesorios/' + accesorio;
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



