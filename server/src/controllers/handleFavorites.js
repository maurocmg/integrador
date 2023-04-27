let fav = []

const postFav = (req, res) => {
     fav.push(req.body);
     res.json(fav);
}

const deleteFav = (req, res) => {
   const { id } = req.params;
   fav = fav.filter((select) => select.id !== parseInt(id));
   res.json(fav);
};

module.exports = { postFav, deleteFav };