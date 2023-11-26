const { paginationParseParams } = require('../../resources');
const Model = require('./model');
const data = require('../../bd.json');
const constants = require('../config/constants');
const _ = require('underscore');


exports.create = async (req, res, next) => {

  const { proveedor, direccion, ciudad, telefono, email,pago,dias } = req.body;

   try {
 
     if (proveedor && direccion && ciudad && telefono && email && pago && dias) {
      
       _.each(data, (supplier, i) => {
         if (supplier.proveedor == proveedor) {
         
           res.status(500).json({ "Error":"The Item already exists"});
           return;
         }
     });
       const id = data.length + 1;
       const newSupplier = {  id,...req.body };
       data.push(newSupplier);
       res.status(201);
       res.json({
         success: true,
         data: data,
       });
     
   }
   else {
     res.status(500).json({ "Error": "All values are required." });
   }
 
   } catch (err) {
     next(new Error(err));
   }
 };

exports.all = async (req, res, next) => {
  const { query = {} } = req;
  const { limit, page } = paginationParseParams(query);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  try {
    const suppliers = data.slice(startIndex, endIndex);
    res.json({ suppliers, total: data.length });
  } catch (err) {
    next(new Error(err));
  }
};

exports.delete = async (req, res, next) => {
  console.log( "exports");
  console.log( req.params);
   const { id } = req.params;
   try {
     _.each(data, (supplier, i) => {
      console.log( id +' '+supplier.id);
       if (supplier.id == id) {
       
           data.splice(i, 1);
           res.status(200);
       res.json({
         success: true,
         data: { "Succes": "Item succesfully errased" },
       });
       return;
          
       }
      
      
       
   });
   res.status(500).json({ "Error":"The Item couldn't be found"});
 
   } catch (err) {
     next(new Error(err));
   }
 };
