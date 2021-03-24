let fs = require('fs')
let metadataParser = require('markdown-yaml-metadata-parser')

getFileWithoutExtension = (fileName) => fileName.split(".")[0]

fs.readdir("src/assets/posts", async (err, fileNames) => {
    let arrayPosts = []
    await fileNames.filter(fileName => fileName != "posts.json").map(fileName => {
        let bufferedData = fs.readFileSync(`src/assets/posts/${fileName}`)
        stringData = bufferedData.toString('utf-8')
        let metadata = metadataParser(stringData)
        let postObjectMetadata = metadata.metadata
        postObjectMetadata["path"] = `assets/posts/${fileName}`
        postObjectMetadata["fileName"] = getFileWithoutExtension(fileName)
        arrayPosts.push(postObjectMetadata)
    })
    fs.writeFile("src/assets/posts/posts.json", JSON.stringify(arrayPosts), _ => console.log("Escrito"))
})

