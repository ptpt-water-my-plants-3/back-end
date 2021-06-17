# back-end
Deployed url: [https://bewyp-pt.herokuapp.com/api]

# ===Register/Logging In===
####[POST] /auth/register 
```
{
  username: 'TestAcc', 
  password: 'password', 
  phonenumber: '111-111-111'
}
```

####[POST] /auth/login
phone number is okay without the dashes as well
```
{
  username: 'TestAcc', 
  password: 'password', 
  phonenumber: '111-111-111'
}
```

# ===Plant access===
####[GET] /plants
```
{
  "plant_id": 1,
  "nickname": "Sunflower",
  "species": "Helianthus annuus",
  "h20_frequency": "an inch of water per week during growing season"
}
```

####[POST] /plants

####[UPDATE] /plants/:id

####[DELETE] /plants/:id

