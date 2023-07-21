const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {dbUrl}=require('../config/dbConfig')
const {userModel} = require ('../schema/UserSchema')

mongoose.connect(dbUrl)

router.get('/',async (req,res)=>{
  try {
      let users = await userModel.find()
      res
      .status(200)
      .send({
          message:"Data Fetch Successfull",
          users
      })
  } catch (error) {
      res
      .status(500)
      .send({
              message:"Internal Server Error"
          })
  }
})

router.get('/:id',async (req,res)=>{
  try {
      let data = await userModel.findById(req.params.id)
      if(data)
      {
          res.status(200).send({
              message:"Data Fetch Successfull",
              data
          })
      }
      else
      {
          res.status(400).send({message:'Invalid Id'})
      }
  } catch (error) {
      res
      .status(500)
      .send({
              message:"Internal Server Error"
          })
  }
})

router.post('/',async(req,res)=>{
  try {
    let user = await userModel.findOne({email:req.body.email})
    if(!user)
    {
      let newUser = await userModel.create(req.body)
      res.status(200).send({message:"user created sucessfully"})
    }
    else
    {
      res.status(400).send({
          message:`user with ${req.body.email} already exists`})
      }
  } catch (error) {
      res
      .status(500)
      .send({
          message:"Internal server error",
          error : error?.message
      })
  }
 
})

router.put('/:id',async (req,res)=>{
    try {
        let user = await userModel.findById(req.params.id)
        if(user)
        {
            user.name = req.body.name
            user.email = req.body.email
            user.password = req.body.password
            await user.save()
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
                message:"Internal Server Error",
                error:error?.message
            })
    }
})

router.delete('/:id',async (req,res)=>{
  try {
      let user = await userModel.findByIdAndDelete(req.params.id)
      if(user)
      {
          res.status(200).send({
              message:"User Deleted Successfully"
          })
      }
      else
      {
          res.status(400).send({message:"Invalid User Id"})
      }
  } catch (error) {
      res
      .status(500)
      .send({
              message:"Internal Server Error"
          })
  }
})

module.exports = router