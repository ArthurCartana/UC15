
interface Produto {
    image: string
    id: string
    titulo: string
    preco: number
}


const produtos: Produto[] = [
    {
        image: "https://cdn-images.farfetch-contents.com/33/44/26/51/33442651_64163515_600.jpg",
        id: "1",
        titulo: "Camiseta",
        preco: 149.99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmDyaqbnSPdC4TiGGpJvEb3f03rWHcjzUvapz2_wBSpPQWhZcRllj5ho&s=10",
        id: "2",
        titulo: "Tênis",
        preco: 1199.99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08t3kyK05sEZTrIfjSPMzEHOf6FqD9DWRkYziOxOPSI6dkuC43adjmaQ&s=10",
        id: "3",
        titulo: "Moletom",
        preco: 899.99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_HPcDJO05eoAFU2f1Ojcv0S_6Cff0y0d8TiwETpIAcov9R6Xz5alfgU&s=10",
        id: "4",
        titulo: "Boné",
        preco: 249.99
    },
    {
        image: "https://oqvestir.fbitsstatic.net/img/p/calca-jeans-flare-cinza-187155/498379.jpg?w=1600&h=2133&v=202501231557",
        id: "5",
        titulo: "Calça",
        preco: 399.99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA06MYkrjVn_FaLz8is3YbrF1boyF0uvdI0lzt_jmtlmjVJurSBhYk6Bru&s=107",
        id: "6",
        titulo: "Óculos",
        preco: 299.99
    }
]

export default produtos