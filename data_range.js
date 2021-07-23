    var start = new Date("1990-01-01")
    var end = new Date("2021-07-23")
     
    db.call_archive.find({
        ano: {
            $gte: start, $lt: end
        }
    }).sort({ano: -1}).pretty()