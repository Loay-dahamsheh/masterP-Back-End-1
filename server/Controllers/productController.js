const { func } = require('joi');
const productModel = require('../Models/productModel');




async function getallP (req, res){
    try{
        const getP = await productModel.GETP();
        const modifiedResponse = {
            products: getP.map(item => {
              return {
                id: item.id,
                name: item.product_name,
                details: item.product_detail,
                category: item.category,
                images: JSON.parse(item.image), 
                price: item.price,
                counts: item.counts,
                rate : item.rate
              };
            })
          };
        res.status(200).json(modifiedResponse);
    }catch(error){
        res.status(500).json(error);
    }
};


//filter by id
async function getproduct(req, res) {
    try {
        // console.log(process.env.DB_PASSWORD);
      const products  = await productModel.products(req.params.id);
      const modifiedResponse = {
        product: products.map(item => {
          return {
            id: item.id,
            name: item.product_name,
            details: item.product_detail,
            category: item.category,
            images: JSON.parse(item.image), 
            price: item.price,
            counts: item.counts
          };
        })
      };
      res.status(200).json(modifiedResponse);
      
    } catch (error) {
      // Respond with an error message
      res.status(401).json("error in product controller");
    }
  }




module.exports ={
    getallP,
    getproduct
};