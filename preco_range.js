db.call_archive.find({
        preco: {
            $gte: 5000, $lte: 200000}
        }).sort({
            preco:1
        })